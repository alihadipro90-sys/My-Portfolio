import { Reveal } from "../components/site/Reveal";
import { PageLayout } from "./PageLayout";

export function SkillsPage({ data, navigate }) {
  const designSkills = [
    ["Design Software", data.design.skills.slice(0, 4).map(([label]) => label)],
    ["Video & Motion", data.design.skills.slice(4, 7).map(([label]) => label)],
    ["Interface Design", data.design.skills.slice(7).map(([label]) => label)],
  ];
  const developmentSkills = Object.entries(data.development.skills);

  return (
    <PageLayout navigate={navigate}>
      <section className="border-b border-border">
        <div className="section-x py-20 md:py-24">
          <p className="eyebrow">Skills</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold uppercase leading-[0.92]">
            Craft, systems, and delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I build across strategy, interface design, and engineering — turning
            ideas into coherent products that look sharp and work reliably.
          </p>
        </div>
      </section>

      <section className="section-x space-y-20 py-20">
        <SkillSection title="Design" skills={designSkills} accent="crimson" />
        <SkillSection
          title="Development"
          skills={developmentSkills}
          accent="electric"
        />
      </section>
    </PageLayout>
  );
}

function SkillSection({ title, skills, accent }) {
  return (
    <div>
      <div className="mb-7 flex items-center gap-3">
        <span
          className={`h-8 w-1.5 rounded-full ${accent === "crimson" ? "bg-crimson" : "bg-electric"}`}
        />
        <h2 className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(([groupName, groupSkills], index) => (
          <Reveal
            key={groupName}
            delay={index * 80}
            className="min-w-0 rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <h3 className="font-display text-lg font-extrabold uppercase sm:text-xl">
              {groupName}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {groupSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background/50 px-3 py-2 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
