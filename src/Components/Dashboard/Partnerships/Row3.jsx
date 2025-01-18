import React from "react";

const Row3 = () => {
  const data = [
    {
      partnerName: "UNICEF",
      partnerType: "International Organization",
      numberOfResults: 25,
      resultLevels: "Global",
      deliveryType: "Scaling",
    },
    {
      partnerName: "NSDC",
      partnerType: "Government",
      numberOfResults: 18,
      resultLevels: "National",
      deliveryType: "Innovation",
    },
    {
      partnerName: "Tata Power",
      partnerType: "Private Sector",
      numberOfResults: 12,
      resultLevels: "Regional",
      deliveryType: "Demand",
    },
    {
      partnerName: "ASCI",
      partnerType: "Research Organization",
      numberOfResults: 15,
      resultLevels: "National",
      deliveryType: "Innovation",
    },
    {
      partnerName: "RCPSDC",
      partnerType: "NGO",
      numberOfResults: 10,
      resultLevels: "Local",
      deliveryType: "Scaling",
    },
    {
      partnerName: "SCMS",
      partnerType: "NGO",
      numberOfResults: 14,
      resultLevels: "Regional",
      deliveryType: "Demand",
    },
    {
      partnerName: "Tata Steel",
      partnerType: "Private Sector",
      numberOfResults: 22,
      resultLevels: "Global",
      deliveryType: "Innovation",
    },
    {
      partnerName: "Adani",
      partnerType: "Private Sector",
      numberOfResults: 9,
      resultLevels: "Regional",
      deliveryType: "Scaling",
    },
    {
      partnerName: "MCL",
      partnerType: "Government",
      numberOfResults: 8,
      resultLevels: "Local",
      deliveryType: "Innovation",
    },
    {
      partnerName: "UNIDO",
      partnerType: "International Organization",
      numberOfResults: 30,
      resultLevels: "Global",
      deliveryType: "Demand",
    },
    {
      partnerName: "Ministry of Coal",
      partnerType: "Government",
      numberOfResults: 20,
      resultLevels: "National",
      deliveryType: "Scaling",
    },
    {
      partnerName: "Ministry of Mines",
      partnerType: "Government",
      numberOfResults: 16,
      resultLevels: "National",
      deliveryType: "Innovation",
    },
  ];

  const tableHead = (
    <thead>
      <tr className="bg-gray-800">
        <th className="border border-red-600 p-2 w-[150px] text-left">
          Partner Name
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-left">
          Partner Type
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-left">
          Number of Results
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Result Levels
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Delivery Type
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-3xl font-bold border-b-2 border-red-600 mb-4">
        Result Details
      </h2>
      <p className="text-sm text-gray-200 mb-2">
        For evidence, only links that lead to CGSpace are included. If you would
        like to view additional evidence that is unavailable here, please
        contact <span className="text-blue-500">info@pantiss.org</span>.
      </p>
      <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">
        Export data
      </button>
      <div className="overflow-hidden border border-red-600">
        <table className="min-w-full bg-transparent text-sm">{tableHead}</table>
        <div className="max-h-96 overflow-y-auto">
          <table className="min-w-full bg-transparent text-sm">
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "0" : ""}`}>
                  <td className="border border-red-600 p-2 w-[150px] text-left">
                    {item.partnerName}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-left">
                    {item.partnerType}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-left">
                    {item.numberOfResults}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-center">
                    {item.resultLevels}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-center">
                    {item.deliveryType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Row3;
