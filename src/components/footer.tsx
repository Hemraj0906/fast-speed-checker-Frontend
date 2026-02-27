import Link from "next/link";
import { Zap, Github, Twitter } from "lucide-react";

const footerLinks = {
  "Speed Tests": [
    { href: "/", label: "Internet Speed Test" },
    { href: "/gaming-speed-test", label: "Gaming Speed Test" },
    { href: "/streaming-speed-test", label: "Streaming Speed Test" },
    { href: "/mobile-speed-test", label: "Mobile Speed Test" },
    { href: "/internet-speed-test-india", label: "Speed Test India" },
  ],
  "Learn More": [
    {
      href: "/what-is-good-internet-speed",
      label: "What is Good Internet Speed?",
    },
    {
      href: "/how-to-increase-wifi-speed",
      label: "How to Increase WiFi Speed",
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                FastSpeedChecker
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The most accurate internet speed test tool. Check your WiFi speed,
              download, upload, ping, and jitter in seconds. Completely free.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} FastSpeedChecker.com — All rights
              reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            FastSpeedChecker uses LibreSpeed for accurate, server-side speed
            measurements.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
            All servers operational
          </div>
        </div>
      </div>
    </footer>
  );
}
