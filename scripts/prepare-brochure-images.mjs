/**
 * Prepares final brand/photo assets for the website from the extracted
 * brochure material (brochure-assets/). Run once:
 *   node scripts/prepare-brochure-images.mjs
 *
 * 1. Re-renders brochure page 1 at high DPI for crisp logo crops.
 * 2. Removes the baked-in light-grey background of the logo crops
 *    (edge-connected flood fill, tolerance-based) → transparent PNGs.
 * 3. Samples the logo's dominant colours and prints them (for design tokens).
 * 4. Copies/optimises authentic Spearhead photographs into public/images.
 * 5. Generates the favicon (src/app/icon.png) from the logo mark.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { loadImage, createCanvas } = require("@napi-rs/canvas");
const pdfjsRoot = path.dirname(require.resolve("pdfjs-dist/package.json"));
const pdfjs = require(path.join(pdfjsRoot, "legacy", "build", "pdf.mjs"));

const ASSETS = path.resolve(process.cwd(), "brochure-assets");
const PUBLIC = path.resolve(process.cwd(), "public");
const mkdir = (p) => fs.mkdirSync(p, { recursive: true });

/* zap-note: helpers */
const load = (f) => loadImage(fs.readFileSync(path.join(ASSETS, f)));
const savePng = async (canvas, file) =>
  fs.writeFileSync(file, await canvas.encode("png"));
const saveJpg = async (canvas, file, q = 90) =>
  fs.writeFileSync(file, await canvas.encode("jpeg", q)); // q: 0–100 integer

/* ── 1. high-DPI logo render + crop ─────────────────────────────────────── */
{
  const data = new Uint8Array(fs.readFileSync(path.resolve(process.cwd(), "brochure-ref.pdf")));
  const doc = await pdfjs.getDocument({ data }).promise;
  const page = await doc.getPage(1);
  const vp = page.getViewport({ scale: 6 });
  const canvas = createCanvas(vp.width, vp.height);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, vp.width, vp.height);
  await page.render({ canvasContext: ctx, viewport: vp, canvas }).promise;
  await savePng(canvas, path.join(ASSETS, "page1-hi.png"));
  console.log("hi-res page rendered");
}

/* ── 2. flood-fill background removal ───────────────────────────────────── */
function removeBg(img, tol = 34) {
  const w = img.width, h = img.height;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h);
  const px = data.data;
  const seedIdx = (0 * w + 0) * 4;
  const [sr, sg, sb] = [px[seedIdx], px[seedIdx + 1], px[seedIdx + 2]];
  const near = (i) => {
    const dr = px[i] - sr, dg = px[i + 1] - sg, db = px[i + 2] - sb;
    return dr * dr + dg * dg + db * db <= tol * tol * 3;
  };
  const seen = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) { stack.push(x); stack.push((h - 1) * w + x); }
  for (let y = 0; y < h; y++) { stack.push(y * w); stack.push(y * w + w - 1); }
  while (stack.length) {
    const p = stack.pop();
    if (p < 0 || p >= w * h || seen[p]) continue;
    seen[p] = 1;
    if (!near(p * 4)) continue;
    px[p * 4 + 3] = 0;
    const x = p % w;
    if (x > 0) stack.push(p - 1);
    if (x < w - 1) stack.push(p + 1);
    if (p >= w) stack.push(p - w);
    if (p < w * (h - 1)) stack.push(p + w);
  }
  ctx.putImageData(data, 0, 0);
  return canvas;
}

/* logo crops (coordinates measured from the 3× render, ×2 for 6×) */
const logoMarkRaw = await load("logo-mark.png"); // 215x255 @3x
const mark = removeBg(logoMarkRaw);

const pageHi = await load("page1-hi.png"); // 3672x4752 @6x
async function crop(img, l, t, r, b) {
  const w = r - l, h = b - t;
  const canvas = createCanvas(w, h);
  canvas.getContext("2d").drawImage(img, l, t, w, h, 0, 0, w, h);
  return canvas;
}
const lockupRaw = await crop(pageHi, 2080, 280, 3360, 680); // 6× coords
const lockup = removeBg(lockupRaw);

const brandDir = path.join(PUBLIC, "brand");
mkdir(brandDir);
await savePng(mark, path.join(brandDir, "logo-mark.png"));
await savePng(lockup, path.join(brandDir, "logo-horizontal.png"));
console.log("logo assets written (transparent)");

/* ── 3. colour sampling from the mark ───────────────────────────────────── */
{
  const ctx = mark.getContext("2d");
  const d = ctx.getImageData(0, 0, mark.width, mark.height).data;
  const buckets = new Map();
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 200) continue;
    const r = d[i], g = d[i + 1], b = d[i + 2];
    const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }
  const top = [...buckets.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([key, n]) => {
      const [r, g, b] = key.split("-").map((v) => (parseInt(v) << 4) + 8);
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")} ×${n}`;
    });
  console.log("logo dominant colours:", top.join("  "));
}

