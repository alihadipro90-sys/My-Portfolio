export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-x py-20">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-extrabold uppercase">
        {title}
      </h2>
    </div>
  );
}
