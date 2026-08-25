import { ArrowRight, Globe } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Reveal } from "./Reveal";
// PixelBlast is a JavaScript component without a TypeScript declaration file.
// @ts-expect-error -- the module is intentionally consumed as an untyped component.
import PixelBlast from "./PixelBlast";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-26">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-md border border-border px-6 py-20 text-center sm:px-12 sm:py-28">
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
            <PixelBlast
    variant="circle"
    pixelSize={5}
    color="#B497CF"
    patternScale={2.25}
    patternDensity={0.55}
    pixelSizeJitter={0.7}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.35}
    edgeFade={0.5}
    transparent
            />
          </div>

          <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white sm:text-lg">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Entre em contato
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#skills"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary sm:w-auto"
              >
                Ver skills
              </a>
            </div>
          </Reveal>
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl text-center font-high leading-tight sm:text-4xl lg:text-5xl">
                Resultados que comprovam a entrega
              </h2>

            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-1 sm:gap-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70}>
                <div className="stat-card h-full rounded-md border border-border px-5 py-6 sm:px-6 sm:py-7">
                  <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
