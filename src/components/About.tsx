import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-15">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Sobre
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Infraestrutura confiável, do hardware à nuvem.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
