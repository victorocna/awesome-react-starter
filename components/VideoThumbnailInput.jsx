import { Field } from 'formik';
import { useRef, useState } from 'react';
import { UploadInput } from './Fields';
import { Fieldset } from './Formik';
import VideoPreview from './VideoPreview';
import VideoToImage from './VideoToImage';

const VideoThumbnailInput = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);

  return (
    <>
      <Fieldset label="Video upload">
        <Field name="video" as={UploadInput} />
      </Fieldset>
      <div className="flex gap-5">
        <VideoPreview videoRef={videoRef} setVideoUrl={setVideoUrl} videoUrl={videoUrl} />
        <VideoToImage videoRef={videoRef} videoUrl={videoUrl} />
      </div>
    </>
  );
};

export default VideoThumbnailInput;
