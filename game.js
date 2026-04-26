'use strict';

/* CARD_KEYS and CARD_ART are defined in cards.js */

const THEMES = ['purple', 'warm', 'neon'];

const BACK_SYMBOL = { purple: '✦', warm: '🔮', neon: '⚡' };

/* ===================================================
   STATE
=================================================== */
let S = {
  theme:      'purple',
  difficulty: 'easy',
  cards:      [],
  flipped:    [],
  matched:    0,
  moves:      0,
  seconds:    0,
  timerID:    null,
  locked:     false,
};

/* ===================================================
   AUDIO  (Web Audio API — no files needed)
=================================================== */
let _ctx = null;
function ctx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

function beep(freq, type, startDelay, dur, vol) {
  try {
    const c = ctx();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    const t = c.currentTime + (startDelay || 0);
    gain.gain.setValueAtTime(vol || 0.28, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  } catch (e) { /* Safari may require user gesture first */ }
}

const SFX = {
  flip()    { beep(640, 'sine', 0, 0.09, 0.22); },
  match()   {
    [523, 659, 784].forEach((f, i) => beep(f, 'sine', i * 0.1, 0.22, 0.28));
  },
  noMatch() {
    beep(220, 'sawtooth', 0,    0.18, 0.16);
    beep(160, 'sawtooth', 0.12, 0.14, 0.1);
  },
  victory() {
    [523, 659, 784, 1047, 1319].forEach((f, i) =>
      beep(f, 'sine', i * 0.13, 0.45, 0.32));
  },
};

/* ===================================================
   THEME MANAGEMENT
=================================================== */
function applyTheme(theme) {
  THEMES.forEach(t => document.body.classList.remove('theme-' + t));
  document.body.classList.add('theme-' + theme);
}

function selectTheme(theme) {
  S.theme = theme;
  document.querySelectorAll('.theme-btn').forEach(b =>
    b.classList.toggle('selected', b.dataset.theme === theme));
}

function selectDiff(diff) {
  S.difficulty = diff;
  document.querySelectorAll('.diff-btn').forEach(b =>
    b.classList.toggle('selected', b.dataset.diff === diff));
}

function openThemePanel() {
  document.getElementById('theme-panel').classList.remove('hidden');
}

function closeThemePanel(e) {
  if (e && e.target !== document.getElementById('theme-panel')) return;
  document.getElementById('theme-panel').classList.add('hidden');
}

function switchThemeTo(theme) {
  S.theme = theme;
  applyTheme(theme);
  refreshBackSymbols();
  document.getElementById('theme-panel').classList.add('hidden');
}

function refreshBackSymbols() {
  const sym = BACK_SYMBOL[S.theme] || '✦';
  document.querySelectorAll('.back-sym').forEach(el => el.textContent = sym);
}

/* ===================================================
   GAME SETUP
=================================================== */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startGame() {
  /* Resolve theme */
  let theme = S.theme === 'random'
    ? THEMES[Math.floor(Math.random() * THEMES.length)]
    : S.theme;
  S.theme = theme;
  applyTheme(theme);

  /* Build deck */
  const keys = CARD_KEYS[S.difficulty];
  S.cards = shuffle([...keys, ...keys]).map((key, id) => ({
    id, key, flipped: false, matched: false,
  }));

  S.flipped  = [];
  S.matched  = 0;
  S.moves    = 0;
  S.seconds  = 0;
  S.locked   = false;

  /* Switch screen */
  document.getElementById('start-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
  document.getElementById('victory-screen').classList.add('hidden');
  document.getElementById('theme-panel').classList.add('hidden');

  renderGrid();
  updateHUD();
  startTimer();
}

/* ===================================================
   GRID RENDERING
=================================================== */
function calcCardSize() {
  const header = document.querySelector('.game-header');
  const headerH = header ? header.offsetHeight : 66;
  const pad = 20;
  const gap = 10;
  const cols = 4;
  const rows = S.difficulty === 'easy' ? 3 : 4;

  const availW = window.innerWidth  - pad * 2;
  const availH = window.innerHeight - headerH - pad * 2;

  /* Max card width from horizontal space */
  const wFromW = (availW - gap * (cols - 1)) / cols;
  /* Max card width from vertical space (aspect 3:4, so height = w*4/3) */
  const wFromH = (availH - gap * (rows - 1)) / rows * (3 / 4);

  return Math.floor(Math.min(wFromW, wFromH));
}

function renderGrid() {
  const grid = document.getElementById('card-grid');
  const cardW = calcCardSize();
  const gap   = 10;
  const cols  = 4;

  grid.style.gridTemplateColumns = `repeat(${cols}, ${cardW}px)`;
  grid.style.gap = gap + 'px';
  grid.innerHTML = '';

  const sym = BACK_SYMBOL[S.theme] || '✦';

  S.cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.id = card.id;
    el.style.width  = cardW + 'px';
    el.style.height = Math.round(cardW * 4 / 3) + 'px';
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-face back"><span class="back-sym">${sym}</span></div>
        <div class="card-face front">${CARD_ART[card.key] || ''}</div>
      </div>`;
    bindCardTap(el, card.id);
    grid.appendChild(el);
  });

  /* Update pairs counter total */
  document.getElementById('pairs').textContent =
    `0/${S.cards.length / 2}`;
}

/* ===================================================
   GAME LOGIC
=================================================== */

/* 消除 iOS 300ms 延迟：优先用 touchstart，回退到 click */
function bindCardTap(el, id) {
  let didTouch = false;
  el.addEventListener('touchstart', (e) => {
    e.preventDefault();
    didTouch = true;
    handleCardClick(id);
  }, { passive: false });
  el.addEventListener('click', () => {
    if (didTouch) { didTouch = false; return; }
    handleCardClick(id);
  });
}

function handleCardClick(id) {
  if (S.locked) return;
  const card = S.cards[id];
  if (card.flipped || card.matched) return;
  if (S.flipped.length >= 2) return;

  card.flipped = true;
  cardEl(id).classList.add('flipped');
  SFX.flip();

  S.flipped.push(id);
  if (S.flipped.length === 2) {
    S.moves++;
    updateHUD();
    checkMatch();
  }
}

function checkMatch() {
  const [a, b] = S.flipped;
  if (S.cards[a].key === S.cards[b].key) {
    /* Hit */
    setTimeout(() => {
      S.cards[a].matched = S.cards[b].matched = true;
      cardEl(a).classList.add('matched');
      cardEl(b).classList.add('matched');
      S.matched++;
      S.flipped = [];
      updateHUD();
      SFX.match();

      if (S.matched === S.cards.length / 2) {
        setTimeout(showVictory, 650);
      }
    }, 280);
  } else {
    /* Miss */
    S.locked = true;
    cardEl(a).classList.add('wrong');
    cardEl(b).classList.add('wrong');
    SFX.noMatch();

    setTimeout(() => {
      S.cards[a].flipped = S.cards[b].flipped = false;
      cardEl(a).classList.remove('flipped', 'wrong');
      cardEl(b).classList.remove('flipped', 'wrong');
      S.flipped = [];
      S.locked  = false;
    }, 920);
  }
}

function cardEl(id) {
  return document.querySelector(`.card[data-id="${id}"]`);
}

/* ===================================================
   TIMER & HUD
=================================================== */
function startTimer() {
  stopTimer();
  S.timerID = setInterval(() => { S.seconds++; updateHUD(); }, 1000);
}

function stopTimer() {
  clearInterval(S.timerID);
  S.timerID = null;
}

function updateHUD() {
  const m = Math.floor(S.seconds / 60);
  const s = (S.seconds % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${m}:${s}`;
  document.getElementById('moves').textContent  = S.moves;
  document.getElementById('pairs').textContent  =
    `${S.matched}/${S.cards.length / 2}`;
}

/* ===================================================
   VICTORY
=================================================== */
function starRating() {
  const ratio = S.moves / (S.cards.length / 2);
  if (ratio <= 1.6) return 3;
  if (ratio <= 2.6) return 2;
  return 1;
}

function showVictory() {
  stopTimer();
  SFX.victory();

  const m  = Math.floor(S.seconds / 60);
  const s  = (S.seconds % 60).toString().padStart(2, '0');
  const n  = starRating();
  const EMOJIS_WIN = ['🏆', '🌟', '🎉'];

  document.getElementById('final-time').textContent  = `${m}:${s}`;
  document.getElementById('final-moves').textContent = S.moves + ' flips';
  document.getElementById('v-stars').textContent     = '⭐'.repeat(n) + '☆'.repeat(3 - n);
  document.getElementById('v-emoji').textContent     = EMOJIS_WIN[3 - n];

  document.getElementById('victory-screen').classList.remove('hidden');
  launchConfetti();
}

function restartGame() {
  stopConfetti();
  document.getElementById('victory-screen').classList.add('hidden');
  startGame();
}

function goHome() {
  stopConfetti();
  stopTimer();
  document.getElementById('victory-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('start-screen').classList.add('active');
}

/* ===================================================
   CONFETTI
=================================================== */
const CONFETTI_COLORS = [
  '#ff6b6b','#ffd93d','#6bcb77','#4d96ff',
  '#ff6bcd','#ff9f43','#00d2d3','#cc88ff','#a29bfe',
];

let _confettiRAF = null;
let _particles   = [];

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx2 = canvas.getContext('2d');

  _particles = Array.from({ length: 120 }, () => ({
    x:  Math.random() * canvas.width,
    y:  -10 - Math.random() * 60,
    w:  Math.random() * 10 + 6,
    h:  Math.random() * 6  + 4,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    vx: (Math.random() - 0.5) * 3.5,
    vy: Math.random() * 3 + 1.5,
    angle: Math.random() * Math.PI * 2,
    spin:  (Math.random() - 0.5) * 0.18,
    grav:  0.06,
  }));

  function frame() {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    _particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.grav;
      p.angle += p.spin;
      ctx2.save();
      ctx2.translate(p.x, p.y);
      ctx2.rotate(p.angle);
      ctx2.fillStyle = p.color;
      ctx2.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx2.restore();
    });
    _particles = _particles.filter(p => p.y < canvas.height + 20);
    if (_particles.length > 0) {
      _confettiRAF = requestAnimationFrame(frame);
    } else {
      ctx2.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  cancelAnimationFrame(_confettiRAF);
  _confettiRAF = requestAnimationFrame(frame);
}

function stopConfetti() {
  cancelAnimationFrame(_confettiRAF);
  _confettiRAF = null;
  _particles   = [];
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

/* ===================================================
   RESIZE HANDLER
=================================================== */
window.addEventListener('resize', () => {
  if (document.getElementById('game-screen').classList.contains('active')) {
    renderGrid();
    /* Re-mark flipped/matched cards */
    S.cards.forEach(c => {
      const el = cardEl(c.id);
      if (!el) return;
      if (c.matched) { el.classList.add('flipped', 'matched'); }
      else if (c.flipped) { el.classList.add('flipped'); }
    });
    updateHUD();
  }
});
