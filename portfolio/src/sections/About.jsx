import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const About = () => {
    const { personalDetails } = portfolioData;

    return (
        <section id="about" className="section bg-[var(--bg-color)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <img
                                src="https://placehold.co/600x400/222/fff?text=About+Me"
                                alt="Working"
                                className="rounded-xl shadow-lg w-full object-cover h-80"
                            />
                        </div>

                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">
                                Embedded Systems & Full Stack Developer
                            </h3>
                            <p className="text-[var(--text-color)] mb-6 leading-relaxed opacity-90">
                                {personalDetails.about}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h4 className="font-bold text-3xl text-[var(--primary-color)]">3+</h4>
                                    <p className="text-sm opacity-80">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-3xl text-[var(--secondary-color)]">10+</h4>
                                    <p className="text-sm opacity-80">Projects Completed</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-3xl text-[var(--primary-color)]">5+</h4>
                                    <p className="text-sm opacity-80">Certifications</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-3xl text-[var(--secondary-color)]">24/7</h4>
                                    <p className="text-sm opacity-80">Support</p>
                                </div>
                            </div>

                            <a href="#contact" className="btn btn-primary">Contact Me</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
