import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const rotatingTexts = [
    'Developer',
    'Embedded Engineer',
    'Automotive IVI Engineer',
    'Problem Solver',
];

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--gradient-primary)',
                filter: 'blur(100px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'var(--color-accent)',
                filter: 'blur(100px)',
                opacity: 0.05,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        padding: '4px',
                        background: 'var(--gradient-primary)',
                        margin: '0 auto',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <img
                            src="https://via.placeholder.com/180"
                            alt="Rocky Patel"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid var(--color-bg-light)'
                            }}
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, var(--color-text-light), var(--color-primary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Rocky Patel
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        height: '2rem',
                        marginBottom: '2rem'
                    }}
                >
                    <motion.span
                        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                        transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 0.9, 1] }}
                    >
                        {rotatingTexts[0]} {/* Simplified for now, can make dynamic */}
                    </motion.span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}
                >
                    Bridging the gap between hardware and software. Specializing in Embedded Systems, Android Automotive IVI, and Full-Stack Web Development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="/assets/resume.pdf" download className="button button-primary">
                        Download Resume
                    </a>
                    <Link to="contact" smooth={true} duration={500} className="button button-outline">
                        Let's Talk
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
