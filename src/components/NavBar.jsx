import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../theme";
import { TiAdjustBrightness } from "react-icons/ti";

const links = [
  { to: "/#work", label: "Work", hash: "work" },
  { to: "/#about", label: "About", hash: "about" },
  { to: "/#experience", label: "Experience", hash: "experience" },
  { to: "/#contact", label: "Contact", hash: "contact" },
  // { to: "/resume", label: "Resume", hash: "resume" },
];

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHashActive = (hash) =>
    location.pathname === "/" && location.hash === `#${hash}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="font-serif text-xl tracking-tight text-fg">
          MM
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((item) => (
            <a
              key={item.hash}
              href={item.to}
              className={`text-sm transition-colors hover:text-accent ${
                isHashActive(item.hash) ? "text-accent" : "text-soft"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className=" cursor-pointer px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-soft transition-colors hover:border-accent hover:text-accent"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <TiAdjustBrightness className="text-xl" />
            {/* {theme === "dark" ? "Light" : "Dark"} */}
          </button>
          <button
            type="button"
            className="border border-line px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {links.map((item) => (
              <li key={item.hash}>
                <a
                  href={item.to}
                  className="text-lg text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
