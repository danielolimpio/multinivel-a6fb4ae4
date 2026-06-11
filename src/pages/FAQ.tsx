import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Mail, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type FaqCategory = {
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
};

const categories: FaqCategory[] = [
  {
    title: "Conceitos — O que é Marketing Multinível, MMN, MLM e Marketing de Rede",
    description:
      "Definições essenciais sobre marketing multinível, network marketing, marketing de relacionamento, vendas diretas e modelos de negócio em rede no Brasil e no mundo.",
    faqs: [
      {
        question: "O que é Marketing Multinível (MMN)?",
        answer:
          "Marketing Multinível, também chamado de MMN, MLM (multilevel marketing), Network Marketing ou Marketing de Rede, é um modelo legítimo de vendas diretas em que distribuidores independentes comercializam produtos ou serviços de uma empresa e podem construir uma rede de outros distribuidores, sendo remunerados por vendas pessoais, vendas da equipe e bônus de profundidade conforme o plano de compensação.",
      },
      {
        question: "O que significa a sigla MMN?",
        answer:
          "MMN significa Marketing Multinível. É a forma abreviada usada no Brasil para se referir ao modelo de venda direta com múltiplos níveis de remuneração, equivalente ao termo em inglês MLM (multilevel marketing) e também conhecido como network marketing ou marketing de rede.",
      },
      {
        question: "O que significa MLM?",
        answer:
          "MLM é a sigla em inglês para Multilevel Marketing, ou seja, Marketing Multinível. É o mesmo modelo de negócio chamado de MMN no Brasil, no qual distribuidores ganham por vendas próprias e pela produção de sua rede de afiliados.",
      },
      {
        question: "O que é Network Marketing?",
        answer:
          "Network Marketing é o termo internacional para Marketing de Rede. É o modelo no qual o distribuidor independente constrói uma rede de consumidores e revendedores, sendo remunerado pelo movimento de produtos dentro dessa rede. Network marketing, MLM, MMN e marketing multinível são sinônimos.",
      },
      {
        question: "O que é Marketing de Rede?",
        answer:
          "Marketing de Rede é a tradução brasileira de Network Marketing. Trata-se de um sistema de distribuição em que pessoas físicas indicam produtos e novos distribuidores, recebendo comissões por níveis. É um dos modelos de venda direta regulamentados pela ABEVD.",
      },
      {
        question: "O que é Marketing de Relacionamento?",
        answer:
          "Marketing de Relacionamento é a estratégia de criar vínculos duradouros com clientes e prospectos. No contexto de MMN, refere-se à forma como distribuidores constroem confiança, oferecem atendimento personalizado e geram recompra, sendo a base da duplicação no marketing multinível.",
      },
      {
        question: "Qual a diferença entre Marketing de Rede e Marketing de Relacionamento?",
        answer:
          "Marketing de Rede é o modelo de negócio (estrutura de remuneração em níveis), enquanto Marketing de Relacionamento é a estratégia de vendas baseada em confiança e recompra. No MMN profissional, os dois caminham juntos: a rede é a estrutura e o relacionamento é o motor das vendas.",
      },
      {
        question: "O que é venda direta?",
        answer:
          "Venda direta é a comercialização de produtos e serviços diretamente ao consumidor, fora do varejo tradicional, por meio de revendedores ou distribuidores independentes. O marketing multinível é uma das modalidades de venda direta, ao lado do mononível (single level).",
      },
      {
        question: "Qual a diferença entre venda direta mononível e multinível?",
        answer:
          "No mononível o revendedor ganha apenas sobre suas vendas pessoais. No multinível ele também recebe bônus pela produção da rede que indicou, em múltiplos níveis de profundidade, conforme o plano de compensação da empresa.",
      },
      {
        question: "O que é um distribuidor independente de MMN?",
        answer:
          "Distribuidor independente é o profissional autônomo cadastrado em uma empresa de marketing multinível, sem vínculo empregatício, que revende produtos e patrocina novos distribuidores. Também é chamado de consultor, representante, empresário ou afiliado, dependendo da empresa.",
      },
      {
        question: "O que é upline e downline no marketing multinível?",
        answer:
          "Upline é o patrocinador (quem cadastrou você) e a linha ascendente de patrocinadores acima. Downline é a sua rede pessoal: os distribuidores que você cadastrou e os que vieram abaixo deles. A força do MMN está no equilíbrio entre suporte do upline e duplicação da downline.",
      },
      {
        question: "O que é patrocínio no marketing de rede?",
        answer:
          "Patrocínio é o ato de cadastrar uma nova pessoa em sua organização de marketing de rede e dar suporte ao seu desenvolvimento. É diferente de recrutamento puro: o patrocinador profissional treina, acompanha e ajuda o novo distribuidor a alcançar resultados.",
      },
      {
        question: "O que é duplicação no MMN?",
        answer:
          "Duplicação é o processo de ensinar membros da rede a executarem as mesmas ações simples e replicáveis. É o conceito mais importante do marketing multinível: quanto mais duplicável o sistema, maior o crescimento exponencial da organização.",
      },
      {
        question: "O que é prospecção em marketing multinível?",
        answer:
          "Prospecção é a atividade de encontrar pessoas potencialmente interessadas em consumir produtos ou se tornarem distribuidores. Pode ser feita por mercado quente (conhecidos), mercado frio (desconhecidos), tráfego pago, conteúdo orgânico e indicações.",
      },
      {
        question: "O que é mercado quente e mercado frio no MMN?",
        answer:
          "Mercado quente é formado por amigos, familiares e conhecidos. Mercado frio são pessoas que você ainda não conhece, abordadas via redes sociais, anúncios, eventos ou listas. Profissionais de MMN bem-sucedidos combinam os dois mercados.",
      },
    ],
  },
  {
    title: "Legalidade e diferença para Pirâmide Financeira",
    description:
      "Tudo sobre pirâmide financeira, esquema Ponzi, legalidade do MMN no Brasil, ABEVD, regulamentação e como identificar empresas idôneas de marketing multinível.",
    faqs: [
      {
        question: "Marketing Multinível é legal no Brasil?",
        answer:
          "Sim. O Marketing Multinível é legal e regulamentado como modalidade de venda direta pela ABEVD (Associação Brasileira de Empresas de Vendas Diretas), reconhecido pela Receita Federal e pelo Ministério da Justiça. Empresas idôneas declaram produto real, plano de compensação transparente e seguem o Código de Ética da WFDSA.",
      },
      {
        question: "Qual a diferença entre Marketing Multinível e pirâmide financeira?",
        answer:
          "No MMN existe produto ou serviço real consumido pelo cliente final, e os ganhos vêm das vendas. Na pirâmide financeira não há produto efetivo (ou ele é apenas disfarce) e a remuneração depende exclusivamente do recrutamento de novos participantes, modelo ilegal no Brasil pela Lei 1.521/51.",
      },
      {
        question: "Pirâmide financeira é crime?",
        answer:
          "Sim. Pirâmide financeira é crime contra a economia popular previsto na Lei 1.521/51 (artigo 2º, inciso IX) e pode caracterizar estelionato (artigo 171 do Código Penal), com pena de reclusão e multa. O Ministério Público e a CVM fiscalizam casos suspeitos.",
      },
      {
        question: "Como identificar uma pirâmide financeira disfarçada de MMN?",
        answer:
          "Sinais de alerta: ausência de produto real ou produto supervalorizado, ganhos baseados apenas em cadastros, promessas de retorno garantido, exigência de altos investimentos iniciais, falta de plano de compensação claro, ausência de notas fiscais e empresa sem histórico ou CNPJ ativo.",
      },
      {
        question: "O que é esquema Ponzi e qual a diferença para pirâmide?",
        answer:
          "Esquema Ponzi é uma fraude financeira em que retornos prometidos a investidores antigos são pagos com o dinheiro de novos investidores, sem atividade econômica real. A pirâmide é parecida, mas estruturada em níveis de recrutamento. Ambos são ilegais e diferentes do MMN legítimo.",
      },
      {
        question: "O que é a ABEVD?",
        answer:
          "A ABEVD é a Associação Brasileira de Empresas de Vendas Diretas, entidade que representa o setor, define o Código de Ética e reúne as principais empresas de venda direta e marketing multinível atuando no Brasil. Filiação à ABEVD é um indicador de seriedade.",
      },
      {
        question: "O que é a WFDSA?",
        answer:
          "WFDSA (World Federation of Direct Selling Associations) é a federação mundial das associações de venda direta. Define padrões éticos globais e reúne dados de faturamento do setor de vendas diretas e MMN em mais de 60 países.",
      },
      {
        question: "Marketing multinível é golpe?",
        answer:
          "Não. O modelo em si é legítimo e movimenta bilhões de dólares mundialmente. O que existem são golpes disfarçados de MMN, geralmente esquemas em pirâmide. Empresas tradicionais como Avon, Natura, Herbalife, Amway, Mary Kay e Nu Skin operam legalmente há décadas.",
      },
      {
        question: "Como saber se uma empresa de MMN é confiável?",
        answer:
          "Verifique CNPJ ativo na Receita Federal, tempo de mercado, sede física, filiação à ABEVD, existência de produto real com nota fiscal, plano de compensação publicado, política de devolução, depoimentos verificáveis e a posição no ranking de empresas de marketing multinível do nosso portal.",
      },
      {
        question: "MMN precisa pagar imposto de renda?",
        answer:
          "Sim. Ganhos como distribuidor independente de MMN são tributáveis. Pessoa física declara como rendimento tributável recebido de pessoa jurídica; muitos distribuidores abrem MEI ou ME para emitir notas fiscais e ter alíquotas mais favoráveis. Consulte sempre um contador.",
      },
    ],
  },
  {
    title: "Planos de Compensação no Marketing Multinível",
    description:
      "Plano unilevel, binário, matricial, híbrido, breakaway e australiano: como funciona cada plano de compensação no MMN, vantagens, desvantagens e exemplos.",
    faqs: [
      {
        question: "O que é plano de compensação em MMN?",
        answer:
          "Plano de compensação é o conjunto de regras que define como os distribuidores são pagos: comissões por venda direta, bônus de equipe, bônus de profundidade, bônus de patente, bônus de liderança, bônus de carro, viagens e prêmios. É o coração financeiro de qualquer empresa de marketing multinível.",
      },
      {
        question: "O que é plano unilevel?",
        answer:
          "Plano unilevel é o plano de compensação em que cada distribuidor pode patrocinar quantos quiser na primeira linha, formando uma rede em largura. Paga comissões em vários níveis de profundidade. É um dos planos mais simples e duplicáveis do MMN.",
      },
      {
        question: "O que é plano binário?",
        answer:
          "Plano binário permite que o distribuidor tenha apenas duas pernas (esquerda e direita). A remuneração vem do equilíbrio de produção entre as pernas. É popular por exigir equipe pequena para começar a ganhar, mas exige estratégia de balanceamento.",
      },
      {
        question: "O que é plano matricial?",
        answer:
          "Plano matricial limita largura e profundidade (por exemplo, matriz 3x9: 3 pessoas na primeira linha por 9 níveis de profundidade). Excessos transbordam para baixo (spillover), beneficiando a downline.",
      },
      {
        question: "O que é plano híbrido em MMN?",
        answer:
          "Plano híbrido combina características de dois ou mais planos (unilevel + binário, por exemplo). Busca somar vantagens: profundidade do unilevel com velocidade do binário. A maioria das empresas modernas de marketing multinível usa modelos híbridos.",
      },
      {
        question: "O que é plano breakaway?",
        answer:
          "Plano breakaway é o modelo clássico em que líderes que atingem certo volume 'rompem' da linha do patrocinador e formam grupos próprios, e o patrocinador passa a ganhar bônus de geração sobre esses grupos. Usado historicamente por Amway, Nu Skin e Herbalife.",
      },
      {
        question: "O que é plano australiano?",
        answer:
          "Plano australiano é uma variação do unilevel com forte foco em bônus de profundidade e compressão dinâmica. Premia equipes que mantêm volume contínuo em vários níveis.",
      },
      {
        question: "O que é bônus de equipe no marketing de rede?",
        answer:
          "Bônus de equipe é a comissão paga sobre o volume produzido pela sua organização de distribuidores, e não apenas pelas suas vendas pessoais. É o que diferencia o MMN das vendas diretas mononível.",
      },
      {
        question: "O que é bônus de liderança?",
        answer:
          "Bônus de liderança remunera líderes que desenvolvem outros líderes dentro da rede. Geralmente é pago a partir de patentes mais altas e incentiva mentoria, treinamento e duplicação na equipe.",
      },
      {
        question: "O que é bônus de patente em MMN?",
        answer:
          "Bônus de patente (ou rank bonus) é o prêmio pago por atingir e manter níveis de qualificação na carreira da empresa (exemplos: Diamante, Pérola, Esmeralda, Rubi). Pode ser pago em dinheiro, viagens, carros ou bonificações em produtos.",
      },
      {
        question: "O que é compressão dinâmica?",
        answer:
          "Compressão dinâmica é o mecanismo do plano de compensação que 'pula' distribuidores inativos para que os bônus de profundidade alcancem efetivamente os níveis pagáveis. Aumenta a justiça e a competitividade do plano.",
      },
      {
        question: "O que é spillover no plano binário?",
        answer:
          "Spillover acontece quando o patrocinador cadastra mais pessoas do que cabem na sua linha frontal (no binário, mais de duas) e os excedentes 'descem' para a equipe, beneficiando distribuidores da downline. Pode ajudar iniciantes a começar.",
      },
      {
        question: "O que é volume pessoal (VP) e volume de grupo (VG)?",
        answer:
          "Volume Pessoal (VP) é o total de pontos gerados pelas suas vendas e consumo. Volume de Grupo (VG) é o volume total da sua organização. Patentes e bônus geralmente exigem mínimos de VP e VG.",
      },
      {
        question: "Qual o melhor plano de compensação de marketing multinível?",
        answer:
          "Não existe 'melhor' absoluto. O plano ideal depende do seu perfil: binário é mais rápido para iniciar, unilevel é mais estável a longo prazo, breakaway favorece grandes líderes, matricial valoriza duplicação. Avalie produto, empresa e plano em conjunto.",
      },
    ],
  },
  {
    title: "Empresas de Marketing Multinível no Brasil e no Mundo",
    description:
      "Ranking, comparativos e análises das melhores empresas de marketing multinível: Hinode, Herbalife, Amway, Natura, Mary Kay, Jeunesse, Nu Skin, doTERRA, Avon, Forever, Polishop, Tupperware e muitas outras.",
    faqs: [
      {
        question: "Qual a melhor empresa de Marketing Multinível do Brasil em 2026?",
        answer:
          "Nosso ranking atualizado avalia mais de 1.600 empresas de MMN e vendas diretas considerando plano de compensação, momentum de mercado, tempo de operação, satisfação dos distribuidores e crescimento real. Consulte o ranking completo e o comparativo lado a lado de até 3 empresas para escolher a melhor para o seu perfil.",
      },
      {
        question: "Quais são as maiores empresas de MMN do mundo?",
        answer:
          "Entre as maiores estão Amway, Herbalife, Natura&Co, Nu Skin, Mary Kay, Avon, Vorwerk, Infinitus, Tupperware, Belcorp, Oriflame, Jeunesse, doTERRA, Young Living, USANA, Forever Living, Coway, Atomy e Melaleuca. Consulte o ranking global completo em nosso portal.",
      },
      {
        question: "Quais as maiores empresas de marketing multinível do Brasil?",
        answer:
          "No Brasil destacam-se Natura, Avon, Hinode, Herbalife Brasil, Mary Kay Brasil, Jequiti, Polishop, Tupperware Brasil, Akmos, Vivacor, Essential Nutrition, Bemorè, By Samia e Lavynce, entre muitas outras listadas em nosso ranking nacional.",
      },
      {
        question: "Como comparar empresas de marketing multinível?",
        answer:
          "Use nossa ferramenta Comparativo para colocar até 3 empresas lado a lado, avaliando plano de compensação, produtos, tempo de mercado, presença internacional, ticket médio, kit de adesão, política de retorno e pontuação da comunidade.",
      },
      {
        question: "Quais empresas de MMN pagam mais comissão?",
        answer:
          "O percentual médio pago em comissões pelas empresas líderes do setor varia entre 35% e 50% do faturamento. Empresas mais novas costumam oferecer percentuais agressivos para acelerar crescimento. Avalie sempre a sustentabilidade do plano.",
      },
      {
        question: "Quais empresas de marketing multinível atuam internacionalmente?",
        answer:
          "Amway, Herbalife, Nu Skin, Mary Kay, doTERRA, Young Living, Jeunesse, Forever Living, Oriflame, Tupperware e Natura&Co (após a aquisição da Avon) são exemplos de empresas com presença em dezenas de países.",
      },
      {
        question: "Quais segmentos mais crescem no MMN?",
        answer:
          "Saúde e bem-estar (suplementação, emagrecimento, nutracêuticos), beleza e cosméticos, óleos essenciais, cuidados com a pele, perfumaria, café gourmet, produtos de limpeza ecológicos, tecnologia/IA, finanças e educação digital estão entre os segmentos com maior crescimento.",
      },
      {
        question: "Quais empresas novas de MMN estão surgindo no Brasil?",
        answer:
          "O mercado brasileiro tem visto o surgimento contínuo de novas empresas de MMN nos segmentos de tecnologia, suplementação, perfumaria, cosméticos veganos, energia solar e educação. Consulte a aba de empresas recentes em nosso ranking.",
      },
      {
        question: "Qual a melhor empresa de MMN para iniciantes?",
        answer:
          "Para iniciantes recomendamos empresas com kit de entrada acessível, treinamentos estruturados, produto de consumo recorrente e plano de compensação duplicável. Use nosso quiz 'Sua Empresa Ideal' para receber uma sugestão personalizada.",
      },
      {
        question: "Quais empresas de MMN são reconhecidas pela ABEVD?",
        answer:
          "Avon, Natura, Herbalife, Amway, Mary Kay, Tupperware, Hinode, Jequiti, Polishop, Belcorp, entre outras, são associadas ou reconhecidas pela ABEVD. A filiação é um forte indicativo de seriedade e adesão ao Código de Ética do setor.",
      },
    ],
  },
  {
    title: "Como começar no Marketing Multinível",
    description:
      "Passo a passo para iniciar no MMN, cadastro, kit de adesão, mercado quente, mercado frio, lista de nomes, primeiros 90 dias e treinamento básico do networker.",
    faqs: [
      {
        question: "Como começar no marketing multinível do zero?",
        answer:
          "Passo a passo: 1) escolha uma empresa séria (use nosso ranking), 2) consuma o produto, 3) faça o cadastro com um patrocinador ativo, 4) participe dos treinamentos, 5) monte sua lista de nomes, 6) faça apresentações, 7) duplique o sistema na sua equipe.",
      },
      {
        question: "Quanto custa começar no marketing multinível?",
        answer:
          "O custo varia conforme a empresa. Existem cadastros gratuitos, kits a partir de R$ 100 e kits premium acima de R$ 5.000. A média do mercado fica entre R$ 200 e R$ 1.500. Desconfie de exigências de altos valores 'só para entrar' sem produto correspondente.",
      },
      {
        question: "Preciso de CNPJ para trabalhar com MMN?",
        answer:
          "Não é obrigatório, mas é altamente recomendado. Abrir MEI ou ME permite emitir notas fiscais, ter alíquotas tributárias melhores e profissionalizar a operação. Verifique o CNAE adequado para venda direta e marketing multinível.",
      },
      {
        question: "Como montar uma lista de nomes no MMN?",
        answer:
          "Liste pelo menos 100 pessoas: família, amigos, colegas de trabalho, vizinhos, ex-colegas de escola, contatos profissionais, fornecedores, prestadores de serviço e conexões nas redes sociais. Não pré-julgue ninguém: convide todos para conhecer.",
      },
      {
        question: "Quais os primeiros passos de um novo networker?",
        answer:
          "1) Defina seu 'porquê', 2) consuma o produto e construa sua história, 3) liste 100 nomes, 4) agende 10 apresentações por semana, 5) duplique cada novo cadastro, 6) participe de eventos e treinamentos, 7) acompanhe métricas semanais.",
      },
      {
        question: "O que é o sistema de 90 dias no MMN?",
        answer:
          "É o método clássico de imersão durante os primeiros 90 dias: alta atividade de apresentações, cadastros e treinamentos para criar momentum e formar as primeiras lideranças. Quem segue o sistema costuma atingir os primeiros bônus relevantes nesse período.",
      },
      {
        question: "Como fazer prospecção no marketing de rede?",
        answer:
          "Combine mercado quente (lista de nomes), mercado frio (redes sociais, eventos, tráfego pago), conteúdo orgânico (Instagram, TikTok, YouTube), indicações ativas e parcerias. Tenha um script simples e um link de apresentação profissional.",
      },
      {
        question: "Como convidar alguém para conhecer o marketing multinível?",
        answer:
          "Use convites curtos, sem entregar todo o conteúdo no convite. Mostre que tem algo interessante para apresentar, marque dia e hora, e use ferramentas (vídeos, lives, reuniões 1 a 1). Evite spam e mensagens automatizadas idênticas.",
      },
      {
        question: "Qual o perfil ideal para trabalhar com MMN?",
        answer:
          "Pessoas comunicativas, disciplinadas, abertas a aprender, com mentalidade empreendedora e dispostas a trabalhar por resultado (não por hora). Bom relacionamento interpessoal, persistência e capacidade de ensinar são diferenciais.",
      },
      {
        question: "Posso fazer MMN como segunda renda?",
        answer:
          "Sim, é uma das principais formas de começar. Muitos networkers iniciam dedicando 1 a 2 horas por dia em paralelo ao emprego e migram para o MMN em tempo integral apenas quando a renda do negócio supera o salário fixo de forma estável.",
      },
    ],
  },
  {
    title: "Ganhos, Salário e Top Earners do Network Marketing",
    description:
      "Quanto ganha quem trabalha com marketing de rede, top earners mundiais, renda média, renda residual, royalties e cases reais de quem vive de MMN.",
    faqs: [
      {
        question: "Quanto ganha quem trabalha com marketing multinível?",
        answer:
          "Os ganhos variam muito. Distribuidores casuais ganham de R$ 100 a R$ 2.000/mês; profissionais dedicados entre R$ 5.000 e R$ 30.000/mês; e top earners atingem 6 a 7 dígitos mensais. A diferença está em volume de atividade, liderança e tempo de construção.",
      },
      {
        question: "Quem são os top earners do MMN no mundo?",
        answer:
          "Entre os maiores top earners mundiais figuram nomes como Igor Alberts & Andreea Cimbala, Jenna Zwagil, Trin & Jirawan Chuenpraparat, Rolf Kipp, Holton Buggs, Ivan & Monika Tapia, Stormy Wellington, Enrique Varela e Jeff Roberti. Veja a lista completa no nosso portal.",
      },
      {
        question: "Quem são os top earners brasileiros de MMN?",
        answer:
          "O Brasil tem líderes destacados em empresas como Hinode, Herbalife, Polishop, Akmos, Bemorè, Forever, doTERRA e Jeunesse. Acesse a seção de Top Earners do site para conhecer perfis nacionais reconhecidos no setor.",
      },
      {
        question: "O que é renda residual no marketing multinível?",
        answer:
          "Renda residual é o ganho recorrente proveniente do consumo contínuo da rede, mesmo quando o distribuidor reduz a atividade. É um dos grandes atrativos do MMN, semelhante a royalties: você trabalha uma vez e continua recebendo.",
      },
      {
        question: "O que são royalties no MMN?",
        answer:
          "Royalties no MMN são bônus pagos sobre o consumo recorrente de níveis profundos da rede. Funcionam de forma parecida aos royalties de artistas: enquanto a rede consome, o distribuidor recebe uma parcela.",
      },
      {
        question: "Dá para viver só de marketing de rede?",
        answer:
          "Sim, milhares de pessoas no Brasil e no mundo vivem 100% de MMN. Mas isso exige tratar o negócio como profissão: rotina, metas, investimento em educação, equipe e marca pessoal. Não é renda rápida nem garantida.",
      },
      {
        question: "Quanto tempo leva para ganhar dinheiro com MMN?",
        answer:
          "Primeiros ganhos podem ocorrer em 30 a 90 dias. Renda significativa (R$ 5.000+) costuma surgir entre 6 e 24 meses para quem trabalha de forma consistente. Renda de top earner exige 3 a 7 anos de construção sólida.",
      },
      {
        question: "Quanto ganha um diamante de MMN?",
        answer:
          "Depende da empresa. Em grandes empresas, patentes como Diamante, Esmeralda ou Crown costumam significar ganhos entre R$ 30.000 e R$ 500.000+ por mês, somando bônus de equipe, liderança, viagens e premiações.",
      },
      {
        question: "Como aumentar minha renda no marketing multinível?",
        answer:
          "Aumente seu volume pessoal (consumo + vendas), patrocine de forma constante, desenvolva novos líderes, participe de todos os eventos, invista em marca pessoal nas redes sociais e domine o seu plano de compensação para maximizar bônus.",
      },
      {
        question: "Por que muita gente desiste do MMN?",
        answer:
          "Principais motivos: expectativas irreais (ficar rico rápido), falta de método, ausência de upline de qualidade, baixa duplicação, escolha de empresa errada e falta de paciência. Quem trata como negócio sério tende a perseverar.",
      },
    ],
  },
  {
    title: "Marketing Digital, Tráfego Pago e Recrutamento Online em MMN",
    description:
      "Como usar Instagram, TikTok, YouTube, Facebook, anúncios pagos, funis de vendas e marca pessoal para escalar o marketing multinível e o network marketing na internet.",
    faqs: [
      {
        question: "Como fazer marketing multinível pela internet?",
        answer:
          "Construa marca pessoal nas redes sociais, produza conteúdo educativo sobre o nicho do produto, use funis de captura, automatize follow-up por e-mail/WhatsApp, faça lives, ofereça materiais ricos e converta leads em apresentações 1 a 1 ou em grupo.",
      },
      {
        question: "Como recrutar pelo Instagram no MMN?",
        answer:
          "Posicione o perfil com biografia clara, crie conteúdos de valor (reels, carrosséis e stories), use prova social, faça lives semanais, capture leads via link na bio, responda DMs com script humanizado e leve para uma apresentação fora da rede.",
      },
      {
        question: "Como usar TikTok para marketing de rede?",
        answer:
          "Aposte em vídeos curtos e educativos sobre o nicho do produto, bastidores, transformação de clientes, mitos do MMN e marca pessoal. Evite vender direto; foque em gerar conexão e direcionar para link de captura.",
      },
      {
        question: "Tráfego pago funciona para marketing multinível?",
        answer:
          "Sim. Facebook Ads, Instagram Ads, Google Ads, YouTube Ads e TikTok Ads são usados por top earners para escalar. Funciona melhor quando focado em conteúdo de valor, captação de leads qualificados e funis bem estruturados, e não na venda direta da oportunidade.",
      },
      {
        question: "O que é funil de vendas no MMN?",
        answer:
          "Funil é a jornada estruturada do prospecto: tráfego → captura de lead → conteúdo de aquecimento → apresentação → fechamento → onboarding. Funis bem desenhados aumentam a eficiência do recrutamento e da venda recorrente.",
      },
      {
        question: "Como gerar leads para MMN?",
        answer:
          "Use iscas digitais (e-books, aulas, quizzes, checklists), landing pages, anúncios segmentados, parcerias com criadores de conteúdo e SEO. Capture e-mail e WhatsApp, segmente por interesse e nutra com conteúdo até a conversão.",
      },
      {
        question: "Marca pessoal é importante no marketing de rede?",
        answer:
          "Sim, e cada vez mais. Marca pessoal forte reduz objeções, atrai leads qualificados, ajuda no recrutamento e cria autoridade duradoura, independentemente da empresa de MMN com a qual você atua.",
      },
      {
        question: "Posso divulgar minha empresa de MMN no WhatsApp?",
        answer:
          "Sim, mas com estratégia. Evite listas de transmissão massivas, prefira grupos segmentados, status com conteúdo de valor, atendimento personalizado e CRM simples para acompanhar conversas. Spam queima sua reputação.",
      },
      {
        question: "Como criar conteúdo para MMN sem ser chato?",
        answer:
          "Foque em educar (problemas que o produto resolve), inspirar (transformação de pessoas), entreter (bastidores) e converter (chamadas claras). Evite postagens 'cheque' e copies prontas de upline; humanize.",
      },
      {
        question: "Quais ferramentas de IA ajudam no marketing multinível?",
        answer:
          "ChatGPT e similares para roteiros e copy, ferramentas de edição de vídeo automatizada, CRM com IA para follow-up, automações de WhatsApp, geradores de imagem para campanhas e análises de métricas. A IA acelera duplicação se usada com método.",
      },
    ],
  },
  {
    title: "Universidade Multinível — Plataforma, Votação e Comunidade",
    description:
      "Dúvidas sobre nossa plataforma: cadastro, sistema de votação, ranking, programa de afiliados, blog, fórum e ferramentas de comparação de empresas.",
    faqs: [
      {
        question: "O que é a Universidade Multinível?",
        answer:
          "A Universidade Multinível é o maior portal brasileiro de referência em Marketing Multinível, MMN, MLM e Marketing de Rede. Oferecemos ranking de empresas, comparativos, top earners, blog, fórum, quiz da empresa ideal e uma comunidade ativa de networkers.",
      },
      {
        question: "Como funciona o sistema de votação?",
        answer:
          "Usuários cadastrados votam nas empresas de marketing multinível que conhecem ou com as quais trabalham. Os votos são contabilizados em tempo real e influenciam diretamente o ranking das empresas em nossa plataforma.",
      },
      {
        question: "Como funciona o ranking das empresas de MMN?",
        answer:
          "O ranking combina votos da comunidade, momentum de mercado, tempo de operação, presença internacional, plano de compensação e dados de tráfego. É atualizado continuamente e pode ser filtrado por país, segmento e modelo de plano.",
      },
      {
        question: "O cadastro na Universidade Multinível é gratuito?",
        answer:
          "Sim, totalmente gratuito. Você pode criar sua conta, votar, comparar empresas, participar do fórum, fazer o quiz da empresa ideal e acessar todo o conteúdo do blog sem nenhum custo.",
      },
      {
        question: "Como funciona o programa de afiliados?",
        answer:
          "Ao se cadastrar, você recebe um código de indicação exclusivo. Quando alguém se cadastra usando seu código, você recebe comissões sobre atividades elegíveis dessa pessoa, conforme o plano de compensação da plataforma.",
      },
      {
        question: "Como funciona o quiz 'Sua Empresa Ideal'?",
        answer:
          "É um quiz inteligente com mais de 20 perguntas sobre perfil, objetivos, tempo disponível, investimento e segmentos de interesse. Ao final, recomenda as empresas de marketing multinível mais alinhadas com seu perfil.",
      },
      {
        question: "Posso comparar empresas de MMN no site?",
        answer:
          "Sim. Use o Comparativo para colocar até 3 empresas lado a lado, avaliando plano de compensação, kit de adesão, segmentos, países de atuação, pontuação e diferenciais.",
      },
      {
        question: "Como sugerir uma empresa para o ranking?",
        answer:
          "Acesse a página de Contato, envie o nome da empresa, site oficial, segmento e país de operação. Nossa equipe valida e adiciona ao ranking se os critérios mínimos forem atendidos.",
      },
      {
        question: "Os dados das empresas são atualizados com que frequência?",
        answer:
          "Votos e ranking são atualizados em tempo real. As fichas das empresas são revisadas continuamente e atualizações relevantes são publicadas no blog do portal.",
      },
      {
        question: "Como entro em contato com a Universidade Multinível?",
        answer:
          "Pela página de Contato do site ou pelas nossas redes sociais. Respondemos mensagens em até 48 horas úteis em dias de semana.",
      },
    ],
  },
];

