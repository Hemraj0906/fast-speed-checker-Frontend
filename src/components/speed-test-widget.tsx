"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  runSpeedTest,
  getSpeedRating,
  getPingRating,
  type SpeedTestState,
  type SpeedTestResult,
} from "@/lib/speed-test";
import { SpeedGauge } from "./speed-gauge";
import {
  Download,
  Upload,
  Activity,
  Zap,
  Globe,
  Wifi,
  RefreshCw,
  Share2,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const initialState: SpeedTestState = {
  phase: "idle",
  progress: 0,
  currentSpeed: 0,
  result: null,
  error: null,
};

export function SpeedTestWidget() {
  const [state, setState] = useState<SpeedTestState>(initialState);
  const [testCount, setTestCount] = useState(0);
  const isRunning = state.phase !== "idle" && state.phase !== "complete";
  const abortRef = useRef<AbortController | null>(null);
  const testInProgressRef = useRef(false);

  useEffect(() => {
    if (state.result) {
      console.log("FINAL RESULT:", state.result);
    }
  }, [state.result]);

  function getFlagEmoji(code?: string): string {
    if (!code) return "";

    return code
      .toUpperCase()
      .replace(/./g, (char: string) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );
  }

  // const updateState = useCallback((update: Partial<SpeedTestState>) => {
  //   if (!abortRef.current) {
  //     setState((prev) => ({ ...prev, ...update }));
  //   }
  // }, []);

  const updateState = useCallback((update: Partial<SpeedTestState>) => {
  setState((prev) => ({ ...prev, ...update }));
}, []);

  const startTest = useCallback(async () => {
    // Prevent multiple concurrent tests
    if (testInProgressRef.current) {
      return;
    }

    testInProgressRef.current = true;
    setTestCount((prev) => prev + 1);

    // Abort any previous test
    if (abortRef.current) {
      abortRef.current.abort();
    }

    abortRef.current = new AbortController();
    setState(initialState);

    try {
      await runSpeedTest(updateState);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setState((prev) => ({
          ...prev,
          phase: "complete",
          error: "Test failed. Please check your connection and try again.",
        }));
      }
    } finally {
      testInProgressRef.current = false;
    }
  }, [updateState]);

  const reset = useCallback(() => {
    // Abort any running test
    if (abortRef.current) {
      abortRef.current.abort();
    }
    testInProgressRef.current = false;
    setState(initialState);
  }, []);

  const phaseLabel = {
    idle: "Ready to test your internet speed",
    ping: "Testing latency...",
    download: "Testing download speed...",
    upload: "Testing upload speed...",
    complete: "Speed test complete!",
  }[state.phase];

  const gaugeMax = state.phase === "upload" ? 100 : 200;
  const displayValue =
    state.phase === "complete" && state.result
      ? state.result.download
      : state.currentSpeed;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main gauge area */}
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <SpeedGauge
            value={displayValue}
            max={gaugeMax}
            phase={state.phase}
            size={280}
          />

          {/* Center value overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="mt-8 text-center">
              {state.phase === "idle" ? (
                <div className="text-muted-foreground text-sm font-medium">
                  Mbps
                </div>
              ) : (
                <>
                  <div
                    className="text-4xl font-bold tabular-nums leading-none"
                    style={{
                      color: "#fff",
                      textShadow: "0 0 20px rgba(99,102,241,0.5)",
                    }}
                  >
                    {state.phase === "complete" && state.result
                      ? state.result.download.toFixed(1)
                      : state.currentSpeed.toFixed(1)}
                  </div>
                  <div className="text-xs text-white/60 mt-1">Mbps</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Phase indicator */}
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">{phaseLabel}</p>
          {isRunning && (
            <div className="mt-2 w-48 h-1.5 bg-muted rounded-full overflow-hidden mx-auto">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${state.progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Start / Reset button */}

        <div className="mt-6">
          {state.phase === "idle" ? (
           
            <button
              onClick={startTest}
              className="cursor-pointer relative group px-10 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2 pointer-events-none">
                <Zap className="w-5 h-5" fill="currentColor" />
                Start Speed Test
              </span>

              <span className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping pointer-events-none" />
            </button>
          ) : state.phase === "complete" ? (
            <button
              onClick={reset}
              className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition-all shadow-lg"
            >
              <RefreshCw className="w-4 h-4 pointer-events-none" />
              Test Again
            </button>
          ) : (
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm capitalize font-medium">
                {state.phase === "ping"
                  ? "Measuring latency"
                  : `Measuring ${state.phase} speed`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Results Grid */}
      {state.phase !== "idle" && (
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <ResultCard
            icon={<Download className="w-4 h-4" />}
            label="Download"
            value={
              state.result
                ? state.result.download.toFixed(1)
                : state.phase === "download"
                ? state.currentSpeed.toFixed(1)
                : "--"
            }
            unit="Mbps"
            active={state.phase === "download"}
            done={
              !!state.result ||
              state.phase === "upload" ||
              state.phase === "complete"
            }
            rating={
              state.result ? getSpeedRating(state.result.download) : undefined
            }
          />
          <ResultCard
            icon={<Upload className="w-4 h-4" />}
            label="Upload"
            value={
              state.result
                ? state.result.upload.toFixed(1)
                : state.phase === "upload"
                ? state.currentSpeed.toFixed(1)
                : "--"
            }
            unit="Mbps"
            active={state.phase === "upload"}
            done={!!state.result}
            rating={
              state.result ? getSpeedRating(state.result.upload) : undefined
            }
          />
          <ResultCard
            icon={<Activity className="w-4 h-4" />}
            label="Ping"
            value={
              state.result
                ? state.result.ping.toFixed(0)
                : state.phase === "ping"
                ? state.currentSpeed.toFixed(0)
                : "--"
            }
            unit="ms"
            active={state.phase === "ping"}
            done={state.phase !== "ping" && state.phase !== "idle"}
            rating={state.result ? getPingRating(state.result.ping) : undefined}
          />
          <ResultCard
            icon={<Wifi className="w-4 h-4" />}
            label="Jitter"
            value={state.result ? state.result.jitter.toFixed(0) : "--"}
            unit="ms"
            active={false}
            done={!!state.result}
          />
        </div>
      )}

      {/* Connection info */}
      {state.result && (
        <div className="mt-4 p-4 rounded-2xl bg-card border border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-3" />
              <div>
                <div className="text-xs text-muted-foreground">IP Address</div>
                <div className="font-mono font-medium">{state.result.ip}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-indigo-400 shrink-0 mt-3" />
              <div>
                <div className="text-xs text-muted-foreground">ISP</div>
                <div className="font-medium truncate">
                  {state.result.isp?.replace(/PVT\.?\s*LTD\.?/i, "").trim()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-3" />
              <div>
                <div className="text-xs text-muted-foreground">Server</div>
                <div className="font-medium">{state.result.server}</div>
              </div>
            </div>
          </div>

          {/*  location country and region and city*/}
          {/* Location */}
          <div className="flex items-center gap-2">
            {/* <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-2"  /> */}
            <MapPin className="w-5 h-5 text-red-500 shrink-0 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)] mt-7" />
            <div>
              <div className="text-lg text-white/150 text-muted-foreground mt-1.5">
                Location
              </div>
              <div className="font-medium truncate flex items-center gap-2">
                <span>
                  {[state.result.city, state.result.region]
                    .filter(Boolean)
                    .join(", ")}
                  {state.result.country && <> — {state.result.country}</>}
                </span>

                {/* Country Flag - Only show flag image, remove duplicate countryCode text */}
                <span className="inline-flex items-center ml-1">
                  {state.result.countryCode && (
                    <img
                      src={`https://flagcdn.com/w40/${state.result.countryCode.toLowerCase()}.png`}
                      alt={state.result.country || "Country"}
                      className="w-5 h-3 object-cover rounded-b-none mt-1"
                    />
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Speed rating */}
          {(() => {
            const rating = getSpeedRating(state.result.download);
            return (
              <div className="mt-3 pt-3 border-t border-border/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">
                    Connection Quality:{" "}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: rating.color }}
                  >
                    {rating.label}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    — {rating.description}
                  </span>
                </div>
                <button
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={() => {
                    if (navigator.share && state.result) {
                      navigator.share({
                        title: "My Internet Speed Test",
                        text: `Download: ${state.result.download} Mbps | Upload: ${state.result.upload} Mbps | Ping: ${state.result.ping} ms`,
                        url: "https://fastspeedchecker.com",
                      });
                    }
                  }}
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </button>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}

interface ResultCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  active: boolean;
  done: boolean;
  rating?: { label: string; color: string };
}

function ResultCard({
  icon,
  label,
  value,
  unit,
  active,
  done,
  rating,
}: ResultCardProps) {
  return (
    <div
      className={`relative p-3 rounded-2xl border transition-all duration-300 ${
        active
          ? "border-blue-500/60 bg-blue-500/10 shadow-lg shadow-blue-500/20"
          : "border-border/50 bg-card/60"
      }`}
    >
      {active && (
        <div className="absolute inset-0 rounded-2xl bg-blue-500/5 animate-pulse pointer-events-none" />
      )}
      <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
        {icon}
        <span className="text-xs font-medium">{label}</span>
      </div>
      <div className="text-xl font-bold tabular-nums">
        {value === "--" ? (
          <span className="text-muted-foreground">--</span>
        ) : (
          <span className={done ? "" : "text-blue-400"}>{value}</span>
        )}
      </div>
      <div className="flex items-center justify-between mt-0.5">
        <span className="text-xs text-muted-foreground">{unit}</span>
        {rating && (
          <span className="text-xs font-medium" style={{ color: rating.color }}>
            {rating.label}
          </span>
        )}
      </div>
    </div>
  );
}









