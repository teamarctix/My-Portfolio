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
      className="min-h-screen relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 pt-12 pb-10 md:pt-32 md:pb-24 bg-white text-gray-900 overflow-hidden"
    >
      {/* 🔲 Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      ></div>

      {/* Left Content (Text + About) */}
      <div className="z-10 w-full md:w-1/2 text-center md:text-left space-y-6 relative">
        {/* 🔗 Scroll Anchor for About */}
        <div id="about" className="absolute -top-24"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm Sarbeswar 👨‍💻
        </h1>

        <ReactTypingEffect
          text={[
            "Crafting Clean Code",
            "Building Full-Stack Apps",
            "Learning. Creating. Evolving."
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          className="text-xl md:text-2xl font-medium text-gray-700"
        />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
            className="bg-gray-900 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Download Resume
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="border border-gray-800 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
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
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-md border-4 border-gray-200"
        />
      </div>
    </section>
  );
};

export default Hero;