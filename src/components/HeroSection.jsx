import React from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/DJI_20250525053335_0032_D.MP4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="couple-names">THANH PHỤC</h1>
        <div className="ampersand">&</div>
        <h1 className="couple-names">KHÁNH HẠ</h1>
        <div className="wedding-date">28 • 12 • 2025</div>
        <div className="announcement">ARE GETTING MARRIED!</div>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default HeroSection;
