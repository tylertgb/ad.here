"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  {
    image: "/mall (3).jpg",
    title: "AI-Powered Media Buying",
    subtitle: "From Brief to Live in 35 Minutes",
    description: "Intelligent advertising placement across Ghana's premium indoor locations. No agency fees. No guesswork. Just results."
  },
  {
    image: "/mall (2).jpg",
    title: "Indoor LED Network",
    subtitle: "Strategic Placement. Maximum Impact",
    description: "Premium screens at entrances, food courts, and high-traffic corridors in Accra & Kumasi's busiest malls."
  },
  {
    image: "/2.jpg",
    title: "Built for SMEs",
    subtitle: "Transparent. Affordable. Results-Driven",
    description: "Clear reporting. Honest pricing. Performance optimization. Media buying made accessible for every business."
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
      setKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, current]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="relative h-screen min-h-175 overflow-hidden bg-navy">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover ${index === current ? "animate-ken-burns" : ""}`}
              style={{ animation: index === current ? "ken-burns 6s ease-out forwards" : "none" }}
              priority={index === 0}
              quality={95}
              sizes="100vw"
            />
            {/* Refined Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-navy/75 via-navy/60 to-navy/40" />
          </div>

          {/* Content */}
          <div className="wrap relative h-full flex items-center">
            <div className="max-w-3xl">
              <div className="inline-block mb-5 px-3.5 py-1.5 bg-coral/10 backdrop-blur-sm rounded-full">
                <p className="text-xs uppercase tracking-widest text-coral font-semibold">
                  {slide.subtitle}
                </p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6 tracking-tight">
                {slide.title}
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
                {slide.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#packages"
                  className="group inline-flex items-center px-7 py-3.5 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dim transition-all duration-300 hover:shadow-xl hover:shadow-coral/20"
                >
                  Get Started
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#network"
                  className="inline-flex items-center px-7 py-3.5 bg-white/5 backdrop-blur-sm border-2 border-white/30 text-white text-base font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Animated Progress Lines */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4 items-center">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrent(index);
              setKey((prev) => prev + 1);
            }}
            className="flex flex-col items-center gap-2 group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`text-xs font-semibold transition-colors ${
              index === current ? "text-coral" : "text-white/60 group-hover:text-white/80"
            }`}>
              {index + 1}
            </span>
            <div className="relative w-16 h-0.5 bg-white/20 rounded-full overflow-hidden">
              {index === current && isAutoPlaying && (
                <div 
                  key={`${index}-${key}`}
                  className="absolute inset-0 bg-coral origin-left"
                  style={{
                    animation: 'progress 6s linear forwards'
                  }}
                />
              )}
              {index === current && !isAutoPlaying && (
                <div className="absolute inset-0 bg-coral" />
              )}
              {index < current && (
                <div className="absolute inset-0 bg-coral" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-10 z-20 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest writing-mode-vertical">Scroll</span>
        <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  );
}
