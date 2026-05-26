import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Crown, 
  Medal, 
  Award, 
  Star, 
  TrendingUp, 
  Users, 
  Globe, 
  BarChart3, 
  Vote, 
  Eye,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  Building2,
  Check,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCompanyVote, useCompanyVoteCounts } from "@/hooks/useCompanyVoting";
import { companyNameToSlug } from "@/lib/companySlug";

// Import company logos
import hinodeLogo from "@/assets/logos/hinode.jpeg";
import herbalifeLogo from "@/assets/logos/herbalife.jpeg";
import vorwerkLogo from "@/assets/logos/vorwerk.jpeg";
import foreverLogo from "@/assets/logos/forever.jpeg";
import nuSkinLogo from "@/assets/logos/nuskin.jpeg";
import maryKayLogo from "@/assets/logos/marykay.jpeg";
import amwayLogo from "@/assets/logos/amway.jpeg";
import ozonteckLogo from "@/assets/logos/ozonteck.jpeg";
import cowayLogo from "@/assets/logos/coway.jpeg";
import fourLifeLogo from "@/assets/logos/4life.jpeg";
import infinitusLogo from "@/assets/logos/infinitus.jpeg";
import janroseLogo from "@/assets/logos/janrose.jpeg";
import melaleucaLogo from "@/assets/logos/melaleuca.jpeg";
import omnilifeLogo from "@/assets/logos/omnilife.jpeg";
import oriflameLogo from "@/assets/logos/oriflame.jpeg";
import primericaLogo from "@/assets/logos/primerica.jpeg";
import royalprestigeLogo from "@/assets/logos/royalprestige.jpeg";
import tupperwareLogo from "@/assets/logos/tupperware.jpeg";
import utilitywarehouseLogo from "@/assets/logos/utilitywarehouse.jpeg";

