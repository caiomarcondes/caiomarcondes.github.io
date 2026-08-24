
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold gradient-text">Caio Marcondes</span>
            <span className="text-muted-foreground">-</span>
            <span className="text-sm text-muted-foreground">Analista de Redes & CyberSegurança</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} - Feito por Caio Marcondes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
