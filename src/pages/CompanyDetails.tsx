import { SEO } from "@/components/SEO";
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
  TrendingDown,
  Sparkles,
  Crown,
  Factory,
  Briefcase,
  History,
  Landmark,
  CircleDollarSign,
  BadgeCheck,
  Check,
  Loader2
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useCompanyVote, useCompanyVoteCounts } from "@/hooks/useCompanyVoting";

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

// Company data interface
interface CompanyData {
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
  history: string;
  mission: string;
  vision: string;
  highlights: string[];
  products: { name: string; description: string }[];
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
    employees: string;
    foundedYear: number;
  };
  awards: string[];
  certifications: string[];
}

// Complete company data
const companiesData: Record<string, CompanyData> = {
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
    headquarters: "Barueri, São Paulo, Brasil",
    website: "https://www.hinode.com.br",
    description: "Empresa brasileira líder em cosméticos e perfumaria no Marketing de Rede",
    fullDescription: "A Hinode é uma das maiores e mais bem-sucedidas empresas de marketing multinível do Brasil, fundada em 1988 pela família Rodrigues em São Paulo. O que começou como uma pequena operação de venda de cosméticos transformou-se em um império empresarial que hoje fatura bilhões de reais anualmente e emprega milhares de pessoas direta e indiretamente em todo o território nacional e internacional.",
    history: "A história da Hinode começou em 1988, quando Francisco Rodrigues decidiu empreender no mercado de cosméticos brasileiros. Nos primeiros anos, a empresa operava de forma tradicional, mas em 2008 ocorreu uma grande transformação quando a família decidiu adotar o modelo de marketing multinível. Essa decisão estratégica revolucionou completamente o negócio. Com a implementação do modelo MMN, a Hinode experimentou um crescimento exponencial, passando de uma pequena empresa regional para uma potência nacional. Em 2015, a empresa lançou a campanha 'Faça Acontecer', que se tornou icônica no setor e ajudou a consolidar a marca como sinônimo de empreendedorismo e transformação de vida. Ao longo dos anos, a Hinode expandiu suas operações para países como Colômbia, Peru, México, Estados Unidos e Portugal, estabelecendo uma presença internacional significativa. A empresa também investiu pesadamente em infraestrutura, construindo um moderno centro de distribuição em Barueri e inaugurando dezenas de franquias em todo o Brasil.",
    mission: "Melhorar a vida das pessoas através de produtos de alta qualidade e oportunidades de negócio que transformam sonhos em realidade.",
    vision: "Ser a maior empresa de vendas diretas da América Latina, reconhecida pela excelência em produtos e pelo impacto positivo na vida de milhões de pessoas.",
    highlights: ["Maior empresa brasileira de MMN", "Presente em 8 países", "Mais de 500 mil consultores ativos", "Produtos premiados internacionalmente", "Faturamento superior a R$ 2 bilhões", "Centro de pesquisa próprio", "Mais de 500 produtos no portfólio", "Certificação ABIHPEC"],
    products: [
      { name: "Perfumaria", description: "Linha completa de perfumes masculinos e femininos inspirados nas melhores fragrâncias internacionais, incluindo a famosa linha Empire." },
      { name: "Cosméticos", description: "Produtos para cuidados com a pele, incluindo cremes anti-idade, hidratantes e tratamentos específicos para diferentes tipos de pele." },
      { name: "Cuidados Pessoais", description: "Desodorantes, sabonetes, shampoos e condicionadores com fórmulas exclusivas e fragrâncias sofisticadas." },
      { name: "Suplementos", description: "Linha de suplementos alimentares, vitaminas e minerais para saúde e bem-estar, incluindo produtos para emagrecimento." },
      { name: "Maquiagem", description: "Maquiagem profissional de alta cobertura e durabilidade, com opções para todos os tons de pele brasileira." },
      { name: "Linha Infantil", description: "Produtos especialmente desenvolvidos para crianças, com fórmulas suaves e seguras." }
    ],
    compensationPlan: {
      type: "Binário Híbrido",
      levels: 21,
      bonuses: ["Bônus de Equipe (até 50%)", "Bônus de Liderança", "Bônus de Royalties", "Viagens Internacionais", "Carro Executivo", "Bônus de Início Rápido", "Bônus de Graduação", "Incentivos Trimestrais"],
      requirements: ["Kit de Adesão a partir de R$ 99", "Pontuação mínima mensal de 100 pontos", "Manutenção de 2 pernas ativas", "Ativação mensal obrigatória"],
      pros: ["Plano de compensação generoso com até 50% de comissão", "Produtos de alta qualidade e boa aceitação", "Forte suporte ao consultor com treinamentos", "Treinamentos constantes presenciais e online", "Marca consolidada e reconhecida", "Eventos motivacionais frequentes"],
      cons: ["Exige dedicação constante e trabalho árduo", "Competição interna entre consultores", "Necessidade de renovação mensal obrigatória", "Saturação de mercado em algumas regiões"]
    },
    reviews: [
      { name: "Ana Maria Silva", avatar: "/placeholder.svg", rating: 5, date: "2024-01-15", comment: "Mudou minha vida completamente! Em 2 anos consegui minha independência financeira trabalhando como consultora Hinode. Os produtos são excelentes e praticamente se vendem sozinhos pela qualidade.", helpful: 145 },
      { name: "Carlos Eduardo Santos", avatar: "/placeholder.svg", rating: 5, date: "2024-01-10", comment: "Ótima empresa para quem quer empreender sem grandes investimentos iniciais. O plano de compensação é muito bom e a empresa oferece todo suporte necessário.", helpful: 89 },
      { name: "Juliana Ferreira", avatar: "/placeholder.svg", rating: 4, date: "2024-01-08", comment: "Estou há 5 anos na Hinode e não me arrependo da decisão. Os eventos são incríveis, a energia é contagiante e o crescimento profissional é real!", helpful: 67 },
      { name: "Roberto Almeida", avatar: "/placeholder.svg", rating: 4, date: "2024-01-05", comment: "Empresa séria com produtos de qualidade. Exige trabalho duro, mas os resultados aparecem para quem se dedica de verdade.", helpful: 54 }
    ],
    stats: { consultants: "500.000+", countries: 8, revenue: "R$ 2.5 bilhões", growth: "+15%", employees: "5.000+", foundedYear: 1988 },
    awards: ["Prêmio ABEVD de Excelência", "Top of Mind Brasil", "Selo RA1000 Reclame Aqui", "Melhor Empresa de Vendas Diretas 2023", "Great Place to Work"],
    certifications: ["ABIHPEC", "ANVISA", "Cruelty Free", "ISO 9001", "ISO 14001"]
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
    headquarters: "Los Angeles, California, EUA",
    website: "https://www.herbalife.com.br",
    description: "Líder mundial em nutrição e controle de peso",
    fullDescription: "A Herbalife Nutrition é uma empresa global de nutrição que opera em mais de 90 países ao redor do mundo. Fundada em 1980 por Mark Hughes em Los Angeles, Califórnia, a empresa nasceu de uma missão pessoal: ajudar pessoas a alcançarem uma nutrição adequada e um estilo de vida mais saudável. Hoje, a Herbalife é reconhecida mundialmente por seus produtos de nutrição, controle de peso e cuidados pessoais de alta qualidade.",
    history: "A história da Herbalife começou em 1980, quando Mark Hughes, inspirado pela perda trágica de sua mãe devido a uma dieta radical, decidiu criar uma empresa que oferecesse produtos de nutrição seguros e eficazes. O primeiro produto da empresa foi o Formula 1, um shake nutritivo que rapidamente se tornou um sucesso de vendas. Ao longo das décadas de 1980 e 1990, a Herbalife expandiu-se rapidamente pelos Estados Unidos e depois internacionalmente. Em 1986, a empresa abriu seu capital na NASDAQ, consolidando sua posição como líder do setor. A empresa enfrentou desafios ao longo dos anos, incluindo investigações regulatórias, mas sempre manteve seu compromisso com a qualidade dos produtos e o bem-estar dos distribuidores. Hoje, a Herbalife é patrocinadora oficial do LA Galaxy e de diversos atletas profissionais, reforçando seu compromisso com a nutrição esportiva.",
    mission: "Transformar a vida das pessoas proporcionando as melhores oportunidades de negócio em vendas diretas, produtos de nutrição e programas de controle de peso.",
    vision: "Ser a empresa de nutrição mais respeitada do mundo, ajudando pessoas a viverem uma vida mais saudável e ativa.",
    highlights: ["Presente em 94+ países", "44+ anos de mercado global", "Líder em nutrição esportiva", "Patrocinadora de atletas mundiais", "Listada na NYSE", "Centro de Pesquisa UCLA", "Comitê Científico Internacional", "Produtos testados por atletas"],
    products: [
      { name: "Shakes Nutricionais Formula 1", description: "O shake mais vendido do mundo, disponível em diversos sabores, fornecendo nutrição completa e equilibrada com proteínas, vitaminas e minerais essenciais." },
      { name: "Suplementos Nutricionais", description: "Linha completa de vitaminas, minerais e suplementos especializados para diferentes necessidades, incluindo ômega-3, fibras e proteínas." },
      { name: "Nutrição Esportiva Herbalife24", description: "Linha profissional desenvolvida em parceria com atletas de elite, ideal para antes, durante e após os treinos." },
      { name: "Cuidados Pessoais SKIN", description: "Linha de produtos para cuidados com a pele que combina ciência e natureza para resultados visíveis." },
      { name: "Controle de Peso", description: "Programas completos de emagrecimento saudável, incluindo shakes, barras de proteína e chás termogênicos." },
      { name: "Chás e Bebidas Energéticas", description: "Chás concentrados e bebidas energéticas para dar mais disposição e acelerar o metabolismo." }
    ],
    compensationPlan: {
      type: "Marketing Multinível Clássico",
      levels: 12,
      bonuses: ["Desconto Atacadista (25-50%)", "Bônus de Produção", "Royalties Override (1-5%)", "Bônus de Liderança", "Viagens de Incentivo Mundiais", "Bônus do Presidente's Team", "Mark Hughes Bonus", "Círculo do Fundador"],
      requirements: ["Compra de Kit de Consultor", "Volume pessoal mínimo de 100 pontos", "Qualificação mensal contínua", "Requalificação anual de níveis"],
      pros: ["Marca reconhecida mundialmente com 44 anos de história", "Produtos com resultados cientificamente comprovados", "Treinamentos de alta qualidade global", "Comunidade engajada e motivadora", "Forte presença digital", "Suporte corporativo robusto"],
      cons: ["Produtos com preço mais elevado que concorrentes", "Alta competitividade entre distribuidores", "Necessidade de estoque inicial considerável", "Metas mensais desafiadoras"]
    },
    reviews: [
      { name: "Roberto Mendes", avatar: "/placeholder.svg", rating: 5, date: "2024-01-12", comment: "Os produtos são sensacionais e realmente funcionam! Perdi 20kg com os shakes e hoje ajudo outras pessoas a transformarem suas vidas também. A Herbalife mudou completamente minha perspectiva sobre nutrição.", helpful: 138 },
      { name: "Patricia Lima", avatar: "/placeholder.svg", rating: 4, date: "2024-01-05", comment: "Empresa sólida com produtos de qualidade inquestionável. O plano é bom e funciona, mas precisa de dedicação real. Não é para quem quer dinheiro fácil.", helpful: 95 },
      { name: "Fernando Castro", avatar: "/placeholder.svg", rating: 5, date: "2024-01-02", comment: "Trabalho com Herbalife há 8 anos e posso dizer que é uma empresa séria. Os treinamentos são excelentes e o suporte nunca me faltou.", helpful: 72 },
      { name: "Camila Ribeiro", avatar: "/placeholder.svg", rating: 4, date: "2023-12-28", comment: "Amo os produtos! São práticos, nutritivos e realmente ajudam a manter uma alimentação saudável mesmo na correria do dia a dia.", helpful: 58 }
    ],
    stats: { consultants: "3.000.000+", countries: 94, revenue: "US$ 5.2 bilhões", growth: "+8%", employees: "8.500+", foundedYear: 1980 },
    awards: ["Forbes Global 2000", "Prêmio DSN Global 100", "Melhor Empresa de Nutrição", "Top Employer", "Prêmio de Sustentabilidade"],
    certifications: ["NSF International", "FDA Compliant", "Informed Sport", "ISO 22000", "GMP Certified"]
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
    fullDescription: "A Vorwerk é uma empresa familiar alemã com mais de 140 anos de história, reconhecida mundialmente por sua inovação tecnológica e qualidade premium. Fundada em 1883 em Wuppertal, Alemanha, a empresa começou como fabricante de tapetes e hoje é líder global em eletrodomésticos de alta performance, sendo especialmente conhecida pela Thermomix, o robô de cozinha mais vendido do mundo.",
    history: "A história da Vorwerk começou em 1883, quando Carl Vorwerk fundou uma fábrica de tapetes em Wuppertal, na região do Vale do Ruhr, Alemanha. A empresa prosperou e, em 1929, revolucionou o mercado ao lançar o Kobold, um dos primeiros aspiradores de pó elétricos do mundo. Esse produto estabeleceu a base para o modelo de vendas diretas que a empresa adota até hoje. Em 1971, a Vorwerk lançou a Thermomix, que se tornaria seu produto mais icônico. O robô de cozinha multifuncional revolucionou a forma como as pessoas cozinham, combinando mais de 12 funções em um único aparelho. Ao longo das décadas, a Thermomix evoluiu constantemente, incorporando tecnologias como conectividade Wi-Fi e acesso a milhares de receitas guiadas. Hoje, a Vorwerk opera em mais de 60 países, mantendo-se como uma empresa familiar, agora na quinta geração. A empresa emprega mais de 600.000 consultores independentes e mantém seu compromisso com a qualidade alemã e a inovação contínua.",
    mission: "Melhorar a vida das pessoas através de produtos inovadores de alta qualidade, vendidos de forma personalizada por consultores especializados.",
    vision: "Ser reconhecida globalmente como a referência em qualidade e inovação em eletrodomésticos premium, mantendo nossos valores familiares e compromisso com a excelência.",
    highlights: ["140+ anos de história familiar", "Thermomix mundialmente famoso", "Qualidade alemã premium incomparável", "Inovação constante em tecnologia", "600.000+ consultores globais", "Presença em 60+ países", "5ª geração familiar", "Centro de P&D próprio na Alemanha"],
    products: [
      { name: "Thermomix TM6", description: "O mais avançado robô de cozinha do mundo, com 12 funções em um só aparelho: pesar, misturar, triturar, cozinhar no vapor, refogar, amassar, moer, picar, emulsionar, cozinhar em baixa temperatura, sous-vide e fermentar. Conectividade Wi-Fi com acesso a 60.000+ receitas guiadas." },
      { name: "Kobold Aspiradores", description: "Sistema de limpeza premium com aspiradores verticais e robôs, conhecidos pela potência de sucção superior e durabilidade excepcional." },
      { name: "Temial Sistema de Chá", description: "Sistema automatizado para preparar chás de folhas soltas na temperatura e tempo ideais, com mais de 40 variedades disponíveis." },
      { name: "Acessórios Thermomix", description: "Linha completa de acessórios que expandem as funcionalidades da Thermomix, incluindo varoma, livros de receitas e utensílios especiais." }
    ],
    compensationPlan: {
      type: "Venda Direta Premium",
      levels: 8,
      bonuses: ["Comissão por Venda (até 25%)", "Bônus de Equipe", "Incentivos Trimestrais", "Viagens de Reconhecimento Mundiais", "Bônus de Demonstração", "Prêmios de Carreira", "Bônus de Ano Novo", "Competições Especiais"],
      requirements: ["Treinamento obrigatório certificado", "Meta de vendas mensal mínima", "Demonstrações presenciais obrigatórias", "Atualização técnica contínua"],
      pros: ["Produtos de altíssima qualidade incontestável", "Marca premium respeitada mundialmente", "Comissões atrativas por venda única", "Produto praticamente se vende sozinho", "Baixa concorrência de preço", "Suporte técnico excepcional"],
      cons: ["Investimento inicial alto para treinamento", "Produto de nicho com público específico", "Necessidade de demonstração presencial", "Preço alto dificulta algumas vendas"]
    },
    reviews: [
      { name: "Fernanda Costa", avatar: "/placeholder.svg", rating: 5, date: "2024-01-14", comment: "A Thermomix revolucionou minha cozinha e minha renda! O produto é excepcional e praticamente se vende sozinho nas demonstrações. As pessoas ficam encantadas com as possibilidades.", helpful: 152 },
      { name: "Marcelo Rocha", avatar: "/placeholder.svg", rating: 5, date: "2024-01-09", comment: "Qualidade alemã incomparável. As demonstrações são a chave do sucesso. Quando as pessoas veem a Thermomix funcionando, querem comprar imediatamente.", helpful: 98 },
      { name: "Sandra Oliveira", avatar: "/placeholder.svg", rating: 4, date: "2024-01-06", comment: "Produto incrível, mas o investimento inicial pode assustar alguns. Para quem se dedica, o retorno é garantido.", helpful: 67 },
      { name: "Ricardo Machado", avatar: "/placeholder.svg", rating: 5, date: "2024-01-03", comment: "Trabalho com Vorwerk há 15 anos. É uma empresa séria, que valoriza seus consultores e entrega produtos que realmente funcionam.", helpful: 89 }
    ],
    stats: { consultants: "600.000+", countries: 60, revenue: "€3.2 bilhões", growth: "+12%", employees: "12.000+", foundedYear: 1883 },
    awards: ["Red Dot Design Award", "iF Design Award", "Kitchen Innovation Award", "German Design Award", "Plus X Award"],
    certifications: ["TÜV Certified", "CE Mark", "GS Safety", "ISO 9001", "Energy Star"]
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
    headquarters: "Scottsdale, Arizona, EUA",
    website: "https://www.foreverliving.com.br",
    description: "Maior produtora de aloe vera do mundo",
    fullDescription: "A Forever Living Products é a maior produtora, fabricante e distribuidora de aloe vera do mundo. Fundada em 1978 por Rex Maughan no Arizona, Estados Unidos, a empresa possui suas próprias plantações de aloe vera localizadas no Texas e na República Dominicana, controlando todo o processo de produção desde o plantio até o produto final, garantindo a mais alta qualidade e pureza em todos os seus produtos.",
    history: "A jornada da Forever Living começou em 1978, quando Rex Maughan reconheceu o potencial incrível da aloe vera para a saúde e bem-estar. Começando com apenas um produto - o gel de aloe vera puro -, Rex construiu uma empresa que hoje opera em mais de 160 países. Nos anos 1980, a Forever expandiu rapidamente pelos Estados Unidos e começou sua internacionalização. A empresa desenvolveu uma abordagem única: ao invés de depender de fornecedores, decidiu cultivar sua própria aloe vera. Hoje, a Forever possui as maiores plantações de aloe vera do mundo, com mais de 6.500 acres no Texas e na República Dominicana. A empresa também possui fazendas de abelhas para produzir sua linha de produtos apícolas. Em 1994, a Forever se tornou a primeira empresa de aloe vera a receber o Selo de Certificação do International Aloe Science Council (IASC), uma distinção que mantém até hoje. A filosofia de Rex Maughan sempre foi simples: oferecer os melhores produtos naturais possíveis e compartilhar a oportunidade de negócio com pessoas ao redor do mundo.",
    mission: "Melhorar a qualidade de vida das pessoas através dos melhores produtos de aloe vera do mundo e uma oportunidade de negócio que permite realizar sonhos.",
    vision: "Ser reconhecida globalmente como a empresa líder em produtos de aloe vera, sinônimo de qualidade, integridade e oportunidade.",
    highlights: ["46+ anos de mercado global", "Plantações próprias de aloe vera", "Certificação IASC de pureza", "Presença em 160+ países", "9+ milhões de distribuidores", "6.500+ acres de plantações", "Fazendas de abelhas próprias", "Produtos 100% naturais"],
    products: [
      { name: "Bebidas de Aloe Vera", description: "A famosa linha de bebidas de aloe vera puro, incluindo o original Aloe Vera Gel, Aloe Berry Nectar, Aloe Bits N' Peaches e Forever Freedom, todos com certificação IASC de pureza." },
      { name: "Suplementos Nutricionais", description: "Vitaminas, minerais e suplementos de alta absorção, incluindo Forever Daily, Forever Active Pro-B e Arctic Sea Omega-3." },
      { name: "Cuidados com a Pele Aloe", description: "Linha Sonya Skin Care e Infinite by Forever, com produtos que aproveitam as propriedades curativas e hidratantes da aloe vera para todos os tipos de pele." },
      { name: "Cuidados Pessoais", description: "Shampoos, condicionadores, desodorantes e produtos de higiene com a pureza da aloe vera." },
      { name: "Controle de Peso", description: "Programa Clean 9 e Forever F.I.T., que combinam aloe vera com nutrição inteligente para resultados duradouros." },
      { name: "Produtos Apícolas", description: "Mel, própolis, geleia real e pólen de abelha, produzidos nas fazendas próprias da Forever em áreas preservadas." }
    ],
    compensationPlan: {
      type: "Breakaway Tradicional",
      levels: 15,
      bonuses: ["Bônus de Varejo (até 43%)", "Bônus de Patrocínio", "Bônus de Liderança", "Chairman's Bonus", "Programa de Carro de Luxo", "Viagens Internacionais", "Bônus de Desenvolvimento", "Global Rally Bonus"],
      requirements: ["Kit de Início Forever", "Case Credits pessoal mensal", "Desenvolvimento de equipe qualificada", "Manutenção de volume de grupo"],
      pros: ["Produtos naturais de altíssima qualidade", "Empresa estável com 46 anos de história", "Plano de carreira estruturado e claro", "Suporte global em 160+ países", "Produtos consumíveis com recompra", "Forte comunidade de distribuidores"],
      cons: ["Crescimento pode ser mais lento que binários", "Mercado saturado em algumas regiões", "Produtos com preço premium", "Exige consistência de longo prazo"]
    },
    reviews: [
      { name: "Luciana Ferreira", avatar: "/placeholder.svg", rating: 5, date: "2024-01-11", comment: "Os produtos de aloe vera da Forever são incomparáveis em qualidade! Estou há 10 anos na empresa e cada dia me convenço mais de que fiz a escolha certa. A aloe vera transformou minha saúde.", helpful: 142 },
      { name: "André Santos", avatar: "/placeholder.svg", rating: 4, date: "2024-01-06", comment: "Empresa sólida com produtos de qualidade incontestável. O plano é tradicional e funciona bem para quem tem paciência e consistência.", helpful: 87 },
      { name: "Cristina Moreira", avatar: "/placeholder.svg", rating: 5, date: "2024-01-03", comment: "A Forever me deu liberdade financeira e saúde. O Clean 9 mudou minha vida e hoje ajudo centenas de pessoas a terem os mesmos resultados.", helpful: 98 },
      { name: "Paulo Henrique", avatar: "/placeholder.svg", rating: 4, date: "2023-12-30", comment: "Produtos excelentes, especialmente a linha de aloe vera. A empresa é séria e o negócio funciona para quem trabalha.", helpful: 65 }
    ],
    stats: { consultants: "9.000.000+", countries: 160, revenue: "US$ 2.6 bilhões", growth: "+6%", employees: "4.000+", foundedYear: 1978 },
    awards: ["IASC Certified", "DSA Member", "BBB A+ Rating", "Prêmio de Sustentabilidade", "Top Direct Selling Company"],
    certifications: ["IASC Certified", "Kosher Certified", "Halal Certified", "ISO 14001", "USDA Organic"]
  },
  "nu-skin": {
    id: 5,
    name: "Nu Skin",
    slug: "nu-skin",
    logo: nuSkinLogo,
    position: 5,
    votes: 1987,
    rating: 4.4,
    category: "Cuidados Pessoais & Anti-Idade",
    founded: "1984",
    country: "Estados Unidos",
    headquarters: "Provo, Utah, EUA",
    website: "https://www.nuskin.com",
    description: "Líder mundial em tecnologia anti-idade e cuidados pessoais",
    fullDescription: "A Nu Skin Enterprises é uma empresa global de cuidados pessoais e suplementos nutricionais, reconhecida mundialmente por sua tecnologia anti-idade revolucionária ageLOC®. Fundada em 1984 em Provo, Utah, a empresa está na vanguarda da ciência do envelhecimento, investindo milhões em pesquisa e desenvolvimento para oferecer produtos que ajudam as pessoas a parecerem e se sentirem mais jovens.",
    history: "A Nu Skin foi fundada em 1984 por Blake Roney, Sandie Tillotson e Steve Lund com uma filosofia simples: 'Todos os produtos bons, nenhum dos ruins'. Os fundadores acreditavam que produtos de cuidados pessoais poderiam ser formulados sem ingredientes desnecessários ou potencialmente prejudiciais. Nos anos 1990, a empresa expandiu-se internacionalmente, entrando em mercados asiáticos que se tornariam fundamentais para seu crescimento. Em 1996, a Nu Skin abriu seu capital na NYSE. O grande diferencial veio em 2009, quando a empresa lançou a tecnologia ageLOC®, resultado de anos de pesquisa sobre o processo de envelhecimento a nível genético. Esta tecnologia identifica e atua nas fontes do envelhecimento, não apenas nos sintomas. Em parceria com universidades como a Stanford e instituições de pesquisa de ponta, a Nu Skin continua desenvolvendo produtos inovadores. A empresa também é conhecida por sua filantropia através da Nu Skin Force for Good Foundation, que já ajudou milhões de crianças carentes ao redor do mundo.",
    mission: "Ser uma força positiva no mundo, ajudando as pessoas a melhorarem suas vidas com produtos anti-idade revolucionários e oportunidades de sucesso.",
    vision: "Ser a empresa líder mundial em inovação anti-idade, combinando ciência de ponta com oportunidades de negócio que transformam vidas.",
    highlights: ["Tecnologia ageLOC® exclusiva", "40+ anos de inovação científica", "Listada na NYSE (NUS)", "Parcerias com universidades de ponta", "Presente em 54 mercados", "1.2+ milhões de afiliados", "Centro de P&D próprio", "Force for Good Foundation"],
    products: [
      { name: "ageLOC® LumiSpa", description: "Dispositivo de limpeza facial revolucionário que limpa, trata e deixa a pele visivelmente mais jovem e radiante em apenas 2 minutos por dia." },
      { name: "ageLOC® Galvanic Spa", description: "Dispositivo portátil que utiliza corrente galvânica para potencializar a eficácia dos produtos de skincare, proporcionando resultados de spa em casa." },
      { name: "ageLOC® Youth Suplementos", description: "Linha de suplementos que atua nas fontes do envelhecimento, promovendo juventude de dentro para fora." },
      { name: "Nutrição Pharmanex", description: "Linha premium de suplementos nutricionais com tecnologia de absorção avançada e rastreabilidade 6S Quality Process." },
      { name: "ageLOC® Me", description: "Sistema de skincare personalizado com 2.000 combinações possíveis, adaptando-se às necessidades únicas de cada pele." },
      { name: "Epoch", description: "Linha de produtos inspirada em ingredientes etnobotânicos de culturas tradicionais ao redor do mundo." }
    ],
    compensationPlan: {
      type: "Uninível Modificado",
      levels: 10,
      bonuses: ["Bônus de Vendas (até 40%)", "Bônus de Equipe", "Bônus de Liderança", "Executive Bonus Pool", "Viagens de Luxo Mundiais", "G1 Bonus", "Blue Diamond Bonus", "Bônus de Sustentabilidade"],
      requirements: ["Compra de kit inicial", "Volume pessoal mínimo (100 PSV)", "Desenvolvimento de líderes qualificados", "Manutenção de volume de grupo"],
      pros: ["Produtos inovadores com tecnologia exclusiva", "Pesquisa científica robusta e comprovada", "Treinamentos de qualidade internacional", "Presença global estabelecida", "Dispositivos tecnológicos diferenciados", "Forte apelo de marca premium"],
      cons: ["Produtos com preço elevado acima do mercado", "Curva de aprendizado técnica", "Competição intensa entre distribuidores", "Necessidade de demonstração de resultados"]
    },
    reviews: [
      { name: "Marina Oliveira", avatar: "/placeholder.svg", rating: 5, date: "2024-01-13", comment: "Os produtos são de uma qualidade impressionante! A tecnologia ageLOC realmente funciona. Minha pele nunca esteve tão bonita e meus clientes percebem a diferença.", helpful: 135 },
      { name: "Ricardo Alves", avatar: "/placeholder.svg", rating: 5, date: "2024-01-07", comment: "Melhor empresa de anti-idade que conheço. Os resultados falam por si e os clientes voltam sempre. O LumiSpa é um sucesso de vendas!", helpful: 109 },
      { name: "Tatiana Rocha", avatar: "/placeholder.svg", rating: 4, date: "2024-01-04", comment: "Produtos premium que realmente entregam o que prometem. O investimento inicial é alto, mas a qualidade justifica.", helpful: 78 },
      { name: "Bruno Costa", avatar: "/placeholder.svg", rating: 4, date: "2024-01-01", comment: "Empresa séria com ciência de verdade por trás dos produtos. Não é como outras marcas que só fazem marketing vazio.", helpful: 65 }
    ],
    stats: { consultants: "1.200.000+", countries: 54, revenue: "US$ 2.8 bilhões", growth: "+10%", employees: "4.500+", foundedYear: 1984 },
    awards: ["Forbes Best Direct Selling", "DSN Global 100", "Utah Business Fast 50", "Beauty Innovation Award", "Prêmio de Inovação"],
    certifications: ["FDA Registered Facility", "cGMP Certified", "NSF Certified", "ISO 22000", "Leaping Bunny Certified"]
  },
  "mary-kay": {
    id: 6,
    name: "Mary Kay",
    slug: "mary-kay",
    logo: maryKayLogo,
    position: 6,
    votes: 1823,
    rating: 4.3,
    category: "Cosméticos & Empoderamento",
    founded: "1963",
    country: "Estados Unidos",
    headquarters: "Dallas, Texas, EUA",
    website: "https://www.marykay.com.br",
    description: "Uma das maiores empresas de cosméticos e empoderamento feminino do mundo",
    fullDescription: "A Mary Kay Inc. é uma das maiores empresas de cosméticos de venda direta do mundo, fundada em 1963 por Mary Kay Ash em Dallas, Texas. A empresa nasceu com um propósito maior que vender cosméticos: empoderar mulheres, oferecendo-lhes oportunidades de sucesso profissional e financeiro em uma época em que as portas do mundo corporativo estavam fechadas para elas. Hoje, a Mary Kay é sinônimo de empoderamento feminino em todo o mundo.",
    history: "A história da Mary Kay é a história de uma mulher extraordinária. Mary Kay Ash trabalhou por 25 anos no mundo corporativo e foi repetidamente preterida em promoções por ser mulher. Em 1963, aos 45 anos, ela decidiu criar sua própria empresa, investindo suas economias de vida - apenas $5.000. Com a ajuda de seu filho, Richard Rogers, Mary Kay abriu sua primeira loja em Dallas em 13 de setembro de 1963, com apenas 9 consultoras de beleza. A empresa cresceu rapidamente, impulsionada pela filosofia única de Mary Kay: 'Deus primeiro, família segundo, carreira terceiro'. Os icônicos Cadillacs rosa surgiram em 1969 como recompensa para as consultoras de maior sucesso, tornando-se um símbolo mundial de conquista feminina. Mary Kay Ash liderou a empresa até seu falecimento em 2001, mas seu legado continua vivo. A empresa permanece familiar, com seu neto Ryan Rogers como CEO. Hoje, a Mary Kay opera em mais de 35 países com milhões de consultoras, mantendo o compromisso original de enriquecer a vida das mulheres.",
    mission: "Enriquecer a vida das mulheres e suas famílias ao redor do mundo, oferecendo qualidade insuperável em produtos e uma oportunidade de carreira inigualável.",
    vision: "Ser a empresa de cosméticos mais admirada do mundo, conhecida por empoderar mulheres a alcançarem seus sonhos.",
    highlights: ["61+ anos de história inspiradora", "Empoderamento feminino como missão", "Cadillacs rosa icônicos mundialmente", "Filantropia ativa contra violência doméstica", "3.5+ milhões de consultoras", "Presente em 35+ países", "Empresa familiar há 3 gerações", "Fundação Mary Kay contra câncer"],
    products: [
      { name: "TimeWise®", description: "Sistema anti-idade com tecnologia avançada que reduz linhas de expressão e manchas, disponível em diferentes versões para cada tipo de pele." },
      { name: "Maquiagem Profissional", description: "Linha completa de maquiagem de alta cobertura e durabilidade, desenvolvida para todos os tons de pele, incluindo bases, batons, sombras e muito mais." },
      { name: "Fragrâncias", description: "Perfumes femininos e masculinos sofisticados, criados por perfumistas renomados com ingredientes de primeira linha." },
      { name: "Cuidados Corporais", description: "Hidratantes, esfoliantes e produtos de banho com texturas luxuosas e fragrâncias exclusivas." },
      { name: "Cuidados Masculinos MKMen®", description: "Linha completa de skincare e grooming desenvolvida especificamente para as necessidades da pele masculina." },
      { name: "Linha Botanical Effects®", description: "Produtos com ingredientes botânicos para peles jovens e sensíveis, com fórmulas suaves e eficazes." }
    ],
    compensationPlan: {
      type: "Marketing Multinível Tradicional",
      levels: 13,
      bonuses: ["Comissão de Vendas (até 50%)", "Bônus de Recrutamento", "Bônus de Equipe", "Programa Cadillac Rosa", "Prêmios de Reconhecimento", "Joias Mary Kay", "Viagens Internacionais", "Bônus de Diretora"],
      requirements: ["Kit de Beleza Inicial ($100+)", "Pedidos mínimos trimestrais", "Desenvolvimento de equipe", "Metas de vendas para níveis"],
      pros: ["Marca icônica e respeitada mundialmente", "Foco genuíno em empoderamento feminino", "Produtos de alta qualidade", "Reconhecimento constante e motivador", "Cultura de apoio entre consultoras", "Flexibilidade de horários"],
      cons: ["Mercado de cosméticos muito competitivo", "Necessidade de manter estoque", "Pressão por metas de vendas", "Saturação em algumas regiões"]
    },
    reviews: [
      { name: "Claudia Martins", avatar: "/placeholder.svg", rating: 5, date: "2024-01-10", comment: "Mary Kay literalmente mudou minha vida! O empoderamento que a empresa proporciona é único. Conquistei meu Cadillac rosa e sou uma mulher realizada profissionalmente.", helpful: 148 },
      { name: "Teresa Souza", avatar: "/placeholder.svg", rating: 5, date: "2024-01-04", comment: "Produtos excelentes e uma empresa que genuinamente valoriza as mulheres. A cultura Mary Kay é de sororidade e apoio mútuo.", helpful: 112 },
      { name: "Amanda Silva", avatar: "/placeholder.svg", rating: 4, date: "2024-01-01", comment: "Amo fazer parte da Mary Kay. Os produtos são maravilhosos e o ambiente é muito positivo. Minha autoestima melhorou muito!", helpful: 89 },
      { name: "Renata Gomes", avatar: "/placeholder.svg", rating: 4, date: "2023-12-28", comment: "Trabalhar com Mary Kay me deu flexibilidade para cuidar dos meus filhos e ainda ter uma renda. Os treinamentos são excelentes.", helpful: 76 }
    ],
    stats: { consultants: "3.500.000+", countries: 35, revenue: "US$ 3.0 bilhões", growth: "+5%", employees: "5.000+", foundedYear: 1963 },
    awards: ["Fortune 500", "Forbes Best Direct Selling", "Top Employer for Women", "Ethical Company Award", "Prêmio de Sustentabilidade"],
    certifications: ["Cruelty-Free (em mercados selecionados)", "FDA Compliant", "GMP Certified", "ISO 9001", "PETA Certified"]
  },
  "amway": {
    id: 7,
    name: "Amway",
    slug: "amway",
    logo: amwayLogo,
    position: 7,
    votes: 1654,
    rating: 4.2,
    category: "Produtos Diversos & Nutrição",
    founded: "1959",
    country: "Estados Unidos",
    headquarters: "Ada, Michigan, EUA",
    website: "https://www.amway.com.br",
    description: "A pioneira e maior empresa de Marketing de Rede do mundo",
    fullDescription: "A Amway é considerada a pioneira do marketing multinível moderno e a maior empresa de vendas diretas do mundo em termos de receita. Fundada em 1959 por Jay Van Andel e Rich DeVos em Ada, Michigan, EUA, a empresa nasceu literalmente em um porão com um único produto de limpeza e cresceu para se tornar um império global presente em mais de 100 países.",
    history: "A história da Amway começou quando dois amigos de infância, Jay Van Andel e Rich DeVos, decidiram criar sua própria empresa de vendas diretas. Eles haviam trabalhado anteriormente com Nutrilite (que posteriormente seria adquirida pela Amway) e viram o potencial do modelo de negócio. Em 1959, lançaram a Amway Corporation com um único produto: o LOC (Liquid Organic Cleaner), um detergente biodegradável revolucionário para a época. O nome Amway vem de 'American Way' (Jeito Americano), representando os valores de livre iniciativa e empreendedorismo. Ao longo das décadas de 1960 e 1970, a empresa cresceu exponencialmente, primeiro nos EUA e depois internacionalmente. Em 1972, a Amway adquiriu a Nutrilite, obtendo acesso à linha de suplementos que se tornaria sua principal marca. A empresa resistiu a vários desafios legais que ajudaram a legitimar o modelo de marketing multinível. Em 1979, a Federal Trade Commission dos EUA determinou que a Amway era uma empresa legítima, estabelecendo precedentes importantes para toda a indústria. Hoje, a Amway permanece uma empresa familiar, com os descendentes dos fundadores mantendo o legado.",
    mission: "Ajudar as pessoas a viverem vidas melhores, oferecendo-lhes a oportunidade de iniciar seu próprio negócio apoiado por produtos de qualidade superior.",
    vision: "Ser a empresa de vendas diretas mais respeitada do mundo, reconhecida pela qualidade de nossos produtos e pela integridade de nosso modelo de negócio.",
    highlights: ["65+ anos de história pioneira", "Maior empresa de MMN do mundo", "Presente em 100+ países", "Pioneira do marketing multinível", "3+ milhões de empresários", "Nutrilite #1 em vitaminas", "US$ 8.5+ bilhões em receita", "Empresa familiar há 3 gerações"],
    products: [
      { name: "Nutrilite™", description: "A marca #1 do mundo em vitaminas e suplementos dietéticos. Produtos cultivados em fazendas orgânicas próprias com rastreabilidade do plantio ao produto final." },
      { name: "Artistry™", description: "Linha de beleza premium com tecnologia anti-idade avançada, incluindo skincare, maquiagem e fragrâncias sofisticadas." },
      { name: "eSpring™", description: "Sistema de purificação de água líder de mercado, combinando filtro de carbono com tecnologia UV para água pura e saudável." },
      { name: "Atmosphere™", description: "Purificadores de ar com tecnologia HEPA que removem até 99,99% dos contaminantes do ar." },
      { name: "Amway Home™", description: "Linha de produtos de limpeza concentrados, biodegradáveis e eficazes, incluindo o icônico LOC." },
      { name: "XS™ Energy", description: "Bebidas energéticas e suplementos para performance atlética, sem açúcar e com vitaminas B." }
    ],
    compensationPlan: {
      type: "Níveis com Breakaway",
      levels: 15,
      bonuses: ["Bônus de Performance (até 25%)", "Bônus de Liderança", "Ruby Bonus", "Emerald Bonus", "Diamond Bonus", "Executive Diamond", "Crown Ambassador", "Viagens de Reconhecimento"],
      requirements: ["Cadastro como Empresário Amway", "Volume pessoal e de grupo mensal", "Qualificações de liderança progressivas", "Manutenção de qualificação anual"],
      pros: ["Empresa mais estável e antiga do setor", "Produtos de altíssima qualidade comprovada", "Histórico de 65 anos de sucesso", "Suporte mundial incomparável", "Treinamentos de classe mundial", "Diversidade de produtos"],
      cons: ["Plano de compensação mais complexo", "Crescimento pode ser mais lento", "Alta competição interna", "Exige dedicação de longo prazo"]
    },
    reviews: [
      { name: "José Carlos", avatar: "/placeholder.svg", rating: 5, date: "2024-01-09", comment: "Empresa sólida como uma rocha, com 65 anos de história comprovada. Os produtos Nutrilite são excepcionais e realmente fazem diferença na saúde.", helpful: 139 },
      { name: "Maria Helena", avatar: "/placeholder.svg", rating: 4, date: "2024-01-03", comment: "Tradição e qualidade incomparáveis. O plano é complexo no início, mas funciona muito bem para quem se dedica a entender e aplicar.", helpful: 96 },
      { name: "Eduardo Lima", avatar: "/placeholder.svg", rating: 4, date: "2023-12-30", comment: "Amway é uma escola de empreendedorismo. Aprendi muito sobre liderança e negócios trabalhando com a empresa.", helpful: 82 },
      { name: "Sonia Pereira", avatar: "/placeholder.svg", rating: 5, date: "2023-12-27", comment: "Os produtos falam por si. Uso Nutrilite há 20 anos e minha saúde melhorou drasticamente. Confio plenamente na qualidade.", helpful: 108 }
    ],
    stats: { consultants: "3.000.000+", countries: 100, revenue: "US$ 8.5 bilhões", growth: "+4%", employees: "17.000+", foundedYear: 1959 },
    awards: ["#1 Direct Selling News Global 100", "Forbes Most Valuable Private Companies", "Best Workplace", "Sustainability Leadership Award", "Top Employer Global"],
    certifications: ["NSF Certified", "USDA Organic", "Non-GMO Project", "Rainforest Alliance", "ISO 14001"]
  },
  "ozonteck": {
    id: 8,
    name: "Ozonteck",
    slug: "ozonteck",
    logo: ozonteckLogo,
    position: 8,
    votes: 1542,
    rating: 4.1,
    category: "Ozônio & Tecnologia Sustentável",
    founded: "2020",
    country: "Brasil",
    headquarters: "São Paulo, Brasil",
    website: "https://www.ozonteck.com.br",
    description: "Empresa brasileira inovadora em tecnologia de ozônio para saúde e sustentabilidade",
    fullDescription: "A Ozonteck é uma empresa brasileira inovadora que combina tecnologia de ozônio com um modelo de negócio de marketing de rede. Fundada em 2020 em São Paulo, a empresa se especializou em desenvolver e comercializar produtos que utilizam as propriedades únicas do ozônio para purificação, higienização e bem-estar. Apesar de jovem, a Ozonteck já conquistou um espaço significativo no mercado brasileiro, atraindo milhares de empreendedores interessados em um negócio sustentável e inovador.",
    history: "A Ozonteck nasceu em 2020, em plena pandemia de COVID-19, quando a demanda por produtos de higienização e purificação atingiu níveis sem precedentes. Seus fundadores, com experiência no setor de marketing de rede e expertise em tecnologia de ozônio, identificaram uma oportunidade única: oferecer ao mercado brasileiro produtos baseados em ozônio, conhecidos por suas propriedades antibacterianas, antivirais e desodorizantes, através de um modelo de vendas diretas. O timing foi perfeito. Com a crescente preocupação com higiene e qualidade do ar, os produtos da Ozonteck encontraram um mercado receptivo. A empresa investiu em educação, explicando os benefícios do ozônio de forma acessível, e em treinamento de seus distribuidores. Em poucos anos, a Ozonteck expandiu de uma startup para uma empresa com dezenas de milhares de distribuidores em todo o Brasil. A empresa também se posicionou fortemente no tema sustentabilidade, já que o ozônio é uma molécula natural que não deixa resíduos químicos prejudiciais ao meio ambiente.",
    mission: "Democratizar o acesso à tecnologia de ozônio, promovendo saúde, bem-estar e sustentabilidade através de produtos inovadores e uma oportunidade de negócio acessível.",
    vision: "Ser a empresa líder em tecnologia de ozônio na América Latina, reconhecida pela inovação, qualidade e impacto positivo na vida das pessoas e no meio ambiente.",
    highlights: ["Tecnologia de ozônio sustentável", "Inovação 100% brasileira", "Crescimento acelerado (+150%)", "Foco em sustentabilidade ambiental", "50.000+ distribuidores", "Produtos patenteados", "Certificação INMETRO", "Expansão para América Latina"],
    products: [
      { name: "Ozonizadores de Água", description: "Dispositivos que purificam a água através do ozônio, eliminando bactérias, vírus e impurezas sem uso de produtos químicos. Ideal para residências e estabelecimentos comerciais." },
      { name: "Purificadores de Ar com Ozônio", description: "Equipamentos que purificam o ar ambiente, eliminando odores, mofo, bactérias e vírus, criando um ambiente mais saudável." },
      { name: "Ozonizadores Portáteis", description: "Dispositivos compactos para higienização de objetos, alimentos e superfícies, perfeitos para uso diário e viagens." },
      { name: "Linha de Saúde e Bem-estar", description: "Produtos que utilizam ozônio terapêutico para tratamentos de pele, relaxamento e bem-estar geral." },
      { name: "Equipamentos Profissionais", description: "Geradores de ozônio de alta capacidade para uso comercial, industrial e agrícola." },
      { name: "Acessórios e Reposição", description: "Filtros, peças de reposição e acessórios para manutenção dos equipamentos." }
    ],
    compensationPlan: {
      type: "Binário Moderno",
      levels: 12,
      bonuses: ["Bônus de Vendas Diretas (até 30%)", "Bônus de Equipe Binária", "Bônus de Matching (até 5 gerações)", "Bônus de Carreira", "Viagens de Incentivo", "Bônus de Primeiro Pedido", "Bônus de Liderança", "Pool de Líderes"],
      requirements: ["Kit de Adesão acessível", "Pontuação pessoal mensal", "Desenvolvimento de rede equilibrada", "Ativação mensal"],
      pros: ["Mercado inovador e em crescimento", "Empresa jovem com muito potencial", "Produtos diferenciados e únicos", "Oportunidade de ser pioneiro", "Tema sustentabilidade em alta", "Investimento inicial baixo"],
      cons: ["Empresa relativamente nova no mercado", "Produto de nicho ainda pouco conhecido", "Necessidade de educação do consumidor", "Histórico ainda limitado"]
    },
    reviews: [
      { name: "Fernando Lima", avatar: "/placeholder.svg", rating: 4, date: "2024-01-12", comment: "Produto inovador e diferente de tudo que já vi! A tecnologia de ozônio tem muito potencial e a empresa está crescendo rapidamente.", helpful: 72 },
      { name: "Renata Campos", avatar: "/placeholder.svg", rating: 4, date: "2024-01-06", comment: "Empresa jovem mas com muito potencial. Estou apostando no crescimento e os resultados têm sido promissores.", helpful: 58 },
      { name: "Marcio Souza", avatar: "/placeholder.svg", rating: 5, date: "2024-01-02", comment: "O ozonizador de água mudou a qualidade da água da minha casa. Produto excepcional e a oportunidade de negócio é real.", helpful: 65 },
      { name: "Carla Mendonça", avatar: "/placeholder.svg", rating: 4, date: "2023-12-29", comment: "Gosto da proposta sustentável da empresa. Os produtos funcionam e o suporte da upline é muito bom.", helpful: 48 }
    ],
    stats: { consultants: "50.000+", countries: 1, revenue: "R$ 100 milhões", growth: "+150%", employees: "200+", foundedYear: 2020 },
    awards: ["Startup do Ano 2022", "Prêmio Inovação Verde", "Selo Sustentabilidade ABVD", "Destaque Empreendedorismo"],
    certifications: ["INMETRO", "ANVISA", "ISO 9001", "Selo Verde"]
  },
  "coway": {
    id: 9,
    name: "Coway",
    slug: "coway",
    logo: cowayLogo,
    position: 9,
    votes: 1432,
    rating: 4.0,
    category: "Purificação & Bem-estar Doméstico",
    founded: "1989",
    country: "Coreia do Sul",
    headquarters: "Seul, Coreia do Sul",
    website: "https://www.coway.com",
    description: "Líder mundial em purificadores de água e ar com tecnologia coreana de ponta",
    fullDescription: "A Coway Co., Ltd. é uma empresa sul-coreana líder mundial em produtos de purificação de água e ar, fundada em 1989 em Seul. Conhecida como 'The Best Life Solution Company', a Coway revolucionou o mercado de purificação doméstica com tecnologias inovadoras e um modelo de negócio único que combina venda de produtos com serviços de manutenção e aluguel. A empresa é especialmente reconhecida por sua abordagem científica e design premiado.",
    history: "A Coway foi fundada em 1989 na Coreia do Sul, em uma época em que a qualidade da água e do ar nas grandes cidades asiáticas era uma preocupação crescente. A empresa começou focada em purificadores de água e rapidamente se destacou pela qualidade superior de seus produtos. Nos anos 1990, a Coway desenvolveu um modelo de negócio inovador: o sistema de 'Cody' (Coway Lady), onde consultoras visitam regularmente os clientes para manutenção e troca de filtros. Este modelo criou uma relação de confiança duradoura com os consumidores. Em 2000, a empresa expandiu para purificadores de ar, e posteriormente para colchões de bem-estar, bidês eletrônicos e outros produtos de saúde doméstica. A Coway abriu capital na Bolsa de Valores da Coreia e começou sua expansão internacional nos anos 2010. Hoje, a empresa opera em diversos países da Ásia, Europa e Américas, mantendo sua reputação de excelência tecnológica e design premiado. A Coway também é reconhecida por seus esforços em sustentabilidade, com programas de reciclagem de filtros e produtos eco-friendly.",
    mission: "Criar uma vida melhor para nossos clientes através de produtos inovadores de purificação e bem-estar, apoiados por serviço excepcional.",
    vision: "Ser a empresa global líder em soluções de vida saudável, transformando lares em santuários de bem-estar.",
    highlights: ["35+ anos de inovação coreana", "Líder mundial em purificadores", "Design premiado internacionalmente", "Modelo de serviço único 'Cody'", "Tecnologia de ponta comprovada", "Listada na bolsa de Seul", "Presente em 40+ países", "7+ milhões de clientes ativos"],
    products: [
      { name: "Purificadores de Água", description: "Sistemas de purificação com tecnologia de osmose reversa e nanotrap, fornecendo água pura e segura diretamente da torneira. Modelos com água gelada e quente." },
      { name: "Purificadores de Ar", description: "Purificadores com filtros HEPA e tecnologia de plasma, removendo 99,99% de partículas, vírus, bactérias e alérgenos do ar." },
      { name: "Coway Airmega", description: "Linha premium de purificadores de ar inteligentes com conectividade IoT, design premiado e cobertura para grandes ambientes." },
      { name: "Bidês Eletrônicos", description: "Bidês com tecnologia avançada de higienização, água aquecida e funções de massagem, promovendo higiene e conforto." },
      { name: "Colchões de Bem-estar", description: "Colchões com tecnologia de purificação de ar integrada e materiais hipoalergênicos para sono saudável." },
      { name: "Máquinas de Sucos e Alimentos", description: "Eletrodomésticos de cozinha com tecnologia de extração a frio para sucos nutritivos e preparação de alimentos saudáveis." }
    ],
    compensationPlan: {
      type: "Venda Direta com Serviço",
      levels: 10,
      bonuses: ["Comissão por Venda/Aluguel", "Bônus de Manutenção Recorrente", "Bônus de Equipe", "Incentivos Trimestrais", "Viagens de Reconhecimento", "Bônus de Renovação", "Programa de Carreira", "Pool de Liderança"],
      requirements: ["Treinamento técnico obrigatório", "Certificação de produto", "Manutenção de carteira de clientes", "Metas de vendas/aluguéis"],
      pros: ["Produtos de altíssima qualidade tecnológica", "Modelo de renda recorrente (manutenção)", "Marca premium e respeitada", "Design diferenciado e premiado", "Produtos essenciais para saúde", "Baixa concorrência no segmento"],
      cons: ["Produtos de alto valor unitário", "Necessidade de conhecimento técnico", "Mercado ainda em desenvolvimento no Brasil", "Exige visitas para manutenção"]
    },
    reviews: [
      { name: "Kenji Yamamoto", avatar: "/placeholder.svg", rating: 5, date: "2024-01-11", comment: "Tecnologia coreana de primeiro mundo! O purificador de água mudou a qualidade de vida da minha família. Vale cada centavo investido.", helpful: 89 },
      { name: "Laura Medeiros", avatar: "/placeholder.svg", rating: 4, date: "2024-01-05", comment: "Produtos excepcionais com design lindo. A manutenção regular dá segurança de que sempre temos água e ar puros.", helpful: 67 },
      { name: "Henrique Barros", avatar: "/placeholder.svg", rating: 4, date: "2024-01-02", comment: "O modelo de renda recorrente é interessante. Depois de construir uma carteira de clientes, a renda fica mais estável.", helpful: 54 },
      { name: "Priscila Santos", avatar: "/placeholder.svg", rating: 5, date: "2023-12-28", comment: "Meu purificador de ar Coway é incrível! Minha alergia melhorou muito desde que comecei a usar.", helpful: 78 }
    ],
    stats: { consultants: "150.000+", countries: 40, revenue: "US$ 2.8 bilhões", growth: "+15%", employees: "4.500+", foundedYear: 1989 },
    awards: ["Red Dot Design Award", "iF Design Award", "CES Innovation Award", "Good Design Award Japan", "Green Company of the Year"],
    certifications: ["NSF Certified", "WQA Gold Seal", "Energy Star", "ISO 9001", "ISO 14001"]
  },
  "4life": {
    id: 10,
    name: "4Life Research",
    slug: "4life",
    logo: fourLifeLogo,
    position: 10,
    votes: 1387,
    rating: 4.0,
    category: "Imunologia & Saúde",
    founded: "1998",
    country: "Estados Unidos",
    headquarters: "Sandy, Utah, EUA",
    website: "https://www.4life.com",
    description: "Pioneira mundial em produtos de transferência de fator para sistema imunológico",
    fullDescription: "A 4Life Research é uma empresa americana especializada em produtos para fortalecimento do sistema imunológico, fundada em 1998 por David e Bianca Lisonbee em Sandy, Utah. A empresa é mundialmente reconhecida por ter licenciado e popularizado a tecnologia de Fatores de Transferência, moléculas que 'ensinam' o sistema imunológico a reconhecer, responder e lembrar de ameaças à saúde.",
    history: "A história da 4Life começou quando David Lisonbee descobriu a pesquisa sobre Fatores de Transferência, moléculas imunológicas descobertas pelo Dr. H. Sherwood Lawrence em 1949. Lisonbee viu o potencial revolucionário desta tecnologia e, em 1998, fundou a 4Life Research para torná-la acessível ao público em geral. O primeiro produto, Transfer Factor Classic, foi lançado em 1998 e rapidamente ganhou popularidade. Em 1999, a 4Life licenciou a tecnologia para extrair Fatores de Transferência da gema de ovo, complementando a fonte original do colostro bovino. Esta combinação exclusiva, chamada Tri-Factor Formula, tornou-se a base de toda a linha de produtos. A empresa expandiu globalmente nos anos 2000, entrando em mercados da América Latina, Ásia e Europa. A 4Life investiu pesadamente em pesquisa, registrando múltiplas patentes e publicando estudos em revistas científicas. Hoje, a empresa opera em mais de 50 países e mantém seu compromisso com a ciência imunológica.",
    mission: "Juntos, construindo pessoas através da ciência, sucesso e serviço.",
    vision: "Ser a empresa líder mundial em produtos para o sistema imunológico, transformando vidas através da ciência do Fator de Transferência.",
    highlights: ["26+ anos focados em imunologia", "Tecnologia Fator de Transferência exclusiva", "Múltiplas patentes científicas", "Publicações em revistas científicas", "Presente em 50+ países", "Compromisso com pesquisa contínua", "Produtos certificados e testados", "Forte comunidade de distribuidores"],
    products: [
      { name: "4Life Transfer Factor Plus", description: "O produto mais avançado da linha, combinando Fatores de Transferência com outros nutrientes para suporte máximo ao sistema imunológico." },
      { name: "4Life Transfer Factor Classic", description: "O produto original que iniciou a revolução, contendo Fatores de Transferência do colostro bovino." },
      { name: "4Life Transfer Factor Tri-Factor Formula", description: "Combinação exclusiva de Fatores de Transferência do colostro e da gema de ovo para suporte imunológico completo." },
      { name: "RiteStart", description: "Multivitamínico completo com Transfer Factor para suporte nutricional diário." },
      { name: "4LifeTransform", description: "Linha de controle de peso com suporte imunológico integrado." },
      { name: "Energy Go Stix", description: "Bebida energética saudável com vitaminas, minerais e Fatores de Transferência." }
    ],
    compensationPlan: {
      type: "Uninível com Bônus Adicionais",
      levels: 10,
      bonuses: ["Bônus de Varejo (até 25%)", "Bônus de Equipe", "Bônus de Liderança", "International Diamond Bonus", "Power Pool", "Rapid Rewards", "Viagens Internacionais", "Presidential Diamond Bonus"],
      requirements: ["Cadastro como afiliado", "Volume pessoal mínimo (100 LP)", "Desenvolvimento de equipe", "Qualificação mensal"],
      pros: ["Produto único e patenteado", "Base científica sólida", "Nicho de mercado específico", "Empresa estável com 26 anos", "Treinamentos de qualidade", "Comunidade engajada"],
      cons: ["Produto de nicho (imunologia)", "Necessidade de educação científica", "Competição com suplementos genéricos", "Preço pode ser barreira"]
    },
    reviews: [
      { name: "Marcos Ribeiro", avatar: "/placeholder.svg", rating: 5, date: "2024-01-10", comment: "Os produtos de Transfer Factor mudaram minha saúde! Meu sistema imunológico está muito mais forte desde que comecei a usar.", helpful: 82 },
      { name: "Silvia Carvalho", avatar: "/placeholder.svg", rating: 4, date: "2024-01-04", comment: "Empresa séria com ciência por trás dos produtos. A diferença no meu bem-estar é perceptível.", helpful: 65 },
      { name: "Roberto Nunes", avatar: "/placeholder.svg", rating: 4, date: "2024-01-01", comment: "Trabalho com 4Life há 10 anos. É uma empresa sólida e os produtos realmente funcionam.", helpful: 58 },
      { name: "Lucia Ferreira", avatar: "/placeholder.svg", rating: 5, date: "2023-12-27", comment: "Desde que comecei a usar Transfer Factor, não fico mais doente. Produto excepcional!", helpful: 72 }
    ],
    stats: { consultants: "400.000+", countries: 50, revenue: "US$ 400 milhões", growth: "+8%", employees: "500+", foundedYear: 1998 },
    awards: ["DSN Global 100", "Best Immune Support Product", "MLM Insider Company of the Year", "Utah Business Awards"],
    certifications: ["NSF Certified", "GMP Certified", "BSCG Certified Drug Free", "Kosher Certified"]
  },
  "infinitus": {
    id: 11,
    name: "Infinitus",
    slug: "infinitus",
    logo: infinitusLogo,
    position: 11,
    votes: 1298,
    rating: 4.0,
    category: "Medicina Tradicional Chinesa",
    founded: "1992",
    country: "China",
    headquarters: "Guangzhou, China",
    website: "https://www.infinitus.com.cn",
    description: "Líder mundial em produtos de saúde baseados na Medicina Tradicional Chinesa",
    fullDescription: "A Infinitus é uma empresa chinesa líder mundial em produtos de saúde e bem-estar baseados na sabedoria milenar da Medicina Tradicional Chinesa (MTC). Fundada em 1992 em Guangzhou, China, a empresa é parte do grupo Lee Kum Kee, famoso mundialmente pelo molho de ostra. A Infinitus combina conhecimentos ancestrais chineses com tecnologia moderna para criar produtos únicos que promovem saúde holística.",
    history: "A história da Infinitus está intimamente ligada à família Lee e seu compromisso com a herança cultural chinesa. Em 1992, o grupo Lee Kum Kee, já centenário e famoso globalmente por seus condimentos, decidiu expandir para o setor de saúde. A motivação veio de Lee Man Tat, chairman do grupo, que acreditava que a Medicina Tradicional Chinesa tinha muito a oferecer ao mundo moderno. A Infinitus foi criada para traduzir esse conhecimento milenar em produtos acessíveis e eficazes. A empresa investiu pesadamente em pesquisa, estabelecendo parcerias com universidades e institutos de pesquisa chineses. Em 2003, a Infinitus foi autorizada pelo governo chinês para operar no modelo de vendas diretas, tornando-se uma das primeiras empresas do setor no país. Desde então, a empresa cresceu exponencialmente, tornando-se uma das maiores empresas de vendas diretas da Ásia. A Infinitus é especialmente conhecida por produtos como o Changyingtai e outros suplementos que combinam ervas tradicionais com processos de fabricação modernos.",
    mission: "Promover a filosofia de saúde da Medicina Tradicional Chinesa globalmente, ajudando as pessoas a alcançarem equilíbrio e bem-estar.",
    vision: "Ser a empresa líder mundial em produtos de saúde baseados na Medicina Tradicional Chinesa, tornando a sabedoria ancestral acessível a todos.",
    highlights: ["32+ anos de tradição em MTC", "Parte do grupo Lee Kum Kee", "Tecnologia + sabedoria ancestral", "Pesquisa científica robusta", "Uma das maiores da Ásia", "Expansão global contínua", "Centros de pesquisa próprios", "Produtos patenteados"],
    products: [
      { name: "Changyingtai", description: "Produto icônico à base de ervas chinesas para fortalecer o sistema imunológico e promover vitalidade geral." },
      { name: "Suplementos de Ervas Chinesas", description: "Linha completa de suplementos baseados em fórmulas tradicionais chinesas, modernizadas para máxima eficácia." },
      { name: "Produtos para Circulação", description: "Fórmulas tradicionais para melhorar a circulação sanguínea e o fluxo de energia (Qi)." },
      { name: "Produtos de Beleza Herbal", description: "Cosméticos que combinam ervas chinesas com tecnologia moderna para beleza natural." },
      { name: "Alimentos Funcionais", description: "Alimentos e bebidas enriquecidos com ingredientes da MTC para saúde diária." },
      { name: "Produtos para Sono e Relaxamento", description: "Fórmulas naturais para melhorar a qualidade do sono e reduzir o estresse." }
    ],
    compensationPlan: {
      type: "Multinível Asiático",
      levels: 12,
      bonuses: ["Bônus de Vendas Diretas", "Bônus de Equipe", "Bônus de Liderança", "Bônus de Desenvolvimento", "Viagens de Incentivo", "Bônus de Graduação", "Pool de Líderes", "Reconhecimento Especial"],
      requirements: ["Cadastro como distribuidor", "Compras pessoais mensais", "Desenvolvimento de rede", "Participação em treinamentos"],
      pros: ["Produtos únicos baseados em MTC", "Empresa sólida com apoio de grupo centenário", "Nicho de mercado diferenciado", "Forte presença na Ásia", "Crescimento consistente", "Tradição + modernidade"],
      cons: ["Mais conhecida na Ásia que no Ocidente", "Produtos podem parecer exóticos", "Necessidade de educação sobre MTC", "Menor presença no Brasil"]
    },
    reviews: [
      { name: "Chen Wei", avatar: "/placeholder.svg", rating: 5, date: "2024-01-08", comment: "Os produtos Infinitus são baseados em milhares de anos de sabedoria chinesa. Minha saúde melhorou significativamente desde que comecei a usar.", helpful: 76 },
      { name: "Lucia Chang", avatar: "/placeholder.svg", rating: 4, date: "2024-01-03", comment: "Empresa séria com produtos de qualidade. A abordagem da Medicina Tradicional Chinesa é muito eficaz.", helpful: 58 },
      { name: "Pedro Nakamura", avatar: "/placeholder.svg", rating: 4, date: "2023-12-30", comment: "Gosto da filosofia da empresa de combinar tradição com modernidade. Os produtos realmente funcionam.", helpful: 45 },
      { name: "Ana Li", avatar: "/placeholder.svg", rating: 5, date: "2023-12-26", comment: "Changyingtai é excepcional! Sinto mais energia e disposição desde que comecei a tomar.", helpful: 62 }
    ],
    stats: { consultants: "800.000+", countries: 25, revenue: "US$ 4.5 bilhões", growth: "+10%", employees: "6.000+", foundedYear: 1992 },
    awards: ["China Top 10 Direct Selling", "Asia Excellence Award", "Innovation in Traditional Medicine", "Sustainable Business Award"],
    certifications: ["GMP China", "ISO 9001", "CFDA Approved", "Organic Certified"]
  },
  "jan-rose": {
    id: 12,
    name: "Jan Rosê",
    slug: "jan-rose",
    logo: janroseLogo,
    position: 12,
    votes: 1187,
    rating: 3.9,
    category: "Cosméticos Naturais Brasileiros",
    founded: "2015",
    country: "Brasil",
    headquarters: "Curitiba, Paraná, Brasil",
    website: "https://www.janrose.com.br",
    description: "Empresa brasileira de cosméticos naturais com foco em ingredientes da biodiversidade nacional",
    fullDescription: "A Jan Rosê é uma empresa brasileira de cosméticos fundada em 2015 em Curitiba, Paraná. A empresa se destaca por utilizar ingredientes da rica biodiversidade brasileira em suas fórmulas, oferecendo produtos naturais e veganos. Com um modelo de negócio de venda direta, a Jan Rosê conquistou um espaço significativo no mercado brasileiro de cosméticos, atraindo empreendedoras que se identificam com a proposta de beleza natural e sustentável.",
    history: "A Jan Rosê nasceu em 2015 do sonho de suas fundadoras de criar uma marca de cosméticos que valorizasse a biodiversidade brasileira e oferecesse produtos verdadeiramente naturais. O nome 'Jan Rosê' foi escolhido para transmitir delicadeza e sofisticação, características que definem os produtos da marca. Nos primeiros anos, a empresa focou no desenvolvimento de fórmulas exclusivas utilizando ingredientes como açaí, cupuaçu, buriti, castanha do Brasil e outros tesouros da Amazônia e do Cerrado. A qualidade dos produtos rapidamente atraiu consumidoras que buscavam alternativas aos cosméticos convencionais. Em 2018, a Jan Rosê adotou o modelo de venda direta, permitindo que milhares de mulheres se tornassem consultoras da marca. O crescimento foi expressivo, especialmente entre o público que valoriza produtos veganos e cruelty-free. A empresa também investiu em certificações e em práticas sustentáveis, desde a aquisição de ingredientes de comunidades locais até embalagens eco-friendly.",
    mission: "Oferecer cosméticos naturais de alta qualidade que valorizem a biodiversidade brasileira, proporcionando beleza saudável e oportunidades de renda.",
    vision: "Ser reconhecida como a principal marca brasileira de cosméticos naturais, símbolo de qualidade, sustentabilidade e empreendedorismo feminino.",
    highlights: ["9+ anos de mercado nacional", "Ingredientes da biodiversidade brasileira", "Produtos veganos e cruelty-free", "Embalagens sustentáveis", "Foco em empreendedorismo feminino", "Parcerias com comunidades locais", "Fórmulas exclusivas patenteadas", "Rápido crescimento no mercado"],
    products: [
      { name: "Linha Amazônica", description: "Produtos com ingredientes como açaí, cupuaçu e andiroba, oferecendo hidratação profunda e proteção para pele e cabelos." },
      { name: "Skincare Natural", description: "Linha completa de cuidados faciais com ingredientes botânicos brasileiros, incluindo séruns, cremes e máscaras." },
      { name: "Maquiagem Mineral", description: "Maquiagem com pigmentos naturais e minerais, livre de parabenos e ingredientes sintéticos." },
      { name: "Linha Capilar", description: "Shampoos, condicionadores e tratamentos com óleos nativos brasileiros para todos os tipos de cabelo." },
      { name: "Aromaterapia", description: "Óleos essenciais e produtos aromáticos extraídos de plantas brasileiras para bem-estar e relaxamento." },
      { name: "Linha Corporal", description: "Hidratantes, esfoliantes e óleos corporais com fragrâncias e ingredientes tropicais." }
    ],
    compensationPlan: {
      type: "Marketing Multinível",
      levels: 8,
      bonuses: ["Comissão de Vendas (até 35%)", "Bônus de Equipe", "Bônus de Liderança", "Viagens de Incentivo", "Prêmios de Reconhecimento", "Bônus de Primeiro Pedido", "Bônus de Recompra", "Incentivos Mensais"],
      requirements: ["Kit de Início acessível", "Pedidos mínimos trimestrais", "Desenvolvimento de equipe", "Participação em treinamentos"],
      pros: ["Produtos naturais de qualidade", "Proposta sustentável atrativa", "Investimento inicial baixo", "Forte apelo feminino", "Mercado de cosméticos naturais em crescimento", "Empresa brasileira acessível"],
      cons: ["Empresa relativamente nova", "Menos conhecida nacionalmente", "Menor variedade que grandes marcas", "Distribuição ainda concentrada"]
    },
    reviews: [
      { name: "Camila Vieira", avatar: "/placeholder.svg", rating: 5, date: "2024-01-09", comment: "Apaixonada pelos produtos Jan Rosê! São naturais, veganos e realmente funcionam. Minha pele nunca esteve tão bonita.", helpful: 58 },
      { name: "Fernanda Lopes", avatar: "/placeholder.svg", rating: 4, date: "2024-01-04", comment: "Amo a proposta da marca de valorizar ingredientes brasileiros. Os produtos têm ótima qualidade.", helpful: 45 },
      { name: "Bruna Silva", avatar: "/placeholder.svg", rating: 4, date: "2024-01-01", comment: "Trabalhar com Jan Rosê me permite vender produtos que eu acredito. A sustentabilidade é real, não é só marketing.", helpful: 38 },
      { name: "Mariana Costa", avatar: "/placeholder.svg", rating: 5, date: "2023-12-28", comment: "Os óleos da linha Amazônica são incríveis! Hidratação potente com ingredientes 100% naturais.", helpful: 52 }
    ],
    stats: { consultants: "30.000+", countries: 1, revenue: "R$ 50 milhões", growth: "+80%", employees: "150+", foundedYear: 2015 },
    awards: ["Prêmio Beleza Natural", "Selo Cruelty-Free", "Destaque Empreendedorismo Feminino", "Prêmio Sustentabilidade Cosmética"],
    certifications: ["Cruelty-Free International", "Vegano Certificado", "ANVISA", "IBD Orgânico"]
  },
  "melaleuca": {
    id: 13,
    name: "Melaleuca",
    slug: "melaleuca",
    logo: melaleucaLogo,
    position: 13,
    votes: 1156,
    rating: 3.9,
    category: "Bem-estar & Produtos Domésticos",
    founded: "1985",
    country: "Estados Unidos",
    headquarters: "Idaho Falls, Idaho, EUA",
    website: "https://www.melaleuca.com",
    description: "Empresa americana focada em produtos de bem-estar e domésticos mais seguros e eficazes",
    fullDescription: "A Melaleuca Inc. é uma empresa americana de bem-estar fundada em 1985 por Frank L. VanderSloot em Idaho Falls, Idaho. Diferente de outras empresas de venda direta, a Melaleuca se autodenomina uma 'consumer direct marketing company' e foca em produtos de uso diário mais seguros e eficazes que as alternativas convencionais, desde suplementos até produtos de limpeza. O nome da empresa vem da árvore Melaleuca, nativa da Austrália, cujo óleo essencial é um dos ingredientes-chave de muitos produtos.",
    history: "A Melaleuca foi fundada em 1985 quando Frank VanderSloot identificou uma oportunidade de criar produtos de consumo diário que fossem mais seguros para as famílias e para o meio ambiente. O produto inaugural foi o Melaleuca Oil, um óleo essencial da árvore de tea tree australiana, conhecido por suas propriedades antibacterianas e antifúngicas. Ao longo dos anos, a empresa expandiu sua linha para incluir mais de 400 produtos, desde suplementos nutricionais até produtos de limpeza, cuidados pessoais e cosméticos. A filosofia da Melaleuca é criar 'produtos que funcionam e que você pode confiar', eliminando ingredientes potencialmente prejudiciais comuns em produtos convencionais. A empresa desenvolveu um modelo de negócio único, focando em clientes recorrentes (membership) ao invés de recrutamento agressivo. Este modelo trouxe estabilidade e crescimento consistente. Hoje, a Melaleuca opera em diversos países e mantém seu compromisso com produtos mais seguros e eficazes.",
    mission: "Melhorar a vida das pessoas ajudando-as a alcançar seus objetivos de saúde, bem-estar e financeiros.",
    vision: "Ser a empresa líder mundial em produtos de bem-estar mais seguros e eficazes, transformando a forma como as famílias vivem e cuidam de seus lares.",
    highlights: ["39+ anos de mercado", "Óleo de Melaleuca icônico", "Modelo de membership único", "400+ produtos no portfólio", "Foco em segurança e eficácia", "Produtos eco-friendly", "Manufacturing Campus próprio", "5+ milhões de clientes"],
    products: [
      { name: "Melaleuca Oil", description: "O icônico óleo essencial de tea tree australiano, base de muitos produtos da linha, conhecido por propriedades antibacterianas e antifúngicas." },
      { name: "Peak Performance Nutrition", description: "Linha de suplementos para performance física e bem-estar, incluindo proteínas, vitaminas e minerais de alta absorção." },
      { name: "EcoSense Produtos de Limpeza", description: "Linha completa de produtos de limpeza doméstica mais seguros, concentrados e eficazes, sem químicos agressivos." },
      { name: "Sei Bella Skincare", description: "Linha de cuidados com a pele com ingredientes premium e fórmulas anti-idade avançadas." },
      { name: "Access Performance Bars", description: "Barras nutricionais que ajudam no controle de peso e performance atlética." },
      { name: "Sol-U-Guard Botanical", description: "Desinfetante botânico que elimina 99,9% de bactérias usando ingredientes derivados de plantas." }
    ],
    compensationPlan: {
      type: "Consumer Direct Marketing",
      levels: 9,
      bonuses: ["Comissão por Cliente Referido", "Bônus de Equipe", "Bônus de Liderança", "Executive Director Bonus", "Viagens de Incentivo", "Bônus de Desenvolvimento", "Bônus de Produtividade", "Incentivos Mensais"],
      requirements: ["Tornar-se cliente preferencial", "Pedido mensal mínimo (35 pontos)", "Referir novos clientes", "Desenvolvimento de equipe opcional"],
      pros: ["Foco em produtos consumíveis de recompra", "Modelo de membership estável", "Produtos de alta qualidade e mais seguros", "Menos ênfase em recrutamento", "Cliente pode participar sem vender", "Forte retenção de clientes"],
      cons: ["Requer pedido mensal mínimo", "Produtos não disponíveis no varejo", "Menos conhecido que concorrentes", "Crescimento pode ser mais lento"]
    },
    reviews: [
      { name: "Jennifer Smith", avatar: "/placeholder.svg", rating: 5, date: "2024-01-07", comment: "Uso produtos Melaleuca há 15 anos e não troco por nada! São mais seguros para minha família e realmente funcionam.", helpful: 72 },
      { name: "Carlos Mendes", avatar: "/placeholder.svg", rating: 4, date: "2024-01-02", comment: "Gosto do modelo de negócio que foca em clientes, não só em recrutamento. Os produtos são excelentes.", helpful: 58 },
      { name: "Sandra Oliveira", avatar: "/placeholder.svg", rating: 4, date: "2023-12-29", comment: "Os produtos de limpeza EcoSense são incríveis! Limpos, eficazes e seguros para crianças e pets.", helpful: 48 },
      { name: "Michael Brown", avatar: "/placeholder.svg", rating: 5, date: "2023-12-25", comment: "O óleo de Melaleuca é um must-have! Uso para tudo - desde limpeza até cuidados com a pele.", helpful: 65 }
    ],
    stats: { consultants: "1.000.000+", countries: 19, revenue: "US$ 2.0 bilhões", growth: "+5%", employees: "4.000+", foundedYear: 1985 },
    awards: ["Inc. 5000", "Direct Selling News Global 100", "Idaho Business of the Year", "Environmental Excellence Award"],
    certifications: ["EPA Safer Choice", "NSF Certified", "cGMP Facility", "ISO 9001"]
  },
  "omnilife": {
    id: 14,
    name: "Omnilife",
    slug: "omnilife",
    logo: omnilifeLogo,
    position: 14,
    votes: 1098,
    rating: 3.8,
    category: "Nutrição & Suplementos",
    founded: "1991",
    country: "México",
    headquarters: "Guadalajara, Jalisco, México",
    website: "https://www.omnilife.com",
    description: "Empresa mexicana líder em suplementos nutricionais com presença em toda América Latina",
    fullDescription: "A Omnilife é uma empresa mexicana de suplementos nutricionais fundada em 1991 por Jorge Vergara Madrigal em Guadalajara, México. A empresa se tornou uma das maiores do setor na América Latina, conhecida por sua tecnologia de nutrição micelizada que aumenta a absorção dos nutrientes pelo organismo. Jorge Vergara, também conhecido por ser dono do Club Deportivo Guadalajara (Chivas), construiu a Omnilife com uma visão de democratizar o acesso à nutrição de qualidade.",
    history: "A Omnilife foi fundada em 1991 por Jorge Vergara Madrigal, um empreendedor visionário mexicano. Vergara, que anteriormente havia trabalhado com outras empresas de nutrição, decidiu criar sua própria empresa com um diferencial tecnológico: a nutrição micelizada. Esta tecnologia permite que os nutrientes sejam absorvidos de forma mais eficiente pelo organismo, aumentando a biodisponibilidade dos suplementos. Nos anos 1990, a Omnilife expandiu rapidamente pelo México e começou sua internacionalização pela América Central e América do Sul. A empresa tornou-se conhecida por seus produtos coloridos em pó que são misturados com água, tornando a suplementação mais acessível e agradável. Jorge Vergara também ficou famoso por adquirir o Club Deportivo Guadalajara (Chivas) em 2002, usando a visibilidade do clube para promover a marca Omnilife. O estádio do time, Omnilife Stadium (hoje Akron Stadium), leva o nome da empresa. Após o falecimento de Jorge Vergara em 2019, a empresa continua operando sob a liderança de sua família, mantendo seu legado de nutrição acessível.",
    mission: "Nutrir a vida de milhões de pessoas com produtos de alta qualidade, proporcionando saúde, bem-estar e oportunidades de desenvolvimento.",
    vision: "Ser a empresa líder mundial em nutrição micelizada, levando saúde e prosperidade a todas as comunidades que tocamos.",
    highlights: ["33+ anos de tradição", "Tecnologia de nutrição micelizada", "Forte presença na América Latina", "Produtos de fácil consumo", "6+ milhões de distribuidores", "Patrocinadora do Chivas", "Centro de pesquisa próprio", "Mais de 200 produtos"],
    products: [
      { name: "Omniplus", description: "O produto icônico da Omnilife, um suplemento multivitamínico micelizado disponível em diversos sabores para suporte nutricional diário." },
      { name: "Starbien", description: "Suplemento para energia e vitalidade, ideal para pessoas com rotinas intensas e atletas." },
      { name: "One C Mix", description: "Vitamina C micelizada com alta absorção para fortalecimento do sistema imunológico." },
      { name: "Ego Mint", description: "Produto energético em spray com menta para frescor e disposição instantânea." },
      { name: "Optimus", description: "Suplemento proteico para desenvolvimento muscular e recuperação pós-treino." },
      { name: "Power Maker", description: "Pó energético com vitaminas do complexo B e minerais para performance física e mental." }
    ],
    compensationPlan: {
      type: "Marketing Multinível",
      levels: 15,
      bonuses: ["Bônus de Vendas (até 40%)", "Bônus de Equipe", "Bônus de Liderança", "Bônus de Carreira", "Viagens Internacionais", "Bônus de Matching", "Pool de Líderes", "Incentivos por Rangos"],
      requirements: ["Cadastro como empresário", "Compras pessoais mensais", "Desenvolvimento de rede", "Manutenção de qualificação"],
      pros: ["Produtos de fácil consumo e sabores agradáveis", "Tecnologia micelizada diferenciada", "Forte marca na América Latina", "Investimento inicial acessível", "Grande comunidade de distribuidores", "Treinamentos em espanhol e português"],
      cons: ["Mais forte na América Latina que globalmente", "Competição intensa no segmento", "Algumas controvérsias passadas", "Dependência do mercado latino"]
    },
    reviews: [
      { name: "Maria Gonzalez", avatar: "/placeholder.svg", rating: 5, date: "2024-01-06", comment: "Omnilife mudou minha saúde! Os produtos são deliciosos e fáceis de tomar. Recomendo o Omniplus para todos.", helpful: 68 },
      { name: "Pedro Ramirez", avatar: "/placeholder.svg", rating: 4, date: "2024-01-01", comment: "Trabalho com Omnilife há 8 anos. A empresa é sólida e os produtos realmente funcionam.", helpful: 52 },
      { name: "Ana Martinez", avatar: "/placeholder.svg", rating: 4, date: "2023-12-28", comment: "Gosto da praticidade dos produtos em pó. Levo para qualquer lugar e mantenho minha suplementação em dia.", helpful: 45 },
      { name: "Roberto Silva", avatar: "/placeholder.svg", rating: 4, date: "2023-12-24", comment: "Os produtos de energia são ótimos! Starbien me ajuda muito nos dias de treino intenso.", helpful: 38 }
    ],
    stats: { consultants: "6.000.000+", countries: 20, revenue: "US$ 1.5 bilhões", growth: "+6%", employees: "3.000+", foundedYear: 1991 },
    awards: ["Mexico's Best Companies", "Latin America Direct Selling Excellence", "Sports Nutrition Award", "Sustainability Recognition"],
    certifications: ["COFEPRIS Mexico", "FDA Registered", "GMP Certified", "ISO 22000"]
  },
  "oriflame": {
    id: 15,
    name: "Oriflame",
    slug: "oriflame",
    logo: oriflameLogo,
    position: 15,
    votes: 1045,
    rating: 3.8,
    category: "Cosméticos & Bem-estar",
    founded: "1967",
    country: "Suécia",
    headquarters: "Schaffhausen, Suíça",
    website: "https://www.oriflame.com.br",
    description: "Empresa sueca de cosméticos com inspiração escandinava e presença global",
    fullDescription: "A Oriflame é uma empresa sueca de cosméticos e bem-estar fundada em 1967 por dois irmãos, Jonas and Robert af Jochnick, em Estocolmo, Suécia. Com uma filosofia centrada na beleza natural escandinava e no empreendedorismo feminino, a Oriflame se tornou uma das maiores empresas de vendas diretas de cosméticos do mundo, presente em mais de 60 países com milhões de consultoras.",
    history: "A Oriflame foi fundada em 1967 pelos irmãos Jonas e Robert af Jochnick em Estocolmo, Suécia. Os irmãos tinham uma visão revolucionária: criar cosméticos de alta qualidade com ingredientes naturais e oferecê-los diretamente às consumidoras, eliminando intermediários e proporcionando uma oportunidade de renda para mulheres. O nome 'Oriflame' combina 'or' (ouro em francês) com 'flamma' (chama em latim), simbolizando a 'chama dourada' da beleza natural. A empresa cresceu rapidamente na Escandinávia e Europa Ocidental nos anos 1970 e 1980. Nos anos 1990, após a queda do comunismo, a Oriflame expandiu agressivamente para a Europa Oriental e Rússia, tornando-se uma das marcas de cosméticos mais populares nessas regiões. Em 2004, a Oriflame abriu seu capital na bolsa de Estocolmo. A empresa também expandiu para Ásia, África e América Latina. Em 2019, a Oriflame foi adquirida pela Walgreens Boots Alliance, mas mantém sua identidade e operação independente. Hoje, a empresa é conhecida por seus produtos inspirados na natureza sueca e pelo compromisso com sustentabilidade.",
    mission: "Cumprir sonhos - oferecendo uma oportunidade de negócio única que empodera pessoas e uma linha de cosméticos inovadora inspirada na natureza sueca.",
    vision: "Ser a empresa de beleza número 1 em venda direta, reconhecida por produtos inspirados na natureza e pelo impacto positivo na vida de milhões de pessoas.",
    highlights: ["57+ anos de tradição sueca", "Inspiração na natureza nórdica", "Presente em 60+ países", "Foco em sustentabilidade", "3+ milhões de consultoras", "Pesquisa na Suécia", "Produtos premiados", "Embalagens eco-friendly"],
    products: [
      { name: "NovAge", description: "Linha premium anti-idade com tecnologia escandinava avançada para reduzir rugas, linhas de expressão e manchas." },
      { name: "The One", description: "Maquiagem profissional de alta cobertura e durabilidade, com opções para todos os tons de pele." },
      { name: "Essentials", description: "Linha acessível de cuidados diários para pele e corpo com ingredientes naturais." },
      { name: "Love Nature", description: "Linha de produtos com ingredientes orgânicos certificados para cuidados gentis com a pele." },
      { name: "Giordani Gold", description: "Fragrâncias sofisticadas e produtos de luxo para momentos especiais." },
      { name: "Wellness by Oriflame", description: "Suplementos nutricionais suecos para saúde e bem-estar completo." }
    ],
    compensationPlan: {
      type: "Marketing Multinível Global",
      levels: 12,
      bonuses: ["Desconto de Consultor (até 30%)", "Bônus de Vendas Pessoais", "Bônus de Equipe", "Bônus de Liderança", "Viagens de Incentivo Mundiais", "Bônus de Matching", "Director's Club", "Bônus de Presidente"],
      requirements: ["Cadastro como consultor", "Pedidos pessoais regulares", "Desenvolvimento de grupo", "Manutenção de título"],
      pros: ["Marca sueca premium e confiável", "Produtos de qualidade com preços acessíveis", "Forte presença global", "Catálogos atraentes", "Treinamentos de qualidade", "Foco em sustentabilidade"],
      cons: ["Competição intensa no segmento de cosméticos", "Dependência de catálogos físicos (em transição)", "Saturação em alguns mercados", "Menos conhecida que Mary Kay ou Avon"]
    },
    reviews: [
      { name: "Sofia Andersson", avatar: "/placeholder.svg", rating: 5, date: "2024-01-05", comment: "Oriflame é minha paixão há 20 anos! Produtos de qualidade sueca com preços acessíveis. A linha NovAge é fantástica!", helpful: 65 },
      { name: "Helena Petrova", avatar: "/placeholder.svg", rating: 4, date: "2023-12-31", comment: "Amo a proposta sustentável da marca. Os produtos Love Nature são naturais e funcionam muito bem.", helpful: 52 },
      { name: "Lucia Ferreira", avatar: "/placeholder.svg", rating: 4, date: "2023-12-27", comment: "Trabalhar com Oriflame me deu independência financeira. Os catálogos são lindos e os clientes amam.", helpful: 45 },
      { name: "Maria Kowalski", avatar: "/placeholder.svg", rating: 5, date: "2023-12-23", comment: "Os perfumes Giordani Gold são sofisticados e duradouros. Qualidade europeia acessível!", helpful: 58 }
    ],
    stats: { consultants: "3.000.000+", countries: 60, revenue: "€1.3 bilhões", growth: "+4%", employees: "6.500+", foundedYear: 1967 },
    awards: ["Swedish Design Award", "Best CSR Company", "Sustainable Beauty Award", "Direct Selling News Global 100", "Customer Choice Award"],
    certifications: ["Cruelty-Free", "ECOCERT (select products)", "ISO 9001", "ISO 14001", "Vegan Society Approved (select)"]
  },
  "primerica": {
    id: 16,
    name: "Primerica",
    slug: "primerica",
    logo: primericaLogo,
    position: 16,
    votes: 987,
    rating: 3.7,
    category: "Serviços Financeiros",
    founded: "1977",
    country: "Estados Unidos",
    headquarters: "Duluth, Georgia, EUA",
    website: "https://www.primerica.com",
    description: "Maior empresa de serviços financeiros de venda direta da América do Norte",
    fullDescription: "A Primerica é uma empresa americana de serviços financeiros fundada em 1977, especializada em fornecer educação financeira, seguros de vida e investimentos para famílias de classe média. Diferente de outras empresas de MMN que vendem produtos físicos, a Primerica comercializa serviços financeiros através de uma rede de representantes independentes. A empresa é listada na NYSE e é a maior distribuidora de seguros de vida term na América do Norte.",
    history: "A Primerica foi fundada em 1977 por Art Williams com o nome de A.L. Williams & Associates, com uma missão simples: 'Buy term and invest the difference' (Compre seguro term e invista a diferença). Art Williams acreditava que as famílias americanas estavam sendo mal servidas pela indústria de seguros tradicional, que vendia apólices de vida inteira caras e com baixo retorno. Seu modelo alternativo propunha seguros de vida temporários (term) mais baratos, permitindo que as famílias investissem o dinheiro economizado. A empresa cresceu rapidamente nos anos 1980, tornando-se a maior vendedora de seguros de vida dos EUA. Em 1989, a Primerica foi adquirida pelo Citigroup e operou sob seu guarda-chuva até 2010, quando foi novamente desmembrada como empresa independente e abriu capital na NYSE. Hoje, a Primerica emprega mais de 130.000 representantes licenciados e ajudou milhões de famílias a alcançarem segurança financeira. A empresa também oferece fundos de investimento e outros produtos financeiros.",
    mission: "Ajudar as famílias de classe média a alcançarem segurança financeira através de educação, proteção e investimentos adequados.",
    vision: "Ser a empresa líder em serviços financeiros para famílias trabalhadoras, conhecida por integridade, educação e resultados.",
    highlights: ["47+ anos de história", "Listada na NYSE (PRI)", "Maior distribuidora de seguros term", "130.000+ representantes licenciados", "5+ milhões de clientes", "Foco em educação financeira", "US$ 900+ bilhões em cobertura", "Modelo 'Buy term, invest the difference'"],
    products: [
      { name: "Seguros de Vida Term", description: "Seguros de vida temporários acessíveis com termos de 10, 20, 25 ou 30 anos, oferecendo proteção financeira para famílias." },
      { name: "Fundos de Investimento", description: "Portfólio diversificado de fundos mútuos para aposentadoria, educação e objetivos financeiros de longo prazo." },
      { name: "Refinanciamento de Dívidas", description: "Soluções para consolidação e refinanciamento de dívidas, ajudando famílias a reduzirem juros e pagamentos mensais." },
      { name: "Planos de Aposentadoria", description: "401(k), IRA e outros veículos de poupança para aposentadoria com orientação profissional." },
      { name: "Educação Financeira", description: "Workshops e seminários gratuitos sobre orçamento, eliminação de dívidas e construção de patrimônio." },
      { name: "Serviços Jurídicos Pré-Pagos", description: "Planos de assistência jurídica acessível para proteção legal da família." }
    ],
    compensationPlan: {
      type: "Hierárquico com Override",
      levels: 12,
      bonuses: ["Comissão por Vendas (até 60%)", "Override de Equipe", "Bônus de Liderança", "Bônus de Escritório", "Equity Ownership Program", "Viagens de Incentivo", "National Sales Director Bonus", "Competições Nacionais"],
      requirements: ["Licenciamento de seguros e investimentos", "Treinamento obrigatório", "Metas de produção", "Conformidade regulatória"],
      pros: ["Produtos financeiros essenciais", "Alta demanda por seguros", "Treinamento extensivo em finanças", "Empresa pública e regulamentada", "Potencial de altos ganhos", "Impacto real na vida das famílias"],
      cons: ["Requer licenciamento (tempo e custo)", "Exigências regulatórias rígidas", "Processo de vendas mais complexo", "Alta rotatividade de representantes"]
    },
    reviews: [
      { name: "Michael Johnson", avatar: "/placeholder.svg", rating: 4, date: "2024-01-04", comment: "Primerica me deu uma carreira em serviços financeiros sem precisar de diploma. O treinamento é excelente e ajudo famílias todos os dias.", helpful: 62 },
      { name: "Sarah Williams", avatar: "/placeholder.svg", rating: 5, date: "2023-12-30", comment: "Trabalho na Primerica há 12 anos. A missão de ajudar famílias de classe média é real e faz diferença.", helpful: 55 },
      { name: "David Martinez", avatar: "/placeholder.svg", rating: 4, date: "2023-12-26", comment: "O modelo 'buy term' faz sentido e os clientes agradecem quando entendem. A educação financeira é o diferencial.", helpful: 48 },
      { name: "Amanda Clark", avatar: "/placeholder.svg", rating: 3, date: "2023-12-22", comment: "A empresa é legítima, mas o processo de licenciamento é demorado. Ótimo para quem quer uma carreira em finanças.", helpful: 38 }
    ],
    stats: { consultants: "130.000+", countries: 3, revenue: "US$ 2.5 bilhões", growth: "+7%", employees: "2.500+", foundedYear: 1977 },
    awards: ["Fortune 500", "Forbes Best Employers", "Training Magazine Top 125", "Great Place to Work"],
    certifications: ["NYSE Listed", "SEC Registered", "State Insurance Licensed", "FINRA Member", "BBB A+"]
  },
  "royal-prestige": {
    id: 17,
    name: "Royal Prestige",
    slug: "royal-prestige",
    logo: royalprestigeLogo,
    position: 17,
    votes: 912,
    rating: 3.7,
    category: "Utensílios de Cozinha Premium",
    founded: "1959",
    country: "Estados Unidos",
    headquarters: "Madison, Wisconsin, EUA",
    website: "https://www.royalprestige.com",
    description: "Empresa americana especializada em utensílios de cozinha de alta qualidade e sistemas de cozimento saudável",
    fullDescription: "A Royal Prestige é uma empresa americana especializada em utensílios de cozinha premium, fundada em 1959 em Madison, Wisconsin. A empresa é conhecida por seus sistemas de panelas de aço inoxidável cirúrgico de alta qualidade, que permitem cozinhar alimentos de forma mais saudável, sem água nem gordura. Com forte presença nos Estados Unidos e América Latina, a Royal Prestige construiu uma reputação de qualidade superior e durabilidade excepcional.",
    history: "A Royal Prestige foi fundada em 1959 nos Estados Unidos, durante um período de crescente consciência sobre saúde e nutrição. Os fundadores da empresa reconheceram que a forma de cozinhar era tão importante quanto os ingredientes utilizados, e desenvolveram um sistema de panelas que preservava os nutrientes naturais dos alimentos. O diferencial da Royal Prestige sempre foi sua tecnologia de cozimento a vapor e condução de calor, que permite preparar alimentos sem adicionar água ou gordura. As panelas são fabricadas com aço inoxidável de grau cirúrgico, garantindo durabilidade de décadas. A empresa adotou o modelo de venda direta através de demonstrações em domicílio, onde os representantes preparam refeições completas para os potenciais clientes, mostrando na prática os benefícios do sistema. Nas décadas de 1980 e 1990, a Royal Prestige expandiu fortemente para o México e outros países da América Latina, onde se tornou uma marca aspiracional associada a qualidade e status. Hoje, a empresa continua focada em utensílios de cozinha premium e mantém sua tradição de demonstrações presenciais.",
    mission: "Melhorar a saúde e o bem-estar das famílias através de utensílios de cozinha de qualidade superior que promovem uma alimentação mais saudável.",
    vision: "Ser reconhecida como a marca líder mundial em utensílios de cozinha premium, sinônimo de qualidade, saúde e durabilidade.",
    highlights: ["65+ anos de tradição", "Aço inoxidável grau cirúrgico", "Cozimento sem água/gordura", "Garantia vitalícia", "Forte presença latina", "Demonstrações em domicílio", "Tecnologia de cozimento saudável", "Produtos que duram gerações"],
    products: [
      { name: "Sistemas de Panelas Royal Prestige", description: "Conjuntos completos de panelas em aço inoxidável de grau cirúrgico com tampa seladora para cozimento saudável sem água nem gordura." },
      { name: "Frigideiras Antiadeerentes", description: "Frigideiras com revestimento cerâmico de alta durabilidade para preparo de alimentos com mínimo de gordura." },
      { name: "Panelas de Pressão", description: "Panelas de pressão seguras e eficientes para preparo rápido de alimentos mantendo nutrientes." },
      { name: "Utensílios de Corte", description: "Facas e utensílios de corte profissionais em aço de alta qualidade para preparação de alimentos." },
      { name: "Grill e Chapa", description: "Equipamentos para grelhar alimentos de forma saudável, com superfícies antiaderentes premium." },
      { name: "Acessórios de Cozinha", description: "Linha completa de acessórios que complementam o sistema de cozimento, incluindo tampas, pegadores e mais." }
    ],
    compensationPlan: {
      type: "Venda Direta com Demonstração",
      levels: 8,
      bonuses: ["Comissão por Venda (até 40%)", "Bônus de Equipe", "Bônus de Liderança", "Viagens de Incentivo", "Bônus de Primeiro Pedido", "Incentivos Trimestrais", "Prêmios de Reconhecimento", "Bônus de Financiamento"],
      requirements: ["Treinamento de vendas obrigatório", "Kit de demonstração", "Demonstrações presenciais", "Metas de vendas mensais"],
      pros: ["Produtos de altíssima qualidade e durabilidade", "Margens de lucro atrativas", "Demonstrações eficazes para vendas", "Garantia vitalícia atrai clientes", "Financiamento facilita vendas", "Produto aspiracional"],
      cons: ["Preço alto dos produtos", "Necessidade de demonstrações presenciais", "Exige habilidade de cozinhar", "Mercado de nicho"]
    },
    reviews: [
      { name: "Rosa Hernandez", avatar: "/placeholder.svg", rating: 5, date: "2024-01-03", comment: "Tenho panelas Royal Prestige há 25 anos e estão como novas! Cozinho de forma muito mais saudável e os alimentos ficam deliciosos.", helpful: 72 },
      { name: "Carlos Mendoza", avatar: "/placeholder.svg", rating: 4, date: "2023-12-29", comment: "Trabalho com Royal Prestige há 10 anos. O produto se vende quando as pessoas veem a demonstração.", helpful: 58 },
      { name: "Maria Garcia", avatar: "/placeholder.svg", rating: 5, date: "2023-12-25", comment: "O investimento vale cada centavo! Minhas panelas vão passar para meus filhos de tão boas que são.", helpful: 65 },
      { name: "Juan Rodriguez", avatar: "/placeholder.svg", rating: 4, date: "2023-12-21", comment: "As demonstrações são a chave do sucesso. Quando as pessoas experimentam a comida, querem comprar.", helpful: 48 }
    ],
    stats: { consultants: "80.000+", countries: 8, revenue: "US$ 500 milhões", growth: "+5%", employees: "1.000+", foundedYear: 1959 },
    awards: ["Good Housekeeping Seal", "Best Cookware Award", "Latino Excellence Award", "BBB A+ Rating"],
    certifications: ["FDA Compliant", "NSF Certified", "ISO 9001", "UL Listed"]
  },
  "tupperware": {
    id: 18,
    name: "Tupperware",
    slug: "tupperware",
    logo: tupperwareLogo,
    position: 18,
    votes: 876,
    rating: 3.6,
    category: "Utensílios Domésticos & Conservação",
    founded: "1946",
    country: "Estados Unidos",
    headquarters: "Orlando, Florida, EUA",
    website: "https://www.tupperware.com.br",
    description: "A pioneira mundial em recipientes plásticos e conservação de alimentos",
    fullDescription: "A Tupperware Brands Corporation é uma empresa americana icônica, fundada em 1946 por Earl Tupper. Pioneira no desenvolvimento de recipientes plásticos herméticos para conservação de alimentos, a Tupperware revolucionou a forma como as pessoas armazenam comida e criou o modelo de 'festas em casa' (home parties) que se tornou padrão na indústria de vendas diretas. A marca Tupperware é tão conhecida que se tornou sinônimo de recipientes plásticos em diversos países.",
    history: "A história da Tupperware começou em 1946, quando o químico Earl Tupper desenvolveu um plástico flexível e durável a partir de resíduos de refinarias de petróleo. Ele criou recipientes com um sistema de vedação hermética inspirado em tampas de latas de tinta, mantendo os alimentos frescos por mais tempo. Inicialmente, os produtos eram vendidos em lojas, mas não tiveram sucesso. A revolução veio quando Brownie Wise, uma vendedora pioneira, introduziu o conceito de 'Tupperware Party' no início dos anos 1950. Nestas festas, anfitriãs convidavam amigas para suas casas, onde uma consultora demonstrava os produtos. Este modelo foi tão bem-sucedido que se tornou exclusivo, e a Tupperware deixou de ser vendida em lojas. Brownie Wise se tornou a primeira mulher na capa da BusinessWeek em 1954. A empresa expandiu globalmente nas décadas seguintes, tornando-se um fenômeno cultural. Em 2023, a Tupperware enfrentou desafios financeiros significativos, mas continua operando e buscando se reinventar para as novas gerações de consumidores.",
    mission: "Nutrir a vida saudável das famílias através de soluções inovadoras de conservação e preparação de alimentos.",
    vision: "Ser a marca líder mundial em soluções para cozinha e conservação de alimentos, presente em todos os lares.",
    highlights: ["78+ anos de história icônica", "Inventora da vedação hermética", "Criadora das 'festas em casa'", "Marca sinônimo de qualidade", "Presente em 100+ países", "Bilhões de produtos vendidos", "Garantia vitalícia", "Ícone cultural mundial"],
    products: [
      { name: "Recipientes Herméticos", description: "A famosa linha de potes com vedação hermética que mantém alimentos frescos por mais tempo, disponíveis em diversos tamanhos e formatos." },
      { name: "Linha Microondas", description: "Produtos especialmente desenvolvidos para uso seguro em microondas, facilitando o reaquecimento de alimentos." },
      { name: "Linha Eco", description: "Garrafas e recipientes reutilizáveis para substituir descartáveis, promovendo sustentabilidade no dia a dia." },
      { name: "UltraPro", description: "Recipientes que vão do freezer ao forno, permitindo cozinhar, servir e armazenar no mesmo produto." },
      { name: "Preparação de Alimentos", description: "Utensílios para preparo de alimentos como processadores manuais, espremedores e mixers." },
      { name: "Linha Infantil", description: "Produtos coloridos e seguros desenvolvidos especialmente para alimentação de crianças." }
    ],
    compensationPlan: {
      type: "Venda Direta por Festa",
      levels: 10,
      bonuses: ["Comissão de Vendas (até 35%)", "Bônus de Festa", "Bônus de Anfitriã", "Bônus de Equipe", "Viagens de Incentivo", "Prêmios de Reconhecimento", "Bônus de Recrutamento", "Incentivos Mensais"],
      requirements: ["Cadastro como consultora", "Kit de início", "Realização de festas", "Metas de vendas"],
      pros: ["Marca mundialmente conhecida", "Produtos de qualidade comprovada", "Garantia vitalícia", "Modelo de festas estabelecido", "Produtos consumíveis de recompra", "Treinamentos disponíveis"],
      cons: ["Empresa enfrentando desafios financeiros", "Modelo de festas menos popular hoje", "Competição de genéricos", "Necessidade de reinvenção"]
    },
    reviews: [
      { name: "Sandra Lima", avatar: "/placeholder.svg", rating: 4, date: "2024-01-02", comment: "Uso Tupperware há 30 anos! Os potes são indestrutíveis. Tenho peças da minha mãe que ainda estão perfeitas.", helpful: 78 },
      { name: "Celia Santos", avatar: "/placeholder.svg", rating: 4, date: "2023-12-28", comment: "Trabalhar com Tupperware é prazeroso. As festas são divertidas e os produtos se vendem sozinhos pela qualidade.", helpful: 58 },
      { name: "Marcia Ferreira", avatar: "/placeholder.svg", rating: 3, date: "2023-12-24", comment: "Marca tradicional com produtos bons, mas precisa se modernizar. O modelo de festas está ultrapassado.", helpful: 45 },
      { name: "Regina Almeida", avatar: "/placeholder.svg", rating: 5, date: "2023-12-20", comment: "A garantia vitalícia é real! Troquei potes de 20 anos atrás sem problemas. Qualidade incomparável.", helpful: 68 }
    ],
    stats: { consultants: "2.900.000+", countries: 100, revenue: "US$ 1.3 bilhões", growth: "-5%", employees: "8.500+", foundedYear: 1946 },
    awards: ["Iconic Brand Award", "Women's Choice Award", "Green Award", "Design Excellence Award"],
    certifications: ["FDA Approved", "BPA Free", "ISO 9001", "Recyclable Materials"]
  },
  "utility-warehouse": {
    id: 19,
    name: "Utility Warehouse",
    slug: "utility-warehouse",
    logo: utilitywarehouseLogo,
    position: 19,
    votes: 823,
    rating: 3.5,
    category: "Serviços de Utilidades",
    founded: "1996",
    country: "Reino Unido",
    headquarters: "Londres, Reino Unido",
    website: "https://www.utilitywarehouse.co.uk",
    description: "Maior empresa de serviços multi-utilidades do Reino Unido",
    fullDescription: "A Utility Warehouse é uma empresa britânica inovadora que oferece múltiplos serviços domésticos em uma única conta: energia (gás e eletricidade), telefonia fixa, banda larga, telefonia móvel e seguros. Fundada em 1996 e parte do Telecom Plus PLC (listada na Bolsa de Londres), a UW utiliza um modelo de venda direta através de 'Partners' que indicam clientes, tornando-se a maior empresa do gênero no Reino Unido.",
    history: "A Utility Warehouse nasceu em 1996 de uma ideia simples: por que os consumidores deveriam lidar com múltiplas contas de diferentes fornecedores quando poderiam ter tudo em um só lugar? Fundada como parte do Telecom Plus PLC, a empresa começou oferecendo serviços de telefonia e rapidamente expandiu para incluir gás, eletricidade, banda larga e seguros. O modelo de negócio da UW é único: ao invés de gastar fortunas em publicidade tradicional, a empresa depende de clientes satisfeitos que se tornam 'Partners' e indicam novos clientes. Os Partners recebem comissões mensais recorrentes pelos clientes que indicam, criando uma renda passiva. Este modelo provou ser extremamente eficaz, com a empresa crescendo organicamente através de recomendações pessoais. Hoje, a Utility Warehouse atende mais de 700.000 clientes no Reino Unido e paga milhões em comissões aos seus Partners todos os meses. A empresa também se destaca por sua abordagem de 'bundle' (pacote), onde clientes que adquirem múltiplos serviços recebem descontos progressivos.",
    mission: "Simplificar a vida dos clientes oferecendo todos os serviços domésticos essenciais em uma única conta, com atendimento excepcional e preços competitivos.",
    vision: "Ser o fornecedor preferido de serviços domésticos no Reino Unido, conhecido pela simplicidade, valor e atendimento ao cliente.",
    highlights: ["28+ anos de mercado UK", "Listada na Bolsa de Londres", "700.000+ clientes", "Múltiplos serviços em uma conta", "Renda recorrente para Partners", "Descontos por bundle", "Atendimento premiado", "Empresa sustentável"],
    products: [
      { name: "Energia (Gás e Eletricidade)", description: "Fornecimento de gás e eletricidade com tarifas competitivas e opção de energia 100% renovável." },
      { name: "Banda Larga", description: "Internet de alta velocidade com fibra óptica disponível, incluindo roteador e suporte técnico." },
      { name: "Telefonia Fixa", description: "Linha telefônica tradicional com planos de chamadas ilimitadas para fixos e móveis UK." },
      { name: "Telefonia Móvel", description: "Planos de celular competitivos com boa cobertura em toda UK e roaming europeu." },
      { name: "Seguros", description: "Seguros residenciais e de breakdown (assistência automotiva) com coberturas abrangentes." },
      { name: "Cashback Card", description: "Cartão de débito que oferece cashback em compras em milhares de estabelecimentos parceiros." }
    ],
    compensationPlan: {
      type: "Renda Recorrente por Indicação",
      levels: 6,
      bonuses: ["Comissão Mensal Recorrente (por cliente)", "Bônus de Início Rápido", "Bônus de Equipe", "Bônus de Liderança", "Viagens de Incentivo", "Pool de Líderes", "Incentivos Trimestrais", "Reconhecimento Nacional"],
      requirements: ["Ser cliente UW", "Registro como Partner", "Indicar novos clientes", "Manutenção de clientes ativos"],
      pros: ["Renda recorrente mensal passiva", "Serviços essenciais de alta demanda", "Empresa listada e regulamentada", "Não é preciso vender produtos físicos", "Clientes tendem a permanecer anos", "Baixo investimento inicial"],
      cons: ["Disponível apenas no Reino Unido", "Comissões individuais relativamente baixas", "Requer volume de clientes para renda significativa", "Competição com fornecedores tradicionais"]
    },
    reviews: [
      { name: "James Thompson", avatar: "/placeholder.svg", rating: 5, date: "2024-01-01", comment: "Trabalho como Partner há 8 anos. A renda recorrente é real - recebo todos os meses sem precisar fazer nada depois de indicar.", helpful: 68 },
      { name: "Sarah Mitchell", avatar: "/placeholder.svg", rating: 4, date: "2023-12-27", comment: "Como cliente, adoro ter tudo em uma conta só. Como Partner, a renda extra é muito bem-vinda.", helpful: 52 },
      { name: "David Wilson", avatar: "/placeholder.svg", rating: 4, date: "2023-12-23", comment: "O modelo de negócio faz sentido porque você ajuda pessoas a economizarem com serviços que já precisam.", helpful: 45 },
      { name: "Emma Roberts", avatar: "/placeholder.svg", rating: 5, date: "2023-12-19", comment: "Melhor decisão que tomei! Tenho clientes que indiquei há 5 anos e ainda recebo comissão todo mês.", helpful: 72 }
    ],
    stats: { consultants: "50.000+", countries: 1, revenue: "£1.0 bilhão", growth: "+12%", employees: "2.000+", foundedYear: 1996 },
    awards: ["UK Customer Service Award", "Which? Recommended Provider", "Best Multi-Service Provider", "Sunday Times Best Companies"],
    certifications: ["Ofgem Licensed", "FCA Regulated", "Ofcom Registered", "LSE Listed"]
  }
};

