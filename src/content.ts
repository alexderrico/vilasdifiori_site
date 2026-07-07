export const siteContent = {
  nav: {
    links: [
      //{ label: "O Empreendimento", href: "#empreendimento" },
      { label: "Lazer", href: "#lazer" },
      { label: "Localização", href: "#localizacao" },
      { label: "Investimento", href: "#investimento" },
      { label: "Galeria", href: "#galeria" },
    ],
  },

  whatsapp: {
    url: "https://vilasdifiori-capi.vercel.app/",
    ctaText: "Falar no WhatsApp",
  },

  hero: {
    title: ["Seu próximo", "capítulo começa"],
    highlight: "aqui.",
    subtitle: "Lotes a partir de 337m² em um dos vetores de maior valorização de Guaratinguetá/SP.",
    image: "/images/hero-bg.png",
    ctaPrimary: { label: "Agendar Visita", href: "https://vilasdifiori-capi.vercel.app/" },
    ctaSecondary: { label: "Ver Masterplan", href: "#masterplan" },
    stats: [
      { value: "248", label: "LOTES EXCLUSIVOS", icon: "lotus" as const },
      { value: "35.000m²", label: "DE ÁREA VERDE", icon: "leaf" as const },
      { value: "INFRAESTRUTURA", label: "CONCLUÍDA", icon: "check" as const },
      { value: "PRONTO PARA", label: "CONSTRUIR", icon: "building" as const },
    ],
  },

  features: {
    items: [
      { text: "Infraestrutura concluída", icon: "check-circle" as const },
      { text: "Portaria controlada 24h", icon: "eye" as const },
      { text: "Mais de 35 mil m² de área verde para sua família", icon: "heart" as const },
      { text: "Lotes a partir de 337m²", icon: "home" as const },
      { text: "Condições facilitadas e parcelamento direto", icon: "dollar" as const },
    ],
  },

  lifestyle: {
    label: "Viva o extraordinário",
    title: ["Mais que um lote.", "Um"],
    highlight: "estilo de vida.",
    description:
      "Cada detalhe do Vilas Di Fiori Residence Club foi pensado para proporcionar bem-estar, segurança e conexão com a natureza para você e sua família.",
    cta: { label: "Conhecer Lazer", href: "#lazer" },
    cards: [
      { label: "Clube Completo", image: "/images/clube_v1.jpg" },
      { label: "Esportes e Lazer", image: "/images/esportes_v1.jpg" },
      { label: "Natureza Preservada", image: "/images/natureza.jpg" },
      { label: "Espaço Pet", image: "/images/pet.jpg" },
      { label: "Para Toda a Família", image: "/images/familia_v1.jpg" },
    ],
  },

  masterplan: {
    label: "Masterplan",
    title: "Seu futuro anotado em cada detalhe.",
    description:
      "Explore o masterplan interativo e descubra a localização de cada área de lazer e conveniência.",
    cta: { label: "Explorar Masterplan", href: "#masterplan" },
    image: "/images/masterplan_v2.png",
    legend: [
      { num: 1, label: "Portaria 24h" },
      { num: 2, label: "Clube" },
      { num: 3, label: "Piscinas" },
      { num: 4, label: "Quadras" },
      { num: 5, label: "Área Verde" },
      { num: 6, label: "Praça Verde" },
      { num: 7, label: "Redário" },
    ],
  },

  gallery: {
    label: "Galeria",
    title: "Viva cada momento.",
    description:
      "Um verdadeiro clube com mais de 20 opções de lazer para você aproveitar todos os dias.",
    cta: { label: "Ver Galeria Completa", href: "#galeria" },
    items: [
      { title: "Piscina", description: "Climatizada e integrada ao clube", image: "/images/galeria/piscina_v1.jpg" },
      { title: "Academia", description: "Equipamentos de última geração", image: "/images/galeria/academia.jpg" },
      { title: "Complexo de Lazer", description: "Estrutura completa para toda a família", image: "/images/galeria/complexo_de_lazer.jpg" },
      { title: "Quadras", description: "Diversas modalidades à sua disposição", image: "/images/galeria/quadras_v1.jpg" },
      { title: "Quadras", description: "Diversas modalidades à sua disposição", image: "/images/galeria/tenis.jpg" },
      { title: "Playground", description: "Espaço kids com total segurança", image: "/images/galeria/playground.jpg" },
      { title: "Praça", description: "Áreas de convivência ao ar livre com pista de skate, redário e muito conforto", image: "/images/galeria/praca.jpg" },
      { title: "Portaria", description: "Acesso controlado 24 horas", image: "/images/galeria/portaria.jpg" },
      { title: "Vestiários", description: "Espaço gourmet e vestiários", image: "/images/galeria/vestiarios_espaco_gourmet.jpg" },
    ],
  },

  architect: {
    label: "O Conceito",
    quote:
      "O conceito era muito diferenciado, pensado para a população de Guaratinguetá. Todo o projeto foi pensado pra atender essa necessidade de convivência entre pessoas, onde o morador deixa de ficar somente na sua residência, e passa a conviver com segurança no seu próprio condomínio. Tendo infraestrutura de esporte, infraestrutura cultural, interagindo com o meio ambiente, e principalmente com o pôr do sol, que é simplesmente fantástico. Naquela região, simplesmente extraordinário a visão que a gente tem lá no loteamento do pôr do sol.A",
    name: "Ricardo Rabello",
    role: "Arquiteto Projetista das Áreas de Lazer do Vilas Di Fiori",
    image: "/images/arquiteto.jpg",
  },

  investment: {
    label: "Investimento Inteligente",
    title: "Guaratinguetá cresce. Seu patrimônio também.",
    items: [
      { title: "Valorização", description: "Região em constante crescimento", icon: "trending-up" as const },
      { title: "Liquidez", description: "Alta demanda e rápida revenda", icon: "dollar" as const },
      { title: "Infraestrutura Pronta", description: "Menos risco, mais segurança", icon: "shield" as const },
      { title: "Condições Facilitadas", description: "Parcelamento direto com a incorporadora", icon: "document" as const },
    ],
  },

  location: {
    label: "Localização Privilegiada",
    title: "No coração do que mais valoriza.",
    description: "Fácil acesso às principais vias e tudo o que você precisa por perto.",
    image: "/images/mapa_v2.png",
    distances: [
      { time: "10 min", place: "Buriti Shopping" },
      { time: "15 min", place: "Aparecida" },
      { time: "5 min", place: "Centro" },
      { time: "90 min", place: "São Paulo" },
    ],
  },

  cta: {
    label: "Visite e encante-se",
    title: "Agende uma visita e conheça o Vilas Di Fiori pessoalmente.",
    description:
      "Nosso time está pronto para apresentar cada detalhe desse lugar que vai transformar o seu futuro.",
    image: "/images/interior_v1.jpg",
    cta: { label: "Falar com Especialista", href: "https://vilasdifiori-capi.vercel.app/" },
    hint: "Atendimento rápido pelo WhatsApp",
  },

  footer: {
    copyright: "© 2026 Vilas Di Fiori Residence Club. Todos os direitos reservados.",
    social: [
      { label: "Instagram", url: "https://www.instagram.com/vilasdifiori/" },
      { label: "Facebook", url: "#" },
      { label: "WhatsApp", url: "https://vilasdifiori-capi.vercel.app/" },
    ],
  },
};
