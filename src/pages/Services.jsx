import React from 'react';
import Skills from '../components/Skills';

const Services = () => {
    return (
        <div>
            <section className="section" style={{ background: 'var(--bg-light)', paddingBottom: '0' }}>
                <div className="container text-center">
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Skills & Expertise</h1>
                    <p style={{ color: 'var(--text-muted)' }}>My technical proficiency and toolset.</p>
                </div>
            </section>
            <Skills />
        </div>
    );
};

export default Services;
