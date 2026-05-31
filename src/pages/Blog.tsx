import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, TrendingUp, Trophy, Eye } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const categories = [
  { name: "Educação Financeira", count: 2, color: "bg-gradient-gold text-gold-foreground" },
  { name: "Empreendedorismo", count: 0, color: "bg-gradient-gold text-gold-foreground" },
  { name: "Carreira", count: 0, color: "bg-turquoise text-turquoise-foreground" },
  { name: "Tecnologia", count: 0, color: "bg-gradient-gold text-gold-foreground" },
  { name: "Inovação Social", count: 0, color: "bg-gradient-blue text-white" },
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
    slug: "como-ganhar-dinheiro-com-marketing-multinivel-em-2026",
    title: "Como Ganhar Dinheiro com Marketing Multinível em 2026",
    excerpt: "Descubra estratégias reais para lucrar com MMN em 2026, evitando golpes e construindo renda passiva com ética e consistência. Um guia completo com 7 pilares fundamentais.",
    image: "/images/artigos/como-ganhar-dinheiro-mmn-2026.jpg",
    author: "Equipe UniversidadeMN",
    date: "08 Jan 2026",
    category: "Educação Financeira",
    categoryColor: "bg-gradient-blue text-[hsl(40_85%_60%)] border border-[hsl(40_85%_50%)] shadow-md",
    views: 1247,
    readTime: "18 min",
  },
  {
    id: 2,
    slug: "marketing-de-rede-guia-completo-para-iniciantes",
    title: "Marketing de Rede: Guia Completo para Iniciantes",
    excerpt: "Comece do zero no network marketing com este guia prático: estrutura, mindset, recrutamento e erros que arruínam novos empreendedores.",
    image: "/images/artigos/marketing-de-rede-guia-completo-iniciantes.jpg",
    author: "Equipe UniversidadeMN",
    date: "09 Jan 2026",
    category: "Educação Financeira",
    categoryColor: "bg-gold-medium text-gold-foreground",
    views: 856,
    readTime: "22 min",
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
      <SEO 
        title="Blog UniversidadeMN - Notícias e Artigos sobre Marketing de Rede"
        description="Conteúdo exclusivo sobre educação financeira, empreendedorismo, carreira, tecnologia e inovação social no marketing de rede."
        canonical="/blog"
      />
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-16 sm:pt-20">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient-blue">
            Blog UniversidadeMN
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-2">
          <Badge 
            variant={selectedCategory === "Todos" ? "default" : "outline"}
            className="cursor-pointer px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm"
            onClick={() => setSelectedCategory("Todos")}
          >
            Todos
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className={`cursor-pointer px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${selectedCategory === category.name ? category.color : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="hidden sm:inline">{category.name} ({category.count})</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} to={`/artigo/${post.slug}/`} className="block">
                  <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-[1.01]">
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-0 sm:gap-4">
                      <div className="sm:col-span-1 aspect-video sm:aspect-square bg-muted relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <Badge className={`${post.categoryColor} text-xs`}>
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2 p-4 sm:p-5">
                        <h2 className="font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3 line-clamp-2 leading-tight hover:text-gold-medium transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground gap-2">
                          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span className="truncate max-w-[80px] sm:max-w-none">{post.author}</span>
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
                          
                          <div className="flex items-center justify-between sm:justify-end gap-2 mt-2 sm:mt-0">
                            <span className="text-muted-foreground">{post.readTime}</span>
                            <span className="text-gold-medium font-semibold text-xs sm:text-sm">
                              Ler mais →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nenhum artigo encontrado.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Categories Card */}
            <Card className="p-6 border-[hsl(40_85%_50%)]/40">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="p-2 rounded-lg icon-premium inline-flex">
                  <TrendingUp className="w-4 h-4 text-[hsl(40_85%_55%)]" />
                </span>
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
            <Card className="p-6 border-[hsl(40_85%_50%)]/40">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="p-2 rounded-lg icon-premium inline-flex">
                  <Trophy className="w-4 h-4 text-[hsl(40_85%_55%)]" />
                </span>
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
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/empresas/">Ver ranking completo</Link>
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
