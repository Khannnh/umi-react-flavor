
import { useQuery } from '@tanstack/react-query';
import { DeviceStats } from '@/types/statistics';

// Mock data - thay thế bằng API call thực tế
const mockDeviceStats: DeviceStats[] = [
  {
    id: 1,
    name: 'MacBook Pro 16" M1',
    category: 'Laptop',
    borrowCount: 45,
    totalHours: 720,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    category: 'Smartphone',
    borrowCount: 38,
    totalHours: 456,
    status: 'in-use',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'iPad Air 5th Gen',
    category: 'Tablet',
    borrowCount: 32,
    totalHours: 384,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Dell XPS 13',
    category: 'Laptop',
    borrowCount: 29,
    totalHours: 522,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'AirPods Pro 2nd Gen',
    category: 'Audio',
    borrowCount: 27,
    totalHours: 162,
    status: 'maintenance',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphone',
    borrowCount: 25,
    totalHours: 400,
    status: 'in-use',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Canon EOS R5',
    category: 'Camera',
    borrowCount: 22,
    totalHours: 176,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Microsoft Surface Pro 9',
    category: 'Tablet',
    borrowCount: 20,
    totalHours: 320,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// API function - thay thế URL bằng endpoint thực tế
const fetchDeviceStats = async (): Promise<DeviceStats[]> => {
  // Thay thế bằng API call thực tế:
  // const response = await fetch('/api/device-stats');
  // return response.json();
  
  // Mock delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockDeviceStats;
};

export const useDeviceStats = () => {
  return useQuery({
    queryKey: ['deviceStats'],
    queryFn: fetchDeviceStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
