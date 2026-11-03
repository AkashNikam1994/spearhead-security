// Render brochure pages to PNG at high DPI for logo extraction.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const PDF = path.resolve(process.cwd(), "brochure-ref.pdf");
const { createCanvas } = require("@napi-rs/canvas");
const pdfjsPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
const pdfjs = require(path.join(pdfjsPath, "legacy", "build", "pdf.mjs"));

const data = new Uint8Array(fs.readFileSync(PDF));
const doc = await pdfjs.getDocument({ data }).promise;

const outDir = path.resolve(process.cwd(), "brochure-assets");
fs.mkdirSync(outDir, { recursive: true });

for (let p = 1; p <= doc.numPages; p++) {
  const page = await doc.getPage(p);
  const scale = 3; // ~216 DPI
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, viewport.width, viewport.height);
  await page.render({ canvasContext: ctx, viewport, canvas }).promise;
  const file = path.join(outDir, `page${p}.png`);
  await canvas.encode("png").then((b) => fs.writeFileSync(file, b));
  console.log("rendered", path.basename(file), Math.round(viewport.width) + "x" + Math.round(viewport.height));
}
