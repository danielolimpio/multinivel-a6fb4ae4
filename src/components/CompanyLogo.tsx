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
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

/**
 * Round company logo avatar. Tries the official Clearbit logo for the mapped
 * domain at high resolution; falls back to Google s2 favicon, then initials.
 */
export const CompanyLogo = ({ name, size = 40, className = "" }: CompanyLogoProps) => {
  const domain = top100Domains[name];
  const [stage, setStage] = useState<0 | 1 | 2>(domain ? 0 : 2);

  const src =
    stage === 0
      ? `https://logo.clearbit.com/${domain}?size=128`
      : stage === 1
        ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
        : "";

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-white ring-2 ring-[hsl(40_85%_55%)]/60 shadow-[0_2px_10px_-2px_hsl(220_60%_15%/0.25)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {stage < 2 ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          width={size}
          height={size}
          className="w-full h-full object-contain p-1"
          onError={() => setStage((s) => (s === 0 ? 1 : 2))}
        />
      ) : (
        <span className="text-[10px] font-black text-[hsl(220_60%_15%)] tracking-tight">
          {initialsOf(name)}
        </span>
      )}
    </span>
  );
};
