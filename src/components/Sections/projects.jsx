import { FaGithub } from "react-icons/fa";
import { projectData } from "../../../projects";

const Projects = () => {
  return (
    <>
      <section id="projects" className="  md:py-10">
        <div className="mx-auto  py-8 px-4 max-w-6xl">
          <div className="py-4 px-6 flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* section title */}
            <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start items-center mb-5">
              <h1 className="border-transparent py-1 px-2 rounded-md bg-gray-200 text-sm sm:text-base md:text-lg lg:text-xl w-auto sm:w-[8%] min-w-max">
                Projects
              </h1>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-7xl ">
              {projectData.map((project, index) => (
                <div
                  key={index}
                  className=" rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 md:h-56 object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base mb-4">
                      {project.description.substring(0, 120)}...
                    </p>
                    <div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* GitHub CTA */}
            <div className="mt-20 flex justify-center">
              <a
                href="https://github.com/Marc-Munene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center border py-2 px-3 shadow-xl rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]">
                  <FaGithub size={24} className="mr-2" />
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

export { Projects };
