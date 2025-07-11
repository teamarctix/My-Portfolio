import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll + update URL
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu if open
  };

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/60 shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => handleScroll("home")}
          className="text-2xl font-bold tracking-tight text-[#272757] cursor-pointer hover:text-[#8686AC] transition"
        >
          Sarbeswar<span className="text-[#8686AC]">.dev</span>
        </h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 items-center">
          {["about", "skills", "projects", "education", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item)}
                className="hover:text-blue-600 capitalize"
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
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
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
        <ul className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 space-y-3 shadow-inner border-t border-gray-200">
          {["about", "skills", "projects", "education", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item)}
                className="block w-full text-left text-gray-800 hover:text-gray-600 capitalize"
              >
                {item}
              </button>
            </li>
          ))}
          <li className="flex gap-6 text-xl mt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-blue-600">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-blue-600">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
