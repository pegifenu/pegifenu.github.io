import { FaGithub, FaLinkedin, FaYoutube, FaItchIo, FaSteam } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const ProfileCard = () => {
  return (
    <div className="flex flex-col bg-[#0B0B15] gap-6 p-10 overflow-hidden rounded-sm border border-[#3F5475] text-white">
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
          <a href="https://github.com/yourusername" target="_blank" className="p-2 border border-[#3F5475] rounded-sm">
            <FaGithub className="" size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 border border-[#3F5475] rounded-sm">
            <FaLinkedin className="" size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 border border-[#3F5475] rounded-sm">
            <FaYoutube className="" size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 border border-[#3F5475] rounded-sm">
            <FaItchIo className="" size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 border border-[#3F5475] rounded-sm">
            <FaSteam className="" size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 border border-[#3F5475] rounded-sm">
            <SiKofi className="" size={30} />
          </a>
        </div>

    </div>
    
  );
}

export default ProfileCard;