import React from 'react';
import { ArrowRight, PlayCircle, BookOpen, Globe, Shield } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero animate-fade" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">INDIA'S First Platform</div>
                    <h1 className="hero-title">
                        Where <span className="highlight">Guidance</span> Meets the Future
                    </h1>
                    <p className="hero-subtitle">
                        India's first Education Journalism platform exposing Myths, Mistakes, and Realities. Empowering youth with global internships and career mentorship.
                    </p>
                    <div className="hero-features">
                        <div className="feature-item"><Globe size={18} className="feature-icon" /> Global Internship Gateway</div>
                        <div className="feature-item"><BookOpen size={18} className="feature-icon" /> Future-Skills Academy</div>
                        <div className="feature-item"><Shield size={18} className="feature-icon" /> Truth Platform</div>
                    </div>
                    <div className="hero-cta">
                        <a href="/learn-more" className="btn btn-primary">
                            Learn More <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#about" className="btn btn-outline">
                            <PlayCircle size={18} style={{ marginRight: '8px' }} /> Watch Video
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
