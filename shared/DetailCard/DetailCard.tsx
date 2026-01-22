'use client';

import React from 'react';

export type DetailItem = {
  label: string;
  value: React.ReactNode;
};

interface DetailCardProps {
  items: DetailItem[];
  title?: string;
}

export const DetailCard = ({ items, title }: DetailCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6">
      {title && <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400 font-semibold mb-1">{item.label}</span>
            <span className="text-gray-900 dark:text-gray-50 font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
