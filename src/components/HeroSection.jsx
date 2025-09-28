import React, { useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video loading errors on mobile
    const handleError = () => {
      console.log('Video failed to load, using background image fallback');
      video.style.display = 'none';
    };

    const handleCanPlay = () => {
      console.log('Video loaded successfully');
      video.style.display = 'block';
    };

    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, try to load video but don't autoplay
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
    }

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <video 
        ref={videoRef}
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        controls={false}
      >
        <source src="/DJI_20250525053335_0032_D.MP4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
        <source src="/DJI_20250525053335_0032_D.MP4" type="video/mp4" />
        Your browser does not support the video tag.
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
