'use strict';

/* ===================================================
   CARD ART  —  Dark Fantasy SVG Illustrations
   Each SVG: viewBox 0 0 300 400, self-contained
=================================================== */

const CARD_KEYS = {
  easy:   ['ghost','witch','castle','zombie','elephant','spider'],
  normal: ['ghost','witch','castle','zombie','elephant','spider','vampire','pumpkin'],
};

const CARD_ART = {

/* ─────────────────────────────────────────────────
   GHOST  — narrow top, wide flowing bottom
───────────────────────────────────────────────── */
ghost: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="gBg" cx="50%" cy="38%" r="60%">
    <stop offset="0%" stop-color="#001a3a"/>
    <stop offset="55%" stop-color="#000a1e"/>
    <stop offset="100%" stop-color="#000308"/>
  </radialGradient>
  <radialGradient id="gAura" cx="50%" cy="50%" r="55%">
    <stop offset="0%" stop-color="#1144aa" stop-opacity="0.65"/>
    <stop offset="100%" stop-color="#001133" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gBody" cx="36%" cy="18%" r="72%">
    <stop offset="0%" stop-color="#f0f8ff"/>
    <stop offset="30%" stop-color="#bbddff"/>
    <stop offset="65%" stop-color="#5599cc"/>
    <stop offset="100%" stop-color="#1a4477"/>
  </radialGradient>
  <radialGradient id="gInner" cx="40%" cy="22%" r="60%">
    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
    <stop offset="60%" stop-color="#99ccff" stop-opacity="0.4"/>
    <stop offset="100%" stop-color="#2255aa" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#3366cc" stop-opacity="0.8"/>
    <stop offset="100%" stop-color="#1133aa" stop-opacity="0"/>
  </radialGradient>
  <filter id="gb10"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="gb5"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="gb18"><feGaussianBlur stdDeviation="18" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>

<rect width="300" height="400" fill="url(#gBg)"/>
<ellipse cx="150" cy="200" rx="155" ry="200" fill="url(#gAura)"/>

<!-- stars -->
<g opacity="0.55" fill="#aaccff">
  <circle cx="28" cy="38" r="1.1"/><circle cx="272" cy="55" r="1.3"/>
  <circle cx="50" cy="120" r="0.8"/><circle cx="258" cy="140" r="1"/>
  <circle cx="18" cy="200" r="0.9"/><circle cx="282" cy="215" r="1"/>
  <circle cx="42" cy="320" r="0.8"/><circle cx="262" cy="300" r="1.1"/>
  <circle cx="88" cy="25" r="0.8"/><circle cx="212" cy="22" r="1"/>
</g>

<!-- body glow bloom -->
<ellipse cx="150" cy="210" rx="95" ry="125" fill="#2255aa" filter="url(#gb18)" opacity="0.7"/>

<!-- GHOST BODY — narrow head, wide flowing shroud -->
<!-- Outer shape -->
<path d="
  M 150,58
  C 112,58 97,82 97,118
  C 97,148 78,182 67,228
  C 56,274 56,312 63,348
  Q 72,378 93,392
  Q 115,378 118,352
  Q 134,322 150,352
  Q 166,322 182,352
  Q 185,378 207,392
  Q 228,378 237,348
  C 244,312 244,274 233,228
  C 222,182 203,148 203,118
  C 203,82 188,58 150,58 Z"
  fill="url(#gBody)" opacity="0.94"/>

<!-- Inner glow layer (translucency) -->
<path d="
  M 150,65
  C 118,65 105,86 105,118
  C 105,145 88,176 78,218
  C 68,260 69,298 75,333
  Q 82,360 100,372
  Q 118,362 120,340
  Q 136,312 150,340
  Q 164,312 180,340
  Q 182,362 200,372
  Q 218,360 225,333
  C 231,298 232,260 222,218
  C 212,176 195,145 195,118
  C 195,86 182,65 150,65 Z"
  fill="url(#gInner)" opacity="0.6"/>

<!-- Rim light — left edge -->
<path d="M 97,118 C 78,182 56,274 63,348 Q 72,378 88,392 L 93,392 Q 78,378 68,348 C 61,312 62,274 73,228 C 84,182 103,148 103,118 C 103,88 116,66 148,62 C 118,63 97,84 97,118 Z" fill="#88ccff" opacity="0.45"/>
<!-- Rim light — right edge -->
<path d="M 203,118 C 222,182 244,274 237,348 Q 228,378 212,392 L 207,392 Q 222,378 232,348 C 239,312 238,274 227,228 C 216,182 197,148 197,118 C 197,88 184,66 152,62 C 182,63 203,84 203,118 Z" fill="#6699ee" opacity="0.38"/>

<!-- Spectral chains -->
<g opacity="0.38" filter="url(#gb5)" stroke="#4488cc" stroke-width="2.5" fill="none">
  <path d="M 105,255 Q 90,275 96,302 Q 102,314 116,307 Q 124,295 114,284 Q 106,274 113,262"/>
  <path d="M 195,255 Q 210,275 204,302 Q 198,314 184,307 Q 176,295 186,284 Q 194,274 187,262"/>
  <circle cx="110" cy="284" r="5.5"/>
  <circle cx="190" cy="284" r="5.5"/>
</g>

<!-- EYES — hollow haunted -->
<ellipse cx="122" cy="182" rx="24" ry="20" fill="#001428"/>
<ellipse cx="178" cy="182" rx="24" ry="20" fill="#001428"/>
<ellipse cx="122" cy="182" rx="19" ry="15" fill="#000819" filter="url(#gb5)"/>
<ellipse cx="178" cy="182" rx="19" ry="15" fill="#000819" filter="url(#gb5)"/>
<!-- Soul glimmer -->
<ellipse cx="118" cy="177" rx="5" ry="4" fill="#2244aa" opacity="0.75" filter="url(#gb5)"/>
<ellipse cx="174" cy="177" rx="5" ry="4" fill="#2244aa" opacity="0.75" filter="url(#gb5)"/>

<!-- MOUTH — open scream O -->
<ellipse cx="150" cy="232" rx="22" ry="18" fill="#001428"/>
<ellipse cx="150" cy="232" rx="17" ry="13" fill="#000512"/>
<!-- Teeth top -->
<rect x="135" y="221" width="9" height="10" rx="2" fill="#ddeeff" opacity="0.75"/>
<rect x="147" y="218" width="10" height="13" rx="2" fill="#eef5ff" opacity="0.85"/>
<rect x="161" y="221" width="9" height="10" rx="2" fill="#ddeeff" opacity="0.75"/>
<!-- Inner throat glow -->
<ellipse cx="150" cy="236" rx="14" ry="8" fill="#002255" opacity="0.8"/>

<!-- Floating orbs -->
<g filter="url(#gb5)">
  <circle cx="48" cy="178" r="8" fill="#3366bb" opacity="0.65"/>
  <circle cx="48" cy="178" r="5" fill="#88ccff" opacity="0.9"/>
  <circle cx="252" cy="205" r="7" fill="#2255aa" opacity="0.65"/>
  <circle cx="252" cy="205" r="4.5" fill="#77bbff" opacity="0.9"/>
  <circle cx="55" cy="310" r="6" fill="#1a44aa" opacity="0.6"/>
  <circle cx="55" cy="310" r="3.5" fill="#66aaff" opacity="0.85"/>
  <circle cx="245" cy="330" r="5" fill="#2255bb" opacity="0.65"/>
  <circle cx="245" cy="330" r="3" fill="#88ccff" opacity="0.9"/>
</g>

<!-- Top wisp -->
<path d="M 150,58 Q 162,38 155,18 Q 148,35 143,18 Q 146,38 150,58" fill="#aaccee" opacity="0.38"/>

<!-- Ground mist -->
<ellipse cx="150" cy="396" rx="125" ry="22" fill="url(#gGlow)" filter="url(#gb10)" opacity="0.6"/>
</svg>`,

/* ─────────────────────────────────────────────────
   WITCH
───────────────────────────────────────────────── */
witch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="wBg" cx="50%" cy="65%" r="65%">
    <stop offset="0%" stop-color="#3d0066"/><stop offset="55%" stop-color="#180030"/><stop offset="100%" stop-color="#050010"/>
  </radialGradient>
  <radialGradient id="wAura" cx="50%" cy="58%" r="55%">
    <stop offset="0%" stop-color="#7700bb" stop-opacity="0.75"/><stop offset="100%" stop-color="#7700bb" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="wFace" cx="38%" cy="28%" r="72%">
    <stop offset="0%" stop-color="#c8d8a8"/><stop offset="65%" stop-color="#8a9868"/><stop offset="100%" stop-color="#4a5838"/>
  </radialGradient>
  <radialGradient id="wEye" cx="28%" cy="25%" r="70%">
    <stop offset="0%" stop-color="#ccffcc"/><stop offset="45%" stop-color="#00ee55"/><stop offset="100%" stop-color="#003311"/>
  </radialGradient>
  <radialGradient id="wOrb" cx="35%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#aaffcc"/><stop offset="40%" stop-color="#00cc44"/><stop offset="100%" stop-color="#002211"/>
  </radialGradient>
  <radialGradient id="wOG" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#44ff88" stop-opacity="0.9"/><stop offset="100%" stop-color="#00aa44" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="wRobe" cx="50%" cy="5%" r="90%">
    <stop offset="0%" stop-color="#660099"/><stop offset="50%" stop-color="#2d0050"/><stop offset="100%" stop-color="#0f001f"/>
  </radialGradient>
  <filter id="wg8"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="wg4"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="wg14"><feGaussianBlur stdDeviation="14" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="wbloom"><feGaussianBlur stdDeviation="20" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#wBg)"/>
<ellipse cx="150" cy="240" rx="145" ry="185" fill="url(#wAura)"/>
<!-- Ground glow -->
<ellipse cx="150" cy="392" rx="120" ry="22" fill="#7700bb" opacity="0.35" filter="url(#wg8)"/>
<!-- Magic circle -->
<g opacity="0.42" filter="url(#wg4)">
  <circle cx="150" cy="378" r="86" fill="none" stroke="#bb55ff" stroke-width="1.5"/>
  <circle cx="150" cy="378" r="68" fill="none" stroke="#bb55ff" stroke-width="0.7"/>
  <line x1="150" y1="292" x2="150" y2="464" stroke="#bb55ff" stroke-width="0.8"/>
  <line x1="66" y1="336" x2="234" y2="420" stroke="#bb55ff" stroke-width="0.8"/>
  <line x1="234" y1="336" x2="66" y2="420" stroke="#bb55ff" stroke-width="0.8"/>
  <polygon points="150,305 230,370 200,450 100,450 70,370" fill="none" stroke="#dd77ff" stroke-width="0.8" opacity="0.5"/>
</g>
<!-- Robe -->
<path d="M 88,400 Q 72,345 102,292 L 150,278 L 198,292 Q 228,345 212,400 Z" fill="url(#wRobe)"/>
<path d="M 102,292 Q 72,345 88,400 L 93,400 Q 78,348 107,295 Z" fill="#bb55ff" opacity="0.55"/>
<path d="M 198,292 Q 228,345 212,400 L 207,400 Q 222,348 193,295 Z" fill="#9933dd" opacity="0.45"/>
<path d="M 130,278 L 150,278 L 170,278 Q 160,320 150,340 Q 140,320 130,278 Z" fill="#0d001a" opacity="0.6"/>
<!-- Belt -->
<rect x="108" y="252" width="84" height="11" rx="4" fill="#1a0030"/>
<rect x="108" y="252" width="84" height="3" rx="2" fill="#cc66ff" opacity="0.65"/>
<rect x="141" y="250" width="18" height="15" rx="3" fill="#8844aa"/>
<rect x="144" y="253" width="12" height="9" rx="2" fill="#110020"/>
<ellipse cx="150" cy="257" rx="4" ry="3" fill="#dd99ff" opacity="0.8"/>
<!-- Torso -->
<path d="M 113,200 Q 108,238 102,292 L 150,282 L 198,292 Q 192,238 187,200 Q 170,212 150,212 Q 130,212 113,200 Z" fill="#1e0038"/>
<path d="M 113,200 Q 108,238 102,292 L 105,288 Q 111,236 116,200 Z" fill="#cc66ff" opacity="0.5"/>
<path d="M 187,200 Q 192,238 198,292 L 195,288 Q 189,236 184,200 Z" fill="#bb55ee" opacity="0.45"/>
<!-- Left arm (holding staff) -->
<path d="M 113,205 Q 90,225 74,268 Q 80,273 87,270 Q 102,233 118,210 Z" fill="#1e0038"/>
<path d="M 113,205 Q 90,225 74,268 L 76,266 Q 92,223 115,205 Z" fill="#cc66ff" opacity="0.45"/>
<ellipse cx="79" cy="272" rx="11" ry="8" fill="#8a9868" transform="rotate(-20,79,272)"/>
<!-- Right arm raised -->
<path d="M 187,205 Q 210,182 218,152 Q 213,147 208,150 Q 200,178 185,205 Z" fill="#1e0038"/>
<path d="M 187,205 Q 210,182 218,152 L 216,153 Q 208,180 185,205 Z" fill="#cc66ff" opacity="0.4"/>
<ellipse cx="216" cy="147" rx="12" ry="9" fill="#8a9868" transform="rotate(35,216,147)"/>
<!-- Casting sparks -->
<g filter="url(#wg4)" opacity="0.95">
  <circle cx="215" cy="136" r="3.5" fill="#aaffcc"/>
  <circle cx="226" cy="144" r="2.5" fill="#88ffaa"/>
  <circle cx="222" cy="128" r="2" fill="#ccffee"/>
  <circle cx="231" cy="136" r="1.5" fill="#aaffcc"/>
  <circle cx="208" cy="129" r="2" fill="#88ffaa"/>
  <circle cx="235" cy="126" r="1.5" fill="#66ff99"/>
</g>
<!-- Staff -->
<line x1="80" y1="265" x2="57" y2="122" stroke="#6b4422" stroke-width="6" stroke-linecap="round"/>
<line x1="80" y1="265" x2="57" y2="122" stroke="#a07040" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 57,122 Q 50,108 55,97 Q 66,87 63,77 Q 52,83 46,97 Q 41,112 50,125 Z" fill="#5c3a1e" stroke="#9a6840" stroke-width="1.5"/>
<circle cx="55" cy="100" r="35" fill="url(#wOG)" filter="url(#wbloom)" opacity="0.85"/>
<circle cx="55" cy="100" r="20" fill="url(#wOrb)" filter="url(#wg8)"/>
<ellipse cx="48" cy="92" rx="7" ry="6" fill="#ccffdd" opacity="0.65"/>
<!-- Neck -->
<rect x="137" y="192" width="26" height="20" rx="6" fill="#8a9868"/>
<path d="M 127,202 Q 150,218 173,202 Q 166,190 150,193 Q 134,190 127,202 Z" fill="#1e0038"/>
<path d="M 127,202 Q 150,215 173,202 L 171,200 Q 150,213 129,200 Z" fill="#cc66ff" opacity="0.3"/>
<!-- Head -->
<ellipse cx="150" cy="162" rx="37" ry="40" fill="url(#wFace)"/>
<ellipse cx="158" cy="170" rx="30" ry="32" fill="#4a5830" opacity="0.45"/>
<path d="M 147,170 Q 142,180 149,182 Q 156,180 151,170 Z" fill="#6a7850" opacity="0.85"/>
<circle cx="147" cy="172" r="2" fill="#c8d8a8" opacity="0.35"/>
<path d="M 131,185 Q 150,197 169,185" fill="none" stroke="#3a4828" stroke-width="3" stroke-linecap="round"/>
<path d="M 131,185 Q 150,195 169,185" fill="none" stroke="#8a9868" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
<!-- Eyes -->
<ellipse cx="134" cy="160" rx="15" ry="11" fill="#2a3818" opacity="0.7"/>
<ellipse cx="166" cy="160" rx="15" ry="11" fill="#2a3818" opacity="0.7"/>
<ellipse cx="134" cy="160" rx="10" ry="8" fill="url(#wEye)" filter="url(#wg4)"/>
<ellipse cx="166" cy="160" rx="10" ry="8" fill="url(#wEye)" filter="url(#wg4)"/>
<ellipse cx="134" cy="160" rx="2.8" ry="7" fill="#001100"/>
<ellipse cx="166" cy="160" rx="2.8" ry="7" fill="#001100"/>
<circle cx="131" cy="156" r="2.2" fill="#ccffcc" opacity="0.85"/>
<circle cx="163" cy="156" r="2.2" fill="#ccffcc" opacity="0.85"/>
<path d="M 121,148 Q 134,143 145,147" stroke="#3a4828" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M 155,147 Q 166,143 179,148" stroke="#3a4828" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<!-- Hair -->
<path d="M 118,148 Q 102,175 92,218 Q 87,248 93,280 Q 99,274 105,268 Q 100,240 108,212 Q 118,175 130,150 Z" fill="#12021e"/>
<path d="M 182,148 Q 198,175 208,218 Q 213,248 207,280 Q 201,274 195,268 Q 200,240 192,212 Q 182,175 170,150 Z" fill="#12021e"/>
<path d="M 118,135 Q 150,118 182,135 Q 168,125 150,122 Q 132,125 118,135 Z" fill="#12021e"/>
<path d="M 118,148 Q 104,175 100,210 Q 98,235 100,260 L 103,258 Q 100,232 103,208 Q 112,173 122,150 Z" fill="#4a1870" opacity="0.5"/>
<path d="M 182,148 Q 196,175 200,210 Q 202,235 200,260 L 197,258 Q 200,232 197,208 Q 188,173 178,150 Z" fill="#3a0f60" opacity="0.45"/>
<!-- Hat brim -->
<ellipse cx="150" cy="130" rx="58" ry="15" fill="#0a0015"/>
<ellipse cx="150" cy="130" rx="58" ry="15" fill="none" stroke="#8800cc" stroke-width="2" opacity="0.9"/>
<ellipse cx="150" cy="128" rx="52" ry="11" fill="none" stroke="#cc44ff" stroke-width="1" opacity="0.7" filter="url(#wg4)"/>
<!-- Hat cone -->
<path d="M 150,18 L 192,132 Q 150,124 108,132 Z" fill="#0a0015"/>
<path d="M 150,18 L 108,132 L 112,131 L 150,24 Z" fill="#7700bb" opacity="0.55"/>
<path d="M 150,18 L 192,132 L 188,131 L 150,24 Z" fill="#5500aa" opacity="0.4"/>
<rect x="118" y="117" width="64" height="10" rx="3" fill="#180028"/>
<rect x="118" y="117" width="64" height="2.5" rx="1" fill="#aa44cc" opacity="0.7"/>
<rect x="143" y="115" width="14" height="14" rx="3" fill="#7a3318"/>
<rect x="145" y="117" width="10" height="10" rx="2" fill="#bb7744"/>
<circle cx="150" cy="122" r="3" fill="#ffcc88" opacity="0.9"/>
<!-- Sparkles -->
<g filter="url(#wg4)">
  <circle cx="38" cy="75" r="2" fill="#cc88ff" opacity="0.8"/>
  <circle cx="262" cy="95" r="2.5" fill="#dd99ff" opacity="0.75"/>
  <circle cx="28" cy="195" r="1.5" fill="#bb66ff" opacity="0.65"/>
  <circle cx="272" cy="175" r="2" fill="#cc88ff" opacity="0.8"/>
  <path d="M 242,215 L 244,209 L 246,215 L 252,217 L 246,219 L 244,225 L 242,219 L 236,217 Z" fill="#dd88ff" opacity="0.75"/>
  <path d="M 23,260 L 25,254 L 27,260 L 33,262 L 27,264 L 25,270 L 23,264 L 17,262 Z" fill="#bb66ff" opacity="0.65"/>
</g>
</svg>`,

/* ─────────────────────────────────────────────────
   CASTLE  — gothic fortress, moonlit
───────────────────────────────────────────────── */
castle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <linearGradient id="cSky" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#040810"/><stop offset="50%" stop-color="#0a1428"/><stop offset="100%" stop-color="#101828"/>
  </linearGradient>
  <radialGradient id="cMoon" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fffcee"/><stop offset="55%" stop-color="#f0e8c0"/><stop offset="100%" stop-color="#c8b878"/>
  </radialGradient>
  <radialGradient id="cMG" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#fff8cc" stop-opacity="0.7"/><stop offset="100%" stop-color="#ffee88" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="cWin" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffcc44"/><stop offset="60%" stop-color="#ff8800"/><stop offset="100%" stop-color="#882200"/>
  </radialGradient>
  <radialGradient id="cWG" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffaa22" stop-opacity="0.9"/><stop offset="100%" stop-color="#ff6600" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="cSt" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#3a3a4a"/><stop offset="40%" stop-color="#282835"/><stop offset="100%" stop-color="#181820"/>
  </linearGradient>
  <linearGradient id="cStL" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#323242"/><stop offset="100%" stop-color="#141420"/>
  </linearGradient>
  <filter id="cg8"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="cg4"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="cg3"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="cbloom"><feGaussianBlur stdDeviation="22" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#cSky)"/>
<!-- Clouds -->
<path d="M -10,60 Q 20,40 60,55 Q 80,35 120,50 Q 150,30 190,48 Q 220,35 250,55 Q 280,40 310,60 L 310,0 L -10,0 Z" fill="#0d1520" opacity="0.9"/>
<path d="M -10,100 Q 30,75 80,90 Q 110,68 150,82 Q 180,65 220,80 Q 255,68 310,90 L 310,40 Q 270,52 235,62 Q 208,48 178,62 Q 148,44 118,60 Q 88,44 58,62 Q 24,50 -10,65 Z" fill="#0a1018" opacity="0.7"/>
<!-- Moon bloom -->
<circle cx="222" cy="75" r="62" fill="url(#cMG)" filter="url(#cbloom)"/>
<circle cx="222" cy="75" r="38" fill="url(#cMoon)"/>
<circle cx="209" cy="65" r="6" fill="#e8d8a8" opacity="0.4"/>
<circle cx="230" cy="83" r="4" fill="#e0cc98" opacity="0.35"/>
<!-- Lightning -->
<g filter="url(#cg3)" opacity="0.85">
  <path d="M 68,20 L 55,55 L 66,55 L 48,92" stroke="#aaccff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 68,20 L 55,55 L 66,55 L 48,92" stroke="#ffffff" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<!-- Stars -->
<g opacity="0.7" fill="#ccddff">
  <circle cx="35" cy="30" r="1"/><circle cx="110" cy="22" r="0.8"/><circle cx="162" cy="36" r="1"/>
  <circle cx="25" cy="82" r="0.7"/><circle cx="172" cy="16" r="1.2"/><circle cx="282" cy="42" r="0.8"/>
</g>
<!-- Left tower -->
<rect x="28" y="145" width="68" height="210" fill="url(#cStL)"/>
<line x1="28" y1="175" x2="96" y2="175" stroke="#222232" stroke-width="1" opacity="0.7"/>
<line x1="28" y1="205" x2="96" y2="205" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="28" y1="235" x2="96" y2="235" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="28" y1="265" x2="96" y2="265" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="28" y1="295" x2="96" y2="295" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="28" y1="325" x2="96" y2="325" stroke="#222232" stroke-width="1" opacity="0.6"/>
<rect x="92" y="145" width="4" height="210" fill="#4a4a60" opacity="0.5"/>
<rect x="28" y="128" width="12" height="20" fill="url(#cStL)"/>
<rect x="48" y="128" width="12" height="20" fill="url(#cStL)"/>
<rect x="68" y="128" width="12" height="20" fill="url(#cStL)"/>
<!-- Right tower -->
<rect x="204" y="130" width="68" height="225" fill="url(#cSt)"/>
<line x1="204" y1="162" x2="272" y2="162" stroke="#222232" stroke-width="1" opacity="0.7"/>
<line x1="204" y1="192" x2="272" y2="192" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="204" y1="222" x2="272" y2="222" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="204" y1="252" x2="272" y2="252" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="204" y1="282" x2="272" y2="282" stroke="#222232" stroke-width="1" opacity="0.6"/>
<line x1="204" y1="312" x2="272" y2="312" stroke="#222232" stroke-width="1" opacity="0.6"/>
<rect x="268" y="130" width="4" height="225" fill="#6a6a80" opacity="0.6"/>
<rect x="204" y="112" width="12" height="21" fill="url(#cSt)"/>
<rect x="224" y="112" width="12" height="21" fill="url(#cSt)"/>
<rect x="244" y="112" width="12" height="21" fill="url(#cSt)"/>
<rect x="264" y="112" width="8" height="21" fill="url(#cSt)"/>
<!-- Keep -->
<rect x="88" y="180" width="124" height="175" fill="url(#cSt)"/>
<line x1="88" y1="208" x2="212" y2="208" stroke="#1e1e2e" stroke-width="1.2" opacity="0.6"/>
<line x1="88" y1="238" x2="212" y2="238" stroke="#1e1e2e" stroke-width="1.2" opacity="0.6"/>
<line x1="88" y1="268" x2="212" y2="268" stroke="#1e1e2e" stroke-width="1.2" opacity="0.6"/>
<line x1="88" y1="298" x2="212" y2="298" stroke="#1e1e2e" stroke-width="1.2" opacity="0.6"/>
<line x1="88" y1="328" x2="212" y2="328" stroke="#1e1e2e" stroke-width="1.2" opacity="0.6"/>
<rect x="208" y="180" width="4" height="175" fill="#555568" opacity="0.55"/>
<rect x="88" y="162" width="14" height="22" fill="url(#cSt)"/>
<rect x="110" y="162" width="14" height="22" fill="url(#cSt)"/>
<rect x="132" y="162" width="14" height="22" fill="url(#cSt)"/>
<rect x="154" y="162" width="14" height="22" fill="url(#cSt)"/>
<rect x="176" y="162" width="14" height="22" fill="url(#cSt)"/>
<rect x="198" y="162" width="14" height="22" fill="url(#cSt)"/>
<!-- Gate arch -->
<path d="M 122,355 L 122,270 Q 150,258 178,270 L 178,355 Z" fill="#0a0a14"/>
<line x1="135" y1="272" x2="135" y2="355" stroke="#222232" stroke-width="2.5" opacity="0.8"/>
<line x1="150" y1="270" x2="150" y2="355" stroke="#222232" stroke-width="2.5" opacity="0.8"/>
<line x1="165" y1="272" x2="165" y2="355" stroke="#222232" stroke-width="2.5" opacity="0.8"/>
<line x1="123" y1="295" x2="177" y2="295" stroke="#222232" stroke-width="2" opacity="0.7"/>
<line x1="123" y1="318" x2="177" y2="318" stroke="#222232" stroke-width="2" opacity="0.7"/>
<ellipse cx="150" cy="310" rx="20" ry="30" fill="#440088" filter="url(#cg8)" opacity="0.3"/>
<!-- Windows -->
<ellipse cx="62" cy="195" rx="9" ry="14" fill="url(#cWin)" filter="url(#cg4)"/>
<ellipse cx="62" cy="195" rx="6" ry="11" fill="#ffee44" opacity="0.8"/>
<ellipse cx="62" cy="195" rx="20" ry="28" fill="url(#cWG)" filter="url(#cg8)" opacity="0.6"/>
<ellipse cx="238" cy="178" rx="9" ry="14" fill="url(#cWin)" filter="url(#cg4)"/>
<ellipse cx="238" cy="178" rx="6" ry="11" fill="#ffee44" opacity="0.85"/>
<ellipse cx="238" cy="178" rx="22" ry="30" fill="url(#cWG)" filter="url(#cg8)" opacity="0.65"/>
<ellipse cx="238" cy="240" rx="8" ry="12" fill="url(#cWin)" filter="url(#cg4)"/>
<ellipse cx="238" cy="240" rx="5" ry="9" fill="#ffdd33" opacity="0.75"/>
<ellipse cx="118" cy="215" rx="8" ry="12" fill="url(#cWin)" filter="url(#cg4)"/>
<ellipse cx="118" cy="215" rx="5" ry="9" fill="#ffcc33" opacity="0.8"/>
<ellipse cx="118" cy="215" rx="18" ry="24" fill="url(#cWG)" filter="url(#cg8)" opacity="0.5"/>
<ellipse cx="182" cy="215" rx="8" ry="12" fill="url(#cWin)" filter="url(#cg4)"/>
<ellipse cx="182" cy="215" rx="5" ry="9" fill="#ffdd44" opacity="0.8"/>
<ellipse cx="182" cy="215" rx="18" ry="24" fill="url(#cWG)" filter="url(#cg8)" opacity="0.5"/>
<ellipse cx="118" cy="278" rx="8" ry="12" fill="url(#cWin)" filter="url(#cg4)"/>
<ellipse cx="182" cy="278" rx="8" ry="12" fill="url(#cWin)" filter="url(#cg4)"/>
<!-- Ground -->
<rect x="0" y="352" width="300" height="48" fill="#060810"/>
<rect x="0" y="352" width="300" height="4" fill="#1a1a28" opacity="0.8"/>
<ellipse cx="150" cy="356" rx="160" ry="18" fill="#1a2240" opacity="0.4" filter="url(#cg4)"/>
<!-- Trees -->
<g fill="#040810" opacity="0.95">
  <rect x="12" y="310" width="5" height="48"/><path d="M 14,310 L 2,285 L 26,285 Z"/>
  <path d="M 14,295 L 4,274 L 24,274 Z"/><rect x="32" y="320" width="4" height="38"/>
  <path d="M 34,320 L 24,298 L 44,298 Z"/><path d="M 34,306 L 26,288 L 42,288 Z"/>
  <rect x="282" y="315" width="5" height="43"/><path d="M 284,315 L 272,290 L 296,290 Z"/>
  <path d="M 284,300 L 274,280 L 294,280 Z"/><rect x="262" y="325" width="4" height="33"/>
  <path d="M 264,325 L 254,304 L 274,304 Z"/>
</g>
<!-- Flag -->
<line x1="272" y1="112" x2="272" y2="78" stroke="#6a5030" stroke-width="2"/>
<path d="M 272,78 L 258,86 L 272,94 Z" fill="#aa2222"/>
</svg>`,

/* ─────────────────────────────────────────────────
   ZOMBIE  — undead rising
───────────────────────────────────────────────── */
zombie: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="zBg" cx="50%" cy="70%" r="70%">
    <stop offset="0%" stop-color="#1a2e0a"/><stop offset="55%" stop-color="#0a1505"/><stop offset="100%" stop-color="#030805"/>
  </radialGradient>
  <radialGradient id="zA" cx="50%" cy="65%" r="55%">
    <stop offset="0%" stop-color="#2a4a0a" stop-opacity="0.7"/><stop offset="100%" stop-color="#0a1505" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="zSkin" cx="35%" cy="25%" r="72%">
    <stop offset="0%" stop-color="#8aaa6a"/><stop offset="55%" stop-color="#5a7a40"/><stop offset="100%" stop-color="#2a3a18"/>
  </radialGradient>
  <radialGradient id="zEye" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ddffdd"/><stop offset="50%" stop-color="#88cc88"/><stop offset="100%" stop-color="#224422"/>
  </radialGradient>
  <radialGradient id="zGround" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#1a2e0a"/><stop offset="100%" stop-color="#050a02"/>
  </radialGradient>
  <filter id="zg6"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="zg3"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="zg12"><feGaussianBlur stdDeviation="12" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#zBg)"/>
<ellipse cx="150" cy="280" rx="160" ry="180" fill="url(#zA)"/>
<!-- Misty ground -->
<ellipse cx="150" cy="380" rx="155" ry="40" fill="#1a3008" opacity="0.6" filter="url(#zg12)"/>
<rect x="0" y="340" width="300" height="60" fill="url(#zGround)"/>
<!-- Ground dirt cracks -->
<g opacity="0.5" stroke="#0a1505" stroke-width="1.5" fill="none">
  <path d="M 60,345 Q 80,350 95,342"/><path d="M 140,348 Q 160,343 175,350"/>
  <path d="M 210,344 Q 230,350 248,344"/><path d="M 30,358 Q 55,352 70,360"/>
  <path d="M 100,360 Q 120,354 140,362"/><path d="M 180,357 Q 200,352 220,360"/>
</g>
<!-- Ground dirt mound (zombie rising) -->
<ellipse cx="150" cy="348" rx="100" ry="22" fill="#1e2e08" opacity="0.9"/>
<ellipse cx="150" cy="345" rx="75" ry="14" fill="#253a0a" opacity="0.7"/>
<!-- Eerie green ground glow -->
<ellipse cx="150" cy="340" rx="90" ry="20" fill="#3a5a10" filter="url(#zg6)" opacity="0.4"/>

<!-- ZOMBIE TORSO (rising from ground) -->
<!-- Torn shirt/clothes -->
<path d="M 95,340 Q 85,295 90,252 Q 105,238 150,235 Q 195,238 210,252 Q 215,295 205,340 Q 180,335 150,335 Q 120,335 95,340 Z" fill="#2a1e0a" opacity="0.9"/>
<!-- Shirt rim light left (eerie green) -->
<path d="M 90,252 Q 85,295 95,340 L 100,338 Q 90,295 95,255 Z" fill="#4a6a22" opacity="0.45"/>
<!-- Shirt rim right -->
<path d="M 210,252 Q 215,295 205,340 L 200,338 Q 210,295 205,255 Z" fill="#3a5518" opacity="0.38"/>
<!-- Torn shirt tears -->
<path d="M 120,280 Q 125,265 132,278 Q 126,290 120,280 Z" fill="#0a1505" opacity="0.7"/>
<path d="M 165,270 Q 170,256 178,268 Q 172,282 165,270 Z" fill="#0a1505" opacity="0.65"/>
<!-- Exposed ribs (grisly) -->
<g opacity="0.55" stroke="#6a8840" stroke-width="1.5" fill="none">
  <path d="M 132,268 Q 128,278 134,285"/><path d="M 140,262 Q 136,272 142,279"/>
  <path d="M 148,260 Q 144,270 150,277"/><path d="M 156,262 Q 160,272 154,279"/>
  <path d="M 164,268 Q 168,278 162,285"/>
</g>
<!-- Wound -->
<ellipse cx="165" cy="305" rx="12" ry="8" fill="#5a1a0a" opacity="0.8"/>
<ellipse cx="165" cy="305" rx="8" ry="5" fill="#8a2a12" opacity="0.7"/>

<!-- LEFT ARM (outstretched, reaching) -->
<path d="M 90,252 Q 55,235 22,248 Q 18,258 26,264 Q 55,252 92,268 Z" fill="#4a6030"/>
<path d="M 90,252 Q 55,235 22,248 L 22,252 Q 55,238 90,256 Z" fill="#6a8840" opacity="0.5"/>
<!-- Left hand (rotting) -->
<ellipse cx="20" cy="258" rx="14" ry="11" fill="#4a6030" transform="rotate(-15,20,258)"/>
<!-- Bony fingers -->
<g stroke="#6a8840" stroke-width="2" stroke-linecap="round" fill="none">
  <line x1="10" y1="252" x2="2" y2="242"/><line x1="14" y1="249" x2="8" y2="237"/>
  <line x1="18" y1="248" x2="14" y2="235"/><line x1="22" y1="249" x2="20" y2="236"/>
  <line x1="26" y1="252" x2="26" y2="240"/>
</g>

<!-- RIGHT ARM (outstretched) -->
<path d="M 210,252 Q 245,235 278,248 Q 282,258 274,264 Q 245,252 208,268 Z" fill="#4a6030"/>
<path d="M 210,252 Q 245,235 278,248 L 278,252 Q 245,238 210,256 Z" fill="#6a8840" opacity="0.45"/>
<!-- Right hand -->
<ellipse cx="280" cy="258" rx="14" ry="11" fill="#4a6030" transform="rotate(15,280,258)"/>
<g stroke="#6a8840" stroke-width="2" stroke-linecap="round" fill="none">
  <line x1="290" y1="252" x2="298" y2="242"/><line x1="286" y1="249" x2="292" y2="237"/>
  <line x1="282" y1="248" x2="286" y2="235"/><line x1="278" y1="249" x2="280" y2="236"/>
  <line x1="274" y1="252" x2="274" y2="240"/>
</g>

<!-- NECK -->
<rect x="135" y="218" width="30" height="22" rx="6" fill="#5a7a40"/>
<path d="M 130,218 Q 150,205 170,218" fill="#5a7a40"/>

<!-- HEAD -->
<ellipse cx="150" cy="185" rx="42" ry="44" fill="url(#zSkin)"/>
<!-- Decomp shadow -->
<ellipse cx="158" cy="195" rx="34" ry="36" fill="#2a3a18" opacity="0.45"/>
<!-- Skull crack -->
<path d="M 128,165 Q 135,155 142,168" fill="none" stroke="#2a3a18" stroke-width="2.5" stroke-linecap="round"/>
<path d="M 142,168 Q 140,180 138,190" fill="none" stroke="#2a3a18" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<!-- Nose rotted -->
<path d="M 147,193 Q 143,202 150,205 Q 157,202 153,193 Z" fill="#3a5028" opacity="0.8"/>
<!-- Mouth (open, rotting) -->
<path d="M 128,215 Q 150,228 172,215 Q 164,205 150,208 Q 136,205 128,215 Z" fill="#0a1505"/>
<rect x="135" y="208" width="8" height="9" rx="1.5" fill="#c8c8aa" opacity="0.7"/>
<rect x="147" y="207" width="8" height="11" rx="1.5" fill="#d8d8b8" opacity="0.8"/>
<rect x="159" y="208" width="8" height="9" rx="1.5" fill="#c8c8aa" opacity="0.7"/>
<!-- Missing tooth gap -->
<rect x="143" y="210" width="4" height="8" rx="1" fill="#0a1505"/>
<!-- EYES (milky, undead) -->
<ellipse cx="130" cy="180" rx="16" ry="13" fill="#1a2810" opacity="0.6"/>
<ellipse cx="170" cy="180" rx="16" ry="13" fill="#1a2810" opacity="0.6"/>
<ellipse cx="130" cy="180" rx="12" ry="10" fill="url(#zEye)" filter="url(#zg3)"/>
<ellipse cx="170" cy="180" rx="12" ry="10" fill="url(#zEye)" filter="url(#zg3)"/>
<!-- Milky iris -->
<circle cx="130" cy="180" r="7" fill="#aaccaa" opacity="0.6"/>
<circle cx="170" cy="180" r="7" fill="#aaccaa" opacity="0.6"/>
<!-- Pupil (glazed, off-center) -->
<ellipse cx="132" cy="182" rx="4" ry="4" fill="#334422" opacity="0.7"/>
<ellipse cx="168" cy="181" rx="4" ry="4" fill="#334422" opacity="0.7"/>
<circle cx="127" cy="177" r="2" fill="#ddffdd" opacity="0.5"/>
<circle cx="167" cy="177" r="2" fill="#ddffdd" opacity="0.5"/>
<!-- Heavy brow -->
<path d="M 116,168 Q 130,163 143,167" stroke="#2a3818" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M 157,167 Q 170,163 184,168" stroke="#2a3818" stroke-width="4" fill="none" stroke-linecap="round"/>
<!-- Matted hair -->
<path d="M 112,162 Q 108,140 118,125 Q 135,110 150,108 Q 165,110 182,125 Q 192,140 188,162 Q 175,148 150,145 Q 125,148 112,162 Z" fill="#1a1208"/>
<path d="M 112,162 Q 108,140 118,128 L 120,130 Q 110,144 114,162 Z" fill="#2a1e10" opacity="0.4"/>
<!-- Maggot (tiny detail for WoW gritty feel) -->
<ellipse cx="145" cy="200" rx="4" ry="2" fill="#8aaa6a" opacity="0.6"/>
<!-- Eerie green fog wisps -->
<g filter="url(#zg6)" opacity="0.5">
  <ellipse cx="50" cy="340" rx="40" ry="12" fill="#2a4a10"/>
  <ellipse cx="240" cy="340" rx="40" ry="12" fill="#2a4a10"/>
  <ellipse cx="150" cy="355" rx="50" ry="10" fill="#3a5a18"/>
</g>
</svg>`,

/* ─────────────────────────────────────────────────
   VAMPIRE  — elegant lord, dramatic cape
───────────────────────────────────────────────── */
vampire: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="vBg" cx="50%" cy="55%" r="65%">
    <stop offset="0%" stop-color="#2a0010"/><stop offset="55%" stop-color="#0f0008"/><stop offset="100%" stop-color="#040004"/>
  </radialGradient>
  <radialGradient id="vAura" cx="50%" cy="50%" r="55%">
    <stop offset="0%" stop-color="#660022" stop-opacity="0.7"/><stop offset="100%" stop-color="#330010" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="vFace" cx="38%" cy="25%" r="72%">
    <stop offset="0%" stop-color="#f0e8e0"/><stop offset="55%" stop-color="#c8b8a8"/><stop offset="100%" stop-color="#807060"/>
  </radialGradient>
  <radialGradient id="vEye" cx="30%" cy="25%" r="70%">
    <stop offset="0%" stop-color="#ffaaaa"/><stop offset="45%" stop-color="#dd2222"/><stop offset="100%" stop-color="#660000"/>
  </radialGradient>
  <radialGradient id="vCape" cx="50%" cy="0%" r="100%">
    <stop offset="0%" stop-color="#3a0010"/><stop offset="55%" stop-color="#1a0008"/><stop offset="100%" stop-color="#070004"/>
  </radialGradient>
  <filter id="vg8"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="vg4"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="vbloom"><feGaussianBlur stdDeviation="18" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#vBg)"/>
<ellipse cx="150" cy="220" rx="150" ry="200" fill="url(#vAura)"/>
<!-- Red moon -->
<circle cx="240" cy="60" r="32" fill="#cc1a1a" opacity="0.7" filter="url(#vbloom)"/>
<circle cx="240" cy="60" r="28" fill="#ee2222" opacity="0.5"/>
<circle cx="240" cy="60" r="28" fill="none" stroke="#ff4444" stroke-width="1.5" opacity="0.6"/>
<!-- Bats (silhouettes) -->
<g fill="#1a0008" opacity="0.8">
  <path d="M 45,80 Q 38,72 30,75 Q 35,82 40,78 Q 42,85 48,82 Q 53,78 55,72 Q 52,68 45,80 Z"/>
  <path d="M 72,55 Q 65,47 57,50 Q 62,57 67,53 Q 69,60 75,57 Q 80,53 82,47 Q 79,43 72,55 Z"/>
  <path d="M 28,108 Q 22,101 15,103 Q 20,109 24,106 Q 26,112 32,109 Q 36,105 38,100 Q 35,96 28,108 Z"/>
</g>
<!-- Stars -->
<g opacity="0.5" fill="#ffaaaa">
  <circle cx="30" cy="42" r="0.9"/><circle cx="95" cy="28" r="1"/><circle cx="170" cy="38" r="0.8"/>
  <circle cx="20" cy="110" r="0.8"/><circle cx="280" cy="75" r="1"/>
</g>

<!-- CAPE — spread like bat wings -->
<!-- Cape left wing -->
<path d="M 105,215 Q 70,195 15,240 Q 5,290 15,360 Q 35,380 55,360 Q 65,330 60,295 Q 80,310 100,320 Q 90,280 95,248 Z" fill="url(#vCape)"/>
<!-- Cape left wing inner (crimson lining) -->
<path d="M 105,215 Q 72,197 20,242 Q 12,290 20,358 Q 35,377 52,358 L 55,360 Q 40,378 20,358 Q 10,290 18,242 Q 70,196 105,215 Z" fill="#550015" opacity="0.55"/>
<!-- Cape right wing -->
<path d="M 195,215 Q 230,195 285,240 Q 295,290 285,360 Q 265,380 245,360 Q 235,330 240,295 Q 220,310 200,320 Q 210,280 205,248 Z" fill="url(#vCape)"/>
<!-- Cape right inner -->
<path d="M 195,215 Q 228,197 280,242 Q 288,290 280,358 Q 265,377 248,358 L 245,360 Q 260,378 280,358 Q 290,290 282,242 Q 230,196 195,215 Z" fill="#550015" opacity="0.5"/>
<!-- Cape collar -->
<path d="M 100,215 Q 105,195 150,188 Q 195,195 200,215 Q 175,205 150,206 Q 125,205 100,215 Z" fill="#220008"/>
<!-- Collar points -->
<path d="M 100,215 Q 110,200 118,215 Z" fill="#1a0008"/>
<path d="M 200,215 Q 190,200 182,215 Z" fill="#1a0008"/>

<!-- BODY / SUIT -->
<path d="M 115,215 Q 110,250 108,295 Q 120,305 150,305 Q 180,305 192,295 Q 190,250 185,215 Q 170,225 150,225 Q 130,225 115,215 Z" fill="#110008"/>
<!-- Suit lapels (white shirt front) -->
<path d="M 138,215 Q 145,260 150,295 Q 145,295 140,275 Q 135,255 138,215 Z" fill="#e8e0d8" opacity="0.8"/>
<path d="M 162,215 Q 155,260 150,295 Q 155,295 160,275 Q 165,255 162,215 Z" fill="#e8e0d8" opacity="0.8"/>
<!-- Waistcoat buttons -->
<circle cx="150" cy="232" r="3" fill="#cc8800" opacity="0.9"/>
<circle cx="150" cy="248" r="3" fill="#cc8800" opacity="0.9"/>
<circle cx="150" cy="264" r="3" fill="#cc8800" opacity="0.9"/>
<!-- Suit rim light L -->
<path d="M 115,215 Q 110,250 108,295 L 112,292 Q 114,248 118,215 Z" fill="#880022" opacity="0.5"/>
<!-- Suit rim R -->
<path d="M 185,215 Q 190,250 192,295 L 188,292 Q 186,248 182,215 Z" fill="#770018" opacity="0.45"/>

<!-- NECK -->
<rect x="136" y="200" width="28" height="20" rx="6" fill="#c8b8a8"/>
<!-- Collar shirt -->
<path d="M 125,210 Q 150,222 175,210 Q 168,200 150,202 Q 132,200 125,210 Z" fill="#e8e0d8" opacity="0.85"/>

<!-- HEAD -->
<ellipse cx="150" cy="170" rx="40" ry="43" fill="url(#vFace)"/>
<!-- Shadow side -->
<ellipse cx="160" cy="178" rx="32" ry="35" fill="#706050" opacity="0.4"/>
<!-- Elegant widow's peak hair -->
<path d="M 150,135 Q 162,128 178,132 Q 190,145 192,165 L 190,168 Q 188,148 178,136 Q 163,130 150,138 Q 137,130 122,136 Q 112,148 110,168 L 108,165 Q 110,145 122,132 Q 138,128 150,135 Z" fill="#0d0008"/>
<!-- Temple hair -->
<path d="M 110,168 Q 108,148 118,132 Q 112,150 112,170 Z" fill="#0d0008"/>
<path d="M 190,168 Q 192,148 182,132 Q 188,150 188,170 Z" fill="#0d0008"/>
<!-- Widow's peak point -->
<path d="M 150,135 Q 148,148 150,158 Q 152,148 150,135 Z" fill="#0d0008"/>

<!-- Eyes (piercing red) -->
<ellipse cx="130" cy="167" rx="16" ry="13" fill="#1a0808" opacity="0.65"/>
<ellipse cx="170" cy="167" rx="16" ry="13" fill="#1a0808" opacity="0.65"/>
<ellipse cx="130" cy="167" rx="12" ry="10" fill="url(#vEye)" filter="url(#vg4)"/>
<ellipse cx="170" cy="167" rx="12" ry="10" fill="url(#vEye)" filter="url(#vg4)"/>
<!-- Red glow -->
<ellipse cx="130" cy="167" rx="18" ry="15" fill="#ff2222" filter="url(#vbloom)" opacity="0.4"/>
<ellipse cx="170" cy="167" rx="18" ry="15" fill="#ff2222" filter="url(#vbloom)" opacity="0.4"/>
<ellipse cx="130" cy="167" rx="5" ry="5" fill="#220000"/>
<ellipse cx="170" cy="167" rx="5" ry="5" fill="#220000"/>
<circle cx="127" cy="164" r="2" fill="#ffaaaa" opacity="0.8"/>
<circle cx="167" cy="164" r="2" fill="#ffaaaa" opacity="0.8"/>
<!-- Aristocratic brows -->
<path d="M 116,156 Q 130,151 142,154" stroke="#1a0808" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M 158,154 Q 170,151 184,156" stroke="#1a0808" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<!-- Nose (straight, refined) -->
<path d="M 148,178 L 148,190 Q 144,194 148,196 Q 152,194 152,190 L 152,178" fill="none" stroke="#c0a890" stroke-width="1.5" stroke-linecap="round"/>
<!-- Mouth with fangs -->
<path d="M 130,204 Q 150,214 170,204" fill="none" stroke="#907060" stroke-width="2" stroke-linecap="round"/>
<!-- Fangs -->
<path d="M 142,205 L 140,215 Q 142,218 144,215 L 144,205 Z" fill="#f0e8e0" opacity="0.9"/>
<path d="M 156,205 L 154,215 Q 156,218 158,215 L 160,205 Z" fill="#f0e8e0" opacity="0.9"/>
<!-- Blood drops -->
<ellipse cx="141" cy="216" rx="2.5" ry="3" fill="#cc1122" opacity="0.85"/>
<ellipse cx="157" cy="216" rx="2.5" ry="3" fill="#cc1122" opacity="0.85"/>
<!-- Blood trickle -->
<path d="M 141,219 Q 140,224 141,228" stroke="#aa0018" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path d="M 157,219 Q 158,224 157,228" stroke="#aa0018" stroke-width="1.5" fill="none" stroke-linecap="round"/>

<!-- Atmospheric red mist -->
<ellipse cx="150" cy="395" rx="130" ry="25" fill="#440010" filter="url(#vg8)" opacity="0.5"/>
<g filter="url(#vg4)">
  <circle cx="35" cy="180" r="2" fill="#cc2222" opacity="0.6"/>
  <circle cx="265" cy="160" r="2.5" fill="#dd2222" opacity="0.65"/>
  <circle cx="25" cy="280" r="1.5" fill="#bb1111" opacity="0.55"/>
  <circle cx="275" cy="300" r="2" fill="#cc2222" opacity="0.6"/>
</g>
</svg>`,

/* ─────────────────────────────────────────────────
   ELEPHANT  — armored war elephant
───────────────────────────────────────────────── */
elephant: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="eBg" cx="50%" cy="60%" r="70%">
    <stop offset="0%" stop-color="#2a1e08"/><stop offset="55%" stop-color="#120e04"/><stop offset="100%" stop-color="#060402"/>
  </radialGradient>
  <radialGradient id="eAura" cx="50%" cy="55%" r="60%">
    <stop offset="0%" stop-color="#8a6a10" stop-opacity="0.6"/><stop offset="100%" stop-color="#4a3808" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="eSkin" cx="35%" cy="25%" r="72%">
    <stop offset="0%" stop-color="#888898"/><stop offset="55%" stop-color="#585868"/><stop offset="100%" stop-color="#303040"/>
  </radialGradient>
  <radialGradient id="eArmor" cx="35%" cy="20%" r="70%">
    <stop offset="0%" stop-color="#e8c840"/><stop offset="45%" stop-color="#c8a020"/><stop offset="100%" stop-color="#7a5808"/>
  </radialGradient>
  <radialGradient id="eGem" cx="30%" cy="25%" r="70%">
    <stop offset="0%" stop-color="#66ffff"/><stop offset="50%" stop-color="#00aacc"/><stop offset="100%" stop-color="#004466"/>
  </radialGradient>
  <radialGradient id="eEye" cx="30%" cy="30%" r="65%">
    <stop offset="0%" stop-color="#ffe8aa"/><stop offset="50%" stop-color="#cc8800"/><stop offset="100%" stop-color="#663300"/>
  </radialGradient>
  <filter id="eg6"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="eg3"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="ebloom"><feGaussianBlur stdDeviation="14" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#eBg)"/>
<ellipse cx="150" cy="270" rx="155" ry="180" fill="url(#eAura)"/>
<!-- Torch fires top corners -->
<g filter="url(#eg6)">
  <ellipse cx="35" cy="60" rx="10" ry="18" fill="#ff8800" opacity="0.7"/>
  <ellipse cx="35" cy="55" rx="7" ry="12" fill="#ffcc00" opacity="0.9"/>
  <ellipse cx="265" cy="60" rx="10" ry="18" fill="#ff8800" opacity="0.7"/>
  <ellipse cx="265" cy="55" rx="7" ry="12" fill="#ffcc00" opacity="0.9"/>
</g>
<line x1="35" y1="68" x2="35" y2="105" stroke="#5a3a10" stroke-width="5"/>
<line x1="265" y1="68" x2="265" y2="105" stroke="#5a3a10" stroke-width="5"/>
<!-- Ground platform -->
<rect x="0" y="355" width="300" height="45" fill="#1a1206"/>
<rect x="0" y="355" width="300" height="4" fill="#c8a020" opacity="0.4"/>
<!-- Ground glow -->
<ellipse cx="150" cy="358" rx="140" ry="20" fill="#c8a020" filter="url(#ebloom)" opacity="0.25"/>

<!-- ELEPHANT BODY (front view) -->
<!-- Main body -->
<ellipse cx="150" cy="280" rx="100" ry="88" fill="url(#eSkin)"/>
<!-- Body rim light left -->
<path d="M 52,268 Q 50,290 55,312 Q 58,326 68,338 Q 58,325 54,310 Q 50,288 52,268 Z" fill="#a0a0b8" opacity="0.4"/>
<!-- Body rim light right -->
<path d="M 248,268 Q 250,290 245,312 Q 242,326 232,338 Q 242,325 246,310 Q 250,288 248,268 Z" fill="#888898" opacity="0.35"/>

<!-- ARMOR PLATE (chest) -->
<path d="M 88,252 Q 100,238 150,235 Q 200,238 212,252 Q 205,290 200,325 Q 175,335 150,335 Q 125,335 100,325 Q 95,290 88,252 Z" fill="url(#eArmor)"/>
<!-- Armor engraving lines -->
<g stroke="#a87a08" stroke-width="1.5" fill="none" opacity="0.6">
  <path d="M 110,258 Q 150,250 190,258"/>
  <path d="M 105,280 Q 150,272 195,280"/>
  <path d="M 108,302 Q 150,294 192,302"/>
  <path d="M 115,322 Q 150,315 185,322"/>
</g>
<!-- Armor border -->
<path d="M 88,252 Q 100,238 150,235 Q 200,238 212,252 Q 205,290 200,325 Q 175,335 150,335 Q 125,335 100,325 Q 95,290 88,252 Z" fill="none" stroke="#e8c840" stroke-width="2.5" opacity="0.7"/>
<!-- Armor center gem -->
<ellipse cx="150" cy="282" rx="16" ry="14" fill="#441a00" opacity="0.8"/>
<ellipse cx="150" cy="282" rx="12" ry="10" fill="url(#eGem)" filter="url(#eg3)"/>
<ellipse cx="146" cy="278" rx="5" ry="4" fill="#aaffff" opacity="0.7"/>
<ellipse cx="150" cy="282" rx="14" ry="12" fill="#00aacc" filter="url(#ebloom)" opacity="0.5"/>

<!-- LEGS (4 pillars visible from front) -->
<g fill="url(#eSkin)">
  <rect x="72" y="320" width="40" height="70" rx="8"/>
  <rect x="188" y="320" width="40" height="70" rx="8"/>
  <rect x="108" y="328" width="35" height="62" rx="6"/>
  <rect x="157" y="328" width="35" height="62" rx="6"/>
</g>
<!-- Leg armor bands -->
<g fill="url(#eArmor)" opacity="0.8">
  <rect x="72" y="320" width="40" height="8" rx="4"/>
  <rect x="188" y="320" width="40" height="8" rx="4"/>
  <rect x="108" y="328" width="35" height="7" rx="3.5"/>
  <rect x="157" y="328" width="35" height="7" rx="3.5"/>
</g>
<!-- Toenails -->
<g fill="#c8c8b8" opacity="0.7">
  <ellipse cx="80" cy="388" rx="5" ry="4"/><ellipse cx="92" cy="390" rx="5" ry="4"/><ellipse cx="104" cy="388" rx="5" ry="4"/>
  <ellipse cx="196" cy="388" rx="5" ry="4"/><ellipse cx="208" cy="390" rx="5" ry="4"/><ellipse cx="220" cy="388" rx="5" ry="4"/>
</g>

<!-- TRUNK (curled slightly) -->
<path d="M 132,242 Q 115,268 110,295 Q 108,312 118,322 Q 132,328 140,315 Q 148,302 142,288 Q 138,275 148,265 Q 152,258 148,248 Z" fill="url(#eSkin)"/>
<!-- Trunk rim light -->
<path d="M 132,242 Q 115,268 110,295 Q 108,312 118,322 L 120,320 Q 110,310 112,294 Q 117,268 134,244 Z" fill="#a0a0b8" opacity="0.4"/>

<!-- EARS (large, dramatic) -->
<!-- Left ear -->
<ellipse cx="52" cy="225" rx="45" ry="58" fill="url(#eSkin)" opacity="0.85"/>
<!-- Left ear inner -->
<ellipse cx="55" cy="228" rx="30" ry="42" fill="#484858" opacity="0.6"/>
<!-- Ear armor trim -->
<ellipse cx="52" cy="225" rx="45" ry="58" fill="none" stroke="#c8a020" stroke-width="2" opacity="0.5"/>
<!-- Right ear -->
<ellipse cx="248" cy="225" rx="45" ry="58" fill="url(#eSkin)" opacity="0.85"/>
<ellipse cx="245" cy="228" rx="30" ry="42" fill="#484858" opacity="0.6"/>
<ellipse cx="248" cy="225" rx="45" ry="58" fill="none" stroke="#c8a020" stroke-width="2" opacity="0.5"/>

<!-- HEAD -->
<ellipse cx="150" cy="195" rx="68" ry="62" fill="url(#eSkin)"/>
<!-- Head rim light top -->
<path d="M 83,185 Q 82,165 98,148 Q 118,132 150,130 L 150,133 Q 120,133 100,150 Q 85,167 85,186 Z" fill="#a0a0b8" opacity="0.45"/>

<!-- HEADDRESS / ORNAMENT -->
<!-- Base band -->
<rect x="88" y="148" width="124" height="14" rx="7" fill="url(#eArmor)"/>
<rect x="88" y="148" width="124" height="14" rx="7" fill="none" stroke="#ffdd60" stroke-width="1.5" opacity="0.7"/>
<!-- Center jewel -->
<ellipse cx="150" cy="140" rx="18" ry="22" fill="#2a1200" opacity="0.9"/>
<ellipse cx="150" cy="140" rx="14" ry="18" fill="url(#eGem)" filter="url(#eg3)"/>
<ellipse cx="146" cy="134" rx="6" ry="5" fill="#aaffff" opacity="0.7"/>
<ellipse cx="150" cy="140" rx="16" ry="20" fill="#00aacc" filter="url(#ebloom)" opacity="0.45"/>
<!-- Side jewels -->
<g filter="url(#eg3)">
  <ellipse cx="105" cy="150" rx="8" ry="7" fill="#dd2222" opacity="0.9"/>
  <ellipse cx="195" cy="150" rx="8" ry="7" fill="#dd2222" opacity="0.9"/>
  <ellipse cx="103" cy="148" rx="3" ry="2.5" fill="#ffaaaa" opacity="0.7"/>
  <ellipse cx="193" cy="148" rx="3" ry="2.5" fill="#ffaaaa" opacity="0.7"/>
</g>
<!-- Tassels from headdress -->
<g stroke="#c8a020" stroke-width="2" opacity="0.7">
  <line x1="95" y1="162" x2="90" y2="185"/>
  <line x1="115" y1="160" x2="112" y2="185"/>
  <line x1="185" y1="160" x2="188" y2="185"/>
  <line x1="205" y1="162" x2="210" y2="185"/>
</g>
<g fill="#e8c840" opacity="0.8">
  <ellipse cx="90" cy="187" rx="4" ry="4"/><ellipse cx="112" cy="187" rx="4" ry="4"/>
  <ellipse cx="188" cy="187" rx="4" ry="4"/><ellipse cx="210" cy="187" rx="4" ry="4"/>
</g>

<!-- EYES (wise, kind) -->
<ellipse cx="118" cy="200" rx="18" ry="15" fill="#282835" opacity="0.7"/>
<ellipse cx="182" cy="200" rx="18" ry="15" fill="#282835" opacity="0.7"/>
<ellipse cx="118" cy="200" rx="14" ry="12" fill="url(#eEye)" filter="url(#eg3)"/>
<ellipse cx="182" cy="200" rx="14" ry="12" fill="url(#eEye)" filter="url(#eg3)"/>
<ellipse cx="118" cy="200" rx="7" ry="7" fill="#1a0e04"/>
<ellipse cx="182" cy="200" rx="7" ry="7" fill="#1a0e04"/>
<circle cx="114" cy="196" r="3" fill="#ffe8cc" opacity="0.7"/>
<circle cx="178" cy="196" r="3" fill="#ffe8cc" opacity="0.7"/>

<!-- TUSKS -->
<path d="M 126,226 Q 108,240 100,258 Q 96,272 104,278 Q 114,280 120,268 Q 128,252 130,234 Z" fill="#f0e8d0"/>
<path d="M 126,226 Q 110,240 103,258 L 105,260 Q 112,242 128,228 Z" fill="#fffaee" opacity="0.6"/>
<path d="M 174,226 Q 192,240 200,258 Q 204,272 196,278 Q 186,280 180,268 Q 172,252 170,234 Z" fill="#f0e8d0"/>
<path d="M 174,226 Q 190,240 197,258 L 195,260 Q 188,242 172,228 Z" fill="#fffaee" opacity="0.6"/>
</svg>`,

/* ─────────────────────────────────────────────────
   SPIDER  — giant demonic arachnid
───────────────────────────────────────────────── */
spider: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="sBg" cx="50%" cy="50%" r="60%">
    <stop offset="0%" stop-color="#0f0505"/><stop offset="55%" stop-color="#060202"/><stop offset="100%" stop-color="#020102"/>
  </radialGradient>
  <radialGradient id="sBody" cx="35%" cy="25%" r="72%">
    <stop offset="0%" stop-color="#2a0808"/><stop offset="45%" stop-color="#180404"/><stop offset="100%" stop-color="#080202"/>
  </radialGradient>
  <radialGradient id="sAbd" cx="35%" cy="22%" r="72%">
    <stop offset="0%" stop-color="#220606"/><stop offset="45%" stop-color="#100303"/><stop offset="100%" stop-color="#050101"/>
  </radialGradient>
  <radialGradient id="sEye" cx="30%" cy="25%" r="70%">
    <stop offset="0%" stop-color="#ffaa44"/><stop offset="45%" stop-color="#ee4400"/><stop offset="100%" stop-color="#880000"/>
  </radialGradient>
  <radialGradient id="sMark" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#cc2222"/><stop offset="100%" stop-color="#660000"/>
  </radialGradient>
  <filter id="sg8"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="sg4"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="sbloom"><feGaussianBlur stdDeviation="16" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#sBg)"/>
<!-- Web strands radiating from center -->
<g stroke="#1a0808" stroke-width="0.8" opacity="0.7">
  <line x1="150" y1="195" x2="0" y2="0"/><line x1="150" y1="195" x2="150" y2="0"/>
  <line x1="150" y1="195" x2="300" y2="0"/><line x1="150" y1="195" x2="300" y2="195"/>
  <line x1="150" y1="195" x2="300" y2="400"/><line x1="150" y1="195" x2="150" y2="400"/>
  <line x1="150" y1="195" x2="0" y2="400"/><line x1="150" y1="195" x2="0" y2="195"/>
  <line x1="150" y1="195" x2="55" y2="45"/><line x1="150" y1="195" x2="245" y2="45"/>
  <line x1="150" y1="195" x2="268" y2="310"/><line x1="150" y1="195" x2="32" y2="310"/>
</g>
<!-- Web rings -->
<g stroke="#150606" stroke-width="0.7" fill="none" opacity="0.65">
  <ellipse cx="150" cy="195" rx="45" ry="40"/><ellipse cx="150" cy="195" rx="88" ry="78"/>
  <ellipse cx="150" cy="195" rx="130" ry="118"/><ellipse cx="150" cy="195" rx="170" ry="155"/>
</g>
<!-- Subtle red glow from body -->
<ellipse cx="150" cy="195" rx="80" ry="70" fill="#440000" filter="url(#sbloom)" opacity="0.6"/>

<!-- LEGS — 4 on each side, dramatic spread -->
<!-- Left legs -->
<g stroke="#120404" stroke-width="8" stroke-linecap="round" fill="none">
  <path d="M 118,182 Q 80,155 22,128"/><path d="M 115,195 Q 72,185 18,175"/>
  <path d="M 115,208 Q 72,218 18,238"/><path d="M 118,218 Q 80,250 28,290"/>
</g>
<g stroke="#280a0a" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7">
  <path d="M 118,182 Q 80,155 22,128"/><path d="M 115,195 Q 72,185 18,175"/>
  <path d="M 115,208 Q 72,218 18,238"/><path d="M 118,218 Q 80,250 28,290"/>
</g>
<!-- Right legs -->
<g stroke="#120404" stroke-width="8" stroke-linecap="round" fill="none">
  <path d="M 182,182 Q 220,155 278,128"/><path d="M 185,195 Q 228,185 282,175"/>
  <path d="M 185,208 Q 228,218 282,238"/><path d="M 182,218 Q 220,250 272,290"/>
</g>
<g stroke="#280a0a" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7">
  <path d="M 182,182 Q 220,155 278,128"/><path d="M 185,195 Q 228,185 282,175"/>
  <path d="M 185,208 Q 228,218 282,238"/><path d="M 182,218 Q 220,250 272,290"/>
</g>
<!-- Leg joint highlights -->
<g fill="#3a0a0a" opacity="0.8">
  <circle cx="80" cy="155" r="5"/><circle cx="72" cy="185" r="5"/>
  <circle cx="72" cy="220" r="5"/><circle cx="80" cy="252" r="5"/>
  <circle cx="220" cy="155" r="5"/><circle cx="228" cy="185" r="5"/>
  <circle cx="228" cy="220" r="5"/><circle cx="220" cy="252" r="5"/>
</g>

<!-- Leg spines/hairs -->
<g stroke="#0a0202" stroke-width="1" opacity="0.6">
  <line x1="58" y1="143" x2="54" y2="135"/><line x1="40" y1="132" x2="36" y2="124"/>
  <line x1="44" y1="182" x2="40" y2="174"/><line x1="240" y1="143" x2="244" y2="135"/>
  <line x1="258" y1="132" x2="262" y2="124"/><line x1="256" y1="182" x2="260" y2="174"/>
</g>

<!-- ABDOMEN -->
<ellipse cx="150" cy="285" rx="55" ry="68" fill="url(#sAbd)"/>
<!-- Abdomen marking (hourglass / skull pattern) -->
<ellipse cx="150" cy="270" rx="20" ry="16" fill="url(#sMark)" opacity="0.8"/>
<ellipse cx="150" cy="300" rx="14" ry="18" fill="url(#sMark)" opacity="0.7"/>
<rect x="143" y="284" width="14" height="8" rx="2" fill="#880000" opacity="0.8"/>
<ellipse cx="150" cy="285" rx="60" ry="72" fill="none" stroke="#220606" stroke-width="1.5" opacity="0.4"/>
<!-- Abdomen rim light -->
<path d="M 96,272 Q 95,295 100,318 L 104,316 Q 99,293 100,272 Z" fill="#440a0a" opacity="0.5"/>

<!-- CEPHALOTHORAX (head+body) -->
<ellipse cx="150" cy="195" rx="52" ry="48" fill="url(#sBody)"/>
<!-- Ceph rim light -->
<path d="M 99,183 Q 98,198 102,214 L 106,212 Q 102,196 103,183 Z" fill="#440a0a" opacity="0.45"/>
<!-- Ceph border -->
<ellipse cx="150" cy="195" rx="52" ry="48" fill="none" stroke="#220606" stroke-width="1.5" opacity="0.5"/>

<!-- FANGS (chelicerae) -->
<g fill="#1a0404">
  <path d="M 136,238 Q 130,252 132,265 Q 136,270 140,262 Q 144,252 140,238 Z"/>
  <path d="M 164,238 Q 170,252 168,265 Q 164,270 160,262 Q 156,252 160,238 Z"/>
</g>
<g fill="#2a0808" opacity="0.7">
  <path d="M 137,240 Q 132,253 134,264 L 136,262 Q 133,251 138,240 Z"/>
  <path d="M 163,240 Q 168,253 166,264 L 164,262 Q 167,251 162,240 Z"/>
</g>
<!-- Fang tips (sharp white) -->
<ellipse cx="136" cy="265" rx="4" ry="3" fill="#cc8888" opacity="0.7"/>
<ellipse cx="164" cy="265" rx="4" ry="3" fill="#cc8888" opacity="0.7"/>
<!-- Venom drop -->
<ellipse cx="136" cy="268" rx="3" ry="4" fill="#44cc44" opacity="0.8" filter="url(#sg4)"/>
<ellipse cx="164" cy="268" rx="3" ry="4" fill="#44cc44" opacity="0.8" filter="url(#sg4)"/>

<!-- EYES — 8 glowing red -->
<g filter="url(#sg8)">
  <!-- Main pair (large) -->
  <ellipse cx="133" cy="182" rx="12" ry="10" fill="url(#sEye)"/>
  <ellipse cx="167" cy="182" rx="12" ry="10" fill="url(#sEye)"/>
  <!-- Secondary pair -->
  <ellipse cx="118" cy="188" rx="8" ry="7" fill="#cc3300" opacity="0.9"/>
  <ellipse cx="182" cy="188" rx="8" ry="7" fill="#cc3300" opacity="0.9"/>
  <!-- Tertiary -->
  <ellipse cx="128" cy="200" rx="6" ry="5" fill="#aa2200" opacity="0.85"/>
  <ellipse cx="172" cy="200" rx="6" ry="5" fill="#aa2200" opacity="0.85"/>
  <!-- Small -->
  <ellipse cx="142" cy="176" rx="5" ry="4" fill="#bb2200" opacity="0.8"/>
  <ellipse cx="158" cy="176" rx="5" ry="4" fill="#bb2200" opacity="0.8"/>
</g>
<!-- Eye highlights -->
<circle cx="130" cy="179" r="2.5" fill="#ffcc88" opacity="0.7"/>
<circle cx="164" cy="179" r="2.5" fill="#ffcc88" opacity="0.7"/>
<!-- Eye bloom glow -->
<ellipse cx="150" cy="188" rx="40" ry="35" fill="#ff2200" filter="url(#sbloom)" opacity="0.25"/>
<!-- Connecting thread between body and abdomen -->
<line x1="150" y1="242" x2="150" y2="218" stroke="#1a0404" stroke-width="8" stroke-linecap="round"/>
<line x1="150" y1="242" x2="150" y2="218" stroke="#2a0808" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
</svg>`,

/* ─────────────────────────────────────────────────
   PUMPKIN  — haunted jack-o-lantern
───────────────────────────────────────────────── */
pumpkin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
<defs>
  <radialGradient id="pBg" cx="50%" cy="55%" r="65%">
    <stop offset="0%" stop-color="#1a0a00"/><stop offset="55%" stop-color="#0a0500"/><stop offset="100%" stop-color="#040200"/>
  </radialGradient>
  <radialGradient id="pAura" cx="50%" cy="55%" r="55%">
    <stop offset="0%" stop-color="#662200" stop-opacity="0.7"/><stop offset="100%" stop-color="#330e00" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pBody" cx="35%" cy="22%" r="72%">
    <stop offset="0%" stop-color="#ff8822"/><stop offset="45%" stop-color="#cc5500"/><stop offset="100%" stop-color="#661e00"/>
  </radialGradient>
  <radialGradient id="pFace" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ffcc00" stop-opacity="1"/><stop offset="100%" stop-color="#ff8800" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pStem" cx="40%" cy="20%" r="70%">
    <stop offset="0%" stop-color="#4a6a22"/><stop offset="100%" stop-color="#1a2a08"/>
  </radialGradient>
  <filter id="pg8"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="pg4"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="pbloom"><feGaussianBlur stdDeviation="20" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="pbloom2"><feGaussianBlur stdDeviation="30" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="300" height="400" fill="url(#pBg)"/>
<ellipse cx="150" cy="240" rx="155" ry="180" fill="url(#pAura)"/>
<!-- Stars (sparse) -->
<g opacity="0.5" fill="#ffcc88">
  <circle cx="30" cy="35" r="1"/><circle cx="270" cy="42" r="1.2"/>
  <circle cx="48" cy="110" r="0.8"/><circle cx="255" cy="98" r="1"/>
  <circle cx="18" cy="175" r="0.9"/><circle cx="282" cy="165" r="0.8"/>
</g>
<!-- Full moon behind -->
<circle cx="150" cy="120" r="75" fill="#220800" opacity="0.8"/>
<circle cx="150" cy="120" r="68" fill="#3a1200" opacity="0.6"/>
<!-- Floating particles (magical embers) -->
<g filter="url(#pg4)" opacity="0.8">
  <circle cx="42" cy="140" r="2.5" fill="#ff8800"/>
  <circle cx="258" cy="160" r="2" fill="#ffaa00"/>
  <circle cx="35" cy="250" r="1.8" fill="#ff6600"/>
  <circle cx="265" cy="240" r="2.2" fill="#ff8800"/>
  <circle cx="60" cy="320" r="1.5" fill="#ffaa44"/>
  <circle cx="240" cy="310" r="1.8" fill="#ff8800"/>
  <circle cx="78" cy="80" r="2" fill="#ffcc44"/>
  <circle cx="222" cy="88" r="1.8" fill="#ffaa22"/>
</g>

<!-- Pumpkin body glow bloom (from inside light) -->
<ellipse cx="150" cy="248" rx="100" ry="92" fill="#ff8800" filter="url(#pbloom2)" opacity="0.55"/>
<ellipse cx="150" cy="248" rx="80" ry="72" fill="#ffcc00" filter="url(#pbloom)" opacity="0.35"/>

<!-- PUMPKIN BODY — multi-lobe round shape -->
<!-- Main center lobe -->
<ellipse cx="150" cy="248" rx="75" ry="80" fill="url(#pBody)"/>
<!-- Left lobe -->
<ellipse cx="98" cy="258" rx="52" ry="68" fill="#cc5500"/>
<!-- Right lobe -->
<ellipse cx="202" cy="258" rx="52" ry="68" fill="#cc5500"/>
<!-- Outer left lobe -->
<ellipse cx="58" cy="272" rx="32" ry="50" fill="#aa4400"/>
<!-- Outer right lobe -->
<ellipse cx="242" cy="272" rx="32" ry="50" fill="#aa4400"/>
<!-- Redraw center on top for layering -->
<ellipse cx="150" cy="248" rx="75" ry="80" fill="url(#pBody)"/>
<!-- Lobe separating grooves (dark lines) -->
<g stroke="#551a00" stroke-width="3" fill="none" opacity="0.8">
  <path d="M 125,175 Q 120,248 125,320"/>
  <path d="M 175,175 Q 180,248 175,320"/>
</g>
<!-- Pumpkin ribs -->
<g stroke="#aa4400" stroke-width="1.5" fill="none" opacity="0.4">
  <path d="M 100,195 Q 88,248 100,300"/><path d="M 200,195 Q 212,248 200,300"/>
</g>
<!-- Bottom of pumpkin -->
<ellipse cx="150" cy="320" rx="80" ry="15" fill="#441a00" opacity="0.7"/>
<!-- Pumpkin top -->
<ellipse cx="150" cy="170" rx="80" ry="18" fill="#441a00" opacity="0.5"/>

<!-- STEM -->
<path d="M 142,172 Q 138,145 135,128 Q 138,118 148,122 Q 152,130 150,172 Z" fill="url(#pStem)"/>
<path d="M 158,172 Q 162,148 168,132 Q 165,118 155,120 Q 150,128 150,172 Z" fill="#3a5818" opacity="0.8"/>
<!-- Leaf -->
<path d="M 148,135 Q 120,118 108,100 Q 128,108 148,128 Z" fill="#3a6018" opacity="0.8"/>
<path d="M 148,135 Q 122,120 112,102 L 114,104 Q 124,122 148,137 Z" fill="#5a8028" opacity="0.5"/>
<!-- Vine curl -->
<path d="M 148,130 Q 140,115 145,105 Q 152,98 155,108 Q 155,118 148,122" fill="none" stroke="#3a6018" stroke-width="2" stroke-linecap="round"/>

<!-- FACE — jack-o-lantern (glowing from inside) -->
<!-- Eye glow bloom -->
<ellipse cx="118" cy="232" rx="26" ry="22" fill="#ffcc00" filter="url(#pbloom)" opacity="0.8"/>
<ellipse cx="182" cy="232" rx="26" ry="22" fill="#ffcc00" filter="url(#pbloom)" opacity="0.8"/>
<!-- Triangle eyes -->
<path d="M 100,218 L 118,248 L 136,218 Z" fill="#ffcc00"/>
<path d="M 164,218 L 182,248 L 200,218 Z" fill="#ffcc00"/>
<!-- Eye inner -->
<path d="M 104,222 L 118,244 L 132,222 Z" fill="#ffffff" opacity="0.7"/>
<path d="M 168,222 L 182,244 L 196,222 Z" fill="#ffffff" opacity="0.7"/>

<!-- Mouth glow bloom -->
<ellipse cx="150" cy="290" rx="52" ry="22" fill="#ffaa00" filter="url(#pbloom)" opacity="0.75"/>
<!-- Jagged mouth -->
<path d="M 98,278 L 108,298 L 120,278 L 132,298 L 144,278 L 150,295 L 156,278 L 168,298 L 180,278 L 192,298 L 202,278 Q 200,305 150,308 Q 100,305 98,278 Z" fill="#ffbb00"/>
<!-- Mouth inner (darker) -->
<path d="M 100,280 L 109,296 L 121,280 L 133,296 L 145,280 L 150,294 L 155,280 L 167,296 L 179,280 L 191,296 L 200,280 Q 198,302 150,305 Q 102,302 100,280 Z" fill="#ffee44" opacity="0.7"/>
<!-- Inner fire glow -->
<ellipse cx="150" cy="248" rx="55" ry="55" fill="url(#pFace)" opacity="0.35"/>

<!-- Nose (triangle) -->
<path d="M 142,265 L 150,278 L 158,265 Z" fill="#ff8800" opacity="0.9"/>

<!-- Ground shadow -->
<ellipse cx="150" cy="370" rx="85" ry="15" fill="#220a00" opacity="0.7"/>
<ellipse cx="150" cy="368" rx="65" ry="10" fill="#441400" opacity="0.4" filter="url(#pg8)"/>
</svg>`,

};
