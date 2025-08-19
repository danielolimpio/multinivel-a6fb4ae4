import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
export function Hero() {
  return <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-hero">
      {/* Floating particles animation */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDuration: `${Math.random() * 10 + 8}s`,
              animationDelay: `${Math.random() * 2}s`,
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
                  <span className="text-white/80 text-xs">Visitante de Hillsboro, United States</span>
                  <span className="text-xs">🇺🇸</span>
                </div>
                <div className="text-white/90 text-xs bg-white/10 p-2 rounded">
                  visualizou <strong>Amber Olson Rourke cùa Neora</strong> đưa ra tầm nhìn về sự tăng trưởng và đổi mới cho ngành bán hàng trực tiếp. Sự kiên định, số liệu và tin tức về bán hàng trực tiếp
                </div>
                <div className="text-white/70 text-xs">0s</div>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="text-white/80 text-xs">Visitante de United States</span>
                  <span className="text-xs">🇺🇸</span>
                </div>
                <div className="text-white/90 text-xs bg-white/10 p-2 rounded">
                  visualizou <strong>M INTERNATIONAL®</strong> 성장하였습니다.. 페이지 작업 관련 시설, 수치 및 뉴스
                </div>
                <div className="text-white/70 text-xs">5s</div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-white/80 text-xs">Visitante de Rockville, United States</span>
                  <span className="text-xs">🇺🇸</span>
                </div>
                <div className="text-white/90 text-xs bg-white/10 p-2 rounded">
                  visualizou <strong>Top Earners Rankings</strong> Direct Selling
                </div>
                <div className="text-white/70 text-xs">12s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}