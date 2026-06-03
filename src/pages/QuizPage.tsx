import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  getQuestionBySlug, 
  getNextQuestionSlug, 
  getPreviousQuestionSlug,
  getQuestionIndex,
  totalQuestions 
} from "@/data/quizData";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap, Lightbulb, HelpCircle, ArrowRight } from "lucide-react";

import { QuizFAQSchema } from "@/components/QuizFAQSchema";
import { useQuizResponses } from "@/hooks/useQuizResponses";

const SITE_URL = "https://www.universidademultinivel.com";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const optionVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const QuizPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { saveResponse, getResponse, overallLevel } = useQuizResponses();
  
  const question = getQuestionBySlug(slug || '');
  
  // Load saved response when question changes
  useEffect(() => {
    if (slug) {
      const savedResponse = getResponse(slug);
      if (savedResponse) {
        setSelectedOptions(savedResponse.selectedOptions);
      } else {
        setSelectedOptions([]);
      }
      setIsTransitioning(false);
    }
  }, [slug, getResponse]);
  
  if (!question) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold">Pergunta não encontrada</h1>
          <Link to="/quiz/papel-no-mmn/" className="text-primary hover:underline">
            Voltar ao início do quiz
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = getQuestionIndex(slug || '');
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const nextSlug = getNextQuestionSlug(slug || '');
  const prevSlug = getPreviousQuestionSlug(slug || '');

  const handleOptionChange = (value: string) => {
    setSelectedOptions(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    // Determine the level based on selected options
    const selectedOption = question.options.find(opt => selectedOptions.includes(opt.value));
    const level = selectedOption?.level || null;
    
    // Save response before navigating
    saveResponse(slug || '', selectedOptions, level);
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (nextSlug) {
        navigate(`/quiz/${nextSlug}/`);
      } else {
        // Navigate to results page
        navigate('/quiz/resultado/');
      }
    }, 200);
  };

  // Get personalized recommendation based on user level
  const recommendation = question.recommendations[overallLevel] ||
    question.recommendations.general || 
    question.recommendations.intermediario || 
    question.recommendations.iniciante ||
    question.recommendations.avancado;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={question.title}
        description={question.metaDescription}
        canonical={`/quiz/${slug}/`}
      />
      <QuizFAQSchema 
        faq={question.faq}
        pageTitle={question.title}
        pageUrl={`${SITE_URL}/quiz/${slug}/`}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slug}
            variants={containerVariants}
            initial="hidden"
            animate={isTransitioning ? "exit" : "visible"}
            exit="exit"
          >
            {/* Progress Bar */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Pergunta {currentIndex + 1} de {totalQuestions}</span>
                <span>{Math.round(progress)}% completo</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Question Section */}
            <motion.div variants={itemVariants}>
              <Card className="mb-8 border-2 border-primary/20 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <motion.h1 
                    className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {question.question}
                  </motion.h1>
                  
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <motion.label
                        key={index}
                        custom={index}
                        variants={optionVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          selectedOptions.includes(option.value)
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Checkbox
                          checked={selectedOptions.includes(option.value)}
                          onCheckedChange={() => handleOptionChange(option.value)}
                        />
                        <span className="text-base md:text-lg">{option.label}</span>
                      </motion.label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mini Article */}
            <motion.div variants={itemVariants}>
              <Card className="mb-8 bg-gradient-to-br from-purple/5 to-primary/5 border-purple/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="h-6 w-6 text-gold-medium" />
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {question.article.title}
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    {question.article.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recommendation */}
            {recommendation && (
              <motion.div variants={itemVariants}>
                <Card className="mb-8 border-gold-medium/30 bg-gradient-to-r from-gold-light/10 to-gold-dark/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {recommendation.type === 'book' ? (
                        <BookOpen className="h-8 w-8 text-gold-medium flex-shrink-0" />
                      ) : (
                        <GraduationCap className="h-8 w-8 text-gold-medium flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-sm font-medium text-gold-dark uppercase tracking-wide">
                          {recommendation.type === 'book' ? '📚 Livro Recomendado' : '🎓 Curso Recomendado'}
                        </span>
                        <h3 className="text-lg font-bold text-foreground mt-1">
                          {recommendation.title}
                        </h3>
                        {recommendation.author && (
                          <p className="text-muted-foreground">por {recommendation.author}</p>
                        )}
                        {recommendation.link && (
                          <a 
                            href={recommendation.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline mt-2"
                          >
                            Ver mais <ArrowRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* FAQ */}
            <motion.div variants={itemVariants}>
              <Card className="mb-8">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <HelpCircle className="h-6 w-6 text-purple" />
                    <h2 className="text-xl font-bold text-foreground">Perguntas Frequentes</h2>
                  </div>
                  <div className="space-y-4">
                    {question.faq.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="border-b border-border pb-4 last:border-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-between items-center"
            >
              {prevSlug ? (
                <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" asChild>
                    <Link to={`/quiz/${prevSlug}/`}>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Link>
                  </Button>
                </motion.div>
              ) : (
                <div />
              )}
              
              <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.98 }}>
                {nextSlug ? (
                  <Button onClick={handleNext} disabled={selectedOptions.length === 0}>
                    Próximo
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleNext} disabled={selectedOptions.length === 0}>
                    Ver Resultado
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
