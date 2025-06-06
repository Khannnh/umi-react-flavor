
export interface DeviceStats {
  id: number;
  name: string;
  category: string;
  borrowCount: number;
  totalHours: number;
  status: 'available' | 'in-use' | 'maintenance';
  image: string;
}

export interface MonthlyStats {
  month: string;
  totalBorrows: number;
  totalDevices: number;
  topCategories: CategoryStats[];
}

export interface CategoryStats {
  category: string;
  count: number;
  percentage: number;
}
