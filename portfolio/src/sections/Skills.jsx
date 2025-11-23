import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section bg-[var(--card-bg)]">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--bg-color)] p-6 rounded-xl shadow-sm border border-[var(--border-color)]"
                        >
                            <h3 className="text-xl font-bold mb-4 capitalize text-[var(--primary-color)]">
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillList.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-[var(--card-bg)] rounded-full text-sm font-medium border border-[var(--border-color)] shadow-sm hover:border-[var(--primary-color)] transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
