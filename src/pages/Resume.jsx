import React from 'react'

import ResumeCard from "../components/ResumeCard";

import experiences from "../data/resumeItems";

const Experience = () => {      
      return (
        <div className="px-10 py-4">
            <div className="text-2xl font-bold text-white">Experience</div>
            <div className="flex flex-col">
            {experiences.map((experience, index) => (
                <div key={index} className="flex flex-row gap-10">
                <div className="flex flex-col items-center">
                {/* Dot */}
                <div className="w-5 h-5 bg-blue-500 border-4 border-white rounded-full shrink-0"></div>

                {/* Line to next dot */}
                {index !== experiences.length - 1 && (
                    <div className="w-1 flex-1 bg-gray-300 mt-1 mb-1"></div>
                )}
                </div>

                    {/* Content */}
                    <ResumeCard experience={experience} />
                </div>
            ))}
            </div>

        </div>


      );
}

export default Experience