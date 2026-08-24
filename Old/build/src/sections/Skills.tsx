import { 
  Code2, 
  Database, 
  Monitor, 
  Cloud,
  Server
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programação',
    color: 'from-violet-500 to-purple-500',
    skills: ['JavaScript', 'Python', 'Dart', 'PHP', 'React'],
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    color: 'from-cyan-500 to-blue-500',
    skills: ['Microsoft SQL Server', 'SQLite', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    icon: Monitor,
    title: 'Sistemas Operacionais',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      'Ubuntu Server 16.04 a 24.04',
      'Windows Server 2001 a 2019',
      'Windows 7 a 11',
      'Ubuntu Desktop',
      'Debian 10 a 12',
    ],
  },
  {
    icon: Cloud,
    title: 'Amazon Web Services',
    color: 'from-amber-500 to-orange-500',
    skills: ['Amazon CloudWatch', 'Amazon EC2', 'Amazon RDS', 'Amazon S3'],
  },
  {
    icon: Server,
    title: 'Google Cloud',
    color: 'from-red-500 to-rose-500',
    skills: ['Cloud Functions', 'Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Firebase'],
  },
      {
    icon: Server,
    title: 'Microsoft Azure',
    color: 'from-red-500 to-rose-500',
    skills: ['Virtual Machines', 'Azure Kubernetes Service', 'Azure SQL ', 'Cloud SQL', 'Firebase'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para entregar soluções 
            robustas e escaláveis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl gradient-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-4`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
