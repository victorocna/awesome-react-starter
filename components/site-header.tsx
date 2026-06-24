import { Separator } from '@components/ui/separator';
import { SidebarTrigger } from '@components/ui/sidebar';
import { ModeToggle } from './mode-toggle';

/**
 * SiteHeader component displaying the sidebar trigger, page title, and theme toggler.
 * 
 * @param {object} props - Component properties.
 * @param {string} [props.title] - Optional title to display in the header.
 * @returns {React.ReactElement} The rendered site header.
 */
export function SiteHeader({ title }: { title?: string }) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4 my-auto"
        />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

