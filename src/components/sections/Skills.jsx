import { skillGroups } from "../../data/experience";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <SectionHeading index="04" label="Tools" title="What I work with" />
          <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs uppercase tracking-[0.18em] text-muted">
                  {group.label}
                </h3>
                <p className="mt-4 font-serif text-2xl leading-relaxed text-fg">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