// Extended mock data for full ranking
const rankingData = [
  {
    id: 1,
    name: "Hinode",
    slug: "hinode",
    logo: hinodeLogo,
    position: 1,
    previousPosition: 1,
    votes: 2847,
    maxVotes: 3000,
    rating: 4.8,
    category: "Cosméticos & Bem-estar",
    founded: "1988",
    country: "Brasil",
    description: "Empresa brasileira líder em cosméticos e perfumaria no Marketing de Rede",
    highlights: ["Maior empresa brasileira de MMN", "Presente em 8 países", "Mais de 500 mil consultores"],
    recentVoters: [
      { name: "Ana Silva", avatar: "/placeholder.svg", city: "São Paulo" },
      { name: "João Costa", avatar: "/placeholder.svg", city: "Rio de Janeiro" },
      { name: "Maria Santos", avatar: "/placeholder.svg", city: "Belo Horizonte" },
      { name: "Pedro Lima", avatar: "/placeholder.svg", city: "Brasília" },
      { name: "Carla Oliveira", avatar: "/placeholder.svg", city: "Salvador" }
    ]
  },
  {
    id: 2,
    name: "Herbalife",
    slug: "herbalife",
    logo: herbalifeLogo,
    position: 2,
    previousPosition: 3,
    votes: 2634,
    maxVotes: 3000,
    rating: 4.7,
    category: "Nutrição & Saúde",
    founded: "1980",
    country: "Estados Unidos",
    description: "Líder mundial em nutrição e controle de peso",
    highlights: ["Presente em 90+ países", "43+ anos de mercado", "Foco em nutrição esportiva"],
    recentVoters: [
      { name: "Roberto Silva", avatar: "/placeholder.svg", city: "Curitiba" },
      { name: "Lucia Mendes", avatar: "/placeholder.svg", city: "Fortaleza" },
      { name: "Carlos Ferreira", avatar: "/placeholder.svg", city: "Porto Alegre" }
    ]
  },
  {
    id: 3,
    name: "Vorwerk",
    logo: vorwerkLogo,
    position: 3,
    previousPosition: 2,
    votes: 2398,
    maxVotes: 3000,
    rating: 4.6,
    category: "Eletrodomésticos Premium",
    founded: "1883",
    country: "Alemanha",
    description: "Empresa alemã líder em eletrodomésticos premium e venda direta",
    highlights: ["140+ anos de história", "Thermomix mundialmente famoso", "Qualidade alemã"],
    recentVoters: [
      { name: "Patricia Rocha", avatar: "/placeholder.svg", city: "Manaus" },
      { name: "Marcos Alves", avatar: "/placeholder.svg", city: "Belém" }
    ]
  },
  {
    id: 4,
    name: "Forever Living",
    logo: foreverLogo,
    position: 4,
    previousPosition: 5,
    votes: 2156,
    maxVotes: 3000,
    rating: 4.5,
    category: "Aloe Vera & Saúde",
    founded: "1978",
    country: "Estados Unidos",
    description: "Maior produtora de aloe vera do mundo",
    highlights: ["45+ anos de mercado", "Plantações próprias", "Certificação orgânica"],
    recentVoters: [
      { name: "Gustavo Reis", avatar: "/placeholder.svg", city: "Florianópolis" },
      { name: "Camila Torres", avatar: "/placeholder.svg", city: "Maceió" }
    ]
  },
  {
    id: 5,
    name: "Nu Skin",
    logo: nuSkinLogo,
    position: 5,
    previousPosition: 4,
    votes: 1987,
    maxVotes: 3000,
    rating: 4.4,
    category: "Cuidados Pessoais",
    founded: "1984",
    country: "Estados Unidos",
    description: "Empresa americana de cuidados pessoais e suplementos",
    highlights: ["Tecnologia ageLOC", "Pesquisa científica avançada", "40+ anos de inovação"],
    recentVoters: [
      { name: "Amanda Souza", avatar: "/placeholder.svg", city: "Campo Grande" }
    ]
  },
  {
    id: 6,
    name: "Mary Kay",
    logo: maryKayLogo,
    position: 6,
    previousPosition: 6,
    votes: 1823,
    maxVotes: 3000,
    rating: 4.3,
    category: "Cosméticos",
    founded: "1963",
    country: "Estados Unidos",
    description: "Uma das maiores empresas de cosméticos do mundo",
    highlights: ["60+ anos de história", "Empoderamento feminino", "Carros rosa icônicos"],
    recentVoters: []
  },
  {
    id: 7,
    name: "Amway",
    logo: amwayLogo,
    position: 7,
    previousPosition: 7,
    votes: 1654,
    maxVotes: 3000,
    rating: 4.2,
    category: "Produtos Diversos",
    founded: "1959",
    country: "Estados Unidos",
    description: "Pioneira do Marketing de Rede moderno",
    highlights: ["Maior empresa de MMN do mundo", "65+ anos de história", "Mais de 100 países"],
    recentVoters: []
  },
  {
    id: 8,
    name: "Ozonteck",
    logo: ozonteckLogo,
    position: 8,
    previousPosition: 9,
    votes: 1542,
    maxVotes: 3000,
    rating: 4.1,
    category: "Ozônio & Tecnologia",
    founded: "2020",
    country: "Brasil",
    description: "Empresa brasileira inovadora em tecnologia de ozônio",
    highlights: ["Tecnologia sustentável", "Inovação brasileira", "Crescimento acelerado"],
    recentVoters: []
  },
  {
    id: 9,
    name: "Coway",
    logo: cowayLogo,
    position: 9,
    previousPosition: 8,
    votes: 1398,
    maxVotes: 3000,
    rating: 4.0,
    category: "Purificação & Bem-estar",
    founded: "1989",
    country: "Coreia do Sul",
    description: "Líder mundial em purificadores de água e ar",
    highlights: ["35+ anos de mercado", "Tecnologia coreana", "Líder em purificação"],
    recentVoters: []
  },
  {
    id: 10,
    name: "4Life",
    logo: fourLifeLogo,
    position: 10,
    previousPosition: 10,
    votes: 1287,
    maxVotes: 3000,
    rating: 3.9,
    category: "Sistema Imunológico",
    founded: "1998",
    country: "Estados Unidos",
    description: "Pioneira em tecnologia Transfer Factor para imunidade",
    highlights: ["Transfer Factor exclusivo", "25+ anos de ciência", "Presente em 50+ países"],
    recentVoters: []
  },
  {
    id: 11,
    name: "Infinitus",
    logo: infinitusLogo,
    position: 11,
    previousPosition: 12,
    votes: 1198,
    maxVotes: 3000,
    rating: 3.8,
    category: "Medicina Tradicional Chinesa",
    founded: "1992",
    country: "China",
    description: "Líder global em produtos de saúde baseados na medicina tradicional chinesa",
    highlights: ["Raízes na medicina chinesa", "30+ anos de mercado", "Presença global"],
    recentVoters: []
  },
  {
    id: 12,
    name: "Jan Rosê",
    logo: janroseLogo,
    position: 12,
    previousPosition: 11,
    votes: 1156,
    maxVotes: 3000,
    rating: 3.7,
    category: "Cosméticos & Perfumaria",
    founded: "2019",
    country: "Brasil",
    description: "Empresa brasileira de cosméticos e perfumaria com crescimento acelerado",
    highlights: ["Marca brasileira", "Produtos inovadores", "Crescimento exponencial"],
    recentVoters: []
  },
  {
    id: 13,
    name: "Melaleuca",
    logo: melaleucaLogo,
    position: 13,
    previousPosition: 13,
    votes: 1087,
    maxVotes: 3000,
    rating: 3.7,
    category: "Bem-estar & Casa",
    founded: "1985",
    country: "Estados Unidos",
    description: "The Wellness Company - produtos naturais para saúde e casa",
    highlights: ["Produtos eco-friendly", "38+ anos de mercado", "Foco em bem-estar familiar"],
    recentVoters: []
  },
  {
    id: 14,
    name: "Omnilife",
    logo: omnilifeLogo,
    position: 14,
    previousPosition: 15,
    votes: 1023,
    maxVotes: 3000,
    rating: 3.6,
    category: "Nutrição & Suplementos",
    founded: "1991",
    country: "México",
    description: "Gente que cuida de gente - suplementos nutricionais de alta qualidade",
    highlights: ["Forte presença latina", "33+ anos de história", "Tecnologia micelização"],
    recentVoters: []
  },
  {
    id: 15,
    name: "Oriflame",
    logo: oriflameLogo,
    position: 15,
    previousPosition: 14,
    votes: 987,
    maxVotes: 3000,
    rating: 3.6,
    category: "Cosméticos Naturais",
    founded: "1967",
    country: "Suécia",
    description: "Empresa europeia de cosméticos naturais de origem sueca",
    highlights: ["Origem escandinava", "Produtos naturais", "56+ anos de tradição"],
    recentVoters: []
  },
  {
    id: 16,
    name: "Primerica",
    logo: primericaLogo,
    position: 16,
    previousPosition: 16,
    votes: 934,
    maxVotes: 3000,
    rating: 3.5,
    category: "Serviços Financeiros",
    founded: "1977",
    country: "Estados Unidos",
    description: "Líder em serviços financeiros e seguros de vida via venda direta",
    highlights: ["Serviços financeiros", "46+ anos de mercado", "Foco em educação financeira"],
    recentVoters: []
  },
  {
    id: 17,
    name: "Royal Prestige",
    logo: royalprestigeLogo,
    position: 17,
    previousPosition: 18,
    votes: 876,
    maxVotes: 3000,
    rating: 3.5,
    category: "Utensílios de Cozinha",
    founded: "1959",
    country: "Estados Unidos",
    description: "Líder em utensílios de cozinha premium e sistemas de cocção",
    highlights: ["65+ anos de qualidade", "Utensílios premium", "Garantia vitalícia"],
    recentVoters: []
  },
  {
    id: 18,
    name: "Tupperware",
    logo: tupperwareLogo,
    position: 18,
    previousPosition: 17,
    votes: 823,
    maxVotes: 3000,
    rating: 3.4,
    category: "Utensílios Domésticos",
    founded: "1946",
    country: "Estados Unidos",
    description: "Pioneira em vendas diretas e demonstrações em casa",
    highlights: ["77+ anos de história", "Marca icônica global", "Sustentabilidade"],
    recentVoters: []
  },
  {
    id: 19,
    name: "Utility Warehouse",
    logo: utilitywarehouseLogo,
    position: 19,
    previousPosition: 19,
    votes: 756,
    maxVotes: 3000,
    rating: 3.4,
    category: "Serviços & Utilities",
    founded: "1996",
    country: "Reino Unido",
    description: "Maior empresa de multi-utilities do Reino Unido via marketing de rede",
    highlights: ["Líder em utilities UK", "27+ anos de mercado", "Modelo de negócio único"],
    recentVoters: []
  },
  {
    id: 20,
    name: "Forever Living",
    logo: foreverLogo,
    position: 20,
    previousPosition: 20,
    votes: 698,
    maxVotes: 3000,
    rating: 3.3,
    category: "Aloe Vera & Saúde",
    founded: "1978",
    country: "Estados Unidos",
    description: "Maior produtora de aloe vera do mundo com produtos naturais",
    highlights: ["45+ anos de mercado", "Plantações próprias", "Qualidade premium"],
    recentVoters: []
  }
];

