import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container flex justify-between items-center">
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-family-serif)' }}>
                    Somkrit Khadi
                </Link>

                {/* Desktop Menu */}
                <div className="flex items-center gap-4" style={{ display: 'flex' }}>
                    <Link to="/" className="btn btn-secondary" style={{ border: 'none', color: 'var(--color-white)' }}>Home</Link>
                    <Link to="/login" className="btn btn-secondary" style={{ border: 'none', color: 'var(--color-white)' }}>
                        <User size={20} />
                    </Link>
                    <Link to="/cart" className="btn btn-secondary" style={{ border: 'none', color: 'var(--color-white)', position: 'relative' }}>
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                backgroundColor: 'var(--color-accent)',
                                color: 'white',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.75rem'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
