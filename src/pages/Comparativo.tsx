import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, X, Plus, Trophy, Users, TrendingUp, Building2, Star, CheckCircle, XCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

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

interface Company {
  id: number;
  name: string;
  logo: string;
  position: number;
  votes: number;
  category: string;
  slug: string;
  yearFounded: number;
  headquarters: string;
  countries: number;
  distributors: string;
  revenue: string;
  commission: string;
  trainingProgram: boolean;
  mobileApp: boolean;
  internationalExpansion: boolean;
  description: string;
}

const allCompanies: Company[] = [
  {
    id: 1,
    name: "Hinode",
    logo: hinode,
    position: 1,
    votes: 2847,
    category: "Cosméticos",
    slug: "hinode",
    yearFounded: 1988,
    headquarters: "Brasil",
    countries: 12,
    distributors: "500.000+",
    revenue: "R$ 2.8 bilhões",
    commission: "Até 45%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Líder em cosméticos e perfumaria no Brasil"
  },
  {
    id: 2,
    name: "Herbalife",
    logo: herbalife,
    position: 2,
    votes: 2634,
    category: "Nutrição",
    slug: "herbalife",
    yearFounded: 1980,
    headquarters: "EUA",
    countries: 95,
    distributors: "4.5 milhões",
    revenue: "US$ 5.5 bilhões",
    commission: "Até 50%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Líder global em nutrição e bem-estar"
  },
  {
    id: 3,
    name: "Vorwerk",
    logo: vorwerk,
    position: 3,
    votes: 2398,
    category: "Eletrodomésticos",
    slug: "vorwerk",
    yearFounded: 1883,
    headquarters: "Alemanha",
    countries: 70,
    distributors: "600.000+",
    revenue: "€ 3.2 bilhões",
    commission: "Até 40%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Pioneira em eletrodomésticos premium"
  },
  {
    id: 4,
    name: "4Life",
    logo: fourlife,
    position: 4,
    votes: 2156,
    category: "Suplementos",
    slug: "4life",
    yearFounded: 1998,
    headquarters: "EUA",
    countries: 50,
    distributors: "200.000+",
    revenue: "US$ 300 milhões",
    commission: "Até 35%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Especialista em suplementos imunológicos"
  },
  {
    id: 5,
    name: "Nu Skin",
    logo: nuskin,
    position: 5,
    votes: 1987,
    category: "Cuidados Pessoais",
    slug: "nu-skin",
    yearFounded: 1984,
    headquarters: "EUA",
    countries: 54,
    distributors: "1.2 milhões",
    revenue: "US$ 2.5 bilhões",
    commission: "Até 43%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Inovação em anti-envelhecimento"
  },
  {
    id: 6,
    name: "Mary Kay",
    logo: marykay,
    position: 6,
    votes: 1823,
    category: "Cosméticos",
    slug: "mary-kay",
    yearFounded: 1963,
    headquarters: "EUA",
    countries: 40,
    distributors: "3.5 milhões",
    revenue: "US$ 3 bilhões",
    commission: "Até 50%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Ícone em cosméticos e empoderamento feminino"
  },
  {
    id: 7,
    name: "Amway",
    logo: amway,
    position: 7,
    votes: 1654,
    category: "Múltiplas Categorias",
    slug: "amway",
    yearFounded: 1959,
    headquarters: "EUA",
    countries: 100,
    distributors: "3 milhões",
    revenue: "US$ 8.4 bilhões",
    commission: "Até 48%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Maior empresa de marketing multinível do mundo"
  },
  {
    id: 8,
    name: "Ozonteck",
    logo: ozonteck,
    position: 8,
    votes: 1542,
    category: "Tecnologia",
    slug: "ozonteck",
    yearFounded: 2015,
    headquarters: "Brasil",
    countries: 5,
    distributors: "50.000+",
    revenue: "R$ 150 milhões",
    commission: "Até 40%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: false,
    description: "Tecnologia brasileira em purificação"
  },
  {
    id: 9,
    name: "Forever Living",
    logo: forever,
    position: 9,
    votes: 1423,
    category: "Aloe Vera",
    slug: "forever-living",
    yearFounded: 1978,
    headquarters: "EUA",
    countries: 160,
    distributors: "9.5 milhões",
    revenue: "US$ 2.6 bilhões",
    commission: "Até 48%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Maior produtora de Aloe Vera do mundo"
  },
  {
    id: 10,
    name: "Coway",
    logo: coway,
    position: 10,
    votes: 1387,
    category: "Purificadores",
    slug: "coway",
    yearFounded: 1989,
    headquarters: "Coreia do Sul",
    countries: 45,
    distributors: "200.000+",
    revenue: "US$ 2.2 bilhões",
    commission: "Até 35%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Líder em purificação de água e ar"
  },
  {
    id: 11,
    name: "Infinitus",
    logo: infinitus,
    position: 11,
    votes: 1298,
    category: "Medicina Tradicional",
    slug: "infinitus",
    yearFounded: 1992,
    headquarters: "China",
    countries: 30,
    distributors: "4 milhões",
    revenue: "US$ 4.5 bilhões",
    commission: "Até 42%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Medicina tradicional chinesa moderna"
  },
  {
    id: 12,
    name: "Jan Rosê",
    logo: janrose,
    position: 12,
    votes: 1245,
    category: "Cosméticos",
    slug: "jan-rose",
    yearFounded: 2010,
    headquarters: "Brasil",
    countries: 3,
    distributors: "80.000+",
    revenue: "R$ 200 milhões",
    commission: "Até 38%",
    trainingProgram: true,
    mobileApp: false,
    internationalExpansion: false,
    description: "Cosméticos brasileiros de qualidade"
  },
  {
    id: 13,
    name: "Melaleuca",
    logo: melaleuca,
    position: 13,
    votes: 1189,
    category: "Bem-estar",
    slug: "melaleuca",
    yearFounded: 1985,
    headquarters: "EUA",
    countries: 19,
    distributors: "1 milhão",
    revenue: "US$ 2 bilhões",
    commission: "Até 35%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Produtos naturais para o lar e saúde"
  },
  {
    id: 14,
    name: "Omnilife",
    logo: omnilife,
    position: 14,
    votes: 1134,
    category: "Nutrição",
    slug: "omnilife",
    yearFounded: 1991,
    headquarters: "México",
    countries: 20,
    distributors: "5 milhões",
    revenue: "US$ 800 milhões",
    commission: "Até 40%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Suplementos nutricionais latino-americanos"
  },
  {
    id: 15,
    name: "Oriflame",
    logo: oriflame,
    position: 15,
    votes: 1078,
    category: "Cosméticos",
    slug: "oriflame",
    yearFounded: 1967,
    headquarters: "Suécia",
    countries: 60,
    distributors: "3 milhões",
    revenue: "€ 1.3 bilhões",
    commission: "Até 40%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Beleza sustentável da Escandinávia"
  },
  {
    id: 16,
    name: "Primerica",
    logo: primerica,
    position: 16,
    votes: 1023,
    category: "Serviços Financeiros",
    slug: "primerica",
    yearFounded: 1977,
    headquarters: "EUA",
    countries: 3,
    distributors: "130.000+",
    revenue: "US$ 2.7 bilhões",
    commission: "Até 55%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: false,
    description: "Serviços financeiros para famílias"
  },
  {
    id: 17,
    name: "Royal Prestige",
    logo: royalprestige,
    position: 17,
    votes: 967,
    category: "Utensílios de Cozinha",
    slug: "royal-prestige",
    yearFounded: 1959,
    headquarters: "EUA",
    countries: 15,
    distributors: "100.000+",
    revenue: "US$ 300 milhões",
    commission: "Até 45%",
    trainingProgram: true,
    mobileApp: false,
    internationalExpansion: true,
    description: "Utensílios de cozinha de alta qualidade"
  },
  {
    id: 18,
    name: "Tupperware",
    logo: tupperware,
    position: 18,
    votes: 912,
    category: "Utilidades Domésticas",
    slug: "tupperware",
    yearFounded: 1946,
    headquarters: "EUA",
    countries: 100,
    distributors: "2.9 milhões",
    revenue: "US$ 1.3 bilhões",
    commission: "Até 35%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: true,
    description: "Ícone em recipientes plásticos"
  },
  {
    id: 19,
    name: "Utility Warehouse",
    logo: utilitywarehouse,
    position: 19,
    votes: 856,
    category: "Serviços Essenciais",
    slug: "utility-warehouse",
    yearFounded: 1996,
    headquarters: "Reino Unido",
    countries: 1,
    distributors: "50.000+",
    revenue: "£ 700 milhões",
    commission: "Até 30%",
    trainingProgram: true,
    mobileApp: true,
    internationalExpansion: false,
    description: "Serviços essenciais unificados"
  }
];

