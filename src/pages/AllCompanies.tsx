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
import { SocialShare } from "@/components/SocialShare";

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

const w = (i: number) => `https://randomuser.me/api/portraits/thumb/women/${i}.jpg`;
const m = (i: number) => `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`;

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
      { name: "Ana Silva", avatar: w(1), city: "São Paulo" },
      { name: "João Costa", avatar: m(1), city: "Rio de Janeiro" },
      { name: "Maria Santos", avatar: w(2), city: "Belo Horizonte" },
      { name: "Pedro Lima", avatar: m(2), city: "Brasília" },
      { name: "Carla Oliveira", avatar: w(3), city: "Salvador" },
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
      { name: "Roberto Silva", avatar: m(3), city: "Curitiba" },
      { name: "Lucia Mendes", avatar: w(4), city: "Fortaleza" },
      { name: "Carlos Ferreira", avatar: m(4), city: "Porto Alegre" },
      { name: "Sandra Costa", avatar: w(5), city: "Recife" },
      { name: "Bruno Santos", avatar: m(5), city: "Goiânia" },
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
      { name: "Patricia Rocha", avatar: w(6), city: "Manaus" },
      { name: "Marcos Alves", avatar: m(6), city: "Belém" },
      { name: "Fernanda Lima", avatar: w(7), city: "Natal" },
      { name: "Ricardo Barbosa", avatar: m(7), city: "João Pessoa" },
      { name: "Juliana Campos", avatar: w(8), city: "Vitória" },
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
      { name: "Gustavo Reis", avatar: m(8), city: "Florianópolis" },
      { name: "Camila Torres", avatar: w(9), city: "Maceió" },
      { name: "Diego Moreira", avatar: m(9), city: "Teresina" },
      { name: "Vanessa Cruz", avatar: w(10), city: "São Luís" },
      { name: "Felipe Nascimento", avatar: m(10), city: "Aracaju" },
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
      { name: "Amanda Souza", avatar: w(11), city: "Campo Grande" },
      { name: "Rodrigo Martins", avatar: m(11), city: "Cuiabá" },
      { name: "Leticia Pereira", avatar: w(12), city: "Palmas" },
      { name: "Thiago Cardoso", avatar: m(12), city: "Boa Vista" },
      { name: "Priscila Gomes", avatar: w(13), city: "Macapá" },
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
      { name: "Beatriz Alves", avatar: m(13), city: "Campinas" },
      { name: "Rafael Santos", avatar: w(14), city: "Santos" },
      { name: "Cristina Melo", avatar: m(14), city: "Sorocaba" },
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
      { name: "Lucas Pereira", avatar: w(15), city: "Ribeirão Preto" },
      { name: "Monica Lima", avatar: m(15), city: "Osasco" },
      { name: "Eduardo Costa", avatar: w(16), city: "São José" },
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
      { name: "Adriana Silva", avatar: m(16), city: "Guarulhos" },
      { name: "Marcos Oliveira", avatar: w(17), city: "Campina Grande" },
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
      { name: "Isabella Costa", avatar: m(17), city: "Joinville" },
      { name: "Gabriel Rocha", avatar: w(18), city: "Londrina" },
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
      { name: "Sophia Martins", avatar: m(18), city: "Maringá" },
      { name: "Henrique Silva", avatar: w(19), city: "Caxias do Sul" },
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
      { name: "Larissa Oliveira", avatar: m(19), city: "Uberlândia" },
      { name: "Rafael Pereira", avatar: w(20), city: "Juiz de Fora" },
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
      { name: "Yasmin Santos", avatar: m(20), city: "Niterói" },
      { name: "Leonardo Costa", avatar: w(21), city: "Petrópolis" },
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
      { name: "Carolina Lima", avatar: m(21), city: "Blumenau" },
      { name: "Fábio Santos", avatar: w(22), city: "Itajaí" },
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
      { name: "Renata Alves", avatar: m(22), city: "São Carlos" },
      { name: "Vinicius Rocha", avatar: w(23), city: "Araraquara" },
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
      { name: "Mariana Costa", avatar: m(23), city: "Franca" },
      { name: "Diego Martins", avatar: w(24), city: "Bauru" },
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
      { name: "Aline Ferreira", avatar: m(24), city: "Piracicaba" },
      { name: "Bruno Lima", avatar: w(25), city: "Limeira" },
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
      { name: "Fernanda Souza", avatar: m(25), city: "Taubaté" },
      { name: "Gustavo Almeida", avatar: w(26), city: "Jacareí" },
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
      { name: "Paula Rocha", avatar: m(26), city: "Mogi das Cruzes" },
      { name: "Ricardo Mendes", avatar: w(27), city: "Suzano" },
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
      { name: "Carla Santos", avatar: m(27), city: "Santo André" },
      { name: "Marcelo Costa", avatar: w(28), city: "São Bernardo" },
    ]
  },
];

