import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { projectData, projectFilters } from "../../data/projects";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";

export function Work() {
  const [filter, setFilter] = useState("All");
  const reduced = useReducedMotion();
  const visible =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.tags.includes(filter));

  return (
    <section id="work" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading index="03" label="Selected work" title="Things I shipped" />
            <div
              className="mb-10 flex flex-wrap gap-2 md:mb-14"
              role="group"
              aria-label="Filter projects"
            >
              {projectFilters.map((item) => {
                const active = filter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(item)}
                    className={`border px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "border-accent text-accent"
                        : "border-line text-muted hover:border-fg hover:text-fg"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        <ul className="border-t border-line">
          {visible.map((project, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <li key={project.slug} className="border-b border-line">
                <RevealOnScroll delay={index * 0.06}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group grid gap-8 py-12 md:grid-cols-12 md:py-16"
                  >
                    <Motion.div
                      className={`overflow-hidden md:col-span-7 ${
                        imageLeft ? "md:order-1" : "md:order-2"
                      }`}
                      whileHover={reduced ? undefined : { scale: 1.015 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </Motion.div>
                    <div
                      className={`flex flex-col justify-end md:col-span-5 ${
                        imageLeft ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        {project.tags.join(" · ")} · {project.year}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-fg transition-colors group-hover:text-accent md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-soft">{project.summary}</p>
                      <p className="mt-6 text-sm text-accent">Read the case →</p>
                    </div>
                  </Link>
                </RevealOnScroll>
              </li>
            );
          })}
        </ul>

        {visible.length === 0 ? (
          <p className="py-12 text-muted">Nothing in this filter yet.</p>
        ) : null}

        <p className="pt-10 text-sm text-muted">
          More on{" "}
          <a
            href="https://github.com/Marc-Munene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline decoration-line hover:text-accent hover:decoration-accent"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
