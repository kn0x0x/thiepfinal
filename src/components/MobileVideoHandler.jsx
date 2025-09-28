import { useEffect, useRef } from 'react';

const MobileVideoHandler = ({ videoRef }) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile) return;

    // Mobile-specific video handling
    const handleVideoLoad = async () => {
      try {
        // Force video to load
        video.load();
        
        // Wait for video to be ready
        await new Promise((resolve) => {
          if (video.readyState >= 3) {
            resolve();
          } else {
            video.addEventListener('canplay', resolve, { once: true });
          }
        });

        // Try to play video
        await video.play();
        console.log('Mobile video playing successfully');
        
      } catch (error) {
        console.log('Mobile video play failed:', error);
        
        // If autoplay fails, set up user interaction handlers
        const playVideo = async () => {
          try {
            await video.play();
            console.log('Mobile video started on user interaction');
          } catch (e) {
            console.log('Still failed to play:', e);
          }
        };

        // Add multiple event listeners for better compatibility
        const events = ['touchstart', 'click', 'scroll', 'load'];
        events.forEach(event => {
          document.addEventListener(event, playVideo, { once: true, passive: true });
        });

        // Also try to play on video element interaction
        video.addEventListener('touchstart', playVideo, { once: true });
      }
    };

    // Start loading immediately
    handleVideoLoad();

    // Additional mobile optimizations
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'true');
    video.muted = true;
    video.playsInline = true;

  }, [videoRef]);

  return null;
};

export default MobileVideoHandler;
