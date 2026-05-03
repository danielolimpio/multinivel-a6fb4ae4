import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import { useState } from "react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-blue-gold py-2.5 px-4 border-b border-[hsl(40_85%_52%)]/40 shadow-[0_2px_10px_-2px_hsl(40_85%_52%/0.3)]">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <span className="text-white font-semibold">
          Universidade Multinível 2026.
        </span>
        <span className="text-white/90 hidden sm:inline">
          O questionário da maior pesquisa de Marketing e Vendas está aberto
        </span>
        <Link 
          to="/quiz/papel-no-mmn/"
          className="inline-flex items-center gap-1 text-white font-semibold hover:underline ml-2"
        >
          Responda agora
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors"
        aria-label="Fechar anúncio"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
