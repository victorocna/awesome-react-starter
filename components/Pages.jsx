import { MenuGroup, MenuItem } from '@components';

const Pages = () => {
  return (
    <>
      <MenuItem href="/admin" level="1">
        Dashboard
      </MenuItem>
      <MenuItem href="/examples/todo-list" level="1">
        To Do List
      </MenuItem>
      <MenuItem href="/examples/todo-table" level="1">
        To Do Table
      </MenuItem>
      <MenuItem href="/examples/profile" level="1">
        Profile
      </MenuItem>
      <MenuGroup label="Data Display">
        <MenuItem href="/examples/description-lists" level="2">
          Description Lists
        </MenuItem>
        <MenuItem href="/examples/stats" level="2">
          Stats
        </MenuItem>
      </MenuGroup>
      <MenuGroup label="Components">
        <MenuItem href="/examples/buttons" level="2">
          Buttons
        </MenuItem>
        <MenuItem href="/examples/context-menu" level="2">
          Context Menu
        </MenuItem>
        <MenuItem href="/examples/date-picker" level="2">
          Date Picker
        </MenuItem>
        <MenuItem href="/examples/time-picker" level="2">
          Time Picker
        </MenuItem>
        <MenuItem href="/examples/date-of-birth" level="2">
          Date of birth
        </MenuItem>
        <MenuItem href="/examples/dropdown" level="2">
          Dropdown
        </MenuItem>
        <MenuItem href="/examples/async-dropdown" level="2">
          Async Dropdown
        </MenuItem>
        <MenuItem href="/examples/async-multiselect" level="2">
          Async MultiSelect
        </MenuItem>
        <MenuItem href="/examples/combobox" level="2">
          Combobox
        </MenuItem>
        <MenuItem href="/examples/async-combobox" level="2">
          Async Combobox
        </MenuItem>
        <MenuItem href="/examples/autocomplete" level="2">
          Autocomplete
        </MenuItem>
        <MenuItem href="/examples/modals" level="2">
          Modals
        </MenuItem>
        <MenuItem href="/examples/overflow" level="2">
          Overflow
        </MenuItem>
        <MenuItem href="/examples/pills" level="2">
          Pills
        </MenuItem>
        <MenuItem href="/examples/show-more" level="2">
          Show more
        </MenuItem>
        <MenuItem href="/examples/file-upload" level="2">
          File Upload
        </MenuItem>
        <MenuItem href="/examples/toggle" level="2">
          Toggle
        </MenuItem>
        <MenuItem href="/examples/translate-all" level="2">
          Translate all
        </MenuItem>
        <MenuItem href="/examples/filter-modal" level="2">
          Filter modal
        </MenuItem>
      </MenuGroup>
      <MenuGroup label="Forms">
        <MenuItem href="/examples/forms" level="2">
          Basic forms
        </MenuItem>
        <MenuItem href="/examples/react-hook-form" level="2">
          React hook forms
        </MenuItem>
        <MenuItem href="/examples/react-hook-array" level="2">
          React hook array field
        </MenuItem>
        <MenuItem href="/examples/multi-step-form" level="2">
          Complex multi step forms
        </MenuItem>
      </MenuGroup>
      <MenuItem href="/login" level="1">
        Login page
      </MenuItem>
      <MenuItem href="/signup" level="1">
        Signup page
      </MenuItem>
      <MenuItem href="/404" level="1">
        404 Page
      </MenuItem>
    </>
  );
};

export default Pages;
