import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Senior Developer, Visteon",
        text: "Rocky is a dedicated engineer with a strong grasp of embedded systems. His work on the Android IVI project was impressive."
    },
    {
        name: "Ankit Verma",
        role: "Project Manager, Innovate-X",
        text: "A natural leader and problem solver. Rocky led the team effectively and delivered the project ahead of schedule."
    },
    {
        name: "Priya Das",
        role: "Professor, IEM Kolkata",
        text: "One of the most consistent and hardworking students. His projects always stand out for their innovation and execution."
    }
];

const Testimonials = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Recommendations</h2>
                    <p style={{ color: 'var(--text-muted)' }}>What mentors and peers say about my work.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                    {testimonials.map((item, index) => (
                        <div key={index} className="card" style={{ position: 'relative', padding: '2rem' }}>
                            <Quote size={40} color="var(--primary)" style={{ opacity: 0.2, position: 'absolute', top: '1rem', left: '1rem' }} />
                            <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-md">
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: '#cbd5e1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    color: 'white'
                                }}>
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)' }}>{item.name}</h4>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
