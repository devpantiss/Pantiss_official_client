import React from "react";
import { FaUsers, FaMicrophone, FaListAlt, FaBuilding, FaUserFriends } from "react-icons/fa";

const Impact = () => {
  const stats = [
    {
      icon: <FaUsers className="text-white text-3xl" />,
      value: "2300+",
      label: "Delegates",
      bgColor: "bg-red-600",
    },
    {
      icon: <FaMicrophone className="text-white text-3xl" />,
      value: "180",
      label: "Speakers",
      bgColor: "bg-red-600",
    },
    {
      icon: <FaListAlt className="text-white text-3xl" />,
      value: "45+",
      label: "Sessions",
      bgColor: "bg-red-600",
    },
    {
      icon: <FaBuilding className="text-white text-3xl" />,
      value: "1500+",
      label: "Organisations",
      bgColor: "bg-red-600",
    },
    {
      icon: <FaUserFriends className="text-white text-3xl" />,
      value: "100+",
      label: "Exhibitors",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <section className="bg-red-600 py-8 px-3">
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-red-600 w-full ring-2 ring-white max-w-6xl shadow-md rounded-lg p-6 grid grid-cols-3 lg:grid-cols-5 justify-center gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div
                className={`h-16 w-16 lg:h-24 lg:w-24 flex items-center justify-center  ring-2 ring-white rounded-full ${stat.bgColor}`}
              >
                {stat.icon}
              </div>
              <h3 className="text-xl lg:text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
