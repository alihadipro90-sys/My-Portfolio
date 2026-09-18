export function PortraitFrame() {
  return (
    <figure className="portrait-frame relative mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
      <div className="portrait-frame-shell relative aspect-3/4 overflow-hidden bg-surface">
        <img
          src="/myself4.png"
          alt="Muhammad Hadi"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
        Developer & Designer
      </figcaption>
    </figure>
  );
}
