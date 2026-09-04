import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

export function Skills() {
  const { t } = useTranslation();

  const skillGroups = [
    {
      titleKey: "skills.programming",
      itemsKey: "skills.languages",
    },
    {
      titleKey: "skills.databases",
      itemsKey: "skills.dbs",
    },
    {
      titleKey: "skills.operatingSystems",
      itemsKey: "skills.os",
    },
    {
      titleKey: "skills.aws",
      itemsKey: "skills.awsServices",
    },
    {
      titleKey: "skills.gcp",
      itemsKey: "skills.gcpServices",
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t("skills.title")}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              {t("skills.heading")}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {t("skills.description")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.titleKey} delay={i * 70}>
              <article className="card-surface rounded-md h-full p-6">
                <h3 className="font-display text-lg font-semibold">{t(group.titleKey)}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {(t(group.itemsKey, { returnObjects: true }) as string[]).map((item: string) => (
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
