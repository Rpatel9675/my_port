import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Contact Me</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Let's connect and build something amazing together.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

                        {/* Contact Info */}
                        <div className="card">
                            <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Get in Touch</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="flex items-center gap-md">
                                    <div style={{ background: 'var(--bg-light)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}><MapPin /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 600 }}>Address</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>4A, Prantika Apartment, Maheshbathan, Kolkata – 700102</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-md">
                                    <div style={{ background: 'var(--bg-light)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}><Phone /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 600 }}>Phone</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>+91 7357577247</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-md">
                                    <div style={{ background: 'var(--bg-light)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}><Mail /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 600 }}>Email</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>pprl735757@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-md mt-md">
                                    <a href="https://www.linkedin.com/in/rocky-patel-eee" target="_blank" rel="noopener noreferrer" className="btn-icon">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="https://github.com/Rpatel9675" target="_blank" rel="noopener noreferrer" className="btn-icon">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.instagram.com/r0k_i7/" target="_blank" rel="noopener noreferrer" className="btn-icon">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="card" style={{ padding: 0, overflow: 'hidden', minHeight: '400px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0620999999997!2d88.441!3d22.576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzMzLjYiTiA4OMKwMjYnMjcuNiJF!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
