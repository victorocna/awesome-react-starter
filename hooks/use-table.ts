import { Table, TableOptions, getCoreRowModel, useReactTable } from '@tanstack/react-table';

/**
 * Custom hook that wraps useReactTable with sensible defaults.
 *
 * @template TData - The type of data in each row of the table.
 * @param {Omit<TableOptions<TData>, 'getCoreRowModel'> & { getCoreRowModel?: TableOptions<TData>['getCoreRowModel'] }} options - Table configuration options.
 * @returns {Table<TData>} The TanStack Table instance.
 */
export default function useTable<TData>(
  options: Omit<TableOptions<TData>, 'getCoreRowModel'> & {
    getCoreRowModel?: TableOptions<TData>['getCoreRowModel'];
  }
): Table<TData> {
  const {
    columns,
    data = [],
    getCoreRowModel: coreRowModel = getCoreRowModel(),
    ...restOptions
  } = options;

  return useReactTable({
    columns,
    data,
    getCoreRowModel: coreRowModel,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    ...restOptions,
  } as TableOptions<TData>);
}
