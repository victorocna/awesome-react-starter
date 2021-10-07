import React from 'react';

const QuoteLoading = () => (
  <div className="animate-pulse">
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Author: </dt>
      <dd className="h-4 my-1 bg-gray-300 rounded-lg w-1/2"></dd>
    </div>
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Quote: </dt>
      <dd className="h-4 my-1 bg-gray-300 rounded-lg w-1/2"></dd>
    </div>
  </div>
);

export default QuoteLoading;
