/**
 * Production deployment packager (Node/VPS target).
 *
 *   npm run deploy:build
 *
 * Produces:
 *   deploy/spearhead-security/          self-contained production bundle
 *     ├─ server.js                      run with:  node server.js
 *     ├─ package.json / node_modules    trimmed production deps (from standalone)
 *     ├─ .next/                         server + static assets (static copied in)
 *     ├─ public/                        images, brand assets, favicon files
 *     └─ DEPLOY.md                      step-by-step server instructions
 *   deploy/spearhead-security.tar.gz    uploadable archive (best-effort)
 *
 * Notes:
 * - Set NEXT_PUBLIC_SITE_URL (e.g. https://yourdomain.com) in the environment or
 *   .env BEFORE building — canonical/OG URLs are baked into the prerendered pages.
 * - Runtime data (form submissions, uploads) is written to ./data/ next to
 *   server.js — make sure the deploy user can write to it.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const bundleName = "spearhead-security";
const deployDir = path.join(root, "deploy");
const outDir = path.join(deployDir, bundleName);
const standalone = path.join(root, ".next", "standalone");

const rmrf = (p) => fs.rmSync(p, { recursive: true, force: true });

function copy(src, dest) {
  fs.cpSync(src, dest, { recursive: true, dereference: true });
  console.log("copied", path.relative(root, src), "→", path.relative(deployDir, dest));
}

/* ── 0. build (standalone) if missing ──────────────────────────────────────── */
if (!fs.existsSync(path.join(standalone, "server.js"))) {
  console.log("no standalone build found — running `next build` …");
  const buildBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
  const { status, error } = spawnSync(process.execPath, [buildBin, "build"], {
    stdio: "inherit",
    shell: false,
    env: process.env,
    cwd: root,
  });
  if (status !== 0 || error) {
    console.error("build failed — aborting.");
    process.exit(status ?? 1);
  }
}

/* ── 0. pre-flight ─────────────────────────────────────────────────────────── */
if (!fs.existsSync(path.join(standalone, "server.js"))) {
  console.error(
    "Unexpected: .next/standalone/server.js still missing after build.\n" +
      "Check that next.config.mjs has `output: \"standalone\"`."
  );
  process.exit(1);
}

/* ── 1. assemble the bundle ────────────────────────────────────────────────── */
rmrf(deployDir);
fs.mkdirSync(outDir, { recursive: true });

console.log("assembling deploy bundle…");
copy(standalone, outDir);
copy(path.join(root, "public"), path.join(outDir, "public"));
copy(path.join(root, ".next", "static"), path.join(outDir, ".next", "static"));
copy(path.join(root, ".env.example"), path.join(outDir, ".env.example"));

/* ── 2. instructions ───────────────────────────────────────────────────────── */
const deployDoc = `# Deploying Spearhead Security Service (Node VPS)

This folder is a self-contained production bundle. No "npm install" is needed.

## 1. Upload & extract

Upload \`spearhead-security.tar.gz\` to the server and extract it:

    tar -xzf spearhead-security.tar.gz
    cd spearhead-security

## 2. Configure environment

Create \`.env\` next to \`server.js\` (or export the vars):

    NEXT_PUBLIC_SITE_URL=https://your-domain.com
    # optional email notifications for enquiries:
    # RESEND_API_KEY=...
    # ENQUIRY_NOTICE_EMAIL=...

NOTE: canonical/OG URLs are baked into the prerendered pages at build time.
If you change NEXT_PUBLIC_SITE_URL, rebuild the bundle and redeploy.

## 3. Run

    node server.js            # or: PORT=80 node server.js   (root not required; use a proxy)

Recommended: run under a process manager on a non-root port and reverse-proxy
(no title: none:, TLS handled at nginx/caddy):

    pm2 start server.js --name spearhead && pm2 save
    # nginx: proxy_pass http://127.0.0.1:3000;

## 4. writable runtime data

Enquiries and career applications are stored to ./data/ (JSON files and
./data/uploads/ for resumes) next to server.js. Ensure the runtime user owns it.
For production durability, point src/lib/store.ts at PostgreSQL (schema in
server/db/schema.sql in the source repository).

## 5. verify

    curl -I http://127.0.0.1:3000/            # 200
    curl -F ... http://127.0.0.1:3000/api/enquiries   # smoke-test the form APIs
`;
fs.writeFileSync(path.join(outDir, "DEPLOY.md"), deployDoc);
console.log("wrote DEPLOY.md");

/* ── 3. archive (best-effort) ──────────────────────────────────────────────── */
const archive = path.join(deployDir, `${bundleName}.tar.gz`);
const attempts = [
  {
    cmd: "tar",
    args: ["-czf", archive, "-C", deployDir, bundleName],
    dirs: [path.dirname(process.execPath)],
  },
  {
    cmd: os.platform() === "win32" && "powershell",
    args: [
      "-NoProfile",
      "-Command",
      `Compress-Archive -Path '${outDir}\\*' -DestinationPath '${path.join(deployDir, bundleName + ".zip")}' -Force`,
    ],
  },
];
for (const a of attempts) {
  if (!a.cmd) continue;
  const r = spawnSync(a.cmd, a.args, { stdio: "ignore", shell: a.cmd === "powershell" });
  if (r.status === 0) {
    console.log("archive written:", path.relative(root, archive));
    break;
  }
}

const kb = (p) => {
  let total = 0;
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f);
      else total += fs.statSync(f).size;
    }
  };
  walk(p);
  return `${(total / 1024 / 1024).toFixed(1)} MB`;
};
console.log(`\nDone: ${path.relative(root, outDir)} (${kb(outDir)})`);
console.log(`Start locally with:  cd deploy/${bundleName} && node server.js`);
