import { ProfileLoading, ProfileMenu, ProfileSuccess } from '@components';
import { useDisclosure, useOnClickOutside, useProfile } from '@hooks';
import { useRef } from 'react';

const Profile = () => {
  const { status, me } = useProfile();

  const { isOpen, hide, toggle } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);

  return (
    <div ref={ref} className="relative flex items-center gap-4">
      <div
        className="hidden cursor-pointer items-center space-x-2 md:flex"
        onClick={toggle}
        role="button"
      >
        <div className="flex items-center gap-2">
          {status === 'loading' && <ProfileLoading />}
          {status === 'success' && <ProfileSuccess {...me} />}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <i className="fas fa-user text-lg text-white"></i>
          </div>
        </div>
        {isOpen ? (
          <i className="fas fa-chevron-up text-gray-600"></i>
        ) : (
          <i className="fas fa-chevron-down text-gray-600"></i>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-12 right-2 z-50 rounded-lg bg-white shadow-xl">
          <ProfileMenu />
        </div>
      )}
    </div>
  );
};

export default Profile;
