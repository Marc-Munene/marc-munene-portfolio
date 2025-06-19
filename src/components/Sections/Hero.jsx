import { IoIosContact } from "react-icons/io";
import BlurText from "../BlurText/BlurText";
import TrueFocus from "../TrueFocus/TrueFocus";
import { RevealOnScroll } from "./RevealOnScroll";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen md:py-8 flex items-center justify-center"
        style={{
          backgroundImage: "url('/munene-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 backdrop-blur-sm"></div>

        {/* Main Content */}
        <RevealOnScroll>
          <div className="relative z-10 mx-auto max-w-6xl py-8 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 xl:gap-10">
              {/* Image */}
              <div className="w-full md:w-5/12 lg:w-8/12 xl:w-4/12 flex-shrink-0">
                <img
                  src="/marc-logo.jpg"
                  alt="Marc's logo"
                  className="rounded-lg shadow-xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-cover mx-auto md:mx-0"
                  loading="eager"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-7/12 lg:w-7/12 xl:w-8/12 text-center md:text-left text-white">
                <p className="text-lg flex items-center justify-center sm:text-lg md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3">
                  Hey, I'm
                  <TrueFocus
                    sentence=" Marc Munene"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="green"
                    animationDuration={1}
                    pauseBetweenAnimations={1}
                  />
                </p>

                <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-mono font-semibold leading-tight flex flex-wrap items-center justify-center md:justify-start gap-2 drop-shadow-lg">
                  <BlurText
                    text="{Full Stack}"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-green-400"
                  />
                  <BlurText
                    text="Web Developer"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="block sm:inline"
                  />
                </div>

                <p className="mt-3 sm:mt-4 md:mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-white drop-shadow-md">
                  With expertise in developing software with the MERN Stack -
                  MongoDB , Express.js, React, Node.js. Additionally,
                  self-taught Python, TypeScript, and Next.js... I deliver
                  innovative and robust web solutions.
                </p>

                <div className="mt-5 sm:mt-6 md:mt-6">
                  <a
                    href="#contact"
                    className="inline-block border bg-white text-black hover:bg-gray-200 px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 text-sm sm:text-base md:text-base rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]"
                  >
                    <span className="flex items-center gap-3">
                      <IoIosContact size={24} /> Get in Touch
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export { Hero };
