import React from 'react';

const HeaderStep = ({ isActive, children }) => (
  <>
    {isActive && (
      <div className="flex flex-col justify-between">
        <h4 className="mb-2 text-sm text-green-500">{children}</h4>
        <div className="h-2 w-full rounded-full bg-green-500"></div>
      </div>
    )}
    {!isActive && (
      <div className="flex flex-col justify-between">
        <h4 className="mb-2 text-sm text-gray-500">{children}</h4>
        <div className="h-2 w-full rounded-full bg-gray-400"></div>
      </div>
    )}
  </>
);

export default HeaderStep;
