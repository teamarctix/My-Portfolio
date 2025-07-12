import { useState } from "react";
import { projects } from "../constants/projects";

const Projects = () => {
  const isMobile = window.innerWidth < 768;
  const initialCount = isMobile ? 3 : 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => setVisibleCount(projects.length);

  const visibleProjects = projects.slice(0, visibleCount);
  const nextProject = projects[visibleCount];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-[#0F0E47] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      ></div>

      <h2 className="text-3xl font-bold text-center mb-10 relative z-10 text-[#272757] dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {visibleProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-50 dark:bg-[#272757] border border-gray-200 dark:border-[#505081] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {proj.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {proj.description}
            </p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 italic">
              {proj.tech.join(", ")}
            </p>

            <div className="mt-4 flex space-x-4">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-[#272757] dark:text-[#8686AC] hover:opacity-80 transition"
              >
                Live
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-[#272757] dark:text-[#8686AC] hover:opacity-80 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}

        {/* Blurred next project preview on mobile */}
        {hasMore && isMobile && nextProject && (
          <div className="relative overflow-hidden rounded-xl border border-dashed border-gray-400 dark:border-[#505081]">
            <div className="backdrop-blur-sm bg-white/60 dark:bg-[#0f0e47]/60 absolute inset-0 z-10 flex items-center justify-center">
              <button
                onClick={loadMore}
                className="bg-[#272757] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#505081] transition"
              >
                View All Projects
              </button>
            </div>

            <div className="p-6 opacity-30 pointer-events-none select-none">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {nextProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {nextProject.description}
              </p>
              <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 italic">
                {nextProject.tech.join(", ")}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Load More button for desktop */}
      {hasMore && !isMobile && (
        <div className="flex justify-center mt-10 relative z-10">
          <button
            onClick={loadMore}
            className="bg-[#272757] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#505081] transition transform hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
