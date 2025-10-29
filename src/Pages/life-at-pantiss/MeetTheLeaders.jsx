import React from "react";

const MeetTheLeaders = () => {
  const leaders = [
    {
      name: "Mr. Stalin Nayak",
      role: "Founder & CEO",
      description:
        "A visionary leader driving organizational growth with innovation, strategic direction, and a strong mission focus to uplift communities through sustainable development.",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761685978/stalinsir_l53ura.jpg",
    },
    {
      name: "Dr. Sanjaya Pradhan",
      role: "Principal Advisor (Risk Management & Global Representation)",
      description:
        "Expertly oversees organizational risk frameworks and global partnerships, ensuring credibility, sustainability, and strategic representation at international platforms.",
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619304/sanjay_sir_2_bulab3.jpg",
    },
    {
      name: "Mr. Deepan Digal",
      role: "Chief Business Officer",
      description:
        "Leads business strategy and expansion, fostering collaborations, operational excellence, and innovative solutions for scalable impact.",
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618716/deepan_2_pliefj.jpg",
    },
    {
      name: "Mrs. Indumati Nanda",
      role: "Chief Strategy Officer",
      description:
        "Drives strategic planning, organizational development, and long-term growth by aligning mission goals with impactful community-centered initiatives.",
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618509/indumaam_2_ilh3gq.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800 py-10">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="text-sm text-gray-600">
          <ul className="flex space-x-2">
            <li>
              <a
                href="/careers"
                className="text-red-600 font-semibold hover:underline focus:outline-none"
              >
                Careers
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">Life at Pantiss</li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">Meet The Leaders </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-pantiss-primary">
          Meet the Leaders of the Pantiss Foundation
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Get inspired by the stories and journeys of our dedicated leaders who
          drive meaningful impact in communities across the globe.
        </p>
        <div className="space-y-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } bg-white shadow-lg rounded-lg overflow-hidden`}
            >
              {/* Image */}
              <div className="lg:w-1/3">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-[350px] object-cover lg:h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:w-2/3 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-pantiss-primary mb-2">
                  {leader.name}
                </h2>
                <h3 className="text-md font-medium text-gray-500 mb-4">
                  {leader.role}
                </h3>
                <p className="text-gray-700">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheLeaders;
