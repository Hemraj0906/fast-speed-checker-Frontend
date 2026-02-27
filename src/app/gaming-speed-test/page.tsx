import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { Gamepad2, Activity, Wifi, Monitor, Zap, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Gaming Speed Test – Check If Your Internet is Fast Enough for Online Gaming",
  description:
    "Test your gaming internet speed with FastSpeedChecker. Check ping, jitter, download & upload for online gaming. Find out if your connection is ready for competitive play.",
  keywords: [
    "gaming speed test",
    "best internet speed for gaming",
    "ping test for gaming",
    "online gaming internet speed",
    "gaming latency test",
    "low ping internet test",
    "internet speed for ps5 gaming",
    "pc gaming internet speed test",
  ],
  openGraph: {
    title:
      "Gaming Speed Test – Is Your Internet Fast Enough for Online Gaming?",
    description:
      "Test your ping, jitter, and internet speed for gaming. Free online gaming speed test.",
    url: "https://fastspeedchecker.com/gaming-speed-test",
  },
  alternates: { canonical: "https://fastspeedchecker.com/gaming-speed-test" },
};

const gamingFaqs = [
  {
    question: "What internet speed do I need for online gaming?",
    answer:
      "For most online games, a download speed of 15–25 Mbps and upload speed of 5–10 Mbps is sufficient. However, ping (latency) matters much more than raw speed. You need ping under 50ms for a good experience and under 20ms for competitive play.",
  },
  {
    question: "What is a good ping for gaming?",
    answer:
      "A ping under 20ms is excellent and suitable for professional competitive gaming. Under 50ms is good for most online games. 50–100ms is acceptable for casual gaming. Above 100ms will cause noticeable input delay and poor gaming experience.",
  },
  {
    question: "Why is my ping high even with fast internet?",
    answer:
      "High ping despite fast internet usually means: (1) you're connecting via WiFi — switch to ethernet; (2) game servers are geographically far from you; (3) your ISP routes traffic inefficiently; (4) your router has high processing latency; or (5) other devices on your network are consuming bandwidth.",
  },
  {
    question: "Does upload speed matter for gaming?",
    answer:
      "Yes, upload speed matters for online gaming but less than download speed. Most games send small data packets requiring only 1–5 Mbps upload. However, if you stream on Twitch while gaming, you'll need 5–10 Mbps upload simultaneously.",
  },
  {
    question: "What is jitter and does it affect gaming?",
    answer:
      "Jitter is the inconsistency in your ping over time. Even if your average ping is low, high jitter causes unpredictable lag spikes. Jitter under 10ms is excellent. Over 30ms will cause noticeable issues in fast-paced competitive games.",
  },
  {
    question: "WiFi vs ethernet for gaming — which is better?",
    answer:
      "Ethernet is significantly better for gaming. A wired connection eliminates WiFi interference, provides consistent latency, and reduces jitter. If you must use WiFi, use 5GHz band instead of 2.4GHz, and place your gaming device close to the router.",
  },
];

const relatedArticles = [
  {
    href: "/",
    title: "Internet Speed Test",
    description: "Test your overall internet download and upload speed.",
  },
  {
    href: "/streaming-speed-test",
    title: "Streaming Speed Test",
    description: "Check if your speed supports 4K streaming.",
  },
  {
    href: "/what-is-good-internet-speed",
    title: "What is Good Internet Speed?",
    description: "Complete guide to internet speed requirements.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "How to Increase WiFi Speed",
    description: "Tips to reduce ping and boost gaming performance.",
  },
];

