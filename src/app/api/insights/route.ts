/**
 * Read-only listing API for published insight articles.
 * GET /api/insights → published articles (drafts are never exposed)
 */
import { NextResponse } from "next/server";
import { publishedInsights } from "@/config/insights";

export async function GET() {
  return NextResponse.json({
    ok: true,
    insights: publishedInsights.map(({ slug, title, category, excerpt, date, readMinutes }) => ({
      slug, title, category, excerpt, date, readMinutes,
    })),
  });
}
