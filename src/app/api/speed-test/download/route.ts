import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const size = Math.min(
    parseInt(searchParams.get("size") || "2097152"),
    10 * 1024 * 1024
  ); // max 10MB

  // Generate random bytes for accurate measurement
  const chunk = new Uint8Array(size);
  // Fill with pseudo-random data (prevents compression)
  for (let i = 0; i < chunk.length; i += 4096) {
    const rand = Math.random() * 0xffffffff;
    chunk[i] = rand & 0xff;
    if (i + 1 < chunk.length) chunk[i + 1] = (rand >> 8) & 0xff;
    if (i + 2 < chunk.length) chunk[i + 2] = (rand >> 16) & 0xff;
    if (i + 3 < chunk.length) chunk[i + 3] = (rand >> 24) & 0xff;
  }

  return new NextResponse(chunk, {
    status: 200,
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": size.toString(),
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
