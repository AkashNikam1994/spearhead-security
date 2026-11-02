import { mkdirSync } from "node:fs";
import path from "node:path";

/**
 * Server-side records storage.
 *
 * Default: append-once JSON files under ./data (git-ignored) so that business
 * enquiries NEVER live only in the browser. For production, provision
 * PostgreSQL with the schema in server/db/schema.sql and swap the two
 * `saveRecords*` functions for SQL inserts (documented in README.md).
 */

const DATA_DIR = path.join(process.cwd(), "data");
const UPLOAD_DIR = path.join(process.cwd(), "data", "uploads");

function ensureDirs() {
  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(UPLOAD_DIR, { recursive: true });
}

export async function saveRecord(kind: "enquiries" | "applications", record: Record<string, unknown>) {
  ensureDirs();
  const file = path.join(DATA_DIR, `${kind}.json`);
  const { appendRecord } = await import("./append-json");
  await appendRecord(file, record);
  return record;
}

export async function saveResume(fileName: string, bytes: Buffer) {
  ensureDirs();
  const safe = `${Date.now()}-${fileName.replace(/[^\w.\-]/g, "_")}`;
  const { writeFile } = await import("node:fs/promises");
  const p = path.join(UPLOAD_DIR, safe);
  await writeFile(p, bytes);
  return p; // server-side path stored in the record — never web-served
}

export { UPLOAD_DIR };
