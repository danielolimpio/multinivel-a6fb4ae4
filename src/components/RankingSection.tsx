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
      return <Trophy className="w-5 h-5 text-white" />;
    }
    return <span className="text-white font-bold">{position}</span>;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-accent/10 text-accent">
            <Trophy className="w-4 h-4 mr-2" />
            Ranking Atual
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Top 10 Empresas de Marketing de Rede
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ranking baseado em votos ativos dos últimos 30 dias. Cada voto custa R$20 e permanece ativo por 30 dias.
          </p>
        </div>

        {/* Ranking Cards */}
        <div className="space-y-6 mb-12">
          {topCompanies.map((company, index) => (
            <Card 
              key={company.id} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Position Badge */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-full ${getPositionColor(company.position)} shadow-lg flex-shrink-0`}>
                  {getPositionIcon(company.position)}
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-12 h-12 rounded-lg object-cover bg-muted"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{company.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {company.votes.toLocaleString()} votos ativos
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 sm:ml-auto">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Perfil
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        <Vote className="w-4 h-4 mr-2" />
                        Votar
                      </Button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progresso de votos</span>
                      <span>{((company.votes / company.maxVotes) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress 
                      value={(company.votes / company.maxVotes) * 100} 
                      className="h-2"
                    />
                  </div>

                  {/* Recent Voters */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Últimos votantes:</p>
                    <div className="flex flex-wrap gap-2">
                      {company.recentVoters.slice(0, 10).map((voter, voterIndex) => (
                        <div
                          key={voterIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredVoter({ companyId: company.id, voterIndex })}
                          onMouseLeave={() => setHoveredVoter(null)}
                        >
                          <Avatar className="w-10 h-10 border-2 border-background shadow-sm cursor-pointer hover:scale-110 transition-transform">
                            <AvatarImage src={voter.avatar} alt={voter.name} />
                            <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                              {voter.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          {/* Tooltip */}
                          {hoveredVoter?.companyId === company.id && hoveredVoter?.voterIndex === voterIndex && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                              <div className="bg-popover text-popover-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border">
                                <p className="font-medium">{voter.name}</p>
                                <p className="text-muted-foreground">{voter.city}</p>
                                <p className="text-xs text-muted-foreground">Votou hoje</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
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
            className="px-8 py-6 text-lg border-2 hover:bg-muted/50"
          >
            Ver Todas as Empresas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}