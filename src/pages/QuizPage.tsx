import { useParams, Link, useNavigate } from "react-router-dom";
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
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { QuizFAQSchema } from "@/components/QuizFAQSchema";
import { useQuizResponses } from "@/hooks/useQuizResponses";

const SITE_URL = "https://www.universidademultinivel.com";

const QuizPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
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
    
    if (nextSlug) {
      navigate(`/quiz/${nextSlug}/`);
    } else {
      // Navigate to results page
      navigate('/quiz/relatorio-final/');
    }
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
      <AnnouncementBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Pergunta {currentIndex + 1} de {totalQuestions}</span>
            <span>{Math.round(progress)}% completo</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Question Section */}
        <Card className="mb-8 border-2 border-primary/20 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {question.question}
            </h1>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
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
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mini Article */}
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

        {/* Recommendation */}
        {recommendation && (
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
        )}

        {/* FAQ */}
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-purple" />
              <h2 className="text-xl font-bold text-foreground">Perguntas Frequentes</h2>
            </div>
            <div className="space-y-4">
              {question.faq.map((item, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-0">
                  <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {prevSlug ? (
            <Button variant="outline" asChild>
              <Link to={`/quiz/${prevSlug}/`}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Link>
            </Button>
          ) : (
            <div />
          )}
          
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
