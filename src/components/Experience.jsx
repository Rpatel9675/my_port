import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
    {
        id: 1,
        role: "Software Engineer 1",
        company: "Visteon Corporation",
        duration: "Aug 2025 - Present",
        type: "Full-time",
        description: "Working on Android Automotive IVI systems and embedded software solutions."
    },
    {
        id: 2,
        role: "Software Development Intern",
        company: "Visteon Corporation",
        duration: "Jan 2025 - Jun 2025",
        type: "Internship",
        description: "Assisted in the development of BSP and kernel drivers for automotive infotainment units."
    },
    {
        id: 3,
        role: "Industrial Automation Intern",
        company: "SMS Group",
        duration: "Previous",
        type: "Internship",
        description: "Gained hands-on experience with PLC programming and industrial automation workflows."
    },
    {
        id: 4,
        role: "Web Development Intern",
        company: "EiSystems Technologies",
        duration: "Previous",
        type: "Internship",
        description: "Developed responsive web applications using HTML, CSS, and JavaScript."
    },
    {
        id: 5,
        role: "Team Leader",
        company: "Innovate-X",
        duration: "Project Based",
        type: "Leadership",
        description: "Led a team of 4 developers to build a smart home automation prototype."
    }
];

const Experience = () => {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Experience</h2>
                    <p style={{ color: 'var(--text-muted)' }}>My professional journey and career milestones.</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--bg-light)',
                        zIndex: 0
                    }}></div>

                    <div className="flex flex-col gap-lg">
                        {experienceData.map((exp) => (
                            <div key={exp.id} style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                {/* Icon */}
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    background: 'var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexShrink: 0,
                                    border: '4px solid white',
                                    boxShadow: '0 0 0 2px var(--bg-light)'
                                }}>
                                    <Briefcase size={20} />
                                </div>

                                {/* Content */}
                                <div className="card" style={{ flex: 1, padding: '1.5rem' }}>
                                    <div className="flex justify-between items-start mb-sm flex-wrap gap-sm">
                                        <div>
                                            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                                            <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: 600 }}>{exp.company}</h4>
                                        </div>
                                        <span style={{
                                            background: 'var(--bg-light)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: '0.875rem',
                                            color: 'var(--text-muted)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <Calendar size={14} />
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
