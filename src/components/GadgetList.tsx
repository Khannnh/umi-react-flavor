
import { useState } from 'react';

interface Gadget {
  id: number;
  name: string;
  category: string;
  status: 'available' | 'in-use' | 'maintenance';
  image: string;
  lastUpdated: string;
}

const GadgetList = () => {
  const [gadgets] = useState<Gadget[]>([
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: 'Laptop',
      status: 'available',
      image: '💻',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      category: 'Smartphone',
      status: 'in-use',
      image: '📱',
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'iPad Air',
      category: 'Tablet',
      status: 'available',
      image: '📱',
      lastUpdated: '3 hours ago'
    },
    {
      id: 4,
      name: 'AirPods Pro',
      category: 'Audio',
      status: 'maintenance',
      image: '🎧',
      lastUpdated: '5 days ago'
    },
    {
      id: 5,
      name: 'Dell Monitor 27"',
      category: 'Display',
      status: 'available',
      image: '🖥️',
      lastUpdated: '1 hour ago'
    },
    {
      id: 6,
      name: 'Magic Mouse',
      category: 'Accessory',
      status: 'in-use',
      image: '🖱️',
      lastUpdated: '2 days ago'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-use':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'maintenance':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'in-use':
        return 'In Use';
      case 'maintenance':
        return 'Maintenance';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <div
              key={gadget.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{gadget.image}</div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                    gadget.status
                  )}`}
                >
                  {getStatusText(gadget.status)}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {gadget.name}
              </h3>
              
              <p className="text-gray-600 mb-4">{gadget.category}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Updated: {gadget.lastUpdated}</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More Gadgets
          </button>
        </div>
      </div>
    </section>
  );
};

export default GadgetList;
