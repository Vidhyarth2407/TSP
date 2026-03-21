import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../../assets/images/Homepage/Star.svg';

const StarSection = () => {
    return (
        <section className="bg-transparent py-12 px-4 max-w-[1200px] mx-auto text-left relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                {/* Left: Star Image */}
                <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-right">
                    <img
                        src={Star}
                        alt="Star Graphic"
                        className="w-[300px] md:w-[400px] object-contain"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="flex-1 text-left" data-aos="fade-left">
                    <h2 className="text-[var(--color-dark-navy)] font-[var(--font-heading)] text-3xl md:text-4xl mb-6 uppercase leading-tight font-bold">
                        WHAT WILL YOUR CHILD LEARN?<br />(AGES 5-12)
                    </h2>
                    <ul className="space-y-4 font-[var(--font-accent)] text-lg" style={{ color: '#636466' }}>
                        {[
                            "Respond when things feel hard",
                            "Identify what’s within their control",
                            "Understand how effort and focus work",
                            "Keep trying when learning is challenging",
                            "Acknowledge how emotions shape decisions",
                            "Build and maintain healthy relationships",
                            "How to choose helpful thoughts",
                            "Develop habits of mind that support long-term learning"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-sm mt-1.5" style={{ color: '#636466' }}>•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 flex justify-center md:justify-start">
                        <Link to="/programs" className="btn-join inline-block uppercase text-sm md:text-xl px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 no-underline font-bold">
                            UNLOCK THEIR POTENTIAL
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StarSection;
