import React from 'react';

const QuoteSuccess = ({ author, content }) => (
  <>
    <div className="flex flex-col bg-white px-4 py-2 lg:px-8">
      <dt className="lg:w-1/4">Author: </dt>
      <dd className="font-semibold">{author}</dd>
    </div>
    <div className="flex flex-col bg-white px-4 py-2 lg:px-8">
      <dt className="lg:w-1/4">Quote: </dt>
      <dd className="font-semibold">{content}</dd>
    </div>
  </>
);

export default QuoteSuccess;
