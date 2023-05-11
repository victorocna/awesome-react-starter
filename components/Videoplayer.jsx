import React from 'react';

const Videoplayer = ({ video, ...props }) => {
  return (
    <div>
      <video width="560" height="315" controls {...props}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videoplayer;
