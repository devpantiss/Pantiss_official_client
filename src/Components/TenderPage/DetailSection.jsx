import React from "react";

const notifications = [
  "Pantiss Procurement Guidelines and Implementation Procedures (3rd Revision)",
  "Supplier registration option is now available",
  "Inauguration ceremony of Pantiss Portal",
  "Pantiss Portal will be launched soon",
  "Important updates for vendors and suppliers",
];

const DetailSection = () => {
  return (
    <div className="flex flex-col lg:h-[75vh] h-full lg:flex-row gap-4 px-6 py-8">
      {/* Left Section */}
      <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Dear User,</h2>
        <p className="mb-4">
          Welcome to the Pantiss portal! You can access the platform at the
          following address:
        </p>

        <p className="font-semibold mb-2">Tender Application Process:</p>
        <p className="mb-4">
          Please go through the tender listing below, then send your proposal
          to the company headquarters at the following address:
        </p>
        <p className="mb-4">
          <strong>Headquarters Address:</strong>
          <br />
          Plot No 1215/1500, Khandagiri Bari, Bank of India Lane, Bhubaneswar,
          Odisha, 751030
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Browse through the available tenders in the listing below.</li>
          <li>Prepare your proposal based on the tender details.</li>
          <li>Mail your proposal to the above address.</li>
        </ul>

        <p className="mb-4">
          Note: You cannot complete any tender application without submitting
          your proposal via mail.
        </p>

        <p className="font-semibold mb-2">
          For further details or assistance, please contact our support team:
        </p>
        <ul className="list-none space-y-2">
          <li>Cell: 06743588734</li>
          <li>Email: info@pantiss.org</li>
        </ul>
      </div>

      {/* Right Section - News & Events */}
      <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">News & Events</h2>
          <a href="#" className="text-red-500 underline">
            view all
          </a>
        </div>

        {/* Marquee Wrapper */}
        <div className="h-[650px] overflow-hidden relative">
          <div className="marquee">
            {notifications.map((item, i) => (
              <div
                key={i}
                className="text-gray-700 py-2 text-sm bg-gray-100 rounded-md px-4 mb-2"
              >
                {item}
              </div>
            ))}
            {/* Duplicate for infinite scrolling effect */}
            {notifications.map((item, i) => (
              <div
                key={`duplicate-${i}`}
                className="text-gray-700 py-2 text-sm bg-gray-100 rounded-md px-4 mb-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes verticalMarquee {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }
          .marquee {
            display: flex;
            flex-direction: column;
            animation: verticalMarquee 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default DetailSection;
