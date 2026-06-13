import { useState } from "react";
import { top100Domains } from "@/data/top100Domains";

interface CompanyLogoProps {
  name: string;
  size?: number;
  className?: string;
}

const initialsOf = (name: string) =>
  name
    .replace(/\(.*?\)/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

// Deterministic premium gradient per company (used as backdrop / fallback).
const gradientFor = (name: string) => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  const hue2 = (hue + 35) % 360;
  return `linear-gradient(135deg, hsl(${hue} 70% 32%), hsl(${hue2} 75% 22%))`;
};

/**
 * Premium round company logo.
 * Source chain (best → fallback):
 *  1) logo.dev with fallback=404, so it never shows generated lettermarks
 *  2) Clearbit logo API (high-res PNG)
 *  3) Initials only if every official logo source fails
 *
 * The Google favicon endpoint is intentionally avoided because it often
 * returns a generic globe placeholder when no favicon is registered.
 */
export const CompanyLogo = ({ name, size = 44, className = "" }: CompanyLogoProps) => {
  const domain = top100Domains[name];
  const [stage, setStage] = useState<0 | 1 | 2>(domain ? 0 : 2);

  // logo.dev public demo token (documented at https://www.logo.dev)
  const LOGO_DEV_TOKEN = "pk_X-1ZO13GSgeOoUrIuJ6GMQ";

  const src =
    stage === 0
      ? `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=512&format=png&retina=true&fallback=404`
      : stage === 1
        ? `https://logo.clearbit.com/${domain}?size=512&format=png`
        : "";

  const showImage = stage < 2 && !!domain;
  const bg = gradientFor(name);

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden ring-2 ring-[hsl(40_85%_55%)]/70 shadow-[0_4px_14px_-4px_hsl(220_60%_15%/0.45),inset_0_0_0_1px_rgba(255,255,255,0.18)] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 28%, hsl(0 0% 100% / 0.98), hsl(42 90% 96% / 0.94) 58%, hsl(220 42% 18% / 0.9))`,
      }}
      aria-hidden="true"
    >
      {showImage ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          width={size}
          height={size}
          className="absolute inset-0 w-full h-full object-contain p-[3px] bg-white"
          onError={() => setStage((s) => (s === 0 ? 1 : 2))}
          onLoad={(e) => {
            // Detect transparent / near-empty logos returned by some providers:
            // if natural size is suspiciously tiny, fall back.
            const img = e.currentTarget;
            if (img.naturalWidth < 16 || img.naturalHeight < 16) {
              setStage((s) => (s === 0 ? 1 : 2));
            }
          }}
        />
      ) : (
        <span
          className="font-black text-white tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
          style={{ fontSize: Math.max(11, Math.round(size * 0.36)) }}
        >
          {initialsOf(name) || "•"}
        </span>
      )}
      {/* subtle inner gold rim for premium feel */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "inset 0 0 0 1px hsl(40 85% 60% / 0.35), inset 0 0 8px hsl(40 85% 55% / 0.15)",
        }}
      />
    </span>
  );
};
