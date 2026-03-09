import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/programs.css';

// Import Components
import ProgramsHero from '../components/Programs/ProgramsHero';
import InnerStarsProgram from '../components/Programs/InnerStarsProgram';
import LearningStarsProgram from '../components/Programs/LearningStarsProgram';
import ProgramComparison from '../components/Programs/ProgramComparison';
import ProgramCTA from '../components/Programs/ProgramCTA';

const ProgramsPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        // Handle anchor scroll
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        };

        handleHashScroll();
        window.addEventListener('hashchange', handleHashScroll);
        return () => window.removeEventListener('hashchange', handleHashScroll);
    }, []);

    return (
        <div className="programs-page">
            <ProgramsHero />
            <div id="inner-stars">
                <InnerStarsProgram />
            </div>
            <div id="learning-stars">
                <LearningStarsProgram />
            </div>
            <ProgramComparison />
            <ProgramCTA />
        </div>
    );
};

export default ProgramsPage;
