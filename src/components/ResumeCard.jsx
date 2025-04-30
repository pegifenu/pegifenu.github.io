import React from 'react'
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import experiences from "../data/resumeItems";

const ResumeCard = ({experience}) => {
    return (
        <div className="flex flex-col bg-[#0B0B15] text-white rounded-sm overflow-hidden border border-[#3F5475] w-full mb-5 p-3 gap-1">
            <div className="flex flex-row gap-3">
                <img
                    src={experience.image}
                    alt="Blog Cover"
                    className="w-20 object-cover"
                />
                <div className="">

                    <h3 className="text-lg font-semibold">{experience.company}</h3>
                    <h4 className="text-md">{experience.title}</h4>
                    <p className="">{experience.description}</p>
                </div>
            </div>


                {/* Accordion */}
                <Accordion.Root
                    type="single"
                    collapsible
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