import React from "react";

const Row4 = () => {
  const contributingPartners = [
    { name: "Wageningen University and Research Centre", results: 355 },
    {
      name: "Kenya Agricultural and Livestock Research Organization",
      results: 224,
    },
    {
      name: "National Agricultural Research Organisation (Uganda)",
      results: 189,
    },
    {
      name: "Food and Agriculture Organization of the United Nations",
      results: 171,
    },
    { name: "Ethiopian Institute of Agricultural Research", results: 158 },
    { name: "Indian Council of Agricultural Research", results: 150 },
    {
      name: "Centre de coopération internationale en recherche agronomique",
      results: 141,
    },
    { name: "Zambia Agriculture Research Institute", results: 131 },
    { name: "Cornell University", results: 111 },
    {
      name: "Ministry of Agriculture and Rural Development (Vietnam)",
      results: 110,
    },
  ];

  const partnerTypes = [
    { name: "Research organizations and universities National", results: 2845 },
    {
      name: "Research organizations and universities International",
      results: 2181,
    },
    { name: "Government (National)", results: 1330 },
    { name: "Private company (other than financial)", results: 608 },
    { name: "NGO International (General)", results: 433 },
    { name: "Organization (other than financial or research)", results: 434 },
    { name: "NGO National (General)", results: 322 },
    { name: "Other", results: 311 },
  ];

  const maxResult = Math.max(
    ...contributingPartners.map((p) => p.results),
    ...partnerTypes.map((p) => p.results)
  );

  return (
    <div className="p-6 bg-black text-white">
      <div className="text-xl font-bold border-b-2 border-red-600 mb-4">
        Contributors
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Results by contributing partner */}
        <div className="w-full lg:w-1/2 bg-transparent ring-2 ring-red-600 shadow rounded p-4">
          <h3 className="text-lg font-bold border-b-2 border-red-600 mb-4">
            Results by contributing partner
          </h3>
          <div className="overflow-y-auto h-96">
            {contributingPartners.map((partner, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm">
                  <span>{partner.name}</span>
                  <span>{partner.results}</span>
                </div>
                <div
                  className="bg-orange-600 h-2 rounded"
                  style={{ width: `${(partner.results / maxResult) * 100}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Results by partner type */}
        <div className="w-full lg:w-1/2 bg-transparent ring-2 ring-red-600 shadow rounded p-4">
          <h3 className="text-lg font-bold border-b-2 border-red-600 mb-4">
            Results by partner type
          </h3>
          <div className="overflow-y-auto h-96">
            {partnerTypes.map((type, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm">
                  <span>{type.name}</span>
                  <span>{type.results}</span>
                </div>
                <div
                  className="bg-orange-600 h-2 rounded"
                  style={{ width: `${(type.results / maxResult) * 100}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row4;
