import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Globe } from "lucide-react";

export function Footer() {
  const footerLinks = {
    empresa: [
      { name: "Sobre Nós", href: "/sobre" },
      { name: "Ranking", href: "/ranking" },
      { name: "Política de Privacidade", href: "/privacidade" },
      { name: "Termos de Uso", href: "/termos" },
      { name: "Contato", href: "/contato" }
    ],
    comunidade: [
      { name: "Fórum", href: "/forum" },
      { name: "Blog", href: "/blog" },
      { name: "Comparativo", href: "/comparativo" },
      { name: "Network", href: "/network" },
      { name: "FAQ", href: "/faq" }
    ],
    recursos: [
      { name: "Todas as Empresas", href: "/empresas" },
      { name: "Como Funciona", href: "/como-funciona" },
      { name: "Suporte", href: "/suporte" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gradient-blue text-primary-foreground relative">
      {/* Logo positioned to overlap from above */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 sm:-top-16 z-40">
        <img 
          src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
          alt="Logo" 
          className="h-24 w-24 sm:h-32 sm:w-32 object-contain" 
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section with top padding for logo */}
        <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 border-b border-primary-foreground/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Receba as últimas notícias do mercado de marketing de rede, atualizações do ranking e dicas exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-3 px-4 sm:px-0">
              <Input 
                placeholder="Seu melhor e-mail"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="registerPremium">
                <Mail className="w-4 h-4 mr-2" />
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Brand Column - without logo since it's positioned above */}
            <div className="col-span-2 lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="pt-4 sm:pt-8"></div> {/* Space for overlapping logo */}
              <p className="text-primary-foreground/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base text-center lg:text-left">
                O portal de referência em Marketing de Rede no Brasil. 
                Conectando oportunidades, construindo sucesso.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full icon-premium text-[hsl(40_85%_55%)] hover:brightness-125 transition-all"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-gradient-gold text-sm sm:text-base">Empresa</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-[hsl(40_85%_55%)] transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-gradient-gold text-sm sm:text-base">Comunidade</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.comunidade.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-[hsl(40_85%_55%)] transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-gradient-gold text-sm sm:text-base">Recursos</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.recursos.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-[hsl(40_85%_55%)] transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="border-primary-foreground/10" />

        {/* Bottom Footer */}
        <div className="py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-left">
              Copyright © 2025 | Universidade Multinível | Todos os direitos reservados | Desenvolvido por{" "}
              <a 
                href="https://danielolimpio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gradient-gold font-semibold hover:opacity-80 transition-opacity"
              >
                DanielOlimpio
              </a>
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground/70 hover:text-[hsl(40_85%_55%)] hover:bg-transparent text-xs sm:text-sm h-8">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Português (BR)
              </Button>
              <span className="text-[hsl(40_85%_55%)]/40 hidden sm:inline">|</span>
              <a href="/privacidade" className="text-primary-foreground/70 hover:text-[hsl(40_85%_55%)] text-xs sm:text-sm">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}