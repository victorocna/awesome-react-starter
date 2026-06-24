import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import ChangePasswordForm from './Forms/ChangePasswordForm';
import MyProfileDetails from './MyProfileDetails';

const MyProfileSuccess = ({ name, email }) => (
  <Tabs defaultValue="account" className="w-full">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Change Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <MyProfileDetails name={name} email={email} />
    </TabsContent>
    <TabsContent value="password">
      <ChangePasswordForm />
    </TabsContent>
  </Tabs>
);

export default MyProfileSuccess;
