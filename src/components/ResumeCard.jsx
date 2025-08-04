import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const ResumeCard = ({ experience }) => {
  return (
    <div className="border-light-blue bg-dark-blue relative mb-5 w-full overflow-hidden rounded-sm border p-3 text-white">
      {/* Accordion Trigger in top-right corner */}
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger absolute top-3 right-3 p-1 text-white/50 transition hover:text-white">
              <ChevronDownIcon
                className="AccordionChevron h-6 w-6 cursor-pointer"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <div className="flex flex-row gap-3">
            <img
              src={experience.image}
              alt="Item Cover"
              className="h-20 w-20"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{experience.company}</h3>
              <h4 className="text-md italic">{experience.title}</h4>
              <p>{experience.description}</p>
            </div>
          </div>

          <Accordion.Content className="AccordionContent">
            <ul className="list-inside list-disc space-y-1 text-white">
              {experience.bulletList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default ResumeCard;
