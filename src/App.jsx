import { useEffect, useState } from "react";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { HomePage } from "./pages/HomePage";
import { DesignPage } from "./pages/DesignPage";
import { DevelopmentPage } from "./pages/DevelopmentPage";
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/skills": SkillsPage,
  "/testimonials": TestimonialsPage,
  "/contact": ContactPage,
  "/design": DesignPage,
  "/development": DevelopmentPage,
};

function LoadingState() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="eyebrow">Loading portfolio...</p>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-muted-foreground">
        The portfolio data could not be loaded.
      </p>
    </div>
  );
}

function App() {
  const { data, loading, error } = usePortfolioData();
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <LoadingState />;
  if (error || !data) return <ErrorState />;

  const Page = routes[path];
  if (!Page) return <NotFoundPage path={path} navigate={navigate} />;
  return <Page data={data} navigate={navigate} />;
}

export default App;
