export const profile = {
  name: "Caio Marcondes",
  initials: "CM",
};

export const competenciesData = [
  { icon: "network" },
  { icon: "shield" },
  { icon: "server" },
  { icon: "cloud" },
  { icon: "automation" },
  { icon: "monitor" },
] as const;

export const skillCategories = [
  { key: "programming" },
  { key: "databases" },
  { key: "operatingSystems" },
  { key: "aws" },
  { key: "gcp" },
] as const;

export const whatsappUrl = "https://wa.me/5515997605704";

export const contacts = [
  {
    label: "phone",
    value: "+55 (15) 99760-5704",
    href: "https://wa.me/5515997605704",
    icon: "phone",
  },
  { label: "email", value: "contato@caioit.com", href: "mailto:contato@caioit.com", icon: "mail" },
  {
    label: "linkedin",
    value: "/in/marcondescaio",
    href: "https://www.linkedin.com/in/marcondescaio/",
    icon: "linkedin",
  },
  {
    label: "github",
    value: "/caiomarcondes",
    href: "https://github.com/caiomarcondes",
    icon: "github",
  },
] as const;

export const navLinks = [
  { label: "sobre", href: "#sobre" },
  { label: "skills", href: "#skills" },
  { label: "competencias", href: "#competencias" },
  { label: "contato", href: "#contato" },
];
