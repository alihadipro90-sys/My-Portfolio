import { Reveal } from "../components/site/Reveal";
import { PageLayout } from "./PageLayout";

const testimonials = [
  {
    quote:
      "Hadi is a highly skilled and dedicated professional who consistently delivers exceptional results. His expertise, creativity, and commitment to excellence make him an invaluable asset to any team or project.",
    name: "Sir Irfan Mahmood",
    role: "CEO & Founder Visionbird Technologies",
  },
  {
    quote:
      "His work and conduct is Excellent. He is very cooprative, humble and hard working. he is a innovative and creative person. He is a very good asset for any organization.",
    name: "Usama Akhtar Mir",
    role: "CEO learner's Hub Consulting",
  },
  {
    quote:
      "Hadi has performed  his duties with dedication, professionalism, and strong managerial skills. He proved to be a valuable member of our team, consistently delivering high-quality work and contributing to the success of our projects.",
    name: "Tayyab Abbas",
    role: "CEO & Founder LEARNATOM SMC-PVT LTD",
  },
];

export function TestimonialsPage({ navigate }) {
  return (
    <PageLayout navigate={navigate}>
      <section className="border-b border-border">
        <div className="section-x py-20 md:py-24">
          <p className="eyebrow">Testimonials</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold uppercase leading-[0.92]">
            Trusted by teams that value clarity.
          </h1>
        </div>
      </section>

      <section className="section-x py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="mb-6 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground">
                  “{item.quote}”
                </p>
                <div className="mt-auto pt-6">
                  <p className="font-display text-lg font-bold uppercase">
                    {item.name}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
