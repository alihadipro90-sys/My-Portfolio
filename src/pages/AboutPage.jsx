import { ActionButton } from "../components/site/ActionButton";
import { Reveal } from "../components/site/Reveal";
import { PageLayout } from "./PageLayout";

export function AboutPage({ data, navigate }) {
  return (
    <PageLayout navigate={navigate}>
      <section className="border-b border-border">
        <div className="section-x py-20 md:py-24">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold uppercase leading-[0.92]">
            Design that argues. Code that holds.
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm Muhammad Hadi. I started in graphic design because I liked how
              a single mark could change how people feel about a company. I
              moved into development because I got tired of handing off
              beautiful screens that never got built the way they were drawn.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Today I run both disciplines as one practice. The same project can
              go from logotype and type scale to a deployed MERN application
              with authentication, a REST API and a database schema that won't
              need rewriting next quarter.
            </p>
          </div>
        </div>
      </section>
      <Education education={data.about.education} />
      <Journey timeline={data.about.timeline} />
      <section className="section-x flex flex-col gap-5 py-20 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-3xl font-extrabold uppercase">
          Want the full picture?
        </h2>
        <div className="flex flex-wrap gap-3">
          <ActionButton
            href="/design"
            navigate={navigate}
            className="bg-crimson"
          >
            See design work
          </ActionButton>
          <ActionButton
            href="/development"
            navigate={navigate}
            className="bg-electric"
          >
            See dev work
          </ActionButton>
        </div>
      </section>
    </PageLayout>
  );
}
function Education({ education }) {
  return (
    <section className="border-b border-border">
      <div className="section-x grid gap-10 py-20 md:grid-cols-[0.7fr_1.3fr]">
        <h2 className="font-display text-3xl font-extrabold uppercase">
          Education
        </h2>
        <ul className="grid gap-6">
          {education.map(([title, body], index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 80}
              className="border-t border-border pt-5"
            >
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
function Journey({ timeline }) {
  return (
    <section className="border-b border-border">
      <div className="section-x py-20">
        <h2 className="font-display text-3xl font-extrabold uppercase">
          Journey
        </h2>
        <ol className="mt-10">
          {timeline.map(([year, text], index) => (
            <Reveal
              as="li"
              key={year}
              delay={index * 70}
              className="grid gap-2 border-t border-border py-6 sm:grid-cols-[8rem_1fr]"
            >
              <span className="font-mono text-sm text-primary">{year}</span>
              <p className="text-base text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
