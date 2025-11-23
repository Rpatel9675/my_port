import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
    const { personalDetails } = portfolioData;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
    };

    return (
        <section id="contact" className="section bg-[var(--bg-color)]">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                        <p className="mb-8 opacity-80">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[var(--card-bg)] rounded-full text-[var(--primary-color)] shadow-sm">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <a href={`mailto:${personalDetails.email}`} className="opacity-80 hover:text-[var(--primary-color)]">
                                        {personalDetails.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[var(--card-bg)] rounded-full text-[var(--primary-color)] shadow-sm">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="opacity-80">{personalDetails.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[var(--card-bg)] rounded-full text-[var(--primary-color)] shadow-sm">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Location</h4>
                                    <p className="opacity-80">{personalDetails.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-lg border border-[var(--border-color)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
