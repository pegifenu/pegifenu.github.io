import ProfileCard from "../components/ProfileCard";

const About = () => {
    

    return (
        <div className="flex flex-col sm:flex-row px-10 py-20 gap-10">
            <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 gap-4">
                <ProfileCard />
                <button className="w-full bg-[#0B0B15] text-white px-6 py-3 rounded-sm border border-[#3F5475]">Download Resume</button>
            </div>
            
            <div className="flex flex-col text-white gap-5">
                <h1 className="text-4xl">Daphne Feng</h1>
                <p>I’m an aspiring software engineer currently pursuing a degree in Computer Science at UCLA.</p>
                <p>
                    Outside of computer science, I enjoy and am improving my skills in digital 2D/3D art/animation, music performance and production, 
                    and writing good stories.
                </p>
                <p>
                    I like to learn and make new things. Feel free to contact me if you are interested in working on a project together.
                </p>
            </div>

        
        
        </div>
    );
}

export default About;