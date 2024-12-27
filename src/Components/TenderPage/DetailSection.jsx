import React from "react";

const DetailSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-6 py-8">
      {/* Left Section */}
      <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Dear User,</h2>
        <p className="mb-4">
          Welcome to the Pantiss E-Tender portal! You can access the platform at
          the following address:
        </p>

        <p className="font-semibold mb-2">E-Tender Link:</p>
        <a
          href="http://pantiss.com/tenders"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline mb-4 block"
        >
          pantiss.com/tenders{" "}
        </a>

        <p className="font-semibold mb-2">E-Tender Login:</p>
        <p className="mb-4">
          Please complete your registration to proceed with the e-tendering
          process.
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            Fill in the organization name and relevant details during
            registration.
          </li>
          <li>
            After successful registration, you will receive a User ID and
            password via the registered mobile number. Use the default password
            to log in and change your password immediately for security
            purposes.
          </li>
        </ul>

        <p className="mb-4">
          You cannot complete any tender without logging in.
        </p>

        <p className="font-semibold mb-2">
          For further details or assistance, please contact our support team:
        </p>
        <ul className="list-none space-y-2">
          <li>Cell: 06743588734</li>
          <li>Email: info@pantiss.org</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">News & Events</h2>
          <a href="#" className="text-red-500 underline">
            view all
          </a>
        </div>

        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            Pantiss Procurement Guidelines and Implementation Procedures (3rd
            Revision)
          </li>
          <li>Supplier registration option is now available in E-Tender</li>
          <li>Inauguration ceremony of Pantiss E-Tender software</li>
          <li>Pantiss E-Tender will be launched</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailSection;
