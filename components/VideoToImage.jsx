import { useFormikContext } from 'formik';
import { useRef } from 'react';
import Button from './Button';

const VideoToImage = ({ videoRef, videoUrl }) => {
  const canvasRef = useRef(null);
  const { setFieldValue } = useFormikContext();

  const captureThumbnail = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = 400;
      canvas.height = 200;
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
      <Button className="button full primary mb-5" onClick={captureThumbnail}>
        Capture Image
      </Button>
      <canvas width={0} height={0} ref={canvasRef} />
    </div>
  );
};

export default VideoToImage;
