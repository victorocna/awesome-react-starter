import React from 'react';

const MyProfileDetails = ({ name, email }) => {
  return (
    <>
      <div className="flex flex-col bg-white px-4 py-2 lg:px-8">
        <dt className="lg:w-1/4">Name: </dt>
        <dd className="font-semibold">{name}</dd>
      </div>
      <div className="flex flex-col bg-white px-4 py-2 lg:px-8">
        <dt className="lg:w-1/4">Email: </dt>
        <dd className="font-semibold">{email}</dd>
      </div>
    </>
  );
};

export default MyProfileDetails;
