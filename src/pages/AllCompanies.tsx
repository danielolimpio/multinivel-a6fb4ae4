import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Vote, Trophy, Eye, ArrowLeft, Search, Filter, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useCompanyVote, useCompanyVoteCounts } from "@/hooks/useCompanyVoting";
import { companyNameToSlug } from "@/lib/companySlug";

// Import all company logos
import hinode from "@/assets/logos/hinode.jpeg";
import herbalife from "@/assets/logos/herbalife.jpeg";
import vorwerk from "@/assets/logos/vorwerk.jpeg";
import fourlife from "@/assets/logos/4life.jpeg";
import nuskin from "@/assets/logos/nuskin.jpeg";
import marykay from "@/assets/logos/marykay.jpeg";
import amway from "@/assets/logos/amway.jpeg";
import ozonteck from "@/assets/logos/ozonteck.jpeg";
import forever from "@/assets/logos/forever.jpeg";
import coway from "@/assets/logos/coway.jpeg";
import infinitus from "@/assets/logos/infinitus.jpeg";
import janrose from "@/assets/logos/janrose.jpeg";
import melaleuca from "@/assets/logos/melaleuca.jpeg";
import omnilife from "@/assets/logos/omnilife.jpeg";
import oriflame from "@/assets/logos/oriflame.jpeg";
import primerica from "@/assets/logos/primerica.jpeg";
import royalprestige from "@/assets/logos/royalprestige.jpeg";
import tupperware from "@/assets/logos/tupperware.jpeg";
import utilitywarehouse from "@/assets/logos/utilitywarehouse.jpeg";

