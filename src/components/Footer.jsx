import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll + update URL
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F8F8FC] border-t border-gray-200 text-center py-10 px-4">
      {/* Name */}
      <h2 className="text-2xl font-bold text-[#505081] mb-4">
        Sarbeswar
      </h2>

      {/* Section Links */}
      <div className="flex flex-wrap justify-center gap-6 text-[#272757] font-medium mb-6 text-sm sm:text-base">
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
      <div className="flex justify-center gap-6 text-xl text-[#272757] mb-6">
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
      <p className="text-sm text-[#505081]">
        &copy; 2025 Sarbeswar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
