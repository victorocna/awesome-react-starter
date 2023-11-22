import React from 'react';

const MyProfileLoading = () => (
  <div className="animate-pulse">
    <div className="flex flex-col bg-white px-4 py-2 lg:px-8">
      <dt className="lg:w-1/4">Name: </dt>
      <dd className="my-1 h-4 w-1/2 rounded-lg bg-gray-300"></dd>
    </div>
    <div className="flex flex-col bg-white px-4 py-2 lg:px-8">
      <dt className="lg:w-1/4">Email: </dt>
      <dd className="my-1 h-4 w-1/2 rounded-lg bg-gray-300"></dd>
    </div>
  </div>
);

export default MyProfileLoading;
