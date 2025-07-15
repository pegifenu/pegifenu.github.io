import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
    { label: "Blog", path: "/blog" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavLinks = (className) =>
    navLinks.map(({ label, path }) => (
      <NavLink
        key={path}
        to={path}
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `${className} ${isActive ? "font-bold" : "hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)]"}`
        }
      >
        {label}
      </NavLink>
    ));

  return (
    <div className="sticky top-0 text-lg text-white">
      <div className="bg-dark-blue z-20 flex items-center justify-between px-6 py-2">
        <NavLink to="/" className="text-xl">
          pegifenu
        </NavLink>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="text-white md:hidden"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
        >
          <HamburgerMenuIcon className="h-6 w-6" />
        </button>

        {/* Desktop links */}
        <div className="z-1 hidden gap-6 md:flex">
          {renderNavLinks("cursor-pointer")}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2 }}
            className="bg-dark-blue absolute z-10 flex w-full flex-col gap-3 px-6 py-4 md:hidden"
          >
            {renderNavLinks("cursor-pointer")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
