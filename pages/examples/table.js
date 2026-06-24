import { Layout } from '@components';
import { Button } from '@components/ui/button';
import { DataTable } from '@components/ui/data-table';
import {
  DataTableInfinitePagination,
  DataTablePagination,
} from '@components/ui/data-table-pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { columns } from '@data/todos-columns';
import { DataTableToolbar } from '@examples/components/Todos/DataTableToolbar';
import { useInfiniteQuery, useTable } from '@hooks';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Demo component showcasing table with server-side pagination.
 */
function PaginationTableDemo() {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnFilters, setColumnFilters] = useState([{ id: 'done', value: 'false' }]);

  const handleSortingChange = (updater) => {
    setSorting(updater);
    setPagination((prev) => {
      return { ...prev, pageIndex: 0 };
    });
  };

  const handleColumnFiltersChange = (updater) => {
    setColumnFilters(updater);
    setPagination((prev) => {
      return { ...prev, pageIndex: 0 };
    });
  };

  const { data, status } = useInfiniteQuery('admin/todos', {
    per_page: pagination.pageSize,
    page: pagination.pageIndex + 1,
    sorting,
    columnFilters,
  });

  const table = useTable({
    data: data?.pages ?? [],
    columns,
    rowCount: data?.pageParams?.count ?? -1,
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    initialState: {
      columnFilters: [{ id: 'done', value: 'false' }],
    },
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    onPaginationChange: setPagination,
    onSortingChange: handleSortingChange,
    onColumnFiltersChange: handleColumnFiltersChange,
  });

  return (
    <div className="flex flex-col gap-4">
      <DataTableToolbar table={table} />
      <DataTable table={table} loading={status === 'pending'} />
      <DataTablePagination table={table} />
    </div>
  );
}

/**
 * Demo component showcasing table with infinite scroll (load more on scroll).
 */
function InfiniteScrollTableDemo() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([{ id: 'done', value: 'false' }]);

  const handleSortingChange = (updater) => {
    setSorting(updater);
  };

  const handleColumnFiltersChange = (updater) => {
    setColumnFilters(updater);
  };

  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'admin/todos',
    {
      sorting,
      columnFilters,
    }
  );

  const table = useTable({
    data: data?.pages ?? [],
    columns,
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      columnFilters: [{ id: 'done', value: 'false' }],
    },
    manualSorting: true,
    manualFiltering: true,
    onSortingChange: handleSortingChange,
    onColumnFiltersChange: handleColumnFiltersChange,
  });

  return (
    <div className="flex flex-col gap-4">
      <DataTableToolbar table={table} />
      <DataTable table={table} loading={status === 'pending'} />
      <DataTableInfinitePagination
        table={table}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-2 border-b pb-4">
        <h2 className="text-xl font-bold font-heading">Table Pagination Options</h2>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Interactive showcase of standard server-side pagination and infinite scroll.
          </p>
          <Button asChild variant="link" size="xs">
            <Link target="_blank" href="https://ui.shadcn.com/docs/components/table">
              See Documentation
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="pagination" className="flex flex-1 flex-col gap-6">
        <TabsList>
          <TabsTrigger value="pagination">Standard Pagination</TabsTrigger>
          <TabsTrigger value="scroll">Infinite Scroll</TabsTrigger>
        </TabsList>

        <TabsContent value="pagination">
          <div className="flex flex-1 items-start justify-start py-4">
            <div className="w-3xl flex gap-4 flex-col">
              <PaginationTableDemo />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scroll">
          <div className="flex flex-1 items-start justify-start py-4">
            <div className="w-3xl flex gap-4 flex-col">
              <InfiniteScrollTableDemo />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Table Examples">{page}</Layout>;
};

/**
 * Restricts this page to development/non-production build environments.
 *
 * @returns {Promise<Object>} Next.js static props or notFound page.
 */
export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
