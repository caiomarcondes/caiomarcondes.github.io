import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Tecnologias e ferramentas
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Tecnologias e ferramentas que domino para entregar soluções robustas e escaláveis.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <article className="card-surface rounded-md h-full p-6">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
