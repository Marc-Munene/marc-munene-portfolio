import { RevealOnScroll } from "./RevealOnScroll";

const About = () => {
  return (
    <>
      <section id="about" className="  md:py-10 ">
        <RevealOnScroll>
          <div className="mx-auto max-w-6xl py-8 px-4 ">
            <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
              {/* section title */}
              <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center">
                <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-300 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                  About Us
                </h1>
              </div>

              {/* content container */}
              <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10 ">
                {/* Text Content */}
                <div className="md:flex-1 text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                    Crafting clean code & building seamless experiences.
                  </p>
                  <p className=" text-base sm:text-lg leading-relaxed">
                    Optimized for daytime deployment and night time debugging
                    cycles, Munene.Dev is a caffeine-fueled, full-stack
                    development system engineered to build, break, and
                    beautifully rebuild digital solutions. Featuring
                    high-performance logic processors, a resilient error
                    recovery module (with a good sense of humor), and a strong
                    preference for low merge conflict environments. Let’s
                    compile creativity, ship clean code, and debug
                    reality together.
                  </p>
                  <div className="mt-5">
                    <p className="text-base sm:text-lg leading-relaxed">
                      <span className="text-xl font-bold">
                        What we Deliver:
                      </span>{" "}
                      <br />✔ Robust Web Applications – From concept to
                      deployment <br /> ✔ Optimized Performance – Fast,
                      responsive, and scalable solutions <br />✔ Clean &
                      Maintainable Code – Following best practices and industry
                      standards <br /> ✔ Innovative Problem-Solving – Turning
                      complex challenges into elegant solutions Let’s build
                      something amazing.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="md:flex-shrink-0">
                  <img
                    src="/about-munene.jpg"
                    alt="Coding workspace"
                    className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto object-cover border-4 border-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export { About };
