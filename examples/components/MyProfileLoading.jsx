import React from 'react';

const MyProfileLoading = () => (
  <div className="animate-pulse">
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Name: </dt>
      <dd className="h-4 my-1 bg-gray-300 rounded-lg w-1/2"></dd>
    </div>
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Email: </dt>
      <dd className="h-4 my-1 bg-gray-300 rounded-lg w-1/2"></dd>
    </div>
  </div>
);

export default MyProfileLoading;
