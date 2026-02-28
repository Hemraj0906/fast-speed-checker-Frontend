import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    try {
        // 1. Get the user's IP from headers
        const forwardedFor = request.headers.get("x-forwarded-for");
        const realIp = request.headers.get("x-real-ip");

        // In local development, these might be empty or loopback addresses
        let userIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (realIp || "");

        // If it's a local address or missing, we can ask an external service 
        // to detect our public IP as a fallback
        const isLocal = !userIp || userIp === '::1' || userIp === '127.0.0.1' || userIp === 'localhost';

        const fetchUrl = isLocal
            ? 'http://ip-api.com/json/'
            : `http://ip-api.com/json/${userIp}`;

        const response = await fetch(fetchUrl);

        if (!response.ok) {
            throw new Error(`IP API responded with status: ${response.status}`);
        }

        const data = await response.json();

        return NextResponse.json({
            ip: data.query || userIp || "Unknown IP",
            isp: data.isp || data.org || "Unknown ISP",
            city: data.city || "Unknown City",
            region: data.regionName || "Unknown Region",
            country: data.country || "Unknown Country",
            countryCode: data.countryCode || ""
        });

    } catch (error) {
        console.error("Error fetching IP details:", error);
        // Fallback response if the external API fails
        return NextResponse.json({
            ip: "Unavailable",
            isp: "Unknown ISP",
            city: "Unknown",
            region: "Unknown",
            country: "Unknown",
            countryCode: ""
        });
    }
}
