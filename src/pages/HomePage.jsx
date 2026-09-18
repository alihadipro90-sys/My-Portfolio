import { Code2, Palette } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { DisciplineCard } from "../components/site/DisciplineCard";
import { PortraitFrame } from "../components/site/PortraitFrame";
import { TypewriterText } from "../components/site/TypewriterText";
import { PageLayout } from "./PageLayout";

export function HomePage({ data, navigate }) {
  return (
    <PageLayout navigate={navigate}>
      <HomeHero data={data} navigate={navigate} />
      <Marquee items={data.marquee} />
      <section aria-label="Choose a discipline" className="grid md:grid-cols-2">
        <DisciplineCard
          href="/design"
          navigate={navigate}
          image={data.design.hero}
          icon={<Palette className="h-8 w-8 text-crimson" />}
          title="Designing"
          body="Branding, identity systems, posters, packaging, motion graphics, and interface design with an editorial, high-contrast point of view—creating distinctive visual experiences through bold art direction, refined typography, expressive composition, and cohesive design systems."
          accent="var(--crimson)"
        />
        <DisciplineCard
          href="/development"
          navigate={navigate}
          image={data.development.hero}
          icon={<Code2 className="h-8 w-8 text-electric" />}
          title="Development"
          body="MERN stack applications, REST APIs, secure authentication systems, database-driven platforms, and performance-tuned interfaces built to scale—delivering responsive experiences through clean architecture, efficient code, and modern development practices.."
          accent="var(--electric)"
        />
      </section>
      <StatsIntro stats={data.profile.stats} />
    </PageLayout>
  );
}

function HomeHero({ data, navigate }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="section-x relative grid gap-14 py-20 md:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] md:items-center md:gap-20 md:py-28">
        <div>
          <Reveal>
            <p className="eyebrow">
              {data.profile.location} — {data.profile.availability}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,8.6vw,7rem)] font-extrabold uppercase leading-[0.88]">
              Muhammad
              <br />
              <span className="inline-flex flex-wrap items-baseline gap-x-4">
                Hadi{" "}
                <span className="font-sans text-[clamp(0.85rem,1.6vw,1.05rem)] font-medium normal-case tracking-normal text-muted-foreground">
                  <TypewriterText words={data.profile.typewriterRoles} />
                </span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              “{data.profile.intro}”
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3" />
          </Reveal>
        </div>
        <Reveal delay={140}>
          <PortraitFrame />
        </Reveal>
      </div>
    </section>
  );
}
function Marquee({ items }) {
  const repeated = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-border py-4">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            {item} <span className="text-primary">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
function StatsIntro({ stats }) {
  return (
    <section className="border-t border-border">
      <div className="section-x grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight">
            One creator,
            <br />
            two disciplines
          </h2>
        </Reveal>
        <Reveal delay={100} className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Muhammad Hadi is a multidisciplinary digital creator who combines
            bold visual design with reliable full-stack development. Brands get
            an identity that turns heads — and a product that actually ships.
          </p>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl font-extrabold">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
