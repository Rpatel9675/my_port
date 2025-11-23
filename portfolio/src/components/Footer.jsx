import React from 'react';
import { FaHeart } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="py-8 bg-[var(--card-bg)] border-t border-[var(--border-color)] text-center">
            <div className="container">
                <p className="flex items-center justify-center gap-2 opacity-80 mb-2">
                    Made with <FaHeart className="text-red-500" /> by {portfolioData.personalDetails.fullName}
                </p>
                <p className="text-sm opacity-60">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
