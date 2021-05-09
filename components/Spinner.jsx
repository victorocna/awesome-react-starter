import React from 'react';

const Spinner = ({ show }) => {
  if (!show) {
    return false;
  }

  return (
    <div className="w-6 h-6">
      <img src="/icons/loading.gif" alt="loading" className="m-0" />
    </div>
  );
};

export default Spinner;
