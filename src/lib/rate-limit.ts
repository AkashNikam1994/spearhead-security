/**
 * Lightweight in-process rate limiter for API routes.
 * Suitable for a single instance; use Redis (e.g. Upstash) behind a multi-node
 * deployment — swap this module in one place.
 */
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function rateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const list = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_REQUESTS) {
    hits.set(key, list);
    return { allowed: false, remaining: 0 };
  }
  list.push(now);
  hits.set(key, list);
  // opportunistic cleanup
  if (hits.size > 500) {
    hits.forEach((v, k) => {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    });
  }
  return { allowed: true, remaining: MAX_REQUESTS - list.length };
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd ? fwd.split(",")[0].trim() : "local";
}
