import { LuInstagram } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <img src="/public/munene.dev2.png" alt="logo" />
          </div>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Experience</li>
          </ul>
          <div>
            <LuInstagram />
            <FaGithub />
          </div>
        </nav>
        About Projects
      </header>

      <section id="hero">
        <div>
          <div>
            <img src="/src/assets/comp.jpg" alt="Computer" />
          </div>
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
        </div>
      </section>
    </div>
  );
};

export { App };
