import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Vote, 
  Users, 
  Trophy, 
  TrendingUp, 
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Crie sua Conta",
    description: "Cadastre-se gratuitamente na plataforma. O processo é rápido e simples, levando menos de 2 minutos."
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Explore as Empresas",
    description: "Navegue pelo ranking completo de empresas de Marketing de Rede. Analise descrições, avaliações e compare diferentes opções."
  },
  {
    number: "03",
    icon: Vote,
    title: "Vote nas Melhores",
    description: "Dê seu voto nas empresas que você conhece ou trabalha. Cada voto conta para o ranking geral da plataforma."
  },
  {
    number: "04",
    icon: Trophy,
    title: "Acompanhe os Resultados",
    description: "Veja o ranking atualizado em tempo real. As posições mudam conforme os votos são contabilizados."
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Tempo Real",
    description: "Ranking atualizado instantaneamente após cada voto."
  },
  {
    icon: Shield,
    title: "Transparência",
    description: "Metodologia clara e votos verificáveis pela comunidade."
  },
  {
    icon: Star,
    title: "Comunidade",
    description: "Milhares de networkers contribuindo para um ranking justo."
  },
  {
    icon: TrendingUp,
    title: "Análises",
    description: "Informações detalhadas sobre cada empresa listada."
  }
];

export default function ComoFunciona() {
  return (
    <>
      <SEO 
        title="Como Funciona - Sistema de Ranking e Votação | Universidade Multinível"
        description="Entenda como funciona o sistema de ranking e votação da Universidade Multinível. Metodologia transparente, votos em tempo real e análises detalhadas de empresas de Marketing de Rede."
        canonical="/como-funciona"
      />
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Sistema Transparente
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Como Funciona a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Universidade Multinível
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Somos o maior portal de referência em Marketing de Rede do Brasil. 
              Nosso sistema de ranking é baseado em votos reais da comunidade, 
              garantindo transparência e credibilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  Criar Conta Grátis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/ranking">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Ranking
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Passo a Passo
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Participar é simples e rápido. Veja como começar:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Por Que Confiar no Nosso Ranking?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa metodologia garante um ranking justo e representativo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Metodologia do Ranking
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Votos Verificados</h4>
                    <p className="text-muted-foreground text-sm">
                      Apenas usuários cadastrados podem votar, garantindo autenticidade dos votos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Atualização em Tempo Real</h4>
                    <p className="text-muted-foreground text-sm">
                      O ranking é recalculado instantaneamente após cada novo voto.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Peso por Categoria</h4>
                    <p className="text-muted-foreground text-sm">
                      Consideramos votos, avaliações e engajamento da comunidade.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Transparência Total</h4>
                    <p className="text-muted-foreground text-sm">
                      Todos os dados de votação são públicos e podem ser verificados.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para Participar?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de networkers e contribua para o ranking mais 
              confiável de Marketing de Rede do Brasil.
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary">
                Criar Minha Conta Grátis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
