// "use client";

// import { useState, useCallback, useRef, useEffect } from "react";
// import {
//   Wifi,
//   Download,
//   Upload,
//   Activity,
//   Globe,
//   Server,
//   Play,
//   RotateCcw,
// } from "lucide-react";

// type TestPhase = "idle" | "ping" | "download" | "upload" | "complete";

// interface SpeedResult {
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   org: string;
//   server: string;
// }

// function GaugeMeter({
//   value,
//   max,
//   label,
//   unit,
//   color,
// }: {
//   value: number;
//   max: number;
//   label: string;
//   unit: string;
//   color: string;
// }) {
//   const pct = Math.min(value / max, 1);
//   const angle = -135 + pct * 270;

//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className="relative w-48 h-48">
//         {/* Background arc */}
//         <svg className="w-full h-full -rotate-0" viewBox="0 0 200 200">
//           <circle
//             cx="100"
//             cy="100"
//             r="80"
//             fill="none"
//             stroke="currentColor"
//             className="text-border"
//             strokeWidth="12"
//             strokeDasharray="339.3 84.8"
//             strokeDashoffset="-42.4"
//             strokeLinecap="round"
//           />
//           {/* Colored arc */}
//           <circle
//             cx="100"
//             cy="100"
//             r="80"
//             fill="none"
//             stroke={color}
//             strokeWidth="12"
//             strokeDasharray={`${pct * 339.3} ${339.3 - pct * 339.3 + 84.8}`}
//             strokeDashoffset="-42.4"
//             strokeLinecap="round"
//             style={{ transition: "stroke-dasharray 0.4s ease" }}
//           />
//         </svg>
//         {/* Needle */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="absolute w-1 h-16 origin-bottom rounded-full"
//             style={{
//               background: color,
//               bottom: "50%",
//               left: "calc(50% - 2px)",
//               transform: `rotate(${angle}deg)`,
//               transformOrigin: "bottom center",
//               transition: "transform 0.4s ease",
//               boxShadow: `0 0 8px ${color}`,
//             }}
//           />
//           <div
//             className="absolute w-4 h-4 rounded-full"
//             style={{ background: color, boxShadow: `0 0 8px ${color}` }}
//           />
//         </div>
//         {/* Value */}
//         <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
//           <span className="text-3xl font-bold tabular-nums" style={{ color }}>
//             {value > 0 ? value.toFixed(value >= 100 ? 0 : 1) : "—"}
//           </span>
//           <span className="text-xs text-muted-foreground uppercase tracking-wide">
//             {unit}
//           </span>
//         </div>
//       </div>
//       <span className="text-sm font-medium text-muted-foreground">{label}</span>
//     </div>
//   );
// }

// function StatCard({
//   icon: Icon,
//   label,
//   value,
//   unit,
//   color,
// }: {
//   icon: React.ElementType;
//   label: string;
//   value: number | string;
//   unit?: string;
//   color: string;
// }) {
//   return (
//     <div className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-card border border-border/50">
//       <Icon className="w-5 h-5 mb-1" style={{ color }} />
//       <span className="text-xs text-muted-foreground uppercase tracking-wider">
//         {label}
//       </span>
//       <div className="flex items-baseline gap-1">
//         <span className="text-2xl font-bold tabular-nums">
//           {typeof value === "number" && value > 0
//             ? value >= 100
//               ? value.toFixed(0)
//               : value.toFixed(1)
//             : value === 0
//             ? "—"
//             : value}
//         </span>
//         {unit && <span className="text-xs text-muted-foreground">{unit}</span>}
//       </div>
//     </div>
//   );
// }

// function PhaseLabel({ phase }: { phase: TestPhase }) {
//   const labels: Record<TestPhase, string> = {
//     idle: "Ready to test",
//     ping: "Testing latency...",
//     download: "Testing download speed...",
//     upload: "Testing upload speed...",
//     complete: "Test complete!",
//   };
//   const colors: Record<TestPhase, string> = {
//     idle: "text-muted-foreground",
//     ping: "text-yellow-500",
//     download: "text-blue-500",
//     upload: "text-emerald-500",
//     complete: "text-green-500",
//   };
//   return (
//     <p className={`text-sm font-medium transition-colors ${colors[phase]}`}>
//       {labels[phase]}
//     </p>
//   );
// }