export default function GamingSpeedTestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gaming Speed Test – Best Internet Speed for Online Gaming",
    description:
      "Complete guide to gaming internet speed requirements with live speed test tool.",
    url: "https://fastspeedchecker.com/gaming-speed-test",
    author: { "@type": "Organization", name: "FastSpeedChecker" },
    publisher: {
      "@type": "Organization",
      name: "FastSpeedChecker",
      url: "https://fastspeedchecker.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a1f] via-[#100a2b] to-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Gaming Speed Test" }]} />
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
              <Gamepad2 className="w-3.5 h-3.5" />
              Optimized for Gamers
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Gaming Speed Test –{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Is Your Internet Ready?
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Test your ping, jitter, download and upload speed for competitive
              online gaming. Low latency is the key to winning.
            </p>
          </div>
          <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
          <SpeedTestWidget />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder size="leaderboard" className="my-6" />

        <section className="py-14">
          <h2 className="text-3xl font-bold mb-4">
            What Gaming Metrics Matter Most?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Gaming does not require massive bandwidth. What determines your
            experience is
            <strong> latency (ping)</strong>, <strong>jitter</strong>, and{" "}
            <strong>packet loss</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: <Activity className="w-6 h-6" />,
                metric: "Ping",
                ideal: "< 20ms",
                good: "< 50ms",
                bad: "> 100ms",
                color: "from-purple-500 to-purple-600",
                desc: "Round-trip time to game server. The most important gaming metric.",
              },
              {
                icon: <Wifi className="w-6 h-6" />,
                metric: "Jitter",
                ideal: "< 5ms",
                good: "< 15ms",
                bad: "> 30ms",
                color: "from-blue-500 to-blue-600",
                desc: "Ping variation. High jitter causes unpredictable lag spikes.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                metric: "Download",
                ideal: "50+ Mbps",
                good: "15 Mbps",
                bad: "< 5 Mbps",
                color: "from-green-500 to-green-600",
                desc: "Needed for game downloads and updates. Less critical during gameplay.",
              },
            ].map((item) => (
              <div
                key={item.metric}
                className="p-5 rounded-2xl border border-border/50 bg-card"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.metric}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.desc}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ideal</span>
                    <span className="text-emerald-400 font-bold">
                      {item.ideal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Good</span>
                    <span className="text-blue-400 font-bold">{item.good}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Poor</span>
                    <span className="text-red-400 font-bold">{item.bad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-t border-border/40">
          <h2 className="text-3xl font-bold mb-4">
            Internet Speed Requirements by Game
          </h2>
          <p className="text-muted-foreground mb-8">
            Recommended speeds for the most popular online games in 2024–2025.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-muted/60">
                <tr>
                  {[
                    "Game",
                    "Download",
                    "Upload",
                    "Ping",
                    "Best Connection",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3.5 font-semibold text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  {
                    game: "Call of Duty (Warzone)",
                    dl: "15 Mbps",
                    ul: "5 Mbps",
                    ping: "< 30ms",
                    conn: "Ethernet",
                  },
                  {
                    game: "Fortnite",
                    dl: "10 Mbps",
                    ul: "3 Mbps",
                    ping: "< 40ms",
                    conn: "Ethernet/WiFi 6",
                  },
                  {
                    game: "League of Legends",
                    dl: "5 Mbps",
                    ul: "1 Mbps",
                    ping: "< 50ms",
                    conn: "Any stable",
                  },
                  {
                    game: "FIFA / EA FC",
                    dl: "10 Mbps",
                    ul: "5 Mbps",
                    ping: "< 35ms",
                    conn: "Ethernet",
                  },
                  {
                    game: "Apex Legends",
                    dl: "15 Mbps",
                    ul: "5 Mbps",
                    ping: "< 30ms",
                    conn: "Ethernet",
                  },
                  {
                    game: "Minecraft (Multiplayer)",
                    dl: "5 Mbps",
                    ul: "2 Mbps",
                    ping: "< 80ms",
                    conn: "WiFi OK",
                  },
                  {
                    game: "PUBG / BGMI",
                    dl: "10 Mbps",
                    ul: "3 Mbps",
                    ping: "< 50ms",
                    conn: "Ethernet",
                  },
                  {
                    game: "Valorant",
                    dl: "10 Mbps",
                    ul: "5 Mbps",
                    ping: "< 30ms",
                    conn: "Ethernet",
                  },
                ].map((row) => (
                  <tr
                    key={row.game}
                    className="bg-card hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-5 py-3.5 font-medium">
                      <span className="flex items-center gap-2">
                        <Trophy className="w-3.5 h-3.5 text-purple-400" />
                        {row.game}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-blue-400">{row.dl}</td>
                    <td className="px-5 py-3.5 text-indigo-400">{row.ul}</td>
                    <td className="px-5 py-3.5 text-green-400">{row.ping}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">
                      {row.conn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-14 border-t border-border/40">
          <h2 className="text-3xl font-bold mb-8">
            How to Reduce Ping for Gaming
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Use Wired Ethernet",
                desc: "The single biggest improvement. Ethernet eliminates WiFi interference and dramatically reduces jitter.",
              },
              {
                title: "Connect to Nearest Server",
                desc: "Always select game servers closest to your location. Physical distance determines minimum possible ping.",
              },
              {
                title: "Enable QoS on Router",
                desc: "Quality of Service prioritizes gaming traffic over other household usage, ensuring consistent low latency.",
              },
              {
                title: "Use Gaming DNS",
                desc: "Switch to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google). Faster DNS resolution reduces connection times.",
              },
              {
                title: "Close Background Apps",
                desc: "Windows Update, Dropbox, OneDrive — all consume bandwidth. Close them before gaming sessions.",
              },
              {
                title: "Upgrade Your Router",
                desc: "A modern WiFi 6 router with gaming features (ASUS ROG, Netgear Nighthawk) makes a real difference.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/60"
              >
                <Monitor className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdPlaceholder size="medium-rectangle" className="my-6" />
        <FAQSection faqs={gamingFaqs} title="Gaming Internet Speed FAQs" />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}
