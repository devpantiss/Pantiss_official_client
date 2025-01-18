import React from "react";

const Row5 = () => {
  const data = [
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story1",
      year: 2023,
      keyResultStory:
        "Improved parboiling technology increases women's income and nutrition",
      countries: "Benin",
      resultPDF: "https://example.com/pdf1",
      resultCode: 5122,
      resultTitle:
        "The adoption and impacts of improved parboiling technology for rice value chain upgrading.",
      indicatorCategory: "Knowledge product",
      contributingInitiatives:
        "West and Central African Food Systems Transformation",
    },
    {
      link: "https://example.com/story2",
      year: 2022,
      keyResultStory:
        "Cultural transformation in CGIAR and national programs drives breeding networks.",
      countries: "Global",
      resultPDF: "https://example.com/pdf2",
      resultCode: 3438,
      resultTitle:
        "Transformation in CGIAR and NARES breeding culture drives networks towards National SDG 2030 goals.",
      indicatorCategory: "Capacity change",
      contributingInitiatives:
        "Accelerated Breeding, Market Intelligence, Breeding Resources",
    },
    {
      link: "https://example.com/story3",
      year: 2023,
      keyResultStory: "Transforming breeding partnerships for greater impact",
      countries: "India",
      resultPDF: "https://example.com/pdf3",
      resultCode: 1015,
      resultTitle:
        "High-level engagement for co-creation of collaborative breeding networks.",
      indicatorCategory: "Innovation development",
      contributingInitiatives: "Accelerated Breeding, Seed Equal",
    },
  ];

  const tableHead = (
    <thead>
      <tr className="bg-gray-800">
        <th className="border border-red-600 p-2 w-[200px] text-left">
          Link to Result Story
        </th>
        <th className="border border-red-600 p-2 w-[100px] text-center">
          Year
        </th>
        <th className="border border-red-600 p-2 w-[300px] text-left">
          Key Result Story
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Countries
        </th>
        <th className="border border-red-600 p-2 w-[150px] text-center">
          Result PDF
        </th>
        <th className="border border-red-600 p-2 w-[100px] text-center">
          Result Code
        </th>
        <th className="border border-red-600 p-2 w-[400px] text-left">
          Result Title
        </th>
        <th className="border border-red-600 p-2 w-[200px] text-center">
          Indicator Category
        </th>
        <th className="border border-red-600 p-2 w-[300px] text-left">
          Contributing Initiatives
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-3xl font-bold border-b-2 border-red-600 mb-4">
        Key Result Story Details
      </h2>
      <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">
        Export Data
      </button>
      <div className="overflow-x-auto overflow-y-auto max-h-96 max-w-full border border-red-600">
        <table className="min-w-full bg-transparent text-sm">
          {tableHead}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}`}
              >
                <td className="border border-red-600 p-2 text-left">
                  <a
                    href={item.link}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Story
                  </a>
                </td>
                <td className="border border-red-600 p-2 text-center">
                  {item.year}
                </td>
                <td className="border border-red-600 p-2 text-left">
                  {item.keyResultStory}
                </td>
                <td className="border border-red-600 p-2 text-center">
                  {item.countries}
                </td>
                <td className="border border-red-600 p-2 text-center">
                  <a
                    href={item.resultPDF}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </td>
                <td className="border border-red-600 p-2 text-center">
                  {item.resultCode}
                </td>
                <td className="border border-red-600 p-2 text-left">
                  {item.resultTitle}
                </td>
                <td className="border border-red-600 p-2 text-center">
                  {item.indicatorCategory}
                </td>
                <td className="border border-red-600 p-2 text-left">
                  {item.contributingInitiatives}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Row5;
