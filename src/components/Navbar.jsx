import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Apply theme class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-[#0F0E47]/60 shadow-sm border-b border-gray-200 dark:border-gray-700 transition">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl font-bold tracking-tight text-[#272757] dark:text-white cursor-pointer hover:text-[#8686AC] transition"
        >
          Sarbeswar<span className="text-[#8686AC]">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center text-gray-700 dark:text-gray-200">
          {["about", "skills", "projects", "education", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item)}
                className="hover:text-blue-600 dark:hover:text-[#8686AC] capitalize"
              >
                {item}
              </button>
            </li>
          ))}

          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-600">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-600">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              title="Toggle Theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
          <ul className="md:hidden bg-white/90 dark:bg-[#0F0E47]/80 backdrop-blur-md px-6 py-4 space-y-4 shadow-inner border-t border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white">
            {["about", "skills", "projects", "education", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item)}
                  className="block w-full text-left hover:text-blue-600 dark:hover:text-[#8686AC] capitalize"
                >
                  {item}
                </button>
              </li>
            ))}
        
            {/* Social Icons */}
            <li className="flex gap-6 text-xl mt-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-[#8686AC]"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-[#8686AC]"
              >
                <FaLinkedin />
              </a>
            </li>
        
            {/* Theme Toggle (Centered) */}
            <li className="pt-4 border-t border-gray-200 dark:border-gray-600 mt-4 flex justify-center">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                title="Toggle Theme"
              >
                {theme === "light" ? (
                  <>
                    <Moon size={16} /> <span className="text-sm">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun size={16} /> <span className="text-sm">Light Mode</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        )}
    </nav>
  );
};

export default Navbar;