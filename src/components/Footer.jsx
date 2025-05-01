import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
const Footer = () => {
  return (
    <footer id="contact" className=" py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:marcmunene104@gmail.com"
                  className=" hover:text-cyan-500 transition-colors"
                >
                  marcmunene104@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5  mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="">+254 745 851 127</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5  mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className=" hover:text-cyan-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work-experience"
                  className=" hover:text-cyan-500 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className=" hover:text-cyan-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Marc-Munene"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer  "
              >
                <FaGithub size={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/its__munene/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-pink-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                <BsInstagram size={24} className="h-6 w-6 " />
              </a>
              <a
                href="https://www.linkedin.com/in/marc-munene-628a43362/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Contact Form Button */}
            <div className="pt-4">
              <a
                href="mailto:marcmunene104@gmail.com"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-smbg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                <IoIosContact className="mr-2" size={24} />
                Send me a message
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className=" text-sm">
            &copy; {new Date().getFullYear()} Marc Munene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
