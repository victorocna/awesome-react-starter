import React from 'react';

const SimpleStats = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold">Last 30 days</h3>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-1 rounded-lg bg-white p-6 shadow-sm">
          <p className="text-gray-600">Total Subscribers</p>
          <p className="text-3xl font-semibold">71,897</p>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-white p-6 shadow-sm">
          <p className="text-gray-600">Avg. Open Rate</p>
          <p className="text-3xl font-semibold">58.16%</p>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-white p-6 shadow-sm">
          <p className="text-gray-600">Avg. Click Rate</p>
          <p className="text-3xl font-semibold">24.57%</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleStats;
