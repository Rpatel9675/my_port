import React from 'react';
import data from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Experience = () => {
    const { experience } = data;
    return (
        <section id="experience" className="section container">
            <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Professional Experience</h2>

            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                {/* Timeline Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'var(--gradient-primary)',
                    opacity: 0.3
                }} />

                {experience.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        style={{
                            position: 'relative',
                            paddingLeft: '60px',
                            marginBottom: '3rem'
                        }}
                    >
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '11px',
                            top: '0',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'var(--color-bg-light)',
                            border: '4px solid var(--color-primary)',
                            zIndex: 1
                        }} />

                        <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s ease' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--color-text-light)' }}>{item.role}</h3>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-primary)', fontWeight: 500 }}>{item.company}</h4>
                                </div>
                                <span style={{
                                    background: 'rgba(14, 165, 233, 0.1)',
                                    color: 'var(--color-primary)',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    height: 'fit-content'
                                }}>
                                    {item.start || item.duration}
                                </span>
                            </div>

                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                {item.location}
                            </p>

                            {item.description && <p>{item.description}</p>}

                            {item.key_work && (
                                <ul style={{ paddingLeft: '1.2rem' }}>
                                    {item.key_work.map((kw, i) => (
                                        <li key={i} style={{ listStyle: 'disc', marginBottom: '0.5rem', color: 'var(--color-text-muted-light)' }}>
                                            {kw}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
