import { FaGithub, FaYoutube, FaItchIo, FaSteam } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import { motion } from "motion/react";

const ProfileCard = () => {
  const socialLinks = [
    {
      name: "github",
      url: "https://github.com/pegifenu",
      icon: <FaGithub size={30} />,
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
    <div className="flex w-full flex-col gap-5 overflow-hidden rounded-sm border border-[#3F5475] bg-[#0B0B15] px-10 py-10 text-white">
      <div className="max-w-70 place-self-center overflow-hidden rounded-sm">
        <img
          src="/images/lilguy.jpg"
          className="w-full object-cover"
        ></img>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold">EMAIL</p>
          <p>pegifenu@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {socialLinks.map(({ name, url, icon }) => (
          <motion.div
            layout
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key={name}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-light-blue block rounded-sm border p-2"
            >
              {icon}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
