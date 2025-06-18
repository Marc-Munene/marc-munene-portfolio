import { FaGithub } from "react-icons/fa";

const Sections = () => {
  return (
    <>
      {/* about section */}
      

      {/* Work experience section */}
      

      {/* Projects */}
      <section id="projects" className="  md:py-10">
        <div className="mx-auto  py-8 px-4 max-w-6xl">
          <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12 ">
            {/* section title */}
            <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center mb-5">
              <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-200 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                Projects
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-7xl">
              {/* Class-Space */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="/class-space.png"
                    alt="Classify"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Class-Space
                  </h3>
                  <p className="0 text-sm md:text-base mb-4">
                    Class-Space is an intelligent web application designed to
                    help students and class representatives easily locate and
                    book vacant classrooms in real-time. It aims to eliminate
                    the hassle of manual room allocation and prevent double
                    bookings, making room management more efficient and
                    organized.
                  </p>
                  <div className="flex justify-end">
                    <a href="https://class-space.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Chama */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="/chama.png"
                    alt="Chama app"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Chama
                  </h3>
                  <p className="0 text-sm md:text-base mb-4">
                    Chama is a web-based platform designed to simplify and
                    streamline group contributions and savings. Built with a
                    user-friendly interface, it allows members to securely
                    contribute funds, track group balances, view transaction
                    history, and manage group goals in real-time. The system
                    promotes transparency and accountability, making it ideal
                    for community savings groups, investment clubs, and informal
                    cooperative societies.
                  </p>
                  <div className="flex justify-end">
                    <a href="http://chama-blue.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Kladi */}
              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="KLADI.png"
                    alt="Kladi-outfits"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    Kladi Outfits
                  </h3>
                  <p className=" text-sm md:text-base mb-4">
                    A full-featured e-commerce platform with real-time inventory
                    management, payment processing, and admin dashboard.
                  </p>
                  <div className="flex justify-end">
                    <a href="https://kladi-outfits.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover"
                    src="/cema.png"
                    alt="Hangover football website"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800  mb-2">
                    CEMA Health Program
                  </h3>
                  <p className=" text-sm md:text-base mb-4">
                    A health program designed to add health programs by doctors,
                    register patients and enroll them in different programs.
                  </p>
                  <div className="flex justify-end">
                    <a href="https://cema-health.vercel.app/" target="blank">
                      <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                        View Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20  flex justify-center ">
              <a href="https://github.com/Marc-Munene">
                <button className="flex items-center border py-2 px-3 shadow-xl rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] ">
                  <span>
                    <FaGithub size={24} className="mr-2" />
                  </span>
                  More on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Sections };
