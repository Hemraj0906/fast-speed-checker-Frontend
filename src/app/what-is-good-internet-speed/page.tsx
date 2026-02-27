import React from "react";
import Link from "next/link";

export const metadata = {
  title: "What is Good Internet Speed? | Fast Speed Checker",
  description:
    "Find out what internet speed you need for streaming, gaming, work and daily browsing.",
};

export default function WhatIsGoodInternetSpeed() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">What is Good Internet Speed?</h1>

      <p className="mb-6 text-muted-foreground">
        A good internet speed depends on your usage. Below is a simple guide:
      </p>

      <ul className="space-y-3">
        <li>🔹 Browsing & Social Media: 5–10 Mbps</li>
        <li>🔹 HD Streaming (Netflix, YouTube): 15–25 Mbps</li>
        <li>🔹 4K Streaming: 40+ Mbps</li>
        <li>🔹 Online Gaming: 25+ Mbps (Low Ping Required)</li>
        <li>🔹 Work From Home: 50+ Mbps Recommended</li>
      </ul>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline cursor-pointer">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
