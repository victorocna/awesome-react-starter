import { AppSidebar } from '@components/app-sidebar';
import { SiteHeader } from '@components/site-header';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';

/**
 * Layout component for the dashboard pages.
 * Displays the AppSidebar and SiteHeader wrapper layout structure.
 * 
 * @param {object} props - Component properties.
 * @param {string} [props.title] - The page title.
 * @param {React.ReactNode} props.children - Page contents.
 * @returns {React.ReactElement} The rendered layout.
 */
const Layout = ({ title, children }) => {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': 'calc(var(--spacing) * 72)',
        '--header-height': 'calc(var(--spacing) * 12)',
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title={title} />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
