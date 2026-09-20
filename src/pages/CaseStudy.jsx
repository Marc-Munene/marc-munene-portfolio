import { Link, Navigate, useParams } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { getAdjacentProjects, getProject } from "../data/projects";
import { pageProps } from "../motion";

export function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const { prev, next } = getAdjacentProjects(slug);
  const reduced = useReducedMotion();

  if (!project) {
    return <Navigate to="/#work" replace />;
  }

  return (
    <Motion.article {...pageProps(reduced)} className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <Link
          to="/#work"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          ← All work
        </Link>
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted">
          {project.role} · {project.year}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] text-fg md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-soft md:text-xl">{project.lead}</p>
        <dl className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">Stack</dt>
            <dd className="mt-2 text-fg">{project.stack.join(" · ")}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">Type</dt>
            <dd className="mt-2 text-fg">{project.tags.join(" · ")}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-muted">Live</dt>
            <dd className="mt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/40 hover:decoration-accent"
              >
                Open site
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <img
        src={project.image}
        alt={`${project.title} product screenshot`}
        className="max-h-[70vh] w-full object-cover object-top"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <section className="md:col-span-7">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">What it is</h2>
          <p className="mt-4 font-serif text-2xl leading-snug text-fg">{project.what}</p>
        </section>
        <section className="md:col-span-8 md:col-start-1">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">What I did</h2>
          <p className="mt-4 max-w-2xl text-soft">{project.did}</p>
        </section>
        <section className="md:col-span-8">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Outcome</h2>
          <p className="mt-4 max-w-2xl text-soft">{project.outcome}</p>
        </section>
      </div>

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-t border-line px-5 py-10 md:px-8"
        aria-label="Adjacent projects"
      >
        {prev ? (
          <Link to={`/work/${prev.slug}`} className="group max-w-[45%]">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Previous</p>
            <p className="mt-1 font-serif text-xl text-fg group-hover:text-accent">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/work/${next.slug}`} className="group max-w-[45%] text-right">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Next</p>
            <p className="mt-1 font-serif text-xl text-fg group-hover:text-accent">
              {next.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </Motion.article>
  );
}
