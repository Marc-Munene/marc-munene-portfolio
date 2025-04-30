import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
// import { initScrollAnimations } from "./animations/scrollAmination";

const App = () => {
  // initScrollAnimations();

  return (
    <div className="min-h-screen">
      <div>
        <header className="sticky top-0 z-50  py-2 md:py-4 mx-auto max-w-6xl ">
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
                  <a href="#work-experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
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
        <section id="hero" className="  md:py-8">
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

                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-mono font-semibold leading-tight">
                  <span className="text-green-400">{`{Full Stack}`}</span>{" "}
                  <span className="block sm:inline">Web Developer</span>
                  <span className="text-cyan-500">_</span>
                </h1>

                <p className="mt-3 sm:mt-4 md:mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  <span className="text-pink-500">&lt;p&gt;</span> With
                  expertise in developing software with the{" "}
                  <span>MERN Stack -</span>{" "}
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
        <section id="about" className="  md:py-10">
          <div className="mx-auto max-w-6xl py-8 px-4 ">
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

        <section id="work-experience" className="  md:py-10">
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
                      src="/Classify.png"
                      alt="Classify"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
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
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
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
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
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
                      A health program designed to add health programs by
                      doctors, register patients and enroll them in different
                      programs.
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
              <div className="mt-5  flex justify-center ">
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

        {/* Footer */}

        <footer
          id="contact"
          className=" py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Get In Touch
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:marcmunene104@gmail.com"
                      className=" hover:text-cyan-500 transition-colors"
                    >
                      marcmunene104@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5  mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="">
                      +254 745 851 127
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5  mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="">
                      Nairobi, Kenya
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className=" hover:text-cyan-500 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work-experience"
                      className=" hover:text-cyan-500 transition-colors"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className=" hover:text-cyan-500 transition-colors"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className=" hover:text-cyan-500 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Marc-Munene"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  "
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/its__munene/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-pink-600 transition-colors"
                  >
                    <BsInstagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-400 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>

                {/* Contact Form Button */}
                <div className="pt-4">
                  <a
                    href="mailto:marcmunene104@gmail.com"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
                  >
                    <IoIosContact className="mr-2" size={18} />
                    Send me a message
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className=" text-sm">
                &copy; {new Date().getFullYear()} Marc Munene. All rights
                reserved.
              </p>
              
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { App };
