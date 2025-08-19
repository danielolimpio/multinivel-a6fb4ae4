import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentVisitor, setCurrentVisitor] = useState({
    country: "Brasil",
    flag: "🇧🇷",
    content: "Portal de Marketing de Rede"
  });

  const visitors = [
    { country: "Brasil", flag: "🇧🇷", content: "Portal de Marketing de Rede" },
    { country: "Estados Unidos", flag: "🇺🇸", content: "Network Marketing Portal" },
    { country: "Espanha", flag: "🇪🇸", content: "Portal de Marketing de Red" },
    { country: "França", flag: "🇫🇷", content: "Portail Marketing de Réseau" },
    { country: "Alemanha", flag: "🇩🇪", content: "Network-Marketing-Portal" },
    { country: "Itália", flag: "🇮🇹", content: "Portale di Network Marketing" },
    { country: "Portugal", flag: "🇵🇹", content: "Portal de Marketing de Rede" },
    { country: "México", flag: "🇲🇽", content: "Portal de Marketing de Red" },
    { country: "Canadá", flag: "🇨🇦", content: "Network Marketing Portal" },
    { country: "Reino Unido", flag: "🇬🇧", content: "Network Marketing Portal" },
    { country: "China", flag: "🇨🇳", content: "网络营销门户" },
    { country: "Japão", flag: "🇯🇵", content: "ネットワークマーケティングポータル" },
    { country: "Rússia", flag: "🇷🇺", content: "Портал сетевого маркетинга" },
    { country: "Holanda", flag: "🇳🇱", content: "Netwerk Marketing Portaal" },
    { country: "Polônia", flag: "🇵🇱", content: "Portal Marketingu Sieciowego" },
    { country: "Turquia", flag: "🇹🇷", content: "Ağ Pazarlama Portalı" },
    { country: "Coreia do Sul", flag: "🇰🇷", content: "네트워크 마케팅 포털" },
    { country: "Vietnã", flag: "🇻🇳", content: "Cổng tiếp thị mạng" },
    { country: "Indonésia", flag: "🇮🇩", content: "Portal Pemasaran Jaringan" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomVisitor = visitors[Math.floor(Math.random() * visitors.length)];
      setCurrentVisitor(randomVisitor);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
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
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-xs">Visitante online agora</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{currentVisitor.flag}</span>
                  <span className="text-white/80 text-xs">{currentVisitor.country}</span>
                </div>
                <div className="text-white/90 text-xs bg-white/10 p-2 rounded">
                  visualizou <strong>{currentVisitor.content}</strong>
                </div>
                <div className="text-white/70 text-xs">agora</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}