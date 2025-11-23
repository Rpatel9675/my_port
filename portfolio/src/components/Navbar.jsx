import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
            style={{ backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent' }}
        >
            <div className="container flex justify-between items-center h-full">
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                    <h1 className="text-2xl font-bold tracking-wider">
                        Rocky<span style={{ color: 'var(--primary-color)' }}>.</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer font-medium hover:text-[var(--primary-color)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-[var(--bg-color)] transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-[var(--bg-color)] transition-colors"
                    >
                        {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--card-bg)] border-t border-[var(--border-color)] overflow-hidden"
                    >
                        <ul className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium cursor-pointer hover:text-[var(--primary-color)]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
