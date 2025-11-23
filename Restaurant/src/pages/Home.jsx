import React from 'react';
import ProductCard from '../components/ProductCard';

const PRODUCTS = [
    {
        id: 1,
        name: 'Classic Khadi Kurta',
        description: 'Hand-spun cotton kurta in earthy tones. Perfect for summer.',
        price: 1299,
        image: 'https://placehold.co/400x500/e8dcd1/8b4513?text=Khadi+Kurta',
        badge: 'Bestseller'
    },
    {
        id: 2,
        name: 'Khadi Silk Saree',
        description: 'Elegant silk saree with traditional border design.',
        price: 3499,
        image: 'https://placehold.co/400x500/d2b48c/8b4513?text=Silk+Saree',
        badge: 'New'
    },
    {
        id: 3,
        name: 'Cotton Nehru Jacket',
        description: 'Stylish sleeveless jacket to layer over your kurta.',
        price: 1899,
        image: 'https://placehold.co/400x500/a0522d/ffffff?text=Nehru+Jacket'
    },
    {
        id: 4,
        name: 'Handwoven Dupatta',
        description: 'Lightweight and colorful dupatta to accessorize.',
        price: 599,
        image: 'https://placehold.co/400x500/fdf5e6/3e2723?text=Dupatta'
    },
    {
        id: 5,
        name: 'Khadi Shirt',
        description: 'Modern fit shirt made from organic khadi cotton.',
        price: 999,
        image: 'https://placehold.co/400x500/8b4513/ffffff?text=Khadi+Shirt',
        badge: 'Trending'
    },
    {
        id: 6,
        name: 'Linen Trousers',
        description: 'Comfortable and breathable trousers for daily wear.',
        price: 1499,
        image: 'https://placehold.co/400x500/3e2723/ffffff?text=Linen+Trousers'
    }
];

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://placehold.co/1920x600/8b4513/ffffff?text=Somkrit+Khadi+Collection")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'var(--color-white)',
                padding: '6rem 0',
                marginBottom: 'var(--spacing-lg)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Authentic Khadi Collection</h1>
                    <p style={{ fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Discover the elegance of hand-spun fabric. Sustainable, comfortable, and timelessly stylish.
                    </p>
                    <button className="btn btn-primary mt-4" style={{ fontSize: '1.2rem', padding: '0.75rem 2rem', backgroundColor: 'var(--color-white)', color: 'var(--color-primary)' }}>
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Product Grid */}
            <section className="container mb-4">
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '2.5rem', color: 'var(--color-primary)' }}>Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PRODUCTS.map(product => (
                        <div key={product.id} style={{ position: 'relative' }}>
                            <ProductCard product={product} />
                            {product.badge && (
                                <span style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    backgroundColor: 'var(--color-accent)',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    zIndex: 1
                                }}>
                                    {product.badge}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
