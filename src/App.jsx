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
      <header className="sticky top-0 z-50 shadow-xl py-2 md:py-4">
        {/* navbar */}
        <nav className="bg-gray-200 flex flex-row items-center justify-between mx-10 sm:mx-6 lg:mx-8 rounded-4xl backdrop-blur-lg">
          {/* logo */}
          <div>
            <a href="/" className="flex-shrink-0">
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

      <section id="hero">
        <div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus quae minus autem vitae, cum maiores, iusto numquam
              quidem sed unde quibusdam ex laudantium doloremque eos aut tempore
              ullam nihil non? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Soluta, at dolorum ipsum consequatur aliquam
              placeat itaque? Nesciunt placeat voluptates molestiae magnam.
              Eligendi inventore minus placeat velit et numquam eaque
              temporibus!
            </p>
          </div>
          <div>
            <img src="/src/assets/comp.jpg" alt="Computer" />
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              beatae. Ratione, quasi at dolores sequi, rem reprehenderit sunt,
              maiores beatae quia accusamus molestias vero deserunt architecto!
              Nostrum inventore debitis officia!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              beatae. Ratione, quasi at dolores sequi, rem reprehenderit sunt,
              maiores beatae quia accusamus molestias vero deserunt architecto!
              Nostrum inventore debitis officia!
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
  );
};

export { App };