// Flat list for FAQPage JSON-LD
const allFaqs = categories.flatMap((c) => c.faqs);

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ Marketing Multinível, MMN, MLM e Marketing de Rede | Universidade Multinível"
        description="Perguntas frequentes sobre Marketing Multinível (MMN), MLM, Network Marketing, Marketing de Rede e Marketing de Relacionamento: empresas, planos de compensação, ganhos, top earners, legalidade e tráfego pago."
        canonical="/faq/"
      />

      <Header />

      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              FAQ — Marketing Multinível, MMN, MLM, Marketing de Rede e Marketing de Relacionamento
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mais de 80 perguntas e respostas sobre marketing multinível, network marketing,
              vendas diretas, planos de compensação, melhores empresas de MMN do Brasil e do
              mundo, top earners, tráfego pago, recrutamento online, legalidade, ABEVD,
              diferença entre MMN e pirâmide financeira e como começar do zero.
            </p>
          </div>

          {/* Categorized FAQ */}
          <div className="max-w-4xl mx-auto space-y-10">
            {categories.map((category, ci) => (
              <Card key={ci} className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {category.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${ci}-${index}`}>
                      <AccordionTrigger className="text-left text-base sm:text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-primary/5 border-primary/20">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Ainda tem dúvidas sobre Marketing Multinível?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a escolher a melhor empresa de MMN e
                a estruturar seu negócio de marketing de rede. Entre em contato!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button className="w-full sm:w-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Acesse o Fórum
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* FAQPage JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <Footer />
    </>
  );
}
