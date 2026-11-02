/** Append a JSON record to a JSON-array file with fsync-safe sequencing. */
let queue: Promise<void> = Promise.resolve();

export async function appendRecord(file: string, record: Record<string, unknown>) {
  queue = queue.then(async () => {
    const { readFile, writeFile } = await import("node:fs/promises");
    let arr: unknown[] = [];
    try {
      arr = JSON.parse(await readFile(file, "utf8"));
      if (!Array.isArray(arr)) arr = [];
    } catch {
      arr = [];
    }
    arr.push(record);
    await writeFile(file, JSON.stringify(arr, null, 2), "utf8");
  });
  return queue;
}
