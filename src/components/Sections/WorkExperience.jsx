import { RevealOnScroll } from "./RevealOnScroll";

const WorkExperience = () => {
  return (
    <>
      <section id="work-experience" className=" md:py-10">
        <RevealOnScroll>
          <div className="mx-auto  py-8 px-4 max-w-6xl">
            <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
              {/* section title */}
              <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center mb-5">
                <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-200 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                  Work Experience
                </h1>
              </div>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex select-none">
                  {/* Company Logo */}
                  <div className="flex-none">
                    <img
                      className="w-12 h-12 rounded-full border-2 border-gray-300"
                      src="/marc-logo.jpg"
                      alt="Munene.dev Logo"
                    />
                  </div>

                  {/* Text Info */}
                  <div className="flex-grow ml-4 flex flex-col cursor-pointer mb-1">
                    <div className="flex flex-col">
                      <div className="w-full flex justify-between">
                        <p className="font-semibold text-xs sm:text-sm text-black">
                          Founder & CEO - Munene.Dev
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                          Aug 2024 -
                        </p>
                      </div>
                    </div>

                    <p className="mt-2 text-base sm:text-lg ">
                      Munene.Dev is a full-cycle, freelance development platform
                      engineered to architect and deploy modern, responsive web
                      applications tailored to specific client needs. From
                      requirements parsing and feature mapping to live
                      production deployment, the system handles the entire
                      development pipeline with precision and agility. Powered
                      by the MERN Stack core (MongoDB, Express.js, React.js,
                      Node.js), Munene.Dev delivers scalable, efficient web
                      solutions enhanced with high-performance UI/UX rendering
                      and seamless interactivity protocols. Whether you’re
                      launching a startup module or optimizing a legacy system,
                      Munene.Dev adapts, integrates, and evolves—on demand.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
                <div className="mb-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex select-none">
                      {/* Company Logo */}
                      <div className="flex-none">
                        <img
                          className="w-12 h-12 rounded-full border-2 border-gray-300"
                          src="/usalama.jpg"
                          alt="Usalama Logo"
                        />
                      </div>

                      {/* Text Info */}
                      <div className="flex-grow ml-4 flex flex-col cursor-pointer">
                        <div className="flex flex-col">
                          <div className="w-full flex justify-between">
                            <p className="font-semibold text-xs sm:text-sm text-black">
                              Junior Software Developer Intern
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                              Feb 2024 - Aug 2024
                            </p>
                          </div>
                        </div>

                        <p className="mt-2 text-base sm:text-lg ">
                          I contributed to the design, development, and testing
                          of web-based applications by writing clean, efficient,
                          and maintainable code. I collaborated with senior
                          developers to troubleshoot issues, implement new
                          features, and enhance existing systems using modern
                          development tools and frameworks. I also participated
                          in code reviews, team meetings, and agile workflows,
                          gaining hands-on experience in full-stack development.
                          Additionally, I supported documentation efforts and
                          assisted in optimizing application performance to
                          improve user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export { WorkExperience };
