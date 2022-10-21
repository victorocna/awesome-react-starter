import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MyProfileChangePassword from './MyProfileChangePassword';
import MyProfileDetails from './MyProfileDetails';

const MyProfileSuccess = ({ name, email }) => (
  <>
    <Tabs className="profile-tabs" defaultActiveKey="1">
      <Tab eventKey="1" title={<p>Account</p>}>
        <MyProfileDetails {...{ name, email }} />
      </Tab>
      <Tab eventKey="2" title={<p>Change Password</p>}>
        <MyProfileChangePassword />
      </Tab>
    </Tabs>
  </>
);

export default MyProfileSuccess;
