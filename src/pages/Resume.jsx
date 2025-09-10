import ResumeCard from "../components/ResumeCard";

import experiences from "../data/resumeItems";

const Experience = () => {
  return (
    <div className="mx-10">
      <div className="mx-auto max-w-6xl py-10">
        <div className="flex flex-col">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-row gap-10">
              <div className="hidden flex-col items-center md:flex">
                {/* Dot */}
                <div className="bg-light-blue h-5 w-5 shrink-0 rounded-full border-4 border-white"></div>

                {/* Line to next dot */}
                {index !== experiences.length - 1 && (
                  <div className="mt-1 mb-1 w-1 flex-1 bg-gray-300"></div>
                )}
              </div>

              {/* Content */}
              <ResumeCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
