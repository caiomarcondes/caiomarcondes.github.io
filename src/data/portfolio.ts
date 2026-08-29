export const profile = {
  name: "Caio Marcondes",
  role: "Analista de Sistemas & Infraestrutura",
  availability: "Disponível para projetos",
  intro:
    "Ao longo da minha trajetória, desenvolvi habilidades em hardware e software e busco constantemente aprimorar minhas capacidades com cada novo desafio. Acredito no poder da criatividade, inovação e colaboração para gerar resultados impactantes e memoráveis.",
  initials: "CM",
};

export const stats = [
  { value: "+7", label: "Anos de experiência" },
  { value: "+50", label: "Projetos entregues" },
  { value: "99%", label: "Uptime garantido" },
  { value: "24/7", label: "Suporte técnico" },
];

export const skillGroups = [
  {
    title: "Programação",
    items: ["JavaScript", "Python", "Dart", "HTML", "PHP", "CSS"],
  },
  {
    title: "Banco de Dados",
    items: ["Microsoft SQL Server", "SQLite", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Sistemas Operacionais",
    items: [
      "Ubuntu Server 16.04 a 24.04",
      "Windows Server 2001 a 2019",
      "Windows 7 a 11",
      "Ubuntu Desktop",
      "Debian 10 a 12",
    ],
  },
  {
    title: "Amazon Web Services",
    items: ["Amazon CloudWatch", "Amazon EC2", "Amazon RDS", "Amazon S3"],
  },
  {
    title: "Google Cloud",
    items: ["Cloud Functions", "Compute Engine", "Cloud Storage", "Cloud SQL", "Firebase"],
  },
];

export const competencies = [
  {
    title: "Infraestrutura de Rede",
    description:
      "Configuração e gerenciamento de redes empresariais com alta disponibilidade e performance.",
    icon: "network",
  },
  {
    title: "Segurança da Informação",
    description:
      "Implementação de políticas de segurança, firewalls e monitoramento de ameaças.",
    icon: "shield",
  },
  {
    title: "Administração de Servidores",
    description: "Gestão de servidores Windows e Linux, virtualização e containers.",
    icon: "server",
  },
  {
    title: "Cloud Computing",
    description: "Arquitetura e migração para AWS e Google Cloud com otimização de custos.",
    icon: "cloud",
  },
  {
    title: "Automação",
    description: "Scripts e automação de processos para aumentar eficiência operacional.",
    icon: "automation",
  },
  {
    title: "Monitoramento",
    description: "Dashboards e alertas em tempo real para garantir máxima disponibilidade.",
    icon: "monitor",
  },
] as const;

export const reasons = [
  "Resolução rápida de incidentes",
  "Documentação técnica detalhada",
  "Planejamento de capacidade",
  "Backup e disaster recovery",
  "Otimização de performance",
  "Suporte técnico especializado",
];

export const contacts = [
  {
    label: "Telefone",
    value: "+55 (15) 99760-5704",
    href: "https://wa.me/5515997605704",
    icon: "phone",
  },
  { label: "Email", value: "contato@caioit.com", href: "mailto:contato@caioit.com", icon: "mail" },
  {
    label: "LinkedIn",
    value: "/in/marcondescaio",
    href: "https://www.linkedin.com/in/marcondescaio/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "/caiomarcondes",
    href: "https://github.com/caiomarcondes",
    icon: "github",
  },
] as const;

export const whatsappUrl = "https://wa.me/5515997605704";

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Competências", href: "#competencias" },
  { label: "Contato", href: "#contato" },
];
