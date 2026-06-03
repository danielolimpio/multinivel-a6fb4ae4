import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Trophy,
  Building2
} from "lucide-react";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import company logos for results
import hinode from "@/assets/logos/hinode.jpeg";
import herbalife from "@/assets/logos/herbalife.jpeg";
import amway from "@/assets/logos/amway.jpeg";
import marykay from "@/assets/logos/marykay.jpeg";
import forever from "@/assets/logos/forever.jpeg";

interface Question {
  id: number;
  title: string;
  metaDescription: string;
  options: { id: string; text: string; profile: string }[];
  explanation: string;
  faq: { question: string; answer: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    title: "Qual é o seu principal objetivo ao ingressar no marketing multinível?",
    metaDescription: "Entenda seus objetivos para encontrar a empresa que mais combina com suas metas de vida e carreira.",
    options: [
      { id: "a", text: "Renda extra para complementar meu salário atual", profile: "iniciante" },
      { id: "b", text: "Construir uma carreira de tempo integral", profile: "empreendedor" },
      { id: "c", text: "Ter mais tempo livre e flexibilidade", profile: "flexivel" },
      { id: "d", text: "Desenvolver habilidades de liderança e vendas", profile: "lider" },
      { id: "e", text: "Criar um negócio para deixar como legado familiar", profile: "legado" }
    ],
    explanation: `A definição clara dos seus objetivos é o primeiro e mais importante passo para escolher a empresa de marketing multinível ideal para você. Quando falamos sobre objetivos no MMN, estamos nos referindo não apenas às metas financeiras, mas também ao estilo de vida que você deseja construir e aos valores que norteiam suas decisões profissionais.

Muitas pessoas ingressam no marketing multinível buscando uma renda extra para complementar seus ganhos mensais. Este é um objetivo perfeitamente válido e pode ser alcançado dedicando algumas horas por semana ao negócio. No entanto, é fundamental entender que o nível de dedicação influencia diretamente nos resultados obtidos.

Por outro lado, existem aqueles que veem no MMN uma oportunidade de carreira completa. Essas pessoas geralmente estão dispostas a investir mais tempo, energia e recursos no desenvolvimento do negócio. Para elas, empresas com planos de carreira estruturados e programas de treinamento robustos são mais adequadas.

A flexibilidade é outro fator determinante para muitos profissionais. O marketing multinível permite que você trabalhe de qualquer lugar, defina seus próprios horários e equilibre vida pessoal e profissional de uma forma que empregos tradicionais raramente permitem. Se este é seu objetivo principal, procure empresas que ofereçam ferramentas digitais e suporte para trabalho remoto.

Desenvolver habilidades de liderança é um benefício frequentemente subestimado do MMN. Muitas empresas oferecem treinamentos contínuos em vendas, comunicação, gestão de equipes e desenvolvimento pessoal. Essas competências são valiosas não apenas dentro do negócio, mas em qualquer área da vida.

Finalmente, construir um legado familiar é um objetivo de longo prazo que requer comprometimento e visão estratégica. Empresas consolidadas no mercado há décadas oferecem maior segurança para quem pensa em construir algo duradouro.`,
    faq: [
      {
        question: "É possível ter sucesso no MMN trabalhando meio período?",
        answer: "Sim, muitos profissionais de sucesso começaram dedicando apenas algumas horas por semana. O importante é manter consistência e foco nos objetivos definidos."
      },
      {
        question: "Quanto tempo leva para ver resultados financeiros?",
        answer: "Os resultados variam conforme o nível de dedicação e estratégia adotada. Alguns veem retorno nos primeiros meses, enquanto outros levam mais tempo para construir uma base sólida."
      },
      {
        question: "Preciso abandonar meu emprego atual para começar?",
        answer: "Não é necessário. A maioria dos profissionais de MMN começa enquanto mantém outras atividades, migrando gradualmente conforme os resultados crescem."
      },
      {
        question: "Como escolher entre renda extra e carreira completa?",
        answer: "Avalie sua situação financeira atual, disponibilidade de tempo e objetivos de longo prazo. Não há resposta certa, apenas o que funciona melhor para sua realidade."
      },
      {
        question: "O MMN é adequado para quem busca flexibilidade?",
        answer: "Sim, o marketing multinível é uma das poucas atividades que oferece verdadeira flexibilidade de horários e local de trabalho, ideal para quem valoriza autonomia."
      }
    ]
  },
  {
    id: 2,
    title: "Qual categoria de produtos você tem mais afinidade?",
    metaDescription: "Escolha a categoria de produtos que mais combina com seu estilo de vida e interesses pessoais.",
    options: [
      { id: "a", text: "Cosméticos e cuidados pessoais", profile: "cosmeticos" },
      { id: "b", text: "Nutrição e suplementos alimentares", profile: "nutricao" },
      { id: "c", text: "Produtos para casa e família", profile: "casa" },
      { id: "d", text: "Serviços financeiros e seguros", profile: "financeiro" },
      { id: "e", text: "Tecnologia e inovação", profile: "tecnologia" }
    ],
    explanation: `A escolha da categoria de produtos é um dos fatores mais críticos para o seu sucesso no marketing multinível. Quando você trabalha com produtos que genuinamente aprecia e utiliza, sua capacidade de comunicar valor aos clientes aumenta exponencialmente. A autenticidade é percebida pelos consumidores e gera confiança.

O mercado de cosméticos e cuidados pessoais é um dos mais tradicionais no MMN. Empresas como Mary Kay, Hinode e Oriflame construíram impérios neste segmento. Este mercado é particularmente atrativo para quem gosta de cuidar da aparência, tem interesse em tendências de beleza e aprecia o relacionamento próximo com clientes.

A nutrição e suplementos alimentares representam outro segmento gigante do marketing multinível. Com a crescente conscientização sobre saúde e bem-estar, produtos nutricionais têm demanda consistente. Empresas como Herbalife e 4Life dominam este espaço, oferecendo desde shakes proteicos até suplementos especializados.

Produtos para casa e família abrangem desde utensílios de cozinha premium até sistemas de purificação de água e ar. Este segmento atrai pessoas que valorizam qualidade de vida no ambiente doméstico. Empresas como Tupperware, Vorwerk e Coway são referências nesta categoria.

O setor de serviços financeiros no MMN inclui seguros de vida, planos de previdência e educação financeira. Empresas como Primerica oferecem oportunidades para quem tem interesse em ajudar famílias a planejar seu futuro financeiro.

Tecnologia e inovação é um segmento mais recente, mas em rápido crescimento. Produtos tecnológicos inovadores, soluções digitais e dispositivos inteligentes estão ganhando espaço no modelo de vendas diretas.`,
    faq: [
      {
        question: "Preciso usar os produtos que vendo?",
        answer: "É altamente recomendável. Usar os produtos permite que você compartilhe experiências reais e demonstre resultados autênticos aos clientes."
      },
      {
        question: "Posso trabalhar com mais de uma categoria?",
        answer: "Cada empresa geralmente foca em uma categoria principal. É recomendável dominar uma área antes de considerar diversificação."
      },
      {
        question: "Qual categoria tem maior potencial de lucro?",
        answer: "Todas as categorias podem ser lucrativas. O fator determinante é sua paixão pelo produto e habilidade de comunicar seu valor."
      },
      {
        question: "Como saber se tenho afinidade com uma categoria?",
        answer: "Reflita sobre seus interesses pessoais, hábitos de consumo e temas que você naturalmente gosta de discutir com amigos e família."
      },
      {
        question: "A categoria escolhida afeta a longevidade do negócio?",
        answer: "Sim, setores com demanda consistente e tendência de crescimento oferecem maior estabilidade a longo prazo."
      }
    ]
  },
  {
    id: 3,
    title: "Quanto tempo você pode dedicar semanalmente ao negócio?",
    metaDescription: "Defina sua disponibilidade de tempo para encontrar uma oportunidade compatível com sua rotina.",
    options: [
      { id: "a", text: "Menos de 5 horas por semana", profile: "casual" },
      { id: "b", text: "Entre 5 e 10 horas por semana", profile: "parttime" },
      { id: "c", text: "Entre 10 e 20 horas por semana", profile: "dedicado" },
      { id: "d", text: "Entre 20 e 40 horas por semana", profile: "profissional" },
      { id: "e", text: "Mais de 40 horas por semana (tempo integral)", profile: "integral" }
    ],
    explanation: `A disponibilidade de tempo é um fator crucial que determina não apenas o ritmo do seu crescimento no marketing multinível, mas também qual empresa e estratégia são mais adequadas para você. É essencial ser realista sobre quanto tempo você pode genuinamente dedicar ao negócio sem comprometer outras áreas importantes da sua vida.

Para quem dispõe de menos de 5 horas semanais, o foco deve ser em atividades de alto impacto como manutenção de relacionamentos existentes, vendas para círculo próximo e presença digital básica. Não é impossível ter resultados, mas as expectativas devem ser ajustadas de acordo.

Entre 5 e 10 horas semanais já permite uma atuação mais consistente. Neste cenário, é possível desenvolver uma base de clientes regular, participar de alguns eventos de treinamento e começar a construir uma pequena equipe. Muitos profissionais de sucesso começaram nesta faixa antes de expandir sua dedicação.

Com 10 a 20 horas semanais, você entra no território de crescimento acelerado. Esta dedicação permite participação ativa em treinamentos, prospecção regular de novos clientes e distribuidores, e desenvolvimento de conteúdo para mídias sociais. É o ponto ideal para quem quer resultados significativos mantendo outras atividades.

Entre 20 e 40 horas, você está operando como um profissional sério do MMN. Neste nível, é esperado liderança ativa de equipe, participação em eventos regionais e nacionais, e desenvolvimento de estratégias de crescimento elaboradas. Os ganhos podem ser substanciais.

Dedicação integral de mais de 40 horas caracteriza o MMN como sua principal atividade profissional. Este nível requer planejamento financeiro para o período de construção do negócio, mas oferece o maior potencial de resultados exponenciais.`,
    faq: [
      {
        question: "É possível crescer dedicando poucas horas?",
        answer: "Sim, mas o crescimento será mais lento. A chave é usar o tempo disponível de forma estratégica e consistente."
      },
      {
        question: "Como otimizar meu tempo limitado?",
        answer: "Priorize atividades que geram resultados diretos: contatos com clientes, follow-ups e desenvolvimento da equipe existente."
      },
      {
        question: "Devo aumentar a dedicação gradualmente?",
        answer: "Esta é uma estratégia inteligente. Comece com o que é confortável e aumente conforme os resultados justificarem."
      },
      {
        question: "Trabalhar mais horas garante mais sucesso?",
        answer: "Não necessariamente. A qualidade das atividades é tão importante quanto a quantidade de horas investidas."
      },
      {
        question: "Como equilibrar MMN com emprego fixo?",
        answer: "Defina horários específicos para o negócio, use intervalos do almoço e fins de semana, e automatize o que for possível."
      }
    ]
  },
  {
    id: 4,
    title: "Qual é o seu nível de experiência com vendas?",
    metaDescription: "Avalie sua experiência em vendas para identificar empresas com suporte adequado ao seu perfil.",
    options: [
      { id: "a", text: "Nenhuma experiência - sou iniciante completo", profile: "iniciante" },
      { id: "b", text: "Pouca experiência - já vendi informalmente", profile: "basico" },
      { id: "c", text: "Experiência moderada - trabalhei em varejo", profile: "intermediario" },
      { id: "d", text: "Experiência sólida - vendas é minha profissão", profile: "experiente" },
      { id: "e", text: "Especialista - tenho formação e certificações", profile: "especialista" }
    ],
    explanation: `O seu nível de experiência em vendas influencia diretamente qual tipo de empresa e suporte você precisa para ter sucesso no marketing multinível. Compreender onde você está nesta escala permite escolher uma organização que oferece os recursos adequados para seu desenvolvimento.

Para iniciantes completos, a boa notícia é que vendas é uma habilidade que pode ser desenvolvida. As melhores empresas de MMN oferecem programas de treinamento abrangentes que ensinam desde os fundamentos de comunicação até técnicas avançadas de fechamento. O importante é escolher uma empresa com histórico de desenvolver novos profissionais.

Se você já vendeu informalmente - seja produtos próprios, em bazares ou para amigos e família - você já possui noções básicas que serão úteis. O próximo passo é formalizar esse conhecimento e aprender técnicas estruturadas que aumentam sua taxa de conversão.

Profissionais com experiência em varejo trazem vantagens significativas para o MMN. Você já entende dinâmicas de cliente, objeções comuns e a importância do relacionamento. O desafio será adaptar essas habilidades para o modelo de vendas diretas, que tem características únicas.

Para quem tem vendas como profissão, o marketing multinível representa uma oportunidade de aplicar conhecimentos consolidados em um modelo de negócio com potencial de renda residual. Sua experiência acelera o processo de construção do negócio.

Especialistas em vendas com formação e certificações podem assumir rapidamente posições de liderança em suas equipes. O desafio principal será aprender as especificidades do modelo MMN e desenvolver habilidades de mentoria para treinar sua rede.`,
    faq: [
      {
        question: "Posso ter sucesso sem experiência em vendas?",
        answer: "Absolutamente. Muitos top earners do MMN começaram sem nenhuma experiência. O importante é disposição para aprender e aplicar."
      },
      {
        question: "Quanto tempo leva para desenvolver habilidades de vendas?",
        answer: "Com treinamento consistente e prática regular, você pode desenvolver competências básicas em alguns meses."
      },
      {
        question: "Vender é manipular pessoas?",
        answer: "Não. Vendas éticas focam em identificar necessidades genuínas e oferecer soluções que agregam valor real ao cliente."
      },
      {
        question: "Qual habilidade de vendas é mais importante?",
        answer: "A escuta ativa é fundamental. Entender as necessidades do cliente é mais importante do que qualquer técnica de persuasão."
      },
      {
        question: "Como superar o medo de vender?",
        answer: "Pratique com pessoas próximas, estude os produtos profundamente e foque em ajudar ao invés de apenas vender."
      }
    ]
  },
  {
    id: 5,
    title: "Qual é o seu orçamento inicial para investir no negócio?",
    metaDescription: "Defina seu investimento inicial para encontrar oportunidades compatíveis com seu momento financeiro.",
    options: [
      { id: "a", text: "Até R$ 500 - investimento mínimo", profile: "minimo" },
      { id: "b", text: "Entre R$ 500 e R$ 1.500", profile: "moderado" },
      { id: "c", text: "Entre R$ 1.500 e R$ 3.000", profile: "significativo" },
      { id: "d", text: "Entre R$ 3.000 e R$ 5.000", profile: "substancial" },
      { id: "e", text: "Acima de R$ 5.000 - pronto para investir forte", profile: "premium" }
    ],
    explanation: `O investimento inicial é uma consideração prática importante ao escolher sua empresa de marketing multinível. Diferente de franquias tradicionais que podem exigir centenas de milhares de reais, o MMN oferece oportunidades de entrada para diversos perfis financeiros. No entanto, é crucial entender o que cada faixa de investimento permite.

Com até R$ 500, você pode iniciar em muitas empresas de forma básica. Este valor geralmente cobre um kit inicial com produtos para demonstração e materiais de apoio. A limitação é que você terá menos produtos para mostrar e vender imediatamente, exigindo reinvestimento dos primeiros lucros.

Entre R$ 500 e R$ 1.500, você acessa kits intermediários na maioria das empresas. Este valor permite um estoque inicial razoável, materiais de marketing de melhor qualidade e, em alguns casos, acesso a treinamentos premium. É uma faixa equilibrada para iniciantes comprometidos.

Investimentos entre R$ 1.500 e R$ 3.000 posicionam você com uma estrutura inicial sólida. Você terá estoque suficiente para atender demanda imediata, materiais profissionais e geralmente acesso a programas de mentoria mais avançados. Esta faixa acelera o tempo para atingir o ponto de equilíbrio.

De R$ 3.000 a R$ 5.000, você está investindo como um profissional sério. Este valor permite estoque robusto, participação em eventos de lançamento, materiais de marketing premium e, frequentemente, qualificação automática para bônus iniciais.

Acima de R$ 5.000, você entra como um empreendedor comprometido. Este nível de investimento geralmente inclui todos os benefícios anteriores mais posicionamento privilegiado, acesso a lideranças da empresa e programas exclusivos de aceleração.`,
    faq: [
      {
        question: "É possível começar sem nenhum investimento?",
        answer: "Tecnicamente não. Todas as empresas legítimas requerem ao menos a compra de um kit inicial, mesmo que de baixo valor."
      },
      {
        question: "Devo usar empréstimo para investir no MMN?",
        answer: "Não é recomendado. Invista apenas o que você pode perder sem comprometer suas finanças essenciais."
      },
      {
        question: "O valor investido determina meu sucesso?",
        answer: "Não diretamente. O sucesso depende mais de dedicação e estratégia do que do valor inicial investido."
      },
      {
        question: "Posso recuperar o investimento rapidamente?",
        answer: "Depende da sua dedicação e habilidades. Alguns recuperam em semanas, outros levam meses. Não há garantias."
      },
      {
        question: "O que acontece se eu desistir?",
        answer: "Muitas empresas oferecem política de recompra de produtos não utilizados, geralmente com percentual de devolução."
      }
    ]
  },
  {
    id: 6,
    title: "Você prefere trabalhar sozinho ou construir uma equipe?",
    metaDescription: "Entenda seu estilo de trabalho para escolher entre foco em vendas diretas ou construção de rede.",
    options: [
      { id: "a", text: "Prefiro trabalhar sozinho focando em vendas", profile: "vendedor" },
      { id: "b", text: "Gosto de equipes pequenas e íntimas", profile: "micro_lider" },
      { id: "c", text: "Quero construir uma grande organização", profile: "lider" },
      { id: "d", text: "Depende da oportunidade e momento", profile: "flexivel" },
      { id: "e", text: "Quero ser mentor e desenvolver líderes", profile: "mentor" }
    ],
    explanation: `A forma como você prefere trabalhar determina qual estratégia de MMN é mais adequada para você. No marketing multinível, existem basicamente duas formas de gerar renda: vendas diretas aos consumidores e bônus de liderança sobre equipes. Entender sua preferência ajuda a escolher a empresa e abordagem certas.

Se você prefere trabalhar sozinho com foco em vendas, existem empresas com planos de compensação que valorizam fortemente o volume pessoal. Nestas organizações, você pode construir uma clientela fiel e gerar renda consistente sem necessariamente recrutar grandes equipes. Este modelo é mais simples e previsível.

Para quem gosta de equipes pequenas e íntimas, o modelo de micro-liderança pode ser ideal. Você mantém relacionamento próximo com alguns poucos distribuidores, oferece suporte personalizado e cresce de forma orgânica. Este estilo equilibra vendas pessoais com ganhos de equipe.

Se seu objetivo é construir uma grande organização, você precisa desenvolver habilidades de recrutamento, treinamento e liderança em escala. Os ganhos potenciais são maiores, mas a complexidade também aumenta. Empresas com sistemas duplicáveis e forte cultura de eventos são ideais para este perfil.

Flexibilidade para adaptar-se às circunstâncias é uma abordagem pragmática. Você pode começar focando em vendas e gradualmente expandir para construção de equipe conforme ganha experiência e confiança.

Para quem quer ser mentor e desenvolvedor de líderes, o MMN oferece uma plataforma única. Você pode impactar positivamente a vida de muitas pessoas enquanto constrói sua organização. Este perfil geralmente alcança os maiores níveis de sucesso a longo prazo.`,
    faq: [
      {
        question: "É obrigatório recrutar pessoas no MMN?",
        answer: "Não. Muitas empresas permitem que você atue apenas como vendedor, embora os ganhos sejam limitados."
      },
      {
        question: "Qual modelo gera mais renda a longo prazo?",
        answer: "A construção de equipes geralmente oferece maior potencial de renda residual e escalabilidade."
      },
      {
        question: "Posso mudar de estratégia depois?",
        answer: "Sim. Muitos profissionais começam focando em vendas e evoluem para construção de equipes naturalmente."
      },
      {
        question: "Preciso de habilidades de liderança para ter equipe?",
        answer: "Habilidades de liderança podem ser desenvolvidas. Empresas com bons programas de treinamento ajudam neste processo."
      },
      {
        question: "Como sei se estou pronto para liderar?",
        answer: "Quando você domina o básico de vendas e sente vontade de ajudar outros a alcançar seus objetivos."
      }
    ]
  },
  {
    id: 7,
    title: "Qual é a importância da marca e reputação da empresa para você?",
    metaDescription: "Avalie quanto a credibilidade e reconhecimento da marca influenciam sua decisão.",
    options: [
      { id: "a", text: "Fundamental - só trabalho com marcas consagradas", profile: "tradicional" },
      { id: "b", text: "Importante, mas não determinante", profile: "equilibrado" },
      { id: "c", text: "Prefiro empresas novas com maior potencial", profile: "pioneiro" },
      { id: "d", text: "O produto é mais importante que a marca", profile: "produto" },
      { id: "e", text: "A oportunidade financeira é o que importa", profile: "oportunista" }
    ],
    explanation: `A reputação e credibilidade da empresa são fatores que influenciam diretamente sua experiência no marketing multinível. Trabalhar com uma marca respeitada facilita o processo de vendas e recrutamento, enquanto empresas menos conhecidas podem oferecer outras vantagens.

Para quem considera a marca fundamental, empresas estabelecidas há décadas como Amway, Herbalife, Mary Kay e Tupperware oferecem credibilidade instantânea. Quando você menciona essas marcas, as pessoas já têm uma referência. Isso reduz a resistência inicial e facilita conversas sobre o negócio.

Se a marca é importante mas não determinante, você tem mais opções para explorar. Pode considerar empresas bem estabelecidas em mercados específicos, mesmo que não sejam globalmente famosas. O foco passa a ser a qualidade dos produtos e a solidez do plano de compensação.

Para perfis pioneiros que preferem empresas novas, existem vantagens potenciais como posicionamento privilegiado, planos de compensação mais agressivos e menor competição interna. No entanto, os riscos também são maiores, incluindo instabilidade e incerteza sobre o futuro da empresa.

Quando o produto é o fator principal, você prioriza a qualidade, inovação e diferenciação do que está vendendo. Esta abordagem é sólida porque produtos excepcionais vendem-se mais facilmente, independente da fama da marca.

Para quem prioriza a oportunidade financeira, a análise foca no plano de compensação, bônus e potencial de ganhos. Esta perspectiva é válida, mas deve ser equilibrada com avaliação da sustentabilidade do modelo de negócio.`,
    faq: [
      {
        question: "Empresas mais antigas são mais seguras?",
        answer: "Geralmente sim, pois já provaram sua sustentabilidade. Mas empresas antigas também podem enfrentar declínio."
      },
      {
        question: "Vale a pena entrar em empresas recém-lançadas?",
        answer: "Pode valer se você aceita o risco maior em troca de potencial posicionamento privilegiado."
      },
      {
        question: "Como pesquisar a reputação de uma empresa?",
        answer: "Verifique histórico, processos judiciais, avaliações de distribuidores e presença em associações do setor."
      },
      {
        question: "A marca influencia nas vendas?",
        answer: "Sim, marcas conhecidas geram menos objeções e facilitam a abertura de portas com clientes potenciais."
      },
      {
        question: "Devo evitar empresas pouco conhecidas?",
        answer: "Não necessariamente. Avalie todos os fatores incluindo produto, plano de compensação e suporte oferecido."
      }
    ]
  },
  {
    id: 8,
    title: "Qual tipo de suporte e treinamento você considera essencial?",
    metaDescription: "Identifique suas necessidades de desenvolvimento para escolher uma empresa com estrutura adequada.",
    options: [
      { id: "a", text: "Treinamentos presenciais e eventos regulares", profile: "presencial" },
      { id: "b", text: "Plataformas online e cursos digitais", profile: "digital" },
      { id: "c", text: "Mentoria individualizada com líderes", profile: "mentoria" },
      { id: "d", text: "Materiais e ferramentas de vendas prontas", profile: "ferramentas" },
      { id: "e", text: "Comunidade ativa e suporte entre pares", profile: "comunidade" }
    ],
    explanation: `O tipo de suporte e treinamento que uma empresa oferece pode ser o diferencial entre seu sucesso e frustração no marketing multinível. Cada pessoa aprende e se desenvolve de formas diferentes, e escolher uma empresa que oferece o tipo de suporte que funciona para você é crucial.

Treinamentos presenciais e eventos regulares são poderosos para quem se motiva com energia coletiva e networking. Convenções, rallies e encontros regionais criam momentos de imersão que aceleram o aprendizado e fortalecem a cultura organizacional. Se você se sente energizado por multidões e gosta de aprender observando outros, este modelo é ideal.

Plataformas online e cursos digitais atendem profissionais que valorizam flexibilidade e autogestão. Você pode estudar no seu ritmo, revisitar conteúdos quando necessário e economizar tempo de deslocamento. Empresas modernas investem fortemente em universidades corporativas digitais com conteúdo de alta qualidade.

Mentoria individualizada oferece desenvolvimento personalizado. Ter um líder experiente guiando seus passos, respondendo dúvidas específicas e oferecendo feedback direto acelera enormemente sua curva de aprendizado. Procure empresas com cultura forte de mentoria entre níveis.

Materiais e ferramentas de vendas prontas são essenciais para quem quer focar na execução. Catálogos profissionais, vídeos de apresentação, scripts de vendas e materiais para redes sociais permitem que você comece a vender rapidamente sem precisar criar tudo do zero.

Comunidade ativa e suporte entre pares oferece aprendizado horizontal. Grupos de WhatsApp, fóruns internos e encontros informais entre distribuidores permitem troca de experiências, dicas práticas e suporte emocional para os desafios do dia a dia.`,
    faq: [
      {
        question: "Eventos presenciais são obrigatórios?",
        answer: "Geralmente não são obrigatórios, mas participar acelera significativamente seu desenvolvimento e resultados."
      },
      {
        question: "Treinamentos online são suficientes?",
        answer: "Podem ser suficientes para aprender técnicas, mas eventos presenciais oferecem networking e motivação únicos."
      },
      {
        question: "Como encontrar um bom mentor?",
        answer: "Sua linha ascendente (upline) é o primeiro lugar para buscar. Líderes de sucesso geralmente estão dispostos a ajudar."
      },
      {
        question: "Devo pagar por treinamentos adicionais?",
        answer: "Muitos treinamentos são incluídos. Avalie com cautela investimentos extras e priorize aplicar o básico primeiro."
      },
      {
        question: "Qual a frequência ideal de treinamentos?",
        answer: "O aprendizado deve ser contínuo. Participação semanal em algum tipo de desenvolvimento é recomendável."
      }
    ]
  },
  {
    id: 9,
    title: "Você tem interesse em atuar internacionalmente?",
    metaDescription: "Defina seu interesse em mercados internacionais para encontrar empresas com presença global.",
    options: [
      { id: "a", text: "Sim, quero construir rede em vários países", profile: "global" },
      { id: "b", text: "Talvez no futuro, mas começo local", profile: "potencial_global" },
      { id: "c", text: "Apenas se surgir oportunidade naturalmente", profile: "oportunista" },
      { id: "d", text: "Prefiro focar apenas no Brasil", profile: "nacional" },
      { id: "e", text: "Quero trabalhar com comunidade imigrante", profile: "nicho" }
    ],
    explanation: `A atuação internacional pode multiplicar exponencialmente suas oportunidades no marketing multinível. Com a globalização e as tecnologias de comunicação, construir redes em múltiplos países tornou-se mais acessível do que nunca. No entanto, nem todas as empresas oferecem a mesma estrutura para expansão global.

Para quem deseja construir rede em vários países, é fundamental escolher empresas com presença consolidada em múltiplos mercados. Gigantes como Amway, Herbalife e Forever Living operam em dezenas de países com infraestrutura local. Isso significa que seus distribuidores recrutados em outros países terão suporte adequado.

Se você pensa em começar local com potencial expansão futura, verifique os planos de internacionalização da empresa. Algumas organizações estão em processo de abertura de novos mercados, o que pode representar oportunidades de timing para posicionamento privilegiado.

Aceitar oportunidades que surgem naturalmente é uma abordagem pragmática. Se você tem contatos em outros países através de família, amigos ou redes profissionais, pode explorar essas conexões sem necessariamente ter uma estratégia internacional ativa.

Focar exclusivamente no Brasil é perfeitamente válido. O mercado brasileiro é enorme e oferece potencial significativo. Muitos top earners construíram fortunas atuando apenas nacionalmente.

Trabalhar com comunidades imigrantes representa um nicho interessante. Brasileiros no exterior frequentemente buscam conexão com produtos e oportunidades do Brasil, criando um mercado cativo para distribuidores que falam sua língua e entendem sua cultura.`,
    faq: [
      {
        question: "Preciso falar outros idiomas para atuar internacionalmente?",
        answer: "Ajuda muito, especialmente inglês e espanhol. Mas você pode começar com comunidades que falam português."
      },
      {
        question: "Como recrutar pessoas em outros países?",
        answer: "Redes sociais, comunidades de imigrantes, viagens de negócios e indicações de sua rede existente são caminhos comuns."
      },
      {
        question: "Os ganhos internacionais são pagos em dólar?",
        answer: "Depende da empresa e estrutura. Algumas pagam na moeda local, outras em dólar. Verifique as políticas específicas."
      },
      {
        question: "Existem impostos sobre ganhos internacionais?",
        answer: "Sim, legislações tributárias aplicam-se. Consulte um contador especializado para compliance adequado."
      },
      {
        question: "Qual país tem maior potencial depois do Brasil?",
        answer: "EUA, México e países da América Latina com grande população e cultura empreendedora são opções populares."
      }
    ]
  },
  {
    id: 10,
    title: "O que mais te atrairia em uma oportunidade de negócio?",
    metaDescription: "Identifique seu principal motivador para encontrar a empresa que melhor atende suas expectativas.",
    options: [
      { id: "a", text: "Viagens de incentivo e prêmios exclusivos", profile: "incentivos" },
      { id: "b", text: "Reconhecimento público e status na comunidade", profile: "reconhecimento" },
      { id: "c", text: "Potencial de renda residual passiva", profile: "residual" },
      { id: "d", text: "Desenvolvimento pessoal e crescimento contínuo", profile: "desenvolvimento" },
      { id: "e", text: "Impacto positivo na vida de outras pessoas", profile: "impacto" }
    ],
    explanation: `Os motivadores internos que nos impulsionam variam de pessoa para pessoa. Identificar o que genuinamente te atrai em uma oportunidade de negócio ajuda a escolher a empresa cujos valores e sistema de recompensas alinham-se com o que te mantém motivado a longo prazo.

Viagens de incentivo e prêmios exclusivos são poderosos motivadores para quem valoriza experiências. Muitas empresas de MMN oferecem viagens internacionais para destinos exóticos, cruzeiros de luxo e prêmios como carros e joias. Se isso te motiva, procure empresas com programas de incentivo robustos e comprovados.

Reconhecimento público e status na comunidade atendem necessidades de pertencimento e destaque. Empresas com forte cultura de celebração, palcos em convenções e hierarquia de títulos alimentam este motivador. Ver seu nome anunciado, subir ao palco e ser aplaudido pode ser extremamente satisfatório.

Renda residual passiva é o santo graal do marketing multinível. A possibilidade de receber ganhos mensais baseados em consumo de clientes e volume de equipe que você construiu no passado é o que permite verdadeira liberdade financeira. Empresas com modelos de retenção forte oferecem melhor potencial neste aspecto.

Desenvolvimento pessoal e crescimento contínuo atraem quem valoriza a jornada tanto quanto o destino. O MMN é uma escola de vida onde você desenvolve comunicação, liderança, resiliência e inteligência emocional. Se você vê o negócio como veículo de transformação pessoal, encontrará satisfação independente dos resultados financeiros.

Impacto positivo na vida de outras pessoas é o motivador mais sustentável. Ajudar clientes a resolver problemas, desenvolver distribuidores para alcançarem seus sonhos e contribuir para comunidades gera significado profundo. Este propósito supera qualquer recompensa material.`,
    faq: [
      {
        question: "As viagens de incentivo são reais?",
        answer: "Sim, empresas sérias cumprem seus programas de incentivo. Verifique depoimentos de quem já foi contemplado."
      },
      {
        question: "Quanto tempo leva para ganhar renda residual?",
        answer: "Varia enormemente. Geralmente requer anos de trabalho consistente para construir fluxo residual significativo."
      },
      {
        question: "O reconhecimento público é importante?",
        answer: "Depende do seu perfil. Para alguns é combustível essencial, para outros é desconfortável. Conheça-se."
      },
      {
        question: "Posso mudar meus motivadores com o tempo?",
        answer: "Sim, motivadores evoluem conforme você cresce. O que te atraiu no início pode mudar com experiência."
      },
      {
        question: "Qual motivador leva ao maior sucesso?",
        answer: "Não há resposta única. Alinhamento genuíno entre seus valores e o que te move é o fator crucial."
      }
    ]
  }
];

