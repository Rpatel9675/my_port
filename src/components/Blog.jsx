import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: "Getting Started with Android Automotive IVI",
        excerpt: "A beginner's guide to understanding the architecture of Android Automotive OS and building your first IVI app.",
        date: "Nov 15, 2025",
        category: "Embedded Systems"
    },
    {
        title: "Understanding Device Trees in Linux",
        excerpt: "Deep dive into Device Trees, how they work, and why they are crucial for embedded Linux development.",
        date: "Oct 28, 2025",
        category: "Linux Kernel"
    },
    {
        title: "Mastering Dynamic Programming",
        excerpt: "Tips and tricks to solve complex dynamic programming problems on LeetCode efficiently.",
        date: "Sep 10, 2025",
        category: "DSA"
    }
];

const Blog = () => {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Tech Articles</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Sharing my learning and experiences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                    {blogs.map((blog, index) => (
                        <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {blog.category}
                                </span>
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', float: 'right' }}>{blog.date}</span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>{blog.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                                {blog.excerpt}
                            </p>
                            <a href="#" className="btn-link" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Read More <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
