import { LuInstagram } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen">
      <div>
        <header className="sticky top-0 z-50 shadow-xl py-2 md:py-4">
          {/* navbar */}
          <nav className="bg-gray-200 py-1 flex flex-row items-center justify-between mx-10 sm:mx-6 lg:mx-8 rounded-4xl backdrop-blur-lg">
            {/* logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src="/munene.dev2.png"
                  alt="logo"
                  className="h-10 w-auto ml-3 md:h-16 lg:h-20 rounded"
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
          <div className="mx-auto max-w-7xl">
            <div className="flex py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-2xl">
              {/* image */}
              <div className="md:flex-shrink-0 ">
                <img
                  src="/_A647239_resized.jpg"
                  alt="Marc's profile"
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  h-auto object-cover ml-5 "
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
                  Hey, I'm Marc
                  <span className="text-pink-500">&lt;/span&gt;</span>
                </p>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-semibold mt-2">
                  <span className="text-green-400">{`{Full Stack}`}</span>
                  <br className="hidden sm:block" />
                  Web Developer<span className="text-cyan-500">_</span>
                </h1>

                {/* paragraphs */}
                <p className="mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-400">
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

        <section id="about">
          <div>
            <h1>About Me</h1>
          </div>
          <div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, beatae. Ratione, quasi at dolores sequi, rem
                reprehenderit sunt, maiores beatae quia accusamus molestias vero
                deserunt architecto! Nostrum inventore debitis officia!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, beatae. Ratione, quasi at dolores sequi, rem
                reprehenderit sunt, maiores beatae quia accusamus molestias vero
                deserunt architecto! Nostrum inventore debitis officia!
              </p>
            </div>
            <div>skills goes here</div>
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
