import ProfileCard from "../components/ProfileCard";

const About = () => {
    

    return (
        <div className="flex flex-col sm:flex-row px-10 py-20 gap-10">
        <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 gap-4">
            <ProfileCard />
            <button className="w-full bg-[#0B0B15] text-white px-6 py-3 rounded-sm border border-[#3F5475]">Download Resume</button>
        </div>
        
        <div className="flex flex-col text-white gap-5">
            <p>I’m an aspiring software engineer currently pursuing a degree in Computer Science at UCLA.</p>
        </div>

        
        
        </div>
    );
}

export default About;