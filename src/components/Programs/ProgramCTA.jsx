import React from 'react';
import { Link } from 'react-router-dom';
import WaveImg from '../../assets/images/Programs/Wave.svg';
import "../../styles/components.css";

const ProgramCTA = () => {
    return (
        <section className="explore-section mt-4 mb-12 hidden md:block">
            <div className="footer-wave-container">

                {/* 🌊 Background Wave */}
                <img
                    src={WaveImg}
                    alt="Transition Wave"
                    className="footer-wave-bg"
                />

                {/* ✨ Text Flow SVG - Animated Text Layer aligned to Wave.svg coordinates */}
                <svg
                    viewBox="0 0 1621.97 456.18"
                    className="wave-text-overlay"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* 🟡 PATH Aligned to Wave.svg (pink curve segment) */}
                        <path
                            id="programWavePath"
                            d="M33.03,313.36c29.54,14.35,59.5,29.84,91.9,36.58,33.3,6.93,66.53,2.68,97.22-11.95,56.23-26.81,93.28-80.69,147.29-111.05,52.42-29.47,115.4-40.74,174.82-31.41,28.09,4.41,55.12,13.3,80.37,26.33,22.4,11.56,43.45,25.55,64.16,39.86,40.64,28.07,81.11,58.99,128.63,74.49,22.92,7.48,47.4,10.7,71.43,8.07,29.73-3.25,57.91-14.21,83.31-29.79,28.95-17.75,54.3-40.55,82.23-59.76,25.89-17.81,55.65-34.08,87.81-35.07,55.12-1.68,89.1,46.44,113.32,89.42,12.89,22.88,27.7,45.96,47.94,63.07,20.92,17.68,46.22,26.47,73.59,22.28,16.75-2.56,32.63-9.1,48.59-14.49,12.79-4.32,26.58-7.77,39.05-9.17,25.26-2.83,51.44-2.78,76.34,2.68,13.45,2.95,26.39,7.51,38.24,14.58"
                            fill="none"
                        />
                    </defs>

                    {/* 📝 Flowing Text - Seamless Infinite Scroll */}
                    <text
                        className="wave-text"
                        dominantBaseline="middle"
                        dy="-55"
                        style={{
                            fontSize: '28px',
                            letterSpacing: '8px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            fontFamily: 'Quicksand, sans-serif'
                        }}
                    >
                        <textPath href="#programWavePath">
                            {[...Array(6)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <tspan fill="var(--color-orange)">INNER STARS BUILDS CHARACTER.{"\u00A0\u00A0\u00A0\u00A0"} </tspan>
                                    <tspan fill="var(--color-navy)">LEARNING STARS BUILDS LITERACY.{"\u00A0\u00A0\u00A0\u00A0"} </tspan>
                                </React.Fragment>
                            ))}
                            <animate
                                attributeName="startOffset"
                                from="-100%"
                                to="0%"
                                dur="40s"
                                repeatCount="indefinite"
                            />
                        </textPath>
                    </text>
                </svg>

                {/* 🔘 Button - Using footer-wave-button for consistency with ExploreSection */}
                <Link to="/inner-stars#enrollment-form" className="footer-wave-button flex items-center justify-center text-center no-underline" data-aos="zoom-in">
                    START YOUR CHILD'S JOURNEY
                </Link>
            </div>
        </section>
    );
};

export default ProgramCTA;

