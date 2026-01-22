'use client';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import OrdersPage from './orders/page';
import { sidebarItems } from '@/components/Sidebar/sidebarItems';

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar items={sidebarItems} />
      <main className="flex-1 p-6">
        <OrdersPage />
      </main>
    </div>
  );
}
