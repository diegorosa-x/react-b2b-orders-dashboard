'use client';

import React from 'react';

type PageContainerProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const PageContainer = ({ title, subtitle, children }: PageContainerProps) => {
  return (
   <div className="flex flex-col h-full min-h-screen space-y-6">
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
            {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>
            )}
        </div>
        <div className="flex-1 overflow-auto min-h-0">
            {children}
        </div>
    </div>
  );
};
