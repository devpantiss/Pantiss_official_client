import React from "react";

const TenderSection = () => {
  const data = [
    {
      title: (
        <div className="text-center lg:text-left">
          LIVE <br /> TENDER
        </div>
      ),
      total: 1,
      color: "bg-orange-500",
      items: [
        { name: "Koderma", count: 1 },
        // { name: "Bokaro", count: 1 },
      ],
    },
    {
      title: (
        <div className="text-center lg:text-left">
          CLOSING <br /> TODAY
        </div>
      ),
      total: 0,
      color: "bg-purple-500",
      items: [
        { name: "Head Office", count: 0 },
        // { name: "HCMP - Cox's Bazar", count: 0 },
      ],
    },
    {
      title: (
        <div className="text-center lg:text-left">
          NEW TENDER <br /> NOTICE
        </div>
      ),
      total: 0,
      color: "bg-blue-500",
      items: [
        { name: "Head Office", count: 0 },
        // { name: "H", count: 0 },
      ],
    },
  ];

  return (
    <div className="flex space-x-4 p-4">
      {data.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col p-4 rounded-lg text-white ${card.color} w-1/3`}
        >
          <div className="flex justify-center lg:justify-between flex-col lg:flex-row items-center">
            <h2 className="font-bold text-lg uppercase">{card.title}</h2>
            <span className="text-3xl font-bold">{card.total}</span>
          </div>
          <div className="mt-4 space-y-2">
            {card.items.map((item, i) => (
              <div
                key={i}
                className={`flex justify-between p-2 rounded-lg ${
                  i % 2 === 0 ? "bg-opacity-50" : "bg-opacity-75"
                }`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <span>{item.name}</span>
                <span>{item.count} ›</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TenderSection;
