import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Sections.css';

const Footer = () => {
    return (
        <footer style={{ background: '#090317', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', marginBottom: '3rem' }}>

                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '2px', background: 'linear-gradient(90deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>MOMENTOR</h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            India's first Education Journalism platform and Future-Skills Training Academy. Empowering youth with global internships and career mentorship.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>
                            <a href="#" style={{ color: 'var(--primary)', transition: 'color 0.3s' }}>Facebook</a>
                            <a href="#" style={{ color: 'var(--primary)', transition: 'color 0.3s' }}>Twitter</a>
                            <a href="#" style={{ color: 'var(--primary)', transition: 'color 0.3s' }}>Instagram</a>
                            <a href="#" style={{ color: 'var(--primary)', transition: 'color 0.3s' }}>LinkedIn</a>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#about" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}>About Us</a></li>
                            <li><a href="#courses" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}>Courses</a></li>
                            <li><a href="#what-we-do" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}>What We Do</a></li>
                            <li><a href="#team" style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}>Our Team</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '1 1 250px' }}>
                        <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dim)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={18} color="var(--primary)" /> India</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={18} color="var(--primary)" /> info@momentor.in</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={18} color="var(--primary)" /> +91 0000000000</li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} MOMENTOR. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: 'var(--text-dim)' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--text-dim)' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
