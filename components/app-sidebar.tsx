import * as React from 'react';

import { NavComponents } from '@components/nav-components';
import { NavMain } from '@components/nav-main';
import { NavSecondary } from '@components/nav-secondary';
import { NavUser } from '@components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/ui/sidebar';
import {
  CameraIcon,
  ChartBarIcon,
  CircleHelpIcon,
  CodeXml,
  FileTextIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  Settings2Icon,
  UsersIcon,
} from 'lucide-react';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: <LayoutDashboardIcon />,
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: <ListIcon />,
    },
    {
      title: 'Analytics',
      url: '#',
      icon: <ChartBarIcon />,
    },
    {
      title: 'Projects',
      url: '#',
      icon: <FolderIcon />,
    },
    {
      title: 'Team',
      url: '#',
      icon: <UsersIcon />,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: <CameraIcon />,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: <FileTextIcon />,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: <FileTextIcon />,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: <Settings2Icon />,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: <CircleHelpIcon />,
    },
    {
      title: 'Search',
      url: '#',
      icon: <SearchIcon />,
    },
  ],
  components: [
    { name: 'Accordion', url: '/examples/accordion' },
    { name: 'Alert Dialog', url: '/examples/alert-dialog' },
    { name: 'Alert', url: '/examples/alert' },
    { name: 'Aspect Ratio', url: '/examples/aspect-ratio' },
    { name: 'Avatar', url: '/examples/avatar' },
    { name: 'Badge', url: '/examples/badge' },
    { name: 'Breadcrumb', url: '/examples/breadcrumb' },
    { name: 'Button Group', url: '/examples/button-group' },
    { name: 'Buttons', url: '/examples/buttons' },
    { name: 'Calendar', url: '/examples/calendar' },
    { name: 'Card', url: '/examples/card' },
    { name: 'Carousel', url: '/examples/carousel' },
    { name: 'Chart', url: '/examples/chart' },
    { name: 'Checkbox', url: '/examples/checkbox' },
    { name: 'Collapsible', url: '/examples/collapsible' },
    { name: 'Combobox', url: '/examples/combobox' },
    { name: 'Command', url: '/examples/command' },
    { name: 'Context Menu', url: '/examples/context-menu' },
    { name: 'Dialog', url: '/examples/dialog' },
    { name: 'Drawer', url: '/examples/drawer' },
    { name: 'Dropdown Menu', url: '/examples/dropdown-menu' },
    { name: 'Empty State', url: '/examples/empty' },
    { name: 'Field', url: '/examples/field' },
    { name: 'Hover Card', url: '/examples/hover-card' },
    { name: 'Input Group', url: '/examples/input-group' },
    { name: 'Input OTP', url: '/examples/input-otp' },
    { name: 'Input', url: '/examples/input' },
    { name: 'Item List', url: '/examples/item' },
    { name: 'Kbd', url: '/examples/kbd' },
    { name: 'Label', url: '/examples/label' },
    { name: 'Menubar', url: '/examples/menubar' },
    { name: 'Native Select', url: '/examples/native-select' },
    { name: 'Navigation Menu', url: '/examples/navigation-menu' },
    { name: 'Pagination', url: '/examples/pagination' },
    { name: 'Popover', url: '/examples/popover' },
    { name: 'Progress', url: '/examples/progress' },
    { name: 'Radio Group', url: '/examples/radio-group' },
    { name: 'React Hook Form', url: '/examples/react-hook-form' },
    { name: 'Resizable', url: '/examples/resizable' },
    { name: 'Scroll Area', url: '/examples/scroll-area' },
    { name: 'Select', url: '/examples/select' },
    { name: 'Separator', url: '/examples/separator' },
    { name: 'Sheet', url: '/examples/sheet' },
    { name: 'Skeleton', url: '/examples/skeleton' },
    { name: 'Slider', url: '/examples/slider' },
    { name: 'Sonner (Toast)', url: '/examples/sonner' },
    { name: 'Spinner', url: '/examples/spinner' },
    { name: 'Switch', url: '/examples/switch' },
    { name: 'Table', url: '/examples/table' },
    { name: 'Tabs', url: '/examples/tabs' },
    { name: 'Textarea', url: '/examples/textarea' },
    { name: 'Toggle Group', url: '/examples/toggle-group' },
    { name: 'Toggle', url: '/examples/toggle' },
    { name: 'Tooltip', url: '/examples/tooltip' },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="#">
                <CodeXml className="size-5!" />
                <span className="text-base font-semibold">Your Awesome App</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavComponents items={data.components} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
