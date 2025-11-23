import React from 'react';
import data from '../data/portfolio.json';

const Achievements = () => {
    const { achievements } = data;
    return (
        <section id="achievements" className="achievements-section container mt-2 mb-2">
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Achievements</h2>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {achievements.map((item, idx) => (
                    <li key={idx} style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius)' }}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
