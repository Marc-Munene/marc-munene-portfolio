import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const App = () => {
  return (
    <div className="min-h-screen">
      <div>
        <header className="sticky top-0 z-50 shadow-lg py-2 md:py-4 ">
          {/* navbar */}
          <nav className=" py-2 flex flex-row items-center justify-between mx-10 sm:mx-6 lg:mx-8 rounded-4xl backdrop-blur-xl">
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

            {/* navigation links */}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-4 lg:space-x-8 text-sm sm:text-base md:text-xl lg:text-2xl">
                <li className="font-base cursor-pointer  ">
                  <a href="#about">About</a>
                </li>
                <li className="font-base cursor-pointer">
                  <a href="#projects">Projects</a>
                </li>
                <li className="font-base cursor-pointer">Profession</li>
              </ul>
            </div>

            {/* social icons - always visible */}
            <div className="flex space-x-3 lg:space-x-4 mr-3">
              <a
                href="https://github.com/Marc-Munene"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer h-5 w-5 sm:h-6 sm:w-6 " />
              </a>
              <a
                href="https://www.instagram.com/its__munene/"
                target="blank"
                rel="Instagram Icon"
              >
                <BsInstagram className="cursor-pointer h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </nav>
        </header>

        {/* hero section */}
        <section id="hero" className=" py-10 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-2xl">
              {/* image */}
              <div className="md:flex-shrink-0 ">
                <img
                  src="/marc-logo.jpg"
                  alt="Marc's logo"
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover  "
                  style={{
                    maxHeight: "calc(100vh - 200px)", // Adjust based on your header height
                  }}
                  loading="lazy"
                />
              </div>

              {/* Text content */}

              <div className="md:flex-1 ml-1 text-center md:text-left">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <span className="text-pink-500">&lt;span&gt;</span>
                  Hey, I'm Marc Munene
                  <span className="text-pink-500">&lt;/span&gt;</span>
                </p>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-semibold mt-2">
                  <span className="text-green-400">{`{Full Stack}`}</span>
                  <br className="hidden sm:block" />
                  Web Developer<span className="text-cyan-500">_</span>
                </h1>

                {/* paragraphs */}
                <p className="mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl">
                  <span className="text-pink-500">&lt;p&gt;</span> With
                  expertise in cutting-edge technologies such as{" "}
                  <span className="text-green-400">NodeJS</span>,{" "}
                  <span className="">ExpressJS</span>,{" "}
                  <span className="text-blue-500">React</span>,{" "}
                  <span className="text-yellow-500">Python</span>,{" "}
                  <span className="text-blue-600">Typescript</span>, and{" "}
                  <span className="text-green-400">MongoDB</span>... I deliver
                  web solutions that are both innovative and robust.{" "}
                  <span className="text-pink-500">&lt;/p&gt;</span>
                </p>

                <div className="mt-6 mb-6">
                  <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer transition-all duration-300">
                    Contact Me?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className=" py-8 md:py-12">
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

        <section>
          <div>
            <h1>Personal projects</h1>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export { App };
