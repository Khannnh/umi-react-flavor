
import React from 'react';
import { useDeviceStats } from '@/hooks/useDeviceStats';
import DeviceStatsCard from './DeviceStatsCard';
import StatsLoading from './StatsLoading';

const MonthlyDeviceStats = () => {
  const { data: deviceStats, isLoading, error } = useDeviceStats();

  if (isLoading) return <StatsLoading />;
  
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Có lỗi xảy ra khi tải dữ liệu</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Top thiết bị được mượn nhiều nhất
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {deviceStats?.map((device) => (
          <DeviceStatsCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default MonthlyDeviceStats;