// All 20 companies data
const allCompanies = [
  {
    id: 1,
    name: "Hinode",
    logo: hinode,
    position: 1,
    votes: 2847,
    maxVotes: 3000,
    category: "Cosméticos",
    slug: "hinode",
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
    logo: herbalife,
    position: 2,
    votes: 2634,
    maxVotes: 3000,
    category: "Nutrição",
    slug: "herbalife",
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
    name: "Vorwerk",
    logo: vorwerk,
    position: 3,
    votes: 2398,
    maxVotes: 3000,
    category: "Eletrodomésticos",
    slug: "vorwerk",
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
    logo: fourlife,
    position: 4,
    votes: 2156,
    maxVotes: 3000,
    category: "Suplementos",
    slug: "4life",
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
    logo: nuskin,
    position: 5,
    votes: 1987,
    maxVotes: 3000,
    category: "Cuidados Pessoais",
    slug: "nu-skin",
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
    logo: marykay,
    position: 6,
    votes: 1823,
    maxVotes: 3000,
    category: "Cosméticos",
    slug: "mary-kay",
    recentVoters: [
      { name: "Beatriz Alves", avatar: "/placeholder.svg", city: "Campinas" },
      { name: "Rafael Santos", avatar: "/placeholder.svg", city: "Santos" },
      { name: "Cristina Melo", avatar: "/placeholder.svg", city: "Sorocaba" },
    ]
  },
  {
    id: 7,
    name: "Amway",
    logo: amway,
    position: 7,
    votes: 1654,
    maxVotes: 3000,
    category: "Múltiplas Categorias",
    slug: "amway",
    recentVoters: [
      { name: "Lucas Pereira", avatar: "/placeholder.svg", city: "Ribeirão Preto" },
      { name: "Monica Lima", avatar: "/placeholder.svg", city: "Osasco" },
      { name: "Eduardo Costa", avatar: "/placeholder.svg", city: "São José" },
    ]
  },
  {
    id: 8,
    name: "Ozonteck",
    logo: ozonteck,
    position: 8,
    votes: 1542,
    maxVotes: 3000,
    category: "Tecnologia",
    slug: "ozonteck",
    recentVoters: [
      { name: "Adriana Silva", avatar: "/placeholder.svg", city: "Guarulhos" },
      { name: "Marcos Oliveira", avatar: "/placeholder.svg", city: "Campina Grande" },
    ]
  },
  {
    id: 9,
    name: "Forever Living",
    logo: forever,
    position: 9,
    votes: 1423,
    maxVotes: 3000,
    category: "Aloe Vera",
    slug: "forever-living",
    recentVoters: [
      { name: "Isabella Costa", avatar: "/placeholder.svg", city: "Joinville" },
      { name: "Gabriel Rocha", avatar: "/placeholder.svg", city: "Londrina" },
    ]
  },
  {
    id: 10,
    name: "Coway",
    logo: coway,
    position: 10,
    votes: 1387,
    maxVotes: 3000,
    category: "Purificadores",
    slug: "coway",
    recentVoters: [
      { name: "Sophia Martins", avatar: "/placeholder.svg", city: "Maringá" },
      { name: "Henrique Silva", avatar: "/placeholder.svg", city: "Caxias do Sul" },
    ]
  },
  {
    id: 11,
    name: "Infinitus",
    logo: infinitus,
    position: 11,
    votes: 1298,
    maxVotes: 3000,
    category: "Medicina Tradicional",
    slug: "infinitus",
    recentVoters: [
      { name: "Larissa Oliveira", avatar: "/placeholder.svg", city: "Uberlândia" },
      { name: "Rafael Pereira", avatar: "/placeholder.svg", city: "Juiz de Fora" },
    ]
  },
  {
    id: 12,
    name: "Jan Rosê",
    logo: janrose,
    position: 12,
    votes: 1245,
    maxVotes: 3000,
    category: "Cosméticos",
    slug: "jan-rose",
    recentVoters: [
      { name: "Yasmin Santos", avatar: "/placeholder.svg", city: "Niterói" },
      { name: "Leonardo Costa", avatar: "/placeholder.svg", city: "Petrópolis" },
    ]
  },
  {
    id: 13,
    name: "Melaleuca",
    logo: melaleuca,
    position: 13,
    votes: 1189,
    maxVotes: 3000,
    category: "Bem-estar",
    slug: "melaleuca",
    recentVoters: [
      { name: "Carolina Lima", avatar: "/placeholder.svg", city: "Blumenau" },
      { name: "Fábio Santos", avatar: "/placeholder.svg", city: "Itajaí" },
    ]
  },
  {
    id: 14,
    name: "Omnilife",
    logo: omnilife,
    position: 14,
    votes: 1134,
    maxVotes: 3000,
    category: "Nutrição",
    slug: "omnilife",
    recentVoters: [
      { name: "Renata Alves", avatar: "/placeholder.svg", city: "São Carlos" },
      { name: "Vinicius Rocha", avatar: "/placeholder.svg", city: "Araraquara" },
    ]
  },
  {
    id: 15,
    name: "Oriflame",
    logo: oriflame,
    position: 15,
    votes: 1078,
    maxVotes: 3000,
    category: "Cosméticos",
    slug: "oriflame",
    recentVoters: [
      { name: "Mariana Costa", avatar: "/placeholder.svg", city: "Franca" },
      { name: "Diego Martins", avatar: "/placeholder.svg", city: "Bauru" },
    ]
  },
  {
    id: 16,
    name: "Primerica",
    logo: primerica,
    position: 16,
    votes: 1023,
    maxVotes: 3000,
    category: "Serviços Financeiros",
    slug: "primerica",
    recentVoters: [
      { name: "Aline Ferreira", avatar: "/placeholder.svg", city: "Piracicaba" },
      { name: "Bruno Lima", avatar: "/placeholder.svg", city: "Limeira" },
    ]
  },
  {
    id: 17,
    name: "Royal Prestige",
    logo: royalprestige,
    position: 17,
    votes: 967,
    maxVotes: 3000,
    category: "Utensílios de Cozinha",
    slug: "royal-prestige",
    recentVoters: [
      { name: "Fernanda Souza", avatar: "/placeholder.svg", city: "Taubaté" },
      { name: "Gustavo Almeida", avatar: "/placeholder.svg", city: "Jacareí" },
    ]
  },
  {
    id: 18,
    name: "Tupperware",
    logo: tupperware,
    position: 18,
    votes: 912,
    maxVotes: 3000,
    category: "Utilidades Domésticas",
    slug: "tupperware",
    recentVoters: [
      { name: "Paula Rocha", avatar: "/placeholder.svg", city: "Mogi das Cruzes" },
      { name: "Ricardo Mendes", avatar: "/placeholder.svg", city: "Suzano" },
    ]
  },
  {
    id: 19,
    name: "Utility Warehouse",
    logo: utilitywarehouse,
    position: 19,
    votes: 856,
    maxVotes: 3000,
    category: "Serviços Essenciais",
    slug: "utility-warehouse",
    recentVoters: [
      { name: "Carla Santos", avatar: "/placeholder.svg", city: "Santo André" },
      { name: "Marcelo Costa", avatar: "/placeholder.svg", city: "São Bernardo" },
    ]
  },
];

