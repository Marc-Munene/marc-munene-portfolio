import { FaGithub } from "react-icons/fa";
import { projectData } from "../../../projects";
import { RevealOnScroll } from "./RevealOnScroll";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-10 md:py-14">
      <RevealOnScroll delay={0.12}>
        <div className="mx-auto px-4 max-w-6xl">
          <div className="glass-panel rounded-3xl p-6 md:p-10">
            <div className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Projects
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.map((project) => (
                <motion.article
                  whileHover={{ y: -6 }}
                  key={project.title}
                  className="rounded-2xl border border-slate-600/45 bg-slate-950/55 overflow-hidden"
                >
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base mb-4 text-slate-300">
                      {project.description.substring(0, 125)}...
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-lg bg-cyan-400 text-slate-950 px-4 py-2 font-medium transition-all duration-300 hover:bg-cyan-300"
                    >
                      View Demo
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="https://github.com/Marc-Munene"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-500 px-4 py-3 text-slate-100 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200"
              >
                <FaGithub size={22} />
                More on GitHub
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export { Projects };
