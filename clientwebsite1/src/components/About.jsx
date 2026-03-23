import React from 'react';
import './About.css';
import { Target, Users, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-subtitle">Bridging the gap between education and global careers.</p>
                </div>

                <div className="about-grid">
                    <div className="glass-box about-card">
                        <img src="https://www.momentor.in/_next/image?url=%2Fimages%2Feurope.webp&w=3840&q=75" alt="Education Journalism" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }} />
                        <h3 className="card-title">Pioneering Education Journalism</h3>
                        <p className="card-text">
                            Momentor is India's first dedicated education journalism platform, bringing truth and clarity to the complex world of global careers. We expose industry trends and provide raw, honest insights.
                        </p>
                        <ul className="feature-list">
                            <li><Target className="list-icon" /> <strong>Unbiased Reporting:</strong> No marketing agendas, just raw reporting.</li>
                            <li><BookOpen className="list-icon" /> <strong>Deep-dive Guides:</strong> Complex systems broken down for students.</li>
                            <li><Users className="list-icon" /> <strong>Data-driven Mentorship:</strong> Based on real-world professional metrics.</li>
                        </ul>
                    </div>

                    <div className="glass-box about-card">
                        <img src="https://www.momentor.in/_next/image?url=%2Fimages%2Fteam-about.webp&w=3840&q=75" alt="About Team" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }} />
                        <h3 className="card-title">A Trusted Partner in Professional Excellence</h3>
                        <p className="card-text">
                            We are a dedicated mentorship and career consultancy committed to helping ambitious students access world-class education opportunities. From career discovery to professional placement, we provide structured, transparent, and personalized guidance at every step of the journey.
                        </p>
                        <p className="card-text" style={{ marginTop: '1rem' }}>
                            Our team works closely with students to understand their academic background, career aspirations, and financial considerations — ensuring that every application is strategic, well-prepared, and aligned with long-term goals.
                        </p>
                        <div className="stats-box">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Job Seekers Guided</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
