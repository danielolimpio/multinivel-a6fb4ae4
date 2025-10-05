import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, TrendingUp, Trophy, Eye } from "lucide-react";
import { useState } from "react";
import ajudaMutuaImage from "@/assets/ajuda-mutua-piramide.jpg";

const categories = [
  { name: "Educação Financeira", count: 24, color: "bg-gold-medium text-gold-foreground" },
  { name: "Empreendedorismo", count: 18, color: "bg-purple text-purple-foreground" },
  { name: "Carreira", count: 15, color: "bg-turquoise text-turquoise-foreground" },
  { name: "Tecnologia", count: 12, color: "bg-accent text-accent-foreground" },
  { name: "Inovação Social", count: 9, color: "bg-primary text-primary-foreground" },
];

const topCompanies = [
  { id: 1, name: "Jeunesse Global", position: 1, votes: 2847 },
  { id: 2, name: "Herbalife", position: 2, votes: 2653 },
  { id: 3, name: "Amway", position: 3, votes: 2421 },
  { id: 4, name: "Nu Skin", position: 4, votes: 2198 },
  { id: 5, name: "doTERRA", position: 5, votes: 2076 },
];

const blogPosts = [
  {
    id: 1,
    title: "O que é sistema de ajuda mútua? Saiba por que muitos são esquemas piramidais disfarçados",
    excerpt: "Você já recebeu um convite para participar de um 'grupo de ajuda mútua' no WhatsApp ou Telegram? Descubra como identificar esquemas piramidais disfarçados de solidariedade e proteger-se de armadilhas financeiras.",
    image: ajudaMutuaImage,
    author: "Equipe UniversidadeMN",
    date: "05 Out 2025",
    category: "Educação Financeira",
    categoryColor: "bg-gold-medium text-gold-foreground",
    views: 2847,
    readTime: "12 min",
    imageCredit: "Freepik"
  },
  {
    id: 2,
    title: "Empreendedorismo Digital no MMN: Transforme sua Presença Online em Resultados",
    excerpt: "As melhores práticas para construir uma marca pessoal forte no marketing de rede. Domine as redes sociais, crie conteúdo relevante e atraia leads qualificados através do marketing digital estratégico.",
    image: "/lovable-uploads/e73547c8-d4f6-4f0f-9cfb-e11bb07af065.png",
    author: "Roberto Mendes",
    date: "18 Jan 2025",
    category: "Empreendedorismo",
    categoryColor: "bg-purple text-purple-foreground",
    views: 983,
    readTime: "6 min"
  },
  {
    id: 3,
    title: "Carreira em Marketing de Rede: Do Zero ao Diamante em 24 Meses",
    excerpt: "Histórias reais de sucesso e o caminho percorrido por líderes que alcançaram as maiores graduações. Estratégias de desenvolvimento pessoal, liderança e construção de equipes de alta performance.",
    image: "/lovable-uploads/eb8e05f4-9df5-4565-8cc5-f6adee4d7340.png",
    author: "Mariana Costa",
    date: "15 Jan 2025",
    category: "Carreira",
    categoryColor: "bg-turquoise text-turquoise-foreground",
    views: 1521,
    readTime: "10 min"
  },
  {
    id: 4,
    title: "Tecnologia e Automação: Ferramentas Essenciais para Networkers Modernos",
    excerpt: "CRMs, automação de marketing, funis de vendas digitais e IA aplicada ao MLM. Conheça as tecnologias que estão revolucionando o setor de vendas diretas e como implementá-las no seu negócio.",
    image: "/lovable-uploads/8e7873b6-f5c2-46b1-90d9-4d8ee04f836a.png",
    author: "Carlos Eduardo",
    date: "12 Jan 2025",
    category: "Tecnologia",
    categoryColor: "bg-accent text-accent-foreground",
    views: 756,
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Inovação Social: Como o MMN está Transformando Comunidades no Brasil",
    excerpt: "Projetos sociais liderados por empresas de marketing de rede que estão gerando impacto positivo. Saiba como alinhar propósito social com crescimento de negócio e fazer a diferença na sua comunidade.",
    image: "/lovable-uploads/219814cb-9a2a-40b5-a838-9f3076a5b95d.png",
    author: "Juliana Santos",
    date: "10 Jan 2025",
    category: "Inovação Social",
    categoryColor: "bg-primary text-primary-foreground",
    views: 892,
    readTime: "5 min"
  },
  {
    id: 6,
    title: "Mindset Empreendedor: Os 7 Hábitos dos Networkers de Alto Desempenho",
    excerpt: "Desenvolva a mentalidade vencedora necessária para alcançar resultados extraordinários no marketing de rede. Técnicas de produtividade, gestão de tempo e autodesenvolvimento dos maiores líderes do setor.",
    image: "/lovable-uploads/4d720d79-b4b3-494c-b4d5-81a40f3cf498.png",
    author: "Fernando Oliveira",
    date: "08 Jan 2025",
    category: "Empreendedorismo",
    categoryColor: "bg-purple text-purple-foreground",
    views: 1103,
    readTime: "9 min"
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPositionColor = (position: number) => {
    if (position === 1) return "bg-gradient-gold text-gold-foreground";
    if (position === 2) return "bg-muted text-foreground";
    if (position === 3) return "bg-accent/20 text-accent";
    return "bg-muted/50 text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            Blog UniversidadeMN
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo exclusivo sobre educação financeira, empreendedorismo, carreira, tecnologia e inovação social no marketing de rede
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Badge 
            variant={selectedCategory === "Todos" ? "default" : "outline"}
            className="cursor-pointer px-4 py-2"
            onClick={() => setSelectedCategory("Todos")}
          >
            Todos
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 ${selectedCategory === category.name ? category.color : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-[1.01]">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 aspect-video md:aspect-square bg-muted relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={post.categoryColor}>
                          {post.category}
                        </Badge>
                      </div>
                      {post.imageCredit && (
                        <div className="absolute bottom-1 right-2 text-[8px] text-white/70 bg-black/30 px-1 rounded">
                          Imagem: {post.imageCredit}
                        </div>
                      )}
                    </div>
                    
                    <div className="md:col-span-2 p-6">
                      <h2 className="font-bold text-xl text-foreground mb-3 line-clamp-2 leading-tight hover:text-gold-medium transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-2">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{post.readTime}</span>
                          <Button variant="ghost" size="sm" className="text-gold-medium hover:text-gold-dark p-0 h-auto font-semibold">
                            Ler mais →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
                Carregar mais artigos
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories Card */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gold-medium" style={{ color: 'hsl(43 96% 56%)' }} />
                Categorias
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                  >
                    <span className="font-medium text-sm">{category.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>

            {/* Top Companies Ranking */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-gold-medium" style={{ color: 'hsl(43 96% 56%)' }} />
                Top 5 Empresas
              </h3>
              <div className="space-y-3">
                {topCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${getPositionColor(company.position)}`}>
                      {company.position}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{company.name}</p>
                      <p className="text-xs text-muted-foreground">{company.votes.toLocaleString()} votos</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = '/empresas'}>
                Ver ranking completo
              </Button>
            </Card>

            {/* Newsletter Card */}
            <Card className="p-6 bg-gradient-gold text-gold-foreground">
              <h3 className="font-bold text-lg mb-2">
                Newsletter Semanal
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Receba os melhores artigos direto no seu email
              </p>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Seu email"
                  className="bg-white/20 border-white/30 text-gold-foreground placeholder:text-gold-foreground/70"
                />
                <Button variant="secondary" className="w-full bg-white/90 text-gold-dark hover:bg-white">
                  Assinar
                </Button>
              </div>
            </Card>

            {/* Popular Tags */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Tags Populares</h3>
              <div className="flex flex-wrap gap-2">
                {["MLM", "Liderança", "Renda Extra", "Negócio Digital", "Gestão", "Vendas", "Motivação", "Sucesso"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
