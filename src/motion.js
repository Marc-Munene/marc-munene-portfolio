export function revealProps(reduced, delay = 0) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: {
      duration: reduced ? 0.2 : 0.7,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

export function pageProps(reduced) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduced ? 0 : -8 },
    transition: { duration: reduced ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] },
  };
}
