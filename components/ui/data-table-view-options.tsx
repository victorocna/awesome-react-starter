import { type Table } from '@tanstack/react-table';
import { Settings2 } from 'lucide-react';

import { Button } from '@components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';

/**
 * Formats a column ID into a reader-friendly label by replacing dots, hyphens, and
 * underscores with spaces, and splitting camelCase words.
 *
 * @param {string} id - The column ID to format.
 * @returns {string} The formatted column label.
 */
function formatColumnId(id: string): string {
  return id
    .replace(/[._-]/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * A dropdown component that allows toggling the visibility of table columns.
 *
 * @template TData - The generic type of row data.
 * @param {Object} props - The component props.
 * @param {Table<TData>} props.table - The TanStack Table instance.
 * @returns {React.ReactNode} The rendered view options dropdown.
 */
export function DataTableViewOptions<TData>({ table }: { table: Table<TData> }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
          .map((column) => {
            const title =
              typeof column.columnDef.header === 'string'
                ? column.columnDef.header
                : (column.columnDef.meta as any)?.title || formatColumnId(column.id);

            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {title}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
