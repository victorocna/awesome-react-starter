import React from 'react';

const TrendingStats = () => {
  return (
    <div className="grid divide-x divide-y divide-gray-100 bg-white md:grid-cols-2 lg:grid-cols-4 lg:divide-y-0">
      <div className="flex flex-col gap-3 p-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Revenue</p>
          <p>+4.75%</p>
        </div>
        <p className="text-2xl font-semibold">$405,091.00</p>
      </div>
      <div className="flex flex-col gap-3 p-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Overdue invoices</p>
          <p className="text-red-600">+54.02%</p>
        </div>
        <p className="text-2xl font-semibold">$12,787.00</p>
      </div>
      <div className="flex flex-col gap-3 p-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Outstanding invoices</p>
          <p>-1.39%</p>
        </div>
        <p className="text-2xl font-semibold">$245,988.00</p>
      </div>
      <div className="flex flex-col gap-3 p-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Expenses</p>
          <p className="text-red-600">+10.18%</p>
        </div>
        <p className="text-2xl font-semibold">$30,156.00</p>
      </div>
    </div>
  );
};

export default TrendingStats;
