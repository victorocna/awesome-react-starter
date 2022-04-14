import React from 'react';

const MyProfileSuccess = ({ name, email }) => (
  <>
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Name: </dt>
      <dd className="font-semibold">{name}</dd>
    </div>
    <div className="flex flex-col px-4 lg:px-8 bg-white py-2">
      <dt className="lg:w-1/4">Email: </dt>
      <dd className="font-semibold">{email}</dd>
    </div>
  </>
);

export default MyProfileSuccess;
