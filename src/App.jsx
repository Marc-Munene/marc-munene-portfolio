import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { initScrollAnimations } from "./animations/scrollAmination";

const App = () => {
  initScrollAnimations();

  return (
    <div className="min-h-screen">
      <div>
        <header className="sticky top-0 z-50 shadow-lg py-2 md:py-4 mx-auto max-w-7xl rounded-full">
          <nav className="py-2 flex flex-row items-center justify-between mx-10 sm:mx-6 lg:mx-8 rounded-4xl backdrop-blur-3xl">
            {/* logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src="/marc.png"
                  alt="logo"
                  className="h-10 w-auto ml-3 md:h-13 g:h-20 rounded"
                />
              </a>
            </div>

            {/*Navigatioon Links  */}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-4 lg:space-x-8 text-sm sm:text-base md:text-xl lg:text-2xl">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Icons */}
            <div className="flex space-x-3 lg:space-x-4 mr-3 social-icons">
              <a
                href="https://github.com/Marc-Munene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.instagram.com/its__munene/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="cursor-pointer h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </nav>
        </header>

        {/* Hero section */}
        <section id="hero" className="py-10 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-2xl">
              <div className="md:flex-shrink-0">
                <img
                  src="/marc-logo.jpg"
                  alt="Marc's logo"
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="md:flex-1 ml-1 text-center md:text-left">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <span className="text-pink-500">&lt;span&gt;</span>
                  Hey, I'm Marc Munene
                  <span className="text-pink-500">&lt;/span&gt;</span>
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-semibold mt-2">
                  <span className="text-green-400">{`{Full Stack}`}</span>
                  <br className="hidden sm:block" />
                  Web Developer<span className="text-cyan-500">_</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl">
                  <span className="text-pink-500">&lt;p&gt;</span> With
                  expertise in <span className="text-green-400">NodeJS</span>,
                  <span> ExpressJS</span>,{" "}
                  <span className="text-blue-500">React</span>,
                  <span className="text-yellow-500"> Python</span>,
                  <span className="text-blue-600"> Typescript</span>, and
                  <span className="text-green-400"> MongoDB</span>... I deliver
                  innovative and robust web solutions.
                  <span className="text-pink-500">&lt;/p&gt;</span>
                </p>
                <div className="mt-6 mb-3">
                  <a
                    href="#contact"
                    className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer transition-all duration-300"
                  >
                    Contact Me?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
              {/* section title */}
              <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center">
                <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-200 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
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
                    src="/coding.png"
                    alt="Coding workspace"
                    className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto object-cover border-4 border-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8 md:py-12">
          <div className="mx-auto max-w-6xl">
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
                      src="/Classify.png"
                      alt="Classify"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Classify
                    </h3>
                    <p className="0 text-sm md:text-base mb-4">
                      A web app meant for students to search for a vacant class
                      to occupy, during a session or exams
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="https://classify-project.vercel.app/"
                        target="blank"
                      >
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
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Kladi Outfits
                    </h3>
                    <p className=" text-sm md:text-base mb-4">
                      A full-featured e-commerce platform with real-time
                      inventory management, payment processing, and admin
                      dashboard.
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="https://kladi-outfits.vercel.app/"
                        target="blank"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/*Hangover football  */}

                <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full h-48 md:h-56 object-cover"
                      src="/hangover.png"
                      alt="Hangover football website"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Hangover Football Academy
                    </h3>
                    <p className=" text-sm md:text-base mb-4">
                      A football club website, entailing every detail of the
                      club, from the partnersgym, field and partners.
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="https://hangover-football-club.vercel.app/"
                        target="blank"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-8 md:py-12">
          ...
        </section>
      </div>
    </div>
  );
};

export { App };
