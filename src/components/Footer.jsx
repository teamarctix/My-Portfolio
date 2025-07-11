import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#F8F8FC] dark:bg-[#0F0E47] text-center px-[7vw] py-12 transition-colors duration-300 overflow-hidden">
      {/* Subtle Grid Background for Blend */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Name */}
        <h2 className="text-2xl font-bold text-[#505081] dark:text-white mb-4">Sarbeswar</h2>

        {/* Section Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[#272757] dark:text-gray-300 font-medium mb-6 text-sm sm:text-base">
          {["about", "skills", "projects", "education", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="transition hover:text-[#8686AC] capitalize"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-[#272757] dark:text-white mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8686AC] hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8686AC] hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8686AC] hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8686AC] hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8686AC] hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#505081] dark:text-gray-400">
          &copy; 2025 Sarbeswar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
