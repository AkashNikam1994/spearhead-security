/**
 * Placeholder image generator for Spearhead Security.
 *
 * The website image slots reference files under /public/images. Until real
 * commissioned photography is supplied, this script renders premium branded
 * gradient placeholders ("Navy Dusk" series) so every section looks finished.
 *
 * Each PNG is a layered composition: base vertical gradient, a soft radial
 * light, a large diagonal security chevron motif, subtle grain and a vignette.
 * Replace any generated file (same filename) with a real photograph and the
 * website updates with zero code changes.
 *
 * Usage: node scripts/generate-placeholders.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = path.resolve(process.cwd(), "public", "images");
mkdirSync(ROOT, { recursive: true });

/* ── palette ──────────────────────────────────────────────────────────── */
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

const NAVY_MID = [13, 32, 53]; // #0D2035
const STEEL = [23, 61, 91]; // #173D5B
const DEEP = [8, 21, 36]; // #081524
const GOLD = [194, 154, 81]; // #C29A51
const SLATE = [99, 112, 131]; // #637083

/* ── helpers ──────────────────────────────────────────────────────────── */
const clamp = (v) => (v < 0 ? 0 : v > 255 ? 255 : v | 0);

/** fast deterministic grain (xorshift128), avoids expensive per-pixel hashing */
let gs = 0;
function grain(x, y, seed) {
  if (gs === 0) gs = ~(seed * 2654435761) | 0;
  gs ^= gs << 13; gs ^= gs >>> 17; gs ^= gs << 5;
  return (gs % 13) - 6; // ±6 banded noise
}

