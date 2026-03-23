import React from 'react';
import { Laptop, Navigation, Plane, Video, CheckCircle2 } from 'lucide-react';
import './Sections.css';

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="alt-bg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-subtitle">Real skills, real exposure, real guidance.</p>
                </div>

                <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

                    <div className="glass-box action-card" style={{ padding: '2rem 1.5rem' }}>
                        <div className="icon-wrapper"><Laptop size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Future Skills Training</h3>
                        <ul className="checklist">
                            <li><CheckCircle2 size={16} className="check-icon" /> Global student readiness program</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Communication & Etiquette</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Sales & Business Development</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Digital & AI Literacy</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Workplace Behaviour</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Leadership & Mindset</li>
                        </ul>
                    </div>

                    <div className="glass-box action-card" style={{ padding: '2rem 1.5rem' }}>
                        <div className="icon-wrapper"><Navigation size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Career Mentorship</h3>
                        <p className="card-text">Direction, clarity, and personalised guidance that help youth make confident career decisions and long-term plans.</p>
                    </div>

                    <div className="glass-box action-card" style={{ padding: '2rem 1.5rem' }}>
                        <div className="icon-wrapper"><Plane size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Global Internship Programs</h3>
                        <p className="card-text">Our flagship programs combine industry readiness with international internship opportunities in destinations such as Dubai and Vietnam, providing real global exposure.</p>
                    </div>

                    <div className="glass-box action-card" style={{ padding: '2rem 1.5rem' }}>
                        <div className="icon-wrapper"><Video size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Youth Awareness & Journalism</h3>
                        <ul className="checklist">
                            <li><CheckCircle2 size={16} className="check-icon" /> Video stories</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Research-based articles</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Industry interviews</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Student case studies</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Investigation into hidden career challenges</li>
                            <li><CheckCircle2 size={16} className="check-icon" /> Career crisis analysis</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
