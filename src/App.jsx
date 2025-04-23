import { LuInstagram } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const App = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 shadow-lg bg-bckg py-4">
        {/* navbar */}
        <nav className="flex flex-row items-center justify-between mx-6 rounded-4xl backdrop-blur-lg">
          {/* logo */}
          <div>
            <a href="/">
              <img
                src="/munene.dev2.png"
                alt="logo"
                className="h-auto w-[30%] rounded"
              />
            </a>
          </div>

          {/* navigation links */}
          <div className="md:flex-row flex-grow justify-center">
            <ul className="flex space-x-8 sm:text-sm md:text-2xl lg:text-3xl">
              <li className="  font-base cursor-pointer ">
                <a href="#about">About</a>
              </li>
              <li className="  font-base cursor-pointer ">
                <a href="#projects">Projects</a>
              </li>
              <li className="  font-base cursor-pointer ">Profession</li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Marc-Munene" target="blank">
              <FaGithub size={24} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/its__munene/" target="blank">
              <BsInstagram size={24} className="cursor-pointer mr-3" />
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
