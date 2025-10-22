import React from "react";

// Example data for bar graphs
const partnerTypeData = [
  { label: "Pantiss", value: 2845 },
  { label: "NSDC", value: 2181 },
  { label: "Tata Power", value: 1330 },
  { label: "ASCI", value: 608 },
  { label: "RCPSDC", value: 527 },
  { label: "SCMS", value: 434 },
  { label: "Tata Steel", value: 322 },
  { label: "Adani", value: 311 },
  { label: "UNIDO", value: 311 },
  { label: "MCL", value: 311 },
  { label: "Ministry of Coal", value: 311 },
  { label: "Ministry of Mines", value: 311 },
];

const partnerDeliveryData = [
  { label: "Innovation", value: 5270 },
  { label: "Scaling", value: 2140 },
  { label: "Demand", value: 1741 },
  { label: "Other", value: 348 },
];

const sdgData = [
    { id: 1, title: "Goal 1: No Poverty", value: 6203, img: "https://reporting.cgiar.org/assets/sdg/1.png" },
    { id: 2, title: "Goal 2: Zero Hunger", value: 6698, img: "https://reporting.cgiar.org/assets/sdg/2.png" },
    { id: 3, title: "Goal 3: Good Health and Well-Being for People", value: 1102, img: "https://reporting.cgiar.org/assets/sdg/3.png" },
    { id: 4, title: "Goal 4: Quality Education", value: 729, img: "https://reporting.cgiar.org/assets/sdg/4.png" },
    { id: 5, title: "Goal 5: Gender Equality", value: 5434, img: "https://reporting.cgiar.org/assets/sdg/5.png" },
    { id: 6, title: "Goal 6: Clean Water and Sanitation", value: 4321, img: "https://reporting.cgiar.org/assets/sdg/6.png" },
    { id: 7, title: "Goal 7: Affordable and Clean Energy", value: 321, img: "https://reporting.cgiar.org/assets/sdg/7.png" },
    { id: 8, title: "Goal 8: Decent Work and Economic Growth", value: 321, img: "https://reporting.cgiar.org/assets/sdg/8.png" },
    { id: 9, title: "Goal 9: Industry, Innovation, and Infrastructure", value: 321, img: "https://reporting.cgiar.org/assets/sdg/9.png" },
    { id: 10, title: "Goal 10: Reducing Inequalities", value: 321, img: "https://reporting.cgiar.org/assets/sdg/10.png" },
    { id: 11, title: "Goal 11: Sustainable Cities and Communities", value: 321, img: "https://reporting.cgiar.org/assets/sdg/11.png" },
    { id: 12, title: "Goal 12: Responsible Consumption and Production", value: 321, img: "https://reporting.cgiar.org/assets/sdg/12.png" },
    { id: 13, title: "Goal 13: Climate Action", value: 321, img: "https://reporting.cgiar.org/assets/sdg/13.png" },
    { id: 14, title: "Goal 14: Life Below Water", value: 321, img: "https://reporting.cgiar.org/assets/sdg/14.png" },
    { id: 15, title: "Goal 15: Life on Land", value: 321, img: "https://reporting.cgiar.org/assets/sdg/15.png" },
    { id: 16, title: "Goal 16: Peace, Justice and Strong Institutions", value: 321, img: "https://reporting.cgiar.org/assets/sdg/16.png" },
    { id: 17, title: "Goal 17: Partnerships for the Goals", value: 321, img: "https://reporting.cgiar.org/assets/sdg/17.png" },
  ];

const Row2 = () => {
  return (
    <div className="p-6 bg-transparent text-white grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* SDG Contributions */}
      <div className="col-span-1 ring-2 ring-red-600 p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-600">SDG Contributions</h2>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800 sticky top-0 z-10">
              <tr>
                <th className="py-2 px-4 text-left">SDG</th>
                <th className="py-2 px-4 text-right">Results</th>
              </tr>
            </thead>
            <tbody>
              {sdgData.map((sdg) => (
                <tr key={sdg.id} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="flex items-center gap-4 py-2 px-4">
                    <img src={sdg.img} alt={sdg.title} className="w-10 h-10 rounded" />
                    <span>{sdg.title}</span>
                  </td>
                  <td className="py-2 px-4 text-right">{sdg.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results by Partner Type */}
      <div className="col-span-1 ring-2 ring-red-600 p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-600">Results by Partner Type</h2>
        <div className="space-y-2">
          {partnerTypeData.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1/2">{item.label}</span>
              <div className="flex-1 bg-gray-700 h-6 relative">
                <div
                  className="bg-blue-600 h-6"
                  style={{ width: `${(item.value / 2845) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Results by Partner Delivery Type */}
      <div className="col-span-1 ring-2 ring-red-600 p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-600">Results by Partner Delivery Type</h2>
        <div className="space-y-2">
          {partnerDeliveryData.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1/2">{item.label}</span>
              <div className="flex-1 bg-gray-700 h-6 relative">
                <div
                  className="bg-green-600 h-6"
                  style={{ width: `${(item.value / 5270) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row2;
