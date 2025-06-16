import { IoIosContact } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import BlurText from "./BlurText/BlurText";

const Sections = () => {
  return (
    <>
      <section id="hero" className=" md:py-8">
        <div className="mx-auto max-w-6xl py-8 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 xl:gap-10">
            {/* Image - Optimized for laptop screens */}
            <div className="w-full md:w-5/12 lg:w-8/12 xl:w-4/12 flex-shrink-0">
              <img
                src="/marc-logo.jpg"
                alt="Marc's logo"
                className="rounded-lg shadow-xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-cover mx-auto md:mx-0"
                loading="eager"
              />
            </div>

            {/* Content - Adjusted for perfect laptop fit */}
            <div className="w-full md:w-7/12 lg:w-7/12 xl:w-8/12 text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl mb-2 md:mb-3">
                <span className="text-pink-500">&lt;span&gt;</span>
                Hey, I'm Marc Munene
                <span className="text-pink-500">&lt;/span&gt;</span>
              </p>

              <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-mono font-semibold leading-tight flex flex-wrap gap-2">
                <BlurText
                  text="{Full Stack}"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-green-400"
                ></BlurText>

                <BlurText
                  text="Web Developer"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="block sm:inline"
                ></BlurText>
              </div>

              <p className="mt-3 sm:mt-4 md:mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                <span className="text-pink-500">&lt;p&gt;</span> With expertise
                in developing software with the <span>MERN Stack -</span>{" "}
                <span className="text-green-800">MongoDB</span>,{" "}
                <span> Express.js</span>,{" "}
                <span className="text-blue-500">React</span>,{" "}
                <span className="text-green-400">Node.js</span>.{" "}
                <span>Additionally, selft taught</span>{" "}
                <span className="text-yellow-500">Python</span>,{" "}
                <span className="text-blue-600">TypeScript</span>, and{" "}
                <span>Next.js</span>... I deliver innovative and robust web
                solutions.
                <span className="text-pink-500">&lt;/p&gt;</span>
              </p>

              <div className="mt-5 sm:mt-6 md:mt-6">
                <a
                  href="#contact"
                  className="inline-block border  hover:bg-gray-100  px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 text-sm sm:text-base md:text-base rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  <span className="flex items-center gap-3">
                    <IoIosContact size={24} /> Get in Touch
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="  md:py-10 ">
        <div className="mx-auto max-w-6xl py-8 px-4 ">
          <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
            {/* section title */}
            <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center">
              <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-300 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                About Me
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
                  Full-stack developer by day, debugger by night, and caffeine
                  enthusiast 24/7. I build things that work (most of the time)
                  and laugh at my own bugs (after fixing them). Let us create
                  something awesome—preferably with fewer merge conflicts.
                </p>
              </div>

              {/* Image */}
              <div className="md:flex-shrink-0">
                <img
                  src="/coding-.png"
                  alt="Coding workspace"
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto object-cover border-4 border-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work experience section */}
      <section id="work-experience" className=" md:py-10">
        <div className="mx-auto  py-8 px-4 max-w-6xl">
          <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
            {/* section title */}
            <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center mb-5">
              <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-200 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                Work Experience
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
              <div className="mb-10">
                <p className="font-bold text-xl leading-normal mb-3">
                  Work Experience
                </p>

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
                        I contributed to the design, development, and testing of
                        web-based applications by writing clean, efficient, and
                        maintainable code. I collaborated with senior developers
                        to troubleshoot issues, implement new features, and
                        enhance existing systems using modern development tools
                        and frameworks. I also participated in code reviews,
                        team meetings, and agile workflows, gaining hands-on
                        experience in full-stack development. Additionally, I
                        supported documentation efforts and assisted in
                        optimizing application performance to improve user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="  md:py-10">
        <div className="mx-auto  py-8 px-4 max-w-6xl">
          <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
            {/* section title */}
            <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center mb-5">
              <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-200 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                Projects
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-7xl">
              {/* Classify */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="/class-space.png"
                    alt="Classify"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Class-Space
                  </h3>
                  <p className="0 text-sm md:text-base mb-4">
                    Class-Space is an intelligent web application designed to
                    help students and class representatives easily locate and
                    book vacant classrooms in real-time. It aims to eliminate
                    the hassle of manual room allocation and prevent double
                    bookings, making room management more efficient and
                    organized.
                  </p>
                  <div className="flex justify-end">
                    <a href="https://class-space.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Kladi */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="KLADI.png"
                    alt="Kladi-outfits"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Kladi Outfits
                  </h3>
                  <p className=" text-sm md:text-base mb-4">
                    A full-featured e-commerce platform with real-time inventory
                    management, payment processing, and admin dashboard.
                  </p>
                  <div className="flex justify-end">
                    <a href="https://kladi-outfits.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="/cema.png"
                    alt="Hangover football website"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800  mb-2">
                    CEMA Health Program
                  </h3>
                  <p className=" text-sm md:text-base mb-4">
                    A health program designed to add health programs by doctors,
                    register patients and enroll them in different programs.
                  </p>
                  <div className="flex justify-end">
                    <a href="https://cema-health.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20  flex justify-center ">
              <a href="https://github.com/Marc-Munene">
                <button className="flex items-center border py-2 px-3 shadow-xl rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] ">
                  <span>
                    <FaGithub size={24} className="mr-2" />
                  </span>
                  More on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Sections };
