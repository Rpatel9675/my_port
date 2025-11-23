import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="card flex flex-col">
            <div style={{ height: '250px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: 'var(--spacing-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>
                    {product.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                        ₹{product.price}
                    </span>
                    <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
