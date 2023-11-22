import { useFormikContext } from 'formik';
import { useEffect, useState, useRef } from 'react';

const VideoPreview = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);
  const { values, setFieldValue } = useFormikContext();
  const [currentTime, setCurrentTime] = useState(0);

  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize canvas ref here, this code will run on the client-side after the component mounts
    canvasRef.current = document.createElement('canvas');

    if (values.video && values.video.type.startsWith('video/')) {
      const currentVideoUrl = URL.createObjectURL(values.video);
      setVideoUrl(currentVideoUrl);

      return () => {
        URL.revokeObjectURL(currentVideoUrl);
      };
    }
  }, [values.video, setVideoUrl]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const captureThumbnail = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        // Update the Formik field with the blob
        setFieldValue('thumbnail', blob);
      }, 'image/jpeg');
    }
  };

  if (!videoUrl) return null;

  return (
    <div>
      <video ref={videoRef} width="600" height="400" controls onTimeUpdate={handleTimeUpdate}>
        <source src={videoUrl} type={values?.video?.type} />
        Your browser does not support the video tag.
      </video>
      <div>Current Time: {currentTime.toFixed(2)} seconds</div>
      <button onClick={captureThumbnail}>Capture Thumbnail</button>
    </div>
  );
};

export default VideoPreview;
