type Column<T> = {
  id: string;
  header: string;
  cell: (row: T) => React.ReactNode;
  width?: string; // opcional
};

type Props<T> = {
  items: T[];
  columns: Column<T>[];
};

export function SimpleDataTable<T>({ items, columns }: Props<T>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="border-b">
            {columns.map(col => (
              <th
                key={col.id}
                className="text-left text-sm font-medium p-2 truncate"
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((row, i) => (
            <tr key={i} className="border-b">
              {columns.map(col => (
                <td
                  key={col.id}
                  className="p-2 text-sm truncate"
                >
                  {col.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
