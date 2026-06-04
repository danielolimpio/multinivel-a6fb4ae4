import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";
import { useState } from "react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-blue py-2 px-3 md:px-8 border-b border-[hsl(40_85%_52%)]/40 shadow-[0_2px_10px_-2px_hsl(40_85%_52%/0.3)]">
      {/* Mobile: 2 lines */}
      <div className="container mx-auto md:hidden pr-6 text-center">
        <div className="text-[13px] leading-tight text-[hsl(40_85%_60%)] font-semibold">
          Universidade Multinível 2026.
        </div>
        <div className="text-[13px] leading-tight text-[hsl(40_85%_60%)] flex items-center justify-center gap-1 flex-wrap">
          <span>Pesquisa de Marketing e Vendas aberta.</span>
          <Link
            to="/quiz/papel-no-mmn/"
            className="inline-flex items-center gap-0.5 font-semibold hover:underline whitespace-nowrap"
          >
            Responder
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Desktop: single line */}
      <div className="container mx-auto hidden md:flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base">
        <span className="text-[hsl(40_85%_60%)] font-semibold">
          Universidade Multinível 2026.
        </span>
        <span className="text-[hsl(40_85%_60%)]">
          O questionário da maior pesquisa de Marketing e Vendas está aberto
        </span>
        <Link 
          to="/quiz/papel-no-mmn/"
          className="inline-flex items-center gap-1 text-[hsl(40_85%_60%)] font-semibold hover:underline"
        >
          Responda agora
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[hsl(40_85%_60%)]/80 hover:text-[hsl(40_85%_60%)] transition-colors"
        aria-label="Fechar anúncio"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
