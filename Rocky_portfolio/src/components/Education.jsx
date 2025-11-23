import React from 'react';
import data from '../data/portfolio.json';

const Education = () => {
    const { education } = data;
    return (
        <section id="education" className="education-section container mt-2 mb-2">
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Education</h2>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {education.map((item, idx) => (
                    <div key={idx} className="edu-card" style={{ padding: '1rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', background: 'rgba(255,255,255,0.8)' }}>
                        <h3>{item.degree || item.qualification}</h3>
                        <p><strong>{item.institute}</strong></p>
                        {item.year && <p>{item.year}</p>}
                        {item.cgpa && <p>CGPA: {item.cgpa}</p>}
                        {item.percentage && <p>Percentage: {item.percentage}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
