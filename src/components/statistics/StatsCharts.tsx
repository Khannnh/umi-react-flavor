
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDeviceStats } from '@/hooks/useDeviceStats';

const StatsCharts = () => {
  const { data: deviceStats } = useDeviceStats();

  const chartData = deviceStats?.slice(0, 10).map(device => ({
    name: device.name.length > 15 ? device.name.substring(0, 15) + '...' : device.name,
    borrowCount: device.borrowCount,
    totalHours: device.totalHours
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Biểu đồ số lần mượn
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="borrowCount" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsCharts;
