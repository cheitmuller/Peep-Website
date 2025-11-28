'use client';

import { useEffect, useRef } from 'react';
import styles from './VideoDisplay.module.css';

interface VideoDisplayProps {
  videoSrc?: string;
}

export default function VideoDisplay({
  videoSrc = '/videos/peep-app-demo.mp4'
}: VideoDisplayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Attempt to autoplay when component mounts
    const playVideo = () => {
      videoElement.play().catch(error => {
        console.log('Autoplay prevented:', error);
        // Autoplay was prevented, video will play when user interacts
      });
    };

    // Try to play immediately
    playVideo();

    // Set up IntersectionObserver to play video when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoElement) {
            playVideo();
          } else if (videoElement) {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoElement);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <div className={styles.backgroundGlow}></div>
      <video
        ref={videoRef}
        className={styles.appVideo}
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
