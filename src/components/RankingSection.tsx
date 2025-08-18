import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Vote, Trophy, ArrowRight, Eye } from "lucide-react";
import { useState } from "react";

// Mock data for top companies
const topCompanies = [
  {
    id: 1,
    name: "Hinode",
    logo: "/placeholder.svg",
    position: 1,
    votes: 2847,
    maxVotes: 3000,
    recentVoters: [
      { name: "Ana Silva", avatar: "/placeholder.svg", city: "São Paulo" },
      { name: "João Costa", avatar: "/placeholder.svg", city: "Rio de Janeiro" },
      { name: "Maria Santos", avatar: "/placeholder.svg", city: "Belo Horizonte" },
      { name: "Pedro Lima", avatar: "/placeholder.svg", city: "Brasília" },
      { name: "Carla Oliveira", avatar: "/placeholder.svg", city: "Salvador" },
    ]
  },
  {
    id: 2,
    name: "Herbalife",
    logo: "/placeholder.svg",
    position: 2,
    votes: 2634,
    maxVotes: 3000,
    recentVoters: [
      { name: "Roberto Silva", avatar: "/placeholder.svg", city: "Curitiba" },
      { name: "Lucia Mendes", avatar: "/placeholder.svg", city: "Fortaleza" },
      { name: "Carlos Ferreira", avatar: "/placeholder.svg", city: "Porto Alegre" },
      { name: "Sandra Costa", avatar: "/placeholder.svg", city: "Recife" },
      { name: "Bruno Santos", avatar: "/placeholder.svg", city: "Goiânia" },
    ]
  },
  {
    id: 3,
    name: "Jeunesse",
    logo: "/placeholder.svg",
    position: 3,
    votes: 2398,
    maxVotes: 3000,
    recentVoters: [
      { name: "Patricia Rocha", avatar: "/placeholder.svg", city: "Manaus" },
      { name: "Marcos Alves", avatar: "/placeholder.svg", city: "Belém" },
      { name: "Fernanda Lima", avatar: "/placeholder.svg", city: "Natal" },
      { name: "Ricardo Barbosa", avatar: "/placeholder.svg", city: "João Pessoa" },
      { name: "Juliana Campos", avatar: "/placeholder.svg", city: "Vitória" },
    ]
  },
  {
    id: 4,
    name: "4Life",
    logo: "/placeholder.svg", 
    position: 4,
    votes: 2156,
    maxVotes: 3000,
    recentVoters: [
      { name: "Gustavo Reis", avatar: "/placeholder.svg", city: "Florianópolis" },
      { name: "Camila Torres", avatar: "/placeholder.svg", city: "Maceió" },
      { name: "Diego Moreira", avatar: "/placeholder.svg", city: "Teresina" },
      { name: "Vanessa Cruz", avatar: "/placeholder.svg", city: "São Luís" },
      { name: "Felipe Nascimento", avatar: "/placeholder.svg", city: "Aracaju" },
    ]
  },
  {
    id: 5,
    name: "Nu Skin",
    logo: "/placeholder.svg",
    position: 5,
    votes: 1987,
    maxVotes: 3000,
    recentVoters: [
      { name: "Amanda Souza", avatar: "/placeholder.svg", city: "Campo Grande" },
      { name: "Rodrigo Martins", avatar: "/placeholder.svg", city: "Cuiabá" },
      { name: "Leticia Pereira", avatar: "/placeholder.svg", city: "Palmas" },
      { name: "Thiago Cardoso", avatar: "/placeholder.svg", city: "Boa Vista" },
      { name: "Priscila Gomes", avatar: "/placeholder.svg", city: "Macapá" },
    ]
  },
  {
    id: 6,
    name: "Mary Kay",
    logo: "/placeholder.svg",
    position: 6,
    votes: 1823,
    maxVotes: 3000,
    recentVoters: [
      { name: "Beatriz Alves", avatar: "/placeholder.svg", city: "Campinas" },
      { name: "Rafael Santos", avatar: "/placeholder.svg", city: "Santos" },
      { name: "Cristina Melo", avatar: "/placeholder.svg", city: "Sorocaba" },
    ]
  },
  {
    id: 7,
    name: "Amway",
    logo: "/placeholder.svg",
    position: 7,
    votes: 1654,
    maxVotes: 3000,
    recentVoters: [
      { name: "Lucas Pereira", avatar: "/placeholder.svg", city: "Ribeirão Preto" },
      { name: "Monica Lima", avatar: "/placeholder.svg", city: "Osasco" },
      { name: "Eduardo Costa", avatar: "/placeholder.svg", city: "São José" },
    ]
  },
  {
    id: 8,
    name: "Natura",
    logo: "/placeholder.svg",
    position: 8,
    votes: 1542,
    maxVotes: 3000,
    recentVoters: [
      { name: "Adriana Silva", avatar: "/placeholder.svg", city: "Guarulhos" },
      { name: "Marcos Oliveira", avatar: "/placeholder.svg", city: "Campina Grande" },
    ]
  }
];

export function RankingSection() {
  const [hoveredVoter, setHoveredVoter] = useState<{ companyId: number; voterIndex: number } | null>(null);

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1: return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2: return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3: return "bg-gradient-to-r from-amber-600 to-amber-800";
      default: return "bg-primary";
    }
  };

  const getPositionIcon = (position: number) => {
    if (position <= 3) {
      return <Trophy className="w-4 h-4 text-white" />;
    }
    return <span className="text-white font-bold text-sm">{position}</span>;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3 px-3 py-1 bg-accent/10 text-accent">
            <Trophy className="w-4 h-4 mr-2" />
            Ranking Atual
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Top Empresas de Marketing de Rede
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ranking baseado em votos ativos dos últimos 30 dias
          </p>
        </div>

        {/* Compact Ranking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {topCompanies.map((company, index) => (
            <Card 
              key={company.id} 
              className="p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.01] animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Position Badge */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getPositionColor(company.position)} shadow-md flex-shrink-0`}>
                  {getPositionIcon(company.position)}
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-8 h-8 rounded object-cover bg-muted flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground text-lg">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {company.votes.toLocaleString()} votos
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <Progress 
                      value={(company.votes / company.maxVotes) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{((company.votes / company.maxVotes) * 100).toFixed(1)}%</span>
                      <span>Meta: {company.maxVotes.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Recent Voters */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Últimos votos:</span>
                      <div className="flex -space-x-1">
                        {company.recentVoters.slice(0, 5).map((voter, voterIndex) => (
                          <div
                            key={voterIndex}
                            className="relative"
                            onMouseEnter={() => setHoveredVoter({ companyId: company.id, voterIndex })}
                            onMouseLeave={() => setHoveredVoter(null)}
                          >
                            <Avatar className="w-6 h-6 border-2 border-background shadow-sm cursor-pointer hover:scale-110 transition-transform">
                              <AvatarImage src={voter.avatar} alt={voter.name} />
                              <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                                {voter.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            
                            {/* Tooltip */}
                            {hoveredVoter?.companyId === company.id && hoveredVoter?.voterIndex === voterIndex && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                                <div className="bg-popover text-popover-foreground px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap border">
                                  <p className="font-medium">{voter.name}</p>
                                  <p className="text-muted-foreground">{voter.city}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" className="h-8 px-3 text-xs bg-gradient-primary">
                        <Vote className="w-3 h-3 mr-1" />
                        Votar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-6 py-4 border-2 hover:bg-muted/50"
          >
            Ver Todas as Empresas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}