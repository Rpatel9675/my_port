import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Education from '../components/Education';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Education />
        </div>
    );
};

export default Home;
