import { skillsData } from "../constants/skills";

const Skills = () => (
  <section
    id="skills"
    className="relative py-16 px-6 max-w-6xl mx-auto bg-white text-[#272757] overflow-hidden"
  >
    {/* Subtle Grid Background */}
    <div
      className="absolute inset-0 pointer-events-none opacity-10 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "16px 16px",
      }}
    ></div>

    <h2 className="text-3xl font-bold text-center mb-12 relative z-10">
      Skills
    </h2>

    <div className="grid md:grid-cols-2 gap-8 relative z-10">
      {skillsData.map((category, i) => (
        <div
          key={i}
          data-aos="fade-up"
          className="bg-[#F8F8FC] border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#505081]">
            {category.title}
          </h3>
          <ul className="space-y-4">
            {category.skills.map(({ name, icon: Icon, level }, j) => (
              <li key={j}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Icon className="text-xl text-[#8686AC]" />
                    <span className="font-medium text-sm">{name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{level}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-[#505081] transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
