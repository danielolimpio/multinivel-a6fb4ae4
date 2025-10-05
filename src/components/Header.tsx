import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, DollarSign, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FlagIcon } from "@/components/FlagIcon";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  
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
      community: "Comunidade",
      testimonials: "Depoimentos",
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
      community: "Community",
      testimonials: "Testimonials",
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
      community: "Comunidad",
      testimonials: "Testimonios", 
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
      community: "Communauté",
      testimonials: "Témoignages",
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
      community: "Gemeinschaft",
      testimonials: "Erfahrungsberichte",
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
      community: "Comunità",
      testimonials: "Testimonianze",
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
      community: "Сообщество",
      testimonials: "Отзывы",
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
      community: "社区",
      testimonials: "推荐信",
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
      community: "コミュニティ", 
      testimonials: "お客様の声",
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
      community: "커뮤니티",
      testimonials: "고객후기",
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
      community: "المجتمع",
      testimonials: "الشهادات",
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
      community: "समुदाय",
      testimonials: "प्रशंसापत्र",
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
      community: "ชุมชน",
      testimonials: "คำแนะนำ",
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
      community: "Cộng đồng",
      testimonials: "Lời chứng thực",
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
      community: "Topluluk",
      testimonials: "Referanslar",
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
      community: "Społeczność",
      testimonials: "Referencje",
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
      community: "Gemeenschap", 
      testimonials: "Getuigenissen",
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
      community: "Gemenskap",
      testimonials: "Rekommendationer",
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
    { name: "Blog", href: "/blog" },
    { name: currentTranslations.forum, href: "/forum" },
    { name: currentTranslations.community, href: "/comunidade" },
    { name: currentTranslations.testimonials, href: "/depoimentos" },
    { name: currentTranslations.contact, href: "/contato" },
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
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
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/auth'}>
                Login Afiliado
              </Button>
              <Button variant="secondary" size="sm" onClick={() => window.location.href = '/admin/auth'}>
                Login Admin
              </Button>
              <Button size="sm" className="bg-gradient-primary hover:opacity-90" onClick={() => window.location.href = '/auth'}>
                {currentTranslations.register}
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
                      <div className="text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-center gap-2">
                              <FlagIcon countryCode={selectedLanguage} size="sm" />
                              {languages.find(lang => lang.code === selectedLanguage)?.name}
                              <ChevronDown className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="center" className="w-40">
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
                      </div>
                      <Button variant="outline" className="w-full" onClick={() => window.location.href = '/auth'}>
                        Login Afiliado
                      </Button>
                      <Button variant="secondary" className="w-full" onClick={() => window.location.href = '/admin/auth'}>
                        Login Admin
                      </Button>
                      <Button className="w-full bg-gradient-primary hover:opacity-90" onClick={() => window.location.href = '/auth'}>
                        {currentTranslations.register}
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
        <div className="flex h-24 sm:h-32 items-center justify-between relative">
          {/* Left Stats - Desktop */}
          <div className="hidden lg:flex flex-1 justify-start">
            <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-gold" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">46 bilhões</div>
                <div className="text-xs text-muted-foreground">{currentTranslations.totalCommission}</div>
              </div>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0 mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:mt-16">
            <img 
              src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
              alt="Logo" 
              className="h-32 w-32 sm:h-36 sm:w-36 lg:h-32 lg:w-32 object-contain relative z-50 mt-12 sm:mt-16 lg:mt-0" 
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}
            />
          </div>

          {/* Right Stats - Desktop */}
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-gold" />
              <div className="text-left">
                <div className="text-lg font-bold text-foreground">250 bilhões</div>
                <div className="text-xs text-muted-foreground">{currentTranslations.totalSales}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Stats - Adjusted positioning */}
        <div className="lg:hidden mt-8 pb-6">
          <div className="grid grid-cols-2 gap-2 px-2">
            <div className="flex items-center space-x-1 bg-muted/50 px-2 py-2 rounded-lg text-xs">
              <DollarSign className="h-3 w-3 text-gold-medium" />
              <div className="text-left">
                <div className="font-bold text-xs">46bi</div>
                <div className="text-[10px] text-muted-foreground">Comissões</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 bg-muted/50 px-2 py-2 rounded-lg text-xs justify-end">
              <DollarSign className="h-3 w-3 text-gold-medium" />
              <div className="text-left">
                <div className="font-bold text-xs">250bi</div>
                <div className="text-[10px] text-muted-foreground">Vendas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}