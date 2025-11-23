import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="hero-section" style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            padding: '2rem 0'
        }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(37, 99, 235, 0.1)',
                            color: 'var(--primary)',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}>
                            👋 Hello, I'm
                        </span>
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: '1rem',
                            color: 'var(--primary-dark)'
                        }}>
                            Rocky Patel
                        </h1>
                        <h2 style={{
                            fontSize: '1.5rem',
                            color: 'var(--secondary)',
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            Embedded Systems Engineer | Full-Stack Developer
                        </h2>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '90%'
                        }}>
                            Specializing in Android Automotive IVI, BSP, Embedded Linux, and modern Web Technologies. Building the bridge between hardware and software.
                        </p>

                        <div className="flex gap-md">
                            <a href="/contact" className="btn btn-primary flex items-center gap-sm">
                                Hire Me <ArrowRight size={20} />
                            </a>
                            <a href="/resume.pdf" download className="btn btn-outline flex items-center gap-sm" style={{
                                border: '2px solid var(--primary)',
                                color: 'var(--primary)',
                                background: 'transparent'
                            }}>
                                Download Resume <Download size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image-container"
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--secondary)',
                            borderRadius: '50%',
                            opacity: 0.1,
                            zIndex: 0
                        }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Rocky Patel Workspace"
                            style={{
                                width: '100%',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-xl)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
