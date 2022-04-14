import { useQuery } from '../../hooks';
import { MyProfileSuccess, MyProfileError, MyProfileLoading } from '.';

const MyProfile = () => {
  const { data, status } = useQuery(`/profile`);

  return (
    <article className="bg-white py-4">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <h1 className="font-bold text-xl">My profile</h1>
      </div>

      {status === 'loading' && <MyProfileLoading />}
      {status === 'error' && <MyProfileError />}
      {status === 'success' && <MyProfileSuccess {...data} />}
    </article>
  );
};

export default MyProfile;
