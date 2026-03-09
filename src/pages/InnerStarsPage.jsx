import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/inner-stars.css';

// Asset Import
import BoxSvg from '../assets/images/Inner Stars/Box.svg';
import WhyMatterSvg1 from '../assets/images/Inner Stars/Why Inner Strengths Matter 01.svg';
import WhyMatterSvg2 from '../assets/images/Inner Stars/Why Inner Strengths Matter 02.svg';
import WhyMatterSvg3 from '../assets/images/Inner Stars/Why Inner Strengths Matter 03.svg';
import WhyMatterSvg4 from '../assets/images/Inner Stars/Why Inner Strengths Matter 04.svg';
import LifeSkillsSvg from '../assets/images/Inner Stars/Life Skills.svg';
import WhatChildrenLearnSvg from '../assets/images/Inner Stars/What Children Learn.svg';
import InsideALessonSvg from '../assets/images/Inner Stars/Inside a Lessonsvg.svg';
import InnerStarsDifferentSvg from '../assets/Story/Different.svg';
import HowToJoinSvg from '../assets/images/Inner Stars/How to Join.svg';
import InnerStarsTailSvg from '../assets/Story/Inner Stars.svg';

const InnerStarsPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            subtitle: "We prepare children for tests.",
            highlight: "But what prepares them for life?",
            description: "Want to strengthen your child's resilience and habits of mind?",
            image: WhyMatterSvg1,
            highlightColor: "var(--color-hot-pink)",
            isBlockHighlight: true
        },
        {
            subtitle: "In a world shaped by AI, the most powerful skills are still human: ",
            highlight: [
                { text: "Courage.", color: "var(--color-lime-green)" },
                { text: " Resilience.", color: "var(--color-yellow-gold)" },
                { text: " Empathy.", color: "var(--color-deep-purple)" },
                { text: " Honesty.", color: "var(--color-teal)" }
            ],
            description: "Want to strengthen your child's resilience and habits of mind?",
            image: WhyMatterSvg2
        },
        {
            subtitle: "Between ages 5 to 12, children build the mindsets that guide them for life. And with 1 in 7 Australian children facing anxiety in primary school, ",
            highlight: "these skills matter more than ever.",
            description: "Want to strengthen your child's resilience and habits of mind?",
            image: WhyMatterSvg3,
            highlightColor: "var(--color-deep-purple)"
        },
        {
            subtitle: "Inner strengths are not optional.",
            highlight: "They are the foundation.",
            description: "Want to strengthen your child's resilience and habits of mind?",
            image: WhyMatterSvg4,
            subtitleColor: "var(--color-teal)",
            highlightColor: "var(--color-teal)",
            isBlockHighlight: true,
            isBoldSubtitle: true
        }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="inner-stars-page">
            <section className="inner-stars-hero-section">
                <div className="inner-stars-card" data-aos="fade-up">
                    <div className="card-content flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                        <div className="card-image w-full lg:w-1/2 flex justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="200">
                            <img src={BoxSvg} alt="Inner Stars Box" className="box-svg-asset" />
                        </div>
                        <div className="card-text w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left" data-aos-delay="400">
                            <h1 className="is-title">INNER STARS</h1>
                            <h2 className="is-subtitle">Character building</h2>
                            <p className="is-description">
                                Foundations for resilience and habits<br className="hidden lg:block" />
                                of mind for learning and life
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-carousel-section pt-20 lg:pt-32 pb-10 lg:pb-16 overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 relative h-[800px] md:h-[600px] lg:h-[550px]">
                    <div className="carousel-container h-full">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-slide absolute inset-0 transition-opacity duration-1000 
                                ${index === currentSlide ? 'opacity-1 active' : 'opacity-0 pointer-events-none'}`}
                            >
                                <div className="carousel-card bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full">
                                    <div className="flex-1 order-2 lg:order-1 slide-text-content text-center lg:text-left">
                                        <h2 className="why-title mb-6">WHY INNER STRENGTHS MATTER</h2>
                                        <div className="why-questions mb-8">
                                            <div className="text-[var(--color-grey-text)] text-lg md:text-xl leading-relaxed">
                                                <span
                                                    className={slide.isBoldSubtitle ? 'font-bold' : ''}
                                                    style={{ color: slide.subtitleColor || 'var(--color-grey-text)' }}
                                                >
                                                    {slide.subtitle}
                                                </span>
                                                {Array.isArray(slide.highlight) ? (
                                                    slide.highlight.map((h, i) => (
                                                        <span key={i} className="font-bold" style={{ color: h.color }}>
                                                            {h.text}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span
                                                        className={`font-bold ${slide.isBlockHighlight ? 'block mt-1' : 'ml-1'}`}
                                                        style={{ color: slide.highlightColor }}
                                                    >
                                                        {slide.highlight}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[var(--color-grey-text)] opacity-80 text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0">
                                            {slide.description}
                                        </p>
                                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="why-cta-btn">
                                            BOOK A FREE 15 MINUTE CALL
                                        </a>
                                    </div>
                                    <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end slide-image-content">
                                        <img src={slide.image} alt="Why Strengths Matter" className="w-full max-w-[450px] h-auto" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="carousel-dots flex justify-center gap-4 absolute bottom-0 left-0 right-0 z-10 p-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[var(--color-hot-pink)] w-10' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="life-skills-section pt-10 lg:pt-16 pb-4 lg:pb-8 bg-[var(--color-white)] text-center">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div data-aos="fade-up">
                        <h2 className="life-skills-title " style={{ color: 'var(--color-dark-navy)', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>LIFE SKILLS</h2>
                        <p className="life-skills-subtitle text-[var(--color-grey-text)] text-lg md:text-xl max-w-2xl mx-auto opacity-80">
                            Inner Stars brings life skills into education by building resilience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1200px] mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {/* Card 1: Growing Strong Humans */}
                        <div className="relative w-full aspect-[377.77/424.54] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <img src={LifeSkillsSvg} alt="" aria-hidden="true" className="absolute top-0 h-full w-[347.603%] max-w-none" style={{ left: '-13.94%' }} />
                            <div className="absolute left-0 right-0 flex items-center justify-center px-4 pointer-events-none" style={{ top: '56.78%', height: '26.89%' }}>
                                <h3 className="text-white font-bold text-center text-base sm:text-lg lg:text-xl leading-tight mt-8 sm:mt-10 lg:mt-12">Growing Strong Humans</h3>
                            </div>
                        </div>

                        {/* Card 2: Building Habits of Mind */}
                        <div className="relative w-full aspect-[377.77/424.54] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <img src={LifeSkillsSvg} alt="" aria-hidden="true" className="absolute top-0 h-full w-[347.603%] max-w-none" style={{ left: '-123.8%' }} />
                            <div className="absolute left-0 right-0 flex items-center justify-center px-4 pointer-events-none" style={{ top: '56.78%', height: '26.89%' }}>
                                <h3 className="text-white font-bold text-center text-base sm:text-lg lg:text-xl leading-tight mt-8 sm:mt-10 lg:mt-12">Building Habits of Mind</h3>
                            </div>
                        </div>

                        {/* Card 3: Shaping Character & Values */}
                        <div className="relative w-full aspect-[377.77/424.54] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <img src={LifeSkillsSvg} alt="" aria-hidden="true" className="absolute top-0 h-full w-[347.603%] max-w-none" style={{ left: '-233.66%' }} />
                            <div className="absolute left-0 right-0 flex items-center justify-center px-2 pointer-events-none" style={{ top: '56.78%', height: '26.89%' }}>
                                <h3 className="text-white font-bold text-center text-base sm:text-lg lg:text-xl leading-tight mt-8 sm:mt-10 lg:mt-12">Shaping Character & Values</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-children-learn-section pt-4 lg:pt-8 pb-16 lg:pb-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div data-aos="fade-up" className="text-center mb-8 lg:mb-12">
                        <h2 className="mb-4" style={{ color: 'var(--color-dark-navy)', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            WHAT CHILDREN LEARN
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {/* Card 1: Yellow */}
                        <div className="relative w-full aspect-[377.77/230.79] overflow-hidden rounded-[23px] group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                            <img src={WhatChildrenLearnSvg} alt="" aria-hidden="true" className="absolute top-0 h-auto w-[347.603%] max-w-none" style={{ left: '-14.97%', top: '-21.43%' }} />
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-start text-white text-center pt-8 sm:pt-10">
                                <h3 className="font-bold text-base sm:text-lg leading-tight tracking-wide mb-1">NOTICE & NAME</h3>
                                <p className="text-xs sm:text-sm leading-tight">Emotions to build</p>
                                <p className="font-bold text-xs sm:text-sm mt-0.5">Resilience</p>
                            </div>
                        </div>

                        {/* Card 2: Green */}
                        <div className="relative w-full aspect-[377.77/230.79] overflow-hidden rounded-[23px] group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                            <img src={WhatChildrenLearnSvg} alt="" aria-hidden="true" className="absolute top-0 h-auto w-[347.603%] max-w-none" style={{ left: '-123.8%', top: '-21.43%' }} />
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-start justify-center text-white w-[65%]">
                                <h3 className="font-bold text-base sm:text-lg leading-tight tracking-wide mb-2">TAKE<br />BRAVE STEPS</h3>
                                <p className="text-xs sm:text-sm leading-tight">and try new things</p>
                                <p className="text-xs sm:text-sm leading-tight mt-1">to build <span className="font-bold">Courage</span></p>
                            </div>
                        </div>

                        {/* Card 3: Orange */}
                        <div className="relative w-full aspect-[377.77/230.79] overflow-hidden rounded-[23px] group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                            <img src={WhatChildrenLearnSvg} alt="" aria-hidden="true" className="absolute top-0 h-auto w-[347.603%] max-w-none" style={{ left: '-232.63%', top: '-21.43%' }} />
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-start justify-start text-white pt-8 sm:pt-10 pl-6 sm:pl-8">
                                <h3 className="font-bold text-base sm:text-lg leading-tight tracking-wide mb-1">KEEP GOING</h3>
                                <p className="text-xs sm:text-sm leading-tight">with effort and focus</p>
                                <p className="text-xs sm:text-sm leading-tight mt-1">to build <span className="font-bold">Perseverance</span></p>
                            </div>
                        </div>

                        {/* Card 4: Purple */}
                        <div className="relative w-full aspect-[377.77/230.79] overflow-hidden rounded-[23px] group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                            <img src={WhatChildrenLearnSvg} alt="" aria-hidden="true" className="absolute top-0 h-auto w-[347.603%] max-w-none" style={{ left: '-14.97%', top: '-137.31%' }} />
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-start justify-center text-white pl-[35%] sm:pl-[40%]">
                                <h3 className="font-bold text-base sm:text-lg leading-tight tracking-wide mb-1">SHOW CARE,</h3>
                                <p className="text-xs sm:text-sm leading-tight">empathy, & compassion</p>
                                <p className="text-xs sm:text-sm leading-tight mt-1">to build <span className="font-bold">Kindness</span></p>
                            </div>
                        </div>

                        {/* Card 5: Pink */}
                        <div className="relative w-full aspect-[377.77/230.79] overflow-hidden rounded-[23px] group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                            <img src={WhatChildrenLearnSvg} alt="" aria-hidden="true" className="absolute top-0 h-auto w-[347.603%] max-w-none" style={{ left: '-123.8%', top: '-137.31%' }} />
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-start justify-center text-white w-2/3">
                                <h3 className="font-bold text-base sm:text-lg leading-tight tracking-wide mb-2">LOOK<br />FOR THE GOOD</h3>
                                <p className="text-xs sm:text-sm leading-tight">and practise</p>
                                <p className="text-xs sm:text-sm leading-tight">thankfulness</p>
                                <p className="text-xs sm:text-sm leading-tight mt-1">to build <span className="font-bold">Gratitude</span></p>
                            </div>
                        </div>

                        {/* Card 6: Teal */}
                        <div className="relative w-full aspect-[377.77/230.79] overflow-hidden rounded-[23px] group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                            <img src={WhatChildrenLearnSvg} alt="" aria-hidden="true" className="absolute top-0 h-auto w-[347.603%] max-w-none" style={{ left: '-232.63%', top: '-137.31%' }} />
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-start text-white text-center pt-8 sm:pt-10">
                                <h3 className="font-bold text-base sm:text-lg leading-tight tracking-wide mb-1">MAKE CHOICES</h3>
                                <p className="text-xs sm:text-sm leading-tight">that match their values</p>
                                <p className="text-xs sm:text-sm leading-tight mt-1">to build <span className="font-bold">Integrity</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inside-a-lesson-section pt-10 lg:pt-16 pb-10 lg:pb-16">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div data-aos="fade-up" className="text-center mb-8 lg:mb-12">
                        <h2 className="mb-4" style={{ color: 'var(--color-dark-navy)', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            INSIDE A LESSON
                        </h2>
                    </div>

                    <div className="w-full max-w-[1280px] mx-auto relative group" data-aos="fade-up" data-aos-delay="200">
                        <img src={InsideALessonSvg} alt="Inside a Lesson Interactive Journey" className="w-full h-auto scale-110 origin-top" />

                        {/* Interactive Sneak Peek Button Overlay */}
                        <a
                            href="#enrollment-form"
                            className="absolute cursor-pointer rounded-full transition-all duration-300 hover:bg-white/10"
                            style={{
                                top: '10%',
                                left: '60%',
                                width: '13%',
                                height: '22%',
                                transform: 'translate(-50%, -50%)'
                            }}
                            title="Take a Sneak Peek"
                        >
                        </a>
                    </div>
                </div>
            </section>

            <section className="how-different-section pt-12 lg:pt-20 pb-4 lg:pb-6">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="bg-[var(--color-dark-navy)] rounded-[2.5rem] lg:rounded-[4rem] px-8 py-10 lg:px-16 lg:py-16 flex flex-col shadow-lg" data-aos="fade-up">

                        {/* Title */}
                        <div className="text-center mb-10 lg:mb-16">
                            <h2 className="mb-0" style={{ color: '#ecaa19', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                HOW INNER STARS IS DIFFERENT
                            </h2>
                        </div>

                        {/* Content Grid */}
                        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1050px] mx-auto gap-12 lg:gap-16">

                            {/* Left: Illustration */}
                            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end" data-aos="fade-right" data-aos-delay="100">
                                <img src={InnerStarsDifferentSvg} alt="Inner Stars Characters Holding Hands" className="w-[90%] max-w-[450px] lg:max-w-none h-auto mix-blend-screen scale-110 lg:scale-125 lg:origin-right" />
                            </div>

                            {/* Right: Text Content */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
                                <h3 className="text-[var(--color-hot-pink)] font-bold text-xl lg:text-2xl mb-6 tracking-wide drop-shadow-sm">
                                    INNER STARS BUILDS:
                                </h3>

                                <ul className="space-y-4 mb-10 pl-2 lg:pl-0">
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-white)] mr-4 text-xl leading-snug">•</span>
                                        <span className="text-[var(--color-white)] text-base lg:text-[1.1rem] leading-snug font-light tracking-wide">Everyday language children use in real life</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-white)] mr-4 text-xl leading-snug">•</span>
                                        <span className="text-[var(--color-white)] text-base lg:text-[1.1rem] leading-snug font-light tracking-wide">Simple visuals they can remember</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-white)] mr-4 text-xl leading-snug">•</span>
                                        <span className="text-[var(--color-white)] text-base lg:text-[1.1rem] leading-snug font-light tracking-wide">Habits of mind they can practise anywhere</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-white)] mr-4 text-xl leading-snug">•</span>
                                        <span className="text-[var(--color-white)] text-base lg:text-[1.1rem] leading-snug font-light tracking-wide">Character and mindset taught through stories,<br className="hidden lg:block" /> movement, and reflection</span>
                                    </li>
                                </ul>

                                <p className="text-[#ecaa19] text-base lg:text-[1.1rem] leading-snug lg:pr-10">
                                    This isn't a lesson about wellbeing. It's a way<br className="hidden lg:block" /> of growing from the inside out.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="two-ways-to-join-section pt-4 lg:pt-6 pb-20 lg:pb-32 bg-white">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="text-center mb-6 lg:mb-8" data-aos="fade-up">
                        <h2 className="mb-0" style={{ color: 'var(--color-dark-navy)', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            TWO WAYS TO JOIN
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16">

                        {/* Pink Card */}
                        <div className="relative w-full aspect-[430/620] overflow-hidden mx-auto max-w-[450px]" data-aos="fade-up" data-aos-delay="100">
                            {/* SVG Background Slice (Left Half) */}
                            <img src={HowToJoinSvg} alt="" aria-hidden="true" className="absolute top-0 h-[105%] w-[220%] max-w-none origin-top-left" style={{ left: '-5%', top: '-2%' }} />

                            {/* Text Content */}
                            <div className="absolute inset-0 pl-20 sm:pl-24 pr-8 pt-[180px] sm:pt-[200px] pb-[40px] flex flex-col justify-start text-[var(--color-white)] z-10">
                                <div className="mb-8 pl-4 lg:pl-6">
                                    <h3 className="font-bold text-xl sm:text-[1.35rem] italic tracking-wide text-[#fcb116] mb-1">SATURDAYS SESSIONS</h3>
                                    <p className="font-semibold text-[1.1rem] sm:text-lg text-[#fcb116]">Weekend Sessions</p>
                                </div>

                                <ul className="space-y-6 text-base sm:text-[1.05rem] font-bold pl-4 lg:pl-6">
                                    <li className="leading-snug">Two inner strengths<br />each term</li>
                                    <li className="leading-snug">All six strengths explored<br />over the year</li>
                                    <li className="leading-snug">Builds skills step by step<br />through the term</li>
                                </ul>
                            </div>
                        </div>

                        {/* Green Card */}
                        <div className="relative w-full aspect-[430/620] overflow-hidden mx-auto max-w-[450px]" data-aos="fade-up" data-aos-delay="200">
                            {/* SVG Background Slice (Right Half) */}
                            <img src={HowToJoinSvg} alt="" aria-hidden="true" className="absolute top-0 h-[105%] w-[220%] max-w-none origin-top-left" style={{ left: '-114%', top: '-2%' }} />

                            {/* Text Content */}
                            <div className="absolute inset-0 pl-16 sm:pl-20 pr-8 pt-[180px] sm:pt-[200px] pb-[40px] flex flex-col justify-start text-[var(--color-white)] z-10">
                                <div className="mb-8 pl-3 lg:pl-4">
                                    <h3 className="font-bold text-xl sm:text-[1.35rem] italic tracking-wide text-[#523cac] mb-1">HOLIDAYS INTENSIVES</h3>
                                    <p className="font-semibold text-[1.1rem] sm:text-lg text-[#523cac]">2 to 6 Days Over 2 Weeks*</p>
                                </div>

                                <ul className="space-y-6 text-base sm:text-[1.05rem] font-bold pl-4 lg:pl-6">
                                    <li className="leading-snug">Two inner strengths<br />at a time</li>
                                    <li className="leading-snug">Immersive, hands on,<br />and fun</li>
                                    <li className="leading-snug">Ideal for school holiday<br />learning</li>
                                </ul>

                                <p className="absolute bottom-10 left-20 sm:left-24 pl-4 lg:pl-6 text-xs sm:text-sm font-light text-[#fff] opacity-90">*Starting mid 2026</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Tail Graphic */}
            <div className="w-full overflow-hidden mt-[-120px] lg:mt-[-250px] bg-white relative z-0" data-aos="fade-up">
                <img
                    src={InnerStarsTailSvg}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-auto block min-w-[1440px] relative left-1/2 -translate-x-1/2"
                />
            </div>

            {/* Enrollment Form Section */}
            <section id="enrollment-form" className="enrollment-section py-16 lg:py-24  relative z-10 mt-[-120px] lg:mt-[-220px]">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-[1.8rem] lg:text-[2.2rem] font-bold tracking-wider uppercase text-[#122f52]" style={{ fontFamily: 'var(--font-heading)' }}>
                            SECURE YOUR CHILD'S PLACE
                        </h2>
                    </div>

                    <form className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                        {/* Row 1: Child Name & Age */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="sm:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Child Name"
                                    className="w-full px-6 py-4 rounded-[20px] border border-gray-300 bg-white/50 focus:outline-none focus:border-[var(--color-hot-pink)] text-gray-600 font-medium placeholder:text-gray-400"
                                />
                            </div>
                            <div className="sm:col-span-1">
                                <input
                                    type="text"
                                    placeholder="Age"
                                    className="w-full px-6 py-4 rounded-[20px] border border-gray-300 bg-white/50 focus:outline-none focus:border-[var(--color-hot-pink)] text-gray-600 font-medium placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Row 2: Parent Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Parent Name"
                                className="w-full px-6 py-4 rounded-[20px] border border-gray-300 bg-white/50 focus:outline-none focus:border-[var(--color-hot-pink)] text-gray-600 font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Row 3: Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-6 py-4 rounded-[20px] border border-gray-300 bg-white/50 focus:outline-none focus:border-[var(--color-hot-pink)] text-gray-600 font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Row 4: Phone */}
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full px-6 py-4 rounded-[20px] border border-gray-300 bg-white/50 focus:outline-none focus:border-[var(--color-hot-pink)] text-gray-600 font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Row 5: Program Selection */}
                        <div className="relative">
                            <select
                                className="w-full px-6 py-4 rounded-[20px] border border-gray-300 bg-white/50 focus:outline-none focus:border-[var(--color-hot-pink)] text-gray-400 font-medium appearance-none"
                                defaultValue=""
                            >
                                <option value="" disabled>Program</option>
                                <option value="saturday">Saturday Sessions</option>
                                <option value="holiday">Holiday Intensives</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <button
                                type="submit"
                                className="btn-join inline-block font-bold uppercase tracking-widest px-12 py-4"
                            >
                                ENROL NOW
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default InnerStarsPage;
