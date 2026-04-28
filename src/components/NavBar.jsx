import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const location = useLocation();
  const isActive = (hash) => location.hash === hash;
  const navItems = [
    { to: "#about", label: "About" },
    { to: "#work-experience", label: "Experience" },
    { to: "#projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-6xl pt-4">
      <nav className="glass-panel flex items-center justify-between mx-4 sm:mx-6 lg:mx-8 xl:mx-auto max-w-6xl rounded-full px-3 py-3">
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/marc.png"
              alt="logo"
              className="h-10 w-auto ml-3 rounded-md"
            />
          </a>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <HashLink
                  smooth
                  to={item.to}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    isActive(item.to)
                      ? "bg-cyan-400/20 text-cyan-300 shadow-lg"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-3 lg:space-x-4 mr-3">
          <motion.a
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Marc-Munene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-white"
          >
            <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/its__munene/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-pink-300"
          >
            <BsInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export { NavBar };