// // Simulate speed test with realistic progression
// async function simulateSpeedTest(
//   onPhase: (p: TestPhase) => void,
//   onDownload: (v: number) => void,
//   onUpload: (v: number) => void,
//   onPing: (v: number) => void
// ): Promise<SpeedResult> {
//   // Ping phase
//   onPhase("ping");
//   await new Promise((r) => setTimeout(r, 300));
//   const ping = Math.round(5 + Math.random() * 45);
//   const jitter = +(Math.random() * 8 + 1).toFixed(1);
//   onPing(ping);
//   await new Promise((r) => setTimeout(r, 500));

//   // Download phase
//   onPhase("download");
//   const targetDownload = 15 + Math.random() * 485; // 15-500 Mbps
//   const dlSteps = 40;
//   for (let i = 1; i <= dlSteps; i++) {
//     const eased = targetDownload * (1 - Math.exp(-i / (dlSteps * 0.35)));
//     onDownload(+eased.toFixed(2));
//     await new Promise((r) => setTimeout(r, 60));
//   }

//   // Upload phase
//   onPhase("upload");
//   const targetUpload = targetDownload * (0.3 + Math.random() * 0.6);
//   const ulSteps = 35;
//   for (let i = 1; i <= ulSteps; i++) {
//     const eased = targetUpload * (1 - Math.exp(-i / (ulSteps * 0.35)));
//     onUpload(+eased.toFixed(2));
//     await new Promise((r) => setTimeout(r, 60));
//   }

//   // Get IP/ISP
//   let ip = "Detecting...";
//   let isp = "Detecting...";
//   try {
         
//     const res = await fetch("https://ip-api.com/json/", {
//       signal: AbortSignal.timeout(4000),
      
    
//     });
//     if (res.ok) {
//       const data = await res.json();
//       console.log("org ka---------ipka---------------->",data)
//       ip = data.ip ?? "N/A";
//       isp = data.org ? data.org.replace(/^AS\d+\s+/, "") : "Unknown ISP";
//       console.log("res--->isp", );
//     }
//   } catch {
//     ip = "N/A";
//     isp = "Unknown ISP";
//   }

//   return {
//     download: +targetDownload.toFixed(2),
//     upload: +targetUpload.toFixed(2),
//     ping,
//     jitter,
//     ip,
//     org: isp,
//     server: "FastSpeedChecker Server – CDN",
//   };
// }

// export function SpeedTest() {
//   const [phase, setPhase] = useState<TestPhase>("idle");
//   const [download, setDownload] = useState(0);
//   const [upload, setUpload] = useState(0);
//   const [ping, setPing] = useState(0);
//   const [result, setResult] = useState<SpeedResult | null>(null);
//   const [isRunning, setIsRunning] = useState(false);
//   const abortRef = useRef(false);

//   const startTest = useCallback(async () => {
//     if (isRunning) return;
//     abortRef.current = false;
//     setIsRunning(true);
//     setResult(null);
//     setDownload(0);
//     setUpload(0);
//     setPing(0);
//     setPhase("idle");

//     try {
//       const res = await simulateSpeedTest(
//         setPhase,
//         setDownload,
//         setUpload,
//         setPing
//       );
//       setResult(res);
//       setPhase("complete");
//     } finally {
//       setIsRunning(false);
//     }
//   }, [isRunning]);

//   const reset = () => {
//     setPhase("idle");
//     setDownload(0);
//     setUpload(0);
//     setPing(0);
//     setResult(null);
//     setIsRunning(false);
//   };

