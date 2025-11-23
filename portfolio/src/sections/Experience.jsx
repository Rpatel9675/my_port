import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section bg-[var(--bg-color)]">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[var(--border-color)]"></div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 items-center`}
                        >
                            {/* Desktop: Left Side (Odd Index - 1, 3...) actually index starts at 0.
                  Let's say index 0 (Even) -> Right.
                  Index 1 (Odd) -> Left.
              */}
                            <div className={`hidden md:block md:w-1/2 px-4 ${index % 2 !== 0 ? 'text-right' : ''}`}>
                                {index % 2 !== 0 && <ExperienceCard exp={exp} />}
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[var(--primary-color)] rounded-full border-4 border-[var(--bg-color)] z-10"></div>

                            {/* Desktop: Right Side (Even Index) */}
                            <div className={`hidden md:block md:w-1/2 px-4 ${index % 2 === 0 ? 'text-left' : ''}`}>
                                {index % 2 === 0 && <ExperienceCard exp={exp} />}
                            </div>

                            {/* Mobile: Always Right of line */}
                            <div className="md:hidden w-full pl-8">
                                <ExperienceCard exp={exp} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ exp }) => (
    <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-shadow text-left">
        <h3 className="text-xl font-bold text-[var(--primary-color)]">{exp.role}</h3>
        <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>

        <div className="flex flex-wrap gap-4 text-sm opacity-70 mb-4">
            <span className="flex items-center gap-1"><FaCalendarAlt /> {exp.duration}</span>
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> {exp.location}</span>
        </div>

        <p className="mb-4 opacity-90">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
            {exp.tools.map((tool) => (
                <span key={tool} className="text-xs px-2 py-1 bg-[var(--bg-color)] rounded border border-[var(--border-color)]">
                    {tool}
                </span>
            ))}
        </div>
    </div>
);

export default Experience;
