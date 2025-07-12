import { useState, useRef, useEffect } from "react";
import { education } from "../constants/education";

const Education = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const modalRef = useRef(null);

  const handleOpen = (item) => setSelectedEdu(item);
  const handleClose = () => setSelectedEdu(null);

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };
    if (selectedEdu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedEdu]);

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-20 bg-[#F8F8FC] dark:bg-[#0F0E47] text-[#272757] dark:text-white transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-16">Education</h2>

      <div className="relative border-l-4 border-[#8686AC] dark:border-[#505081] pl-6 lg:pl-12 max-w-4xl mx-auto">
        {education.map((item, index) => (
          <div key={index} className="mb-12 relative group cursor-pointer" onClick={() => handleOpen(item)}>
            {/* Timeline Dot */}
            <span className="absolute -left-4 top-1 w-4 h-4 bg-[#505081] dark:bg-[#8686AC] rounded-full border-4 border-white dark:border-[#0F0E47] shadow-md transition-transform group-hover:scale-125"></span>

            {/* Content Card */}
            <div className="bg-white dark:bg-[#272757] p-6 rounded-lg shadow-md border border-gray-200 dark:border-[#505081] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-lg font-semibold text-[#505081] dark:text-[#8686AC]">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.institution} | {item.year}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Grade: {item.grade}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 mt-3 line-clamp-2">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full Education Detail */}
      {selectedEdu && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white dark:bg-[#272757] max-w-lg w-full p-6 rounded-xl shadow-xl relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-[#505081] dark:text-[#8686AC] mb-2">
              {selectedEdu.degree}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              {selectedEdu.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">
              Year: {selectedEdu.year} | Grade: {selectedEdu.grade}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-2 mt-4">
              {selectedEdu.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
