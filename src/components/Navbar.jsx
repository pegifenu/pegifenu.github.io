import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to="/">Daphne Feng</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
}

export default Navbar;