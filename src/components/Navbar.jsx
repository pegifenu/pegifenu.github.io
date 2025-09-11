import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const navLinks = [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
    { label: "Blog", path: "/blog" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const page = useLocation();

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10); // Detect if the user has scrolled down 20px
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isSolid = ["/projects"].includes(page.pathname) || isScrolled;

  const renderNavLinks = (className) =>
    navLinks.map(({ label, path }) => (
      <NavLink
        key={path}
        to={path}
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `${className} ${isActive ? "text-white" : "text-white/50 transition duration-100 hover:text-white"}`
        }
      >
        {label}
      </NavLink>
    ));

  return (
    <div className="sticky top-0 z-40">
      <div
        className={`px-5 transition-all duration-150 ${
          isSolid || isMenuOpen ? "bg-dark-blue" : "bg-transparent"
        } ${isScrolled && !isMenuOpen ? "border-light-blue border-b" : ""}`}
      >
        <div className="z-50 mx-auto flex max-w-6xl items-center justify-between py-2 text-lg text-white">
          <NavLink to="/" className="text-xl">
            pegifenu
          </NavLink>

          {/* Hamburger Icon (mobile only) */}
          <button
            className="text-white hover:cursor-pointer md:hidden"
            onClick={onToggleMenu}
            aria-label="Toggle menu"
          >
            <HamburgerMenuIcon className="h-6 w-6" />
          </button>

          {/* Desktop links */}
          <div className="hidden gap-7 md:flex">
            {renderNavLinks("cursor-pointer")}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`border-light-blue bg-dark-blue absolute w-full border-b transition-all duration-150 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-5 py-4">
          {renderNavLinks("cursor-pointer block")}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
