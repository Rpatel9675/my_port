import React from 'react';
import data from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Skills = () => {
    const { skills } = data;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Technical Skills</h2>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '2rem' }}
                    >
                        <h3 style={{
                            textTransform: 'capitalize',
                            color: 'var(--color-primary)',
                            marginBottom: '1.5rem',
                            borderBottom: '2px solid var(--color-bg-light)',
                            paddingBottom: '0.5rem'
                        }}>
                            {category.replace('_', ' ')}
                        </h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}
                        >
                            {items.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    variants={item}
                                    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)', color: '#fff' }}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        background: 'rgba(14, 165, 233, 0.1)',
                                        color: 'var(--color-text-light)',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        cursor: 'default',
                                        border: '1px solid rgba(14, 165, 233, 0.2)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
