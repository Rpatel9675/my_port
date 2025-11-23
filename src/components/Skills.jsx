import React from 'react';
import { Terminal, Cpu, Layout, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

const skillsData = [
    {
        id: 1,
        title: "Programming Languages",
        icon: <Terminal size={32} />,
        items: ["C", "C++", "Python", "Java", "Kotlin", "JavaScript", "TypeScript", "SQL"]
    },
    {
        id: 2,
        title: "Embedded Systems",
        icon: <Cpu size={32} />,
        items: ["Android Automotive IVI", "BSP Development", "Embedded Linux", "USB Protocols", "Bluetooth", "WiFi", "Ethernet", "Kernel IPC"]
    },
    {
        id: 3,
        title: "Frontend Development",
        icon: <Layout size={32} />,
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Framer Motion", "Material-UI"]
    },
    {
        id: 4,
        title: "Backend & Database",
        icon: <Server size={32} />,
        items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "REST APIs", "GraphQL", "Authentication (JWT)", "Socket.io"]
    },
    {
        id: 5,
        title: "Tools & Platforms",
        icon: <Wrench size={32} />,
        items: ["Git & GitHub", "Docker", "Linux", "VS Code", "Postman", "Jira", "Figma", "TIA Portal", "SolidWorks", "Arduino"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Skills & Expertise</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A comprehensive set of technical skills ranging from low-level embedded systems to modern full-stack web development.
                    </p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillsData.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="service-card"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="service-icon">
                                {skill.icon}
                            </div>
                            <h3 className="service-title">{skill.title}</h3>

                            <div className="service-content">
                                <ul className="service-list">
                                    {skill.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
