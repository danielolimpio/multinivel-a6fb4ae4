import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Vote, Trophy, ArrowRight, Eye, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCompanyVote, useCompanyVoteCounts } from "@/hooks/useCompanyVoting";
import { companyNameToSlug } from "@/lib/companySlug";
import { SocialShare } from "@/components/SocialShare";

// Import company logos
import hinodeLogo from "@/assets/logos/hinode.jpeg";
import herbalifeLogo from "@/assets/logos/herbalife.jpeg";
import vorwerkLogo from "@/assets/logos/vorwerk.jpeg";
import fourLifeLogo from "@/assets/logos/4life.jpeg";
import nuSkinLogo from "@/assets/logos/nuskin.jpeg";
import maryKayLogo from "@/assets/logos/marykay.jpeg";
import amwayLogo from "@/assets/logos/amway.jpeg";
import ozonteckLogo from "@/assets/logos/ozonteck.jpeg";

// Helper to build randomuser.me thumbnail URLs (real human portraits, ~3KB each)
// Each voter has a unique portrait — no faces repeat across companies.
const w = (i: number) => `https://randomuser.me/api/portraits/thumb/women/${i}.jpg`;
const m = (i: number) => `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`;

// Mock data for top companies
const topCompanies = [{
  id: 1,
  name: "Hinode",
  logo: hinodeLogo,
  position: 1,
  votes: 2847,
  maxVotes: 3000,
  recentVoters: [
    { name: "Ana Silva", avatar: w(1), city: "São Paulo" },
    { name: "João Costa", avatar: m(1), city: "Rio de Janeiro" },
    { name: "Maria Santos", avatar: w(2), city: "Belo Horizonte" },
    { name: "Pedro Lima", avatar: m(2), city: "Brasília" },
    { name: "Carla Oliveira", avatar: w(3), city: "Salvador" },
  ]
}, {
  id: 2,
  name: "Herbalife",
  logo: herbalifeLogo,
  position: 2,
  votes: 2634,
  maxVotes: 3000,
  recentVoters: [
    { name: "Roberto Silva", avatar: m(3), city: "Curitiba" },
    { name: "Lucia Mendes", avatar: w(4), city: "Fortaleza" },
    { name: "Carlos Ferreira", avatar: m(4), city: "Porto Alegre" },
    { name: "Sandra Costa", avatar: w(5), city: "Recife" },
    { name: "Bruno Santos", avatar: m(5), city: "Goiânia" },
  ]
}, {
  id: 3,
  name: "Vorwerk",
  logo: vorwerkLogo,
  position: 3,
  votes: 2398,
  maxVotes: 3000,
  recentVoters: [
    { name: "Patricia Rocha", avatar: w(6), city: "Manaus" },
    { name: "Marcos Alves", avatar: m(6), city: "Belém" },
    { name: "Fernanda Lima", avatar: w(7), city: "Natal" },
    { name: "Ricardo Barbosa", avatar: m(7), city: "João Pessoa" },
    { name: "Juliana Campos", avatar: w(8), city: "Vitória" },
  ]
}, {
  id: 4,
  name: "4Life",
  logo: fourLifeLogo,
  position: 4,
  votes: 2156,
  maxVotes: 3000,
  recentVoters: [
    { name: "Gustavo Reis", avatar: m(8), city: "Florianópolis" },
    { name: "Camila Torres", avatar: w(9), city: "Maceió" },
    { name: "Diego Moreira", avatar: m(9), city: "Teresina" },
    { name: "Vanessa Cruz", avatar: w(10), city: "São Luís" },
    { name: "Felipe Nascimento", avatar: m(10), city: "Aracaju" },
  ]
}, {
  id: 5,
  name: "Nu Skin",
  logo: nuSkinLogo,
  position: 5,
  votes: 1987,
  maxVotes: 3000,
  recentVoters: [
    { name: "Amanda Souza", avatar: w(11), city: "Campo Grande" },
    { name: "Rodrigo Martins", avatar: m(11), city: "Cuiabá" },
    { name: "Leticia Pereira", avatar: w(12), city: "Palmas" },
    { name: "Thiago Cardoso", avatar: m(12), city: "Boa Vista" },
    { name: "Priscila Gomes", avatar: w(13), city: "Macapá" },
  ]
}, {
  id: 6,
  name: "Mary Kay",
  logo: maryKayLogo,
  position: 6,
  votes: 1823,
  maxVotes: 3000,
  recentVoters: [
    { name: "Beatriz Alves", avatar: w(14), city: "Campinas" },
    { name: "Rafael Santos", avatar: m(13), city: "Santos" },
    { name: "Cristina Melo", avatar: w(15), city: "Sorocaba" },
  ]
}, {
  id: 7,
  name: "Amway",
  logo: amwayLogo,
  position: 7,
  votes: 1654,
  maxVotes: 3000,
  recentVoters: [
    { name: "Lucas Pereira", avatar: m(14), city: "Ribeirão Preto" },
    { name: "Monica Lima", avatar: w(16), city: "Osasco" },
    { name: "Eduardo Costa", avatar: m(15), city: "São José" },
  ]
}, {
  id: 8,
  name: "Ozonteck",
  logo: ozonteckLogo,
  position: 8,
  votes: 1542,
  maxVotes: 3000,
  recentVoters: [
    { name: "Adriana Silva", avatar: w(17), city: "Guarulhos" },
    { name: "Marcos Oliveira", avatar: m(16), city: "Campina Grande" },
  ]
}];
export function RankingSection() {
  const [hoveredVoter, setHoveredVoter] = useState<{
    companyId: number;
    voterIndex: number;
  } | null>(null);
  const { counts } = useCompanyVoteCounts();
  const { vote, hasVoted, voting, votedCompany } = useCompanyVote();
  const getOrdinal = (position: number) => {
    return `${position}º`;
  };
  return <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-2 sm:mb-3 px-2 sm:px-3 py-1 bg-[hsl(var(--gold-light-bg))] text-primary border border-[hsl(40_85%_52%)]/40 text-xs sm:text-sm font-semibold">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary" />
            Ranking Atual
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
            Top Empresas de Marketing de Rede
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            Ranking baseado em votos ativos dos últimos 30 dias
          </p>
        </div>

        {/* Compact Ranking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {topCompanies.map((company, index) => {
          const slug = companyNameToSlug(company.name);
          const liveVotes = company.votes + (counts[slug] ?? 0);
          const totalVotes = topCompanies.reduce(
            (sum, c) => sum + c.votes + (counts[companyNameToSlug(c.name)] ?? 0),
            0,
          );
          const sharePct = totalVotes > 0 ? (liveVotes / totalVotes) * 100 : 0;
          const voted = hasVoted(slug);
          const isVoting = voting === slug;
          return <Card key={company.id} className="p-2.5 sm:p-3 md:p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{
          animationDelay: `${index * 50}ms`
        }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                {/* Position Badge */}
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-transparent shadow-md flex-shrink-0" style={{ backgroundImage: 'linear-gradient(white, white), var(--gradient-gold)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                  <span className="text-primary font-bold text-sm sm:text-base">{getOrdinal(company.position)}</span>
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover bg-muted flex-shrink-0 shadow-md" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{company.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {liveVotes.toLocaleString()} votos
                      </p>
                    </div>
                    {/* Premium social share — small icons aligned right of the logo */}
                    <SocialShare
                      url={`/empresa/${slug}`}
                      title={`${company.name} — Ranking de Marketing de Rede`}
                      description={`Confira ${company.name} no ranking das melhores empresas de marketing multinível.`}
                      image={company.logo}
                      size="sm"
                      centered
                      className="sm:ml-auto"
                    />
                  </div>

                  {/* Progress Bar — share of total votes */}
                  <div className="mb-3">
                    <Progress value={sharePct} className="h-2 animate-progress-fill" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{sharePct.toFixed(1)}% do total</span>
                      <span>{totalVotes.toLocaleString()} votos no ranking</span>
                    </div>
                  </div>

                  {/* Recent Voters and Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground hidden sm:inline">Últimos votos:</span>
                      <div className="flex -space-x-1">
                        {company.recentVoters.slice(0, 3).map((voter, voterIndex) => <div key={voterIndex} className="relative" onMouseEnter={() => setHoveredVoter({
                      companyId: company.id,
                      voterIndex
                    })} onMouseLeave={() => setHoveredVoter(null)}>
                            <Avatar className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-background shadow-sm cursor-pointer hover:scale-110 transition-transform">
                              <AvatarImage src={voter.avatar} alt={voter.name} loading="lazy" decoding="async" />
                              <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                                {voter.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            {/* Tooltip */}
                            {hoveredVoter?.companyId === company.id && hoveredVoter?.voterIndex === voterIndex && <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                                <div className="bg-popover text-popover-foreground px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap border">
                                  <p className="font-medium">{voter.name}</p>
                                  <p className="text-muted-foreground">{voter.city}</p>
                                </div>
                              </div>}
                          </div>)}
                      </div>
                    </div>
                    
                    <div className="flex gap-1 sm:gap-2 justify-end">
                      <Link to={`/empresa/${slug}`}>
                        <Button variant="ghost" size="sm" className="h-7 sm:h-8 px-2 text-xs">
                          <Eye className="w-3 h-3 sm:mr-1" />
                          <span className="hidden sm:inline">Ver</span>
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="premium"
                        disabled={isVoting}
                        onClick={() => vote(slug)}
                        className="h-7 sm:h-8 px-2 sm:px-3 text-xs disabled:opacity-70 text-white font-bold"
                      >
                        {isVoting ? (
                          <Loader2 className="w-3 h-3 sm:mr-1 animate-spin text-white" />
                        ) : voted ? (
                          <Check className="w-3 h-3 sm:mr-1 text-white" />
                        ) : (
                          <Vote className="w-3 h-3 sm:mr-1 text-white" />
                        )}
                        <span className="hidden sm:inline text-white font-bold">
                          {voted ? "Votado" : votedCompany ? "Trocar voto" : "Votar"}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>;
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/empresas">
            <Button size="lg" variant="premium" className="px-6 py-4 text-white font-bold">
              Ver Todas as Empresas
              <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
}