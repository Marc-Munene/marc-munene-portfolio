import { motion as Motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const delay = (index) => (reduced ? 0 : 0.12 * index);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-7 lg:col-span-8">
          <Motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay(0) }}
            className="text-xs uppercase tracking-[0.22em] text-muted"
          >
            01 / Intro
          </Motion.p>
          <Motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: delay(1) }}
            className="mt-6 text-lg text-soft"
          >
            Hey, I’m
          </Motion.p>
          <Motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: delay(2) }}
            className="font-serif text-5xl leading-[0.95] text-fg sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Marc Munene
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: delay(3) }}
            className="mt-4 font-serif text-2xl italic text-accent md:text-3xl"
          >
            Full-stack developer
          </Motion.p>
          <Motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: delay(4) }}
            className="mt-8 max-w-xl text-base text-soft md:text-lg"
          >
            I ship production web systems — Angular and FastAPI at work, MERN
            when I own the stack. Based in Nairobi.
          </Motion.p>
          <Motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: delay(5) }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/#work"
              className="bg-accent px-5 py-3 text-sm font-medium text-[#edeae4] transition-opacity hover:opacity-90"
            >
              See work
            </a>
            <a
              href="/#contact"
              className="border border-line px-5 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Write to me
            </a>
          </Motion.div>
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: delay(6) }}
            className="mt-10 text-xs uppercase tracking-[0.18em] text-muted"
          >
            Nairobi · Open to work
          </Motion.p>
        </div>

        <div className="relative md:col-span-5 lg:col-span-4 md:mt-24">
          <FramedPortrait reduced={reduced} />
        </div>
      </div>
    </section>
  );
}

function FramedPortrait({ reduced }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: reduced ? 0 : 0.35 }}
      className="relative"
    >
      <div className="relative">
        <img
          src="/about-munene.jpg"
          alt="Marc Munene, full-stack developer based in Nairobi"
          className="aspect-[4/5] w-full object-cover"
          width="640"
          height="800"
        />

        {/* corner brackets — devtools element-inspector treatment */}
        <Motion.span
          initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.75 }}
          className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-accent"
        />
        <Motion.span
          initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.8 }}
          className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-accent"
        />
        <Motion.span
          initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.85 }}
          className="pointer-events-none absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-accent"
        />
        <Motion.span
          initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.9 }}
          className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-accent"
        />
      </div>
    </Motion.div>
  );
}
