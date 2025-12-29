import React from "react";
import Heading from "../../../../Common/Heading";

const leadershipTeam = [
  {
    img: "/assets/teams/rahul.png",
    name: "Mr. Rahul Nayak",
  },
  {
    img: "/assets/teams/jabis.png",
    name: "Mr. Jabis Ranjan Sahu",
  },
  {
    img: "/assets/teams/tushar.png",
    name: "Mr. Tushar Ranjan Ojha",
  },
];

const Leadership = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <Heading text="OUR TEAM" color="text-black" bgColor="bg-red-600" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {leadershipTeam.map((leader, index) => (
            <div
              key={index}
              className="bg-red-600 group hover:ring-1 hover:ring-red-600 shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-xs mx-auto"
            >
              {/* Image Section */}
              <div className="h-[400px] w-full overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Section */}
              <div className="p-3 group-hover:bg-white group-hover:ring-1 group-hover:ring-red-600 bg-red-600">
                <h3 className="font-semibold text-base text-center group-hover:text-red-600 text-white">
                  {leader.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