export default function AllCompanies() {
  const [hoveredVoter, setHoveredVoter] = useState<{ companyId: number; voterIndex: number } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { counts } = useCompanyVoteCounts();
  const { vote, hasVoted, voting, votedCompany } = useCompanyVote();

  const categories = ["all", "Cosméticos", "Nutrição", "Suplementos", "Cuidados Pessoais", "Múltiplas Categorias", "Aloe Vera", "Utilidades Domésticas", "Eletrodomésticos", "Tecnologia", "Purificadores", "Medicina Tradicional", "Bem-estar", "Serviços Financeiros", "Utensílios de Cozinha", "Serviços Essenciais"];

  const filteredCompanies = allCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || company.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen bg-background">
      <SEO 
        title="Todas as Empresas de Marketing de Rede - Ranking Completo"
        description="Lista completa de todas as empresas de Marketing Multinível do Brasil e do mundo. Compare, vote e escolha a melhor para você."
        canonical="/empresas"
      />
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
            
            <Badge variant="secondary" className="mb-3 px-3 py-1 bg-accent/10 text-accent">
              <Trophy className="w-4 h-4 mr-2" />
              Ranking Completo
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Todas as Empresas de Marketing de Rede
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vote nas suas empresas favoritas e acompanhe o ranking em tempo real
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar empresas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {category === "all" ? "Todas" : category}
                </Button>
              ))}
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => {
              const liveVotes = company.votes + (counts[company.slug] ?? 0);
              const voted = hasVoted(company.slug);
              const isVoting = voting === company.slug;
              return (
              <Card 
                key={company.id} 
                className="p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getPositionColor(company.position)} shadow-md flex-shrink-0`}>
                      {getPositionIcon(company.position)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`}
                          className="w-10 h-10 rounded object-cover bg-muted flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-foreground text-lg">{company.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {company.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {liveVotes.toLocaleString()} votos
                      </span>
                      <span className="text-xs text-muted-foreground">
                        #{company.position}º lugar
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <Progress 
                      value={(liveVotes / company.maxVotes) * 100} 
                      className="h-3 animate-progress-fill"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{((liveVotes / company.maxVotes) * 100).toFixed(1)}%</span>
                      <span>Meta: {company.maxVotes.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Recent Voters */}
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground">Últimos votos:</span>
                    <div className="flex -space-x-1">
                      {company.recentVoters.slice(0, 5).map((voter, voterIndex) => (
                        <div
                          key={voterIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredVoter({ companyId: company.id, voterIndex })}
                          onMouseLeave={() => setHoveredVoter(null)}
                        >
                          <Avatar className="w-8 h-8 border-2 border-background shadow-sm cursor-pointer hover:scale-110 transition-transform">
                            <AvatarImage src={voter.avatar} alt={voter.name} />
                            <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                              {voter.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          {/* Tooltip */}
                          {hoveredVoter?.companyId === company.id && hoveredVoter?.voterIndex === voterIndex && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                              <div className="bg-popover text-popover-foreground px-3 py-2 rounded shadow-lg text-xs whitespace-nowrap border">
                                <p className="font-medium">{voter.name}</p>
                                <p className="text-muted-foreground">{voter.city}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Link to={`/empresa/${company.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      disabled={isVoting}
                      onClick={() => vote(company.slug)}
                      className="flex-1 bg-gradient-primary disabled:opacity-70"
                    >
                      {isVoting ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : voted ? (
                        <Check className="w-4 h-4 mr-2" />
                      ) : (
                        <Vote className="w-4 h-4 mr-2" />
                      )}
                      {voted ? "Voto Registrado" : votedCompany ? "Trocar Voto" : "Votar Agora"}
                    </Button>
                  </div>
                </div>
              </Card>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhuma empresa encontrada.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}