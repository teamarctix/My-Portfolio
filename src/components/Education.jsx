import { education } from "../constants/education";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-20 bg-[#F8F8FC] text-[#272757]"
    >
      <h2 className="text-3xl font-bold text-center mb-16">Education</h2>

      <div className="relative border-l-4 border-[#8686AC] pl-6 lg:pl-12 max-w-4xl mx-auto">
        {education.map((item, index) => (
          <div key={index} className="mb-12 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-4 top-1 w-4 h-4 bg-[#505081] rounded-full border-4 border-white shadow-md"></span>

            {/* Content Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-[#505081]">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-600">
                {item.institution} | {item.year}
              </p>
              <p className="text-sm text-gray-500 mt-1">Grade: {item.grade}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-3">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
