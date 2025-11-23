import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech — Electrical & Electronics Engineering",
        institute: "Institute of Engineering & Management, Kolkata",
        year: "2021 – 2025",
        grade: "CGPA: 8.5 – 8.54",
        icon: <GraduationCap size={40} color="var(--primary)" />
    },
    {
        degree: "Intermediate",
        institute: "Daudnagar College",
        year: "2018 – 2020",
        grade: "Percentage: 70.4%",
        icon: <Award size={40} color="var(--secondary)" />
    },
    {
        degree: "Matriculation",
        institute: "Haspura High School",
        year: "Completed",
        grade: "",
        icon: <Calendar size={40} color="var(--accent)" />
    }
];

const Education = () => {
    return (
        <section id="education" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Education</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        My academic journey in engineering and technical education.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-lg" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                display: 'flex',
                                gap: '1.5rem',
                                alignItems: 'flex-start',
                                background: index === 0 ? 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' : 'white'
                            }}
                        >
                            <div style={{ flexShrink: 0 }}>
                                {item.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                                    {item.degree}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    {item.institute}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                        📅 {item.year}
                                    </span>
                                    {item.grade && (
                                        <span style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 600 }}>
                                            🏆 {item.grade}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
