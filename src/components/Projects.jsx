import { useState, useRef, useEffect } from "react";
import { projects } from "../constants/projects";

const Projects = () => {
  const isMobile = window.innerWidth < 768;
  const initialCount = isMobile ? 3 : 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const hasMore = visibleCount < projects.length;
  const visibleProjects = projects.slice(0, visibleCount);
  const nextProject = projects[visibleCount];

  const loadMore = () => setVisibleCount(projects.length);
  const handleCardClick = (proj) => setSelectedProject(proj);
  const closeModal = () => setSelectedProject(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProject]);

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
            onClick={() => handleCardClick(proj)}
            className="cursor-pointer bg-gray-50 dark:bg-[#272757] border border-gray-200 dark:border-[#505081] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {proj.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
              {proj.description}
            </p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 italic">
              {proj.tech.join(", ")}
            </p>
          </div>
        ))}

        {/* Blurred 4th project preview on mobile */}
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white dark:bg-[#272757] max-w-lg w-full p-6 rounded-xl shadow-xl relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-[#272757] dark:text-white mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-4">
              Tech Stack: {selectedProject.tech.join(", ")}
            </p>
            <div className="flex space-x-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-[#272757] dark:text-[#8686AC] hover:opacity-80 transition"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-[#272757] dark:text-[#8686AC] hover:opacity-80 transition"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
