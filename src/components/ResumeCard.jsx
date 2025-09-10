import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const formatDate = (dateString) => {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "long", year: "numeric" });
};

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

          <div className="flex flex-col gap-3 md:flex-row">
            <img
              src={experience.image}
              alt="Item Cover"
              className="h-20 w-20"
            />
            <div className="flex-grow">
              <h3 className="text-lg">
                <span className="font-semibold">{experience.title}</span> at{" "}
                <span className="font-semibold">{experience.company}</span>
              </h3>

              <h4 className="text-md text-gray-400">
                {formatDate(experience.startDate)} –{" "}
                {formatDate(experience.endDate)}
                <span className="mx-1">•</span>
                {experience.location}
              </h4>

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
