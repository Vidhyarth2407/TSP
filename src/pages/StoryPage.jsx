import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/story.css';

// SVGs Imports
import BannerTop from '../assets/Story/BAnner.svg';
import Guiding from '../assets/Story/Guiding.svg';
import InnerWorld from '../assets/Story/Inner World.svg';
import Path from '../assets/Story/Path.svg';
import InnerStars from '../assets/Story/Inner Stars.svg';
import TheBigSix from '../assets/Story/The Big Six.svg';
import Tutoring from '../assets/Story/Tutoring.svg';
import Charvi from '../assets/Story/Charvi.svg';
import Different from '../assets/Story/Different.svg';
import StarBreath from '../assets/Story/Star Breath.svg';

const StoryPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="story-page">
            <section className="story-section pt-0" data-aos="fade-in">
                <img src={BannerTop} alt="Why The Starry Path Exists" className="story-hero" />
                <div className="story-hero-text">
                    <h4>A child's inner world is made of many pieces.</h4>
                    <p>Understanding how those pieces work together builds habits of mind and character.</p>
                </div>
            </section>

            {/* Why The Starry Path Exists Section */}
            <section className="story-section" data-aos="fade-up">
                <div className="path-section-container">
                    <div className="path-text-content">
                        <h2>WHY THE STARRY{" "}<br className="hidden md:block" />PATH EXISTS?</h2>
                        <p className="path-highlight">
                            Education builds knowledge and skills.{" "}
                            <br className="hidden md:block" />
                            <strong>Habits of mind help children use them{" "}
                                <br className="hidden md:block" />
                                in real situations.</strong>
                        </p>
                        <p>
                            Meaningful learning builds life skills{" "}
                            <br className="hidden md:block" />
                            for real life. These habits of mind should{" "}
                            <br className="hidden md:block" />
                            be part of <strong>every child's education.</strong>
                        </p>
                    </div>
                    <div className="path-image-content">
                        <img src={Path} alt="The Starry Path" className="path-svg" />
                    </div>
                </div>
            </section>


            {/* Inner World Card Section */}
            <section className="story-section" data-aos="fade-up">
                <div className="inner-world-card">
                    <div className="inner-world-image">
                        <img src={InnerWorld} alt="Learning the layers of their inner world" className="inner-world-svg" />
                    </div>
                    <div className="inner-world-text">
                        <h3>Children learn about the world around them.</h3>
                        <p className="sub-text">Planets, oceans, and gravity.</p>

                        <h3>But rarely do they learn about the world within them.</h3>
                        <p className="sub-text">
                            Understanding their inner world should be<br />
                            as essential as reading or numeracy.
                        </p>

                        <button className="btn-inner-world">HELP YOUR CHILD BUILD LIFELONG STRENGTHS</button>
                    </div>
                </div>
            </section>

            {/* Our Purpose Label Section */}
            <section className="story-section pb-0" data-aos="fade-up">
                <div className="purpose-label-container">
                    <div className="purpose-label-left">
                        <h2>OUR PURPOSE</h2>
                    </div>
                    <div className="purpose-label-right">
                        <p>To build the habits of mind that shape character for life.</p>
                    </div>
                </div>
            </section>

            {/* My Story - Charvi Section */}
            <section className="story-section" data-aos="fade-up">
                <div className="charvi-section-container">
                    <div className="charvi-left">
                        <div>
                            <h2 className="charvi-title">MY STORY</h2>
                            <h3 className="charvi-subtitle">WHY I CREATED THE STARRY PATH</h3>
                        </div>
                        <img src={Charvi} alt="My Story - Charvi" className="charvi-img" />
                    </div>
                    <div className="charvi-right">
                        <p>As a teacher with a background in psychology, I've always noticed what's missing in education: <strong>the human skills of character, values, and healthy habits of mind.</strong></p>
                        <p>This belief is deeply personal.</p>
                        <p>As a teenager and young adult, I lived through a life-threatening medical condition that tested resilience and grit more than once.</p>
                        <p>The Starry Path grew from that lived experience and one simple question:<br />If we teach children how the world works, <strong>why not also teach them how their mind works?</strong></p>
                        <p>These aren't skills for later. They're skills for childhood.</p>
                        <p><strong>By bringing psychology and education together, </strong>I created a practical, child-friendly way to help children understand their thoughts, emotions, and connections. The foundations that shape how they learn and who they become.</p>
                        <p>As a mum, what I want most for my child is simple:<br />to understand herself, to try again, and to act with courage.</p>
                        <p>That is the purpose of The Starry Path:<br /><strong>helping children understand themselves and grow with strength.</strong></p>
                    </div>
                </div>
            </section>

            {/* Our Advisor Section */}
            <section className="story-section" data-aos="fade-up">
                <div className="advisor-section-container">
                    <div className="advisor-left">
                        <h2 className="advisor-title">OUR ADVISOR</h2>
                        <h3 className="advisor-subtitle">The Starry Path Advisor</h3>
                        <p>Aakriti is a dual-certified Clinical Psychologist (India &amp; New Zealand) helping women break cycles of <strong>anxiety, self-doubt, perfectionism, and people-pleasing.</strong> With over 12 years of experience across India, Malaysia, and New Zealand, she supports adults to heal and reconnect with their authentic selves using evidence-based therapy.</p>

                        <div className="advisor-logo-row">
                            <div className="advisor-logo-placeholder">
                                Logo Placeholder
                            </div>
                            <div className="advisor-logo-text">
                                <p>Learn more<br />at <strong>calmconnecttherapy.com</strong><br />or follow her journey online.</p>
                            </div>
                        </div>
                    </div>
                    <div className="advisor-right">
                        <div className="advisor-placeholder-box">
                            Provide SVG Here
                        </div>
                    </div>
                </div>
            </section>

            {/* Guiding Children's Growth Section */}
            <section className="story-section guiding-section" data-aos="fade-up">
                <div className="guiding-container">
                    <img src={Guiding} alt="Guiding Background" className="guiding-bg" />
                    <div className="guiding-content">
                        <h2>GUIDING{" "}<br className="hidden md:block" />CHILDREN'S GROWTH</h2>
                        <h3>The Starry Path is named{" "}<br className="hidden md:block" />for what it aims to nurture:</h3>
                        <p>Awareness and resilience in how children{" "}<br className="hidden md:block" />think, learn, and live.</p>
                        <p>Their inner strengths become guiding{" "}<br className="hidden md:block" />lights for learning and for life beyond{" "}<br className="hidden md:block" />the classroom.</p>
                    </div>
                </div>
                <div className="guiding-btn-wrapper">
                    <button className="btn-join font-bold">JOIN THE JOURNEY</button>
                </div>
            </section>
        </div >
    );
};

export default StoryPage;
