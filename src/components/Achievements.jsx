import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#fbbf24">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const achievements = [
    {
        title: "LeetCode Rating",
        value: "1850",
        description: "Solved 500+ problems, consistently in top 15%",
        icon: <CodeIcon />
    },
    {
        title: "HackerRank",
        value: "5 Star",
        description: "Gold Badge in C++ and Problem Solving",
        icon: <Star size={32} color="#fbbf24" />
    },
    {
        title: "Taapmaan Winner",
        value: "1st Place",
        description: "National level IoT Hackathon winner",
        icon: <Trophy size={32} color="#fbbf24" />
    },
    {
        title: "IEM Hackathon",
        value: "Finalist",
        description: "Top 10 teams among 100+ participants",
        icon: <Award size={32} color="#fbbf24" />
    }
];

const Achievements = () => {
    return (
        <section className="section" style={{ background: 'var(--primary-dark)', color: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Achievements</h2>
                    <p style={{ opacity: 0.8 }}>Recognition and milestones in my coding journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
                    {achievements.map((item, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,255,255,0.1)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.value}</h3>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{item.title}</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
