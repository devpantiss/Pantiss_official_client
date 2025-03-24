import React from "react";
import Heading from "../../../../Common/Heading";

const leadershipTeam = [
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738229838/vecteezy_hand-drawnman-avatar-profile-icon-for-social-networks__n8j5bp.jpg",
    name: "Rahul Kumar Nayak",
  },
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738229838/vecteezy_hand-drawnman-avatar-profile-icon-for-social-networks__n8j5bp.jpg",
    name: "Abhinaraj Nayak",
  },
  {
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738229838/vecteezy_hand-drawnman-avatar-profile-icon-for-social-networks__n8j5bp.jpg",
    name: "Saroj Nanda",
  },
];

const Leadership = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <Heading
          text="OUR LEADERSHIP"
          color="text-black"
          bgColor="bg-red-600"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
