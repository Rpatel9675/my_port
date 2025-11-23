import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        address: 'Parsa Chapra, Saran, Bihar', // Default address as per request
        city: 'Saran',
        state: 'Bihar',
        zip: '841301',
        paymentMethod: 'cod'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setTimeout(() => {
            alert('Order placed successfully! Thank you for shopping with Somkrit Khadi.');
            clearCart();
            navigate('/');
        }, 1000);
    };

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            <h2 className="mb-4 text-center">Checkout</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 className="mb-4">Shipping Address</h3>
                    <form id="checkout-form" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="input-field"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1">Address</label>
                            <textarea
                                name="address"
                                className="input-field"
                                rows="3"
                                required
                                value={formData.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="mb-1">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="input-field"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    className="input-field"
                                    required
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1">ZIP Code</label>
                            <input
                                type="text"
                                name="zip"
                                className="input-field"
                                required
                                value={formData.zip}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>

                <div className="card" style={{ padding: 'var(--spacing-md)', height: 'fit-content' }}>
                    <h3 className="mb-4">Payment Method</h3>
                    <div className="flex flex-col gap-2 mb-4">
                        <label className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={formData.paymentMethod === 'cod'}
                                onChange={handleChange}
                            />
                            <span>Cash on Delivery (COD)</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={formData.paymentMethod === 'card'}
                                onChange={handleChange}
                            />
                            <span>Credit/Debit Card (Mock)</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="upi"
                                checked={formData.paymentMethod === 'upi'}
                                onChange={handleChange}
                            />
                            <span>UPI (Mock)</span>
                        </label>
                    </div>

                    <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between mb-2 font-bold text-lg">
                            <span>Total Amount</span>
                            <span>₹{cartTotal}</span>
                        </div>
                        <button
                            type="submit"
                            form="checkout-form"
                            className="btn btn-primary btn-block mt-4"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