//   const activeDownload = result ? result.download : download;
//   const activeUpload = result ? result.upload : upload;
//   const activePing = result ? result.ping : ping;

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Main gauge - shows active metric during test */}
//       <div className="flex flex-col items-center gap-6">
//         {/* Big center gauge */}
//         <div className="relative">
//           {phase === "download" || phase === "idle" || phase === "complete" ? (
//             <GaugeMeter
//               value={activeDownload}
//               max={500}
//               label="Download Speed"
//               unit="Mbps"
//               color="#3b82f6"
//             />
//           ) : phase === "ping" ? (
//             <GaugeMeter
//               value={activePing}
//               max={200}
//               label="Ping"
//               unit="ms"
//               color="#f59e0b"
//             />
//           ) : (
//             <GaugeMeter
//               value={activeUpload}
//               max={500}
//               label="Upload Speed"
//               unit="Mbps"
//               color="#10b981"
//             />
//           )}

//           {/* Ripple effect when running */}
//           {isRunning && (
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//               <div className="w-32 h-32 rounded-full border-2 border-blue-500/30 animate-ping absolute" />
//             </div>
//           )}
//         </div>

//         <PhaseLabel phase={phase} />

//         {/* Start / Reset buttons */}
        
//         {!isRunning && phase !== "complete" && (
//           // <button
//           //   onClick={startTest}
//           //   className="group relative px-10 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30 "
//           //   aria-label="Start internet speed test"
//           // >
//           //   <span className="flex items-center gap-3 pointer-events-none">
//           //     <Play className="w-5 h-5 fill-current" />
//           //     Start Speed Test
//           //   </span>
//           // </button>
//           <button
//               onClick={startTest}
//                className="cursor-pointer group relative px-10 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
//             aria-label="Start internet speed test"
// >
//               <span className="flex items-center gap-3 pointer-events-none">
//              <Play className="w-5 h-5 fill-current" />
//               Start Speed Test
//              </span>
//           </button>
//         )}

//         {isRunning && (
//           <div className="flex flex-col items-center gap-2">
//             <div className="flex gap-1">
//               {["bg-blue-500", "bg-indigo-500", "bg-violet-500"].map((c, i) => (
//                 <span
//                   key={i}
//                   className={`w-2 h-2 rounded-full ${c} animate-bounce`}
//                   style={{ animationDelay: `${i * 0.15}s` }}
//                 />
//               ))}
//             </div>
//             <span className="text-xs text-muted-foreground">Please wait…</span>
//           </div>
//         )}

//         {phase === "complete" && (
//           <button
//             onClick={reset}
//             className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium border border-border hover:bg-muted transition-colors"
//           >
//             <RotateCcw className="w-4 h-4" />
//             Test Again
//           </button>
//         )}

//         {/* Stats grid */}
//         <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
//           <StatCard
//             icon={Download}
//             label="Download"
//             value={activeDownload}
//             unit="Mbps"
//             color="#3b82f6"
//           />
//           <StatCard
//             icon={Upload}
//             label="Upload"
//             value={activeUpload}
//             unit="Mbps"
//             color="#10b981"
//           />
//           <StatCard
//             icon={Activity}
//             label="Ping"
//             value={activePing}
//             unit="ms"
//             color="#f59e0b"
//           />
//           <StatCard
//             icon={Wifi}
//             label="Jitter"
//             value={result ? result.jitter : 0}
//             unit="ms"
//             color="#8b5cf6"
//           />
//         </div>

//         {/* IP / ISP / Server info */}
//         {(result || isRunning) && (
//           <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
//             <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
//               <Globe className="w-4 h-4 text-blue-500 shrink-0" />
//               <div className="min-w-0">
//                 <p className="text-xs text-muted-foreground">Your IP</p>
//                 <p className="text-sm font-mono font-medium truncate">
//                   {result?.ip ?? "Detecting…"}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
//               <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
//               <div className="min-w-0">
//                 <p className="text-xs text-muted-foreground">ISP</p>
//                 <p className="text-sm font-medium truncate">
//                   {result?.org ?? "Detecting…"}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
//               <Server className="w-4 h-4 text-violet-500 shrink-0" />
//               <div className="min-w-0">
//                 <p className="text-xs text-muted-foreground">Test Server</p>
//                 <p className="text-sm font-medium truncate">
//                   {result?.server ?? "Connecting…"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useCallback } from "react";
import {
  Wifi,
  Download,
  Upload,
  Activity,
  Globe,
  Server,
  Play,
  RotateCcw,
} from "lucide-react";

