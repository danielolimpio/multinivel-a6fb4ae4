import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, DollarSign } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Ranking", href: "/ranking" },
    { name: "Notícias", href: "/noticias" },
    { name: "Fórum", href: "/forum" },
    { name: "Comunidade", href: "/comunidade" },
    { name: "Sobre", href: "/sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border relative overflow-visible">
      {/* Top Menu */}
      <div className="bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-muted/50"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                PT
              </Button>
              <Button variant="outline" size="sm">
                Entrar
              </Button>
              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                Cadastre-se
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col items-center space-y-4 mt-8">
                    <img 
                      src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
                      alt="Logo" 
                      className="h-16 w-16 object-contain mb-4" 
                    />
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="border-t pt-4 space-y-2 w-full">
                      <Button variant="ghost" className="w-full justify-start">
                        <Globe className="h-4 w-4 mr-2" />
                        Português
                      </Button>
                      <Button variant="outline" className="w-full">
                        Entrar
                      </Button>
                      <Button className="w-full bg-gradient-primary hover:opacity-90">
                        Cadastre-se
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Stats and Logo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between relative">
          {/* Left Stats - Desktop */}
          <div className="hidden md:flex flex-1 justify-start">
            <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">46 bilhões</div>
                <div className="text-xs text-muted-foreground">Pagamento total da comissão</div>
              </div>
            </div>
          </div>

          {/* Logo - Center - positioned to overlap into next section */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 mt-8">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
                alt="Logo" 
                className="h-32 w-32 object-contain relative z-50" 
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}
              />
            </div>
          </div>

          {/* Right Stats - Desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">250 bilhões</div>
                <div className="text-xs text-muted-foreground">Vendas totais de todas as empresas</div>
              </div>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="md:hidden absolute inset-x-0 bottom-0 flex justify-center space-x-4 pb-2">
            <div className="flex items-center space-x-1 bg-muted/50 px-2 py-1 rounded text-xs">
              <DollarSign className="h-3 w-3 text-primary" />
              <span className="font-bold">46bi</span>
            </div>
            <div className="flex items-center space-x-1 bg-muted/50 px-2 py-1 rounded text-xs">
              <DollarSign className="h-3 w-3 text-primary" />
              <span className="font-bold">250bi</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}