import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

import { useQuizResponses } from "@/hooks/useQuizResponses";
import { quizQuestions } from "@/data/quizData";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  BookOpen, 
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Mail,
  Download,
  RotateCcw,
  Sparkles,
  BarChart3,
  Zap,
  Users,
  Lightbulb
} from "lucide-react";
import { toast } from "sonner";

const levelDescriptions = {
  iniciante: {
    title: "Explorador",
    subtitle: "Você está no início da sua jornada no MMN",
    description: "Você está nos primeiros passos do Marketing Multinível. Este é o momento de construir fundamentos sólidos: entender o modelo de negócios, desenvolver o mindset correto e criar suas primeiras conexões. Foque em aprendizado antes de escala.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600",
    icon: Lightbulb,
    recommendations: [
      { type: "book", title: "Go Pro: 7 Passos para se Tornar um Profissional", author: "Eric Worre", link: "https://amzn.to/go-pro" },
      { type: "book", title: "O Segredo do Network Marketing", author: "Randy Gage", link: "https://amzn.to/segredo-network" },
      { type: "course", title: "Fundamentos do MMN: Do Zero ao Primeiro Resultado", link: "/cursos/fundamentos-mmn" },
    ],
    priorities: [
      "Domine os produtos da sua empresa",
      "Desenvolva sua lista de contatos quentes",
      "Aprenda técnicas básicas de comunicação",
      "Participe de todos os treinamentos disponíveis",
    ],
  },
  intermediario: {
    title: "Construtor",
    subtitle: "Você está construindo sua base no MMN",
    description: "Você já entende o básico e está construindo consistência. É hora de sistematizar suas atividades, implementar ferramentas de produtividade e começar a desenvolver habilidades de liderança para formar sua equipe.",
    color: "from-purple to-primary",
    bgColor: "bg-purple/10",
    textColor: "text-purple",
    icon: Target,
    recommendations: [
      { type: "book", title: "DotCom Secrets", author: "Russell Brunson", link: "https://amzn.to/dotcom-secrets" },
      { type: "book", title: "Your First Year in Network Marketing", author: "Mark Yarnell", link: "https://amzn.to/first-year" },
      { type: "course", title: "Meta Ads para Empreendedores de Rede", link: "/cursos/meta-ads-mmn" },
    ],
    priorities: [
      "Implemente um CRM para gestão de contatos",
      "Comece a usar tráfego pago (R$500-1000/mês)",
      "Crie um funil de captação simples",
      "Desenvolva sua presença nas redes sociais",
    ],
  },
  avancado: {
    title: "Líder",
    subtitle: "Você é um líder consolidado no MMN",
    description: "Você domina os fundamentos e tem resultados consistentes. Seu próximo desafio é escalar: automatizar processos, formar novos líderes e explorar tecnologias avançadas como IA para multiplicar seus resultados.",
    color: "from-gold-medium to-gold-dark",
    bgColor: "bg-gold-light/20",
    textColor: "text-gold-dark",
    icon: Trophy,
    recommendations: [
      { type: "book", title: "Os 48 Princípios do Poder", author: "Robert Greene", link: "https://amzn.to/48-leis" },
      { type: "book", title: "Scaling Up", author: "Verne Harnish", link: "https://amzn.to/scaling-up" },
      { type: "course", title: "Masterclass: Escala e Liderança no MMN", link: "/cursos/masterclass-escala" },
    ],
    priorities: [
      "Automatize follow-ups com IA e chatbots",
      "Forme líderes para replicar seu método",
      "Diversifique suas fontes de leads",
      "Participe como palestrante em eventos",
    ],
  },
};

