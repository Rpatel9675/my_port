import React, { useState } from 'react';
import { Mail, Github, Linkedin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EmergencyButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    >
                        <button
                            onClick={() => {
                                navigate('/contact');
                                setIsOpen(false);
                            }}
                            className="btn"
                            style={{ background: 'var(--primary)', color: 'white', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <Mail size={18} /> Contact Me
                        </button>
                        <a href="https://github.com/Rpatel9675" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#333', color: 'white', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/rocky-patel-eee" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#0077B5', color: 'white', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: isOpen ? '#333' : 'var(--primary)',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-xl)',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                {isOpen ? <X size={24} /> : <Mail size={24} />}
            </button>
        </div>
    );
};

export default EmergencyButton;
