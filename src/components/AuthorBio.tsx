import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";
import danielPhoto from "@/assets/daniel-olimpio.jpg";

export const AUTHOR_NAME = "Daniel Olímpio";

const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/danielolimpio.com.br", label: "Facebook" },
  { icon: Twitter, url: "https://x.com/danielolimpio_", label: "X (Twitter)" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/danielolimpio-com/", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/danielolimpio_com", label: "Instagram" },
  { icon: ExternalLink, url: "https://danielolimpio.com/", label: "Website" },
];

const BIO_SHORT =
  "Empreendedor com mais de 20 anos de atuação no Marketing de Rede e fundador da Universidade Multinível. Construiu equipes globais com mais de 40 mil pessoas e une expertise de networker a habilidades de desenvolvedor web full stack.";

const BIO_FULL_EXTRA =
  "Reconhecido internacionalmente, Daniel já viveu de perto os bastidores das maiores empresas do setor e idealizou a Universidade Multinível como um hub que reúne informação estratégica, curadoria inteligente e tecnologia de ponta. Seu propósito é educar, conectar e inovar — para que mais pessoas usem o Marketing de Rede como veículo de liberdade, propósito e legado.";

export function AuthorByline() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={danielPhoto}
        alt={AUTHOR_NAME}
        className="w-10 h-10 rounded-full object-cover border border-gold/30"
        loading="lazy"
      />
      <div className="leading-tight">
        <p className="text-sm font-semibold text-foreground">{AUTHOR_NAME}</p>
        <p className="text-xs text-muted-foreground">Autor</p>
      </div>
    </div>
  );
}

export function AuthorBioCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="p-6 mt-12 border-gold/20">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={danielPhoto}
          alt={AUTHOR_NAME}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gold/40 shrink-0"
          loading="lazy"
        />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wide text-gold mb-1">Sobre o autor</p>
          <h3 className="text-xl font-bold text-foreground mb-3">{AUTHOR_NAME}</h3>

          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {BIO_SHORT}
          </p>

          {expanded && (
            <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
              <p>{BIO_SHORT}</p>
              <p>{BIO_FULL_EXTRA}</p>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Ver menos" : "Ver mais"}
          </Button>

          <div className="flex gap-2 mt-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="p-2 rounded-full border border-gold/30 hover:bg-gold/10 transition-colors"
              >
                <s.icon className="w-4 h-4 text-gold" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
