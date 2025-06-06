
import React from 'react';

const StatsHeader = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Thống kê thiết bị
          </h1>
          <p className="mt-2 text-gray-600">
            Xem thống kê các thiết bị được mượn nhiều nhất trong tháng
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsHeader;