const skillCategories = [
  { key: "marketing_digital", label: "Marketing Digital", icon: Zap },
  { key: "vendas", label: "Vendas & Persuasão", icon: Target },
  { key: "lideranca", label: "Liderança", icon: Users },
  { key: "tecnologia", label: "Tecnologia & IA", icon: BarChart3 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const QuizResult = () => {
  const { state, getAllResponses, resetQuiz, setEmail, overallLevel, completedQuestions } = useQuizResponses();
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const responses = getAllResponses();
  const totalQuestions = quizQuestions.length;
  const completionPercentage = Math.round((completedQuestions / totalQuestions) * 100);
  
  const levelInfo = levelDescriptions[overallLevel];
  const LevelIcon = levelInfo.icon;

  // Calculate skill scores based on responses
  const calculateSkillScores = () => {
    const scores = {
      marketing_digital: 0,
      vendas: 0,
      lideranca: 0,
      tecnologia: 0,
    };
    
    // Map questions to skill categories
    const questionSkillMap: Record<string, keyof typeof scores> = {
      "uso-de-trafego-pago": "marketing_digital",
      "posicionamento-nas-redes": "marketing_digital",
      "planejamento-de-conteudo": "marketing_digital",
      "uso-de-video-no-mmn": "marketing_digital",
      "estrategias-de-geracao-de-leads": "vendas",
      "habilidades-de-persuasao": "vendas",
      "funil-de-vendas-mmn": "vendas",
      "lead-magnet-mmn": "vendas",
      "papel-no-mmn": "lideranca",
      "lideranca-de-equipe": "lideranca",
      "educacao-continuada-mmn": "lideranca",
      "desafios-atuais-mmn": "lideranca",
      "uso-de-ia-no-mmn": "tecnologia",
      "automacao-de-vendas": "tecnologia",
      "gestao-de-contatos-mmn": "tecnologia",
      "chatbots-no-mmn": "tecnologia",
      "ferramentas-de-comunicacao": "tecnologia",
      "analise-de-dados-mmn": "tecnologia",
      "segmentacao-de-audiencia": "marketing_digital",
      "tempo-de-atuacao-mmn": "lideranca",
    };

    responses.forEach(response => {
      const skill = questionSkillMap[response.slug];
      if (skill && response.level) {
        const levelScore = response.level === 'avancado' ? 100 : response.level === 'intermediario' ? 60 : 30;
        scores[skill] = Math.max(scores[skill], levelScore);
      }
    });

    // Calculate averages
    Object.keys(scores).forEach(key => {
      const k = key as keyof typeof scores;
      if (scores[k] === 0) scores[k] = 20; // Base score
    });

    return scores;
  };

  const skillScores = calculateSkillScores();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setEmail(emailInput);
    setEmailSubmitted(true);
    setIsSubmitting(false);
    toast.success("Relatório enviado! Verifique seu e-mail.");
  };

  const handleResetQuiz = () => {
    resetQuiz();
    window.location.href = "/quiz/papel-no-mmn/";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Seu Diagnóstico de MMN | Resultado do Quiz"
        description="Veja seu diagnóstico personalizado de Marketing Multinível com recomendações de livros, cursos e próximos passos para acelerar seus resultados."
        canonical="/quiz/resultado/"
        noindex={true}
      />
      <AnnouncementBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <motion.div 
                className={`p-4 rounded-full bg-gradient-to-br ${levelInfo.color}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <LevelIcon className="h-12 w-12 text-primary-foreground" />
              </motion.div>
            </div>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Seu Perfil: <span className={`bg-gradient-to-r ${levelInfo.color} bg-clip-text text-transparent`}>{levelInfo.title}</span>
            </motion.h1>
            <p className="text-lg text-muted-foreground">{levelInfo.subtitle}</p>
          </motion.div>

          {/* Completion Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Quiz Completado</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{completionPercentage}%</span>
                </div>
                <Progress value={completionPercentage} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">
                  {completedQuestions} de {totalQuestions} perguntas respondidas
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Description */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card className={`${levelInfo.bgColor} border-0`}>
              <CardContent className="p-6 md:p-8">
                <p className="text-lg leading-relaxed text-foreground">
                  {levelInfo.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Chart */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Análise de Habilidades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories.map((skill, index) => {
                  const score = skillScores[skill.key as keyof typeof skillScores];
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div 
                      key={skill.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <SkillIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{skill.label}</span>
                        </div>
                        <span className="text-sm font-bold text-primary">{score}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${levelInfo.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${score}%` }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Priorities */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Suas Prioridades para os Próximos 90 Dias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {levelInfo.priorities.map((priority, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${levelInfo.color} flex items-center justify-center text-primary-foreground font-bold text-sm`}>
                        {index + 1}
                      </div>
                      <p className="text-foreground pt-1">{priority}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recommendations */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-gold-medium" />
                  Recomendações Personalizadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {levelInfo.recommendations.map((rec, index) => (
                    <motion.a
                      key={index}
                      href={rec.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border-2 border-border hover:border-primary transition-colors group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {rec.type === "book" ? (
                          <BookOpen className="h-5 w-5 text-gold-medium" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-purple" />
                        )}
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                          {rec.type === "book" ? "Livro" : "Curso"}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {rec.title}
                      </h4>
                      {rec.author && (
                        <p className="text-sm text-muted-foreground">por {rec.author}</p>
                      )}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email Capture */}
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="bg-gradient-to-br from-purple/10 to-primary/10 border-purple/20">
              <CardContent className="p-6 md:p-8">
                {!emailSubmitted ? (
                  <div className="text-center">
                    <Mail className="h-12 w-12 text-purple mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Receba seu Relatório Completo
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Enviamos um PDF detalhado com seu diagnóstico, plano de ação personalizado e recursos exclusivos.
                    </p>
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <Input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="flex-1"
                        required
                      />
                      <Button type="submit" disabled={isSubmitting} className="whitespace-nowrap">
                        {isSubmitting ? (
                          <>Enviando...</>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Receber PDF
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Relatório Enviado!
                    </h3>
                    <p className="text-muted-foreground">
                      Verifique sua caixa de entrada (e spam) em alguns minutos.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button variant="outline" onClick={handleResetQuiz} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Refazer Quiz
            </Button>
            <Button asChild>
              <Link to="/blog/">
                <TrendingUp className="h-4 w-4 mr-2" />
                Explorar Conteúdos
              </Link>
            </Button>
          </motion.div>

          {/* Incomplete Warning */}
          {completionPercentage < 100 && (
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <Card className="border-amber-300 bg-amber-500/10">
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Quiz Incompleto</p>
                    <p className="text-sm text-muted-foreground">
                      Complete todas as perguntas para um diagnóstico mais preciso.{" "}
                      <Link to="/quiz/papel-no-mmn/" className="underline hover:no-underline text-primary">
                        Continuar quiz
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizResult;
