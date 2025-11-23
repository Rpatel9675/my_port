import React from 'react';
import data from '../data/portfolio.json';
import { motion } from 'framer-motion';

const About = () => {
    const { personal_details, profiles } = data;
    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel"
                style={{ padding: '3rem' }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Me</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{personal_details.headline}</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            I am a passionate engineer based in <strong>{personal_details.location}</strong>.
                            My expertise lies at the intersection of hardware and software, building robust embedded systems and dynamic web applications.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href={profiles.linkedin} target="_blank" rel="noopener noreferrer" className="button button-primary">LinkedIn</a>
                            <a href={profiles.github} target="_blank" rel="noopener noreferrer" className="button button-outline">GitHub</a>
                            <a href={`mailto:${personal_details.emails[0]}`} className="button button-outline">Email Me</a>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(14, 165, 233, 0.1)' }}>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>4+</h4>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>Years Coding</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(20, 184, 166, 0.1)' }}>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>10+</h4>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>Projects Built</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(244, 63, 94, 0.1)' }}>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>5★</h4>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>HackerRank C++</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(14, 165, 233, 0.1)' }}>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>1800+</h4>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>LeetCode Rating</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
