import { useFormikContext } from 'formik';
import { useEffect } from 'react';

const VideoPreview = ({ setVideoUrl, videoUrl, videoRef }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    if (values.video && values.video.type.startsWith('video/')) {
      const currentVideoUrl = URL.createObjectURL(values.video);
      setVideoUrl(currentVideoUrl);

      return () => {
        URL.revokeObjectURL(currentVideoUrl);
      };
    }
  }, [values.video]);

  if (!videoUrl) return null;

  return (
    <div>
      <video ref={videoRef} width="600" height="400" controls>
        <source src={videoUrl} type={values?.video?.type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPreview;
