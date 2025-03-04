import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    document.title =
      "Joseph Omondi - " + id.charAt(0).toUpperCase() + id.slice(1);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id;
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              className="text-xl font-bold text-gray-800 dark:text-white"
              href="#about"
            >
              Joseph Omondi
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="dark-mode"
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 hover:rotate-12"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="sm:hidden">
              <button
              id="light-mode"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a
              href="#about"
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 cursor-pointer dark:text-gray-300 dark:hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                About
              </a>
              <a
              href="#skills"
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-gray-900 cursor-pointer dark:text-gray-300 dark:hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                Skills
              </a>
              <a
              href="#projects"
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-gray-900 cursor-pointer dark:text-gray-300 dark:hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                Projects
              </a>
              <a
              href="#contact"
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-gray-900 cursor-pointer dark:text-gray-300 dark:hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
            href="about"
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>
            <a
            href="skills"
              onClick={() => scrollToSection("skills")}
              className="block px-3 py-2 text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Skills
            </a>
            <a
            href="projects"
              onClick={() => scrollToSection("projects")}
              className="block px-3 py-2 text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </a>
            <a
            href="contact"
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
