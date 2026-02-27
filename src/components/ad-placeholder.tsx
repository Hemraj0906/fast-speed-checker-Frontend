interface AdPlaceholderProps {
  size?: "banner" | "medium-rectangle" | "leaderboard" | "large";
  className?: string;
  label?: string;
}

const sizeMap = {
  banner: { h: "h-[90px]", label: "728×90 Banner Ad" },
  "medium-rectangle": { h: "h-[250px]", label: "300×250 Ad" },
  leaderboard: { h: "h-[90px]", label: "Leaderboard Ad" },
  large: { h: "h-[280px]", label: "Large Rectangle Ad" },
};

export function AdPlaceholder({
  size = "banner",
  className = "",
  label,
}: AdPlaceholderProps) {
  const config = sizeMap[size];
  return (
    <div
      className={`ad-placeholder ${config.h} w-full ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <div className="flex flex-col items-center gap-1 text-muted-foreground/40">
        <span className="text-xs font-medium">ADVERTISEMENT</span>
        <span className="text-[10px]">{label || config.label}</span>
      </div>
    </div>
  );
}
