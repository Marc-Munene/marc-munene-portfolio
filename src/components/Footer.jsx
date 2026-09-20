export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-serif text-lg text-fg">MM</p>
        <p>© {new Date().getFullYear()} Marc Munene</p>
        <a href="/#hero" className="hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
