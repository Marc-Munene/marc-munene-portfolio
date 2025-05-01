import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Sections } from "./components/Sections";
import { initScrollAnimations } from "./animations/scrollAmination";

const App = () => {
  initScrollAnimations();

  return (
    <div className="min-h-screen">
      <div>
        <NavBar />

        <Sections />

        <Footer />
      </div>
    </div>
  );
};

export { App };
