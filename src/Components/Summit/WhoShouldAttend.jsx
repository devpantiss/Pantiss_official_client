import React from "react";
import {
  FaUserTie,
  FaHandsHelping,
  FaBuilding,
  FaLightbulb,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const WhoShouldAttend = () => {
  const attendees = [
    {
      title: "Policy Makers and Government Officials",
      icon: <FaUserTie />,
    },
    {
      title: "Non-Governmental Organizations (NGOs)",
      icon: <FaHandsHelping />,
    },
    {
      title: "CSR Heads and Sustainability Managers",
      icon: <FaBuilding />,
    },
    {
      title: "Social Entrepreneurs",
      icon: <FaLightbulb />,
    },
    {
      title: "Academic and Research Professionals",
      icon: <FaBook />,
    },
    {
      title: "Community Leaders and Activists",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="bg-red-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10">
          Who Should Attend the Mining Villages Development Summit 2024?
        </h1>
        <p className="text-center mb-10">
          The Mining Villages Development Summit 2024 is a premier event
          tailored for individuals and organizations dedicated to the
          sustainable development of mining-affected areas. Here's a look at who
          should consider attending this transformative summit:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className="bg-red-600 ring-2 ring-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="bg-white text-red-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div className="text-6xl flex justify-center my-4">
                  {attendee.icon}
                </div>
                <h3 className="ml-4 text-xl text-center font-semibold">{attendee.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
