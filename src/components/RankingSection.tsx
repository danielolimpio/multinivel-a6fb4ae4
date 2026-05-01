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

// Import company logos
import hinodeLogo from "@/assets/logos/hinode.jpeg";
import herbalifeLogo from "@/assets/logos/herbalife.jpeg";
import vorwerkLogo from "@/assets/logos/vorwerk.jpeg";
import fourLifeLogo from "@/assets/logos/4life.jpeg";
import nuSkinLogo from "@/assets/logos/nuskin.jpeg";
import maryKayLogo from "@/assets/logos/marykay.jpeg";
import amwayLogo from "@/assets/logos/amway.jpeg";
import ozonteckLogo from "@/assets/logos/ozonteck.jpeg";

// Mock data for top companies
const topCompanies = [{
  id: 1,
  name: "Hinode",
  logo: hinodeLogo,
  position: 1,
  votes: 2847,
  maxVotes: 3000,
  recentVoters: [{
    name: "Ana Silva",
    avatar: "/placeholder.svg",
    city: "São Paulo"
  }, {
    name: "João Costa",
    avatar: "/placeholder.svg",
    city: "Rio de Janeiro"
  }, {
    name: "Maria Santos",
    avatar: "/placeholder.svg",
    city: "Belo Horizonte"
  }, {
    name: "Pedro Lima",
    avatar: "/placeholder.svg",
    city: "Brasília"
  }, {
    name: "Carla Oliveira",
    avatar: "/placeholder.svg",
    city: "Salvador"
  }]
}, {
  id: 2,
  name: "Herbalife",
  logo: herbalifeLogo,
  position: 2,
  votes: 2634,
  maxVotes: 3000,
  recentVoters: [{
    name: "Roberto Silva",
    avatar: "/placeholder.svg",
    city: "Curitiba"
  }, {
    name: "Lucia Mendes",
    avatar: "/placeholder.svg",
    city: "Fortaleza"
  }, {
    name: "Carlos Ferreira",
    avatar: "/placeholder.svg",
    city: "Porto Alegre"
  }, {
    name: "Sandra Costa",
    avatar: "/placeholder.svg",
    city: "Recife"
  }, {
    name: "Bruno Santos",
    avatar: "/placeholder.svg",
    city: "Goiânia"
  }]
}, {
  id: 3,
  name: "Vorwerk",
  logo: vorwerkLogo,
  position: 3,
  votes: 2398,
  maxVotes: 3000,
  recentVoters: [{
    name: "Patricia Rocha",
    avatar: "/placeholder.svg",
    city: "Manaus"
  }, {
    name: "Marcos Alves",
    avatar: "/placeholder.svg",
    city: "Belém"
  }, {
    name: "Fernanda Lima",
    avatar: "/placeholder.svg",
    city: "Natal"
  }, {
    name: "Ricardo Barbosa",
    avatar: "/placeholder.svg",
    city: "João Pessoa"
  }, {
    name: "Juliana Campos",
    avatar: "/placeholder.svg",
    city: "Vitória"
  }]
}, {
  id: 4,
  name: "4Life",
  logo: fourLifeLogo,
  position: 4,
  votes: 2156,
  maxVotes: 3000,
  recentVoters: [{
    name: "Gustavo Reis",
    avatar: "/placeholder.svg",
    city: "Florianópolis"
  }, {
    name: "Camila Torres",
    avatar: "/placeholder.svg",
    city: "Maceió"
  }, {
    name: "Diego Moreira",
    avatar: "/placeholder.svg",
    city: "Teresina"
  }, {
    name: "Vanessa Cruz",
    avatar: "/placeholder.svg",
    city: "São Luís"
  }, {
    name: "Felipe Nascimento",
    avatar: "/placeholder.svg",
    city: "Aracaju"
  }]
}, {
  id: 5,
  name: "Nu Skin",
  logo: nuSkinLogo,
  position: 5,
  votes: 1987,
  maxVotes: 3000,
  recentVoters: [{
    name: "Amanda Souza",
    avatar: "/placeholder.svg",
    city: "Campo Grande"
  }, {
    name: "Rodrigo Martins",
    avatar: "/placeholder.svg",
    city: "Cuiabá"
  }, {
    name: "Leticia Pereira",
    avatar: "/placeholder.svg",
    city: "Palmas"
  }, {
    name: "Thiago Cardoso",
    avatar: "/placeholder.svg",
    city: "Boa Vista"
  }, {
    name: "Priscila Gomes",
    avatar: "/placeholder.svg",
    city: "Macapá"
  }]
}, {
  id: 6,
  name: "Mary Kay",
  logo: maryKayLogo,
  position: 6,
  votes: 1823,
  maxVotes: 3000,
  recentVoters: [{
    name: "Beatriz Alves",
    avatar: "/placeholder.svg",
    city: "Campinas"
  }, {
    name: "Rafael Santos",
    avatar: "/placeholder.svg",
    city: "Santos"
  }, {
    name: "Cristina Melo",
    avatar: "/placeholder.svg",
    city: "Sorocaba"
  }]
}, {
  id: 7,
  name: "Amway",
  logo: amwayLogo,
  position: 7,
  votes: 1654,
  maxVotes: 3000,
  recentVoters: [{
    name: "Lucas Pereira",
    avatar: "/placeholder.svg",
    city: "Ribeirão Preto"
  }, {
    name: "Monica Lima",
    avatar: "/placeholder.svg",
    city: "Osasco"
  }, {
    name: "Eduardo Costa",
    avatar: "/placeholder.svg",
    city: "São José"
  }]
}, {
  id: 8,
  name: "Ozonteck",
  logo: ozonteckLogo,
  position: 8,
  votes: 1542,
  maxVotes: 3000,
  recentVoters: [{
    name: "Adriana Silva",
    avatar: "/placeholder.svg",
    city: "Guarulhos"
  }, {
    name: "Marcos Oliveira",
    avatar: "/placeholder.svg",
    city: "Campina Grande"
  }]
}];
export function RankingSection() {
  const [hoveredVoter, setHoveredVoter] = useState<{
    companyId: number;
    voterIndex: number;
  } | null>(null);
  const { counts } = useCompanyVoteCounts();
  const { vote, hasVoted, voting, votedCompany } = useCompanyVote();
  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-amber-600 to-amber-800";
      default:
        return "bg-primary";
    }
  };
  const getPositionIcon = (position: number) => {
    if (position <= 3) {
      return <Trophy className="w-4 h-4 text-white" />;
    }
    return <span className="text-white font-bold text-sm">{position}</span>;
  };
  return <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-2 sm:mb-3 px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
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
          const voted = hasVoted(slug);
          const isVoting = voting === slug;
          return <Card key={company.id} className="p-2.5 sm:p-3 md:p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.01] animate-fade-in" style={{
          animationDelay: `${index * 50}ms`
        }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                {/* Position Badge */}
                <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${getPositionColor(company.position)} shadow-md flex-shrink-0`}>
                  {getPositionIcon(company.position)}
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover bg-muted flex-shrink-0 shadow-md" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{company.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {liveVotes.toLocaleString()} votos
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <Progress value={liveVotes / company.maxVotes * 100} className="h-2 animate-progress-fill" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{(liveVotes / company.maxVotes * 100).toFixed(1)}%</span>
                      <span>Meta: {company.maxVotes.toLocaleString()}</span>
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
                              <AvatarImage src={voter.avatar} alt={voter.name} />
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
                        disabled={isVoting}
                        onClick={() => vote(slug)}
                        className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-gradient-primary disabled:opacity-70"
                      >
                        {isVoting ? (
                          <Loader2 className="w-3 h-3 sm:mr-1 animate-spin" />
                        ) : voted ? (
                          <Check className="w-3 h-3 sm:mr-1" />
                        ) : (
                          <Vote className="w-3 h-3 sm:mr-1" />
                        )}
                        <span className="hidden sm:inline">
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
            <Button size="lg" variant="outline" className="px-6 py-4 border-2 bg-amber-600 hover:bg-amber-500">
              Ver Todas as Empresas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
}