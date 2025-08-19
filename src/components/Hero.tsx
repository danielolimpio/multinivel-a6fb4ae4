import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { FlagIcon } from "@/components/FlagIcon";

export function Hero() {
  const [currentVisitors, setCurrentVisitors] = useState([
    { country: "Brasil", countryCode: "pt" },
    { country: "Estados Unidos", countryCode: "en" },
    { country: "Reino Unido", countryCode: "en" }
  ]);

  const visitors = [
    { country: "Brasil", countryCode: "pt" },
    { country: "Brasil", countryCode: "pt" },
    { country: "Brasil", countryCode: "pt" },
    { country: "Brasil", countryCode: "pt" },
    { country: "Estados Unidos", countryCode: "en" },
    { country: "Estados Unidos", countryCode: "en" },
    { country: "Estados Unidos", countryCode: "en" },
    { country: "Reino Unido", countryCode: "en" },
    { country: "Canadá", countryCode: "ca" },
    { country: "México", countryCode: "mx" },
    { country: "Espanha", countryCode: "es" },
    { country: "França", countryCode: "fr" },
    { country: "Alemanha", countryCode: "de" },
    { country: "Itália", countryCode: "it" },
    { country: "Portugal", countryCode: "pt-pt" },
    { country: "China", countryCode: "zh" },
    { country: "Japão", countryCode: "ja" },
    { country: "Rússia", countryCode: "ru" },
    { country: "Holanda", countryCode: "nl" },
    { country: "Polônia", countryCode: "pl" },
    { country: "Turquia", countryCode: "tr" },
    { country: "Coreia do Sul", countryCode: "ko" },
    { country: "Vietnã", countryCode: "vi" },
    { country: "Indonésia", countryCode: "id" },
    { country: "Liga Árabe", countryCode: "ar" },
    { country: "Índia", countryCode: "hi" },
    { country: "Filipinas", countryCode: "tl" },
    { country: "Croácia", countryCode: "hr" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledVisitors = [...visitors].sort(() => Math.random() - 0.5);
      setCurrentVisitors(shuffledVisitors.slice(0, 3));
    }, 8000);

    return () => clearInterval(interval);
  }, [visitors]);
  return <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-hero">
      {/* Floating particles animation */}
      <div className="floating-particles">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className={`particle particle-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Growth line graphic */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
        <svg width="200" height="120" viewBox="0 0 200 120" className="text-white/20">
          <path d="M20 100 L50 80 L80 60 L110 40 L140 20 L170 10" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
          <circle cx="20" cy="100" r="4" fill="currentColor" />
          <circle cx="50" cy="80" r="4" fill="currentColor" />
          <circle cx="80" cy="60" r="4" fill="currentColor" />
          <circle cx="110" cy="40" r="4" fill="currentColor" />
          <circle cx="140" cy="20" r="4" fill="currentColor" />
          <circle cx="170" cy="10" r="6" fill="white" className="animate-pulse" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 text-white">
            <div className="mb-4">
              <span className="text-sm font-medium text-white/80">Est. Year 2010</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Portal de Marketing de Rede
            </h1>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
              O portal de referência em Marketing de Rede no Brasil, oferecendo ranking, análises e oportunidades de renda para empresas e distribuidores.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-turquoise rounded-full" />
                <span>Ranking</span>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Momentum ranks</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Momentum Rankings, que abrange mais de 1.600+ empresas de marketing de rede mundialmente avaliadas, não é apenas estatística.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Income disclaimers</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Disclaimer geral: ganhos potenciais e reais variam significativamente entre distribuidores.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-4">
            {/* Top Earners Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Top Earners
              </h3>
              <p className="text-sm text-white/80 mb-3">
                Os top earners são líderes definidos, alta liderança e, geralmente, fundadores da empresa e líderes principais.
              </p>
              <Button variant="purple" size="sm" className="w-full">
                Top earners
              </Button>
            </div>

            {/* Real Time Traffic Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Tráfego em tempo real
              </h3>
              <div className="space-y-2 text-sm max-h-40 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-xs">Visitantes online agora</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2 animate-[slide-in-right_20s_linear_infinite]">
                  {currentVisitors.map((visitor, index) => (
                    <div key={`${visitor.countryCode}-${index}`} className="flex items-center space-x-2 bg-white/5 p-2 rounded text-xs">
                      <div className="bg-white/20 p-1 rounded-sm flex-shrink-0">
                        <FlagIcon countryCode={visitor.countryCode} size="sm" />
                      </div>
                      <span className="text-white/90">
                        Um visitante {visitor.country === "Brasil" ? "do" : visitor.country === "Estados Unidos" ? "dos" : "da"} <strong>{visitor.country}</strong> visualizou...
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-white/70 text-xs">agora</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}