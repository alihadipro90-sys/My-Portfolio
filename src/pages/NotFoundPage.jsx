import { ActionButton } from "../components/site/ActionButton";
import { PageShell } from "../components/site/PageShell";

export function NotFoundPage({ navigate, path }) {
  return (
    <PageShell navigate={navigate} path={path}>
      <div className="section-x py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold uppercase">
          Page not found
        </h1>
        <ActionButton href="/" navigate={navigate} className="mt-8 bg-primary">
          Go home
        </ActionButton>
      </div>
    </PageShell>
  );
}
