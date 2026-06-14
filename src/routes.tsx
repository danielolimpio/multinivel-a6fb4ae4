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
import Top100 from './pages/Top100';
import QuizResult from './pages/QuizResult';
import Amway from './pages/empresas/Amway';
import Herbalife from './pages/empresas/Herbalife';
import Natura from './pages/empresas/Natura';
import Vorwerk from './pages/empresas/Vorwerk';
import MaryKay from './pages/empresas/MaryKay';
import NuSkin from './pages/empresas/NuSkin';
import ForeverLiving from './pages/empresas/ForeverLiving';
import Oriflame from './pages/empresas/Oriflame';
import Primerica from './pages/empresas/Primerica';
import Hinode from './pages/empresas/Hinode';
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
        path: 'top-100',
        element: <Top100 />,
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
        path: 'network/categorias-de-produtos-marketing-multinivel',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/tempo-dedicacao-marketing-multinivel',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/experiencia-vendas-diretas',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/investimento-inicial-marketing-multinivel',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/trabalhar-em-equipe-mmn',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/melhores-empresas-marketing-multinivel',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/treinamento-marketing-multinivel',
        element: <SuaEmpresaIdeal />,
      },
      {
        path: 'network/marketing-multinivel-internacional',
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
      // Dedicated premium company pages (must come before the generic /:slug route)
      { path: 'empresa/amway', element: <Amway />, entry: 'src/pages/empresas/Amway.tsx' },
      { path: 'empresa/herbalife', element: <Herbalife />, entry: 'src/pages/empresas/Herbalife.tsx' },
      { path: 'empresa/natura', element: <Natura />, entry: 'src/pages/empresas/Natura.tsx' },
      { path: 'empresa/vorwerk', element: <Vorwerk />, entry: 'src/pages/empresas/Vorwerk.tsx' },
      { path: 'empresa/mary-kay', element: <MaryKay />, entry: 'src/pages/empresas/MaryKay.tsx' },
      { path: 'empresa/nu-skin', element: <NuSkin />, entry: 'src/pages/empresas/NuSkin.tsx' },
      { path: 'empresa/forever-living', element: <ForeverLiving />, entry: 'src/pages/empresas/ForeverLiving.tsx' },
      { path: 'empresa/oriflame', element: <Oriflame />, entry: 'src/pages/empresas/Oriflame.tsx' },
      { path: 'empresa/primerica', element: <Primerica />, entry: 'src/pages/empresas/Primerica.tsx' },
      { path: 'empresa/hinode', element: <Hinode />, entry: 'src/pages/empresas/Hinode.tsx' },
      // Dynamic company pages - pre-rendered with getStaticPaths
      {
        path: 'empresa/:slug',
        element: <CompanyDetails />,
        entry: 'src/pages/CompanyDetails.tsx',
        getStaticPaths: () => companySlugs
          .filter((s) => !['amway','herbalife','natura','vorwerk','mary-kay','nu-skin','forever-living','oriflame','primerica','hinode'].includes(s))
          .map((slug) => `/empresa/${slug}`),
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
