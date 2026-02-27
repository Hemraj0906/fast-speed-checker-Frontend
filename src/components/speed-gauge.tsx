"use client";

import { useRef, useEffect } from "react";

interface SpeedGaugeProps {
  value: number;
  max?: number;
  phase?: string;
  size?: number;
}

export function SpeedGauge({
  value,
  max = 200,
  phase = "idle",
  size = 280,
}: SpeedGaugeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.42;
    const startAngle = (210 * Math.PI) / 180;
    const endAngle = (330 * Math.PI) / 180;
    const totalAngle = (300 * Math.PI) / 180;

    // Clear
    ctx.clearRect(0, 0, size, size);

    // Dark background circle
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 8, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fill();

    // Outer glow
    const glow = ctx.createRadialGradient(
      cx,
      cy,
      radius - 10,
      cx,
      cy,
      radius + 15
    );
    glow.addColorStop(0, "rgba(59,130,246,0.0)");
    glow.addColorStop(1, "rgba(59,130,246,0.15)");
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 15, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // Track (background arc)
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, startAngle + totalAngle);
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    ctx.stroke();

    // Speed segments (color zones)
    const segments = [
      { from: 0, to: 0.15, color: "#ef4444" },
      { from: 0.15, to: 0.35, color: "#f59e0b" },
      { from: 0.35, to: 0.65, color: "#10b981" },
      { from: 0.65, to: 1.0, color: "#3b82f6" },
    ];

    segments.forEach(({ from, to, color }) => {
      ctx.beginPath();
      ctx.arc(
        cx,
        cy,
        radius,
        startAngle + totalAngle * from,
        startAngle + totalAngle * to
      );
      ctx.strokeStyle = color + "40";
      ctx.lineWidth = 16;
      ctx.lineCap = "round";
      ctx.stroke();
    });

    // Active arc
    const normalizedValue = Math.min(value / max, 1);
    if (normalizedValue > 0) {
      const activeEnd = startAngle + totalAngle * normalizedValue;

      // Gradient for active arc
      const grad = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
      grad.addColorStop(0, "#3b82f6");
      grad.addColorStop(0.5, "#6366f1");
      grad.addColorStop(1, "#8b5cf6");

      ctx.beginPath();
      ctx.arc(cx, cy, radius, startAngle, activeEnd);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 16;
      ctx.lineCap = "round";
      ctx.stroke();

      // Tip glow
      const tipX = cx + radius * Math.cos(activeEnd);
      const tipY = cy + radius * Math.sin(activeEnd);
      const tipGlow = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, 20);
      tipGlow.addColorStop(0, "rgba(139,92,246,0.8)");
      tipGlow.addColorStop(1, "rgba(139,92,246,0)");
      ctx.beginPath();
      ctx.arc(tipX, tipY, 20, 0, Math.PI * 2);
      ctx.fillStyle = tipGlow;
      ctx.fill();
    }

    // Tick marks
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const angle = startAngle + totalAngle * t;
      const isMajor = i % 4 === 0;
      const inner = isMajor ? radius - 24 : radius - 18;
      const outer = radius - 8;

      ctx.beginPath();
      ctx.moveTo(cx + inner * Math.cos(angle), cy + inner * Math.sin(angle));
      ctx.lineTo(cx + outer * Math.cos(angle), cy + outer * Math.sin(angle));
      ctx.strokeStyle = isMajor
        ? "rgba(255,255,255,0.5)"
        : "rgba(255,255,255,0.2)";
      ctx.lineWidth = isMajor ? 2 : 1;
      ctx.stroke();
    }

    // Needle
    const needleAngle = startAngle + totalAngle * normalizedValue;
    const needleLength = radius - 20;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(needleAngle);
    const needleGrad = ctx.createLinearGradient(0, 0, needleLength, 0);
    needleGrad.addColorStop(0, "rgba(255,255,255,0.9)");
    needleGrad.addColorStop(1, "rgba(255,255,255,0.1)");
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(needleLength, 0);
    ctx.strokeStyle = needleGrad;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.restore();

    // Center hub
    const hubGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 14);
    hubGrad.addColorStop(0, "#6366f1");
    hubGrad.addColorStop(1, "#3b82f6");
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = hubGrad;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();

    // Speed labels
    const labels = ["0", "50", "100", "150", "200"];
    labels.forEach((label, i) => {
      const t = i / (labels.length - 1);
      const angle = startAngle + totalAngle * t;
      const labelRadius = radius - 40;
      const lx = cx + labelRadius * Math.cos(angle);
      const ly = cy + labelRadius * Math.sin(angle);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = `bold ${size * 0.045}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, lx, ly);
    });
  }, [value, max, phase, size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className="drop-shadow-2xl"
      aria-label={`Speed gauge showing ${value} Mbps`}
    />
  );
}
