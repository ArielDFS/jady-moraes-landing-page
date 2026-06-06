// ─────────────────────────────────────────────────────────────
// DADOS CENTRALIZADOS — Edite aqui para atualizar o site
// ─────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'Jady Moraes',
  title: 'Jady Moraes — Leitura Crítica Literária',
  description:
    'Leitura crítica profissional para autores que desejam aprimorar seus manuscritos. Análise narrativa, desenvolvimento de personagens, ritmo e muito mais.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jadymoraes.com.br',
  email: 'contato@jadymoraes.com.br',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5524999352142',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/jadymoraes',
  whatsappMessage: 'Olá, Jady! Gostaria de saber mais sobre seu serviço de leitura crítica.',
}

// ─────────────────────────────────────────────────────────────
// SERVIÇOS
// ─────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'leitura-critica-completa',
    icon: 'BookOpen',
    tag: 'Mais procurado',
    title: 'Leitura Crítica Completa',
    description:
      'Análise aprofundada do manuscrito inteiro: narrativa, estrutura, ritmo, coerência e experiência do leitor.',
    benefit: 'Visão panorâmica e detalhada da sua obra',
    audience: 'Autores com romance ou novela prontos para revisão editorial',
    highlight: true,
  },
  {
    id: 'parecer-editorial',
    icon: 'FileText',
    tag: 'Para publicação',
    title: 'Parecer Editorial',
    description:
      'Relatório detalhado com parecer técnico sobre o potencial editorial do manuscrito, pontos fortes e áreas de melhoria.',
    benefit: 'Feedback profissional como o mercado editorial usa',
    audience: 'Autores que pretendem enviar o livro a editoras',
    highlight: false,
  },
  {
    id: 'analise-personagens',
    icon: 'Users',
    tag: 'Foco narrativo',
    title: 'Análise de Personagens',
    description:
      'Estudo aprofundado da construção dos personagens: motivações, arcos, consistência e impacto emocional.',
    benefit: 'Personagens mais vivos, coerentes e memoráveis',
    audience: 'Autores que sentem que algo falta nos seus personagens',
    highlight: false,
  },
  {
    id: 'feedback-narrativo',
    icon: 'MessageSquare',
    tag: 'Diagnóstico rápido',
    title: 'Feedback Narrativo',
    description:
      'Análise de trechos ou capítulos específicos com foco em ritmo, voz narrativa e engajamento do leitor.',
    benefit: 'Identifique e resolva problemas pontuais rapidamente',
    audience: 'Autores em fase de escrita ou revisão pontual',
    highlight: false,
  },
]

// ─────────────────────────────────────────────────────────────
// COMO FUNCIONA — 4 PASSOS
// ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: '01',
    icon: 'Send',
    title: 'Você envia o manuscrito',
    description:
      'Compartilhe seu texto em PDF ou Word. Conversamos sobre suas expectativas e escolhemos juntos o serviço ideal.',
  },
  {
    step: '02',
    icon: 'Eye',
    title: 'Leitura detalhada',
    description:
      'Leio o manuscrito com atenção plena, fazendo anotações a cada capítulo, sem pressa e com total sigilo.',
  },
  {
    step: '03',
    icon: 'Search',
    title: 'Análise crítica estruturada',
    description:
      'Elaboro o relatório com observações sobre narrativa, personagens, ritmo, coerência e experiência do leitor.',
  },
  {
    step: '04',
    icon: 'Heart',
    title: 'Devolutiva personalizada',
    description:
      'Entrego o relatório e conversamos sobre os pontos levantados, com espaço para perguntas e esclarecimentos.',
  },
]

// ─────────────────────────────────────────────────────────────
// PORTFÓLIO — MÉTRICAS E PROJETOS
// ─────────────────────────────────────────────────────────────
export const PORTFOLIO_STATS = [
  { value: 80, suffix: '+', label: 'Manuscritos analisados' },
  { value: 12, suffix: '+', label: 'Gêneros literários atendidos' },
  { value: 98, suffix: '%', label: 'Autores satisfeitos' },
  { value: 5, suffix: '+', label: 'Anos de experiência' },
]

export const PORTFOLIO_PROJECTS = [
  {
    genre: 'Romance contemporâneo',
    title: 'A Colecionadora de Ausências',
    pages: 312,
    service: 'Leitura crítica completa',
    highlight: 'Desenvolvimento emocional dos personagens',
  },
  {
    genre: 'Fantasia',
    title: 'O Último Guardião do Tempo',
    pages: 489,
    service: 'Parecer editorial',
    highlight: 'Worldbuilding e consistência narrativa',
  },
  {
    genre: 'Literatura brasileira',
    title: 'Raízes de Cimento',
    pages: 228,
    service: 'Análise de personagens',
    highlight: 'Arcos de transformação e motivação',
  },
  {
    genre: 'Suspense psicológico',
    title: 'O Silêncio das Gavetas',
    pages: 356,
    service: 'Leitura crítica completa',
    highlight: 'Ritmo, tensão e reviravoltas',
  },
  {
    genre: 'Ficção científica',
    title: 'Meridiano Zero',
    pages: 403,
    service: 'Feedback narrativo',
    highlight: 'Voz narrativa e engajamento',
  },
  {
    genre: 'Conto literário',
    title: 'Mulheres que Habitam Beiras',
    pages: 145,
    service: 'Parecer editorial',
    highlight: 'Coesão da coletânea e identidade autoral',
  },
]

