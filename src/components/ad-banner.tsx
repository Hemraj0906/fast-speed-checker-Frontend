// CLS-safe AdSense placeholder component
// Replace the placeholder divs with actual AdSense ins tags when ready

interface AdBannerProps {
  slot?: "top" | "middle" | "bottom" | "sidebar";
  className?: string;
}

export function AdBanner({ slot = "middle", className = "" }: AdBannerProps) {
  const heights: Record<string, string> = {
    top: "h-[90px]",
    middle: "h-[250px]",
    bottom: "h-[90px]",
    sidebar: "h-[600px]",
  };

  return (
    <div
      className={`ad-placeholder ${
        slot === "middle" ? "ad-placeholder-lg" : "ad-placeholder-banner"
      } ${heights[slot]} w-full rounded-xl ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <span className="text-xs text-muted-foreground/40 font-mono select-none">
        Advertisement — {slot.toUpperCase()} AD
      </span>
    </div>
  );
}
