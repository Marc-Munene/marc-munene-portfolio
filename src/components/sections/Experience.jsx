import { experiences } from "../../data/experience";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <SectionHeading index="05" label="Experience" title="Where I’ve been" />
        </RevealOnScroll>
        <ol>
          {experiences.map((job, index) => (
            <li key={job.company + job.role} className="border-t border-line">
              <RevealOnScroll delay={index * 0.08}>
                <article className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                  <div className="flex items-start gap-4 md:col-span-4">
                    <img
                      src={job.logo}
                      alt=""
                      className="h-10 w-10 object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-fg">{job.company}</h3>
                      <p className="text-sm text-muted">{job.period}</p>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-serif text-2xl text-fg">{job.role}</p>
                    <p className="mt-3 max-w-2xl text-soft">{job.description}</p>
                  </div>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
