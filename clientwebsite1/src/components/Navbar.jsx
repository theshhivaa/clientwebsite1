import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://www.momentor.in/_next/image?url=%2Fimages%2Flogos.png&w=384&q=75" alt="Momentor Logo" style={{ height: '32px', objectFit: 'contain' }} />
                </a>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
                    <a href="#why-choose-us" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</a>
                    <a href="#what-we-do" onClick={() => setIsMobileMenuOpen(false)}>What We Do</a>
                    <a href="/learn-more" className="btn btn-nav" onClick={() => setIsMobileMenuOpen(false)}>Learn More</a>
                </div>

                <button className="mobile-toggle" aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
