// Extract brochure text (per page) + embedded JPEG images.
import fs from "node:fs";
import path from "node:path";

const PDF = path.resolve(process.cwd(), "brochure-ref.pdf");

/* ── 1. text ── */
let textOut = "";
try {
  const { PDFParse } = await import("pdf-parse");
  const parser = new PDFParse({ url: PDF });
  const result = await parser.getText();
  textOut = result.text;
  await parser.destroy?.();
} catch (e) {
  console.log("pdf-parse failed:", String(e).slice(0, 300));
}
if (textOut) {
  console.log("═".repeat(70));
  console.log(textOut);
}

/* ── 2. embedded JPEG extraction (binary scan) ── */
const buf = fs.readFileSync(PDF);
const outDir = path.resolve(process.cwd(), "brochure-assets");
fs.mkdirSync(outDir, { recursive: true });

const jpegs = [];
for (let i = 0; i < buf.length - 3; i++) {
  if (buf[i] === 0xff && buf[i + 1] === 0xd8 && buf[i + 2] === 0xff) {
    jpegs.push(i);
  }
}
const starts = jpegs.filter((s, idx) => {
  const end = buf.indexOf(Buffer.from([0xff, 0xd9]), s);
  if (end === -1 || end - s < 5000) return false;
  // avoid nested duplicates
  return true;
});
let count = 0;
const usedRanges = [];
for (const s of starts) {
  const end = buf.indexOf(Buffer.from([0xff, 0xd9]), s);
  if (end === -1) continue;
  if (usedRanges.some(([a, b]) => s >= a && s <= b)) continue;
  const data = buf.subarray(s, end + 2);
  usedRanges.push([s, end + 2]);
  count++;
  const file = path.join(outDir, `img${String(count).padStart(2, "0")}.jpg`);
  fs.writeFileSync(file, data);
}
console.log(`Extracted ${count} JPEG candidates ➜ ${outDir}`);
for (let i = 1; i <= count; i++) {
  const f = path.join(outDir, `img${String(i).padStart(2, "0")}.jpg`);
  const s = fs.statSync(f);
  console.log(" ", path.basename(f), `${(s.size / 1024).toFixed(0)} KB`);
}
