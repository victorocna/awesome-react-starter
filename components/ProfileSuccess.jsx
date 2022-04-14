import React from 'react';

const ProfileSuccess = ({ email, role = 'Admin' }) => {
  return (
    <div className="flex flex-col text-right">
      <h4 className="text-accent font-semibold text-sm">{email}</h4>
      <p className="text-xs font-semibold capitalize">{role}</p>
    </div>
  );
};

export default ProfileSuccess;
