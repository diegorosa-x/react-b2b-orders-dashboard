import { LucideIcon, List } from 'lucide-react';

export type SidebarItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export const sidebarItems = [
  { label: 'Orders', href: '/orders', icon: List },
];