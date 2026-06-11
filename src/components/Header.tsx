import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, DollarSign, ChevronDown, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FlagIcon } from "@/components/FlagIcon";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState('pt');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    window.location.href = `/blog?q=${encodeURIComponent(q)}`;
    setIsSearchOpen(false);
  };

  
  const languages = [
    { code: 'pt', name: 'Portugal' },
    { code: 'en', name: 'Reino Unido' },
    { code: 'es', name: 'Espanha' },
    { code: 'fr', name: 'França' },
    { code: 'de', name: 'Alemanha' },
    { code: 'it', name: 'Itália' },
    { code: 'zh', name: 'China' },
    { code: 'ja', name: 'Japão' },
    { code: 'ru', name: 'Rússia' },
    { code: 'ar', name: 'Liga Árabe' },
    { code: 'hi', name: 'Índia' },
    { code: 'nl', name: 'Holanda' },
    { code: 'pl', name: 'Polônia' },
    { code: 'tr', name: 'Turquia' },
    { code: 'ko', name: 'Coreia do Sul' },
    { code: 'vi', name: 'Vietnã' },
    { code: 'id', name: 'Indonésia' },
    { code: 'tl', name: 'Filipinas' },
    { code: 'hr', name: 'Croácia' }
  ];

  const translations = {
    pt: {
      home: "Home",
      about: "Sobre", 
      ranking: "Ranking",
      news: "Notícias",
      forum: "Fórum",
      community: "Comparativo",
      testimonials: "Network",
      contact: "Contato",
      login: "Entrar",
      register: "Cadastre-se",
      totalCommission: "Pagamento total da comissão",
      totalSales: "Vendas totais de todas as empresas"
    },
    en: {
      home: "Home",
      about: "About",
      ranking: "Ranking",
      news: "News",
      forum: "Forum",
      community: "Comparison",
      testimonials: "Your Ideal Company",
      contact: "Contact",
      login: "Login",
      register: "Sign Up",
      totalCommission: "Total commission payment",
      totalSales: "Total sales of all companies"
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      ranking: "Ranking",
      news: "Noticias",
      forum: "Foro",
      community: "Comparativo",
      testimonials: "Tu Empresa Ideal", 
      contact: "Contacto",
      login: "Iniciar Sesión",
      register: "Registrarse",
      totalCommission: "Pago total de comisiones",
      totalSales: "Ventas totales de todas las empresas"
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      ranking: "Classement",
      news: "Actualités",
      forum: "Forum",
      community: "Comparatif",
      testimonials: "Votre Entreprise Idéale",
      contact: "Contact",
      login: "Se connecter",
      register: "S'inscrire",
      totalCommission: "Paiement total des commissions",
      totalSales: "Ventes totales de toutes les entreprises"
    },
    de: {
      home: "Startseite",
      about: "Über uns",
      ranking: "Rangliste",
      news: "Nachrichten",
      forum: "Forum",
      community: "Vergleich",
      testimonials: "Ihr Ideales Unternehmen",
      contact: "Kontakt",
      login: "Anmelden",
      register: "Registrieren",
      totalCommission: "Gesamte Provisionszahlung",
      totalSales: "Gesamtumsatz aller Unternehmen"
    },
    it: {
      home: "Home",
      about: "Chi siamo",
      ranking: "Classifica",
      news: "Notizie",
      forum: "Forum",
      community: "Confronto",
      testimonials: "La Tua Azienda Ideale",
      contact: "Contatti",
      login: "Accedi",
      register: "Registrati",
      totalCommission: "Pagamento totale commissioni",
      totalSales: "Vendite totali di tutte le aziende"
    },
    ru: {
      home: "Главная",
      about: "О нас", 
      ranking: "Рейтинг",
      news: "Новости",
      forum: "Форум",
      community: "Сравнение",
      testimonials: "Ваша Идеальная Компания",
      contact: "Контакты",
      login: "Войти",
      register: "Регистрация",
      totalCommission: "Общий платеж комиссии",
      totalSales: "Общие продажи всех компаний"
    },
    zh: {
      home: "首页",
      about: "关于我们",
      ranking: "排名",
      news: "新闻",
      forum: "论坛",
      community: "比较",
      testimonials: "您的理想公司",
      contact: "联系我们",
      login: "登录",
      register: "注册",
      totalCommission: "总佣金支付",
      totalSales: "所有公司总销售额"
    },
    ja: {
      home: "ホーム",
      about: "私たちについて",
      ranking: "ランキング",
      news: "ニュース",
      forum: "フォーラム",
      community: "比較", 
      testimonials: "あなたの理想の会社",
      contact: "お問い合わせ",
      login: "ログイン",
      register: "登録",
      totalCommission: "総手数料支払い",
      totalSales: "全企業の総売上"
    },
    ko: {
      home: "홈",
      about: "회사소개",
      ranking: "순위",
      news: "뉴스",
      forum: "포럼",
      community: "비교",
      testimonials: "당신의 이상적인 회사",
      contact: "연락처",
      login: "로그인",
      register: "회원가입",
      totalCommission: "총 수수료 지급",
      totalSales: "모든 회사의 총 매출"
    },
    ar: {
      home: "الرئيسية",
      about: "معلومات عنا",
      ranking: "التصنيف",
      news: "الأخبار",
      forum: "المنتدى",
      community: "المقارنة",
      testimonials: "شركتك المثالية",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      register: "التسجيل",
      totalCommission: "إجمالي دفع العمولات",
      totalSales: "إجمالي مبيعات جميع الشركات"
    },
    hi: {
      home: "होम",
      about: "हमारे बारे में",
      ranking: "रैंकिंग",
      news: "समाचार",
      forum: "फोरम",
      community: "तुलना",
      testimonials: "आपकी आदर्श कंपनी",
      contact: "संपर्क करें",
      login: "लॉगिन करें",
      register: "साइन अप करें",
      totalCommission: "कुल कमीशन भुगतान",
      totalSales: "सभी कंपनियों की कुल बिक्री"
    },
    th: {
      home: "หน้าแรก", 
      about: "เกี่ยวกับเรา",
      ranking: "อันดับ",
      news: "ข่าวสาร",
      forum: "ฟอรั่ม",
      community: "การเปรียบเทียบ",
      testimonials: "บริษัทในอุดมคติของคุณ",
      contact: "ติดต่อ",
      login: "เข้าสู่ระบบ",
      register: "สมัครสมาชิก",
      totalCommission: "การจ่ายค่าคอมมิชชั่นรวม",
      totalSales: "ยอดขายรวมของทุกบริษัท"
    },
    vi: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      ranking: "Xếp hạng",
      news: "Tin tức",
      forum: "Diễn đàn",
      community: "So sánh",
      testimonials: "Công Ty Lý Tưởng Của Bạn",
      contact: "Liên hệ",
      login: "Đăng nhập",
      register: "Đăng ký",
      totalCommission: "Tổng thanh toán hoa hồng",
      totalSales: "Tổng doanh số của tất cả công ty"
    },
    tr: {
      home: "Ana Sayfa",
      about: "Hakkımızda", 
      ranking: "Sıralama",
      news: "Haberler",
      forum: "Forum",
      community: "Karşılaştırma",
      testimonials: "İdeal Şirketiniz",
      contact: "İletişim",
      login: "Giriş Yap",
      register: "Kayıt Ol",
      totalCommission: "Toplam komisyon ödemesi",
      totalSales: "Tüm şirketlerin toplam satışları"
    },
    pl: {
      home: "Strona główna",
      about: "O nas",
      ranking: "Ranking",
      news: "Wiadomości",
      forum: "Forum",
      community: "Porównanie",
      testimonials: "Twoja Idealna Firma",
      contact: "Kontakt",
      login: "Zaloguj się",
      register: "Zarejestruj się",
      totalCommission: "Łączna płatność prowizji",
      totalSales: "Łączna sprzedaż wszystkich firm"
    },
    nl: {
      home: "Thuis",
      about: "Over ons",
      ranking: "Ranglijst",
      news: "Nieuws",
      forum: "Forum",
      community: "Vergelijking", 
      testimonials: "Uw Ideale Bedrijf",
      contact: "Contact",
      login: "Inloggen",  
      register: "Aanmelden",
      totalCommission: "Totale commissiebetaling",
      totalSales: "Totale verkopen van alle bedrijven"
    },
    sv: {
      home: "Hem",
      about: "Om oss",
      ranking: "Rankning",
      news: "Nyheter",
      forum: "Forum",
      community: "Jämförelse",
      testimonials: "Ditt Ideala Företag",
      contact: "Kontakt",
      login: "Logga in",
      register: "Registrera",
      totalCommission: "Total provisionsbetalning",
      totalSales: "Total försäljning för alla företag"
    }
  };

  const currentTranslations = translations[selectedLanguage as keyof typeof translations] || translations.pt;

  // Detect browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = languages.find(lang => lang.code === browserLang);
    if (supportedLang) {
      setSelectedLanguage(browserLang);
    }
  }, []);

  const navigation = [
    { name: currentTranslations.home, href: "/" },
    { name: currentTranslations.about, href: "/sobre" },
    { name: currentTranslations.ranking, href: "/ranking" },
    { name: "Top 100", href: "/top-100" },
    { name: "Blog", href: "/blog" },
    { name: currentTranslations.forum, href: "/forum" },
    { name: currentTranslations.community, href: "/comparativo" },
    { name: currentTranslations.testimonials, href: "/network" },
    { name: currentTranslations.contact, href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[hsl(40_85%_50%)]/30 shadow-sm">
      {/* Top Menu */}
      <div className="top-nav-gold border-b border-[hsl(40_85%_50%)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 top-nav-gold">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-[hsl(220_60%_15%)] hover:text-[hsl(220_60%_15%)] hover:bg-white/20 rounded-full"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Pesquisar"
              >
                <Search className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 text-[hsl(220_60%_15%)] hover:text-[hsl(220_60%_15%)] hover:bg-white/20 rounded-full font-semibold">
                    <FlagIcon countryCode={selectedLanguage} size="sm" />
                    <Globe className="w-3 h-3" />
                    {selectedLanguage.toUpperCase()}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => setSelectedLanguage(language.code)}
                      className="flex items-center gap-2 cursor-pointer py-1.5"
                    >
                      <FlagIcon countryCode={language.code} size="sm" />
                      <span className="text-sm">{language.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="premium" size="sm" className="text-white" onClick={() => window.location.href = '/auth'}>
                Login
              </Button>
              <Button variant="registerPremium" size="sm" onClick={() => window.location.href = '/auth'}>
                {currentTranslations.register}
              </Button>
            </div>

            {/* Mobile actions: language (left of hamburger) + hamburger + search */}
            <div className="md:hidden w-full flex items-center justify-end gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 text-[hsl(220_60%_15%)] hover:bg-white/20 rounded-full gap-1"
                    aria-label="Idioma"
                  >
                    <Globe className="h-4 w-4" />
                    <FlagIcon countryCode={selectedLanguage} size="sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="z-[100] max-h-[300px] overflow-y-auto bg-popover">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => setSelectedLanguage(language.code)}
                      className="flex items-center gap-2 cursor-pointer py-2"
                    >
                      <FlagIcon countryCode={language.code} size="sm" />
                      <span className="text-sm">{language.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 hover:bg-gradient-blue hover:text-[hsl(40_85%_60%)] focus-visible:bg-gradient-blue data-[state=open]:bg-gradient-blue data-[state=open]:text-[hsl(40_85%_60%)]"
                  >
                    <Menu className="h-8 w-8 text-primary" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
                  <div className="flex flex-col h-full">
                    {/* Header with Logo */}
                    <div className="flex items-center justify-center p-4 border-b border-border bg-muted/30">
                      <img 
                        src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
                        alt="Logo" 
                        width={512}
                        height={512}
                        className="h-14 w-14 object-contain" 
                      />
                    </div>

                    
                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-4">
                      <nav className="flex flex-col">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground hover:text-primary hover:bg-muted/50 px-6 py-3 text-base font-medium transition-colors border-b border-border/50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    
                    {/* Footer Actions */}
                    <div className="border-t border-border p-4 space-y-3 bg-muted/20">
                      {/* Language Selector */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between gap-2 h-10">
                            <div className="flex items-center gap-2">
                              <FlagIcon countryCode={selectedLanguage} size="sm" />
                              <span className="text-sm">{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                            </div>
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" sideOffset={8} className="z-[100] w-[248px] sm:w-[288px] max-h-[300px] overflow-y-auto bg-popover">
                          {languages.map((language) => (
                            <DropdownMenuItem
                              key={language.code}
                              onClick={() => setSelectedLanguage(language.code)}
                              className="flex items-center gap-2 cursor-pointer py-2"
                            >
                              <FlagIcon countryCode={language.code} size="sm" />
                              <span className="text-sm">{language.name}</span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      
                      {/* Auth Buttons */}
                      <Button variant="goldOutline" className="w-full h-10 text-sm" onClick={() => { window.location.href = '/auth'; setIsMenuOpen(false); }}>
                        Login
                      </Button>
                      <Button variant="registerPremium" className="w-full h-11 text-sm font-bold" onClick={() => { window.location.href = '/auth'; setIsMenuOpen(false); }}>
                        {currentTranslations.register}
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-[hsl(220_60%_15%)] hover:bg-white/20 rounded-full"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Pesquisar"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo - overlaps into the next section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-center pt-2 sm:pt-3" style={{ marginBottom: '-2.5rem' }}>
          <img 
            src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
            alt="Logo" 
            width={512}
            height={512}
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain relative z-50" 
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
            }}
          />
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Pesquisar</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="flex items-center gap-2 mt-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="Digite sua busca..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="premium" size="sm" className="text-white">
              Buscar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
}