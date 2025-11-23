import React from 'react';
import { Code, Cpu, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <section id="about" className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">

                    {/* Image */}
                    <div style={{ order: 1 }}>
                        <div style={{
                            width: '100%',
                            height: '450px',
                            backgroundColor: '#e2e8f0',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Rocky Patel"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ order: 2 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>About Me</h2>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>Embedded Systems & Full-Stack Developer</h3>

                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            I am Rocky Patel, a passionate developer based in Kolkata, India. I bridge the gap between hardware and software, specializing in Android Automotive IVI, Embedded Linux, and Full-Stack Web Development.
                        </p>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            With a strong foundation in Electrical & Electronics Engineering and hands-on experience in building complex systems, I enjoy solving challenging problems and creating efficient, scalable solutions.
                        </p>

                        <div className="grid grid-cols-1 gap-md" style={{ marginBottom: '2rem' }}>
                            <div className="flex items-center gap-md">
                                <div style={{ background: 'white', padding: '0.5rem', borderRadius: '50%' }}><Cpu color="var(--primary)" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1rem' }}>Embedded Systems</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Android IVI, BSP, Linux, C/C++</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-md">
                                <div style={{ background: 'white', padding: '0.5rem', borderRadius: '50%' }}><Globe color="var(--primary)" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1rem' }}>Full-Stack Web</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>React, Node.js, MongoDB, Express</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-md">
                                <div style={{ background: 'white', padding: '0.5rem', borderRadius: '50%' }}><Code color="var(--primary)" /></div>
                                <div>
                                    <h4 style={{ fontSize: '1rem' }}>Problem Solving</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>DSA, LeetCode, Optimization</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => navigate('/contact')} className="btn btn-secondary">Get In Touch</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
