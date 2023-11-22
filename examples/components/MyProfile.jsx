import { useQuery } from '@hooks';
import { MyProfileError, MyProfileLoading, MyProfileSuccess } from '.';

const MyProfile = () => {
  const { data, status } = useQuery(`/admin/profile`);

  return (
    <article className="bg-white py-4">
      <div className="mb-4 flex items-center px-4 lg:px-8">
        <h1 className="text-xl font-bold">My profile</h1>
      </div>

      {status === 'loading' && <MyProfileLoading />}
      {status === 'error' && <MyProfileError />}
      {status === 'success' && <MyProfileSuccess {...data} />}
    </article>
  );
};

export default MyProfile;
