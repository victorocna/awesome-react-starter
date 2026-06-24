import { useQuery } from '@hooks';
import MyProfileError from './MyProfileError';
import MyProfileLoading from './MyProfileLoading';
import MyProfileSuccess from './MyProfileSuccess';

const MyProfile = () => {
  const { data, status } = useQuery(`/admin/profile`);

  return (
    <div>
      {status === 'pending' && <MyProfileLoading />}
      {status === 'error' && <MyProfileError />}
      {status === 'success' && <MyProfileSuccess {...data} />}
    </div>
  );
};

export default MyProfile;
