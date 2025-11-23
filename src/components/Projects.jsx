import React, { useState } from 'react';
import { Github, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        name: "Smart Embedded Automotive System",
        tech: "Android Automotive | C++ | HAL",
        category: "Embedded",
        description: "An advanced In-Vehicle Infotainment (IVI) system with custom HAL implementation and vehicle signal processing.",
        link: "https://github.com/Rpatel9675",
        featured: true
    },
    {
        name: "Wanderlust",
        tech: "MERN Stack | Redux | Mapbox",
        category: "Full Stack",
        description: "A full-stack travel accommodation booking platform similar to Airbnb with map integration and user reviews.",
        link: "https://github.com/Rpatel9675",
        featured: false
    },
    {
        name: "Robotics Hand Gripper",
        tech: "Arduino | C++ | 3D Printing",
        category: "Hardware",
        description: "Designed and programmed a 3D printed robotic hand gripper with servo motor control for precise object manipulation.",
        link: "https://github.com/Rpatel9675",
        featured: false
    },
    {
        name: "HomeHevan",
        tech: "React | Node.js | MongoDB",
        category: "Full Stack",
        description: "Real-estate listing platform with advanced search filters, image upload, and user authentication.",
        link: "https://github.com/Rpatel9675",
        featured: false
    },
    {
        name: "Apna-Desh",
        tech: "HTML | CSS | JavaScript",
        category: "Web",
        description: "A cultural heritage website showcasing the diversity and rich history of India with interactive elements.",
        link: "https://github.com/Rpatel9675",
        featured: false
    },
    {
        name: "Aashiyana",
        tech: "Full Stack Web",
        category: "Full Stack",
        description: "A community-driven platform for finding and sharing affordable housing solutions.",
        link: "https://github.com/Rpatel9675",
        featured: false
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Embedded', 'Full Stack', 'Hardware', 'Web'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Featured Projects</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>A selection of my recent work in Embedded Systems and Web Development.</p>

                    {/* Filter Buttons */}
                    <div className="flex justify-center gap-md flex-wrap">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.name}
                                className="card"
                                style={{
                                    border: project.featured ? '2px solid var(--primary)' : '1px solid transparent',
                                    background: 'white',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'default'
                                }}
                            >
                                {project.featured && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '0.25rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.875rem',
                                        fontWeight: 600
                                    }}>
                                        Featured Project
                                    </div>
                                )}

                                <div style={{ marginBottom: '1rem' }}>
                                    <Code size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>{project.name}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>{project.tech}</p>
                                </div>

                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>
                                    {project.description}
                                </p>

                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`btn ${project.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <Github size={18} />
                                    View Code
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
