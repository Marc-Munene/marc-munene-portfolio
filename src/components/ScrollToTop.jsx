import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <Motion.button
          type="button"
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : 12 }}
          transition={{ duration: 0.2 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
          }
          className="fixed bottom-6 right-6 z-50 border border-line bg-bg px-3 py-2 text-xs uppercase tracking-[0.16em] text-fg transition-colors hover:border-accent hover:text-accent"
          aria-label="Scroll to top"
        >
          Top
        </Motion.button>
      ) : null}
    </AnimatePresence>
  );
}
