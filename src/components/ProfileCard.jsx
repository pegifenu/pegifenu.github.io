import { FaGithub, FaLinkedin, FaYoutube, FaItchIo, FaSteam } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const ProfileCard = () => {
  return (
    <div className="flex flex-col w-full bg-[#0B0B15] gap-10 p-10 overflow-hidden rounded-sm text-white">
      <img src="https://placehold.co/500x500" className="place-self-center object-cover px-5 overflow-hidden rounded-xl"></img>

      <div>
        <p>PROFESSIONAL INQUIRIES</p>
        <p>dlfeng048@gmail.com</p>
        <p>cirsquerd@g.ucla.com</p>
        <p>OTHER</p>
        <p>pegifenu@gmail.com</p>
      </div>

      <div className="flex flex-wrap gap-5 w-full place-items-center">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="" size={30} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="" size={30} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="" size={30} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaItchIo className="" size={30} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaSteam className="" size={30} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <SiKofi className="" size={30} />
        </a>
        
      </div>
    </div>
    
  );
}

export default ProfileCard;