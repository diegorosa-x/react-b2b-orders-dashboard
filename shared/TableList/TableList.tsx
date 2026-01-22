import React from 'react';

export type Column<T extends object> = {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
};

export type TableListProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
};

export function TableList<T extends object>({ columns, data }: TableListProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse text-sm">
            <thead>
            <tr className="bg-gray-100 dark:bg-zinc-800">
                {columns.map((col, idx) => (
                <th key={idx} className={`text-left p-3 ${col.className || ''}`}>
                    {col.header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, idx) => (
                <tr
                key={idx}
                className="border-t hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
                >
                {columns.map((col, cIdx) => (
                    <td key={cIdx} className="p-3">
                    {typeof col.accessor === 'function'
                        ? col.accessor(row)
                        : String(row[col.accessor])}
                    </td>
                ))}
                </tr>
            ))}
            {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="p-3 text-center text-gray-500 dark:text-gray-400"
              >
                Nenhum registro encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
