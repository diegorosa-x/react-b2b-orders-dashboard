type TableFilterProps<T> = {
  options: T[];
  current: T;
  onChange: (val: T) => void;

  search: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
};

export const TableFilter = <T,>({
  options,
  current,
  onChange,
  search,
  onSearchChange,
  searchPlaceholder = "Buscar...",
}: TableFilterProps<T>) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-3">
      
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={searchPlaceholder}
        className="w-full sm:w-64 px-3 py-2 rounded border 
                   bg-white dark:bg-zinc-900
                   border-gray-300 dark:border-zinc-700
                   text-sm"
      />

      <select
        value={String(current)}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full sm:w-48 px-3 py-2 rounded border 
                   bg-white dark:bg-zinc-900
                   border-gray-300 dark:border-zinc-700
                   text-sm"
      >
        {options.map((opt) => (
          <option key={String(opt)} value={String(opt)}>
            {String(opt)}
          </option>
        ))}
      </select>
    </div>
  );
};