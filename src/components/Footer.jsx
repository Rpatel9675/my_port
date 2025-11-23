import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Code2 } from 'lucide-react';
import '../styles/global.css';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (e, id) => {
        e.preventDefault();

        // If we're not on the home page, navigate there first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const element = document.querySelector(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // Already on home page, just scroll
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <footer style={{ backgroundColor: 'var(--primary-dark)', color: 'white', padding: 'var(--spacing-3xl) 0' }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">

                    {/* Column 1: About */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Code2 size={24} />
                            <h3 style={{ color: 'white', margin: 0 }}>Rocky Patel</h3>
                        </div>
                        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                            Embedded Systems Engineer & Full-Stack Developer passionate about bridging hardware and software.
                        </p>
                        <div className="flex gap-md">
                            <a href="https://github.com/Rpatel9675" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.3s' }}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/rocky-patel-eee" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.3s' }}>
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} style={{ opacity: 0.8, cursor: 'pointer' }}>About</a></li>
                            <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')} style={{ opacity: 0.8, cursor: 'pointer' }}>Skills</a></li>
                            <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')} style={{ opacity: 0.8, cursor: 'pointer' }}>Projects</a></li>
                            <li><a href="#education" onClick={(e) => handleScroll(e, '#education')} style={{ opacity: 0.8, cursor: 'pointer' }}>Education</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Tech Focus */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Tech Focus</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li style={{ opacity: 0.8 }}>Android Automotive IVI</li>
                            <li style={{ opacity: 0.8 }}>Embedded Linux</li>
                            <li style={{ opacity: 0.8 }}>React & Node.js</li>
                            <li style={{ opacity: 0.8 }}>Full-Stack Development</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="flex items-center gap-md" style={{ opacity: 0.8 }}>
                                <MapPin size={18} />
                                <span>Kolkata, India</span>
                            </div>
                            <div className="flex items-center gap-md" style={{ opacity: 0.8 }}>
                                <Mail size={18} />
                                <span>rockypatel@example.com</span>
                            </div>
                            <button
                                onClick={() => {
                                    if (location.pathname === '/contact') {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    } else {
                                        navigate('/contact');
                                    }
                                }}
                                className="btn btn-accent"
                                style={{ marginTop: '0.5rem', width: 'fit-content' }}
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', opacity: 0.6 }}>
                    <p>&copy; {new Date().getFullYear()} Rocky Patel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
