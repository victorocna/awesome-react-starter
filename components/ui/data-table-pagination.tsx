import { type Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useRef } from 'react';

import { Spinner } from '@components/ui/spinner';
import { Button } from '@components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';
import { useIntersectionObserver } from '@hooks';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

/**
 * Standard page-based pagination controls component for TanStack Table.
 *
 * @param {Object} props - The component props.
 * @param {Table<TData>} props.table - The TanStack Table instance.
 * @returns {React.ReactNode} The rendered page-based pagination controls.
 */
export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const selectedRowCount = table.getFilteredSelectedRowModel().rows.length;

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {selectedRowCount > 0 && (
          <p>
            {selectedRowCount} of {table.getFilteredRowModel().rows.length} row(s) selected.
          </p>
        )}
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => {
                return (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => {
              table.setPageIndex(0);
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => {
              table.setPageIndex(table.getPageCount() - 1);
            }}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

interface DataTableInfinitePaginationProps<TData> {
  table?: Table<TData>;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

/**
 * Scroll-based infinite pagination component for TanStack Table.
 *
 * @param {Object} props - The component props.
 * @param {Table<TData>} [props.table] - Optional TanStack Table instance.
 * @param {Function} props.fetchNextPage - Function to fetch the next page.
 * @param {boolean} props.hasNextPage - Whether there is a next page to fetch.
 * @param {boolean} props.isFetchingNextPage - Whether the next page is currently being fetched.
 * @returns {React.ReactNode} The rendered scroll-based pagination controls.
 */
export function DataTableInfinitePagination<TData>({
  table,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: DataTableInfinitePaginationProps<TData>) {
  const ref = useRef<HTMLDivElement>(null);
  const hasData = table ? table.getRowModel().rows.length > 0 : false;

  useIntersectionObserver({
    target: ref,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  const handleClick = () => {
    if (typeof fetchNextPage === 'function') {
      fetchNextPage();
    }
  };

  if (!hasNextPage) {
    if (hasData) {
      return (
        <div className="py-6 text-center text-sm text-muted-foreground border-t">
          No more results.
        </div>
      );
    }
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center py-6 gap-2" ref={ref}>
      {isFetchingNextPage ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner />
          <span>Loading more...</span>
        </div>
      ) : (
        <Button className="button full secondary hover-transition text-xs" onClick={handleClick}>
          Load more
        </Button>
      )}
    </div>
  );
}
