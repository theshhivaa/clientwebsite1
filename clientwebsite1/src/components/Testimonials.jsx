import React from 'react';
import { Quote } from 'lucide-react';
import './Sections.css';

const Testimonials = () => {
    return (
        <section id="testimonials" className="alt-bg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our students find countless reasons to trust us</h2>
                </div>

                <div className="grid-3">
                    <div className="glass-box" style={{ position: 'relative' }}>
                        <Quote size={40} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1, color: 'var(--primary)' }} />
                        <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                            "Momentor guided me through career selection, skill building, and professional development smoothly. Their support made my dream of a global career a reality."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                            <div>
                                <h4 style={{ margin: 0, color: '#fff', fontSize: '1.05rem' }}>Akhil Kumar</h4>
                                <p style={{ margin: 0, color: 'var(--primary)', fontSize: '0.85rem' }}>MS in UK</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-box" style={{ position: 'relative' }}>
                        <Quote size={40} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1, color: 'var(--primary)' }} />
                        <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                            "From counselling to career readiness, everything was transparent and well-organised. I highly recommend Momentor to anyone planning their professional future."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                            <div>
                                <h4 style={{ margin: 0, color: '#fff', fontSize: '1.05rem' }}>Sneha R</h4>
                                <p style={{ margin: 0, color: 'var(--primary)', fontSize: '0.85rem' }}>MBA in Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
