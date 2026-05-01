import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Share2, Users, Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Premium social share component.
 *
 * Renders inline brand-colored SVG icons (no external images required) so the
 * icons are crisp at any size, lightweight and consistent across the app.
 *
 * Two display modes:
 *  - size="sm" → compact icon row, ideal for cards (next to the company logo)
 *  - size="lg" → larger icons + labels, ideal for the company detail page
 *
 * Two share intents per network:
 *  - "post"   → share the company page link publicly on the chosen network
 *  - "friend" → send privately to a friend / group (uses the network's DM
 *               surface when available, falls back to the public composer).
 */

export type SocialShareSize = "sm" | "lg";

interface SocialShareProps {
  /** Absolute or relative URL to the page being shared. */
  url: string;
  /** Title / message used as share text. */
  title: string;
  /** Optional longer description (used by Pinterest / WhatsApp). */
  description?: string;
  /** Optional image URL for Pinterest. */
  image?: string;
  size?: SocialShareSize;
  className?: string;
  /** Center the icons horizontally. Default true. */
  centered?: boolean;
}

type Network = "whatsapp" | "facebook" | "x" | "pinterest" | "linkedin";

const BRAND: Record<Network, { name: string; color: string; hover: string }> = {
  whatsapp: { name: "WhatsApp", color: "#25D366", hover: "#1ebe5d" },
  facebook: { name: "Facebook", color: "#1877F2", hover: "#1466d8" },
  x: { name: "X", color: "#000000", hover: "#222222" },
  pinterest: { name: "Pinterest", color: "#E60023", hover: "#c8001f" },
  linkedin: { name: "LinkedIn", color: "#0A66C2", hover: "#0958a8" },
};

function Icon({ network, className }: { network: Network; className?: string }) {
  switch (network) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.8 11.8 0 0 0 1.6 5.93L0 24l6.38-1.67a11.84 11.84 0 0 0 5.66 1.44h.01c6.53 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.45ZM12.05 21.5h-.01a9.66 9.66 0 0 1-4.93-1.35l-.35-.21-3.79.99 1.01-3.69-.23-.38a9.66 9.66 0 0 1-1.49-5.13c0-5.34 4.36-9.7 9.7-9.7 2.59 0 5.02 1.01 6.85 2.84a9.62 9.62 0 0 1 2.84 6.86c0 5.35-4.36 9.7-9.6 9.77ZM17.4 14.4c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15s-.76.94-.93 1.13c-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43a8.7 8.7 0 0 1-1.6-2c-.17-.29 0-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3.01.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.34Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.5h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.18-.1-.95-.2-2.4.04-3.44.22-.93 1.4-5.94 1.4-5.94s-.36-.72-.36-1.78c0-1.66.97-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.57-.99 4-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.51 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.03.4 2.14.89 2.74.1.12.11.22.08.34-.09.36-.29 1.18-.33 1.34-.05.22-.17.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.74-7.25 7.91-7.25 4.15 0 7.38 2.96 7.38 6.92 0 4.13-2.6 7.45-6.21 7.45-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.14C9.57 23.81 10.77 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
        </svg>
      );
  }
}

function buildPostUrl(network: Network, url: string, title: string, description?: string, image?: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const d = encodeURIComponent(description ?? title);
  const img = encodeURIComponent(image ?? "");
  switch (network) {
    case "whatsapp":
      // Public share / status — opens composer with text + URL
      return `https://api.whatsapp.com/send?text=${t}%20${u}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${t}`;
    case "x":
      return `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
    case "pinterest":
      return `https://pinterest.com/pin/create/button/?url=${u}&media=${img}&description=${d}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
  }
}

function buildFriendUrl(network: Network, url: string, title: string, description?: string, image?: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const d = encodeURIComponent(description ?? title);
  const img = encodeURIComponent(image ?? "");
  switch (network) {
    case "whatsapp":
      // Lets the user pick a contact / group
      return `https://wa.me/?text=${t}%20${u}`;
    case "facebook":
      // Facebook Messenger send dialog
      return `https://www.facebook.com/dialog/send?app_id=140586622674265&link=${u}&redirect_uri=${u}`;
    case "x":
      // X DM compose with prefilled text
      return `https://twitter.com/messages/compose?text=${t}%20${u}`;
    case "pinterest":
      return `https://pinterest.com/pin/create/button/?url=${u}&media=${img}&description=${d}`;
    case "linkedin":
      // LinkedIn message composer
      return `https://www.linkedin.com/messaging/compose/?body=${t}%20${u}`;
  }
}

function openShare(href: string) {
  if (typeof window === "undefined") return;
  window.open(href, "_blank", "noopener,noreferrer,width=600,height=600");
}

const NETWORKS: Network[] = ["whatsapp", "facebook", "x", "pinterest", "linkedin"];

export function SocialShare({
  url,
  title,
  description,
  image,
  size = "sm",
  className,
  centered = true,
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const isLg = size === "lg";

  const absoluteUrl =
    typeof window !== "undefined" && url.startsWith("/")
      ? `${window.location.origin}${url}`
      : url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const iconBox = isLg ? "w-11 h-11" : "w-7 h-7";
  const iconSvg = isLg ? "w-5 h-5" : "w-3.5 h-3.5";
  const gap = isLg ? "gap-2.5" : "gap-1.5";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        gap,
        centered ? "justify-center" : "justify-start",
        className,
      )}
    >
      {NETWORKS.map((net) => {
        const brand = BRAND[net];
        return (
          <Popover key={net}>
            <PopoverTrigger asChild>
              <button
                type="button"
                aria-label={`Compartilhar no ${brand.name}`}
                title={`Compartilhar no ${brand.name}`}
                className={cn(
                  "inline-flex items-center justify-center rounded-full text-white shadow-sm",
                  "transition-all duration-200 hover:scale-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ring",
                  iconBox,
                )}
                style={{ backgroundColor: brand.color }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.color)}
              >
                <Icon network={net} className={iconSvg} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="center">
              <p className="text-xs font-medium text-foreground px-2 py-1.5">
                Compartilhar no {brand.name}
              </p>
              <button
                type="button"
                onClick={() => openShare(buildPostUrl(net, absoluteUrl, title, description, image))}
                className="w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-muted transition-colors text-left"
              >
                <Share2 className="w-4 h-4 text-muted-foreground" />
                <span>Compartilhar publicação</span>
              </button>
              <button
                type="button"
                onClick={() => openShare(buildFriendUrl(net, absoluteUrl, title, description, image))}
                className="w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm hover:bg-muted transition-colors text-left"
              >
                <Users className="w-4 h-4 text-muted-foreground" />
                <span>Enviar a um amigo / grupo</span>
              </button>
            </PopoverContent>
          </Popover>
        );
      })}

      {isLg && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="ml-1 h-9"
          aria-label="Copiar link"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" /> Copiado
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4 mr-1" /> Copiar link
            </>
          )}
        </Button>
      )}
    </div>
  );
}

export default SocialShare;
