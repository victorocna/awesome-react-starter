import { useEffect, useState } from 'react';

const Marker = ({ id, selectedMarker, text }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (id.toString() !== selectedMarker?.toString()) {
      setShow(false);
    }
  }, [id, selectedMarker]);

  return (
    <div>
      {show && (
        <div className="dialog">
          <div className="dialog-body">
            <p className="text-base font-medium text-gray-900 my-1">{text}</p>
          </div>
          <div className="dialog-arrow"></div>
        </div>
      )}
      <div
        className="absolute top-1/2 left-1/2 w-6 h-6 bg-black border border-white rounded-full select-none translate-x-1/2 translate-y-1/2 cursor-pointer hover:z-10"
        onClick={() => {
          setShow(!show);
        }}
      ></div>
    </div>
  );
};

export default Marker;
