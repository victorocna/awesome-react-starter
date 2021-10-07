import React from 'react';

const HeaderStep = ({ isActive, children }) => (
  <>
    {isActive && (
      <div className="flex flex-col justify-between">
        <h4 className="text-green-500 text-sm mb-2">{children}</h4>
        <div className="bg-green-500 rounded-full h-2 w-full"></div>
      </div>
    )}
    {!isActive && (
      <div className="flex flex-col justify-between">
        <h4 className="text-gray-500 text-sm mb-2">{children}</h4>
        <div className="bg-gray-400 rounded-full h-2 w-full"></div>
      </div>
    )}
  </>
);

export default HeaderStep;
