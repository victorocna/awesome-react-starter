import { MenuGroup, MenuItem } from '.';

const Pages = () => {
  return (
    <>
      <MenuItem href="/admin" level="1">
        Dashboard
      </MenuItem>
      <MenuItem href="/examples/todos" level="1">
        My todos
      </MenuItem>
      <MenuItem href="/examples/profile" level="1">
        Profile
      </MenuItem>
      <MenuItem href="/examples/multi-step" level="1">
        Multistep form
      </MenuItem>
      <MenuGroup label="Components">
        <MenuItem href="/examples/buttons" level="2">
          Buttons
        </MenuItem>
        <MenuItem href="/examples/dropdown" level="2">
          Dropdown
        </MenuItem>
        <MenuItem href="/examples/dropdown" level="2">
          Dropdown
        </MenuItem>
        <MenuItem href="/examples/combobox" level="2">
          Combobox
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
        <MenuItem href="/examples/forms" level="2">
          Forms
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
