import { Link } from '@components';

const IconsStats = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold">Last 30 days</h3>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
          <div className="flex items-center gap-4 bg-white p-4">
            <div className="flex items-center justify-center rounded-lg bg-primary p-4 text-xl text-white">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Total Subscribers</p>
              <div className="flex items-end gap-3">
                <p className="text-2xl font-semibold">71,897</p>
                <div className="mb-0.5 flex items-center gap-1 text-green-600">
                  <i className="fa-solid fa-arrow-up"></i>
                  <p className="font-semibold">122</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <Link className="font-medium text-primary" href="#" onClick={(e) => e.preventDefault()}>
              View all
            </Link>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
          <div className="flex items-center gap-4 bg-white p-4">
            <div className="flex items-center justify-center rounded-lg bg-primary p-4 text-xl text-white">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Avg. Open Rate</p>
              <div className="flex items-end gap-3">
                <p className="text-2xl font-semibold">58.16%</p>
                <div className="mb-0.5 flex items-center gap-1 text-green-600">
                  <i className="fa-solid fa-arrow-up"></i>
                  <p className="font-semibold">5.4%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <Link className="font-medium text-primary" href="#" onClick={(e) => e.preventDefault()}>
              View all
            </Link>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
          <div className="flex items-center gap-4 bg-white p-4">
            <div className="flex items-center justify-center rounded-lg bg-primary p-4 text-xl text-white">
              <i className="fa-solid fa-arrow-pointer"></i>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Avg. Click Rate</p>
              <div className="flex items-end gap-3">
                <p className="text-2xl font-semibold">24.57%</p>
                <div className="mb-0.5 flex items-center gap-1 text-red-600">
                  <i className="fa-solid fa-arrow-down"></i>
                  <p className="font-semibold">3.2%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <Link className="font-medium text-primary" href="#" onClick={(e) => e.preventDefault()}>
              View all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsStats;
