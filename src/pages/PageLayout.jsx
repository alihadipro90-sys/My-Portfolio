import { PageShell } from "../components/site/PageShell";

export function PageLayout({ theme, navigate, children }) {
  return (
    <PageShell
      theme={theme}
      navigate={navigate}
      path={window.location.pathname}
    >
      {children}
    </PageShell>
  );
}
