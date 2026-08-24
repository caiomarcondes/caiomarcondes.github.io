import { 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  Github,
  MessageCircle,
  ExternalLink,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contatos = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (15) 99760-5704',
    href: 'https://wa.me/5515997605704',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@caioit.com',
    href: 'mailto:contato@caioit.com',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/marcondescaio',
    href: 'https://www.linkedin.com/in/marcondescaio/',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@caiopng',
    href: 'https://www.instagram.com/caiopng/',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/caiomarcondes',
    href: 'https://github.com/caiomarcondes',
    color: 'from-gray-500 to-slate-500',
  },
];

export function Contato() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Vamos conversar?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. 
            Entre em contato pelos canais abaixo.
          </p>
        </div>

        {/* Currículo Card */}
        <div className="mb-12 p-8 rounded-2xl gradient-border bg-gradient-to-br from-violet-950/20 to-fuchsia-950/20 backdrop-blur-sm text-center">
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Currículo
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Para uma visão abrangente das minhas habilidades e experiências, 
            sinta-se à vontade para conferir o meu currículo.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-medium px-8 py-6 text-base rounded-xl glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="/Curriculo_Caio_Marcondes_V2.0.pdf
            " target="_blank">
              <Download className="w-5 h-5 mr-2" />
              Baixar Currículo
            </a>
          </Button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contatos.map((contato, index) => (
            <a
              key={index}
              href={contato.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contato.color} p-0.5 flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <contato.icon className="w-5 h-5 text-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{contato.label}</p>
                  <p className="font-medium text-foreground truncate">{contato.value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-medium px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://wa.me/5515997605704" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
