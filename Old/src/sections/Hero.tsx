import { ArrowDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Disponível para projetos</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block gradient-text text-glow">Caio Marcondes</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4">
          Analista de Redes & CyberSegurança
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground/80 mb-10 leading-relaxed">
          Considero-me uma pessoa generalista, com conhecimentos que abrangem diversas áreas do
          ramo da tecnologia, possuindo habilidades diversificadas em diferentes ambientes
          correlacionados. Desde cedo, sempre tive interesse pela área e, na adolescência, comecei a
          trabalhar com jogos online, atuando no gerenciamento de servidores e no desenvolvimento
          tanto de front-end quanto de back-end. Com o tempo, passei a me interessar mais pela área de
          infraestrutura de TI. Atualmente, meu foco está em infraestrutura, onde busco <span className="text-violet-400">oportunidades</span>,{' '}
          para ampliar meu portfólio de <span className="text-cyan-400">conhecimentos</span> e{' '} evoluir <span className="text-cyan-400">profissionalmente</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-medium px-8 py-6 text-base rounded-xl glow transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#contato">
              <MessageCircle className="w-5 h-5 mr-2" />
              Entre em contato
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto gradient-border font-medium px-8 py-6 text-base rounded-xl hover:bg-secondary/50 transition-all duration-300"
            asChild
          >
            <a href="#skills">
              <ArrowDown className="w-5 h-5 mr-2" />
              Ver skills
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '+5', label: 'Anos de experiência' },
            { value: '+50', label: 'Projetos entregues' },
            { value: '99%', label: 'Uptime garantido' },
            { value: '24/7', label: 'Suporte técnico' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
