import { Table } from '@tanstack/react-table';
import { CheckCircle, X, XCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@components/ui/button';
import { DataTableViewOptions } from '@components/ui/data-table-view-options';
import { Input } from '@components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';
import { useDebounce } from '@hooks';
import { toaster } from '@lib';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

/**
 * DataTableToolbar component that manages table-wide controls including
 * column filtering, text search, bulk actions, and resets.
 *
 * @template TData - The generic type of row data.
 * @param {Object} props - The component props.
 * @param {Table<TData>} props.table - The TanStack Table instance.
 * @returns {React.ReactNode} The rendered toolbar component.
 */
export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const nameColumn = table.getColumn('name');
  const doneColumn = table.getColumn('done');

  const [searchValue, setSearchValue] = useState((nameColumn?.getFilterValue() as string) || '');
  const selectedRowsCount = table.getFilteredSelectedRowModel().rows.length;

  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    nameColumn?.setFilterValue(debouncedSearchValue || undefined);
  }, [debouncedSearchValue, nameColumn]);

  const isFiltered = useMemo(() => {
    const currentFilters = table.getState().columnFilters;
    const initialFilters = table.initialState.columnFilters ?? [];

    if (currentFilters.length !== initialFilters.length) {
      return true;
    }

    return currentFilters.some((filter, index) => {
      const initial = initialFilters[index];
      return !initial || initial.id !== filter.id || initial.value !== filter.value;
    });
  }, [table.getState().columnFilters]);

  return (
    <div className="flex items-center gap-2">
      {nameColumn && (
        <Input
          placeholder="Search tasks..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      )}
      {doneColumn && (
        <Select
          value={(doneColumn.getFilterValue() as string) ?? ''}
          onValueChange={(value) => {
            doneColumn.setFilterValue(value);
          }}
        >
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Done" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">
              <CheckCircle className="size-4 text-green-500" /> Done
            </SelectItem>
            <SelectItem value="false">
              <XCircle className="size-4 text-destructive" /> Not done
            </SelectItem>
          </SelectContent>
        </Select>
      )}
      {selectedRowsCount > 0 && (
        <Button
          variant="secondary"
          onClick={() => {
            toaster.success(
              `Action successfully simulated on ${selectedRowsCount} selected task(s)`
            );
          }}
        >
          Perform Action ({selectedRowsCount})
        </Button>
      )}
      {isFiltered && (
        <Button
          variant="outline"
          onClick={() => {
            table.resetColumnFilters();
            setSearchValue('');
          }}
          className="ml-auto"
        >
          <X className="size-4" /> Reset
        </Button>
      )}
      <DataTableViewOptions table={table} />
    </div>
  );
}
