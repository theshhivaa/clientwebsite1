import React from 'react';
import { ArrowUpRight, GraduationCap, Briefcase, Coffee } from 'lucide-react';
import './Sections.css';

const Courses = () => {
    return (
        <section id="courses" className="alt-bg">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Courses</h2>
                    <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>Our courses prepare students for international education and global careers. We focus on academic excellence and professional readiness. Every program builds confidence and competitive advantage. Step forward with clarity. Study globally.</p>
                </div>

                <div className="grid-3">
                    <div className="glass-box action-card">
                        <div className="icon-wrapper"><Briefcase size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Global Career Readiness Program (GCRP)</h3>
                        <p className="card-text">Transform into a globally employable professional through structured career skill training and paid international internship exposure with expert mentor guidance.</p>
                        <a href="/courses/gcrp" className="link-arrow">View Details <ArrowUpRight size={16} /></a>
                    </div>

                    <div className="glass-box action-card">
                        <div className="icon-wrapper"><GraduationCap size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Global Student Readiness Program (GSRP)</h3>
                        <p className="card-text">Prepare for the professional world with civic discipline, cultural intelligence, and real-world global behavior training to confidently succeed in any environment.</p>
                        <a href="/courses/gsrp" className="link-arrow">View Details <ArrowUpRight size={16} /></a>
                    </div>

                    <div className="glass-box action-card">
                        <div className="icon-wrapper"><Coffee size={28} /></div>
                        <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Global Hospitality & Readiness Training (GHRT)</h3>
                        <p className="card-text">Gain practical skills, service confidence, and international exposure to thrive in global hospitality, retail, and customer-focused industries.</p>
                        <a href="/courses/ghrt" className="link-arrow">View Details <ArrowUpRight size={16} /></a>
                    </div>
                </div>

                <div className="center-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <a href="https://www.momentor.in/courses" className="btn btn-primary">View All Courses <ArrowUpRight size={18} style={{ marginLeft: '8px' }} /></a>
                </div>
            </div>
        </section>
    );
};

export default Courses;
