/** Verifies every /_next/static asset referenced by served HTML resolves (200). */
const html = await (await fetch("http://localhost:3000/")).text();
const refs = [...html.matchAll(/\/_next\/static\/[^"'?]+\.(?:js|css|woff2?|svg|png|jpg)/g)].map((m) => m[0]);
const uniq = [...new Set(refs)];
let bad = 0;
for (const r of uniq) {
  const res = await fetch("http://localhost:3000" + r);
  if (res.status !== 200) {
    bad++;
    console.log(res.status, r);
  }
}
console.log("checked", uniq.length, "static refs;", bad, "missing");
const res2 = await fetch("http://localhost:3000/");
console.log("homepage:", res2.status, "looksISR:", await res2.text().then((t) => t.includes("main-app")));
