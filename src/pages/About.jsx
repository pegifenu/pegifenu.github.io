import ProfileCard from "../components/ProfileCard";
import { Popover } from "radix-ui";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row px-10 py-20 gap-10">
      <div className="w-full sm:w-[400px]">
        <ProfileCard />
      </div>
      
      <div className="flex flex-col text-white gap-5">
        <p>I’m an aspiring software engineer currently pursuing a degree in Computer Science at UCLA.</p>
      </div>

      <button className="absolute bottom-10 right-10 bg-[#0B0B15] text-white px-6 py-3 rounded-sm border border-[#3F5475]">Download Resume</button>
      
      <Popover.Root>
		<Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent">
				Some content
				<Popover.Arrow className="PopoverArrow" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
    </div>
  );
}

export default About;