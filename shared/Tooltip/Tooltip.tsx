'use client';

import { ReactNode } from 'react';

type TooltipProps = {
  label: string;
  children: ReactNode;
};

export const Tooltip = ({ label, children }: TooltipProps) => {
  return (
    <div className="relative inline-flex group">
      {children}

      <span
        className="
          absolute
          right-1/2 translate-x-1/2
          top-full mt-1
          hidden group-hover:block
          whitespace-nowrap
          text-xs
          bg-black text-white
          px-2 py-1
          rounded
          shadow
          z-50
        "
      >
        {label}
      </span>
    </div>
  );
};
