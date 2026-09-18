import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ theme = "base", path, navigate, children }) {
  return (
    <div
      className={`min-h-screen bg-background text-foreground ${theme === "design" ? "theme-design" : ""} ${theme === "dev" ? "theme-dev" : ""}`}
    >
      <Nav path={path} navigate={navigate} />
      <main>{children}</main>
      <Footer path={path} navigate={navigate} />
    </div>
  );
}
