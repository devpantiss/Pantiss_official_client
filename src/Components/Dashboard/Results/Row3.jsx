import React from "react";
import Map from "./Map";

const Row3 = () => {
  const locations = [
    {
      name: "Korba, Chhattisgarh",
      results: 12,
    },
    {
      name: "Dhanbad & Bokaro, Jharkhand",
      results: 15,
    },
    {
      name: "Asansol & Durgapur, West Bengal",
      results: 10,
    },
    {
      name: "Joda & Barbil, Keonjhar, Odisha",
      results: 20,
    },
    {
      name: "Talcher, Angul, Odisha",
      results: 18,
    },
    {
      name: "Koida & Bonai, Sundargarh, Odisha",
      results: 8,
    },
    {
      name: "Bisamcuttack, Rayagada, Odisha",
      results: 5,
    },
    {
      name: "Kolar Gold mines, Karnataka",
      results: 22,
    },
    {
      name: "Kodarma, Jharkhand",
      results: 14,
    },
    {
      name: "Kalahandi, Odisha",
      results: 9,
    },
    {
      name: "Jajpur, Odisha",
      results: 17,
    },
    {
      name: "Cuttack, Odisha",
      results: 11,
    },
    {
      name: "Khordha, Odisha",
      results: 7,
    },
    {
      name: "Nayagarh, Odisha",
      results: 3,
    },
    {
      name: "Kendrapara, Odisha",
      results: 6,
    },
    {
      name: "Jharsuguda, Odisha",
      results: 13,
    },
    {
      name: "Sundargarh, Odisha",
      results: 16,
    },
    {
      name: "Nuapada, Odisha",
      results: 4,
    },
    {
      name: "Kendujhar, Odisha",
      results: 19,
    },
    {
      name: "Chaiwasa, Jharkhand",
      results: 10,
    },
    {
      name: "Nagaland",
      results: 2,
    },
    {
      name: "Neyveli, Tamil Nadu",
      results: 12,
    },
    {
      name: "Ratnagiri, Maharashtra",
      results: 9,
    },
    {
      name: "Chandrapur, Maharashtra",
      results: 15,
    },
    {
      name: "Singrauli, Madhya Pradesh",
      results: 18,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-black p-6 gap-6">
      {/* Left Section */}
      <div className="flex flex-col bg-transparent ring-2 ring-red-600 text-white rounded shadow p-4 w-full md:w-1/4">
        <h2 className="font-bold text-lg border-b-2 border-red-600 mb-4">Outputs</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Knowledge product</span>
            <span>3,200</span>
          </div>
          <div className="h-2 bg-yellow-300 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Capacity sharing for dev.</span>
            <span>1,200</span>
          </div>
          <div className="h-2 bg-yellow-400 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Other output</span>
            <span>800</span>
          </div>
          <div className="h-2 bg-yellow-500 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Innovation development</span>
            <span>600</span>
          </div>
          <div className="h-2 bg-yellow-600 w-full rounded"></div>
        </div>

        <h2 className="font-bold text-lg mt-6 border-b-2 border-red-600 mb-4">Outcomes</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Innovation use</span>
            <span>150</span>
          </div>
          <div className="h-2 bg-orange-400 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Policy change</span>
            <span>80</span>
          </div>
          <div className="h-2 bg-orange-500 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Other outcome</span>
            <span>100</span>
          </div>
          <div className="h-2 bg-orange-600 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Capacity change</span>
            <span>10</span>
          </div>
          <div className="h-2 bg-orange-700 w-full rounded"></div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-1 bg-transparent ring-2 ring-red-600 rounded shadow p-4">
        <h2 className="font-bold text-lg border-b-2 border-red-600 text-white mb-4">
          Search by geographic location
        </h2>
        <div className="relative w-full h-80">
          <Map />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded font-bold">
            National
          </button>
          {/* <button className="px-4 py-2 bg-gray-300 rounded font-bold">
            Sub-national
          </button> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col bg-transparent text-white ring-2 ring-red-600 rounded shadow p-4 w-full md:w-1/4">
        <h2 className="font-bold text-lg border-b-2 border-red-600 mb-4">Total Focus Results</h2>
        <div className="text-3xl font-bold mb-2">295</div>
        <h2 className="font-bold text-lg border-b-2 border-red-600 mb-4">Results by region</h2>
        <div className="overflow-y-auto h-96 space-y-2">
          {locations.map((location, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <span>{location.name}</span>
                <span>{location.results}</span>
              </div>
              <div
                className={`h-2 rounded ${
                  location.results > 15
                    ? "bg-orange-800"
                    : location.results > 10
                    ? "bg-orange-600"
                    : location.results > 5
                    ? "bg-orange-400"
                    : "bg-gray-400"
                } w-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row3;
