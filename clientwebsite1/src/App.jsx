import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <WhatWeDo />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
