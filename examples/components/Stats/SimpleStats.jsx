import React from 'react';

const SimpleStats = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-base">Last 30 days</h3>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-1">
          <p className="text-gray-600">Total Subscribers</p>
          <p className="text-3xl font-semibold">71,897</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-1">
          <p className="text-gray-600">Avg. Open Rate</p>
          <p className="text-3xl font-semibold">58.16%</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-1">
          <p className="text-gray-600">Avg. Click Rate</p>
          <p className="text-3xl font-semibold">24.57%</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleStats;
