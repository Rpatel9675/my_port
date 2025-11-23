import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section bg-[var(--card-bg)]">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[var(--bg-color)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)]"
                        >
                            {/* Image Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-black rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={project.link} // Assuming link serves both for now
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-black rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="text-xs font-bold text-[var(--primary-color)] uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-[var(--primary-color)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm opacity-80 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-[var(--card-bg)] rounded border border-[var(--border-color)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
