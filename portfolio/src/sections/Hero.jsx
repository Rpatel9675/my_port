import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import portfolioData from '../data/portfolioData';

const Hero = () => {
    const { personalDetails } = portfolioData;
    const roles = ["Developer", "Embedded Engineer", "Automotive IVI Engineer", "Problem Solver"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container grid md:grid-cols-2 gap-10 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-xl md:text-2xl font-medium mb-2 text-[var(--primary-color)]">
                        Hello, I'm
                    </h3>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        {personalDetails.fullName}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--accent-color)] flex flex-wrap gap-2 items-center">
                        I am a
                        <span className="text-[var(--secondary-color)] min-w-[280px] h-[1.5em] relative">
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute left-0"
                                >
                                    {roles[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h2>
                    <p className="text-lg mb-8 max-w-lg leading-relaxed text-[var(--text-color)] opacity-90">
                        {personalDetails.headline}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <a href="#contact" className="btn btn-primary">
                            Hire Me
                        </a>
                        <a href="/resume.pdf" download className="btn btn-outline flex items-center gap-2">
                            Download CV <FaDownload />
                        </a>
                    </div>

                    <div className="flex gap-6 text-2xl text-[var(--accent-color)]">
                        <a href={personalDetails.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors"><FaLinkedin /></a>
                        <a href={personalDetails.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#333] dark:hover:text-white transition-colors"><FaGithub /></a>
                        <a href={`mailto:${personalDetails.email}`} className="hover:text-[var(--primary-color)] transition-colors"><FaEnvelope /></a>
                        <a href={personalDetails.social.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#ffa116] transition-colors"><SiLeetcode /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full opacity-20 blur-2xl"></div>
                        <img
                            src="https://placehold.co/400x400/1a1a1a/ffffff?text=Rocky+Patel"
                            alt="Rocky Patel"
                            className="relative w-full h-full object-cover rounded-full border-4 border-[var(--card-bg)] shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
