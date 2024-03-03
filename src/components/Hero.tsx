import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section relative py-[200px]"> {/* Increased py value for height */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: 'url("/assets/images/hero.jpg")',
          opacity: '0.8', // Darken the background image
        }}
      ></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-4 text-shadow">Welcome to Real Estate, Inc</h1>
        <p className="text-lg text-white mb-8 text-shadow">Find your dream home with us!</p>
    </div>
    </div>
  );
};

export default HeroSection;