import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  Users, 
  Globe, 
  Building2,
  Vote, 
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  DollarSign,
  Package,
  GraduationCap,
  Shield,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  Bookmark,
  BarChart3,
  Zap,
  Target,
  Layers,
  Gift,
  Clock,
  TrendingDown
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

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

// Company data
const companiesData: Record<string, {
  id: number;
  name: string;
  slug: string;
  logo: string;
  position: number;
  votes: number;
  rating: number;
  category: string;
  founded: string;
  country: string;
  headquarters: string;
  website: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  products: string[];
  compensationPlan: {
    type: string;
    levels: number;
    bonuses: string[];
    requirements: string[];
    pros: string[];
    cons: string[];
  };
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
    helpful: number;
  }[];
  stats: {
    consultants: string;
    countries: number;
    revenue: string;
    growth: string;
  };
}> = {
  "hinode": {
    id: 1,
    name: "Hinode",
    slug: "hinode",
    logo: hinodeLogo,
    position: 1,
    votes: 2847,
    rating: 4.8,
    category: "Cosméticos & Bem-estar",
    founded: "1988",
    country: "Brasil",
    headquarters: "Barueri, São Paulo",
    website: "https://www.hinode.com.br",
    description: "Empresa brasileira líder em cosméticos e perfumaria no Marketing de Rede",
    fullDescription: "A Hinode é uma empresa brasileira fundada em 1988 que se tornou referência no mercado de vendas diretas no Brasil. Com um portfólio diversificado que inclui perfumaria, cosméticos, cuidados pessoais e suplementos alimentares, a empresa conquistou milhares de consultores em todo o país. Sua filosofia de vida baseada em valores como resiliência, determinação e empreendedorismo inspira milhões de pessoas a transformarem suas vidas através do Marketing de Rede.",
    highlights: ["Maior empresa brasileira de MMN", "Presente em 8 países", "Mais de 500 mil consultores", "Produtos premiados internacionalmente"],
    products: ["Perfumaria", "Cosméticos", "Cuidados Pessoais", "Suplementos", "Maquiagem", "Linha Infantil"],
    compensationPlan: {
      type: "Binário Híbrido",
      levels: 21,
      bonuses: ["Bônus de Equipe", "Bônus de Liderança", "Bônus de Royalties", "Viagens Internacionais", "Carro Executivo", "Bônus de Início Rápido"],
      requirements: ["Kit de Adesão a partir de R$ 99", "Pontuação mínima mensal", "Manutenção de 2 pernas ativas"],
      pros: ["Plano de compensação generoso", "Produtos de alta qualidade", "Forte suporte ao consultor", "Treinamentos constantes"],
      cons: ["Exige dedicação constante", "Competição interna", "Necessidade de renovação mensal"]
    },
    reviews: [
      { name: "Ana Maria Silva", avatar: "/placeholder.svg", rating: 5, date: "2024-01-15", comment: "Mudou minha vida! Em 2 anos consegui minha independência financeira. Os produtos são excelentes e vendem praticamente sozinhos.", helpful: 45 },
      { name: "Carlos Eduardo", avatar: "/placeholder.svg", rating: 4, date: "2024-01-10", comment: "Ótima empresa para quem quer empreender. O plano de compensação é muito bom, mas exige trabalho duro.", helpful: 32 },
      { name: "Juliana Santos", avatar: "/placeholder.svg", rating: 5, date: "2024-01-08", comment: "Estou há 5 anos na Hinode e não me arrependo. Os eventos são incríveis e a energia é contagiante!", helpful: 28 }
    ],
    stats: { consultants: "500.000+", countries: 8, revenue: "R$ 2.5 bilhões", growth: "+15%" }
  },
  "herbalife": {
    id: 2,
    name: "Herbalife",
    slug: "herbalife",
    logo: herbalifeLogo,
    position: 2,
    votes: 2634,
    rating: 4.7,
    category: "Nutrição & Saúde",
    founded: "1980",
    country: "Estados Unidos",
    headquarters: "Los Angeles, California",
    website: "https://www.herbalife.com.br",
    description: "Líder mundial em nutrição e controle de peso",
    fullDescription: "A Herbalife é uma empresa global de nutrição que opera em mais de 90 países. Fundada em 1980 por Mark Hughes, a empresa se especializou em produtos de nutrição, controle de peso e cuidados pessoais. Com uma abordagem focada em resultados e comunidade, a Herbalife ajuda milhões de pessoas a alcançarem seus objetivos de saúde e bem-estar através de produtos de alta qualidade e um sistema de suporte robusto.",
    highlights: ["Presente em 90+ países", "43+ anos de mercado", "Foco em nutrição esportiva", "Patrocinadora de atletas mundiais"],
    products: ["Shakes Nutricionais", "Suplementos", "Nutrição Esportiva", "Cuidados Pessoais", "Controle de Peso"],
    compensationPlan: {
      type: "Marketing Multinível Clássico",
      levels: 12,
      bonuses: ["Desconto Atacadista", "Bônus de Produção", "Royalties Override", "Bônus de Liderança", "Viagens de Incentivo"],
      requirements: ["Compra de Kit de Consultor", "Volume pessoal mínimo", "Qualificação mensal"],
      pros: ["Marca reconhecida mundialmente", "Produtos com resultados comprovados", "Treinamentos de alta qualidade", "Comunidade engajada"],
      cons: ["Produtos com preço mais elevado", "Alta competitividade", "Necessidade de estoque inicial"]
    },
    reviews: [
      { name: "Roberto Mendes", avatar: "/placeholder.svg", rating: 5, date: "2024-01-12", comment: "Os produtos são sensacionais! Perdi 20kg com os shakes e hoje ajudo outras pessoas a fazerem o mesmo.", helpful: 38 },
      { name: "Patricia Lima", avatar: "/placeholder.svg", rating: 4, date: "2024-01-05", comment: "Empresa sólida com produtos de qualidade. O plano é bom, mas precisa de dedicação.", helpful: 25 }
    ],
    stats: { consultants: "3.000.000+", countries: 94, revenue: "US$ 5.2 bilhões", growth: "+8%" }
  },
  "vorwerk": {
    id: 3,
    name: "Vorwerk",
    slug: "vorwerk",
    logo: vorwerkLogo,
    position: 3,
    votes: 2398,
    rating: 4.6,
    category: "Eletrodomésticos Premium",
    founded: "1883",
    country: "Alemanha",
    headquarters: "Wuppertal, Alemanha",
    website: "https://www.vorwerk.com",
    description: "Empresa alemã líder em eletrodomésticos premium e venda direta",
    fullDescription: "A Vorwerk é uma empresa familiar alemã com mais de 140 anos de história. Conhecida mundialmente pela Thermomix, um robô de cozinha multifuncional, a empresa combina engenharia alemã de precisão com um modelo de vendas diretas altamente eficaz. Com presença em mais de 60 países, a Vorwerk continua inovando no mercado de eletrodomésticos premium.",
    highlights: ["140+ anos de história", "Thermomix mundialmente famoso", "Qualidade alemã premium", "Inovação constante"],
    products: ["Thermomix", "Kobold (Aspiradores)", "Temial (Sistema de Chá)", "Acessórios"],
    compensationPlan: {
      type: "Venda Direta",
      levels: 8,
      bonuses: ["Comissão por Venda", "Bônus de Equipe", "Incentivos Trimestrais", "Viagens de Reconhecimento"],
      requirements: ["Treinamento obrigatório", "Meta de vendas mensal", "Demonstrações presenciais"],
      pros: ["Produtos de altíssima qualidade", "Marca premium respeitada", "Comissões atrativas", "Produto praticamente se vende sozinho"],
      cons: ["Investimento inicial alto", "Produto de nicho", "Necessidade de demonstração presencial"]
    },
    reviews: [
      { name: "Fernanda Costa", avatar: "/placeholder.svg", rating: 5, date: "2024-01-14", comment: "Thermomix revolucionou minha cozinha e minha renda! Produto excepcional que praticamente se vende sozinho.", helpful: 52 },
      { name: "Marcelo Rocha", avatar: "/placeholder.svg", rating: 4, date: "2024-01-09", comment: "Qualidade alemã incomparável. As demonstrações são a chave do sucesso.", helpful: 31 }
    ],
    stats: { consultants: "600.000+", countries: 60, revenue: "€3.2 bilhões", growth: "+12%" }
  },
  "forever-living": {
    id: 4,
    name: "Forever Living",
    slug: "forever-living",
    logo: foreverLogo,
    position: 4,
    votes: 2156,
    rating: 4.5,
    category: "Aloe Vera & Saúde",
    founded: "1978",
    country: "Estados Unidos",
    headquarters: "Scottsdale, Arizona",
    website: "https://www.foreverliving.com.br",
    description: "Maior produtora de aloe vera do mundo",
    fullDescription: "A Forever Living Products é a maior produtora, fabricante e distribuidora de aloe vera do mundo. Fundada em 1978 por Rex Maughan, a empresa possui suas próprias plantações de aloe vera e controla todo o processo de produção, garantindo a mais alta qualidade. Com presença em mais de 160 países, a Forever oferece uma linha completa de produtos de saúde, beleza e bem-estar.",
    highlights: ["45+ anos de mercado", "Plantações próprias", "Certificação orgânica", "Presença em 160+ países"],
    products: ["Bebidas de Aloe Vera", "Suplementos Nutricionais", "Cuidados com a Pele", "Cuidados Pessoais", "Controle de Peso", "Produtos Apícolas"],
    compensationPlan: {
      type: "Breakaway",
      levels: 15,
      bonuses: ["Bônus de Varejo", "Bônus de Patrocínio", "Bônus de Liderança", "Chairman's Bonus", "Carro de Luxo", "Viagens Internacionais"],
      requirements: ["Kit de Início", "Caso de Crédito pessoal", "Desenvolvimento de equipe"],
      pros: ["Produtos naturais de alta qualidade", "Empresa estável e consolidada", "Plano de carreira estruturado", "Suporte global"],
      cons: ["Crescimento mais lento", "Mercado saturado em algumas regiões", "Produtos com preço premium"]
    },
    reviews: [
      { name: "Luciana Ferreira", avatar: "/placeholder.svg", rating: 5, date: "2024-01-11", comment: "Produtos incríveis! A aloe vera da Forever é incomparável. Estou há 10 anos na empresa e amo!", helpful: 42 },
      { name: "André Santos", avatar: "/placeholder.svg", rating: 4, date: "2024-01-06", comment: "Empresa sólida com produtos de qualidade. O plano é tradicional mas funciona bem.", helpful: 27 }
    ],
    stats: { consultants: "9.000.000+", countries: 160, revenue: "US$ 2.6 bilhões", growth: "+6%" }
  },
  "nu-skin": {
    id: 5,
    name: "Nu Skin",
    slug: "nu-skin",
    logo: nuSkinLogo,
    position: 5,
    votes: 1987,
    rating: 4.4,
    category: "Cuidados Pessoais",
    founded: "1984",
    country: "Estados Unidos",
    headquarters: "Provo, Utah",
    website: "https://www.nuskin.com",
    description: "Empresa americana de cuidados pessoais e suplementos",
    fullDescription: "A Nu Skin é uma empresa global de cuidados pessoais e suplementos nutricionais, conhecida por sua tecnologia anti-idade ageLOC. Com investimentos significativos em pesquisa e desenvolvimento, a empresa está na vanguarda da ciência do envelhecimento, oferecendo produtos que ajudam as pessoas a parecerem e se sentirem mais jovens.",
    highlights: ["Tecnologia ageLOC", "Pesquisa científica avançada", "40+ anos de inovação", "Foco em anti-idade"],
    products: ["Cuidados com a Pele", "Suplementos ageLOC", "Dispositivos de Beleza", "Nutrição Personalizada"],
    compensationPlan: {
      type: "Uninível Modificado",
      levels: 10,
      bonuses: ["Bônus de Vendas", "Bônus de Equipe", "Bônus de Liderança", "Executive Bonus Pool", "Viagens de Luxo"],
      requirements: ["Compra de kit inicial", "Volume pessoal", "Desenvolvimento de líderes"],
      pros: ["Produtos inovadores", "Tecnologia exclusiva", "Treinamentos de qualidade", "Presença global"],
      cons: ["Produtos com preço elevado", "Curva de aprendizado", "Competição intensa"]
    },
    reviews: [
      { name: "Marina Oliveira", avatar: "/placeholder.svg", rating: 4, date: "2024-01-13", comment: "Produtos de alta qualidade! A tecnologia ageLOC é realmente impressionante.", helpful: 35 },
      { name: "Ricardo Alves", avatar: "/placeholder.svg", rating: 5, date: "2024-01-07", comment: "Melhor empresa de anti-idade que conheço. Os resultados falam por si.", helpful: 29 }
    ],
    stats: { consultants: "1.200.000+", countries: 54, revenue: "US$ 2.8 bilhões", growth: "+10%" }
  },
  "mary-kay": {
    id: 6,
    name: "Mary Kay",
    slug: "mary-kay",
    logo: maryKayLogo,
    position: 6,
    votes: 1823,
    rating: 4.3,
    category: "Cosméticos",
    founded: "1963",
    country: "Estados Unidos",
    headquarters: "Dallas, Texas",
    website: "https://www.marykay.com.br",
    description: "Uma das maiores empresas de cosméticos do mundo",
    fullDescription: "A Mary Kay foi fundada em 1963 por Mary Kay Ash com um simples objetivo: enriquecer a vida das mulheres. Hoje, é uma das maiores empresas de cosméticos do mundo, conhecida não apenas por seus produtos de qualidade, mas também por seu compromisso com o empoderamento feminino. Os icônicos Cadillacs rosa são símbolos do sucesso alcançável através da empresa.",
    highlights: ["60+ anos de história", "Empoderamento feminino", "Carros rosa icônicos", "Filantropia ativa"],
    products: ["Cuidados com a Pele", "Maquiagem", "Fragrâncias", "Cuidados Corporais"],
    compensationPlan: {
      type: "Marketing Multinível",
      levels: 13,
      bonuses: ["Comissão de Vendas", "Bônus de Recrutamento", "Bônus de Equipe", "Cadillac Rosa", "Prêmios de Reconhecimento"],
      requirements: ["Kit de Beleza Inicial", "Pedidos mínimos", "Desenvolvimento de equipe"],
      pros: ["Marca icônica", "Foco em empoderamento", "Produtos de qualidade", "Reconhecimento constante"],
      cons: ["Mercado competitivo", "Necessidade de estoque", "Pressão por metas"]
    },
    reviews: [
      { name: "Claudia Martins", avatar: "/placeholder.svg", rating: 5, date: "2024-01-10", comment: "Mary Kay mudou minha vida! O empoderamento que a empresa proporciona é único.", helpful: 48 },
      { name: "Teresa Souza", avatar: "/placeholder.svg", rating: 4, date: "2024-01-04", comment: "Produtos excelentes e empresa que valoriza as mulheres.", helpful: 33 }
    ],
    stats: { consultants: "3.500.000+", countries: 35, revenue: "US$ 3.0 bilhões", growth: "+5%" }
  },
  "amway": {
    id: 7,
    name: "Amway",
    slug: "amway",
    logo: amwayLogo,
    position: 7,
    votes: 1654,
    rating: 4.2,
    category: "Produtos Diversos",
    founded: "1959",
    country: "Estados Unidos",
    headquarters: "Ada, Michigan",
    website: "https://www.amway.com.br",
    description: "Pioneira do Marketing de Rede moderno",
    fullDescription: "A Amway é considerada a pioneira do marketing multinível moderno, fundada em 1959 por Jay Van Andel e Rich DeVos. Com um portfólio diversificado que inclui nutrição, beleza e produtos para casa, a Amway é a maior empresa de vendas diretas do mundo em termos de receita. Sua longevidade e sucesso são testemunhos da solidez do modelo de negócio.",
    highlights: ["Maior empresa de MMN do mundo", "65+ anos de história", "Mais de 100 países", "Pioneira do setor"],
    products: ["Nutrilite (Suplementos)", "Artistry (Beleza)", "eSpring (Água)", "Atmosphere (Ar)", "Produtos para Casa"],
    compensationPlan: {
      type: "Níveis com Breakaway",
      levels: 15,
      bonuses: ["Bônus de Performance", "Bônus de Liderança", "Ruby Bonus", "Emerald Bonus", "Diamond Bonus", "Viagens de Reconhecimento"],
      requirements: ["Cadastro como Empresário", "Volume pessoal e de grupo", "Qualificações de liderança"],
      pros: ["Empresa mais estável do setor", "Produtos de altíssima qualidade", "Histórico comprovado", "Suporte mundial"],
      cons: ["Plano complexo", "Crescimento mais lento", "Alta competição interna"]
    },
    reviews: [
      { name: "José Carlos", avatar: "/placeholder.svg", rating: 4, date: "2024-01-09", comment: "Empresa sólida com 65 anos de história. Os produtos Nutrilite são excepcionais.", helpful: 39 },
      { name: "Maria Helena", avatar: "/placeholder.svg", rating: 4, date: "2024-01-03", comment: "Tradição e qualidade. O plano é complexo, mas funciona bem para quem se dedica.", helpful: 26 }
    ],
    stats: { consultants: "3.000.000+", countries: 100, revenue: "US$ 8.5 bilhões", growth: "+4%" }
  },
  "ozonteck": {
    id: 8,
    name: "Ozonteck",
    slug: "ozonteck",
    logo: ozonteckLogo,
    position: 8,
    votes: 1542,
    rating: 4.1,
    category: "Ozônio & Tecnologia",
    founded: "2020",
    country: "Brasil",
    headquarters: "São Paulo, Brasil",
    website: "https://www.ozonteck.com.br",
    description: "Empresa brasileira inovadora em tecnologia de ozônio",
    fullDescription: "A Ozonteck é uma empresa brasileira inovadora que combina tecnologia de ozônio com um modelo de negócio de marketing de rede. Focada em sustentabilidade e saúde, a empresa oferece produtos que utilizam as propriedades do ozônio para purificação e bem-estar. Apesar de jovem, já conquistou espaço significativo no mercado brasileiro.",
    highlights: ["Tecnologia sustentável", "Inovação brasileira", "Crescimento acelerado", "Foco em sustentabilidade"],
    products: ["Ozonizadores", "Purificadores", "Produtos de Saúde", "Equipamentos de Ozônio"],
    compensationPlan: {
      type: "Binário",
      levels: 12,
      bonuses: ["Bônus de Vendas Diretas", "Bônus de Equipe", "Bônus de Matching", "Bônus de Carreira", "Viagens"],
      requirements: ["Kit de Adesão", "Pontuação pessoal", "Desenvolvimento de rede"],
      pros: ["Mercado inovador", "Empresa em crescimento", "Produtos diferenciados", "Oportunidade de ser pioneiro"],
      cons: ["Empresa nova", "Produto de nicho", "Mercado ainda em desenvolvimento"]
    },
    reviews: [
      { name: "Fernando Lima", avatar: "/placeholder.svg", rating: 4, date: "2024-01-12", comment: "Produto inovador! A tecnologia de ozônio tem muito potencial.", helpful: 22 },
      { name: "Renata Campos", avatar: "/placeholder.svg", rating: 4, date: "2024-01-06", comment: "Empresa jovem mas com muito potencial. Estou apostando no crescimento.", helpful: 18 }
    ],
    stats: { consultants: "50.000+", countries: 1, revenue: "R$ 100 milhões", growth: "+150%" }
  }
};

