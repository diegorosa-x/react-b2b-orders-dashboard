type TablePaginationProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export const TablePagination = ({ current, total, onPrev, onNext }: TablePaginationProps) => (
  <div className="flex justify-end items-center gap-2 mt-4">
    <button
      onClick={onPrev}
      disabled={current === 1}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 disabled:opacity-50"
    >
      Anterior
    </button>
    <span className="text-gray-700 dark:text-gray-200">
      {current} / {total}
    </span>
    <button
      onClick={onNext}
      disabled={current === total}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 disabled:opacity-50"
    >
      Próximo
    </button>
  </div>
);