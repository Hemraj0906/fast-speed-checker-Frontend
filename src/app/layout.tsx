import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fastspeedchecker.com"),
  title: {
    default:
      "Internet Speed Test – Check Your WiFi Speed Instantly | FastSpeedChecker",
    template: "%s | FastSpeedChecker",
  },
  description:
    "Test your internet speed instantly with FastSpeedChecker. Get accurate download speed, upload speed, ping, and jitter results. Free broadband speed test online.",
  keywords: [
    "internet speed test",
    "speed test online",
    "wifi speed test",
    "check internet speed",
    "broadband speed test",
    "ping test",
    "download speed test",
    "upload speed test",
  ],
  authors: [{ name: "FastSpeedChecker" }],
  creator: "FastSpeedChecker",
  publisher: "FastSpeedChecker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastspeedchecker.com",
    siteName: "FastSpeedChecker",
    title: "Internet Speed Test – Check Your WiFi Speed Instantly",
    description:
      "Test your internet speed instantly with FastSpeedChecker. Free broadband speed test.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FastSpeedChecker - Internet Speed Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Speed Test – FastSpeedChecker",
    description: "Check your WiFi speed instantly. Free online speed test.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://fastspeedchecker.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="188ec6e9-7c51-4522-93a8-b1b651fa8142"
        />

        {/* <Script
          src="https://librespeed.org/librespeed/speedtest.js"
          strategy="beforeInteractive"
        /> */}

        {/* <Script
          src="https://cdn.jsdelivr.net/gh/librespeed/speedtest@master/speedtest.js"
          strategy="beforeInteractive"
        /> */}

        {/* <Script
          src="https://cdn.jsdelivr.net/gh/librespeed/speedtest@5.3.2/speedtest.js"
          strategy="beforeInteractive"
        /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
