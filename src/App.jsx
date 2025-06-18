import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

// import { Sections } from "./components/Sections";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { WorkExperience } from "./components/Sections/WorkExperience";
import { GoProjectSymlink } from "react-icons/go";
import { Projects } from "./components/Sections/projects";
// import { initScrollAnimations } from "./animations/scrollAmination";

const App = () => {
  // initScrollAnimations();

  return (
    <div className="min-h-screen">
      <div>
        <NavBar />

        {/* <Sections /> */}
        <Hero />
        <About />
        <WorkExperience />
        <Projects />

        <Footer />
      </div>
    </div>
  );
};

export { App };
