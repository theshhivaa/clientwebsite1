import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './Sections.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What makes Momentor different?",
            a: "It's our unique approach to career guidance. We investigate and expose the realities of various industries and courses, providing you with unbiased information to make informed decisions."
        },
        {
            q: "How does the mentorship process work?",
            a: "We work one-on-one with you to understand your strengths and goals, then provide a structured roadmap including skill training and industry exposure to ensure you're ready for the professional world."
        },
        {
            q: "What are Future Skills?",
            a: "These are the competencies required in the modern workplace, including AI literacy, professional etiquette, emotional intelligence, and cross-cultural communication."
        },
        {
            q: "Who can join the programs?",
            a: "Any young professional or student (typically ages 18-30) looking for clarity in their career, seeking to upgrade their professional skills, or wanting global career exposure."
        },
        {
            q: "Do you provide global internships?",
            a: "Yes, our GCRP program includes exposure to international internship opportunities, providing real-world experience in global business hubs."
        }
    ];

    return (
        <section id="faq">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header">
                    <h2 className="section-title">Got questions? We've got answers!</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.3s'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                {faq.q}
                                {openIndex === index ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--primary)" />}
                            </button>

                            <div
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    opacity: openIndex === index ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease-in-out',
                                    padding: openIndex === index ? '0 1.5rem 1.5rem' : '0 1.5rem',
                                    color: 'var(--text-dim)',
                                    lineHeight: '1.6'
                                }}
                            >
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
