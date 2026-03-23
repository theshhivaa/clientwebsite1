import React from 'react';
import './Sections.css';

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Team</h2>
                    <p className="section-subtitle">Meet the experts guiding you to the future.</p>
                </div>

                <div className="grid-3" style={{ justifyContent: 'center' }}>
                    <div className="feature-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                        <img src="https://www.momentor.in/_next/image?url=%2Fimages%2Fmember1.jpeg&w=384&q=75" alt="Ms. Mehnaz" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover', display: 'block' }} />
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>Ms. Mehnaz</h3>
                        <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>Founder of KNACK</p>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.6' }}>Communication Trainer, Speech Therapist, and Audiologist</p>
                    </div>

                    <div className="feature-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                        <img src="https://www.momentor.in/_next/image?url=%2Fimages%2Fmember.jpeg&w=384&q=75" alt="Chayanika Indira" style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover', display: 'block' }} />
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>Chayanika Indira</h3>
                        <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>Trainer</p>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.6' }}>Public Speaking and Communication Skills Trainer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
