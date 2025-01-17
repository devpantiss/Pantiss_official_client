import React from 'react';

const Cards = () => {
  const publications = [
    {
      title: 'How to Use National MPIs as a Policy Tool: From Metrics to Policy',
      link: '#',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/content_card_453_x_256_/public/2025-01/undp-ophi-how-to-use-national-mpis-as-a-policy-tool-from-metric-to-policy.png?h=6943a000&itok=41vFry3J',
    },
    {
      title: 'UNDP–FAO Climate Action Review Tool',
      link: '#',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/content_card_453_x_256_/public/2025-01/undp-fao-climate-action-review-tool-image.png?h=7ffc92d9&itok=si9_DZcK',
    },
    {
      title: 'Addressing Mpox (Monkeypox): Effective Science and Rights-Based Responses',
      link: '#',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/content_card_453_x_256_/public/2024-11/undp-usc-addressing-monkeypox-effective-science-and-rights-based-responses-ii_1.png?h=40c9f4d4&itok=f3h-vAzM',
    },
    {
      title: 'Advancing Zero-Emission Trucks and Green Ports',
      link: '#',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/content_card_453_x_256_/public/2024-11/undp-advancing-zero-emission-trucks-and-green-ports-image.png?h=a3fb2f57&itok=O5wmFhOa',
    },
    {
      title: 'Advancing the SDG Push with Equitable Low-Carbon Pathways',
      link: '#',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/content_card_453_x_256_/public/2024-11/undp-university-of-denver-advancing-the-sdg-push-with-equitable-low-carbon-pathways-image.png?h=1c854a01&itok=XIp1_nKa',
    },
    {
      title: 'Turning the Tide: From Climate Crisis to Climate Action',
      link: '#',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/content_card_453_x_256_/public/2024-07/undp-first-fig-policy-symposium-image.png?h=f77a8d10&itok=oE326OgG',
    },
  ];

  return (
    <div className="bg-white px-6 py-8 mt-4">
      <div className="container mx-auto">
        {/* Filters and Sorting Section */}
        <div className="flex justify-between mb-6">
          <div className="flex space-x-4">
            <button className="border border-black px-4 py-2">Topics</button>
            <button className="border border-black px-4 py-2">Sustainable Development Goals</button>
            <button className="border border-black px-4 py-2">Regions and Countries</button>
          </div>
          <div>
            <select className="border border-black px-4 py-2">
              <option>Most Recent</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="border group overflow-hidden transition-transform duration-300"
            >
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{pub.title}</h3>
                <a
                  href={pub.link}
                  className="text-red-600 font-medium flex items-center space-x-2 group-hover:space-x-4 transition-all duration-300"
                >
                  <span>Read More</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
