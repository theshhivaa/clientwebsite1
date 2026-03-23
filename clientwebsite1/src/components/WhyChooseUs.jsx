import React from 'react';
import { Target, HeartHandshake, Map, Sparkles, UserCheck } from 'lucide-react';
import './Sections.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Target size={24} />,
            title: "Industry-Driven Curriculum",
            desc: "Designed with employers and based on real workforce needs to ensure practical relevance and strong career readiness."
        },
        {
            icon: <HeartHandshake size={24} />,
            title: "Mentorship That Matters",
            desc: "We don't lecture — we mentor, guide, support, and transform individuals through personalised attention and real-world insight."
        },
        {
            icon: <Map size={24} />,
            title: "Real Opportunities",
            desc: "Access to internships, global exposure, and structured career pathways that go beyond traditional education."
        },
        {
            icon: <Sparkles size={24} />,
            title: "Training for the Future",
            desc: "AI-era readiness, international etiquette, communication mastery, and modern workplace competencies."
        },
        {
            icon: <UserCheck size={24} />,
            title: "Youth-Focused Approach",
            desc: "Designed specifically for ages 18–30 with flexible, practical, hands-on learning experiences."
        }
    ];

    return (
        <section id="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p className="section-subtitle">Empowering the youth with pathways that actually work.</p>
                </div>

                <div className="grid-3">
                    {reasons.map((reason, index) => (
                        <div key={index} className="feature-box">
                            <div className="icon-wrapper" style={{ width: '48px', height: '48px' }}>
                                {reason.icon}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#fff' }}>{reason.title}</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6' }}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
