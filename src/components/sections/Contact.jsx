import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/marcmunene104@gmail.com";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) {
        throw new Error("Could not send. Email me directly instead.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <RevealOnScroll>
            <SectionHeading index="06" label="Contact" title="Let’s talk" />
            <p className="max-w-sm text-soft">
              New product, a rebuild, or a team that needs another pair of
              hands on the stack — write me.
            </p>
            <address className="mt-8 not-italic text-fg">
              <a
                href="mailto:marcmunene104@gmail.com"
                className="block text-lg underline decoration-line hover:text-accent hover:decoration-accent"
              >
                marcmunene104@gmail.com
              </a>
              <a
                href="tel:+254745851127"
                className="mt-2 block text-soft hover:text-accent"
              >
                +254 745 851 127
              </a>
              <p className="mt-2 text-muted">Nairobi, Kenya</p>
            </address>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Marc-Munene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft underline decoration-line hover:text-accent hover:decoration-accent"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marc-munene-628a43362/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft underline decoration-line hover:text-accent hover:decoration-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/its__munene/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft underline decoration-line hover:text-accent hover:decoration-accent"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </RevealOnScroll>
        </div>

        <div className="md:col-span-7 md:pt-16">
          <RevealOnScroll delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <input type="hidden" name="_subject" value="Portfolio contact" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-[0.16em] text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-b border-line bg-transparent py-2 text-fg outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.16em] text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full border-b border-line bg-transparent py-2 text-fg outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y border-b border-line bg-transparent py-2 text-fg outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-accent px-5 py-3 text-sm font-medium text-[#edeae4] transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "sent" ? (
                <p className="text-sm text-fg" role="status">
                  Sent. I’ll get back to you.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-accent" role="alert">
                  {error}{" "}
                  <a href="mailto:marcmunene104@gmail.com" className="underline">
                    marcmunene104@gmail.com
                  </a>
                </p>
              ) : null}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
