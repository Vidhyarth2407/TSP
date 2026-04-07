import React from 'react';
import { Link } from 'react-router-dom';
import Tangle from '../../assets/images/Homepage/Tangle.svg';

const InnerStarsSection = () => {
    return (
        <section className="py-20 lg:py-24 px-4 max-w-[1200px] mx-auto text-center relative">
            <div className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
                <h2 className="text-[1.7rem] md:text-[2.2rem] lg:text-[2.5rem] text-[var(--color-dark-navy)] mb-6 uppercase leading-tight font-[var(--font-heading)] font-bold whitespace-nowrap">
                    WHY DOES YOUR CHILD NEED INNER STARS?
                </h2>
                <p className="text-lg font-[var(--font-accent)] leading-relaxed mx-auto" style={{ color: '#636466' }}>
                    1 in 7 Australian children experience challenges such as anxiety, worry, or low confidence<br />
                    during their primary school years (ABS, 2023).
                </p>
            </div>

            {/* Breakout Tangle Image - Using overflow-hidden on a 100% width container */}
            <div className="w-full mt-12 overflow-hidden" data-aos="fade-up">
                <img
                    src={Tangle}
                    alt="Decorative Tangle"
                    className="w-full h-auto block"
                    style={{ transform: 'scale(1.1)' }}
                />
            </div>
        </section>
    );
};

export default InnerStarsSection;
