import React from "react";

import ResumeCard from "../components/ResumeCard";

import experiences from "../data/resumeItems";

const Experience = () => {
  return (
    <div className="mx-auto max-w-300 px-10 py-4">
      <div className="text-2xl font-bold text-white">Experience</div>
      <button className="w-full rounded-sm border border-[#3F5475] bg-[#0B0B15] px-6 py-3 text-white">
        Download Resume
      </button>
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-row gap-10">
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div className="h-5 w-5 shrink-0 rounded-full border-4 border-white bg-blue-500"></div>

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
  );
};

export default Experience;
