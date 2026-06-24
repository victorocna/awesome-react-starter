const MyProfileDetails = ({ name, email }) => {
  return (
    <>
      <div className="flex flex-col">
        <dt className="lg:w-1/4">Name: </dt>
        <dd className="font-semibold">{name}</dd>
      </div>
      <div className="flex flex-col">
        <dt className="lg:w-1/4">Email: </dt>
        <dd className="font-semibold">{email}</dd>
      </div>
    </>
  );
};

export default MyProfileDetails;
