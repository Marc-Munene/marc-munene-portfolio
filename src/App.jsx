import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Sections/Footer";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { WorkExperience } from "./components/Sections/WorkExperience";
import { Projects } from "./components/Sections/projects";
import { ScrollToTop } from "./components/ScrollToTop";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-20"></div>
      <motion.div
        className="pointer-events-none absolute -top-24 -left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export { App };
