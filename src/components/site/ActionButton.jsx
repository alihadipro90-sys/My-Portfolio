import { ArrowUpRight } from "lucide-react";
import { AppLink } from "./AppLink";

export function ActionButton({
  href,
  navigate,
  children,
  className = "",
  style,
}) {
  return (
    <AppLink
      href={href}
      navigate={navigate}
      style={style}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </AppLink>
  );
}
