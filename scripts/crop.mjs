// Crop helper: node scripts/crop.mjs <in.png> <left top right bottom> <out.png>
import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const [,, inFile, box, outFile] = process.argv;
const [l, t, r, b] = box.split(/[ ,x]+/).map(Number);
const img = await loadImage(fs.readFileSync(inFile));
const w = Math.min(r, img.width) - l, h = Math.min(b, img.height) - t;
const canvas = createCanvas(w, h);
const ctx = canvas.getContext("2d");
ctx.drawImage(img, l, t, w, h, 0, 0, w, h);
fs.writeFileSync(outFile, await canvas.encode("png"));
console.log("cropped", outFile, `${w}x${h}`);
