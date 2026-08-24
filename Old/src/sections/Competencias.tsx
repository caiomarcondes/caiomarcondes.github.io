import { 
  Shield, 
  Zap, 
  Network,
  Cloud,
  Server,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

const competencias = [
  {
    icon: Network,
    title: 'Infraestrutura de Rede',
    description: 'Configuração e gerenciamento de redes empresariais com alta disponibilidade e performance.',
  },
  {
    icon: Shield,
    title: 'Segurança da Informação',
    description: 'Implementação de políticas de segurança, firewalls e monitoramento de ameaças.',
  },
  {
    icon: Server,
    title: 'Administração de Servidores',
    description: 'Gestão de servidores Windows e Linux, virtualização e containers.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Arquitetura e migração para AWS e Google Cloud com otimização de custos.',
  },
  {
    icon: Zap,
    title: 'Automação',
    description: 'Scripts e automação de processos para aumentar eficiência operacional.',
  },
  {
    icon: BarChart3,
    title: 'Monitoramento',
    description: 'Dashboards e alertas em tempo real para garantir máxima disponibilidade.',
  },
];

const diferenciais = [
  'Resolução rápida de incidentes',
  'Documentação técnica detalhada',
  'Planejamento de capacidade',
  'Backup e disaster recovery',
  'Otimização de performance',
  'Suporte técnico especializado',
];

export function Competencias() {
  return (
    <section id="competencias" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Competências</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Áreas de expertise desenvolvidas ao longo da carreira para 
            entregar soluções completas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competencias Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {competencias.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 p-0.5 mb-4">
                  <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Diferenciais Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 rounded-2xl gradient-border bg-gradient-to-br from-violet-950/30 to-fuchsia-950/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Por que me escolher?
              </h3>
              <ul className="space-y-4">
                {diferenciais.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">CM</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Caio Marcondes</p>
                    <p className="text-sm text-muted-foreground">Analista de Redes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
