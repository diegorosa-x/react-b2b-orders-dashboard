'use client';

import { PageLayout } from '@/components/PageLayout/PageLayout';
import OrdersPage from './orders/page';

export default function HomePage() {
  return (
    <PageLayout>
      <OrdersPage />
    </PageLayout>
  );
}