const companyProfiles = {
  hinode: {
    name: "Hinode",
    logo: hinode,
    description: "Com foco em cosméticos e perfumaria de alta qualidade, a Hinode é ideal para quem busca uma empresa brasileira consolidada com forte presença nacional.",
    slug: "hinode"
  },
  herbalife: {
    name: "Herbalife",
    logo: herbalife,
    description: "Líder global em nutrição e bem-estar, a Herbalife é perfeita para quem se interessa por saúde e quer uma marca reconhecida mundialmente.",
    slug: "herbalife"
  },
  amway: {
    name: "Amway",
    logo: amway,
    description: "A maior empresa de MMN do mundo, a Amway oferece diversidade de produtos e presença em mais de 100 países para quem busca escala global.",
    slug: "amway"
  },
  marykay: {
    name: "Mary Kay",
    logo: marykay,
    description: "Ícone em cosméticos e empoderamento feminino, Mary Kay é ideal para quem quer trabalhar com beleza e valoriza uma cultura de reconhecimento.",
    slug: "marykay"
  },
  forever: {
    name: "Forever Living",
    logo: forever,
    description: "Especialista em produtos à base de Aloe Vera, a Forever Living combina saúde natural com presença global em mais de 160 países.",
    slug: "forever"
  }
};

export default function SuaEmpresaIdeal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const currentQuestionParam = searchParams.get("pergunta");
  const currentQuestion = currentQuestionParam ? parseInt(currentQuestionParam) : 1;
  
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions.find(q => q.id === currentQuestion);
  const progress = ((currentQuestion - 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length;
  const hasAnsweredCurrent = answers[currentQuestion] !== undefined;

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionId }));
  };

  const goToNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setSearchParams({ pergunta: String(currentQuestion + 1) });
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setSearchParams({ pergunta: String(currentQuestion - 1) });
    }
  };

  const getRecommendedCompany = () => {
    // Simple logic to recommend based on most common answer patterns
    const answerValues = Object.values(answers);
    const profiles = answerValues.map(a => {
      const q = questions.find(q => q.options.some(o => o.id === a));
      const option = q?.options.find(o => o.id === a);
      return option?.profile || "";
    });

    // Count profile types
    const profileCounts: Record<string, number> = {};
    profiles.forEach(p => {
      profileCounts[p] = (profileCounts[p] || 0) + 1;
    });

    // Recommend based on dominant patterns
    if (profiles.includes("cosmeticos") || profiles.includes("tradicional")) {
      return companyProfiles.hinode;
    }
    if (profiles.includes("nutricao") || profiles.includes("global")) {
      return companyProfiles.herbalife;
    }
    if (profiles.includes("lider") || profiles.includes("integral")) {
      return companyProfiles.amway;
    }
    if (profiles.includes("reconhecimento") || profiles.includes("comunidade")) {
      return companyProfiles.marykay;
    }
    return companyProfiles.forever;
  };

  if (showResult) {
    const recommendedCompany = getRecommendedCompany();
    
    return (
      <>
        <SEO 
          title={`Sua Empresa Ideal: ${recommendedCompany.name} | Marketing Multinível`}
          description={`Baseado em suas respostas, ${recommendedCompany.name} é a empresa de marketing multinível ideal para seu perfil.`}
          canonical="/network"
        />
        
        <Header />
        
        <main className="min-h-screen bg-background py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 bg-green-500/10 text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                Quiz Completo!
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Sua Empresa Ideal é
              </h1>
              
              <Card className="p-8 mb-8 border-primary/30 shadow-xl">
                <div className="mb-6">
                  <img
                    src={recommendedCompany.logo}
                    alt={recommendedCompany.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg"
                  />
                </div>
                
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {recommendedCompany.name}
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8">
                  {recommendedCompany.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary"
                    onClick={() => navigate(`/empresa/${recommendedCompany.slug}`)}
                  >
                    <Building2 className="w-4 h-4 mr-2" />
                    Ver Detalhes da Empresa
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      setAnswers({});
                      setShowResult(false);
                      setSearchParams({ pergunta: "1" });
                    }}
                  >
                    Refazer Quiz
                  </Button>
                </div>
              </Card>
              
              <p className="text-sm text-muted-foreground">
                Esta recomendação é baseada nas suas respostas. Recomendamos pesquisar mais sobre a empresa antes de tomar uma decisão.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </>
    );
  }

  if (!question) {
    navigate("/sua-empresa-ideal?pergunta=1");
    return null;
  }

  return (
    <>
      <SEO 
        title={`Pergunta ${currentQuestion} de ${questions.length}: ${question.title} | Sua Empresa Ideal`}
        description={question.metaDescription}
        canonical={`/sua-empresa-ideal?pergunta=${currentQuestion}`}
      />
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section with Question */}
        <section className="relative py-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Page Title */}
              <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-blue mb-8">
                Descobrir sua Empresa Ideal
              </h1>

              {/* Progress Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>Pergunta {currentQuestion} de {questions.length}</span>
                  <span>{Math.round(progress)}% completo</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
              
              {/* Question */}
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-accent/10 text-accent">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Quiz Sua Empresa Ideal
                </Badge>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {question.title}
                </h2>
                
                <p className="text-muted-foreground text-lg">
                  {question.metaDescription}
                </p>
              </div>
              
              {/* Options */}
              <div className="space-y-3 mb-8">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md ${
                      answers[currentQuestion] === option.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/50 bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        answers[currentQuestion] === option.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {option.id.toUpperCase()}
                      </div>
                      <span className={`text-base sm:text-lg ${
                        answers[currentQuestion] === option.id
                          ? "text-foreground font-medium"
                          : "text-foreground"
                      }`}>
                        {option.text}
                      </span>
                      {answers[currentQuestion] === option.id && (
                        <CheckCircle className="w-5 h-5 text-primary ml-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={goToPrevious}
                  disabled={currentQuestion === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </Button>
                
                <Button
                  onClick={goToNext}
                  disabled={!hasAnsweredCurrent}
                  className="gap-2 bg-gradient-primary"
                >
                  {isLastQuestion ? "Ver Resultado" : "Próxima"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Entenda Esta Questão
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {question.explanation.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-gold" />
                Perguntas Frequentes
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {question.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
