import React from "react";

const Row6 = () => {
  const data = [
    {
      pdf: "10022",
      year: 2023,
      title:
        "Innovation Package and Scaling Readiness assessment for strip cropping in an improved intercropping strategy for smallholder farmers.",
      initiatives: "Diversification in East and Southern Africa",
      centers: "CIMMYT",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11180",
      year: 2023,
      title:
        "Innovation Package and Scaling Readiness assessment for mixed farming systems to improve agricultural productivity.",
      initiatives: "Mixed Farming Systems",
      centers: "CIMMYT, IWMI",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11268",
      year: 2024,
      title:
        "Innovation Package and Scaling Readiness assessment for inclusive multi-stakeholder knowledge-sharing platforms in mixed farming systems.",
      initiatives: "Mixed Farming Systems",
      centers: "CIMMYT, IWMI",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11345",
      year: 2022,
      title: "Assessment for enhancing sustainable irrigation techniques.",
      initiatives: "Water Management Systems",
      centers: "IWMI",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11456",
      year: 2021,
      title: "Improved farming strategies for drought-prone regions.",
      initiatives: "Resilient Farming Systems",
      centers: "CIMMYT",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11567",
      year: 2023,
      title: "Advancing pest control strategies for smallholder farmers.",
      initiatives: "Integrated Pest Management",
      centers: "CIMMYT",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11678",
      year: 2024,
      title: "Climate-smart agricultural solutions for tropical regions.",
      initiatives: "Climate-Smart Agriculture",
      centers: "CIMMYT, IWMI",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11789",
      year: 2023,
      title: "Enhancing soil fertility through organic solutions.",
      initiatives: "Soil Health Improvement",
      centers: "IWMI",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11890",
      year: 2022,
      title: "Building resilient agricultural value chains.",
      initiatives: "Value Chain Development",
      centers: "CIMMYT",
      category: "Innovation Package",
      evidence: "Available",
    },
    {
      pdf: "11901",
      year: 2023,
      title: "Utilizing AI for optimizing crop yields.",
      initiatives: "Digital Agriculture",
      centers: "IWMI",
      category: "Innovation Package",
      evidence: "Available",
    },
  ];
  const tableHead = (
    <thead>
      <tr className="bg-gray-800">
        <th className="border border-red-600 p-2 w-[150px] text-center">PDF</th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Year
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-left">Title</th>
        <th className="border border-red-600 p-2 w-[150px] text-left">
          Contributing Initiatives
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-left">
          Contributing Centers
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Indicator Category
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Evidence
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-xl font-bold border-b-2 border-red-600 mb-4">Result Details</h2>
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
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "0" : ""}`}
                >
                  <td className="border border-red-600 p-2 w-[150px] text-center text-blue-500 underline cursor-pointer">
                    {item.pdf}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-center">
                    {item.year}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-left">
                    {item.title}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-left">
                    {item.initiatives}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-left">
                    {item.centers}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-center">
                    {item.category}
                  </td>
                  <td className="border border-red-600 p-2 w-[150px] text-center">
                    {item.evidence}
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

export default Row6;
