const DescriptionList = () => {
  return (
    <div className="bg-white p-4 lg:p-8">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium text-gray-900">Full name</p>
            <p className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</p>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium text-gray-900">Application for</p>
            <p className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</p>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium text-gray-900">Email address</p>
            <p className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </p>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium text-gray-900">Salary expectation</p>
            <p className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">$120,000</p>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium text-gray-900">About</p>
            <p className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
              consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit
              nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </p>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <p className="text-sm font-medium text-gray-900">Attachments</p>
            <div className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm ">
                  <div className="flex w-0 flex-1 items-center">
                    <i className="fa-solid fa-paperclip text-gray-400"></i>
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-primary hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm ">
                  <div className="flex w-0 flex-1 items-center">
                    <i className="fa-solid fa-paperclip text-gray-400"></i>
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-primary hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DescriptionList;
