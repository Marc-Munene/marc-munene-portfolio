import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <RevealOnScroll>
            <SectionHeading index="02" label="About" />
            <p className="font-serif text-3xl leading-snug text-fg md:text-4xl">
              I take a messy brief and turn it into software people can use in
              production.
            </p>
            <p className="mt-6 max-w-xl text-soft">
              I’m a self-driven developer in Nairobi. At Innovex I rebuild
              enterprise insurance tooling. On my own time I ship full-cycle
              apps — React or Angular on the front, Node or FastAPI on the
              back, Docker and CI/CD so it stays up.
            </p>
            <p className="mt-4 max-w-xl text-soft">
              I care about performance, architecture that doesn’t surprise you
              at 2am, and code other people can maintain. That’s the work.
            </p>
          </RevealOnScroll>
        </div>
        <div className="md:col-span-5 md:pt-24">
          <RevealOnScroll delay={0.12}>
            <dl className="space-y-8 border-t border-line pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Based
                </dt>
                <dd className="mt-2 text-fg">Nairobi, Kenya</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Focus
                </dt>
                <dd className="mt-2 text-fg">
                  End-to-end web products, from idea to deploy
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                  Stack
                </dt>
                <dd className="mt-2 text-fg">
                  MERN, Angular, TypeScript, FastAPI, SQL
                </dd>
              </div>
            </dl>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
