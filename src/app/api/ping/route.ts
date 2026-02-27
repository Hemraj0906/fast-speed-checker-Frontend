import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Cache-Control": "no-store, no-cache",
      "Access-Control-Allow-Origin": "*",
      "X-Timestamp": Date.now().toString(),
    },
  });
}
