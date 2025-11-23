import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (register(name, email, password)) {
            navigate('/');
        }
    };

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("https://placehold.co/1920x1080/e8dcd1/8b4513?text=Khadi+Texture")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="card" style={{
                width: '100%',
                maxWidth: '450px',
                padding: '3rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(139, 69, 19, 0.1)'
            }}>
                <div className="text-center mb-4">
                    <h2 style={{
                        fontSize: '2rem',
                        color: 'var(--color-primary)',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-family-serif)'
                    }}>Join Somkrit Khadi</h2>
                    <p style={{ color: 'var(--color-gray)' }}>Create an account to start shopping</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" style={{ marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="input-field"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ padding: '0.75rem' }}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" style={{ marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="input-field"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ padding: '0.75rem' }}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" style={{ marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            placeholder="Create a strong password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ padding: '0.75rem' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" style={{ padding: '0.75rem', fontSize: '1rem' }}>
                        Create Account
                    </button>
                </form>

                <div className="text-center mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-gray-light)' }}>
                    <p style={{ fontSize: '0.9rem' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
