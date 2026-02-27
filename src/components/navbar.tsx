// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useTheme } from "next-themes";
// import { Menu, X, Zap, Sun, Moon } from "lucide-react";

// const navLinks = [
//   { href: "/gaming-speed-test", label: "Gaming" },
//   { href: "/streaming-speed-test", label: "Streaming" },
//   { href: "/mobile-speed-test", label: "Mobile" },
//   { href: "/internet-speed-test-india", label: "India" },
//   { href: "/how-to-increase-wifi-speed", label: "Guides" },
//   { href: "/what-is-good-internet-speed", label: "Learn" },
// ];

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { theme, setTheme } = useTheme();

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 font-bold text-xl">
//             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
//               <Zap className="w-5 h-5 text-white" fill="currentColor" />
//             </div>
//             <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//               FastSpeedChecker
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Right actions */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-full hover:bg-muted transition-colors"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? (
//                 <Sun className="w-5 h-5" />
//               ) : (
//                 <Moon className="w-5 h-5" />
//               )}
//             </button>
//             <button
//               className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
//               onClick={() => setOpen(!open)}
//               aria-label="Toggle menu"
//             >
//               {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
//           <div className="px-4 py-4 flex flex-col gap-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="text-sm font-medium py-2 px-3 rounded-lg hover:bg-muted transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "/gaming-speed-test", label: "Gaming" },
  { href: "/streaming-speed-test", label: "Streaming" },
  { href: "/mobile-speed-test", label: "Mobile" },
  { href: "/internet-speed-test-india", label: "India" },
  { href: "/how-to-increase-wifi-speed", label: "Guides" },
  { href: "/what-is-good-internet-speed", label: "Learn" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              FastSpeedChecker
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* 🔥 FIXED THEME BUTTON */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            <button
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 px-3 rounded-lg hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}