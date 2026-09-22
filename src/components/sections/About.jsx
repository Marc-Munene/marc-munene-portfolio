import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";

const FACTS = [
  { label: "Based", value: "Nairobi, Kenya" },
  { label: "Focus", value: "End-to-end web products, from idea to deploy" },
  { label: "Stack", value: "MERN, Angular, TypeScript, FastAPI, SQL" },
];

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <SectionHeading index="02" label="About" />
        </RevealOnScroll>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <RevealOnScroll>
              <p className="border-l-2 border-accent pl-5 font-serif text-3xl leading-snug text-fg md:text-4xl">
                I take an ambiguous brief and turn it into software people can
                use in production.
              </p>
              <p className="mt-8 max-w-xl text-soft">
                I’m a self-driven developer in Nairobi. At Innovex I rebuild
                enterprise insurance tooling. On my own time I ship full-cycle
                apps with React or Angular on the front, Node or FastAPI on the
                back, Docker and CI/CD so it stays up.
              </p>
              <p className="mt-4 max-w-xl text-soft">
                I care about performance, architecture that doesn’t surprise you
                at 2am, and code other people can maintain. That’s the work.
              </p>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-5">
            <RevealOnScroll delay={0.12}>
              <dl className="divide-y divide-line border-t border-line">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="py-5">
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="mt-1.5 text-fg">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
