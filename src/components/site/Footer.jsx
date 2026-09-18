import { Github, Linkedin, Instagram, Dribbble, Mail } from "lucide-react";
const socials = [
  ["https://github.com/alihadipro90-sys", "GitHub", Github],
  ["https://www.linkedin.com/in/muhammad-hadi-1581b0402/", "LinkedIn", Linkedin],
  ["https://dribbble.com/", "Dribbble", Dribbble],
  ["https://www.instagram.com/arcturix.solutions/", "Instagram", Instagram],
];
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/testimonials", "Testimonials"],
  ["/skills", "Skills"],
  ["/contact", "Contact"],
];
export function Footer({ navigate }) {
  const go = (event, href) => {
    event.preventDefault();
    navigate(href);
  };
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold uppercase tracking-tight">
            Muhammad Hadi
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Bold visual design meets reliable full-stack engineering — one
            creator, two disciplines, zero compromises.
          </p>
          <a
            href="mailto:alihadipro90@gmail.com"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Mail className="h-4 w-4" />
            alihadipro90@gmail.com
          </a>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => go(e, href)}
                  className="hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socials.map(([href, label, Icon]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="section-x flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Muhammad Hadi. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Eat, Sleep, Code, Design, Repeat.
          </p>
        </div>
      </div>
    </footer>
  );
}
