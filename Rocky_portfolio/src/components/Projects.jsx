import React from 'react';
import data from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Projects = () => {
    const { projects } = data;
    return (
        <section id="projects" className="section container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Projects</h2>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel"
                        style={{
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={{
                            height: '200px',
                            background: 'var(--gradient-dark)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.2)',
                            fontSize: '3rem',
                            fontWeight: 'bold'
                        }}>
                            {/* Placeholder for project image */}
                            {proj.name.charAt(0)}
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: 'var(--color-secondary)',
                                    fontWeight: 600
                                }}>
                                    {proj.type}
                                </span>
                                <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem' }}>{proj.name}</h3>
                            </div>

                            <p style={{ fontSize: '0.95rem', flex: 1 }}>{proj.description || 'A significant project showcasing technical expertise.'}</p>

                            {proj.tech_stack && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
                                    {proj.tech_stack.split(',').map((tech, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.75rem',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            padding: '0.2rem 0.5rem',
                                            borderRadius: '4px'
                                        }}>
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div style={{ marginTop: 'auto' }}>
                                {proj.github && (
                                    <a
                                        href={proj.github.startsWith('http') ? proj.github : `https://${proj.github}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button button-outline"
                                        style={{ width: '100%', padding: '0.5rem' }}
                                    >
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
