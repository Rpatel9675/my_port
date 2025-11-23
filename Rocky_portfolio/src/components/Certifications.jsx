import React from 'react';
import data from '../data/portfolio.json';

const Certifications = () => {
    const { certifications } = data;
    return (
        <section id="certifications" className="certifications-section container mt-2 mb-2">
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Certifications</h2>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {certifications.map((item, idx) => (
                    <li key={idx} style={{ background: 'var(--color-secondary)', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius)' }}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default Certifications;
