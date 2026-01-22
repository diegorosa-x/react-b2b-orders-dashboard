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
      <main className="flex-1 p-6 flex flex-col min-h-0">
        {/* min-h-0 + flex-1 evita que overflow no conteúdo quebre a página */}
        <div className="flex-1 overflow-auto min-h-0">{children}</div>
      </main>
    </div>
  );
};