import { runSpeedTest } from "@/lib/speed-test"; // ⚠️ path apne project ke hisaab se adjust karo

type TestPhase = "idle" | "ping" | "download" | "upload" | "complete";

interface SpeedResult {
  download: number;
  upload: number;
  ping: number;
  jitter: number;
  ip: string;
  org: string;
  city?: string;
  region?: string;
  country?: string;
  server: string;
}

function GaugeMeter({
  value,
  max,
  label,
  unit,
  color,
}: {
  value: number;
  max: number;
  label: string;
  unit: string;
  color: string;
}) {
  const pct = Math.min(value / max, 1);
  const angle = -135 + pct * 270;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            className="text-border"
            strokeWidth="12"
            strokeDasharray="339.3 84.8"
            strokeDashoffset="-42.4"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeDasharray={`${pct * 339.3} ${339.3 - pct * 339.3 + 84.8}`}
            strokeDashoffset="-42.4"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute w-1 h-16 origin-bottom rounded-full"
            style={{
              background: color,
              bottom: "50%",
              left: "calc(50% - 2px)",
              transform: `rotate(${angle}deg)`,
              transformOrigin: "bottom center",
            }}
          />
          <div
            className="absolute w-4 h-4 rounded-full"
            style={{ background: color }}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
          <span className="text-3xl font-bold" style={{ color }}>
            {value > 0 ? value.toFixed(1) : "—"}
          </span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function SpeedTest() {
  const [phase, setPhase] = useState<TestPhase>("idle");
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);
  const [ping, setPing] = useState(0);
  const [result, setResult] = useState<SpeedResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const startTest = useCallback(async () => {
    if (isRunning) return;

    setIsRunning(true);
    setResult(null);
    setDownload(0);
    setUpload(0);
    setPing(0);
    setPhase("idle");

    try {
      await runSpeedTest((state) => {
        if (state.phase) setPhase(state.phase);

        if (state.currentSpeed !== undefined) {
          if (state.phase === "ping") setPing(state.currentSpeed);
          if (state.phase === "download") setDownload(state.currentSpeed);
          if (state.phase === "upload") setUpload(state.currentSpeed);
        }

        if (state.result) {
          setResult(state.result as SpeedResult);
        }
      });
    } finally {
      setIsRunning(false);
    }
  }, [isRunning]);

  const reset = () => {
    setPhase("idle");
    setDownload(0);
    setUpload(0);
    setPing(0);
    setResult(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
      <GaugeMeter
        value={phase === "ping" ? ping : phase === "upload" ? upload : download}
        max={phase === "ping" ? 200 : 500}
        label={
          phase === "ping"
            ? "Ping"
            : phase === "upload"
            ? "Upload Speed"
            : "Download Speed"
        }
        unit={phase === "ping" ? "ms" : "Mbps"}
        color={
          phase === "ping"
            ? "#f59e0b"
            : phase === "upload"
            ? "#10b981"
            : "#3b82f6"
        }
      />

      {!isRunning && phase !== "complete" && (
        <button
          onClick={startTest}
          className="px-10 py-4 rounded-full text-white bg-blue-600 hover:bg-blue-500 flex items-center gap-3"
        >
          <Play className="w-5 h-5" />
          Start Speed Test
        </button>
      )}

      {phase === "complete" && (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-6 py-2 rounded-full border"
        >
          <RotateCcw className="w-4 h-4" />
          Test Again
        </button>
      )}

      {result && (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl">
            <p className="text-xs text-muted-foreground">IP Address</p>
            <p className="font-mono">{result.ip}</p>
          </div>

          <div className="p-4 border rounded-xl">
            <p className="text-xs text-muted-foreground">ISP</p>
            <p>{result.org}</p>
          </div>

          <div className="p-4 border rounded-xl">
            <p className="text-xs text-muted-foreground">Server</p>
            <p>{result.server}</p>
          </div>

          {(result.city || result.country) && (
            <div className="p-4 border rounded-xl md:col-span-3">
              <p className="text-xs text-muted-foreground">Location</p>
              <p>
                {result.city}, {result.region} — {result.country}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}