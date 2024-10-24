import { Link } from '@components';
import React from 'react';

const IconsStats = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-base">Last 30 days</h3>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="flex bg-white items-center p-4 gap-4">
            <div className="flex justify-center items-center rounded-lg p-4 text-white bg-primary text-xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Total Subscribers</p>
              <div className="flex items-end gap-3">
                <p className="text-2xl font-semibold">71,897</p>
                <div className="flex gap-1 mb-0.5 items-center text-green-600">
                  <i className="fa-solid fa-arrow-up"></i>
                  <p className="font-semibold">122</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-4 px-6">
            <Link className="text-primary font-medium" href="#">
              View all
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="flex bg-white items-center p-4 gap-4">
            <div className="flex justify-center items-center rounded-lg p-4 text-white bg-primary text-xl">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Avg. Open Rate</p>
              <div className="flex items-end gap-3">
                <p className="text-2xl font-semibold">58.16%</p>
                <div className="flex gap-1 mb-0.5 items-center text-green-600">
                  <i className="fa-solid fa-arrow-up"></i>
                  <p className="font-semibold">5.4%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-4 px-6">
            <Link className="text-primary font-medium" href="#">
              View all
            </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="flex bg-white items-center p-4 gap-4">
            <div className="flex justify-center items-center rounded-lg p-4 text-white bg-primary text-xl">
              <i className="fa-solid fa-arrow-pointer"></i>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Avg. Click Rate</p>
              <div className="flex items-end gap-3">
                <p className="text-2xl font-semibold">24.57%</p>
                <div className="flex gap-1 mb-0.5 items-center text-red-600">
                  <i className="fa-solid fa-arrow-down"></i>
                  <p className="font-semibold">3.2%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-4 px-6">
            <Link className="text-primary font-medium" href="#">
              View all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsStats;
