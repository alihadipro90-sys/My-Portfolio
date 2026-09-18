import { useState } from "react";
import { Clock, Mail, MapPin } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { PageLayout } from "./PageLayout";

export function ContactPage({ data, navigate }) {
  const [sent, setSent] = useState(false);
  return (
    <PageLayout navigate={navigate}>
      <section className="border-b border-border">
        <div className="section-x py-20 md:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold uppercase leading-[0.92]">
            Let's build something worth looking at
          </h1>
        </div>
      </section>
      <section className="section-x grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
              event.currentTarget.reset();
            }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="eyebrow">Name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-input bg-transparent px-4 py-3 outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm">
                <span className="eyebrow">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-input bg-transparent px-4 py-3 outline-none focus:border-primary"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="eyebrow">Project details</span>
              <textarea
                required
                name="message"
                rows="6"
                className="mt-2 w-full resize-y border border-input bg-transparent px-4 py-3 outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              {sent ? "Enquiry noted" : "Send enquiry"}
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Thanks. Connect this form to your preferred serverless endpoint
                to deliver the enquiry.
              </p>
            )}
          </form>
        </Reveal>
        <Reveal delay={120} className="space-y-6">
          <ContactDetails data={data.contact} />
        </Reveal>
      </section>
    </PageLayout>
  );
}
function ContactDetails({ data }) {
  return (
    <>
      {[
        [Mail, "Email", data.email],
        [MapPin, "Based in", data.location],
        [Clock, "Response time", data.responseTime],
      ].map(([Icon, label, value]) => (
        <div key={label} className="border border-border bg-card p-6">
          <Icon className="h-5 w-5 text-primary" />
          <p className="mt-3 text-sm text-muted-foreground">{label}</p>
          <p className="text-base font-semibold">{value}</p>
        </div>
      ))}
    </>
  );
}
