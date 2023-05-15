import { useState } from 'react';
import { useEffect, useRef } from 'react';

const Video = ({ video, ...props }) => {
  const videoRef = useRef(null);
  const [showIcon, setShowIcon] = useState(false);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const video = videoRef.current;

      switch (event.key) {
        case 'ArrowRight':
          video.currentTime += 5;
          setIcon('fa-solid fa-forward');
          setShowIcon(true);
          break;
        case 'ArrowLeft':
          setIcon('fa-solid fa-backward');
          setShowIcon(true);
          video.currentTime -= 5;
          break;
        case 'ArrowUp':
          video.volume = Math.min(video.volume + 0.1, 1);
          setShowIcon(true);
          setIcon('fa-solid fa-volume-high');
          break;
        case 'ArrowDown':
          video.volume = Math.max(video.volume - 0.1, 0);
          setShowIcon(true);
          setIcon('fa-solid fa-volume-low');
          break;
        case ' ':
          if (video.paused) {
            video.play();
            setShowIcon(true);
            setIcon('fa-solid fa-pause');
          } else {
            video.pause();
            setShowIcon(true);
            setIcon('fa-solid fa-play');
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const timeout = setTimeout(() => {
      setShowIcon(false);
    }, 2000);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (showIcon) {
      const timeout = setTimeout(() => {
        setShowIcon(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showIcon]);

  return (
    <div className="relative w-fit">
      <video width="560" height="315" controls controlsList="nodownload" ref={videoRef} {...props}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showIcon && (
        <div className={`icon-wrapper show hide`} key={icon}>
          <i className={`${icon} text-white text-4xl`} />
        </div>
      )}
    </div>
  );
};

export default Video;
