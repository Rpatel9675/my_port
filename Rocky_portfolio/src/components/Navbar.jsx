import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`navbar ${isScrolled ? 'glass-panel' : ''}`}
            style={{
                position: 'fixed',
                top: isScrolled ? '1rem' : '0',
                left: isScrolled ? '50%' : '0',
                transform: isScrolled ? 'translateX(-50%)' : 'none',
                width: isScrolled ? '90%' : '100%',
                maxWidth: '1200px',
                padding: '1rem 2rem',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                borderRadius: isScrolled ? 'var(--radius-lg)' : '0',
                background: isScrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'var(--glass-backdrop)' : 'none',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Rocky.
                </div>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center', listStyle: 'none', margin: 0 }}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <Link
                                to={item.id}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className="nav-link"
                                style={{ cursor: 'pointer', fontWeight: 500, position: 'relative' }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <button onClick={toggleTheme} style={{ background: 'transparent', fontSize: '1.2rem', padding: '0.5rem' }}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ display: 'none', background: 'transparent', fontSize: '1.5rem', color: 'var(--color-text-light)' }}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass-panel"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: '1rem',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            alignItems: 'center'
                        }}
                    >
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                to={item.id}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
