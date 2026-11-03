// Verifies every /images or /brand file referenced in source exists in public/.
import fs from "node:fs";
import path from "node:path";

const missing = [];
const found = new Set();
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== "node_modules") walk(f);
    else if (/\.(ts|tsx|css|mjs|js)$/.test(e.name)) {
      const s = fs.readFileSync(f, "utf8");
      for (const m of s.matchAll(/["'](\/(?:images|brand)\/[^"'?]+\.(?:png|jpg|jpeg|svg))/g)) {
        found.add(m[1]);
      }
    }
  }
}
walk("src");
for (const p of found) {
  if (!fs.existsSync(path.join("public", p))) missing.push(p);
}
console.log("referenced:", found.size, "missing:", missing.length);
missing.forEach((m) => console.log("MISSING", m));
