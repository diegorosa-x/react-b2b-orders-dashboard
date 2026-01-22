type TableFilterProps<T> = {
  options: T[];
  current: T;
  onChange: (val: T) => void;
};

export const TableFilter = <T,>({ options, current, onChange }: TableFilterProps<T>) => (
  <div className="mb-4 flex gap-2 flex-wrap">
    {options.map((opt) => (
      <button
        key={String(opt)}
        className={`px-3 py-1 rounded ${
          current === opt ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-zinc-700 text-black dark:text-white'
        }`}
        onClick={() => onChange(opt)}
      >
        {opt}
      </button>
    ))}
  </div>
);