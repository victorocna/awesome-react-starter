import React, { useRef } from 'react';

const VideoToImage = ({ videoRef }) => {
  const canvasRef = useRef(null);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      canvas.toBlob((blob) => {
        // Create a URL for the blob object
        const imageUrl = URL.createObjectURL(blob);
        // You can now download the image, display it, or upload it as a file
        // For example, to download the image:
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'frame.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 'image/png');
    }
  };

  return (
    <div>
      <video ref={videoRef} width="600" height="400" controls>
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={captureImage}>Capture Image</button>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default VideoToImage;
