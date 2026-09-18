import { ArrowUpRight } from "lucide-react";
import { ActionButton } from "./ActionButton";

export function PageHero({
  image,
  eyebrow,
  title,
  body,
  action,
  anchor,
  secondaryAction,
  secondaryHref,
  secondaryExternal = false,
  tertiaryAction,
  tertiaryHref,
  tertiaryExternal = false,
  navigate,
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={image}
        alt="Abstract portfolio composition"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="section-x relative py-24 md:py-32">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.8rem,8vw,7rem)] font-extrabold uppercase leading-[0.88]">
          {title}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">{body}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          {action && (
            <a
              href={anchor}
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              {action}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {secondaryAction && (
            <a
              href={secondaryHref}
              target={secondaryExternal ? "_blank" : undefined}
              rel={secondaryExternal ? "noreferrer" : undefined}
              onClick={
                secondaryExternal
                  ? undefined
                  : (event) => {
                      event.preventDefault();
                      navigate(secondaryHref);
                    }
              }
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {secondaryAction}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {tertiaryAction && (
            <a
              href={tertiaryHref}
              target={tertiaryExternal ? "_blank" : undefined}
              rel={tertiaryExternal ? "noreferrer" : undefined}
              onClick={
                tertiaryExternal
                  ? undefined
                  : (event) => {
                      event.preventDefault();
                      navigate(tertiaryHref);
                    }
              }
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              {tertiaryAction}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <ActionButton
            href="/contact"
            navigate={navigate}
            className="border border-primary bg-transparent text-primary"
          >
            Start a project
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
