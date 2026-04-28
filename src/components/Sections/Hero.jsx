import { IoIosContact } from "react-icons/io";
import BlurText from "../BlurText/BlurText";
import TrueFocus from "../TrueFocus/TrueFocus";
import { RevealOnScroll } from "./RevealOnScroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen py-16 md:py-24 flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(2, 6, 23, 0.78), rgba(2, 6, 23, 0.9)), url('/munene-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <RevealOnScroll>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="glass-panel rounded-3xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-5/12 xl:w-4/12 flex-shrink-0"
              >
                <img
                  src="/marc-logo.jpg"
                  alt="Marc's logo"
                  className="rounded-2xl shadow-2xl w-full max-w-[340px] h-auto object-cover mx-auto border border-slate-600/50"
                  loading="eager"
                />
              </motion.div>

              <div className="w-full md:w-7/12 xl:w-8/12 text-center md:text-left text-white">
                <p className="text-lg md:text-xl mb-2 flex items-center justify-center md:justify-start">
                  Hey, I'm
                  <TrueFocus
                    sentence=" Marc Munene"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#22d3ee"
                    animationDuration={1}
                    pauseBetweenAnimations={1}
                  />
                </p>

                <div className="text-4xl sm:text-5xl font-mono font-semibold leading-tight flex flex-wrap items-center justify-center md:justify-start gap-2 drop-shadow-lg">
                  <BlurText
                    text="{Full Stack}"
                    delay={120}
                    animateBy="words"
                    direction="top"
                    className="text-cyan-300"
                  />
                  <BlurText
                    text="Software Developer."
                    delay={120}
                    animateBy="words"
                    direction="top"
                    className="text-slate-100"
                  />
                </div>

                <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-slate-200 max-w-2xl">
                  I build high-performance, scalable web applications with a
                  sharp focus on user experience. I specialize in the MERN stack
                  and also work confidently with Angular, TypeScript, SQL, and
                  Next.js to deliver clean, maintainable products.
                </p>

                <div className="mt-7 flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 text-slate-950 px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-400/30"
                  >
                    <IoIosContact size={22} /> Get in Touch
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-xl border border-slate-500/80 px-5 py-3 text-slate-100 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200"
                  >
                    See Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export { Hero };