// ─────────────────────────────────────────────────────────────
// DEPOIMENTOS
// ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Mariana Souza',
    role: 'Autora de romance contemporâneo',
    avatar: '/images/testimonial-1.jpg',
    rating: 5,
    text: 'A Jady transformou minha relação com o manuscrito. Eu sabia que algo estava faltando, mas não conseguia identificar. O relatório dela foi cirúrgico e, ao mesmo tempo, extremamente acolhedor. Me senti vista como escritora, não julgada.',
    book: 'Entre Marés e Silêncios',
  },
  {
    name: 'Ricardo Alves',
    role: 'Escritor de fantasia',
    avatar: '/images/testimonial-2.jpg',
    rating: 5,
    text: 'Nunca pensei que uma leitura crítica pudesse ser tão humana. Além de identificar inconsistências no worldbuilding que eu não via, a Jady trouxe perspectivas que enriqueceram a história. Meu livro é outro após o trabalho dela.',
    book: 'A Coroa das Sombras Eternas',
  },
  {
    name: 'Camila Torres',
    role: 'Autora estreante',
    avatar: '/images/testimonial-3.jpg',
    rating: 5,
    text: 'Estava com medo de ouvir críticas ao meu primeiro romance, mas a abordagem da Jady me deixou segura desde o início. O feedback foi honesto, detalhado e cheio de carinho pela história. Hoje enviei para editoras com confiança.',
    book: 'O Jardim das Palavras Perdidas',
  },
  {
    name: 'Felipe Drummond',
    role: 'Escritor de suspense',
    avatar: '/images/testimonial-4.jpg',
    rating: 5,
    text: 'Contratei o parecer editorial e recebi muito mais do que esperava. A análise da estrutura narrativa me ajudou a entender por que alguns capítulos não funcionavam. Reescrevi dois deles e a diferença foi enorme.',
    book: 'O Pesquisador de Sombras',
  },
]

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: 'O que é leitura crítica literária?',
    answer:
      'A leitura crítica é uma análise profissional do manuscrito que vai além da revisão gramatical. Ela avalia elementos como narrativa, estrutura, coerência, desenvolvimento de personagens, ritmo e experiência do leitor, oferecendo um feedback detalhado para ajudar o autor a aprimorar a obra.',
  },
  {
    question: 'Quanto tempo leva para receber o relatório?',
    answer:
      'O prazo varia conforme o tamanho do manuscrito e o serviço contratado. Em geral, textos de até 300 páginas têm prazo de 15 a 21 dias úteis. Manuscritos maiores são combinados individualmente. Sempre cumpro os prazos acordados.',
  },
  {
    question: 'Meu texto fica em sigilo absoluto?',
    answer:
      'Sim, sem nenhuma exceção. Seu manuscrito é tratado com total confidencialidade. Não compartilho, cito ou republico qualquer trecho do trabalho recebido. Se preferir, podemos formalizar um Acordo de Confidencialidade (NDA).',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'O orçamento é feito de forma personalizada, conforme o tamanho do manuscrito e o serviço escolhido. Após o acordo, é cobrado 50% para início dos trabalhos e o restante na entrega do relatório. Aceito Pix e transferência bancária.',
  },
  {
    question: 'Quais gêneros literários você atende?',
    answer:
      'Atendo a maioria dos gêneros: romance contemporâneo, fantasia, ficção científica, suspense, literatura brasileira, conto, novela e mais. Se tiver dúvida se seu gênero se encaixa, entre em contato — adoro conhecer projetos novos!',
  },
  {
    question: 'Você faz revisão gramatical também?',
    answer:
      'A leitura crítica e o parecer editorial focam em aspectos literários e narrativos, não em gramática. Para revisão ortográfica e gramatical, recomendo contratar um revisor especializado. Posso indicar profissionais de confiança.',
  },
  {
    question: 'Como envio o manuscrito?',
    answer:
      'Após combinado o serviço e o pagamento inicial, você envia o arquivo em PDF ou Word por e-mail ou via Google Drive. Prefiro receber com formatação padrão (fonte 12, espaçamento 1,5) para facilitar a leitura e as anotações.',
  },
]

// ─────────────────────────────────────────────────────────────
// NAVBAR LINKS
// ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

// ─────────────────────────────────────────────────────────────
// SOBRE — CREDENCIAIS E DIFERENCIAIS
// ─────────────────────────────────────────────────────────────
export const CREDENTIALS = [
  'Formação em Letras com especialização em Teoria Literária',
  'Mais de 5 anos trabalhando com leitores e autores',
  'Leitora ativa em 12+ gêneros literários',
  'Metodologia própria de análise narrativa',
  'Atendimento personalizado e humanizado',
]

export const ABOUT_TEXT = {
  eyebrow: 'Quem sou eu',
  headline: 'Uma leitora apaixonada a serviço da sua história',
  paragraphs: [
    'Sou Jady Moraes, leitora crítica literária. Minha missão é ajudar autores a enxergarem sua obra com novos olhos — com cuidado, honestidade e profundo respeito pelo processo criativo.',
    'Acredito que todo manuscrito carrega uma história que merece ser contada da melhor forma possível. Por isso, minha análise vai além das técnicas: busco entender a essência do que você quer comunicar e como tornar essa comunicação mais poderosa.',
    'Trabalho com autores em todas as fases da escrita, do primeiro rascunho ao manuscrito quase pronto para editoras. Cada projeto recebe atenção única e dedicada.',
  ],
  quote: '"Escrever é humano. Reescrever é divino." — Stephen King',
}
