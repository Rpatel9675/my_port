import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-bg-dark)', color: '#fff', padding: '2rem 0', textAlign: 'center', marginTop: '2rem' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Rocky Patel. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
