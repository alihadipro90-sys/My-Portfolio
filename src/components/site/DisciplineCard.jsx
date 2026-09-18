import { ArrowUpRight } from "lucide-react";
import { AppLink } from "./AppLink";

export function DisciplineCard({
  href,
  navigate,
  image,
  icon,
  title,
  body,
  accent,
}) {
  return (
    <AppLink
      href={href}
      navigate={navigate}
      className="group relative isolate flex min-h-[70vh] flex-col justify-end overflow-hidden border-b border-border p-8 md:border-b-0 md:border-r md:p-12"
    >
      <img
        src={image}
        alt={`${title} abstract composition`}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 to-black/95" />
      <span>{icon}</span>
      <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-none md:text-6xl">
        {title}
      </h2>
      <p className="mt-4 max-w-sm text-sm text-muted-foreground">{body}</p>
      <span
        className="mt-7 inline-flex w-fit items-center gap-2 border-b pb-1 text-sm font-semibold"
        style={{ color: accent, borderColor: accent }}
      >
        Enter the studio
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </AppLink>
  );
}
