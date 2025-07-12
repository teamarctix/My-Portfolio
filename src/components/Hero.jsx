import ReactTypingEffect from "react-typing-effect";
import profileImg from "../assets/profile.png";

const Hero = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 pt-12 pb-10 md:pt-32 md:pb-24 bg-white dark:bg-[#0F0E47] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* ✅ SVG Grid Background (16px spacing) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H0V16' stroke='%23999' stroke-width='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "16px 16px",
          opacity: 0.25,
        }}
      ></div>

      {/* Left Content */}
      <div className="z-10 w-full md:w-1/2 text-center md:text-left space-y-6 relative">
        <div id="about" className="absolute -top-24"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#272757] dark:text-white">
          Hi, I'm Sarbeswar 👨‍💻
        </h1>

        <ReactTypingEffect
          text={[
            "Crafting Clean Code",
            "Building Full-Stack Apps",
            "Learning. Creating. Evolving.",
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          className="text-xl md:text-2xl font-medium text-[#505081] dark:text-[#8686AC]"
        />

        <p className="text-[#505081] dark:text-gray-300 text-base md:text-lg leading-relaxed">
          I'm a dedicated full-stack developer who loves turning ideas into impactful digital
          solutions. With expertise in <strong>Python</strong>, <strong>Django</strong>, and{" "}
          <strong>React</strong>, I build web applications that are both functional and
          user-friendly. I'm constantly exploring new technologies and improving my craft to
          stay ahead in this fast-paced world of tech.
        </p>

        <div className="space-x-4 mt-4">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/13-IuJEdDjS86dF_l9qK6Ym26ROWM7e6H/view?usp=sharing",
                "_blank"
              )
            }
            className="bg-gray-900 dark:bg-white text-white dark:text-[#0F0E47] px-5 py-2 rounded-lg shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Download Resume
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="border border-gray-800 dark:border-white text-gray-800 dark:text-white px-5 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
        <img
          src={profileImg}
          alt="profile"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-md border-4 border-gray-200 dark:border-[#272757]"
        />
      </div>
    </section>
  );
};

export default Hero;