/** minimal PNG writer (truecolor, 8-bit) */
function writePng(file, w, h, pixelFn) {
  const raw = Buffer.alloc((w * 3 + 1) * h);
  let p = 0;
  for (let y = 0; y < h; y++) {
    raw[p++] = 0; // no filter
    for (let x = 0; x < w; x++) {
      const [r, g, b] = pixelFn(x, y, w, h);
      raw[p++] = clamp(r);
      raw[p++] = clamp(g);
      raw[p++] = clamp(b);
    }
  }
  const crcTable = [...Array(256)].map((_, n) => {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c >>> 0;
  });
  const crc = (buf) => {
    let c = 0xffffffff;
    for (const v of buf) c = crcTable[(c ^ v) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };
  const chunk = (type, data) => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const t = Buffer.from(type);
    const c = Buffer.alloc(4);
    c.writeUInt32BE(crc(Buffer.concat([t, data])));
    return Buffer.concat([len, t, data, c]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  writeFileSync(file, png);
  console.log("  ✓", path.relative(process.cwd(), file), `${w}×${h}`);
}

/**
 * Shared renderer.
 * opts:
 *   top/bottom      – gradient stops [r,g,b]
 *   variant         – "chevrons" | "guard-line" | "shield" | "grid" | "wave"
 *   lightAt [x,y,r] – soft radial highlight position
 *   goldAccent 0..1 – strength of gold rim light at the bottom edge
 *   silhouette      – number of standing-figure silhouettes along the bottom
 */
function render(file, w, h, opts) {
  const {
    top = DEEP,
    bottom = NAVY_MID,
    variant = "chevrons",
    lightAt = [0.72, 0.3, 0.55],
    goldAccent = 0.25,
    silhouette = 0,
    seed = 7,
  } = opts;

  writePng(file, w, h, (x, y, W, H) => {
    const fx = x / W, fy = y / H;

    // base gradient with a bottom-half darkening (text overlay zone)
    let c = mix(top, bottom, Math.min(1, Math.pow(fy, 1.25)));

    // radial architectural light
    const [lx, ly, lr] = lightAt;
    const d = Math.hypot(fx - lx, (fy - ly) * 0.85);
    const glow = Math.max(0, 1 - d / lr) ** 2 * 0.55;
    c = mix(c, mix(STEEL, [148, 160, 175], 0.45), glow);

    // gold rim light along lower third — dusk ambience
    if (y > H * 0.62) {
      const rim = (1 - (y - H * 0.62) / (H * 0.38)) * goldAccent;
      c = mix(c, GOLD, rim * 0.35);
    }

    // motif layer
    if (variant === "chevrons" || variant === "shield") {
      // large diagonal chevrons echoing the spearhead mark
      const band = ((x + y * 0.55) % 260) / 260;
      const edge = 1 - Math.abs(band - 0.5) * 4; // soft triangle edges
      const strength = Math.max(0, edge) * 0.16;
      c = mix(c, STEEL, strength);
    } else if (variant === "grid") {
      const gx = x % 84, gy = y % 84;
      const line = (gx < 2 || gy < 2) ? 0.14 : 0;
      c = mix(c, STEEL, line);
    } else if (variant === "wave") {
      const wv = Math.sin((x * 0.006 + y * 0.012) * Math.PI) * 0.5 + 0.5;
      c = mix(c, STEEL, wv * 0.18);
    }

    if (variant === "shield") {
      // faint geometric shield outline centre-right
      const sx = Math.abs(fx - 0.72) * W, sy = Math.abs(fy - 0.42) * H;
      const shield =
        (Math.abs(sx - sy * 0.9) < 3 && sy < W * 0.16) ||
        (sy > H * 0.34 && sy < H * 0.35 && sx < W * 0.13) ? 0.5 : 0;
      c = mix(c, GOLD, shield * 0.4);
    }

    // figure silhouettes along the bottom (symbolic staff presence)
    if (silhouette > 0 && y > H * 0.78) {
      const ground = H * 0.78;
      for (let i = 0; i < silhouette; i++) {
        const cx = ((i + 0.5) / silhouette + (seed % 5) * 0.017) * W;
        const bodyR = 16 + (i % 3) * 3;
        const dx = x - cx;
        const inHead = dx * dx / (18 * 18) + (y - ground - 12) ** 2 / (20 * 20) < 1;
        const inBody =
          Math.abs(dx) < bodyR && y > ground + 26 && y < H * 0.965;
        if (inHead || inBody) c = mix(c, [4, 10, 18], 0.85);
      }
      // ground shadow band
      if (y > H * 0.965) c = mix(c, DEEP, 0.5);
    }

    // gentle vignette
    const vig = Math.max(0, Math.hypot(fx - 0.5, fy - 0.5) - 0.4) / 0.6;
    c = mix(c, DEEP, vig * 0.5);

    return [c[0] + grain(x, y, seed), c[1] + grain(x, y, seed), c[2] + grain(x, y, seed)];
  });
}

/* ── image catalogue (mirror of src/config content) ───────────────────── */
const specs = [
  // home
  ["home/hero.png", 1920, 1080, { variant: "chevrons", lightAt: [0.74, 0.28, 0.6], goldAccent: 0.3, silhouette: 3, seed: 11 }],
  ["home/intro.png", 1200, 900, { variant: "grid", top: STEEL, bottom: NAVY_MID, lightAt: [0.35, 0.3, 0.55], goldAccent: 0.15, seed: 21 }],
  ["home/training.png", 1400, 950, { variant: "wave", top: NAVY_MID, bottom: DEEP, lightAt: [0.5, 0.25, 0.7], goldAccent: 0.2, silhouette: 4, seed: 31 }],
  ["home/careers.png", 1400, 900, { variant: "chevrons", lightAt: [0.5, 0.3, 0.6], goldAccent: 0.22, silhouette: 5, seed: 41 }],
  ["home/cta.png", 1920, 760, { variant: "shield", lightAt: [0.3, 0.35, 0.6], goldAccent: 0.35, silhouette: 2, seed: 51 }],

  // services
  ["services/manned-guarding.png", 1200, 800, { variant: "chevrons", lightAt: [0.6, 0.3, 0.55], silhouette: 1, seed: 61 }],
  ["services/corporate-security.png", 1200, 800, { variant: "grid", top: STEEL, bottom: NAVY_MID, lightAt: [0.4, 0.3, 0.5], silhouette: 1, seed: 71 }],
  ["services/industrial-security.png", 1200, 800, { variant: "wave", top: DEEP, bottom: STEEL, lightAt: [0.55, 0.35, 0.6], goldAccent: 0.3, seed: 81 }],
  ["services/residential-security.png", 1200, 800, { variant: "chevrons", lightAt: [0.3, 0.3, 0.5], silhouette: 1, seed: 91 }],
  ["services/event-security.png", 1200, 800, { variant: "wave", lightAt: [0.5, 0.28, 0.65], goldAccent: 0.28, silhouette: 2, seed: 101 }],
  ["services/supervision.png", 1200, 800, { variant: "grid", top: NAVY_MID, bottom: DEEP, lightAt: [0.42, 0.3, 0.6], silhouette: 1, seed: 111 }],
  ["services/electronic-security.png", 1200, 800, { variant: "grid", top: DEEP, bottom: NAVY_MID, lightAt: [0.62, 0.32, 0.5], goldAccent: 0.18, seed: 121 }],
  ["services/risk-assessment.png", 1200, 800, { variant: "shield", top: STEEL, bottom: DEEP, lightAt: [0.68, 0.3, 0.55], goldAccent: 0.25, seed: 131 }],

  // industries
  ["industries/banking.png", 1000, 700, { variant: "chevrons", lightAt: [0.55, 0.3, 0.5], goldAccent: 0.3, seed: 141 }],
  ["industries/it-parks.png", 1000, 700, { variant: "grid", top: STEEL, bottom: NAVY_MID, lightAt: [0.45, 0.28, 0.55], seed: 151 }],
  ["industries/healthcare.png", 1000, 700, { variant: "wave", top: NAVY_MID, bottom: SLATE, lightAt: [0.4, 0.3, 0.6], seed: 161 }],
  ["industries/education.png", 1000, 700, { variant: "chevrons", lightAt: [0.5, 0.32, 0.55], goldAccent: 0.2, seed: 171 }],
  ["industries/residential.png", 1000, 700, { variant: "grid", top: STEEL, bottom: DEEP, lightAt: [0.35, 0.3, 0.55], silhouette: 1, seed: 181 }],
  ["industries/retail.png", 1000, 700, { variant: "wave", top: NAVY_MID, bottom: STEEL, lightAt: [0.55, 0.3, 0.6], goldAccent: 0.22, seed: 191 }],
  ["industries/warehousing.png", 1000, 700, { variant: "chevrons", top: DEEP, bottom: STEEL, lightAt: [0.6, 0.32, 0.6], goldAccent: 0.28, seed: 201 }],
  ["industries/hospitality.png", 1000, 700, { variant: "shield", top: NAVY_MID, bottom: STEEL, lightAt: [0.45, 0.28, 0.55], goldAccent: 0.3, seed: 211 }],
  ["industries/manufacturing.png", 1000, 700, { variant: "grid", top: DEEP, bottom: NAVY_MID, lightAt: [0.55, 0.3, 0.65], goldAccent: 0.22, seed: 221 }],

  // pages
  ["pages/about-us.png", 1600, 640, { variant: "chevrons", lightAt: [0.6, 0.3, 0.6], goldAccent: 0.3, silhouette: 2, seed: 231 }],
  ["pages/our-approach.png", 1600, 640, { variant: "grid", top: STEEL, bottom: DEEP, lightAt: [0.42, 0.3, 0.6], seed: 241 }],
  ["pages/careers.png", 1600, 640, { variant: "wave", lightAt: [0.5, 0.3, 0.6], silhouette: 3, seed: 251 }],
  ["pages/insights.png", 1600, 640, { variant: "shield", lightAt: [0.6, 0.32, 0.55], goldAccent: 0.28, seed: 261 }],
  ["pages/contact.png", 1600, 640, { variant: "chevrons", top: NAVY_MID, bottom: DEEP, lightAt: [0.35, 0.3, 0.55], goldAccent: 0.3, seed: 271 }],
  ["pages/careers-team.png", 1200, 800, { variant: "chevrons", lightAt: [0.5, 0.3, 0.6], silhouette: 4, seed: 281 }],
  ["pages/security-monitor.png", 1100, 800, { variant: "grid", top: DEEP, bottom: STEEL, lightAt: [0.6, 0.35, 0.5], goldAccent: 0.15, seed: 291 }],
];

console.log("Generating branded placeholder imagery…");
for (const [rel, w, h, opts] of specs) {
  const file = path.join(ROOT, rel);
  mkdirSync(path.dirname(file), { recursive: true });
  render(file, w, h, opts);
}
console.log("Done.");
