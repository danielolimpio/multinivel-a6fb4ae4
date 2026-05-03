import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, TrendingUp, Users, Award, Target, Shield, Zap, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { FlagIcon } from "@/components/FlagIcon";
import heroBackground from "@/assets/hero-background.webp";

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
  return <section 
    className="relative pt-4 sm:pt-6 md:pt-10 pb-12 sm:pb-16 overflow-hidden border-t border-b border-yellow-400/60"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
      {/* Linha dourada superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      
      {/* Linha dourada inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
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
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 text-white">
            <div className="mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-medium text-white/80">Est. Year 2010</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Portal de Marketing de Rede
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              O portal de referência em Marketing de Rede no Brasil, oferecendo ranking, análises e oportunidades de renda para empresas e distribuidores.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-8">
              {/* Ranking Feature */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white mb-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span>Ranking Global</span>
                    <Badge variant="outline" className="text-xs border-yellow-400/50 text-yellow-400 w-fit">
                      1.600+ empresas
                    </Badge>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Momentum Rankings mundialmente avaliadas com análises detalhadas e métricas precisas.
                  </p>
                </div>
              </div>
              
              {/* Momentum Feature */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-turquoise to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                    <span>Momentum Analysis</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Análises em tempo real do crescimento e performance das empresas no mercado.
                  </p>
                </div>
              </div>
              
              {/* Income Disclaimer */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white mb-1">
                    Transparência Total
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Ganhos potenciais e reais variam significativamente entre distribuidores. Resultados não garantidos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-3 sm:space-y-4 mt-4 lg:mt-0">
            {/* Top Earners Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <h3 className="font-semibold text-white mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Top Earners
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">
                Os top earners são líderes definidos, alta liderança e, geralmente, fundadores da empresa e líderes principais.
              </p>
              <Button variant="purple" size="sm" className="w-full text-xs sm:text-sm">
                Top earners
              </Button>
            </div>

            {/* Real Time Traffic Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <h3 className="font-semibold text-white mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Tráfego em tempo real
              </h3>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm max-h-32 sm:max-h-40 overflow-hidden">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-white/80 text-[10px] sm:text-xs">Visitantes online agora</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-1.5 sm:space-y-2 relative overflow-hidden">
                  {currentVisitors.map((visitor, index) => (
                    <div 
                      key={`${visitor.countryCode}-${index}-${Date.now()}`} 
                      className="flex items-center space-x-1.5 sm:space-x-2 bg-white/5 p-1.5 sm:p-2 rounded text-[10px] sm:text-xs animate-fade-in"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationDuration: '0.5s',
                        animationFillMode: 'both'
                      }}
                    >
                      <div className="bg-white/20 p-0.5 sm:p-1 rounded-sm flex-shrink-0 transition-all duration-300">
                        <FlagIcon countryCode={visitor.countryCode} size="sm" />
                      </div>
                      <span className="text-white/90 truncate">
                        <span className="hidden sm:inline">Um visitante {visitor.country === "Brasil" ? "do" : visitor.country === "Estados Unidos" ? "dos" : "da"}</span>
                        <strong className="ml-1">{visitor.country}</strong>
                        <span className="hidden sm:inline"> visualizou...</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-white/70 text-[10px] sm:text-xs">agora</div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
              <h3 className="font-semibold text-white mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">
                Receba as últimas novidades e análises do mercado de marketing de rede.
              </p>
              <div className="space-y-1.5 sm:space-y-2">
                <Input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-400 focus:ring-yellow-400/20 text-sm"
                />
                <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold text-xs sm:text-sm">
                  Assinar Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}