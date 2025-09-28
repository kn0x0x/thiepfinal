import React, { useState, useEffect } from 'react';

const VideoFallback = ({ videoRef }) => {
  const [showFallback, setShowFallback] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();

    const video = videoRef.current;
    if (!video) return;

    let fallbackTimer;

    const handleVideoError = () => {
      console.log('Video error detected, showing fallback');
      setShowFallback(true);
    };

    const handleVideoLoad = () => {
      console.log('Video loaded successfully');
      setShowFallback(false);
    };

    const handleVideoCanPlay = () => {
      console.log('Video can play');
      setShowFallback(false);
    };

    // Set up fallback timer for mobile
    if (isMobile) {
      fallbackTimer = setTimeout(() => {
        if (video.readyState < 3) { // HAVE_FUTURE_DATA
          console.log('Video not ready on mobile, showing fallback');
          setShowFallback(true);
        }
      }, 3000);
    }

    video.addEventListener('error', handleVideoError);
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('canplay', handleVideoCanPlay);

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('canplay', handleVideoCanPlay);
    };
  }, [videoRef, isMobile]);

  if (!showFallback) return null;

  return (
    <div className="video-fallback">
      <div className="fallback-image">
        <img src="/Album.jpg" alt="Wedding Background" />
      </div>
      <div className="fallback-overlay">
        <div className="fallback-play-button" onClick={() => {
          const video = videoRef.current;
          if (video) {
            video.play().catch(console.log);
          }
        }}>
          <div className="play-icon">▶</div>
          <div className="play-text">Tap to play video</div>
        </div>
      </div>
    </div>
  );
};

export default VideoFallback;
