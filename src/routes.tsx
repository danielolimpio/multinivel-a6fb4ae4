import type { RouteRecord } from 'vite-react-ssg';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

// Pages
import Index from './pages/Index';
import Forum from './pages/Forum';
import Blog from './pages/Blog';
import About from './pages/About';
import Ranking from './pages/Ranking';
import CompanyDetails from './pages/CompanyDetails';
import AllCompanies from './pages/AllCompanies';
import Comparativo from './pages/Comparativo';
import SuaEmpresaIdeal from './pages/SuaEmpresaIdeal';
import Privacidade from './pages/Privacidade';
import Termos from './pages/Termos';
import Contato from './pages/Contato';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Layout component that provides shared UI elements
function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// List of all company slugs for static generation
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
        path: 'empresas',
        element: <AllCompanies />,
      },
      {
        path: 'comparativo',
        element: <Comparativo />,
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
      // Dynamic company pages - pre-rendered with getStaticPaths
      {
        path: 'empresa/:slug',
        element: <CompanyDetails />,
        entry: 'src/pages/CompanyDetails.tsx',
        getStaticPaths: () => companySlugs.map(slug => `/empresa/${slug}`),
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
