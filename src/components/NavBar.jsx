import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const NavBar = () => {
  return (
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
  );
};

export { NavBar };
