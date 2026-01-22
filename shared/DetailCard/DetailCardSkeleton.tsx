export const DetailCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6 animate-pulse">
      <div className="h-5 w-40 bg-gray-200 dark:bg-zinc-700 rounded mb-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <div className="h-3 w-24 bg-gray-200 dark:bg-zinc-700 rounded mb-2" />
            <div className="h-4 w-full bg-gray-300 dark:bg-zinc-600 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};