const stats = [
  { icon: Building2, label: "Empresas Listadas", value: "150+" },
  { icon: Users, label: "Votos Registrados", value: "45.000+" },
  { icon: Globe, label: "Países Representados", value: "50+" },
  { icon: BarChart3, label: "Análises Publicadas", value: "200+" }
];

export default function Ranking() {
  const [hoveredVoter, setHoveredVoter] = useState<{
    companyId: number;
    voterIndex: number;
  } | null>(null);
  const { counts } = useCompanyVoteCounts();
  const { vote, hasVoted, voting, votedCompany } = useCompanyVote();

  const getOrdinal = (position: number) => `${position}º`;

  const getTrendIcon = (current: number, previous: number) => {
    if (current < previous) return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (current > previous) return <ArrowDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getTrendText = (current: number, previous: number) => {
    if (current < previous) return `+${previous - current}`;
    if (current > previous) return `-${current - previous}`;
    return "=";
  };

  return (
    <>
      <SEO 
        title="Ranking Top Empresas de Marketing de Rede 2025"
        description="Confira o ranking completo das melhores empresas de Marketing de Rede do Brasil e do mundo. Vote nas suas favoritas e acompanhe os resultados em tempo real."
        canonical="/ranking"
      />

      <Header />

      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] bg-gold/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <Badge className="mb-6 px-4 py-2 badge-premium text-sm">
                <Trophy className="w-4 h-4 mr-2" />
                Ranking Oficial 2025
              </Badge>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Top Empresas de </span>
                <span className="text-gradient-blue">Marketing de Rede</span>
              </h1>


              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                O ranking mais completo e transparente do mercado. Baseado em votos reais da comunidade 
                e análises especializadas.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-gold transition-all duration-300">
                    <div className="w-12 h-12 rounded-full icon-premium flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gradient-blue">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="mb-4 badge-premium px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Como Funciona
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-blue">
                Metodologia do Ranking
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Vote, title: "Votos da Comunidade", desc: "Cada voto conta! Nossa comunidade avalia as empresas com base em suas experiências reais." },
                { icon: Target, title: "Critérios Objetivos", desc: "Analisamos planos de compensação, produtos, suporte e reputação no mercado." },
                { icon: Zap, title: "Atualização em Tempo Real", desc: "O ranking é atualizado constantemente para refletir as últimas tendências do mercado." },
              ].map((item, i) => (
                <Card key={i} className="p-6 text-center hover:shadow-card transition-all duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full icon-premium flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-[hsl(40_85%_55%)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Ranking Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-[hsl(40_85%_50%)]" />
                  <span className="text-gradient-blue">Ranking Completo</span>
                </h2>
                <p className="text-muted-foreground mt-1">Atualizado em tempo real • Últimos 30 dias</p>
              </div>
              <Badge className="self-start sm:self-auto badge-premium px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                {rankingData.length} empresas listadas
              </Badge>
            </div>

            {/* Unified Ranking Grid — same card style as homepage RankingSection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {rankingData.map((company, index) => {
                const slug = (company as any).slug ?? companyNameToSlug(company.name);
                const liveVotes = company.votes + (counts[slug] ?? 0);
                const totalVotes = rankingData.reduce(
                  (sum, c) => sum + c.votes + (counts[((c as any).slug ?? companyNameToSlug(c.name))] ?? 0),
                  0,
                );
                const sharePct = totalVotes > 0 ? (liveVotes / totalVotes) * 100 : 0;
                const voted = hasVoted(slug);
                const isVoting = voting === slug;
                return (
                  <Card
                    key={company.id}
                    className="p-2.5 sm:p-3 md:p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="relative">
                      {/* Mobile-only position badge — top-left */}
                      <div className="absolute top-0 left-0 sm:hidden flex items-center justify-center w-10 h-10 rounded-full position-badge z-10">
                        <span className="font-bold text-sm">{getOrdinal(company.position)}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4">
                        {/* Desktop position badge */}
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full position-badge flex-shrink-0">
                          <span className="font-bold text-base">{getOrdinal(company.position)}</span>
                        </div>

                        <div className="flex-1 min-w-0 w-full">
                          {/* Mobile: centered logo+name. Desktop: row */}
                          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-2 sm:gap-3 mb-3">
                            <img
                              src={company.logo}
                              alt={`${company.name} logo`}
                              className="w-20 h-20 sm:w-14 sm:h-14 rounded-lg object-cover bg-muted flex-shrink-0 shadow-md"
                            />
                            <div className="min-w-0 flex-1">
                              <h3 className="font-bold text-foreground text-xl sm:text-lg">{company.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {liveVotes.toLocaleString()} votos
                              </p>
                            </div>
                            <div className="flex items-center gap-2 sm:ml-auto">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-[hsl(40_85%_50%)] fill-[hsl(40_85%_50%)]" />
                                <span className="text-sm font-medium">{company.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {getTrendIcon(company.position, company.previousPosition)}
                                <span className="text-xs text-muted-foreground">
                                  {getTrendText(company.position, company.previousPosition)}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="mb-3">
                            <Progress value={sharePct} className="h-2 animate-progress-fill" />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>{sharePct.toFixed(1)}% do total</span>
                              <span>{totalVotes.toLocaleString()} votos no ranking</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex justify-end items-center gap-2">
                            <Link to={`/empresa/${slug}`}>
                              <Button variant="ghost" size="sm" className="h-9 sm:h-8 px-3 text-xs">
                                <Eye className="w-4 h-4 sm:w-3 sm:h-3 sm:mr-1" />
                                <span className="hidden sm:inline">Ver</span>
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              variant="premium"
                              disabled={isVoting}
                              onClick={() => vote(slug)}
                              className="h-10 sm:h-8 px-5 sm:px-3 text-sm sm:text-xs disabled:opacity-70 text-white font-bold"
                            >
                              {isVoting ? (
                                <Loader2 className="w-4 h-4 sm:w-3 sm:h-3 mr-1.5 sm:mr-1 animate-spin text-white" />
                              ) : voted ? (
                                <Check className="w-4 h-4 sm:w-3 sm:h-3 mr-1.5 sm:mr-1 text-white" />
                              ) : (
                                <Vote className="w-4 h-4 sm:w-3 sm:h-3 mr-1.5 sm:mr-1 text-white" />
                              )}
                              <span className="text-white font-bold">
                                {voted ? "Votado" : votedCompany ? "Trocar voto" : "Votar"}
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <Button variant="goldOutline" size="lg" className="px-8">
                Carregar Mais Empresas
                <TrendingUp className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5 border-gold/20">
              <div className="text-center max-w-2xl mx-auto">
                <Trophy className="w-16 h-16 text-gold mx-auto mb-6" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Sua Empresa Não Está no Ranking?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Se você representa uma empresa de Marketing de Rede legítima e deseja participar do nosso ranking, 
                  entre em contato conosco. Avaliamos cada solicitação com critérios rigorosos de qualidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-gold hover:opacity-90">
                    Solicitar Inclusão
                  </Button>
                  <Button size="lg" variant="outline" className="border-gold/50 hover:bg-gold/10">
                    Conhecer Critérios
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
