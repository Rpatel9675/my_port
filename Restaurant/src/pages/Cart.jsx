import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="container text-center" style={{ padding: 'var(--spacing-xl) 0' }}>
                <h2>Your Cart is Empty</h2>
                <p className="mb-4">Looks like you haven't added any items yet.</p>
                <Link to="/" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)' }}>
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    {cart.map((item) => (
                        <div key={item.id} className="card flex mb-4" style={{ padding: 'var(--spacing-md)', alignItems: 'center' }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--border-radius)', marginRight: 'var(--spacing-md)' }}
                            />
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                                <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>₹{item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="btn btn-secondary"
                                    style={{ padding: '0.25rem', borderRadius: '50%', width: '30px', height: '30px' }}
                                >
                                    <Minus size={16} />
                                </button>
                                <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="btn btn-secondary"
                                    style={{ padding: '0.25rem', borderRadius: '50%', width: '30px', height: '30px' }}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ marginLeft: 'var(--spacing-md)', color: 'var(--color-accent)', background: 'none' }}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="card" style={{ padding: 'var(--spacing-md)' }}>
                        <h3 className="mb-4">Order Summary</h3>
                        <div className="flex justify-between mb-4">
                            <span>Subtotal</span>
                            <span>₹{cartTotal}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <hr style={{ margin: 'var(--spacing-md) 0', border: 'none', borderTop: '1px solid var(--color-gray-light)' }} />
                        <div className="flex justify-between mb-4" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            <span>Total</span>
                            <span>₹{cartTotal}</span>
                        </div>
                        <button
                            onClick={() => navigate('/checkout')}
                            className="btn btn-primary btn-block"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
