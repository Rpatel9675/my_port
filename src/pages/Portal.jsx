import React, { useState, useEffect } from 'react';
import { Lock, User, Phone, Activity, Calendar, LogOut, Edit2, Save } from 'lucide-react';
import { login, register, updateProfile, getMyAppointments } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Portal = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        height: '',
        weight: '',
        address: ''
    });

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const { data } = await getMyAppointments();
                setAppointments(data);
            } catch (error) {
                console.error("Error fetching appointments", error);
            }
        };

        const storedUser = localStorage.getItem('userInfo');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserInfo(user);
            setFormData(prev => ({ ...prev, ...user }));
            fetchAppointments();
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const { data } = await login({ email: formData.email, password: formData.password });
                localStorage.setItem('userInfo', JSON.stringify(data));
                window.dispatchEvent(new Event('user-login'));
                setUserInfo(data);
                alert('Login Successful!');
            } else {
                if (formData.password !== formData.confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }
                const { data } = await register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone
                });
                localStorage.setItem('userInfo', JSON.stringify(data));
                window.dispatchEvent(new Event('user-login'));
                setUserInfo(data);
                alert('Registration Successful!');
            }
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    const handleUpdateProfile = async () => {
        try {
            const { data } = await updateProfile(formData);
            localStorage.setItem('userInfo', JSON.stringify(data));
            setUserInfo(data);
            setIsEditing(false);
            alert('Profile Updated Successfully!');
        } catch (err) {
            console.error("Profile Update Error:", err);
            alert('Error updating profile');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        window.dispatchEvent(new Event('user-login'));
        setUserInfo(null);
        navigate('/');
    };

    if (userInfo) {
        return (
            <div className="section" style={{ background: 'var(--bg-light)', minHeight: '80vh' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

                        {/* Sidebar / Profile Card */}
                        <div className="card">
                            <div className="text-center" style={{ marginBottom: '2rem' }}>
                                <div style={{ width: '100px', height: '100px', background: 'var(--primary)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.5rem' }}>
                                    {userInfo.name.charAt(0)}
                                </div>
                                <h2>{userInfo.name}</h2>
                                <p style={{ color: 'var(--text-muted)' }}>{userInfo.email}</p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <button onClick={() => setIsEditing(!isEditing)} className="btn btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <Edit2 size={18} /> {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                                </button>
                                <button onClick={handleLogout} className="btn" style={{ width: '100%', background: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <LogOut size={18} /> Logout
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            {/* Health Stats */}
                            <div className="card">
                                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Activity size={24} color="var(--primary)" /> Health Statistics
                                </h3>
                                {isEditing ? (
                                    <div className="grid grid-cols-2 gap-md">
                                        <div>
                                            <label>Height (cm)</label>
                                            <input type="number" name="height" value={formData.height || ''} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                        </div>
                                        <div>
                                            <label>Weight (kg)</label>
                                            <input type="number" name="weight" value={formData.weight || ''} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                        </div>
                                        <div className="col-span-2">
                                            <label>Address</label>
                                            <input type="text" name="address" value={formData.address || ''} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                        </div>
                                        <button onClick={handleUpdateProfile} className="btn btn-primary col-span-2" style={{ marginTop: '1rem' }}>
                                            <Save size={18} /> Save Changes
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-3 gap-md text-center">
                                        <div style={{ padding: '1rem', background: '#f0f9ff', borderRadius: '8px' }}>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Height</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>{userInfo.height || '-'} cm</p>
                                        </div>
                                        <div style={{ padding: '1rem', background: '#f0fdf4', borderRadius: '8px' }}>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Weight</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>{userInfo.weight || '-'} kg</p>
                                        </div>
                                        <div style={{ padding: '1rem', background: '#fff7ed', borderRadius: '8px' }}>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>BMI</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                                                {userInfo.height && userInfo.weight ? (userInfo.weight / ((userInfo.height / 100) ** 2)).toFixed(1) : '-'}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Appointments */}
                            <div className="card">
                                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={24} color="var(--primary)" /> Recent Appointments
                                </h3>
                                {appointments.length > 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {appointments.map((apt) => (
                                            <div key={apt._id} style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div>
                                                    <p style={{ fontWeight: 600 }}>{new Date(apt.date).toLocaleDateString()} at {apt.timeSlot}</p>
                                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{apt.type === 'online' ? 'Video Consultation' : 'In-Clinic Visit'}</p>
                                                </div>
                                                <span style={{
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '999px',
                                                    fontSize: '0.85rem',
                                                    background: apt.status === 'confirmed' ? '#dcfce7' : '#fef9c3',
                                                    color: apt.status === 'confirmed' ? '#166534' : '#854d0e'
                                                }}>
                                                    {apt.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p style={{ color: 'var(--text-muted)' }}>No appointments found.</p>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light)' }}>
            <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem' }}>
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Patient Portal</h1>
                    <p style={{ color: 'var(--text-muted)' }}>{isLogin ? 'Login to access your dashboard' : 'Create an account to get started'}</p>
                </div>

                <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                    {!isLogin && (
                        <>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                                <div style={{ position: 'relative' }}>
                                    <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
                                </div>
                            </div>
                        </>
                    )}

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your Email" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                            <input type="password" name="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
                        </div>
                    </div>

                    {!isLogin && (
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Confirm Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
                            </div>
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>

                    <div className="text-center">
                        <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'underline' }}>
                            {isLogin ? 'New User? Register here' : 'Already have an account? Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Portal;
