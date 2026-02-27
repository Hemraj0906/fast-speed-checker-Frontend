import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { Smartphone, Signal, Wifi, Battery } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Internet Speed Test – Test Your 4G, 5G & LTE Speed Online",
  description:
    "Test your mobile internet speed with FastSpeedChecker. Check 4G LTE, 5G download speed, upload speed, and ping from your smartphone or tablet. Free mobile speed test.",
  keywords: [
    "mobile speed test",
    "mobile internet speed test",
    "4g speed test",
    "5g speed test",
    "lte speed test",
    "phone internet speed test",
    "smartphone wifi speed test",
    "check mobile data speed",
  ],
  openGraph: {
    title: "Mobile Internet Speed Test – Test 4G, 5G & LTE Speed",
    description:
      "Free mobile speed test for smartphones. Check 4G, 5G, LTE download and upload speeds.",
    url: "https://fastspeedchecker.com/mobile-speed-test",
  },
  alternates: { canonical: "https://fastspeedchecker.com/mobile-speed-test" },
};

const mobileFaqs = [
  {
    question: "What is a good 4G LTE speed?",
    answer:
      "A good 4G LTE speed is 30–50 Mbps download and 10–20 Mbps upload. Average 4G speeds globally are around 20–40 Mbps. Top LTE speeds can reach 100–150 Mbps under ideal conditions. Ping on 4G is typically 30–70ms.",
  },
  {
    question: "What is a good 5G speed?",
    answer:
      "5G speeds vary by band. Sub-6GHz 5G offers 100–400 Mbps, while mmWave 5G can exceed 1 Gbps. Latency on 5G is typically 10–30ms. In practice, most users experience 100–300 Mbps on commercial 5G networks depending on location and network congestion.",
  },
  {
    question: "Why is my 5G slower than expected?",
    answer:
      "5G speed depends on which frequency band your network uses. Low-band 5G (600–900 MHz) offers wide coverage but speeds similar to 4G. Mid-band 5G (2–6 GHz) offers the best balance. mmWave 5G is ultra-fast but has very limited range. Your location, device, and network congestion also affect speed.",
  },
  {
    question: "Should I use WiFi or mobile data for speed tests?",
    answer:
      "To test your mobile data (4G/5G) speed, turn off WiFi and test on cellular data. To test your WiFi speed on mobile, keep WiFi enabled. They measure different things — mobile data speed depends on your carrier and signal strength, while WiFi speed depends on your home broadband plan.",
  },
  {
    question: "Why is my mobile speed slower indoors?",
    answer:
      "Building materials (concrete, brick, metal) block cellular signals. Indoor attenuation can reduce 4G/5G speeds by 30–70%. Solutions: use WiFi calling, request a signal booster from your carrier, or move closer to a window for better signal.",
  },
];

const relatedArticles = [
  {
    href: "/",
    title: "Internet Speed Test",
    description: "Full broadband speed test for home internet.",
  },
  {
    href: "/gaming-speed-test",
    title: "Gaming Speed Test",
    description: "Check latency and speed for mobile gaming.",
  },
  {
    href: "/what-is-good-internet-speed",
    title: "What is Good Internet Speed?",
    description: "Speed requirements guide for all use cases.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "How to Increase WiFi Speed",
    description: "Boost your mobile WiFi connection.",
  },
];

export default function MobileSpeedTestPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-[#050a1f] via-[#0a1020] to-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Mobile Speed Test" }]} />
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              Mobile Internet Test
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Mobile Speed Test –{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Test Your 4G & 5G Speed
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Check your mobile internet speed on any smartphone or tablet.
              Works on 4G LTE, 5G, and WiFi. No app required — test directly in
              your browser.
            </p>
          </div>
          <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
          <SpeedTestWidget />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder size="leaderboard" className="my-6" />

        <section className="py-14">
          <h2 className="text-3xl font-bold mb-4">4G vs 5G Speed Comparison</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Mobile network technology has evolved dramatically. Here's how the
            different generations compare in real-world performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                gen: "3G",
                dl: "1–10 Mbps",
                ul: "0.5–5 Mbps",
                ping: "50–100ms",
                color: "from-gray-500 to-gray-600",
                use: "Basic browsing, email",
              },
              {
                gen: "4G LTE",
                dl: "20–100 Mbps",
                ul: "5–30 Mbps",
                ping: "30–70ms",
                color: "from-blue-500 to-blue-600",
                use: "Streaming, gaming, video calls",
              },
              {
                gen: "5G Sub-6",
                dl: "100–400 Mbps",
                ul: "20–100 Mbps",
                ping: "10–30ms",
                color: "from-indigo-500 to-indigo-600",
                use: "4K streaming, fast downloads",
              },
              {
                gen: "5G mmWave",
                dl: "1–5 Gbps",
                ul: "100–500 Mbps",
                ping: "< 10ms",
                color: "from-purple-500 to-purple-600",
                use: "Ultra-fast, dense urban areas",
              },
            ].map((item) => (
              <div
                key={item.gen}
                className="p-5 rounded-2xl border border-border/50 bg-card"
              >
                <div
                  className={`inline-flex px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${item.color} mb-4`}
                >
                  {item.gen}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Download</span>
                    <span className="text-blue-400 font-semibold">
                      {item.dl}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Upload</span>
                    <span className="text-indigo-400 font-semibold">
                      {item.ul}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ping</span>
                    <span className="text-green-400 font-semibold">
                      {item.ping}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border/40 text-xs text-muted-foreground">
                  {item.use}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-t border-border/40">
          <h2 className="text-3xl font-bold mb-8">
            How to Get Better Mobile Speed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Signal />,
                title: "Check Signal Strength",
                desc: "Weak signal is the #1 cause of slow mobile speed. Look for full bars, and if possible, move to an area with better coverage.",
              },
              {
                icon: <Wifi />,
                title: "Switch to WiFi When Available",
                desc: "Home WiFi broadband is almost always faster and more stable than mobile data. Use WiFi for data-intensive tasks.",
              },
              {
                icon: <Battery />,
                title: "Disable Battery Saver Mode",
                desc: "Battery saving modes throttle CPU and network performance. Disable them when you need maximum mobile speed.",
              },
              {
                icon: <Smartphone />,
                title: "Enable 5G Network Mode",
                desc: "In your phone settings, set network mode to 5G Auto or 5G/LTE to ensure your phone uses the fastest available network.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/60"
              >
                <div className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdPlaceholder size="medium-rectangle" className="my-6" />
        <FAQSection faqs={mobileFaqs} title="Mobile Speed Test FAQs" />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}
