import { motion as Motion, useReducedMotion } from "framer-motion";
import { revealProps } from "../motion";

export function RevealOnScroll({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <Motion.div className={className} {...revealProps(reduced, delay)}>
      {children}
    </Motion.div>
  );
}
