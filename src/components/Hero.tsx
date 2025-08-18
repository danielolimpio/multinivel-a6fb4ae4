import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20"
          >
            <Star className="w-4 h-4 mr-2" />
            Portal de referência em Marketing de Rede
          </Badge>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
            <span className="block">Universidade</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Multinível
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            O portal de referência em Marketing de Rede no Brasil. 
            Vote nas melhores empresas, participe da comunidade e construa sua rede de sucesso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-elegant"
            >
              Cadastrar e Votar - R$20/mês
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-muted/50"
            >
              Ver Ranking Completo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Mais de 10.000 usuários</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-turquoise" />
              <span>Ranking atualizado diariamente</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent" />
              <span>Sistema de recompensas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-4 w-72 h-72 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
    </section>
  );
}