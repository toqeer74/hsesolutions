import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Stats from '../components/Stats';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
