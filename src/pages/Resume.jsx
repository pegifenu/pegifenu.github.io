import React from 'react'

import ResumeCard from "../components/ResumeCard";

import experiences from "../data/resumeItems";

const Experience = () => {      
      return (
        <div className="p-10">

            <div className="flex flex-col gap-5">
            {experiences.map((experience, index) => (
                <div key={index} className="flex flex-row gap-10">
                    <div className="">
                        {/* Dot */}
                        <div className="shrink-0 -translate-x-1/2 w-5 h-5 bg-blue-500 border-4 border-white rounded-full z-1">

                        </div>
                        {/* Line dynamically positioned between dots */}
                        {index !== experiences.length - 1 && (
                            <div className="absolute translate-x-[-50%] w-1 bg-gray-300 h-20"></div>
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