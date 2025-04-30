import React from 'react'
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import experiences from "../data/resumeItems";

const ResumeCard = ({experience}) => {
    return (
        <div className="flex flex-col bg-[#0B0B15] text-white rounded-sm overflow-hidden border border-[#3F5475]">
            <div className="flex flex-row">
                <img
                    src={experience.image}
                    alt="Blog Cover"
                    className="w-1/6 object-cover"
                />
                <div className="px-4 py-3">

                    <h3 className="text-lg font-semibold text-blue-600">{experience.year}</h3>
                    <h4 className="text-md font-bold">{experience.title}</h4>
                    <p className="text-gray-600">{experience.description}</p>
                </div>
            </div>


                {/* Accordion */}
                <Accordion.Root
                type="single"
                collapsible
                className="mt-4"
                >

                    <Accordion.Item value="item-1">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex flex-row">
                                <div>Read More</div>
                                <ChevronDownIcon aria-hidden />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>{experience.description}</Accordion.Content>
                    </Accordion.Item>

                </Accordion.Root>
        </div>

    )
}

export default ResumeCard