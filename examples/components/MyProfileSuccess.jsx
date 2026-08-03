import { Tabs } from 'radix-ui';
import ChangePasswordForm from './Forms/ChangePasswordForm';
import MyProfileDetails from './MyProfileDetails';

/**
 * Renders the tabs for account settings and password change in user profile.
 *
 * @param {Object} props
 * @param {string} props.name User's name
 * @param {string} props.email User's email address
 */
const MyProfileSuccess = ({ name, email }) => {
  return (
    <Tabs.Root defaultValue="1" className="w-full">
      <Tabs.List className="flex gap-6 border-b border-gray-200 mb-6">
        <Tabs.Trigger
          value="1"
          className="pb-2 text-base font-semibold text-gray-500 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary hover:text-gray-700 transition outline-none cursor-pointer"
        >
          Account
        </Tabs.Trigger>
        <Tabs.Trigger
          value="2"
          className="pb-2 text-base font-semibold text-gray-500 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary hover:text-gray-700 transition outline-none cursor-pointer"
        >
          Change Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="1">
        <MyProfileDetails name={name} email={email} />
      </Tabs.Content>
      <Tabs.Content value="2">
        <ChangePasswordForm />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default MyProfileSuccess;

