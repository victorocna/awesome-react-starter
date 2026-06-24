import { Table as TableType, flexRender } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { Skeleton } from './skeleton';

interface DataTableProps<TData> {
  table: TableType<TData>;
  loading?: boolean;
}

/**
 * DataTable component that renders a table's structure (headers, rows, cells, and loading state)
 * based on a provided TanStack Table instance.
 *
 * @param {Object} props - The props for the DataTable component.
 * @param {TableType<TData>} props.table - The TanStack Table instance.
 * @param {boolean} [props.loading=false] - Whether the table data is currently loading.
 * @returns {React.ReactNode} A JSX element rendering the table.
 */
export function DataTable<TData>({ table, loading = false }: DataTableProps<TData>) {
  const columns = table.getAllColumns();

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-[0.8rem]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: 5 }).map((_, rowIndex) => {
              return (
                <TableRow key={`loading-row-${rowIndex}`}>
                  {columns.map((_, colIndex) => {
                    return (
                      <TableCell key={`loading-cell-${rowIndex}-${colIndex}`}>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