export default function Comparativo() {
  const [selectedCompanies, setSelectedCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filteredCompanies = allCompanies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedCompanies.find((c) => c.id === company.id)
  );

  const addCompany = (company: Company) => {
    if (selectedCompanies.length < 3) {
      setSelectedCompanies([...selectedCompanies, company]);
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  const removeCompany = (companyId: number) => {
    setSelectedCompanies(selectedCompanies.filter((c) => c.id !== companyId));
  };

  const ComparisonRow = ({ label, icon: Icon, values }: { label: string; icon: any; values: (string | number | boolean)[] }) => (
    <div className="grid grid-cols-4 gap-4 py-4 border-b border-border/50 hover:bg-muted/30 transition-colors">
      <div className="flex items-center gap-2 text-muted-foreground font-medium">
        <Icon className="h-4 w-4" />
        <span className="text-sm">{label}</span>
      </div>
      {values.map((value, index) => (
        <div key={index} className="text-center font-semibold text-foreground">
          {typeof value === "boolean" ? (
            value ? (
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
            )
          ) : (
            value
          )}
        </div>
      ))}
      {/* Fill empty slots */}
      {Array.from({ length: 3 - values.length }).map((_, index) => (
        <div key={`empty-${index}`} className="text-center text-muted-foreground">-</div>
      ))}
    </div>
  );

  return (
    <>
      <SEO 
        title="Comparativo de Empresas de Marketing Multinível | Compare MLM"
        description="Compare até 3 empresas de marketing multinível lado a lado. Analise comissões, países de atuação, número de distribuidores e muito mais."
        canonical="/comparativo"
      />
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-gold/10 text-gold border-gold/20">
                <Building2 className="w-4 h-4 mr-2" />
                Ferramenta de Comparação
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Compare Empresas de{" "}
                <span className="bg-gradient-blue bg-clip-text text-transparent">
                  Marketing Multinível
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Selecione até 3 empresas para comparar detalhes como comissões, presença global, 
                número de distribuidores e muito mais.
              </p>
            </div>
          </div>
        </section>

        {/* Selection Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[0, 1, 2].map((slot) => {
                const company = selectedCompanies[slot];
                
                return (
                  <Card 
                    key={slot}
                    className={`relative overflow-hidden transition-all duration-300 ${
                      company 
                        ? "border-primary/30 shadow-lg" 
                        : "border-dashed border-2 border-muted-foreground/30 bg-muted/20"
                    }`}
                  >
                    {company ? (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-destructive/10 hover:bg-destructive/20"
                          onClick={() => removeCompany(company.id)}
                        >
                          <X className="h-4 w-4 text-destructive" />
                        </Button>
                        
                        <CardHeader className="text-center pb-2">
                          <div className="mx-auto mb-3">
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="w-20 h-20 rounded-xl object-cover shadow-md"
                            />
                          </div>
                          <CardTitle className="text-xl">{company.name}</CardTitle>
                          <Badge variant="secondary" className="mt-2">
                            {company.category}
                          </Badge>
                        </CardHeader>
                        
                        <CardContent className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Trophy className="h-4 w-4 text-gold" />
                            <span className="text-sm text-muted-foreground">
                              #{company.position}º no Ranking
                            </span>
                          </div>
                          <Progress 
                            value={(company.votes / 3000) * 100} 
                            className="h-2"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            {company.votes.toLocaleString()} votos
                          </p>
                        </CardContent>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-64 p-6">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <Plus className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-center mb-4">
                          Adicionar Empresa {slot + 1}
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setShowSearch(true)}
                          disabled={selectedCompanies.length >= 3}
                        >
                          <Search className="h-4 w-4 mr-2" />
                          Buscar Empresa
                        </Button>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Search Modal */}
            {showSearch && (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <Card className="w-full max-w-md max-h-[80vh] overflow-hidden">
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle>Buscar Empresa</CardTitle>
                      <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative mt-4">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Digite o nome da empresa..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                        autoFocus
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 max-h-[400px] overflow-y-auto">
                    {filteredCompanies.length > 0 ? (
                      filteredCompanies.map((company) => (
                        <button
                          key={company.id}
                          className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors border-b border-border/50"
                          onClick={() => addCompany(company)}
                        >
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="text-left flex-1">
                            <h4 className="font-semibold">{company.name}</h4>
                            <p className="text-sm text-muted-foreground">{company.category}</p>
                          </div>
                          <Badge variant="outline">#{company.position}</Badge>
                        </button>
                      ))
                    ) : (
                      <div className="p-8 text-center text-muted-foreground">
                        Nenhuma empresa encontrada
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Comparison Table */}
            {selectedCompanies.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Tabela Comparativa
                  </CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <div className="min-w-[600px]">
                    {/* Header */}
                    <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-border">
                      <div className="font-semibold text-muted-foreground">Característica</div>
                      {selectedCompanies.map((company) => (
                        <div key={company.id} className="text-center">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-12 h-12 rounded-lg object-cover mx-auto mb-2"
                          />
                          <span className="font-bold text-foreground">{company.name}</span>
                        </div>
                      ))}
                      {Array.from({ length: 3 - selectedCompanies.length }).map((_, i) => (
                        <div key={`empty-header-${i}`} className="text-center text-muted-foreground">
                          -
                        </div>
                      ))}
                    </div>

                    {/* Rows */}
                    <ComparisonRow
                      label="Posição no Ranking"
                      icon={Trophy}
                      values={selectedCompanies.map((c) => `#${c.position}º`)}
                    />
                    <ComparisonRow
                      label="Ano de Fundação"
                      icon={Building2}
                      values={selectedCompanies.map((c) => c.yearFounded)}
                    />
                    <ComparisonRow
                      label="Sede"
                      icon={Building2}
                      values={selectedCompanies.map((c) => c.headquarters)}
                    />
                    <ComparisonRow
                      label="Países de Atuação"
                      icon={TrendingUp}
                      values={selectedCompanies.map((c) => c.countries)}
                    />
                    <ComparisonRow
                      label="Distribuidores"
                      icon={Users}
                      values={selectedCompanies.map((c) => c.distributors)}
                    />
                    <ComparisonRow
                      label="Faturamento"
                      icon={TrendingUp}
                      values={selectedCompanies.map((c) => c.revenue)}
                    />
                    <ComparisonRow
                      label="Comissão Máxima"
                      icon={Star}
                      values={selectedCompanies.map((c) => c.commission)}
                    />
                    <ComparisonRow
                      label="Programa de Treinamento"
                      icon={CheckCircle}
                      values={selectedCompanies.map((c) => c.trainingProgram)}
                    />
                    <ComparisonRow
                      label="Aplicativo Mobile"
                      icon={CheckCircle}
                      values={selectedCompanies.map((c) => c.mobileApp)}
                    />
                    <ComparisonRow
                      label="Expansão Internacional"
                      icon={TrendingUp}
                      values={selectedCompanies.map((c) => c.internationalExpansion)}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Empty State */}
            {selectedCompanies.length === 0 && (
              <Card className="text-center p-12">
                <Building2 className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhuma empresa selecionada</h3>
                <p className="text-muted-foreground mb-6">
                  Selecione até 3 empresas para ver uma comparação detalhada
                </p>
                <Button onClick={() => setShowSearch(true)}>
                  <Search className="h-4 w-4 mr-2" />
                  Começar a Comparar
                </Button>
              </Card>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