/* ── 4. favicon (512px square, mark centred, transparent) ───────────────── */
{
  const S = 512;
  const c = createCanvas(S, S);
  const ctx = c.getContext("2d");
  const m = mark.width / mark.height;
  const h = S * 0.82, w = h * m;
  ctx.drawImage(mark, (S - w) / 2, (S - h) / 2, w, h);
  await savePng(c, path.resolve(process.cwd(), "src", "app", "icon.png"));
  console.log("favicon written → src/app/icon.png");
}

/* ── 5. authentic photography → public/images ───────────────────────────── */
/**
 * Sources are embedded brochure JPEGs at their native resolution. Displayed
 * slots can be larger than the native pixels, so each target gets:
 *   - a modest 2× high-quality upscale when the native width is much smaller
 *     than its largest display slot (avoids browser upscaling blur), and
 *   - an unsharp-mask pass to restore perceived crispness, then JPEG q0.9.
 * The hero band (2105px) is wide enough already — re-encoded only.
 */
const displayWidth = { img01: 1920, img02: 2105, img03: 900, img04: 640 }; // others: 640

function upscale(img, scale) {
  const canvas = createCanvas(Math.round(img.width * scale), Math.round(img.height * scale));
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas;
}

/** Unsharp mask (3×3) — restores crispness after upscaling. amount ≈ 0.35 */
function sharpen(canvas, amount = 0.35) {
  const ctx = canvas.getContext("2d");
  const { width: w, height: h } = canvas;
  const src = ctx.getImageData(0, 0, w, h);
  const s = src.data;
  const out = ctx.createImageData(w, h);
  const d = out.data;
  const at = (x, y, c) =>
    s[((y < 0 ? 0 : y >= h ? h - 1 : y) * w + (x < 0 ? 0 : x >= w ? w - 1 : x)) * 4 + c];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      for (let c = 0; c < 3; c++) {
        const blur =
          (at(x - 1, y, c) + at(x + 1, y, c) + at(x, y - 1, c) + at(x, y + 1, c)) / 4;
        d[i + c] = Math.max(0, Math.min(255, s[i + c] + amount * (s[i + c] - blur)));
      }
      d[i + 3] = s[i + 3];
    }
  }
  ctx.putImageData(out, 0, 0);
  return canvas;
}

const photoTargets = [
  // [source, dest, jpegQuality(0-100), upscale×]
  ["img02.jpg", "images/home/hero.jpg", 92, 1],              // radio close-up banner 2105×574
  ["img04.jpg", "images/extra/intro.jpg", 92, 1],            // classroom training 967×491
  ["img01.jpg", "images/home/cta.jpg", 90, 2],               // wide monitoring strip → 1838 (full-bleed bg)
  ["img01.jpg", "images/services/surveillance.jpg", 90, 2],
  ["img06.jpg", "images/home/careers.jpg", 90, 2],           // guard formation 405→810
  ["img06.jpg", "images/services/industrial-security.jpg", 90, 2],
  ["img14.jpg", "images/home/training.jpg", 90, 2],          // training audience 450→900
  ["img17.jpg", "images/services/safety-fire-fighting.jpg", 90, 2],
  ["img15.jpg", "images/services/armed-guards.jpg", 90, 2],
  ["img03.jpg", "images/extra/guards-award.jpg", 90, 1.5],   // 586→879
  ["img16.jpg", "images/extra/medal-ceremony.jpg", 90, 2],
  ["img18.jpg", "images/extra/deployment-briefing.jpg", 90, 2],
  ["img13.jpg", "images/extra/fire-safety-classroom.jpg", 90, 2],
  ["img05.jpg", "images/extra/fire-drill.jpg", 90, 2],       // 353→706
];

for (const [srcName, dest, q, scale] of photoTargets) {
  const img = await load(srcName);
  const dw = displayWidth[srcName.replace(".jpg", "")] ?? 640;
  const needUp = img.width < dw * 0.9;
  const effScale = needUp ? scale : 1;
  let canvas = effScale > 1 ? upscale(img, effScale) : (() => {
    const c = createCanvas(img.width, img.height);
    c.getContext("2d").drawImage(img, 0, 0);
    return c;
  })();
  sharpen(canvas);
  const file = path.join(PUBLIC, dest);
  mkdir(path.dirname(file));
  await saveJpg(canvas, file, q);
  console.log("photo", dest, `${img.width}×${img.height} → ${canvas.width}×${canvas.height} (×${effScale}, sharpened)`);
}
console.log("done");
