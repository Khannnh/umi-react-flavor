
import React from 'react';
import { DeviceStats } from '@/types/statistics';

interface DeviceStatsCardProps {
  device: DeviceStats;
}

const DeviceStatsCard: React.FC<DeviceStatsCardProps> = ({ device }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={device.image}
          alt={device.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {device.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {device.category}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Số lần mượn:</span>
            <span className="font-bold text-blue-600">{device.borrowCount}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tổng thời gian:</span>
            <span className="font-semibold text-gray-900">{device.totalHours}h</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Trạng thái:</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              device.status === 'available' 
                ? 'bg-green-100 text-green-800' 
                : device.status === 'in-use'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {device.status === 'available' ? 'Có sẵn' : 
               device.status === 'in-use' ? 'Đang dùng' : 'Bảo trì'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceStatsCard;
