'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarItem } from './sidebarItems';
import { User } from 'lucide-react';

type SidebarProps = {
  items: SidebarItem[];
};

export const Sidebar = ({ items }: SidebarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="p-2 md:hidden fixed top-4 left-4 z-30 bg-white dark:bg-zinc-900 rounded shadow-md"
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white dark:bg-zinc-900 shadow-md
          transform ${open ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:shadow-none z-30
        `}
      >
        <div className="p-6 flex flex-col h-full">
            <div className="flex flex-col items-start mb-8">
                <div className="flex items-center gap-3 mb-1">
                    <User className="w-8 h-8 text-gray-500 dark:text-gray-300" />
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-gray-900 dark:text-white">John Doe</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Admin</span>
                    </div>
                </div>
            </div>

          <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded
                    ${isActive ? 'bg-blue-500 text-white' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700'}
                  `}
                  onClick={() => setOpen(false)}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};
