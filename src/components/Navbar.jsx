import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-1 flex justify-between items-center px-6 py-2 bg-[#0B0B15] text-white text-lg">
        <Link to="/" className="text-xl">Daphne Feng</Link>
        <div className="flex gap-6">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>

    </>
  );
}

export default Navbar;