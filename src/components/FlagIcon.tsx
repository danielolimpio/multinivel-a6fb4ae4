interface FlagIconProps {
  countryCode: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FlagIcon({ countryCode, className = '', size = 'md' }: FlagIconProps) {
  const flagEmojis: Record<string, string> = {
    'pt': '🇧🇷', // Brasil
    'en': '🇺🇸', // USA
    'es': '🇪🇸', // España
    'fr': '🇫🇷', // França
    'de': '🇩🇪', // Alemanha
    'it': '🇮🇹', // Itália
    'pt-pt': '🇵🇹', // Portugal
    'zh': '🇨🇳', // China
    'ja': '🇯🇵', // Japão
    'ru': '🇷🇺', // Rússia
    'ar': '🇸🇦', // Arábia Saudita
    'hi': '🇮🇳', // Índia
    'nl': '🇳🇱', // Holanda
    'pl': '🇵🇱', // Polônia
    'tr': '🇹🇷', // Turquia
    'ko': '🇰🇷', // Coreia do Sul
    'vi': '🇻🇳', // Vietnã
    'id': '🇮🇩', // Indonésia
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <span 
      className={`inline-block ${sizeClasses[size]} ${className}`}
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
      {flagEmojis[countryCode] || '🏳️'}
    </span>
  );
}