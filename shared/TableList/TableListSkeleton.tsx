'use client';

type Props = {
  rows?: number;
};

export const TableListSkeleton = ({ rows = 5 }: Props) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-700">
          <div className="grid grid-cols-4 gap-4 p-3 bg-gray-100 dark:bg-zinc-800">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-24 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"
              />
            ))}
          </div>

          {Array.from({ length: rows }).map((_, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-4 gap-4 p-3 border-t border-gray-200 dark:border-zinc-700"
            >
              {Array.from({ length: 4 }).map((_, colIdx) => (
                <div
                  key={colIdx}
                  className="h-4 w-full bg-gray-200 dark:bg-zinc-700 rounded animate-pulse"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden space-y-3 p-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 space-y-3"
          >
            <div className="h-4 w-1/3 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-1/4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </>
  );
};
