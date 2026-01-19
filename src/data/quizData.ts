export interface QuizQuestion {
  slug: string;
  title: string;
  metaDescription: string;
  question: string;
  options: {
    label: string;
    level?: 'iniciante' | 'intermediario' | 'avancado';
    value: string;
  }[];
  article: {
    title: string;
    content: string;
  };
  recommendations: {
    iniciante?: { type: 'book' | 'course'; title: string; author?: string; link?: string };
    intermediario?: { type: 'book' | 'course'; title: string; author?: string; link?: string };
    avancado?: { type: 'book' | 'course'; title: string; author?: string; link?: string };
    general?: { type: 'book' | 'course'; title: string; author?: string; link?: string };
  };
  faq: { question: string; answer: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    slug: 'papel-no-mmn',
    title: 'Qual é o seu papel no MMN? | Quiz Universidade Multinível',
    metaDescription: 'Descubra como seu papel atual no Marketing Multinível define sua estratégia de crescimento. Responda ao quiz e receba recomendações personalizadas.',
    question: 'Qual é o seu principal papel no MMN hoje?',
    options: [
      { label: 'Ainda não comecei, estou pesquisando', level: 'iniciante', value: 'pesquisando' },
      { label: 'Distribuidor/Consultor iniciante', level: 'iniciante', value: 'distribuidor_iniciante' },
      { label: 'Distribuidor ativo com pequena equipe', level: 'intermediario', value: 'distribuidor_equipe' },
      { label: 'Líder com equipe consolidada', level: 'avancado', value: 'lider' },
      { label: 'Top líder/Diamante ou acima', level: 'avancado', value: 'top_lider' },
    ],
    article: {
      title: 'Por que saber seu papel no MMN define sua estratégia de crescimento',
      content: `O primeiro passo para construir uma carreira sólida no Marketing Multinível é entender exatamente onde você está na jornada. Muitos empreendedores cometem o erro de pular etapas ou aplicar estratégias inadequadas para seu nível atual.

Se você ainda está pesquisando, seu foco deve ser 100% em educação: entender o modelo de negócios, avaliar empresas sérias e desenvolver o mindset correto. Tentar recrutar pessoas nessa fase geralmente resulta em frustração.

Já o distribuidor iniciante precisa dominar os fundamentos: conhecer profundamente os produtos, desenvolver habilidades de comunicação e criar seus primeiros relacionamentos comerciais. A tentação de "queimar a lista" de contatos é real, mas paciência nessa fase paga dividendos enormes.

Para quem já tem uma pequena equipe, o desafio muda completamente. Agora não basta vender — é preciso ensinar, motivar e criar sistemas que funcionem sem sua presença constante. A transição de "fazedor" para "líder" é onde muitos travam.

Líderes consolidados enfrentam outro tipo de desafio: escalar sem perder qualidade, manter a cultura da equipe e se reinventar constantemente. No topo, a competição é feroz e a inovação é obrigatória.

Independente de onde você esteja, a clareza sobre seu papel atual permite escolher as ferramentas, treinamentos e estratégias certas para o próximo nível.`,
    },
    recommendations: {
      iniciante: { type: 'book', title: 'Network Marketing Para Leigos', author: 'Zig Ziglar', link: 'https://amzn.to/network-marketing-leigos' },
      intermediario: { type: 'book', title: 'Go Pro: 7 Passos para se Tornar um Profissional do Marketing de Rede', author: 'Eric Worre', link: 'https://amzn.to/go-pro-eric-worre' },
      avancado: { type: 'book', title: 'Os 48 Princípios do Poder', author: 'Robert Greene', link: 'https://amzn.to/48-leis-poder' },
    },
    faq: [
      { question: 'Preciso ser líder para ter sucesso no MMN?', answer: 'Não necessariamente. Muitas pessoas constroem renda significativa focando apenas em vendas diretas. Porém, o potencial de ganhos residuais aumenta exponencialmente quando você desenvolve uma equipe.' },
      { question: 'Posso mudar de papel ao longo do tempo?', answer: 'Com certeza! A evolução natural no MMN é justamente progredir de consumidor para distribuidor, depois líder e eventualmente mentor. Cada fase traz novos desafios e recompensas.' },
      { question: 'Qual o melhor papel para começar?', answer: 'Comece como consumidor do produto. Experimente, entenda os benefícios na prática e só depois considere distribuir. Autenticidade vende mais que qualquer técnica.' },
    ],
  },
  {
    slug: 'tempo-de-atuacao-mmn',
    title: 'Tempo de Atuação no MMN | Quiz Universidade Multinível',
    metaDescription: 'Descubra em qual estágio você está na sua jornada de network marketing e receba orientações específicas para seu momento.',
    question: 'Há quanto tempo você atua com MMN ou Vendas Diretas?',
    options: [
      { label: 'Ainda não comecei', level: 'iniciante', value: 'nao_comecei' },
      { label: 'Menos de 6 meses', level: 'iniciante', value: 'menos_6_meses' },
      { label: 'Entre 6 meses e 1 ano', level: 'iniciante', value: '6_meses_1_ano' },
      { label: 'Entre 1 e 3 anos', level: 'intermediario', value: '1_3_anos' },
      { label: 'Mais de 3 anos', level: 'avancado', value: 'mais_3_anos' },
    ],
    article: {
      title: 'Os 3 Estágios do Network Marketer: Sobrevivência, Consistência e Escala',
      content: `Toda jornada no Marketing Multinível passa por três estágios distintos, e entender em qual você está é crucial para não desistir no momento errado.

O primeiro estágio é a SOBREVIVÊNCIA (0-12 meses). Aqui, tudo é novo e desafiador. Você está aprendendo o vocabulário, enfrentando rejeições, e provavelmente ainda não vê resultados financeiros significativos. A taxa de desistência nessa fase é de aproximadamente 80%. O segredo? Foque em aprendizado, não em ganhos. Comemore cada pequena vitória.

O segundo estágio é a CONSISTÊNCIA (1-3 anos). Você já conhece o sistema, tem alguns clientes fiéis e talvez uma pequena equipe. Os resultados começam a aparecer, mas ainda oscilam muito. O perigo aqui é a complacência — muitos param de prospectar quando atingem um "conforto". A chave é criar rotinas diárias inabaláveis.

O terceiro estágio é a ESCALA (3+ anos). Você domina o negócio, tem sistemas funcionando e uma equipe que produz mesmo sem sua presença diária. O desafio agora é outro: manter a relevância, inovar e formar novos líderes. Líderes nessa fase frequentemente se tornam mentores e palestrantes.

Cada estágio exige habilidades diferentes. Não adianta tentar estratégias de escala quando você ainda está sobrevivendo. Respeite seu momento e evolua organicamente.`,
    },
    recommendations: {
      iniciante: { type: 'book', title: 'O Segredo do Network Marketing', author: 'Randy Gage', link: 'https://amzn.to/segredo-network' },
      intermediario: { type: 'book', title: 'Your First Year in Network Marketing', author: 'Mark Yarnell', link: 'https://amzn.to/first-year-network' },
      avancado: { type: 'book', title: 'Se Você Quer Ser Rico', author: 'Verne Harnish', link: 'https://amzn.to/scaling-up' },
    },
    faq: [
      { question: 'Quanto tempo leva para ganhar dinheiro no MMN?', answer: 'Resultados variam muito. Alguns veem retorno em 30-90 dias, outros levam 6-12 meses. A constância de atividades diárias é mais determinante que o tempo.' },
      { question: 'É normal não ter resultados no primeiro ano?', answer: 'Sim, é comum. O primeiro ano é principalmente de aprendizado e construção de fundamentos. A maioria dos grandes líderes teve resultados modestos no início.' },
      { question: 'Posso acelerar minha curva de crescimento?', answer: 'Sim! Investir em mentoria, participar de eventos e dedicar mais horas de qualidade ao negócio acelera significativamente o processo.' },
    ],
  },
  {
    slug: 'uso-de-trafego-pago',
    title: 'Tráfego Pago no MMN | Quiz Universidade Multinível',
    metaDescription: 'Descubra como usar Meta Ads, Google Ads e TikTok Ads para atrair leads qualificados no Marketing Multinível de forma estratégica.',
    question: 'Você já usa tráfego pago (Meta Ads, Google Ads, TikTok)?',
    options: [
      { label: 'Nunca usei e não sei como funciona', level: 'iniciante', value: 'nunca_usou' },
      { label: 'Já tentei mas não tive resultados', level: 'iniciante', value: 'tentou_sem_resultado' },
      { label: 'Uso ocasionalmente com resultados variados', level: 'intermediario', value: 'uso_ocasional' },
      { label: 'Uso regularmente com ROI positivo', level: 'avancado', value: 'uso_regular' },
      { label: 'Tenho estratégias avançadas e escalo campanhas', level: 'avancado', value: 'estrategias_avancadas' },
    ],
    article: {
      title: 'Tráfego Pago no MMN: Como Atrair Leads Qualificados Sem Gastar Errado',
      content: `O tráfego pago revolucionou o Marketing Multinível nos últimos anos. Enquanto antigamente dependíamos apenas de lista quente e indicações, hoje é possível atrair centenas de leads qualificados por dia usando plataformas como Meta Ads, Google Ads e TikTok.

Porém, existe uma armadilha: muitos networkers gastam fortunas em anúncios sem retorno porque não entendem os fundamentos. Antes de investir um centavo, você precisa ter clareza sobre três elementos: público-alvo específico, oferta irresistível e funil de conversão.

No MMN, os melhores públicos geralmente são pessoas insatisfeitas com emprego, buscando renda extra, interessadas em desenvolvimento pessoal ou já familiarizadas com vendas diretas. Segmentações genéricas desperdiçam dinheiro.

Sua oferta não pode ser "entre no meu negócio". Ninguém acorda querendo entrar em uma empresa de MMN. A oferta precisa resolver um problema: "Guia gratuito: Como ganhar R$3.000 extras trabalhando 2h por dia" funciona muito melhor.

O funil é onde a mágica acontece. Anúncio → Landing Page → Lead Magnet → Sequência de E-mails → Chamada de Apresentação. Sem esse sistema, você está jogando dinheiro fora.

Comece com orçamentos pequenos (R$20-50/dia), teste múltiplas variações e otimize baseado em dados. Tráfego pago é ciência, não loteria.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Meta Ads para Empreendedores de Rede', link: 'https://universidademultinivel.com/cursos/meta-ads' },
    },
    faq: [
      { question: 'Posso usar anúncios para recrutar no MMN?', answer: 'Sim, mas com cuidado. A maioria das plataformas proíbe promessas de renda. Foque em atrair leads para conteúdo de valor, não diretamente para recrutamento.' },
      { question: 'Quanto preciso investir para começar?', answer: 'Comece com R$500-1000/mês para testes. Esse valor permite experimentar diferentes públicos e criativos antes de escalar.' },
      { question: 'Qual plataforma é melhor para MMN?', answer: 'Meta (Facebook/Instagram) ainda lidera para MMN devido à qualidade da segmentação. TikTok está crescendo para públicos mais jovens.' },
    ],
  },
  {
    slug: 'estrategias-de-geracao-de-leads',
    title: 'Estratégias de Geração de Leads | Quiz Universidade Multinível',
    metaDescription: 'Aprenda 7 formas comprovadas de gerar leads para seu negócio de MMN além das indicações tradicionais.',
    question: 'Como você gera leads hoje?',
    options: [
      { label: 'Apenas lista quente (amigos e família)', level: 'iniciante', value: 'lista_quente' },
      { label: 'Redes sociais orgânicas', level: 'iniciante', value: 'redes_organicas' },
      { label: 'Combinação de orgânico e pago', level: 'intermediario', value: 'organico_pago' },
      { label: 'Funis automatizados', level: 'avancado', value: 'funis' },
      { label: 'Múltiplas fontes diversificadas', level: 'avancado', value: 'multiplas_fontes' },
    ],
    article: {
      title: '7 Fontes de Leads para MMN que Não Dependem Só de Indicação',
      content: `A "lista de 100 nomes" é o ponto de partida clássico no MMN, mas profissionais de verdade sabem que depender apenas de indicações limita drasticamente o crescimento. Aqui estão 7 fontes de leads que podem transformar seu negócio:

1. **Conteúdo em Redes Sociais**: Posts educativos, stories mostrando seu dia a dia e lives interativas atraem pessoas naturalmente interessadas no que você oferece.

2. **YouTube e Podcasts**: Conteúdo em vídeo ou áudio posiciona você como autoridade. Leads que chegam por esses canais já estão "aquecidos".

3. **Grupos de Facebook/Telegram**: Participar (e eventualmente criar) comunidades do seu nicho gera conexões valiosas. A chave é contribuir genuinamente, não spammar.

4. **Eventos e Networking**: Feiras, congressos e encontros presenciais ainda são poderosos. Cartões de visita digitais facilitam o follow-up.

5. **Parcerias Estratégicas**: Profissionais de áreas complementares (coaches, nutricionistas, personal trainers) podem indicar clientes mutuamente.

6. **Tráfego Pago**: Como vimos, anúncios bem estruturados escalam sua captação exponencialmente.

7. **Referências de Clientes Satisfeitos**: O boca a boca continua imbatível. Crie um programa de indicações com incentivos claros.

A diversificação protege seu negócio. Se uma fonte secar, você tem outras gerando leads consistentemente.`,
    },
    recommendations: {
      general: { type: 'book', title: 'DotCom Secrets', author: 'Russell Brunson', link: 'https://amzn.to/dotcom-secrets' },
    },
    faq: [
      { question: 'Qual a melhor forma de capturar leads no Instagram?', answer: 'Combine conteúdo de valor nos posts, CTAs nos stories e um link na bio para uma landing page com isca digital (e-book, checklist, etc.).' },
      { question: 'Preciso gastar dinheiro para gerar leads?', answer: 'Não necessariamente. Estratégias orgânicas funcionam, mas exigem mais tempo. O ideal é combinar as duas abordagens.' },
      { question: 'Quantos leads devo gerar por dia?', answer: 'Depende do seu objetivo. Para resultados consistentes, mire em 5-10 novos contatos qualificados por dia.' },
    ],
  },
  {
    slug: 'posicionamento-nas-redes',
    title: 'Posicionamento nas Redes Sociais | Quiz Universidade Multinível',
    metaDescription: 'Aprenda como se posicionar como autoridade no MMN nas redes sociais sem parecer vendedor ou desesperado.',
    question: 'Você tem um perfil profissional nas redes sociais?',
    options: [
      { label: 'Uso apenas perfil pessoal misturado', level: 'iniciante', value: 'pessoal_misturado' },
      { label: 'Tenho perfil comercial mas sem estratégia', level: 'iniciante', value: 'comercial_sem_estrategia' },
      { label: 'Perfil profissional com conteúdo regular', level: 'intermediario', value: 'profissional_regular' },
      { label: 'Marca pessoal forte e reconhecida', level: 'avancado', value: 'marca_forte' },
      { label: 'Influenciador no nicho de MMN', level: 'avancado', value: 'influenciador' },
    ],
    article: {
      title: 'Como Se Posicionar como Autoridade no MMN Sem Parecer Vendedor',
      content: `O maior erro nas redes sociais é transformar seu perfil em um outdoor de vendas. Posts repetitivos sobre produtos, oportunidades e "mude sua vida" afastam mais pessoas do que atraem. A solução? Construir uma marca pessoal autêntica.

Autoridade no digital vem de três pilares: CONHECIMENTO demonstrado, CONSISTÊNCIA nas publicações e CONEXÃO genuína com sua audiência.

Conhecimento demonstrado significa compartilhar insights valiosos gratuitamente. Ensine algo útil em cada post. Se você vende suplementos, fale sobre nutrição. Se é cosméticos, ensine sobre cuidados com a pele. As pessoas seguem quem as educa.

Consistência não é postar 10 vezes por dia. É aparecer regularmente com qualidade. Três posts excelentes por semana vencem 21 posts mediocres. Crie um calendário editorial e cumpra.

Conexão genuína acontece quando você mostra vulnerabilidade. Compartilhe suas dificuldades, fracassos e aprendizados. As pessoas se conectam com humanos, não com máquinas de venda.

Outro ponto crucial: responda TODOS os comentários e mensagens. Engajamento ativo multiplica seu alcance e cria relacionamentos.

Lembre-se: nas redes sociais, você está competindo pela atenção com Netflix, memes e família. Seu conteúdo precisa ser tão interessante quanto entretenimento.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Branding Pessoal para Líderes de Rede', link: 'https://universidademultinivel.com/cursos/branding-pessoal' },
    },
    faq: [
      { question: 'Devo separar perfil pessoal do profissional?', answer: 'Depende da sua estratégia. Muitos líderes de sucesso usam um perfil só, mostrando o lado pessoal e profissional integrados. O importante é manter coerência.' },
      { question: 'Quantos seguidores preciso para ter resultados?', answer: 'Números não são tudo. 500 seguidores engajados valem mais que 50.000 inativos. Foque em qualidade de conexão.' },
      { question: 'Qual rede social é melhor para MMN?', answer: 'Instagram e TikTok lideram para atração. LinkedIn funciona para MMN corporativo. Escolha onde seu público está.' },
    ],
  },
  {
    slug: 'gestao-de-contatos-mmn',
    title: 'Gestão de Contatos no MMN | Quiz Universidade Multinível',
    metaDescription: 'Descubra por que 90% dos networkers perdem oportunidades por má gestão de contatos e como usar CRM para organizar seu negócio.',
    question: 'Usa alguma ferramenta para organizar seus contatos?',
    options: [
      { label: 'Não uso nada, tudo de cabeça ou no WhatsApp', level: 'iniciante', value: 'nada' },
      { label: 'Planilha simples (Excel/Google Sheets)', level: 'iniciante', value: 'planilha' },
      { label: 'CRM básico gratuito', level: 'intermediario', value: 'crm_basico' },
      { label: 'CRM profissional com automações', level: 'avancado', value: 'crm_profissional' },
      { label: 'Sistema completo integrado', level: 'avancado', value: 'sistema_completo' },
    ],
    article: {
      title: 'Por Que 90% dos Networkers Perdem Oportunidades por Má Gestão de Contatos',
      content: `Imagine o seguinte cenário: você conversa com 100 pessoas por mês sobre seu negócio. Dessas, 70 dizem "agora não" e 20 ficam de pensar. Se você não tem um sistema para acompanhar esses contatos, está literalmente jogando dinheiro fora.

A maioria dos networkers trata o "não" como definitivo, quando na verdade significa "não agora". Pesquisas mostram que 80% das vendas acontecem após o 5º contato de follow-up. Mas como fazer esse acompanhamento com centenas de pessoas simultaneamente?

A resposta é CRM (Customer Relationship Management) — um sistema para gerenciar seus relacionamentos comerciais. No mínimo, você precisa registrar: nome, contato, data da última interação, status (frio/morno/quente) e próxima ação.

Para iniciantes, uma planilha organizada já resolve. O importante é o HÁBITO de registrar e revisar. Todo dia, olhe sua lista e identifique: quem preciso contatar hoje? Quem está esfriando? Quem merece atenção especial?

Conforme você cresce, ferramentas como HubSpot (gratuito), Pipedrive ou ActiveCampaign automatizam lembretes, e-mails e segmentações.

O melhor vendedor não é o mais carismático — é o mais organizado. Enquanto outros esquecem leads, você aparece no momento certo com a mensagem certa.`,
    },
    recommendations: {
      general: { type: 'book', title: 'The Ultimate Sales Machine', author: 'Chet Holmes', link: 'https://amzn.to/ultimate-sales-machine' },
    },
    faq: [
      { question: 'Qual CRM é ideal para quem trabalha sozinho?', answer: 'HubSpot Free, Notion ou até Trello funcionam bem para iniciantes. O importante é começar com algo simples e evoluir conforme necessidade.' },
      { question: 'Preciso pagar por um CRM?', answer: 'Não necessariamente. Versões gratuitas atendem bem até você ter uma equipe maior. Invista em ferramenta paga quando sentir as limitações.' },
      { question: 'Com que frequência devo fazer follow-up?', answer: 'Depende do interesse demonstrado. Leads quentes: 24-48h. Mornos: semanalmente. Frios: mensalmente. Sempre com valor, nunca pressão.' },
    ],
  },
  {
    slug: 'automacao-de-vendas',
    title: 'Automação de Vendas no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda a automatizar seu MMN e responder 100 leads sem digitar nada, mantendo o toque humano.',
    question: 'Já automatizou mensagens de follow-up?',
    options: [
      { label: 'Não, faço tudo manualmente', level: 'iniciante', value: 'manual' },
      { label: 'Uso mensagens prontas que copio/colo', level: 'iniciante', value: 'mensagens_prontas' },
      { label: 'Tenho algumas automações básicas', level: 'intermediario', value: 'automacoes_basicas' },
      { label: 'Sistema de automação completo', level: 'avancado', value: 'sistema_completo' },
      { label: 'IA integrada para personalização', level: 'avancado', value: 'ia_integrada' },
    ],
    article: {
      title: 'Automatize Seu MMN: Como Responder 100 Leads Sem Digitar Nada',
      content: `Tempo é o recurso mais escasso no MMN. Enquanto você digita a mesma mensagem pela centésima vez, seus concorrentes estão usando automação para escalar conversas.

Automação não significa ser robótico. Significa usar tecnologia para executar tarefas repetitivas enquanto você foca no que realmente importa: conexão humana em momentos-chave.

O primeiro nível de automação é o TEMPLATE. Crie mensagens padrão para cada situação: boas-vindas, follow-up 24h, follow-up 7 dias, objeções comuns. Salve no bloco de notas e personalize apenas nome e contexto.

O segundo nível são as RESPOSTAS RÁPIDAS do WhatsApp Business. Configure atalhos para mensagens frequentes. Digite "/apresentação" e o texto completo aparece.

O terceiro nível são os CHATBOTS. Ferramentas como ManyChat ou Botconversa respondem automaticamente no Instagram e WhatsApp, qualificam leads e só passam para você os realmente interessados.

O quarto nível é EMAIL MARKETING automatizado. Sequências de e-mails nutrem leads por dias ou semanas, entregando valor e preparando para a conversa de fechamento.

O segredo é automatizar o início e o meio, mas humanizar o fechamento. Ninguém compra de um robô — mas robôs podem levar as pessoas até você.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Automação com WhatsApp + IA para MMN', link: 'https://universidademultinivel.com/cursos/automacao-whatsapp' },
    },
    faq: [
      { question: 'Automatizar é frio? Como manter o toque humano?', answer: 'A chave é personalização. Use o nome da pessoa, mencione detalhes da conversa anterior e sempre ofereça opção de falar com você diretamente.' },
      { question: 'Quanto custa automatizar meu MMN?', answer: 'Desde R$0 (templates manuais) até R$500+/mês (ferramentas avançadas). Comece simples e evolua conforme o volume aumentar.' },
      { question: 'Automação funciona para recrutamento?', answer: 'Sim, especialmente para qualificação inicial. Mas a conversa de fechamento deve sempre ser pessoal.' },
    ],
  },
  {
    slug: 'uso-de-ia-no-mmn',
    title: 'Uso de IA no Marketing Multinível | Quiz Universidade Multinível',
    metaDescription: 'Descubra como usar Inteligência Artificial para criar posts, scripts e respostas em segundos e escalar seu negócio de MMN.',
    question: 'Usa Inteligência Artificial no dia a dia?',
    options: [
      { label: 'Não sei usar e tenho receio', level: 'iniciante', value: 'nao_usa' },
      { label: 'Uso ChatGPT ocasionalmente', level: 'iniciante', value: 'chatgpt_ocasional' },
      { label: 'Uso IA para criar conteúdo regularmente', level: 'intermediario', value: 'conteudo_regular' },
      { label: 'IA integrada em vários processos', level: 'avancado', value: 'varios_processos' },
      { label: 'Estratégias avançadas com múltiplas IAs', level: 'avancado', value: 'multiplas_ias' },
    ],
    article: {
      title: 'IA no MMN: Como Criar Posts, Scripts e Respostas em Segundos',
      content: `A Inteligência Artificial chegou para democratizar capacidades que antes só grandes empresas tinham. Hoje, um networker individual pode produzir conteúdo, responder objeções e criar estratégias com qualidade de agência — usando ferramentas como ChatGPT, Claude ou Gemini.

Para CRIAÇÃO DE CONTEÚDO, a IA é revolucionária. Peça: "Crie 10 ideias de posts sobre [tema] para Instagram, estilo [seu estilo], focando em [seu público]". Em segundos, você tem uma semana de conteúdo.

Para SCRIPTS DE VENDAS, a IA ajuda a estruturar conversas. "Crie um script de 3 minutos para apresentar [produto] para [persona], abordando [dor específica]". Depois, adapte ao seu jeito de falar.

Para RESPONDER OBJEÇÕES, treine a IA com as dúvidas mais comuns. "Como responder quando alguém diz 'não tenho dinheiro para começar'?". Você recebe argumentos que talvez não tivesse pensado.

Para ANÁLISE DE DADOS, copie seus números e peça insights. "O que esses dados de conversão indicam? O que devo melhorar?"

Mas CUIDADO: IA é ferramenta, não substituta. O conteúdo precisa da sua voz. As conversas precisam do seu calor. Use IA para acelerar, não para substituir sua essência.

Networkers que dominam IA hoje terão vantagem competitiva brutal nos próximos anos.`,
    },
    recommendations: {
      general: { type: 'book', title: 'AI for Business', author: 'Bernard Marr', link: 'https://amzn.to/ai-for-business' },
    },
    faq: [
      { question: 'IA pode substituir o networker?', answer: 'Não. IA acelera tarefas operacionais, mas o relacionamento humano continua insubstituível. O networker do futuro combina ambos.' },
      { question: 'Preciso pagar por ChatGPT Plus?', answer: 'A versão gratuita já é poderosa para começar. O Plus (US$20/mês) oferece respostas mais longas e acesso prioritário.' },
      { question: 'Como usar IA sem parecer genérico?', answer: 'Sempre edite o output da IA. Adicione suas histórias, seu vocabulário e seus exemplos. A IA dá a estrutura, você dá a alma.' },
    ],
  },
  {
    slug: 'habilidades-de-persuasao',
    title: 'Habilidades de Persuasão no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda as 5 frases que convertem 3x mais no Marketing Multinível e desenvolva suas habilidades de copywriting.',
    question: 'Sabe escrever copy persuasiva?',
    options: [
      { label: 'Não sei o que é copy', level: 'iniciante', value: 'nao_sabe' },
      { label: 'Entendo o conceito mas não pratico', level: 'iniciante', value: 'entende_nao_pratica' },
      { label: 'Uso algumas técnicas básicas', level: 'intermediario', value: 'tecnicas_basicas' },
      { label: 'Escrevo copy que converte bem', level: 'avancado', value: 'converte_bem' },
      { label: 'Domino copywriting avançado', level: 'avancado', value: 'copywriting_avancado' },
    ],
    article: {
      title: 'As 5 Frases que Convertem 3x Mais no MMN (e Como Usá-las)',
      content: `Copywriting é a arte de escrever para persuadir. No MMN, cada mensagem, post ou apresentação é uma oportunidade de convencer — ou de perder — um prospect. Aqui estão 5 estruturas de frases que multiplicam suas conversões:

**1. "E se você pudesse [benefício desejado] sem [objeção comum]?"**
Exemplo: "E se você pudesse ganhar R$5.000 extras por mês sem largar seu emprego?"

**2. "A maioria das pessoas [faz X]. Os que têm sucesso [fazem Y]."**
Exemplo: "A maioria das pessoas posta ofertas. Os que constroem redes postam histórias."

**3. "[Número] [tipo de pessoa] já [resultado]. Você é o próximo?"**
Exemplo: "347 mães já conquistaram flexibilidade com nosso método. Você é a próxima?"

**4. "Eu costumava [problema]. Até que descobri [solução]. Hoje, [resultado]."**
Exemplo: "Eu costumava depender do salário. Até que descobri o MMN. Hoje, trabalho de casa e viajo 4x ao ano."

**5. "Imagine [cenário desejado]. Isso é possível quando você [ação]."**
Exemplo: "Imagine acordar sem despertador e ainda assim pagar suas contas. Isso é possível quando você constrói renda residual."

Essas estruturas funcionam porque ativam emoções antes da lógica. Pessoas compram com emoção e justificam com razão. Sua copy deve seguir essa ordem.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Copywriting para Vendas Diretas', link: 'https://universidademultinivel.com/cursos/copywriting' },
    },
    faq: [
      { question: 'Preciso ser bom de texto para ter sucesso?', answer: 'Não precisa ser escritor, mas precisa aprender o básico. Copywriting é habilidade treinável — qualquer um pode melhorar.' },
      { question: 'Posso copiar copy de outros?', answer: 'Inspirar-se é ok, copiar literal é antiético e ineficaz. Adapte estruturas ao seu contexto e voz.' },
      { question: 'Copy funciona em vídeo?', answer: 'Com certeza! Os mesmos princípios se aplicam a roteiros de vídeo, lives e apresentações.' },
    ],
  },
  {
    slug: 'funil-de-vendas-mmn',
    title: 'Funil de Vendas no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda a criar um funil de MMN completo, da primeira mensagem à fidelização do distribuidor.',
    question: 'Tem um funil de vendas definido?',
    options: [
      { label: 'Não sei o que é funil', level: 'iniciante', value: 'nao_sabe' },
      { label: 'Entendo mas não tenho um estruturado', level: 'iniciante', value: 'entende_sem_estrutura' },
      { label: 'Tenho um funil básico funcionando', level: 'intermediario', value: 'funil_basico' },
      { label: 'Funil otimizado com métricas claras', level: 'avancado', value: 'funil_otimizado' },
      { label: 'Múltiplos funis para diferentes objetivos', level: 'avancado', value: 'multiplos_funis' },
    ],
    article: {
      title: 'Funil de MMN: Da Primeira Mensagem à Fidelização do Distribuidor',
      content: `Um funil de vendas é a jornada que um desconhecido percorre até se tornar cliente ou membro da sua equipe. Sem funil definido, você depende de sorte. Com funil, você tem previsibilidade.

**TOPO DO FUNIL: Atração**
Aqui entram pessoas que ainda não te conhecem. Conteúdo em redes sociais, anúncios, indicações — tudo que gera visibilidade. O objetivo é capturar atenção e coletar contato (e-mail ou WhatsApp).

**MEIO DO FUNIL: Nutrição**
O lead te conhece, mas ainda não confia. Entregue valor gratuito: e-books, vídeos educativos, webinars. Mostre resultados de outros. Responda objeções antes que perguntem. O objetivo é construir autoridade e relacionamento.

**FUNDO DO FUNIL: Conversão**
O lead está aquecido. Faça a oferta: convide para uma chamada, apresente o plano de negócios, mostre números reais. Seja direto mas não pressione. O objetivo é a decisão.

**PÓS-FUNIL: Fidelização**
Cliente/membro fechado não é o fim — é o começo. Onboarding estruturado, suporte constante, celebração de vitórias. O objetivo é retenção e indicações.

Mapeie seu funil atual. Onde você perde mais pessoas? Esse é seu gargalo. Concentre energia ali primeiro.`,
    },
    recommendations: {
      general: { type: 'book', title: 'Expert Secrets', author: 'Russell Brunson', link: 'https://amzn.to/expert-secrets' },
    },
    faq: [
      { question: 'Funil funciona para recrutamento também?', answer: 'Absolutamente! O mesmo conceito se aplica: atrair interessados em oportunidade, nutrir com visão e resultados, converter em chamada de cadastro.' },
      { question: 'Preciso de ferramenta cara para criar funil?', answer: 'Não. Um funil básico funciona com WhatsApp + e-mail gratuito. Ferramentas como Leadlovers ou Hotmart ajudam, mas não são obrigatórias.' },
      { question: 'Quanto tempo leva para um funil funcionar?', answer: 'Depende do seu tráfego. Com 10 leads/dia, você terá dados para otimizar em 2-4 semanas.' },
    ],
  },
  {
    slug: 'uso-de-video-no-mmn',
    title: 'Uso de Vídeo no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda como gravar vídeos com celular e impactar sua audiência no Marketing Multinível.',
    question: 'Grava vídeos para suas redes?',
    options: [
      { label: 'Nunca gravei e tenho vergonha', level: 'iniciante', value: 'nunca_gravou' },
      { label: 'Gravo raramente e não fico satisfeito', level: 'iniciante', value: 'raramente' },
      { label: 'Gravo regularmente stories e reels', level: 'intermediario', value: 'stories_reels' },
      { label: 'Conteúdo em vídeo é minha principal estratégia', level: 'avancado', value: 'principal_estrategia' },
      { label: 'Produzo vídeos profissionais com edição', level: 'avancado', value: 'videos_profissionais' },
    ],
    article: {
      title: 'Vídeo é o Novo Cartão de Visitas: Como Gravar com Celular e Impactar',
      content: `Se você ainda não grava vídeos, está perdendo a maior oportunidade de conexão do marketing moderno. Vídeo transmite personalidade, gera confiança e tem alcance orgânico muito maior que texto ou imagem.

A boa notícia: você NÃO precisa de equipamento profissional. Seu celular, luz natural e um fundo limpo são suficientes para começar.

**SUPERE A VERGONHA**
Todo mundo se acha estranho em vídeo no começo. Isso passa com prática. Grave 30 vídeos antes de julgar. O 31º será muito melhor que o 1º.

**ESTRUTURA SIMPLES DE 60 SEGUNDOS**
- Gancho (5s): Frase que prende atenção. "Você sabia que..."
- Conteúdo (45s): Uma dica, história ou insight. Seja específico.
- CTA (10s): O que você quer que a pessoa faça? Seguir, comentar, clicar.

**DICAS TÉCNICAS BÁSICAS**
- Luz de frente (janela ou ring light)
- Celular na altura dos olhos
- Olhe para a câmera, não para a tela
- Fale 20% mais devagar do que parece natural
- Edite pausas longas e erros

**FORMATOS QUE FUNCIONAM NO MMN**
- "Um dia na minha vida como networker"
- "3 erros que cometi no início"
- "Por que eu escolhi [empresa]"
- "Respondendo dúvidas de vocês"

Comece com 1 vídeo por semana. Em 3 meses, você terá biblioteca de conteúdo e confiança para lives.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Conteúdo em Vídeo para Líderes de Rede', link: 'https://universidademultinivel.com/cursos/video-mmn' },
    },
    faq: [
      { question: 'Tenho vergonha de aparecer. O que fazer?', answer: 'Comece com stories que somem em 24h. Menos pressão. Ou grave vídeos sem mostrar rosto (apenas voz + slides).' },
      { question: 'Quanto tempo de vídeo é ideal?', answer: 'Para Reels/TikTok: 15-60 segundos. Para YouTube: 8-15 minutos. Stories: até 60 segundos cada.' },
      { question: 'Preciso de edição profissional?', answer: 'Não para começar. CapCut (grátis) resolve 90% das necessidades. Autenticidade vale mais que produção.' },
    ],
  },
  {
    slug: 'analise-de-dados-mmn',
    title: 'Análise de Dados no MMN | Quiz Universidade Multinível',
    metaDescription: 'Descubra os 3 números que todo líder de MMN deve acompanhar diariamente para crescer com consistência.',
    question: 'Analisa métricas (leads, conversões, retenção)?',
    options: [
      { label: 'Não acompanho nenhum número', level: 'iniciante', value: 'nao_acompanha' },
      { label: 'Olho números básicos esporadicamente', level: 'iniciante', value: 'basicos_esporadicamente' },
      { label: 'Acompanho métricas-chave semanalmente', level: 'intermediario', value: 'metricas_semanais' },
      { label: 'Dashboard com KPIs claros', level: 'avancado', value: 'dashboard_kpis' },
      { label: 'Decisões 100% baseadas em dados', level: 'avancado', value: 'data_driven' },
    ],
    article: {
      title: 'Os 3 Números que Todo Líder de MMN Deve Acompanhar Diariamente',
      content: `"O que não é medido não é gerenciado." Essa frase de Peter Drucker é especialmente verdadeira no MMN. Muitos networkers trabalham no escuro, sem saber se estão progredindo ou regredindo.

Você não precisa de planilhas complexas. Foque em TRÊS métricas fundamentais:

**1. TAXA DE CONTATO**
Quantas pessoas novas você abordou hoje? Não leads passivos — contatos ativos iniciados por você. Se esse número é zero, seu negócio está morrendo. Meta mínima: 5 contatos/dia.

**2. TAXA DE CONVERSÃO**
De cada 10 pessoas que você apresenta, quantas viram clientes ou distribuidores? Se é 1/10 (10%), você está na média. Acima de 2/10 (20%), você está excelente. Abaixo de 5%, revise sua abordagem.

**3. TAXA DE RETENÇÃO**
Dos clientes e distribuidores que entraram há 6 meses, quantos ainda estão ativos? Retenção abaixo de 50% indica problemas no pós-venda ou onboarding.

**COMO ACOMPANHAR**
Uma planilha simples ou bloco de notas basta:
- Data | Contatos | Apresentações | Fechamentos | Observações

Revise semanalmente. Identifique padrões. Onde você está forte? Onde está fraco? Direcione energia para o gargalo.

Números não mentem. E networkers que entendem seus números crescem 3-5x mais rápido que os que "vão no feeling".`,
    },
    recommendations: {
      general: { type: 'book', title: 'Measure What Matters', author: 'John Doerr', link: 'https://amzn.to/measure-what-matters' },
    },
    faq: [
      { question: 'Preciso ser bom em planilha?', answer: 'Não. Um caderno ou app de notas resolve. O importante é o hábito de registrar, não a ferramenta.' },
      { question: 'Quais métricas secundárias importam?', answer: 'Ticket médio, tempo de ciclo de venda, engajamento em redes e NPS (satisfação de clientes/equipe).' },
      { question: 'Com que frequência devo revisar números?', answer: 'Registre diariamente, revise semanalmente, analise tendências mensalmente.' },
    ],
  },
  {
    slug: 'educacao-continuada-mmn',
    title: 'Educação Continuada no MMN | Quiz Universidade Multinível',
    metaDescription: 'Descubra por que os top 1% do MMN investem 10h por mês em aprendizado e como acelerar seu crescimento.',
    question: 'Participa de treinamentos constantemente?',
    options: [
      { label: 'Não invisto em educação', level: 'iniciante', value: 'nao_investe' },
      { label: 'Consumo conteúdo gratuito às vezes', level: 'iniciante', value: 'conteudo_gratuito' },
      { label: 'Participo de eventos da empresa regularmente', level: 'intermediario', value: 'eventos_empresa' },
      { label: 'Invisto em cursos e mentorias externas', level: 'avancado', value: 'cursos_mentorias' },
      { label: 'Educação é prioridade, estudo diariamente', level: 'avancado', value: 'estudo_diario' },
    ],
    article: {
      title: 'Por Que os Top 1% do MMN Investem 10h/Mês em Aprendizado',
      content: `Existe um padrão curioso entre os maiores líderes de MMN: quanto mais sucesso, mais estudam. Parece contraditório — se já chegaram lá, por que continuar aprendendo?

A resposta está na mentalidade de crescimento. Líderes top 1% entendem que o mercado muda, novas técnicas surgem e a concorrência evolui. Parar de aprender é começar a ficar para trás.

**ONDE OS MELHORES INVESTEM TEMPO:**
- Livros: mínimo 1-2 por mês sobre vendas, liderança, mindset ou marketing digital
- Podcasts: durante trânsito ou exercícios, absorvem horas de conteúdo por semana
- Eventos: presenciais sempre que possível (conexões + imersão)
- Mentorias: aprender com quem já chegou onde você quer encurta anos do caminho
- Cursos online: habilidades técnicas específicas (tráfego, copy, vídeo)

**COMO IMPLEMENTAR COM ROTINA OCUPADA:**
- 20 minutos de leitura antes de dormir = 1 livro/mês
- Podcast no carro = 5-10h/mês de conteúdo
- 1 evento por trimestre = networking + atualização
- 1h/semana de curso online = nova habilidade em 2-3 meses

**O RETORNO É EXPONENCIAL**
Um insight de R$50 em um livro pode gerar R$50.000 em negócios. Uma conexão em evento pode virar seu maior parceiro. Educação é o investimento de maior ROI que existe.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Universidade Multinível: Módulo Avançado', link: 'https://universidademultinivel.com/cursos/modulo-avancado' },
    },
    faq: [
      { question: 'Quais são os melhores eventos de MMN no Brasil?', answer: 'Eventos das próprias empresas são fundamentais. Além disso, feiras como ABEVD e congressos de vendas diretas reúnem líderes de várias empresas.' },
      { question: 'Vale a pena pagar por mentoria?', answer: 'Se o mentor tem resultados comprovados e metodologia clara, sim. Um bom mentor economiza anos de tentativa e erro.' },
      { question: 'Por onde começar se nunca estudei sobre MMN?', answer: 'Go Pro (Eric Worre) e O Negócio do Século XXI (Robert Kiyosaki) são excelentes pontos de partida.' },
    ],
  },
  {
    slug: 'lideranca-de-equipe',
    title: 'Liderança de Equipe no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda como liderar sua equipe de MMN sem microgerenciar e desenvolva líderes multiplicadores.',
    question: 'Tem uma equipe ativa?',
    options: [
      { label: 'Ainda não tenho equipe', level: 'iniciante', value: 'sem_equipe' },
      { label: 'Tenho 1-5 pessoas mas pouco ativas', level: 'iniciante', value: 'pequena_inativa' },
      { label: 'Equipe de 6-20 com atividade regular', level: 'intermediario', value: 'media_ativa' },
      { label: 'Equipe 20+ com sublíderes', level: 'avancado', value: 'grande_sublideres' },
      { label: 'Organização multinível com múltiplas gerações', level: 'avancado', value: 'organizacao_multinivel' },
    ],
    article: {
      title: 'Liderança no MMN: Como Engajar Sem Microgerenciar',
      content: `A transição de "fazedor" para "líder" é o maior desafio no MMN. Muitos excelentes vendedores fracassam como líderes porque tentam controlar tudo — e acabam sufocando a equipe.

**O PARADOXO DA LIDERANÇA NO MMN**
Você não pode obrigar ninguém a trabalhar. Distribuidores são independentes. Seu papel é INSPIRAR e CAPACITAR, não COBRAR.

**5 PILARES DA LIDERANÇA EFETIVA:**

1. **Exemplo Antes de Palavra**
Faça o que prega. Se você espera 5 contatos/dia da equipe, faça 10. Liderança é demonstração, não discurso.

2. **Sistemas Duplicáveis**
Crie processos que qualquer um consiga seguir. Checklists de atividades diárias, scripts de abordagem, roteiros de treinamento. Quanto mais simples, mais replicável.

3. **Reconhecimento Público**
Celebre vitórias pequenas e grandes. Mencione nomes em grupos, crie rankings, dê certificados. Reconhecimento custa zero e vale ouro.

4. **Disponibilidade Estratégica**
Esteja presente para dúvidas importantes, mas não resolva tudo. Pergunte "o que VOCÊ faria?" antes de dar a resposta. Desenvolva autonomia.

5. **Foco em Líderes, Não em Todos**
A regra 80/20 se aplica: 20% da equipe gera 80% dos resultados. Identifique seus potenciais líderes e invista tempo desproporcional neles.

**O TESTE DO SUMIÇO**
Se você desaparecesse por 30 dias, sua equipe continuaria produzindo? Se não, você tem um emprego, não um negócio.`,
    },
    recommendations: {
      general: { type: 'book', title: 'Leaders Eat Last', author: 'Simon Sinek', link: 'https://amzn.to/leaders-eat-last' },
    },
    faq: [
      { question: 'Como motivar uma equipe desanimada?', answer: 'Descubra o "porquê" individual de cada um. Reconheça pequenas vitórias. Mude o ambiente com desafios e metas de curto prazo.' },
      { question: 'Devo ajudar membros que não produzem?', answer: 'Ofereça suporte igual para todos, mas tempo desproporcional para os que agem. Você não pode querer mais que a própria pessoa.' },
      { question: 'Como formar novos líderes?', answer: 'Delegue responsabilidades gradualmente. Deixe errar. Dê feedback construtivo. Celebre quando acertarem sozinhos.' },
    ],
  },
  {
    slug: 'ferramentas-de-comunicacao',
    title: 'Ferramentas de Comunicação no MMN | Quiz Universidade Multinível',
    metaDescription: 'Do WhatsApp bagunçado ao sistema profissional: aprenda a usar ferramentas de comunicação para escalar seu MMN.',
    question: 'Usa WhatsApp Business ou CRM?',
    options: [
      { label: 'WhatsApp pessoal para tudo', level: 'iniciante', value: 'whatsapp_pessoal' },
      { label: 'WhatsApp Business sem organização', level: 'iniciante', value: 'whatsapp_business_desorganizado' },
      { label: 'WhatsApp Business com etiquetas e catálogo', level: 'intermediario', value: 'whatsapp_organizado' },
      { label: 'CRM integrado com WhatsApp', level: 'avancado', value: 'crm_whatsapp' },
      { label: 'Stack completo de ferramentas', level: 'avancado', value: 'stack_completo' },
    ],
    article: {
      title: 'Do WhatsApp Bagunçado ao Sistema Profissional de Atendimento',
      content: `Se você usa o mesmo WhatsApp para família, amigos e negócios, está criando caos que custa dinheiro. Mensagens importantes se perdem, prospects esperam dias por resposta e você nunca sabe quem é lead e quem é tio.

**PASSO 1: SEPARE OS CANAIS**
Tenha um número exclusivo para negócios. WhatsApp Business permite usar dois números no mesmo celular (ou use um chip extra).

**PASSO 2: CONFIGURE O BÁSICO**
- Foto de perfil profissional (você, não logo)
- Descrição clara do que você faz
- Horário de atendimento definido
- Mensagem de ausência automática
- Catálogo de produtos/oportunidade

**PASSO 3: ORGANIZE COM ETIQUETAS**
Crie etiquetas por status:
- 🔵 Novo Lead
- 🟡 Em Conversa
- 🟢 Cliente Ativo
- 🟣 Distribuidor
- 🔴 Não Interessado

Isso permite filtrar e priorizar atendimentos.

**PASSO 4: RESPOSTAS RÁPIDAS**
Configure atalhos para mensagens frequentes:
- /ola → Mensagem de boas-vindas
- /catalogo → Link do catálogo
- /reuniao → Convite para apresentação

**PASSO 5: EVOLUA PARA CRM**
Quando o volume crescer, ferramentas como Kommo, Pipefy ou HubSpot conectam WhatsApp, e-mail e redes sociais em um lugar só. Você vê o histórico completo de cada contato.

Profissionalismo no atendimento diferencia você de 95% dos networkers.`,
    },
    recommendations: {
      general: { type: 'course', title: 'CRM Prático para Microempreendedores', link: 'https://universidademultinivel.com/cursos/crm-pratico' },
    },
    faq: [
      { question: 'CRM é caro? Existe opção gratuita?', answer: 'HubSpot, Notion e Trello têm versões gratuitas que funcionam bem para iniciantes. Pague quando precisar de automações avançadas.' },
      { question: 'Posso usar WhatsApp API?', answer: 'Sim, mas exige investimento. Para início, WhatsApp Business gratuito resolve 90% das necessidades.' },
      { question: 'Como não parecer robótico usando templates?', answer: 'Personalize sempre: use o nome da pessoa e mencione algo específico da conversa anterior.' },
    ],
  },
  {
    slug: 'lead-magnet-mmn',
    title: 'Lead Magnet no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda a transformar seu conhecimento em um imã de leads e atrair prospects qualificados para seu negócio de MMN.',
    question: 'Já criou um lead magnet (e-book, checklist, webinar)?',
    options: [
      { label: 'Não sei o que é lead magnet', level: 'iniciante', value: 'nao_sabe' },
      { label: 'Sei o que é mas nunca criei', level: 'iniciante', value: 'nunca_criou' },
      { label: 'Tenho um lead magnet simples', level: 'intermediario', value: 'lead_magnet_simples' },
      { label: 'Múltiplos lead magnets convertendo', level: 'avancado', value: 'multiplos_lead_magnets' },
      { label: 'Funil completo com sequência de iscas', level: 'avancado', value: 'funil_iscas' },
    ],
    article: {
      title: 'Como Transformar Seu Conhecimento em um Imã de Leads',
      content: `Lead magnet é algo de valor que você oferece gratuitamente em troca do contato (e-mail ou WhatsApp) de um potencial cliente. É a forma mais eficiente de construir uma lista de pessoas interessadas no que você oferece.

**POR QUE FUNCIONA:**
Ninguém dá seu contato para receber propaganda. Mas todos querem resolver problemas. Um bom lead magnet promete resolver uma dor específica — e entrega.

**TIPOS DE LEAD MAGNETS QUE FUNCIONAM NO MMN:**

1. **E-book/Guia PDF**
"5 Passos para Sua Primeira Renda Extra de R$1.000"
Fácil de criar no Canva. 10-20 páginas bastam.

2. **Checklist**
"Checklist: 10 Sinais de Uma Empresa de MMN Séria"
Mais simples que e-book, alta percepção de valor.

3. **Vídeo Aula**
"Aula: Como Abordar Pessoas Sem Parecer Vendedor"
Grava uma vez, distribui infinitamente.

4. **Webinar/Live**
"Workshop: Meu Método para 10 Clientes em 30 Dias"
Ao vivo cria urgência. Gravado funciona como evergreen.

5. **Teste/Quiz**
"Descubra Seu Perfil de Networker"
Alto engajamento e dados para personalização.

**COMO CRIAR SEU PRIMEIRO:**
1. Liste as 5 perguntas que mais recebe
2. Responda cada uma em 1-2 páginas
3. Junte em um PDF com design básico (Canva)
4. Crie uma landing page simples
5. Divulgue em bio e posts

Seu conhecimento vale dinheiro. Empacote e distribua.`,
    },
    recommendations: {
      general: { type: 'book', title: 'Building a StoryBrand', author: 'Donald Miller', link: 'https://amzn.to/building-storybrand' },
    },
    faq: [
      { question: 'Preciso de designer para criar um lead magnet?', answer: 'Não. Canva oferece templates profissionais gratuitos. Conteúdo bom > design perfeito.' },
      { question: 'Qual formato converte mais?', answer: 'Depende do público. Teste diferentes formatos. Checklists e quizzes tendem a ter alta conversão por serem rápidos.' },
      { question: 'Posso cobrar pelo lead magnet?', answer: 'Pode, mas perde volume. O objetivo é capturar contatos, não lucrar diretamente. A venda vem depois.' },
    ],
  },
  {
    slug: 'segmentacao-de-audiencia',
    title: 'Segmentação de Audiência no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda a identificar e segmentar seu público ideal para vender mais no Marketing Multinível.',
    question: 'Sabe segmentar sua audiência?',
    options: [
      { label: 'Falo com todo mundo igual', level: 'iniciante', value: 'todo_mundo' },
      { label: 'Tenho uma ideia vaga do meu público', level: 'iniciante', value: 'ideia_vaga' },
      { label: 'Defini personas mas não aplico bem', level: 'intermediario', value: 'personas_nao_aplica' },
      { label: 'Segmento comunicação por perfil', level: 'avancado', value: 'segmenta_perfil' },
      { label: 'Hipersegmentação com dados e IA', level: 'avancado', value: 'hipersegmentacao' },
    ],
    article: {
      title: 'Não Fale com "Todo Mundo": Como Segmentar para Vender Mais no MMN',
      content: `O erro mais comum no MMN é tentar agradar a todos. "Meu produto é para qualquer pessoa!" Resultado: mensagem genérica que não conecta com ninguém.

**A MATEMÁTICA DA SEGMENTAÇÃO:**
Falar com "todo mundo" = 1% de conversão
Falar com público específico = 5-10% de conversão

Ou seja: menos alcance, porém muito mais resultado.

**COMO IDENTIFICAR SEU PÚBLICO IDEAL:**

1. **Olhe Para Seus Melhores Clientes**
Quem mais compra? Quem mais indica? Que características eles têm em comum? Idade, profissão, dores, sonhos?

2. **Crie Personas Detalhadas**
Não basta "mulheres 25-45". Seja específico:
"Marina, 32 anos, mãe de 2, trabalha CLT mas quer mais tempo com os filhos. Busca renda extra flexível. Usa muito Instagram. Preocupada com saúde."

3. **Adapte Sua Comunicação**
Para Marina: "Cansada de perder as apresentações escolares por causa do trabalho?"
Para João, executivo: "Quer diversificar renda sem largar a carreira?"

Mesma oportunidade, abordagens completamente diferentes.

**SEGMENTAÇÃO EM TRÁFEGO PAGO:**
Facebook e Instagram permitem segmentar por interesses, comportamentos, lookalike de clientes existentes. Quanto mais específico, menor o custo por lead qualificado.

**SEGMENTAÇÃO EM E-MAIL:**
Divida sua lista: iniciantes recebem conteúdo básico, avançados recebem táticas. Relevância aumenta abertura e conversão.

Falar menos com mais profundidade vence falar mais superficialmente.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Segmentação Avançada no Meta Ads', link: 'https://universidademultinivel.com/cursos/segmentacao-meta' },
    },
    faq: [
      { question: 'Como identificar meu público ideal?', answer: 'Analise seus melhores clientes atuais. O que têm em comum? Idade, profissão, problemas, desejos? Esse é seu avatar.' },
      { question: 'Posso ter mais de um público?', answer: 'Sim, mas crie comunicações diferentes para cada um. Não misture na mesma mensagem.' },
      { question: 'Segmentação funciona para recrutamento?', answer: 'Absolutamente. Recrutar mães é diferente de recrutar universitários. Adapte sua abordagem.' },
    ],
  },
  {
    slug: 'chatbots-no-mmn',
    title: 'Chatbots no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda a usar chatbots 24h para nunca mais perder um lead por demora na resposta.',
    question: 'Usa chatbots para pré-qualificar leads?',
    options: [
      { label: 'Não sei o que é chatbot', level: 'iniciante', value: 'nao_sabe' },
      { label: 'Sei mas nunca implementei', level: 'iniciante', value: 'nunca_implementou' },
      { label: 'Uso chatbot básico para FAQ', level: 'intermediario', value: 'chatbot_basico' },
      { label: 'Chatbot qualifica e agenda automaticamente', level: 'avancado', value: 'chatbot_qualifica' },
      { label: 'Sistema de bots integrado com IA', level: 'avancado', value: 'bots_ia' },
    ],
    article: {
      title: 'Chatbots 24h: Como Nunca Mais Perder um Lead por Demora na Resposta',
      content: `Estudos mostram que responder um lead nos primeiros 5 minutos aumenta em 21x a chance de conversão comparado a 30 minutos depois. Mas você não pode ficar grudado no celular 24 horas. Solução? Chatbots.

**O QUE UM CHATBOT FAZ POR VOCÊ:**
- Responde instantaneamente, qualquer horário
- Coleta informações básicas (nome, interesse, disponibilidade)
- Qualifica leads (separa curiosos de interessados reais)
- Agenda chamadas automaticamente
- Entrega conteúdo inicial (vídeos, PDFs)

**ONDE IMPLEMENTAR:**
- Instagram DM (ManyChat)
- WhatsApp (Botconversa, Kommo)
- Site (Tidio, Drift)
- Facebook Messenger (ManyChat, Chatfuel)

**ESTRUTURA BÁSICA DE FLUXO:**
1. Boas-vindas + pergunta inicial ("O que te trouxe aqui?")
2. Ramificação por interesse (produto vs oportunidade)
3. Perguntas de qualificação ("Tem experiência com vendas?")
4. Entrega de conteúdo (vídeo de apresentação)
5. Agendamento ou encaminhamento para você

**O SEGREDO: HUMANIZAÇÃO**
Bots frios afastam pessoas. Adicione personalidade:
- Use o nome da pessoa
- Inclua emojis com moderação
- Simule digitação (delay entre mensagens)
- Sempre ofereça opção de falar com humano

Chatbots não substituem você — eles filtram e preparam leads para que seu tempo seja investido nos mais promissores.`,
    },
    recommendations: {
      general: { type: 'book', title: 'The AI-Powered Workplace', author: 'Helen Yu', link: 'https://amzn.to/ai-powered-workplace' },
    },
    faq: [
      { question: 'Chatbot parece robô? Como humanizar?', answer: 'Use linguagem informal, emojis, delays entre mensagens e sempre dê opção de falar com pessoa real.' },
      { question: 'Quanto custa implementar chatbot?', answer: 'ManyChat tem versão gratuita. Ferramentas premium custam R$100-500/mês dependendo do volume.' },
      { question: 'Chatbot funciona para WhatsApp?', answer: 'Sim! Botconversa e Kommo são populares. WhatsApp Business API permite automações avançadas.' },
    ],
  },
  {
    slug: 'planejamento-de-conteudo',
    title: 'Planejamento de Conteúdo no MMN | Quiz Universidade Multinível',
    metaDescription: 'Aprenda a criar um calendário de conteúdo que converte e pare de postar sem estratégia.',
    question: 'Tem um calendário de conteúdo?',
    options: [
      { label: 'Posto quando lembro', level: 'iniciante', value: 'quando_lembra' },
      { label: 'Tento manter frequência mas sem plano', level: 'iniciante', value: 'sem_plano' },
      { label: 'Calendário semanal definido', level: 'intermediario', value: 'calendario_semanal' },
      { label: 'Calendário mensal com pilares de conteúdo', level: 'avancado', value: 'calendario_mensal' },
      { label: 'Sistema de conteúdo com produção em lote', level: 'avancado', value: 'producao_lote' },
    ],
    article: {
      title: 'Postar Todo Dia Não Basta: Como Planejar Conteúdo que Converte',
      content: `Postar diariamente sem estratégia é como remar sem saber para onde. Você gasta energia, mas não chega a lugar nenhum. Um calendário de conteúdo transforma esforço em resultado.

**OS 4 PILARES DE CONTEÚDO PARA MMN:**

1. **EDUCATIVO (40%)**
Ensine algo útil relacionado ao seu produto/nicho.
"3 erros que impedem você de emagrecer"
"Como organizar finanças para renda extra"

2. **INSPIRACIONAL (25%)**
Histórias de transformação, suas e de clientes.
"Há 2 anos eu estava no vermelho. Hoje..."
"Conheça a história da Maria que..."

3. **BASTIDORES (20%)**
Mostre seu dia a dia, humanize sua marca.
"Um dia na minha rotina de networker"
"O que aprendi no evento de hoje"

4. **OFERTA (15%)**
Convites diretos para ação.
"Vagas abertas para mentoria"
"Últimos kits com desconto"

**COMO MONTAR SEU CALENDÁRIO:**
1. Defina quantos posts/semana (3-5 é suficiente)
2. Distribua os pilares proporcionalmente
3. Escolha dias e horários fixos
4. Produza em lote (grave 5 vídeos em 1 dia)
5. Use ferramenta de agendamento (Mlabs, Buffer)

**EXEMPLO DE SEMANA:**
- Segunda: Educativo (post)
- Terça: Bastidores (stories)
- Quarta: Educativo (reels)
- Quinta: Inspiracional (carrossel)
- Sexta: Oferta + Bastidores

Consistência estratégica vence volume aleatório.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Calendário de Conteúdo para MMN', link: 'https://universidademultinivel.com/cursos/calendario-conteudo' },
    },
    faq: [
      { question: 'Quantos posts por semana são ideais?', answer: '3-5 posts de qualidade vencem 21 posts mediocres. Consistência > quantidade.' },
      { question: 'Devo postar nos finais de semana?', answer: 'Depende do seu público. Teste e veja quando tem mais engajamento. Stories podem manter presença sem muito esforço.' },
      { question: 'Como ter ideias de conteúdo?', answer: 'Liste as 20 perguntas que mais recebe. Cada uma vira 3-5 posts (texto, vídeo, carrossel, story, live).' },
    ],
  },
  {
    slug: 'desafios-atuais-mmn',
    title: 'Desafios Atuais no MMN | Quiz Universidade Multinível',
    metaDescription: 'Identifique seu maior obstáculo no MMN e receba recomendações personalizadas para superá-lo.',
    question: 'Qual é seu maior obstáculo hoje?',
    options: [
      { label: 'Medo de rejeição e abordagem', level: 'iniciante', value: 'medo_rejeicao' },
      { label: 'Não consigo gerar leads suficientes', level: 'iniciante', value: 'falta_leads' },
      { label: 'Dificuldade em fechar vendas/recrutar', level: 'intermediario', value: 'dificuldade_fechar' },
      { label: 'Equipe pouco ativa/motivada', level: 'intermediario', value: 'equipe_inativa' },
      { label: 'Escalar sem perder qualidade', level: 'avancado', value: 'escalar' },
    ],
    article: {
      title: 'Os 5 Bloqueios Invisíveis que Travam Seu Crescimento no MMN',
      content: `Todo networker enfrenta obstáculos. A diferença entre os que crescem e os que estagnam está em como lidam com eles. Vamos desmascarar os 5 bloqueios mais comuns — e suas soluções.

**1. MEDO DE REJEIÇÃO**
O bloqueio número 1. A verdade: rejeição não é pessoal. A pessoa está rejeitando a oferta naquele momento, não você. Solução: redefina o "não" como "não agora" e mantenha o relacionamento.

**2. SÍNDROME DO IMPOSTOR**
"Quem sou eu para vender isso?" Você não precisa ser especialista. Precisa estar um passo à frente de quem está ajudando. Solução: foque em servir, não em parecer perfeito.

**3. PROCRASTINAÇÃO DISFARÇADA**
"Preciso estudar mais antes de começar." Conhecimento sem ação é inútil. Solução: ação imperfeita > preparação perfeita. Aprenda fazendo.

**4. COMPARAÇÃO TÓXICA**
"Fulano fechou 10, eu só fechei 2." Cada jornada é única. O líder que você admira também foi iniciante. Solução: compare-se com você de ontem, não com outros de hoje.

**5. FALTA DE SISTEMA**
Depender de motivação é receita para inconsistência. Dias ruins existirão. Solução: crie rotinas inabaláveis. 5 contatos/dia, chuva ou sol, motivado ou não.

**O ANTÍDOTO UNIVERSAL:**
Clareza de propósito. Quando seu "porquê" é forte o suficiente, obstáculos viram detalhes. Por que você está nesse negócio? Dinheiro é consequência — o que você quer com ele?`,
    },
    recommendations: {
      iniciante: { type: 'book', title: 'O Poder do Hábito', author: 'Charles Duhigg', link: 'https://amzn.to/poder-habito' },
      intermediario: { type: 'book', title: 'Atomic Habits', author: 'James Clear', link: 'https://amzn.to/atomic-habits' },
      avancado: { type: 'book', title: 'Sem Limites', author: 'John Maxwell', link: 'https://amzn.to/sem-limites' },
    },
    faq: [
      { question: 'Como superar a rejeição no MMN?', answer: 'Entenda que rejeição é parte do processo. Meta: coletar "nãos" como badges de coragem. Cada não te aproxima do sim.' },
      { question: 'Por que minha equipe está desmotivada?', answer: 'Geralmente falta clareza de metas, reconhecimento ou exemplo. Revise sua liderança antes de culpar a equipe.' },
      { question: 'Como manter consistência em dias difíceis?', answer: 'Crie o hábito de "mínimo não negociável". Mesmo no pior dia, faça 1 contato. Pequenas ações mantêm o momentum.' },
    ],
  },
  {
    slug: 'relatorio-final',
    title: 'Seu Plano de Crescimento 2026 | Quiz Universidade Multinível',
    metaDescription: 'Receba seu relatório personalizado com recomendações de livros, cursos e próximos passos baseados nas suas respostas.',
    question: 'Quer receber seu Plano Personalizado de Crescimento 2026?',
    options: [
      { label: 'Sim, quero receber por e-mail!', value: 'sim_email' },
      { label: 'Prefiro ver o resultado aqui mesmo', value: 'ver_aqui' },
      { label: 'Não, obrigado', value: 'nao' },
    ],
    article: {
      title: 'Seu Caminho para R$10k/mês no MMN: Passo a Passo Baseado nos Seus Dados',
      content: `Parabéns por completar o quiz! Suas respostas revelam um perfil único e um caminho específico para o sucesso no Marketing Multinível.

**O QUE VOCÊ VAI RECEBER:**

📊 **Diagnóstico Completo**
Análise detalhada do seu nível atual em cada dimensão: prospecção, vendas, liderança, marketing digital e mindset.

📚 **Biblioteca Personalizada**
Lista de livros e cursos selecionados especificamente para suas lacunas e objetivos. Nada de recomendações genéricas.

✅ **Plano de Ação 90 Dias**
Cronograma com metas semanais e atividades diárias. Saber o que fazer a cada dia elimina a paralisia por análise.

🎯 **Métricas de Sucesso**
Os números que você deve acompanhar para saber se está no caminho certo. O que medir para não enganar a si mesmo.

🔗 **Kit de Ferramentas**
Links para templates, checklists e recursos gratuitos mencionados durante o quiz.

**PRÓXIMOS PASSOS:**
1. Insira seu e-mail para receber o relatório completo
2. Reserve 30 minutos para ler com atenção
3. Escolha UMA ação para implementar essa semana
4. Volte em 30 dias para refazer o quiz e medir progresso

Lembre-se: conhecimento só vira resultado com ação. O melhor plano do mundo não funciona na gaveta.

Sua jornada para os R$10.000/mês começa agora. E começa com um único passo.`,
    },
    recommendations: {
      general: { type: 'course', title: 'Masterclass: Acelerador de MMN 2026', link: 'https://universidademultinivel.com/masterclass' },
    },
    faq: [
      { question: 'O relatório é gratuito?', answer: 'Sim, 100% gratuito. É nossa forma de agradecer pela participação no quiz e contribuir com sua jornada.' },
      { question: 'Quanto tempo leva para receber?', answer: 'O relatório é enviado instantaneamente após inserir seu e-mail. Verifique a caixa de spam se não encontrar.' },
      { question: 'Posso refazer o quiz depois?', answer: 'Claro! Recomendamos refazer a cada 30-90 dias para medir sua evolução e receber novas recomendações.' },
    ],
  },
];

export function getQuestionBySlug(slug: string): QuizQuestion | undefined {
  return quizQuestions.find(q => q.slug === slug);
}

export function getNextQuestionSlug(currentSlug: string): string | null {
  const currentIndex = quizQuestions.findIndex(q => q.slug === currentSlug);
  if (currentIndex === -1 || currentIndex >= quizQuestions.length - 1) {
    return null;
  }
  return quizQuestions[currentIndex + 1].slug;
}

export function getPreviousQuestionSlug(currentSlug: string): string | null {
  const currentIndex = quizQuestions.findIndex(q => q.slug === currentSlug);
  if (currentIndex <= 0) {
    return null;
  }
  return quizQuestions[currentIndex - 1].slug;
}

export function getQuestionIndex(slug: string): number {
  return quizQuestions.findIndex(q => q.slug === slug);
}

export const totalQuestions = quizQuestions.length;
