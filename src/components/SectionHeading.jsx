export function SectionHeading({ index, label, title }) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">
        {index} / {label}
      </p>
      {title ? (
        <h2 className="mt-3 font-serif text-4xl leading-tight text-fg md:text-5xl">
          {title}
        </h2>
      ) : null}
    </header>
  );
}
