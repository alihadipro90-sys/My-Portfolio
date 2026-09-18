import { Github } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { PageLayout } from "./PageLayout";
import developmentResume from "../assets/my Resume (Development).pdf";

export function DevelopmentPage({ data, navigate }) {
  const { development } = data;
  return (
    <PageLayout theme="dev" navigate={navigate}>
      <PageHero
        image={development.hero}
        eyebrow="Development — MERN Stack Engineering"
        title={
          <>
            Web applications built to{" "}
            <span className="text-primary">scale</span>, not just to demo
          </>
        }
        body="I design the data model, build the API, ship the interface and stay for the maintenance — responsive, accessible and measurably fast."
        secondaryAction="My Resume"
        secondaryHref={developmentResume}
        secondaryExternal
        tertiaryAction="My GitHub"
        tertiaryHref="https://github.com/"
        tertiaryExternal
        navigate={navigate}
      />
      <DevelopmentServices services={development.services} />
      <DevelopmentProjects projects={development.projects} />
    </PageLayout>
  );
}
function DevelopmentServices({ services }) {
  return (
    <div className="section-x grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(([title, body], index) => (
        <Reveal
          key={title}
          delay={index * 50}
          className="rounded-2xl border border-border bg-card p-7"
        >
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </Reveal>
      ))}
    </div>
  );
}
function DevelopmentProjects({ projects }) {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-border">
      <div className="section-x py-20">
        <p className="eyebrow">Case studies</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold">
          Development portfolio
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              delay={index * 90}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={project.img}
                alt={`${project.title} application interface`}
                loading="lazy"
                className="aspect-10/7 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {project.desc}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <span className="text-primary">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full bg-accent px-2.5 py-1 font-mono text-[0.68rem] text-accent-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
