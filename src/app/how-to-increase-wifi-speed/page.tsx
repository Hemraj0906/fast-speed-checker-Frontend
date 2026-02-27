import type { Metadata } from "next";
import Link from "next/link";
import { AdBanner } from "@/components/ad-banner";
import {
  FAQSchema,
  BreadcrumbSchema,
  ArticleSchema,
} from "@/components/schema";
import {
  ChevronRight,
  Wifi,
  Router,
  Signal,
  Settings,
  ArrowUpCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Increase WiFi Speed – 15 Proven Tips to Boost Internet Speed",
  description:
    "Learn how to increase WiFi speed at home with 15 proven tips. Boost internet speed, improve router placement, upgrade firmware, and get faster broadband today.",
  keywords: [
    "how to increase wifi speed",
    "boost internet speed",
    "improve wifi speed",
    "slow internet fix",
    "router tips",
    "increase broadband speed",
  ],
  alternates: {
    canonical: "https://fastspeedchecker.com/how-to-increase-wifi-speed",
  },
  openGraph: {
    title:
      "How to Increase WiFi Speed – 15 Proven Tips to Boost Internet Speed",
    description:
      "Practical, actionable tips to increase your WiFi and internet speed at home. No technical expertise required.",
    url: "https://fastspeedchecker.com/how-to-increase-wifi-speed",
  },
};

const faqs = [
  {
    question: "Why is my WiFi slow even with a fast internet plan?",
    answer:
      "A fast broadband plan doesn't guarantee fast WiFi. Common causes of slow WiFi include: old or underpowered router, poor router placement, interference from neighboring networks and devices, too many connected devices, outdated router firmware, ISP-side throttling, and physical obstructions like concrete walls.",
  },
  {
    question: "Does distance from the router affect WiFi speed?",
    answer:
      "Yes, significantly. WiFi signal strength follows an inverse square law — doubling the distance reduces signal strength by roughly 75%. Beyond 10–15 meters (through multiple walls), 5GHz WiFi degrades rapidly. 2.4GHz has better range but lower speed. A WiFi mesh system or range extender solves this.",
  },
  {
    question: "What is the best channel for WiFi?",
    answer:
      "For 2.4GHz, channels 1, 6, and 11 are non-overlapping — use one of these. For 5GHz, most channels are non-overlapping. Use a WiFi analyzer app (like WiFi Analyzer on Android or NetSpot on Mac) to see which channels your neighbors use and pick the least congested one.",
  },
  {
    question: "Should I use 2.4GHz or 5GHz WiFi?",
    answer:
      "Use 5GHz for devices close to your router — it's faster (up to 1.3 Gbps on WiFi 5) with less interference. Use 2.4GHz for devices further away or through many walls, as it has better range. Most modern routers support both bands simultaneously (dual-band).",
  },
  {
    question: "Does a VPN slow down internet speed?",
    answer:
      "Yes. VPNs encrypt your traffic and route it through remote servers, adding 10–50% latency and reducing throughput speed. Premium VPNs (ExpressVPN, NordVPN, Mullvad) have minimal impact. Free VPNs can halve your speed. If you're seeing slow speeds, try disabling your VPN as a test.",
  },
  {
    question: "How often should I replace my router?",
    answer:
      "Consumer routers typically perform well for 3–5 years. After that, they may struggle with the processing demands of modern WiFi 6/7 devices and multiple simultaneous connections. If your router is more than 5 years old and you're experiencing slow speeds, upgrading to a WiFi 6 router can make a significant difference.",
  },
];

const tips = [
  {
    number: "01",
    icon: Router,
    title: "Restart Your Router Regularly",
    content:
      "A simple restart clears the router's memory, forces it to re-establish a fresh connection with your ISP, and resolves temporary slowdowns. Power cycle by unplugging for 30 seconds. For best results, set your router to restart automatically once a week via its admin panel.",
    impact: "High",
  },
  {
    number: "02",
    icon: Wifi,
    title: "Optimize Router Placement",
    content:
      "Place your router centrally, elevated off the ground, away from walls and metal objects. Routers broadcast signals in all directions — placing it in a corner wastes 75% of its signal range. Avoid placing near microwaves, cordless phones, and baby monitors that operate on 2.4GHz.",
    impact: "High",
  },
  {
    number: "03",
    icon: Signal,
    title: "Switch to 5GHz Band",
    content:
      "If your router is dual-band, connect devices to the 5GHz network for significantly faster speeds. 5GHz WiFi offers up to 1.3 Gbps (WiFi 5) vs 450 Mbps on 2.4GHz. It's less congested since fewer devices use it. Connect nearby devices to 5GHz and further devices to 2.4GHz.",
    impact: "High",
  },
  {
    number: "04",
    icon: Settings,
    title: "Update Router Firmware",
    content:
      "Router manufacturers release firmware updates that include performance improvements, security patches, and bug fixes. Log into your router's admin panel (usually 192.168.1.1 or 192.168.0.1) and check for firmware updates under Administration or Advanced settings.",
    impact: "Medium",
  },
  {
    number: "05",
    icon: Zap,
    title: "Use a Wired Ethernet Connection",
    content:
      "A Cat5e or Cat6 Ethernet cable delivers consistently faster speeds, zero interference, and lower latency compared to WiFi. For desktop computers, smart TVs, gaming consoles, and streaming boxes — always prefer a wired connection for the best performance.",
    impact: "Very High",
  },
  {
    number: "06",
    icon: ArrowUpCircle,
    title: "Change WiFi Channel",
    content:
      "If your neighbors are all using WiFi channel 6, your router competes for the same frequencies. Use a WiFi analyzer app to find the least congested channel and set it manually in your router admin panel. For 5GHz, channels 36, 40, 44, and 48 are the most interference-free.",
    impact: "Medium",
  },
];

export default function HowToIncreaseWifiSpeedPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://fastspeedchecker.com" },
          {
            name: "How to Increase WiFi Speed",
            url: "https://fastspeedchecker.com/how-to-increase-wifi-speed",
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        title="How to Increase WiFi Speed – 15 Proven Tips"
        description="Learn how to increase WiFi speed with 15 proven tips. Boost internet speed by optimizing router placement, upgrading firmware, and more."
        url="https://fastspeedchecker.com/how-to-increase-wifi-speed"
      />

      <nav className="max-w-5xl mx-auto px-4 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" />
          </li>
          <li className="text-foreground font-medium">
            How to Increase WiFi Speed
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950/30 via-background to-background pt-10 pb-16 px-4">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[100px]" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-400 mb-4">
              <Wifi className="w-4 h-4" />
              WiFi Speed Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                How to Increase WiFi Speed
              </span>
              <br />
              15 Proven Tips That Actually Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Struggling with slow WiFi? These proven, step-by-step tips will
              help you boost your internet speed — no technical expertise
              required. First, test your current speed below.
            </p>
          </div>

          <AdBanner slot="top" className="max-w-2xl mx-auto mb-8" />

          {/* CTA to speed test */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center mb-8">
            <p className="font-semibold mb-2">
              First: Check Your Current Internet Speed
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Run a speed test before and after applying these tips to measure
              your improvement.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
            >
              <Zap className="w-4 h-4" />
              Run Free Speed Test
            </Link>
          </div>
        </div>
      </section>

      {/* Main tips */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Top WiFi Speed Improvement Tips
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Start with the highest-impact tips. Each one is actionable and can be
          done without any technical knowledge.
        </p>
        <div className="space-y-6">
          {tips.map((tip) => (
            <div
              key={tip.number}
              className="rounded-2xl border border-border/50 bg-card p-6 flex gap-5"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <tip.icon className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <h3 className="font-bold text-lg">{tip.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      tip.impact === "Very High"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : tip.impact === "High"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                    }`}
                  >
                    {tip.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional tips grid */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          More Ways to Boost Your Internet Speed
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Limit Background Apps",
              desc: "Apps like Dropbox, Google Drive, Windows Update, and torrent clients can consume bandwidth in the background. Pause or schedule them for off-peak hours.",
            },
            {
              title: "Use a DNS Server",
              desc: "Switch to Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1) instead of your ISP's default DNS for faster website loading times.",
            },
            {
              title: "Install a WiFi Mesh System",
              desc: "For homes over 1,500 sq ft, a WiFi mesh system (Eero, Google Nest, TP-Link Deco) eliminates dead zones and provides whole-home coverage.",
            },
            {
              title: "Reduce WiFi Interference",
              desc: "Move your router away from microwaves, baby monitors, and cordless phones. These devices all use the 2.4GHz band and can severely disrupt WiFi signals.",
            },
            {
              title: "Check for Freeloaders",
              desc: "Unauthorized devices on your network consume bandwidth. Change your WiFi password and enable WPA3 or WPA2 encryption in your router settings.",
            },
            {
              title: "Upgrade Your Router",
              desc: "If your router is more than 5 years old, upgrade to a WiFi 6 (802.11ax) router. WiFi 6 handles multiple devices simultaneously with less congestion.",
            },
            {
              title: "Contact Your ISP",
              desc: "If speeds consistently fall far below your plan, contact your ISP. They can check for line faults, congestion in your area, or send an engineer to inspect your connection.",
            },
            {
              title: "Consider Fiber Broadband",
              desc: "If you're on ADSL or cable and speeds disappoint, switching to fiber optic broadband provides the most significant speed improvement — often 5–20x faster.",
            },
            {
              title: "Use Quality Cables",
              desc: "Old or damaged Ethernet cables can limit speed. Replace cables older than 10 years with Cat6 or Cat6a cables rated for gigabit speeds.",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-border/50 bg-card p-5"
            >
              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AdBanner slot="middle" className="max-w-4xl mx-auto px-4 mb-6" />

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">WiFi Speed FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border/50 bg-card open:border-primary/30"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium list-none gap-3">
                <span>{faq.question}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0" />
              </summary>
              <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Related Pages</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              href: "/",
              title: "Internet Speed Test",
              desc: "Test your current speed before and after applying these tips.",
            },
            {
              href: "/what-is-good-internet-speed",
              title: "What is Good Internet Speed?",
              desc: "Find out what speeds you need for your specific usage.",
            },
            {
              href: "/gaming-speed-test",
              title: "Gaming Speed Test",
              desc: "Check if your improved speed is good enough for online gaming.",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-border/50 bg-card p-5 hover:border-border hover:shadow-md transition-all"
            >
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground">{link.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 font-medium">
                Go <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slot="bottom" className="max-w-4xl mx-auto px-4 pb-12" />
    </>
  );
}
