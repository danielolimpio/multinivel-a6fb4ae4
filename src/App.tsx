import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Ranking from "./pages/Ranking";
import CompanyDetails from "./pages/CompanyDetails";
import AllCompanies from "./pages/AllCompanies";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Comparativo from "./pages/Comparativo";
import SuaEmpresaIdeal from "./pages/SuaEmpresaIdeal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/empresa/:slug" element={<CompanyDetails />} />
          <Route path="/empresas" element={<AllCompanies />} />
          <Route path="/comparativo" element={<Comparativo />} />
          <Route path="/sua-empresa-ideal" element={<SuaEmpresaIdeal />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/auth" element={<Auth userType="admin" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
