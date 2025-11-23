import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, Github } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, link) => {
        if (link.isHash) {
            e.preventDefault();
            setIsOpen(false);

            // If we're not on the home page, navigate there first
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation to complete, then scroll
                setTimeout(() => {
                    const element = document.querySelector(link.path);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                // Already on home page, just scroll
                const element = document.querySelector(link.path);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        } else {
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', path: '/', isHash: false },
        { name: 'About', path: '#about', isHash: true },
        { name: 'Skills', path: '#skills', isHash: true },
        { name: 'Projects', path: '#projects', isHash: true },
        { name: 'Contact', path: '/contact', isHash: false },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="nav-logo">
                    <Code2 size={28} />
                    <span>Rocky Patel</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        link.isHash ? (
                            <a
                                key={link.name}
                                href={link.path}
                                className={`nav-link`}
                                onClick={(e) => handleNavClick(e, link)}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                <div className="nav-actions">
                    <a href="https://github.com/Rpatel9675" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Github size={18} /> GitHub
                    </a>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/contact')}
                    >
                        Get in Touch
                    </button>
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
