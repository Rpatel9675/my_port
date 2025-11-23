import React, { useState } from 'react';
import data from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Contact = () => {
    const { personal_details, profiles } = data;
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setFormStatus('Thanks for your message!');
                form.reset();
            } else {
                setFormStatus('Oops! There was a problem submitting your form');
            }
        } catch (error) {
            setFormStatus('Oops! There was a problem submitting your form');
        }
    };

    return (
        <section id="contact" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel"
                style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get In Touch</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Contact Info</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p>
                                <strong>Email:</strong><br />
                                <a href={`mailto:${personal_details.emails[0]}`} style={{ color: 'var(--color-text-light)' }}>{personal_details.emails[0]}</a>
                            </p>
                            <p>
                                <strong>Phone:</strong><br />
                                {personal_details.phone}
                            </p>
                            <p>
                                <strong>Location:</strong><br />
                                {personal_details.address}
                            </p>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Social Profiles</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={profiles.linkedin} target="_blank" rel="noopener noreferrer" className="button button-outline" style={{ padding: '0.5rem 1rem' }}>LinkedIn</a>
                                <a href={profiles.github} target="_blank" rel="noopener noreferrer" className="button button-outline" style={{ padding: '0.5rem 1rem' }}>GitHub</a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-text-muted-light)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-text-muted-light)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-text-muted-light)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'inherit',
                                    resize: 'vertical'
                                }}
                            ></textarea>
                        </div>
                        <button type="submit" className="button button-primary" style={{ width: '100%' }}>Send Message</button>
                        {formStatus && <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-secondary)' }}>{formStatus}</p>}
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
