import { Network, ShieldCheck, Server, Cloud, Workflow, Activity, Check } from "lucide-react";
import { competencies, reasons, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const icons = {
  network: Network,
  shield: ShieldCheck,
  server: Server,
  cloud: Cloud,
  automation: Workflow,
  monitor: Activity,
} as const;

export function Competencies() {
  return (
    <section id="competencias" className="py-24 sm:py-5">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Competências
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Áreas de expertise
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Áreas de expertise desenvolvidas ao longo da carreira para entregar soluções completas.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 60}>
                <article className="card-surface rounded-md h-full p-6">
                  <span className="grid size-11 place-items-center rounded-md bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="aurora mt-6 rounded-md border border-border p-8 sm:p-12">
            <div>
              <h3 className="text-2xl font-medium sm:text-3xl">Por que me escolher?</h3>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
