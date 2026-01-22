'use client';

import React from 'react';
import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href?: string; 
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4" aria-label="breadcrumb">
      <ol className="flex flex-wrap gap-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-blue-500 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium">{item.label}</span>
              )}

              {!isLast && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
