import { NextResponse } from "next/server";

import { getAdsTxtBody } from "@/lib/adsense-config";

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(getAdsTxtBody(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
