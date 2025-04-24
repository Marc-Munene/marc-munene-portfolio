// scrollAnimation.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Smooth scrolling for anchor links
export const setupSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 80,
          },
          ease: "power2.inOut",
        });
      }
    });
  });
};

export const initScrollAnimations = () => {
  useGSAP(() => {
    // Animate whole body
    gsap.from("body", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    setupSmoothScrolling();

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    ScrollTrigger.defaults({
      toggleActions: "play none none none",
      scrub: 1,
    });

    gsap.from("#hero", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#hero",
        start: "top 80%",
      },
    });

    gsap.from("#about", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    // Add this animation alongside the other section animations in initScrollAnimations()
    gsap.from("#projects", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
      },
    });

    // Add animation for project cards
    gsap.from("#projects .grid > div", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
      },
    });

    gsap.from("nav ul li", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "nav",
        start: "top 80%",
      },
    });

    gsap.from(".social-icons a", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "nav",
        start: "top 80%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
};
