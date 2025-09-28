import React, { useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import MobileVideoHandler from './MobileVideoHandler';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Force mobile video settings
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
      video.setAttribute('x5-playsinline', 'true');
      video.setAttribute('x5-video-player-type', 'h5');
      video.setAttribute('x5-video-player-fullscreen', 'true');
      
      // Force load and play on mobile
      video.load();
      
      // Try to play after a short delay
      setTimeout(() => {
        video.play().catch(e => {
          console.log('Autoplay failed, trying user interaction:', e);
          // If autoplay fails, try to play on first user interaction
          const playOnInteraction = () => {
            video.play().catch(console.log);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
          };
          document.addEventListener('touchstart', playOnInteraction, { once: true });
          document.addEventListener('click', playOnInteraction, { once: true });
        });
      }, 100);
    }

    // Handle video events
    const handleLoadedData = () => {
      console.log('Video data loaded');
      video.style.display = 'block';
    };

    const handleError = (e) => {
      console.log('Video error:', e);
      // Don't hide video on mobile, keep trying
      if (!isMobile) {
        video.style.display = 'none';
      }
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      video.style.display = 'block';
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
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
      
      <MobileVideoHandler videoRef={videoRef} />
    </section>
  );
};

export default HeroSection;
