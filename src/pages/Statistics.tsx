
import React from 'react';
import StatsHeader from '@/components/statistics/StatsHeader';
import MonthlyDeviceStats from '@/components/statistics/MonthlyDeviceStats';
import StatsCharts from '@/components/statistics/StatsCharts';

const Statistics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <StatsHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MonthlyDeviceStats />
        <StatsCharts />
      </div>
    </div>
  );
};

export default Statistics;
