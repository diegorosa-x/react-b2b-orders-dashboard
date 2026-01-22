'use client';

import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { sidebarItems } from '../Sidebar/sidebarItems';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};
