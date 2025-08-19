interface FlagIconProps {
  countryCode: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FlagIcon({ countryCode, className = '', size = 'md' }: FlagIconProps) {
  const flagImages: Record<string, string> = {
    'pt': '🇧🇷', // Brasil - usar emoji por não ter imagem
    'en': '/lovable-uploads/9c52d89c-c3f2-4de7-8d2b-494e62a12379.png', // Reino Unido
    'es': '/lovable-uploads/e73547c8-d4f6-4f0f-9cfb-e11bb07af065.png', // Espanha
    'fr': '/lovable-uploads/f7414847-cb86-4d7e-bbc4-bf08109e87c7.png', // França
    'de': '/lovable-uploads/c9507285-4912-4f28-8234-191542843457.png', // Alemanha
    'it': '/lovable-uploads/13a78034-02e5-49d4-9ecd-e9e950900f2f.png', // Itália
    'pt-pt': '/lovable-uploads/19c6cf99-56ab-4c8d-bdfe-8d3a3d60b380.png', // Portugal
    'zh': '/lovable-uploads/96abc21f-04bb-4c64-8237-b0245c134f32.png', // China
    'ja': '🇯🇵', // Japão - usar emoji por não ter imagem
    'ru': '/lovable-uploads/e718df1a-b14f-4d62-9d4b-84342153a3c7.png', // Rússia
    'ar': '/lovable-uploads/6091f727-b690-4657-821a-d94d63400799.png', // Liga Árabe
    'hi': '/lovable-uploads/c6636bda-450e-4543-93b7-a0cafbd605c8.png', // Índia
    'nl': '/lovable-uploads/20a3591e-c468-4ca2-b49f-67b8a74ea552.png', // Holanda
    'pl': '/lovable-uploads/99d9847c-76df-4b6a-96d4-2c4f9f44f9c0.png', // Polônia
    'tr': '/lovable-uploads/5ef3cace-a690-4b64-aa7d-50be7d485170.png', // Turquia
    'ko': '/lovable-uploads/ac42a4c2-c19c-4420-a4b8-53c2cccd50c4.png', // Coreia do Sul
    'vi': '/lovable-uploads/219814cb-9a2a-40b5-a838-9f3076a5b95d.png', // Vietnã
    'id': '/lovable-uploads/f09ff5c7-9dc9-441e-84a4-760c71526c64.png', // Indonésia
    'tl': '/lovable-uploads/8e7873b6-f5c2-46b1-90d9-4d8ee04f836a.png', // Filipinas
    'hr': '/lovable-uploads/9c120cad-91b4-4999-8b6d-b6b9bfc1638f.png', // Croácia
  };

  const sizeClasses = {
    sm: 'w-5 h-4',
    md: 'w-6 h-5', 
    lg: 'w-7 h-6'
  };

  const flag = flagImages[countryCode] || '🏳️';

  // Se é um emoji, renderiza como texto
  if (flag.startsWith("🇧🇷") || flag.startsWith("🇯🇵")) {
    return (
      <span 
        className={`inline-block text-base ${className}`}
        style={{ 
          width: size === 'sm' ? '20px' : size === 'md' ? '24px' : '28px',
          height: size === 'sm' ? '15px' : size === 'md' ? '18px' : '21px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '2px',
          overflow: 'hidden'
        }}
      >
        {flag}
      </span>
    );
  }

  // Se é uma imagem, renderiza como img
  return (
    <img 
      src={flag}
      alt={`Flag of ${countryCode}`}
      className={`inline-block object-cover border border-gray-200 rounded-sm ${sizeClasses[size]} ${className}`}
      style={{ 
        borderRadius: '2px',
        objectFit: 'cover'
      }}
    />
  );
}