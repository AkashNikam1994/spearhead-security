/**
 * Read-only listing API for published front-end content.
 * GET /api/services → enabled services
 */
import { NextResponse } from "next/server";
import { activeServices } from "@/config/services";

export async function GET() {
  return NextResponse.json({
    ok: true,
    services: activeServices.map(({ slug, title, shortTitle, summary, image }) => ({
      slug, title, shortTitle, summary, image,
    })),
  });
}
