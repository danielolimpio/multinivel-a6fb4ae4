import type { RouteRecord } from 'vite-react-ssg';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

// Pages
import Index from './pages/Index';
import Forum from './pages/Forum';
import Blog from './pages/Blog';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import Ranking from './pages/Ranking';
import CompanyDetails from './pages/CompanyDetails';
import AllCompanies from './pages/AllCompanies';
import Comparativo from './pages/Comparativo';
import SuaEmpresaIdeal from './pages/SuaEmpresaIdeal';
import Privacidade from './pages/Privacidade';
import Termos from './pages/Termos';
import Contato from './pages/Contato';
import FAQ from './pages/FAQ';
import Suporte from './pages/Suporte';
import ComoFunciona from './pages/ComoFunciona';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import QuizPage from './pages/QuizPage';
import TopEarners from './pages/TopEarners';
import QuizResult from './pages/QuizResult';
import { quizQuestions } from './data/quizData';

const queryClient = new QueryClient();

// Layout component that provides shared UI elements
function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <AnnouncementBanner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// List of all company slugs for static generation (19 companies)
const companySlugs = [
  'hinode',
  'herbalife',
  'vorwerk',
  'forever-living',
  'nu-skin',
  'mary-kay',
  'amway',
  'ozonteck',
  'coway',
  '4life',
  'infinitus',
  'jan-rose',
  'melaleuca',
  'omnilife',
  'oriflame',
  'primerica',
  'royal-prestige',
  'tupperware',
  'utility-warehouse',
];

// List of all article slugs for static generation
const articleSlugs = [
  'como-ganhar-dinheiro-com-marketing-multinivel-em-2026',
  'marketing-de-rede-guia-completo-para-iniciantes',
  'network-marketing-tudo-sobre-multinivel-sistemas-mmn-relacionamento',
];

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // Static public pages - will be pre-rendered
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'forum',
        element: <Forum />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'sobre',
        element: <About />,
      },
      {
        path: 'ranking',
        element: <Ranking />,
      },
      {
        path: 'top-earners',
        element: <TopEarners />,
      },
      {
        path: 'empresas',
        element: <AllCompanies />,
      },
      {
        path: 'comparativo',
        element: <Comparativo />,
      },
      {
        path: 'network',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'sua-empresa-ideal',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'privacidade',
        element: <Privacidade />,
      },
      {
        path: 'termos',
        element: <Termos />,
      },
      {
        path: 'contato',
        element: <Contato />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'suporte',
        element: <Suporte />,
      },
      {
        path: 'como-funciona',
        element: <ComoFunciona />,
      },
      // Dynamic company pages - pre-rendered with getStaticPaths
      {
        path: 'empresa/:slug',
        element: <CompanyDetails />,
        entry: 'src/pages/CompanyDetails.tsx',
        getStaticPaths: () => companySlugs.map(slug => `/empresa/${slug}`),
      },
      // Dynamic article pages - pre-rendered with getStaticPaths
      {
        path: 'artigo/:slug',
        element: <ArticlePage />,
        entry: 'src/pages/ArticlePage.tsx',
        getStaticPaths: () => articleSlugs.map(slug => `/artigo/${slug}`),
      },
      // Quiz pages - pre-rendered with getStaticPaths
      {
        path: 'quiz/:slug',
        element: <QuizPage />,
        entry: 'src/pages/QuizPage.tsx',
        getStaticPaths: () => quizQuestions.map(q => `/quiz/${q.slug}`),
      },
      // Quiz result page
      {
        path: 'quiz/resultado',
        element: <QuizResult />,
      },
      // SPA-only pages (auth protected, not indexed)
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'admin/auth',
        element: <Auth userType="admin" />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'admin',
        element: <AdminDashboard />,
      },
      // Catch-all route
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
