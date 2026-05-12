import { RevealOnScroll } from "./RevealOnScroll";

const experiences = [
  {
    company: "Innovex",
    logo: "/innovex-logo.jpg",
    role: "Full Stack Software Developer",
    // period: "Sep 2024 - Present",
    description:
      "Led end-to-end redevelopment of a nationwide enterprise sales portal for Sanlam Allianz Kenya using Angular, TypeScript, FastAPI, Docker, and Azure CI/CD, focusing on scale, security, and production reliability.",
  },
  {
    company: "Munene.Dev",
    logo: "/marc-logo.jpg",
    role: "Founder & CEO",
    // period: "Aug 2024 - Present",
    description:
      "Built and run a full-cycle freelance development platform delivering modern web applications from requirement mapping to production deployment, powered by scalable MERN-based architecture.",
  },
  {
    company: "Usalama",
    logo: "/usalama.jpg",
    role: "Junior Software Developer Intern",
    // period: "Feb 2024 - Aug 2024",
    description:
      "Contributed to building and testing web applications, implemented new features with senior engineers, and improved performance through practical full-stack and agile collaboration experience.",
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-10 md:py-14">
      <RevealOnScroll delay={0.08}>
        <div className="mx-auto px-4 max-w-6xl">
          <div className="glass-panel rounded-3xl p-6 md:p-10">
            <div className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Work Experience
            </div>

            <div className="mt-6 space-y-5">
              {experiences.map((experience) => (
                <article
                  key={experience.company + experience.role}
                  className="rounded-2xl border border-slate-600/45 bg-slate-900/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60"
                >
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full border border-slate-500 object-cover object-center"
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-semibold text-base text-slate-100">
                          {experience.role}
                        </h3>
                        <p className="text-sm text-slate-400">{experience.period}</p>
                      </div>
                      <p className="mt-3 text-slate-300 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export { WorkExperience };
