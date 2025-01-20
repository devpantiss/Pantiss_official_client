import React from "react";

const CardsSection = () => {
  const cards = [
    {
      image:
        "https://admin.concern.net/sites/default/files/styles/560x290/public/media/images/2022-05/BurkinaFaso_2021_RS58166__lpr.webp?changed=2022-05-23T11:00:20+00:00",
      title: "Community Meeting",
      description:
        "Engaging with communities to identify challenges and solutions.",
    },
    {
      image:
        "https://admin.concern.net/sites/default/files/styles/560x290/public/media/images/2022-05/BurkinaFaso_2021_RS58119__lpr.webp?changed=2022-05-23T10:58:37+00:00",
      title: "Mother and Children",
      description: "Providing health and nutritional support to families.",
    },
    {
      image:
        "https://admin.concern.net/sites/default/files/styles/1120x630/public/media/images/2024-06/concern-rs58180-burkina-faso-idp.webp?changed=2024-06-24T14:41:15+00:00",
      title: "Group Session",
      description: "Promoting awareness and teamwork for sustainable growth.",
    },
    {
      image:
        "https://admin.concern.net/sites/default/files/styles/560x290/public/media/images/2024-07/RS84336__lpr_0.webp?changed=2024-07-24T14:30:10+00:00",
      title: "Food Distribution",
      description: "Ensuring essential supplies reach those in need.",
    },
    {
      image:
        "https://admin.concern.net/sites/default/files/styles/180x110/public/media/images/2024-07/RS84353__lpr.jpg?changed=2024-08-12T14:56:37+00:00",
      title: "Assistance Desk",
      description: "Providing support and guidance to the local population.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
