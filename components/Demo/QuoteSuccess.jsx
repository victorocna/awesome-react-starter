import React from 'react';

const QuoteSuccess = ({ author, content }) => (
  <>
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Author: </dt>
      <dd className="font-semibold">{author}</dd>
    </div>
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Quote: </dt>
      <dd className="font-semibold">{content}</dd>
    </div>
  </>
);

export default QuoteSuccess;
