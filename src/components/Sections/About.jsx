import { RevealOnScroll } from "./RevealOnScroll";

const About = () => {
  return (
    <section id="about" className="py-10 md:py-14">
      <RevealOnScroll delay={0.05}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass-panel rounded-3xl p-6 md:p-10">
            <div className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              About Me
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className="md:flex-1 text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold mb-4 text-slate-100">
                  Full-Stack Developer crafting robust, scalable web solutions.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                  I am a self-driven developer with a proven track record in
                  designing and shipping end-to-end products. My expertise spans
                  front-end frameworks, backend services, and databases, with a
                  strong focus on performance, security, and reliability.
                </p>
                <ul className="mt-5 space-y-2 text-left text-slate-300">
                  <li>• End-to-end delivery from idea to deployment</li>
                  <li>• Scalable architecture with React, Angular, FastAPI, Node.js</li>
                  <li>• DevOps automation through Docker and CI/CD pipelines</li>
                  <li>• Clean, maintainable code and collaborative workflows</li>
                </ul>
              </div>

              <div className="md:flex-shrink-0">
                <img
                  src="/about-munene.jpg"
                  alt="Marc Munene - Full-Stack Developer"
                  className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto object-cover border border-slate-600/50"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export { About };
