import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/programs.css';
import SEO from '../components/SEO';
import HiddenNavigation from '../components/HiddenNavigation';

// Import Components
import ProgramsHero from '../components/Programs/ProgramsHero';
import InnerStarsProgram from '../components/Programs/InnerStarsProgram';
import LearningStarsProgram from '../components/Programs/LearningStarsProgram';
import ProgramComparison from '../components/Programs/ProgramComparison';

const ProgramsPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });

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

    const seoLinks = [
        { label: "Inner Stars", to: "/inner-stars" },
        { label: "Learning Stars", to: "/learning-stars" },
        { label: "Book Now", to: "#assessment-section" }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://thestarrypath.com.au/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Programs",
                        "item": "https://thestarrypath.com.au/programs"
                    }
                ]
            },
            {
                "@type": "ItemList",
                "name": "The Starry Path Children's Programs",
                "description": "Life skills and literacy programs for children aged 5-12 in Point Cook.",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Inner Stars",
                        "description": "Mindset, resilience, and life skills development for children.",
                        "url": "https://thestarrypath.com.au/inner-stars"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Learning Stars",
                        "description": "Structured literacy support for reading, spelling, and writing mastery.",
                        "url": "https://thestarrypath.com.au/learning-stars"
                    }
                ]
            }
        ]
    };

    return (
        <div className="programs-page">
            <SEO
                title="Programs for Children 5–12 | Point Cook | The Starry Path"
                description="Explore The Starry Path programs for children aged 5–12 in Point Cook, including Inner Stars for life skills development and Learning Stars for literacy support."
                keywords={[
                    "children’s programs Point Cook",
                    "life skills and literacy programs for children",
                    "after school programs Point Cook",
                    "kids programs Point Cook",
                    "literacy and life skills support for children",
                ]}
                schema={schema}
            />
            <ProgramsHero />
            <div id="inner-stars">
                <InnerStarsProgram />
            </div>
            <div id="learning-stars">
                <LearningStarsProgram />
            </div>
            <ProgramComparison />
            <HiddenNavigation links={seoLinks} />
        </div>
    );
};

export default ProgramsPage;
