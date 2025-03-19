import React from "react";
import Heading from "../../../../Common/Heading";

const leadershipTeam = [
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738229838/vecteezy_hand-drawnman-avatar-profile-icon-for-social-networks__n8j5bp.jpg",
    name: "John Doe",
    designation: "CEO, Pantiss Foundation",
  },
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735390293/IMG_20241107_151423707_HDR_rj7i83.jpg",
    name: "Jane Smith",
    designation: "COO, Pantiss Foundation",
  },
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738229838/vecteezy_hand-drawnman-avatar-profile-icon-for-social-networks__n8j5bp.jpg",
    name: "Michael Johnson",
    designation: "Head of Operations",
  },
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735390293/IMG_20241107_151423707_HDR_rj7i83.jpg",
    name: "Emily Davis",
    designation: "Director, Community Engagement",
  },
];

const LeadershipNeyveli = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <Heading
          text="OUR LEADERSHIP"
          color="text-black"
          bgColor="bg-red-600"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => (
            <div
              key={index}
              className="bg-red-600 group hover:ring-1 hover:ring-red-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="h- z-10 w-full overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-fit"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 z-20 group-hover:bg-white group-hover:ring-1 group-hover:ring-red-600 bg-red-600">
                <h3 className="font-bold text-lg group-hover:text-red-600 text-white">
                  {leader.name}
                </h3>
                <p className="text-sm group-hover:text-red-600 text-white">
                  {leader.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipNeyveli;
