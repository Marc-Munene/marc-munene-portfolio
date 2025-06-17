import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Helper function to check active hash link
  const isActive = (hash) => location.hash === hash;

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-6xl ">
      <nav className="py-2 md:py-4 flex flex-row items-center shadow-lg justify-between mx-4 sm:mx-6 lg:mx-8 xl:mx-auto max-w-6xl rounded-4xl backdrop-blur-3xl px-2 sm:px-4 bg-gray-100 ">
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

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 xl:space-x-8">
            <li>
              <HashLink
                to="#about"
                className={`flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive("#about")
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-blue-100 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`}
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  <span>About</span>
                </span>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#work-experience"
                className={`flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive("#work-experience")
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-blue-100 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`}
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  <span>Experience</span>
                </span>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#projects"
                className={`flex items-center justify-around py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 rounded-3xl transition-all duration-300 ease-in-out text-xs sm:text-sm md:text-base lg:text-xl 
                  ${
                    isActive("#projects")
                      ? "bg-blue-100 text-blue-700 scale-[1.08] shadow-2xl"
                      : "hover:backdrop-blur-lg hover:rounded-4xl hover:shadow-2xl hover:bg-blue-100 hover:px-2 sm:hover:px-3 transform transform-fill hover:scale-[1.06]"
                  }`}
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  <span>Projects</span>
                </span>
              </HashLink>
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
  );
};

export { NavBar };
