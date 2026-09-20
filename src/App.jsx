import { useEffect } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";
import { pageProps } from "./motion";

export function App() {
  const location = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (location.hash) {
      const node = document.getElementById(location.hash.slice(1));
      if (node) {
        node.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        return;
      }
    }
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    }
  }, [location.pathname, location.hash, reduced]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Motion.div {...pageProps(reduced)}>
                  <Home />
                </Motion.div>
              }
            />
            <Route path="/work/:slug" element={<CaseStudy />} />
          </Routes>
        </AnimatePresence>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