export default function AllCompanies() {
  const [hoveredVoter, setHoveredVoter] = useState<{ companyId: number; voterIndex: number } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { counts } = useCompanyVoteCounts();
  const { vote, hasVoted, voting, votedCompany } = useCompanyVote();

  const categories = ["all", "Saúde & Nutrição", "Beleza & Estética", "Casa & Utilidades", "Moda & Acessórios", "Serviços & Digital"];

  const mapCategory = (cat: string): string => {
    const map: Record<string, string> = {
      "Nutrição": "Saúde & Nutrição",
      "Suplementos": "Saúde & Nutrição",
      "Aloe Vera": "Saúde & Nutrição",
      "Bem-estar": "Saúde & Nutrição",
      "Medicina Tradicional": "Saúde & Nutrição",
      "Cosméticos": "Beleza & Estética",
      "Cuidados Pessoais": "Beleza & Estética",
      "Eletrodomésticos": "Casa & Utilidades",
      "Utilidades Domésticas": "Casa & Utilidades",
      "Utensílios de Cozinha": "Casa & Utilidades",
      "Purificadores": "Casa & Utilidades",
      "Tecnologia": "Serviços & Digital",
      "Serviços Financeiros": "Serviços & Digital",
      "Serviços Essenciais": "Serviços & Digital",
      "Múltiplas Categorias": "Serviços & Digital",
    };
    return map[cat] || cat;
  };

  const filteredCompanies = allCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || mapCategory(company.category) === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const getOrdinal = (position: number) => `${position}º`;


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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {(() => {
              const totalVotes = filteredCompanies.reduce(
                (acc, c) => acc + c.votes + (counts[c.slug] ?? 0),
                0
              );
              return filteredCompanies.map((company, index) => {
              const liveVotes = company.votes + (counts[company.slug] ?? 0);
              const sharePct = totalVotes > 0 ? (liveVotes / totalVotes) * 100 : 0;
              const voted = hasVoted(company.slug);
              const isVoting = voting === company.slug;
              return (
              <Card
                key={company.id}
                className="p-3 sm:p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Top row: large logo + name + share */}
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-3 mb-3">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover bg-muted flex-shrink-0 shadow-md"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-foreground text-xl sm:text-lg">{company.name}</h3>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {company.category}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      {liveVotes.toLocaleString()} votos
                    </p>
                  </div>
                  <SocialShare
                    url={`/empresa/${company.slug}`}
                    title={`${company.name} — Ranking de Marketing de Rede`}
                    description={`Confira ${company.name} no ranking das melhores empresas de marketing multinível.`}
                    image={company.logo}
                    size="sm"
                    centered
                    className="sm:ml-auto"
                  />
                </div>

                {/* Ranking badge + progress bar (badge centered vertically with bar) */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(40_85%_50%)] shadow-md bg-gradient-blue flex-shrink-0">
                    <span className="text-white font-bold text-sm">{getOrdinal(company.position)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Progress value={sharePct} className="h-2 animate-progress-fill" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{sharePct.toFixed(1)}% do total</span>
                      <span>{totalVotes.toLocaleString()} votos</span>
                    </div>
                  </div>
                </div>

                {/* Recent voters */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-muted-foreground hidden sm:inline">Últimos votos:</span>
                  <div className="flex -space-x-1">
                    {company.recentVoters.slice(0, 5).map((voter, voterIndex) => (
                      <div
                        key={voterIndex}
                        className="relative"
                        onMouseEnter={() => setHoveredVoter({ companyId: company.id, voterIndex })}
                        onMouseLeave={() => setHoveredVoter(null)}
                      >
                        <Avatar className="w-6 h-6 border-2 border-background shadow-sm cursor-pointer hover:scale-110 transition-transform">
                          <AvatarImage src={voter.avatar} alt={voter.name} loading="lazy" decoding="async" />
                          <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                            {voter.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
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

                {/* Actions */}
                <div className="flex gap-2">
                  <Link to={`/empresa/${company.slug}`}>
                    <Button variant="ghost" size="sm" className="h-9 px-3 text-xs">
                      <Eye className="w-4 h-4 sm:mr-1" />
                      <span className="hidden sm:inline">Ver</span>
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    variant="premium"
                    disabled={isVoting}
                    onClick={() => vote(company.slug)}
                    className="flex-1 h-9 px-3 text-xs disabled:opacity-70 text-white font-bold"
                  >
                    {isVoting ? (
                      <Loader2 className="w-4 h-4 mr-1.5 animate-spin text-white" />
                    ) : voted ? (
                      <Check className="w-4 h-4 mr-1.5 text-white" />
                    ) : (
                      <Vote className="w-4 h-4 mr-1.5 text-white" />
                    )}
                    <span className="text-white font-bold">
                      {voted ? "Votado" : votedCompany ? "Trocar voto" : "Votar"}
                    </span>
                  </Button>
                </div>
              </Card>


              );
            });
            })()}
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