import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { label: "About", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Blog", path: "/blog" },
    ];

  return (
    <div className="sticky top-0 z-1 flex justify-between items-center px-6 py-2 bg-[#0B0B15] text-white text-lg">
        <NavLink to="/" className="text-xl">Daphne Feng</NavLink>
        <div className="flex gap-6">
        {navLinks.map(({ label, path }, index) => (
            <NavLink
                key={index}
                to={path}
                className={({ isActive }) => isActive ? "font-bold cursor-pointer" : "hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,1)] cursor-pointer"}


            >
                {label}
            </NavLink>
        ))}
        </div>
    </div>
    );
}

export default Navbar;