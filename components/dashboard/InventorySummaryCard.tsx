import React from 'react';

// Define a TypeScript interface for the props
interface InventorySummaryCardProps {
  item: {
    title: string;
    number: string | number;
  };
}

const InventorySummaryCard: React.FC<InventorySummaryCardProps> = ({ item }) => {
  return (
    <div className="mb-4 shadow rounded-lg border border-slate-200 hover:border-blue-40 bg-white p-8 py-2 px-3 cursor-pointer flex items-center justify-between gap-3 transition-all duration-300">
      <h2 className="text-slate-500 uppercase">{item.title}</h2>
      <h4 className="text-2xl">{item.number}</h4>
    </div>
  );
}

export default InventorySummaryCard;
