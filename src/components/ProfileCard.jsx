import { FaGithub, FaLinkedin, FaYoutube, FaItchIo, FaSteam } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const ProfileCard = () => {
    const socialLinks = [
        {
          name: "github",
          url: "https://github.com/pegifenu",
          icon: <FaGithub size={30} />,
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/daphne-feng-b77023251/",
          icon: <FaLinkedin size={30} />,
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/@pegifenu",
          icon: <FaYoutube size={30} />,
        },
        {
          name: "itch",
          url: "https://pegifenu.itch.io/",
          icon: <FaItchIo size={30} />,
        },
        {
          name: "steam",
          url: "https://steamcommunity.com/profiles/76561199659710388/",
          icon: <FaSteam size={30} />,
        },
        {
          name: "kofico",
          url: "https://ko-fi.com/pegifenu",
          icon: <SiKofi size={30} />,
        },
    ];

    return (
        <div className="flex flex-col w-full bg-[#0B0B15] gap-6 p-10 overflow-hidden rounded-sm border border-[#3F5475] text-white">
        <div className="place-self-center overflow-hidden rounded-sm w-50">
            <img src="https://placehold.co/500x500" className="w-full object-cover"></img>
        </div>

        <h1 className="text-center text-4xl">Daphne Feng</h1>

        <div className="flex flex-col gap-2">
            <div>
            <p>PROFESSIONAL INQUIRIES</p>
            <p>dlfeng048@gmail.com</p>
            <p>cirsquerd@g.ucla.com</p>
            </div>
            <div>
            <p>OTHER</p>
            <p>pegifenu@gmail.com</p>
            </div>
        </div>

            <div className="flex flex-wrap justify-center gap-2">
                {socialLinks.map(({ name, url, icon }) => (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={name}
                        className="p-2 border border-[#3F5475] rounded-sm"
                    >
                        {icon}
                    </a>
                ))}
            </div>

        </div>
        
    );
}

export default ProfileCard;