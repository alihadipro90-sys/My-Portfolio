import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import { Reveal } from "../components/site/Reveal";
import { ActionButton } from "../components/site/ActionButton";
import { PageLayout } from "./PageLayout";

const resumePdf = "/My CV (Designing).pdf";

export function DesignPage({ data, navigate }) {
  const { design } = data;
  return (
    <PageLayout theme="design" navigate={navigate}>
      <PageHero
        image={design.hero}
        eyebrow="Designing — Visual Identity Studio"
        title={
          <>
            Ideas that <span className="text-primary">refuse</span> to be
            ignored
          </>
        }
        body="I build brands with a spine: sharp marks, decisive typography and systems that hold together from a business card to a billboard."
        action="View portfolio"
        anchor="#portfolio"
        secondaryAction="My CV"
        secondaryHref={resumePdf}
        secondaryExternal
        navigate={navigate}
      />
      <SectionHeading eyebrow="What I make" title="Design services" />
      <ServicesGrid services={design.services} />
      <DesignPortfolio projects={design.projects} />
    </PageLayout>
  );
}

function ServicesGrid({ services }) {
  return (
    <div className="section-x -mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {services.map(([title, body], index) => (
        <Reveal
          key={title}
          delay={index * 50}
          className="bg-background p-7 hover:bg-surface"
        >
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-xl font-bold uppercase">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </Reveal>
      ))}
    </div>
  );
}
function DesignPortfolio({ projects }) {
  return (
    <section id="portfolio" className="scroll-mt-20 border-b border-border">
      <div className="section-x py-20">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold uppercase">
          Design portfolio
        </h2>
        <div className="mt-12 columns-1 gap-6 md:columns-2 *:mb-6 *:break-inside-avoid">
          {projects.map((project, index) => (
            <Reveal as="article" key={project.title} delay={index * 80}>
              <article className="group border border-border bg-card">
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                    className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-primary">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold uppercase">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {project.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="border border-border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                    {project.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
