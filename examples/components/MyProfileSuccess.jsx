import { Tab, Tabs } from 'react-bootstrap';
import ChangePasswordForm from './Forms/ChangePasswordForm';
import MyProfileDetails from './MyProfileDetails';

const MyProfileSuccess = ({ name, email }) => (
  <>
    <Tabs className="profile-tabs" defaultActiveKey="1">
      <Tab eventKey="1" title={<p>Account</p>}>
        <MyProfileDetails name={name} email={email} />
      </Tab>
      <Tab eventKey="2" title={<p>Change Password</p>}>
        <ChangePasswordForm />
      </Tab>
    </Tabs>
  </>
);

export default MyProfileSuccess;
