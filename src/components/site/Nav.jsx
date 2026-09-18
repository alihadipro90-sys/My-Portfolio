import { useState } from "react";
import { Menu, X } from "lucide-react";
import H2logo from "../../assets/H2logo.png";

export function Nav({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/testimonials", "Testimonials"],
    ["/skills", "Skills"],
    ["/contact", "Contact"],
  ];
  const go = (event, href) => {
    event.preventDefault();
    navigate(href);
    setOpen(false)
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="section-x flex h-16 items-center justify-between gap-6"
      >
        <a
          href="/"
          onClick={(e) => go(e, "/")}
          className="flex items-center gap-2.5"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden border border-primary bg-black p-1">
            <img
              src={H2logo}
              alt="Muhammad Hadi monogram"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-display text-sm font-extrabold uppercase tracking-[0.18em]">
            
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => go(e, href)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${path === href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          onClick={(e) => go(e, "/contact")}
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Let's talk
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div
        className={`overflow-hidden border-t border-border transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0 border-t-0"}`}
      >
        <ul className="section-x flex flex-col py-3">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => go(e, href)}
                className="block py-2.5 text-base font-medium text-muted-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
