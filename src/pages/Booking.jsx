import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { bookAppointment } from '../services/api';

const Booking = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        patientName: '',
        patientPhone: '',
        date: '',
        timeSlot: '',
        type: 'clinic',
        reason: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
            alert('Please login to book an appointment.');
            navigate('/portal');
            return;
        }

        try {
            await bookAppointment(formData);
            alert('Appointment Request Sent! We will confirm shortly.');
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Error booking appointment. Please try again.');
        }
    };

    return (
        <div className="section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

                    {/* Info Side */}
                    <div>
                        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>Book an Appointment</h1>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Schedule a consultation with Dr. Rocky Patel. Choose between in-clinic visit or online video consultation.
                        </p>

                        <div className="card" style={{ background: 'var(--bg-light)', border: 'none' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Clinic Hours</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Monday - Saturday</span>
                                <span style={{ fontWeight: 600 }}>10:00 AM - 8:00 PM</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Sunday</span>
                                <span style={{ fontWeight: 600, color: 'var(--accent)' }}>Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="card">
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Consultation Type</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="type"
                                            value="clinic"
                                            checked={formData.type === 'clinic'}
                                            onChange={handleChange}
                                        />
                                        In-Clinic Visit
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="type"
                                            value="online"
                                            checked={formData.type === 'online'}
                                            onChange={handleChange}
                                        />
                                        Online Video Consult
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                    <input
                                        type="text"
                                        name="patientName"
                                        required
                                        placeholder="John Doe"
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
                                <div style={{ position: 'relative' }}>
                                    <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                    <input
                                        type="tel"
                                        name="patientPhone"
                                        required
                                        placeholder="+91 98765 43210"
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-md">
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Date</label>
                                    <div style={{ position: 'relative' }}>
                                        <Calendar size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Preferred Time</label>
                                    <div style={{ position: 'relative' }}>
                                        <Clock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                        <select
                                            name="timeSlot"
                                            required
                                            style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Time</option>
                                            <option value="morning">Morning (10AM - 1PM)</option>
                                            <option value="afternoon">Afternoon (2PM - 5PM)</option>
                                            <option value="evening">Evening (6PM - 8PM)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Reason for Visit</label>
                                <div style={{ position: 'relative' }}>
                                    <FileText size={18} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--text-light)' }} />
                                    <textarea
                                        name="reason"
                                        rows="3"
                                        placeholder="Briefly describe your symptoms..."
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Confirm Booking
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;
