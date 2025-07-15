import React from "react";
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import experiences from "../data/resumeItems";

const ResumeCard = ({ experience }) => {
  return (
    <div className="mb-5 flex w-full flex-col gap-1 overflow-hidden rounded-sm border border-[#3F5475] bg-[#0B0B15] p-3 text-white">
      <div className="flex flex-row gap-3">
        <img src={experience.image} alt="Blog Cover" className="h-20 w-20" />
        <div className="">
          <h3 className="text-lg font-semibold">{experience.company}</h3>
          <h4 className="text-md">{experience.title}</h4>
          <p className="">{experience.description}</p>
        </div>
      </div>

      {/* Accordion */}
      <Accordion.Root type="single" collapsible>
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
  );
};

export default ResumeCard;
