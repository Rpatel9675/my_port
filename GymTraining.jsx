import React, { useState, useEffect } from 'react';
import './GymTraining.css';

const GymTraining = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="gym-container">
      {/* Navigation */}
      <nav className={`gym-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          Iron<span>Forge</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#membership">Membership</a></li>
        </ul>
        <button className="btn-primary">Join Now</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Forge Your<br />Legacy</h1>
          <p className="hero-subtitle">Elite training facilities for those who refuse to settle for average.</p>
          <button className="btn-primary">Start Your Journey</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="programs" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why <span>Choose Us</span></h2>
          <p>Experience the difference of a world-class training environment.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💪</div>
            <h3>Premium Equipment</h3>
            <p>State-of-the-art machinery and free weights from top brands like Hammer Strength and Eleiko.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🥊</div>
            <h3>Expert Coaching</h3>
            <p>Certified trainers who design personalized programs to help you smash your goals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧘</div>
            <h3>Recovery Zone</h3>
            <p>Sauna, steam rooms, and cryotherapy to help your body recover and perform at its peak.</p>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="membership-section">
        <div className="section-header">
          <h2 className="section-title">Membership <span>Plans</span></h2>
          <p>Choose the tier that fits your ambition.</p>
        </div>
        <div className="plans-grid">
          <div className="plan-card">
            <div className="plan-name">Standard</div>
            <div className="plan-price">$49<span>/mo</span></div>
            <ul className="plan-features">
              <li>Access to Gym Floor</li>
              <li>Locker Room Access</li>
              <li>Free WiFi</li>
              <li>1 Guest Pass/Month</li>
            </ul>
            <button className="btn-primary" style={{backgroundColor: 'transparent', border: '1px solid var(--primary-color)'}}>Select Plan</button>
          </div>
          
          <div className="plan-card featured">
            <div className="plan-name">Elite</div>
            <div className="plan-price">$89<span>/mo</span></div>
            <ul className="plan-features">
              <li>24/7 Access</li>
              <li>Group Classes Included</li>
              <li>Sauna & Steam Room</li>
              <li>Personal Training Session (1x)</li>
              <li>Unlimited Guest Passes</li>
            </ul>
            <button className="btn-primary">Select Plan</button>
          </div>

          <div className="plan-card">
            <div className="plan-name">Pro Athlete</div>
            <div className="plan-price">$149<span>/mo</span></div>
            <ul className="plan-features">
              <li>All Elite Benefits</li>
              <li>Weekly PT Sessions</li>
              <li>Nutrition Planning</li>
              <li>Recovery Zone Access</li>
              <li>Private Locker</li>
            </ul>
            <button className="btn-primary" style={{backgroundColor: 'transparent', border: '1px solid var(--primary-color)'}}>Select Plan</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gym-footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="nav-logo">Iron<span>Forge</span></div>
            <p style={{color: 'var(--text-dim)', marginTop: '1rem', maxWidth: '300px'}}>
              Building stronger bodies and minds since 2010. Join the movement today.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Trainers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2023 IronForge Gym. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default GymTraining;
