import { useAxios } from '../../hooks';
import { ProfileSuccess, ProfileError, ProfileLoading } from '.';

const Profile = () => {
  const { data, status } = useAxios(`/profile`);

  return (
    <article className="bg-white border border-gray-400 rounded-lg py-4 lg:py-8 mb-4">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <h1 className="font-bold text-xl">My profile</h1>
      </div>

      {status === 'loading' && <ProfileLoading />}
      {status === 'error' && <ProfileError />}
      {status === 'success' && <ProfileSuccess {...data} />}
    </article>
  );
};

export default Profile;
