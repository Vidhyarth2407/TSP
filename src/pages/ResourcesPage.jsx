import React from 'react';
import '../styles/ResourcesPage.css';
import Logo from '../assets/images/Logo/Logo.svg';
import Illustration1 from '../assets/images/resources/illustration_1.png';
import Illustration2 from '../assets/images/resources/illustration_2.png';
import HomepageBanner from '../assets/images/Homepage/Homepage Banner.svg';

const ResourcesPage = () => {
    const resources = [
        {
            id: 1,
            title: "The Morning That Showed Me Why Inner Strengths Matter",
            image: Illustration1,
            color: "#E91E63"
        },
        {
            id: 2,
            title: "Learning to Read Matters More Than We Think",
            image: Illustration2,
            color: "#0A1F44"
        },
        {
            id: 3,
            title: "Learning to Read Matters More Than We Think",
            image: null,
            color: "#fcb116"
        },
        {
            id: 4,
            title: "The Morning That Showed Me Why Inner Strengths Matter",
            image: null,
            color: "#b0d236"
        },
        {
            id: 5,
            title: "Learning to Read Matters More Than We Think",
            image: null,
            color: "#f04c23"
        },
        {
            id: 6,
            title: "Learning to Read Matters More Than We Think",
            image: null,
            color: "#45bfb4"
        }
    ];

    return (
        <div className="resources-page pt-32">
            <div className="puzzle-hero container mx-auto flex justify-center px-4 mb-20">
                <img src={HomepageBanner} alt="The Starry Path Banner" className="max-w-6xl w-full h-auto" />
            </div>

            <div className="resources-grid container mx-auto px-4 mb-24">
                {resources.map((item) => (
                    <div key={item.id} className="resource-card group">
                        <div className="card-image-wrapper shadow-lg transition-all duration-300 group-hover:shadow-xl"
                            style={{ backgroundColor: item.image ? 'transparent' : item.color }}>
                            {item.image ? (
                                <img src={item.image} alt={item.title} className="card-image" />
                            ) : (
                                <div className="w-full h-full" style={{ backgroundColor: item.color }}></div>
                            )}
                        </div>
                        <h3 className="card-title text-center mt-4 group-hover:text-indigo-600 transition-colors">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourcesPage;