export default function CompanyDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { counts } = useCompanyVoteCounts();
  const { vote, hasVoted, voting, votedCompany } = useCompanyVote();
  
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

  const yearsInMarket = new Date().getFullYear() - company.stats.foundedYear;

  return (
    <>
      <SEO 
        title={`${company.name} - Análise Completa, História e Plano de Compensação`}
        description={`${company.description}. Análise completa do plano de compensação, história, produtos, estatísticas e avaliações da ${company.name}. Fundada em ${company.founded}.`}
        canonical={`/empresa/${company.slug}`}
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <span>/</span>
              <Link to="/ranking" className="hover:text-foreground transition-colors">Ranking</Link>
              <span>/</span>
              <span className="text-foreground">{company.name}</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <img 
                    src={company.logo} 
                    alt={`Logo ${company.name}`} 
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-xl"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge className="bg-gradient-gold text-white border-0">
                        <Trophy className="w-3 h-3 mr-1" />
                        #{company.position} no Ranking
                      </Badge>
                      <Badge variant="secondary">{company.category}</Badge>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        <BadgeCheck className="w-3 h-3 mr-1" />
                        Verificada
                      </Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{company.name}</h1>
                    <p className="text-lg text-muted-foreground mb-4">{company.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Fundada em {company.founded} ({yearsInMarket} anos)
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
                  <span className="text-muted-foreground">({(company.votes + (counts[company.slug] ?? 0)).toLocaleString()} votos)</span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    disabled={voting === company.slug}
                    onClick={() => vote(company.slug)}
                    className="bg-gradient-gold hover:opacity-90 disabled:opacity-70"
                  >
                    {voting === company.slug ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : hasVoted(company.slug) ? (
                      <Check className="w-5 h-5 mr-2" />
                    ) : (
                      <Vote className="w-5 h-5 mr-2" />
                    )}
                    {hasVoted(company.slug)
                      ? "Voto Registrado"
                      : votedCompany
                        ? "Trocar Voto para Esta Empresa"
                        : "Votar nesta Empresa"}
                  </Button>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Site Oficial
                    </Button>
                  </a>
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
              <div className="space-y-4">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-gold/20">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-gold" />
                    Estatísticas Principais
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        Consultores
                      </span>
                      <span className="font-bold text-foreground">{company.stats.consultants}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gold" />
                        Países
                      </span>
                      <span className="font-bold text-foreground">{company.stats.countries}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <CircleDollarSign className="w-4 h-4 text-gold" />
                        Faturamento
                      </span>
                      <span className="font-bold text-foreground">{company.stats.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-gold" />
                        Crescimento
                      </span>
                      <span className={`font-bold ${company.stats.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {company.stats.growth}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gold" />
                        Funcionários
                      </span>
                      <span className="font-bold text-foreground">{company.stats.employees}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <History className="w-4 h-4 text-gold" />
                        Anos de Mercado
                      </span>
                      <span className="font-bold text-foreground">{yearsInMarket} anos</span>
                    </div>
                  </div>
                </Card>

                {/* Certifications */}
                <Card className="p-4 bg-card/50 backdrop-blur-sm">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-gold" />
                    Certificações
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
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
                <TabsTrigger value="history" className="data-[state=active]:bg-gold data-[state=active]:text-white px-6 py-3">
                  <History className="w-4 h-4 mr-2" />
                  História
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

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-5 bg-gradient-to-br from-gold/5 to-transparent border-gold/20">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-gold" />
                        Missão
                      </h3>
                      <p className="text-muted-foreground">{company.mission}</p>
                    </Card>
                    <Card className="p-5 bg-gradient-to-br from-purple/5 to-transparent border-purple/20">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple" />
                        Visão
                      </h3>
                      <p className="text-muted-foreground">{company.vision}</p>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-gold" />
                    Destaques e Diferenciais
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {company.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold" />
                    Prêmios e Reconhecimentos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {company.awards.map((award, index) => (
                      <Badge key={index} className="bg-gold/10 text-gold border-gold/30 py-2 px-4">
                        <Trophy className="w-3 h-3 mr-1" />
                        {award}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Quick Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="p-5 text-center bg-gradient-to-br from-gold/10 to-transparent border-gold/20">
                    <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{company.stats.consultants}</div>
                    <div className="text-sm text-muted-foreground">Consultores Ativos</div>
                  </Card>
                  <Card className="p-5 text-center bg-gradient-to-br from-purple/10 to-transparent border-purple/20">
                    <Globe className="w-8 h-8 text-purple mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{company.stats.countries}</div>
                    <div className="text-sm text-muted-foreground">Países de Operação</div>
                  </Card>
                  <Card className="p-5 text-center bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
                    <CircleDollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{company.stats.revenue}</div>
                    <div className="text-sm text-muted-foreground">Faturamento Anual</div>
                  </Card>
                  <Card className="p-5 text-center bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
                    <History className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{yearsInMarket}+</div>
                    <div className="text-sm text-muted-foreground">Anos de Mercado</div>
                  </Card>
                </div>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <History className="w-6 h-6 text-gold" />
                    História da {company.name}
                  </h2>

                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Landmark className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Fundação e Origens</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A {company.name} foi fundada em {company.founded} em {company.country}, com sede atual em {company.headquarters}. 
                        Com {yearsInMarket} anos de história, a empresa se consolidou como uma referência no segmento de {company.category.toLowerCase()}.
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      {company.history}
                    </p>
                  </div>

                  <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Factory className="w-5 h-5 text-gold" />
                      Informações Corporativas
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Fundação</div>
                          <div className="font-semibold text-foreground">{company.founded}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Sede</div>
                          <div className="font-semibold text-foreground">{company.headquarters}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">País de Origem</div>
                          <div className="font-semibold text-foreground">{company.country}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Funcionários</div>
                          <div className="font-semibold text-foreground">{company.stats.employees}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Setor</div>
                          <div className="font-semibold text-foreground">{company.category}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <ExternalLink className="w-5 h-5 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Website</div>
                          <a href={company.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">
                            Visitar Site Oficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Compensation Plan Tab */}
              <TabsContent value="compensation" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-gold" />
                    Plano de Compensação {company.name}
                  </h2>

                  <p className="text-muted-foreground mb-8 text-lg">
                    O plano de compensação da {company.name} é estruturado no modelo <strong>{company.compensationPlan.type}</strong>, 
                    oferecendo oportunidades de ganhos em até <strong>{company.compensationPlan.levels} níveis</strong> de profundidade. 
                    Este modelo permite que os consultores construam uma renda baseada tanto em vendas diretas quanto no desenvolvimento de equipe.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-5 bg-gradient-to-br from-gold/5 to-transparent border-gold/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Layers className="w-6 h-6 text-gold" />
                        <span className="font-semibold text-lg text-foreground">Tipo de Plano</span>
                      </div>
                      <p className="text-2xl font-bold text-gold">{company.compensationPlan.type}</p>
                    </Card>
                    <Card className="p-5 bg-gradient-to-br from-purple/5 to-transparent border-purple/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-6 h-6 text-purple" />
                        <span className="font-semibold text-lg text-foreground">Níveis de Comissão</span>
                      </div>
                      <p className="text-2xl font-bold text-purple">{company.compensationPlan.levels} níveis</p>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-gold" />
                    Bônus e Incentivos Disponíveis
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {company.compensationPlan.bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center gap-2 p-4 bg-gold/10 rounded-lg border border-gold/20 hover:bg-gold/15 transition-colors">
                        <Award className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-foreground font-medium">{bonus}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gold" />
                    Requisitos para Participação
                  </h3>
                  <div className="space-y-3 mb-8">
                    {company.compensationPlan.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-5 border-green-500/30 bg-green-500/5">
                      <h4 className="font-semibold text-green-600 mb-4 flex items-center gap-2 text-lg">
                        <ThumbsUp className="w-5 h-5" />
                        Pontos Positivos
                      </h4>
                      <ul className="space-y-3">
                        {company.compensationPlan.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-5 border-red-500/30 bg-red-500/5">
                      <h4 className="font-semibold text-red-600 mb-4 flex items-center gap-2 text-lg">
                        <ThumbsDown className="w-5 h-5" />
                        Pontos de Atenção
                      </h4>
                      <ul className="space-y-3">
                        {company.compensationPlan.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Package className="w-6 h-6 text-gold" />
                    Linha de Produtos {company.name}
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    A {company.name} oferece uma linha completa de produtos de alta qualidade na categoria <strong>{company.category.toLowerCase()}</strong>. 
                    Com foco em inovação e qualidade, a empresa desenvolveu produtos que atendem às necessidades dos consumidores modernos, 
                    proporcionando resultados comprovados e satisfação dos clientes.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {company.products.map((product, index) => (
                      <Card key={index} className="p-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-gold/10 hover:border-gold/30">
                        <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-purple/10 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gold" />
                      Qualidade e Garantia
                    </h3>
                    <p className="text-muted-foreground">
                      Todos os produtos da {company.name} passam por rigorosos controles de qualidade e possuem as certificações necessárias 
                      ({company.certifications.slice(0, 3).join(', ')}). A empresa investe continuamente em pesquisa e desenvolvimento 
                      para oferecer produtos inovadores e eficazes.
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-8">
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <MessageSquare className="w-6 h-6 text-gold" />
                        Avaliações dos Consultores
                      </h2>
                      <p className="text-muted-foreground mt-1">Veja o que consultores e clientes dizem sobre a {company.name}</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">{company.rating}</div>
                        <div className="flex items-center gap-1 justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(company.rating) ? 'text-gold fill-gold' : 'text-muted-foreground'}`} />
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{company.votes} votos</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {company.reviews.map((review, index) => (
                      <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12 border-2 border-gold/30">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback className="bg-gradient-gold text-white font-bold">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="font-semibold text-foreground">{review.name}</h4>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold fill-gold' : 'text-muted-foreground'}`} />
                                    ))}
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {new Date(review.date).toLocaleDateString('pt-BR')}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                            <div className="mt-3 flex items-center gap-4">
                              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                Útil ({review.helpful})
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Button variant="outline" size="lg">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ver Todas as Avaliações
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gold/10 via-purple/10 to-gold/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interessado na {company.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visite o site oficial para conhecer mais sobre os produtos, oportunidade de negócio e como se tornar um consultor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-gold hover:opacity-90">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Acessar Site Oficial
                </Button>
              </a>
              <Button size="lg" variant="outline">
                <Vote className="w-5 h-5 mr-2" />
                Votar nesta Empresa
              </Button>
              <Link to="/ranking">
                <Button size="lg" variant="ghost">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Ver Ranking Completo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
