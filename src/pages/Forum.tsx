import { useState } from "react";
import { Search, MessageSquare, Users, Star, Eye, ThumbsUp, ThumbsDown, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Mock data
const questions = [
  {
    id: 1,
    title: "Se você pudesse dominar instantaneamente qualquer habilidade, qual seria e por quê?",
    content: "Considerando a publicidade efetiva...",
    author: {
      name: "João Silva",
      avatar: "/placeholder.svg",
      reputation: 245
    },
    category: "Desenvolvimento",
    votes: 15,
    answers: 8,
    views: 234,
    likes: 12,
    timeAgo: "há 2 horas",
    tags: ["carreira", "habilidades", "crescimento"]
  },
  {
    id: 2,
    title: "Se você tivesse que viver em um país diferente por um ano, onde escolheria?",
    content: "Considerando oportunidades de negócio...",
    author: {
      name: "Maria Santos",
      avatar: "/placeholder.svg",
      reputation: 189
    },
    category: "Desenvolvimento",
    votes: 23,
    answers: 12,
    views: 456,
    likes: 18,
    timeAgo: "há 3 horas",
    tags: ["viagem", "cultura", "experiência"]
  },
  {
    id: 3,
    title: "Qual é a melhor estratégia para construir uma rede de contatos sólida?",
    content: "Preciso de dicas práticas para networking...",
    author: {
      name: "Pedro Costa",
      avatar: "/placeholder.svg",
      reputation: 312
    },
    category: "Networking",
    votes: 31,
    answers: 15,
    views: 678,
    likes: 25,
    timeAgo: "há 5 horas",
    tags: ["networking", "contatos", "relacionamentos"]
  },
  {
    id: 4,
    title: "Como manter a motivação durante períodos difíceis nos negócios?",
    content: "Está sendo um período desafiador...",
    author: {
      name: "Ana Lima",
      avatar: "/placeholder.svg",
      reputation: 456
    },
    category: "Motivação",
    votes: 28,
    answers: 9,
    views: 523,
    likes: 22,
    timeAgo: "há 1 dia",
    tags: ["motivação", "negócios", "persistência"]
  },
  {
    id: 5,
    title: "Quais são as melhores práticas para liderança de equipe remota?",
    content: "Com o trabalho remoto se tornando comum...",
    author: {
      name: "Carlos Ferreira",
      avatar: "/placeholder.svg",
      reputation: 598
    },
    category: "Liderança",
    votes: 42,
    answers: 18,
    views: 892,
    likes: 35,
    timeAgo: "há 2 dias",
    tags: ["liderança", "remoto", "equipe"]
  }
];

const categories = [
  { name: "Finanças Pessoais", count: 156 },
  { name: "Desenvolvimento", count: 89 },
  { name: "Estratégia Max", count: 134 },
  { name: "Educação", count: 67 },
  { name: "Carreira Online", count: 98 }
];

const recentPosts = [
  "Treinamento e Educação",
  "Tendência e Futuro",
  "Certificados em Educação"
];

const topMembers = [
  { name: "William Doe", questions: 45 },
  { name: "Emily Anderson", questions: 38 },
  { name: "John Smith", questions: 32 },
  { name: "Sarah Wilson", questions: 28 }
];

const popularTags = [
  "Educação", "Análise", "Lei", "Semestre", "Cientista", "Feira", "Carreira", "Feedback", "PDF"
];

const Forum = () => {
  const [activeFilter, setActiveFilter] = useState("Recent Questions");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    "Recent Questions",
    "Most Answered", 
    "Unanswered Questions",
    "Most Visited",
    "Featured Questions"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Fórum</h1>
          <p className="text-xl mb-6">Faça perguntas, obtenha respostas sem complicação</p>
          <Button size="lg" variant="secondary">
            Criar Nova Conta
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Tem uma pergunta? Faça ou encontre uma resposta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
              Fazer Pergunta 💬
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className="text-sm"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {questions.map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={question.author.avatar} />
                        <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-sm">{question.author.name}</span>
                          <span className="text-muted-foreground text-sm">{question.timeAgo}</span>
                          <Badge variant="secondary" className="text-xs">
                            {question.category}
                          </Badge>
                        </div>

                        <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                          {question.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {question.content}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{question.votes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{question.answers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{question.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              <span>{question.likes}</span>
                            </div>
                          </div>

                          <Button size="sm" variant="default">
                            Responder
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  &lt;
                </Button>
                {[1, 2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  Next &gt;
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex justify-between items-center">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posts Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                      {post}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Members */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Membros Top</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{member.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {member.questions}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags Populares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs hover:bg-primary hover:text-white cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;