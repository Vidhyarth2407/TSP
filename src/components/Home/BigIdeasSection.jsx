import React from 'react';
import { Link } from 'react-router-dom';
import BigIdeasBg from '../../assets/images/Homepage/Big Ideas.svg';

const BigIdeasSection = () => {
    return (
        <section className="section big-ideas-section">
            {/* Using the SVG as a full graphic as it likely contains the notebook lines and sticky notes */}
            <img src={BigIdeasBg} alt="Big Ideas" className="big-ideas-image" data-aos="zoom-in" />
            <div className="big-ideas-cta flex justify-center px-4" data-aos="fade-up" data-aos-delay="200">
                <Link
                    to="/programs"
                    className="btn-join font-bold uppercase text-sm md:text-2xl px-6 py-3 md:px-12 md:py-4 w-full md:w-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: '#E91E63' }}
                >
                    EXPLORE HOW TSP WORKS
                </Link>
            </div>
        </section>
    );
};

export default BigIdeasSection;