// Add remaining companies with similar structure
const additionalCompanies = ["coway", "4life", "infinitus", "jan-rose", "melaleuca", "omnilife", "oriflame", "primerica", "royal-prestige", "tupperware", "utility-warehouse"];

export default function CompanyDetails() {
  const { slug } = useParams<{ slug: string }>();
  
  const company = slug ? companiesData[slug] : null;

  if (!company) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Empresa não encontrada</h1>
            <p className="text-muted-foreground mb-8">A empresa que você está procurando não existe ou foi removida.</p>
            <Link to="/ranking">
              <Button className="bg-gradient-gold">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Ranking
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{company.name} - Análise Completa | Universidade Multinível</title>
        <meta name="description" content={`${company.description}. Análise completa do plano de compensação, produtos e avaliações.`} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <span>/</span>
              <Link to="/ranking" className="hover:text-foreground transition-colors">Ranking</Link>
              <span>/</span>
              <span className="text-foreground">{company.name}</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-xl"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge className="bg-gradient-gold text-white border-0">
                        <Trophy className="w-3 h-3 mr-1" />
                        #{company.position} no Ranking
                      </Badge>
                      <Badge variant="secondary">{company.category}</Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{company.name}</h1>
                    <p className="text-lg text-muted-foreground mb-4">{company.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Fundada em {company.founded}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {company.headquarters}
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {company.country}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.floor(company.rating) ? 'text-gold fill-gold' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-foreground">{company.rating}</span>
                  <span className="text-muted-foreground">({company.votes.toLocaleString()} votos)</span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-gradient-gold hover:opacity-90">
                    <Vote className="w-5 h-5 mr-2" />
                    Votar nesta Empresa
                  </Button>
                  <Button size="lg" variant="outline">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visitar Site
                  </Button>
                  <Button size="lg" variant="ghost">
                    <Share2 className="w-5 h-5 mr-2" />
                    Compartilhar
                  </Button>
                  <Button size="lg" variant="ghost">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Stats Card */}
              <div>
                <Card className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-gold" />
                    Estatísticas
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Consultores
                      </span>
                      <span className="font-semibold text-foreground">{company.stats.consultants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Países
                      </span>
                      <span className="font-semibold text-foreground">{company.stats.countries}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Faturamento
                      </span>
                      <span className="font-semibold text-foreground">{company.stats.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Crescimento
                      </span>
                      <span className="font-semibold text-green-500">{company.stats.growth}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent p-0">
                <TabsTrigger value="overview" className="data-[state=active]:bg-gold data-[state=active]:text-white px-6 py-3">
                  <Building2 className="w-4 h-4 mr-2" />
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger value="compensation" className="data-[state=active]:bg-gold data-[state=active]:text-white px-6 py-3">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Plano de Compensação
                </TabsTrigger>
                <TabsTrigger value="products" className="data-[state=active]:bg-gold data-[state=active]:text-white px-6 py-3">
                  <Package className="w-4 h-4 mr-2" />
                  Produtos
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-gold data-[state=active]:text-white px-6 py-3">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Avaliações
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-gold" />
                    Sobre a {company.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {company.fullDescription}
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Destaques</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {company.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Compensation Plan Tab */}
              <TabsContent value="compensation" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-gold" />
                    Plano de Compensação
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="w-5 h-5 text-gold" />
                        <span className="font-semibold text-foreground">Tipo de Plano</span>
                      </div>
                      <p className="text-muted-foreground">{company.compensationPlan.type}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-gold" />
                        <span className="font-semibold text-foreground">Níveis de Comissão</span>
                      </div>
                      <p className="text-muted-foreground">{company.compensationPlan.levels} níveis</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-gold" />
                    Bônus e Incentivos
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {company.compensationPlan.bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gold/10 rounded-lg border border-gold/20">
                        <Award className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-foreground">{bonus}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gold" />
                    Requisitos
                  </h3>
                  <div className="space-y-2 mb-8">
                    {company.compensationPlan.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-4 border-green-500/30 bg-green-500/5">
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5" />
                        Pontos Positivos
                      </h4>
                      <ul className="space-y-2">
                        {company.compensationPlan.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-4 border-red-500/30 bg-red-500/5">
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                        <ThumbsDown className="w-5 h-5" />
                        Pontos de Atenção
                      </h4>
                      <ul className="space-y-2">
                        {company.compensationPlan.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </Card>
              </TabsContent>

              {/* Products Tab */}
              <TabsContent value="products" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Package className="w-6 h-6 text-gold" />
                    Linha de Produtos
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    A {company.name} oferece uma linha completa de produtos de alta qualidade na categoria {company.category.toLowerCase()}.
                  </p>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {company.products.map((product, index) => (
                      <Card key={index} className="p-4 hover:shadow-card transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-3">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-foreground">{product}</h3>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-gold" />
                      Avaliações dos Consultores
                    </h2>
                    <Button className="bg-gradient-gold hover:opacity-90">
                      Escrever Avaliação
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {company.reviews.map((review, index) => (
                      <Card key={index} className="p-5">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback className="bg-gold text-white">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="font-semibold text-foreground">{review.name}</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-gold' : 'text-muted-foreground'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground mb-3">{review.comment}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                Útil ({review.helpful})
                              </button>
                              <button className="text-muted-foreground hover:text-foreground transition-colors">
                                Responder
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5 border-gold/20">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Interessado na {company.name}?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Conecte-se com consultores experientes e descubra se essa oportunidade é ideal para você.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-gold hover:opacity-90">
                    <Users className="w-5 h-5 mr-2" />
                    Encontrar Consultor
                  </Button>
                  <Link to="/ranking">
                    <Button size="lg" variant="outline" className="border-gold/50 hover:bg-gold/10 w-full">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Voltar ao Ranking
                    </Button>
                  </Link>
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
