import React from "react";
import { Link } from "react-router-dom";

const StudentsAndGraduatesSection = () => {
  const programmes = [
    {
      name: "Young Professionals Programme (YPP)",
      link: "/programmes/young-professionals",
    },
    // { name: "Management Trainee Programme (MT)", link: "/mt" },
    { name: "Internship Programme", link: "/programmes/internships" },
  ];

  return (
    <section className="bg-red-600">
      <div className="container mx-auto flex lg:flex-row flex-col gap-x-10 items-center justify-between px-8 py-12 lg:py-16">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-6xl text-white font-bold mb-4">
            STUDENTS AND RECENT GRADUATES
          </h2>
          <p className="text-gray-100 mb-6">
            We offer several pathways for those eager to jumpstart their careers
            and help shape the future. A great way to begin is by familiarizing
            yourself with our hiring process and exploring the opportunities.
          </p>

          <div className="ring-2 ring-white rounded-lg overflow-hidden">
            {programmes.map((programme, index) => (
              <Link
                to={programme.link}
                key={index}
                className={`block px-6 py-4 justify-between items-center border-b last:border-b-0 transition-all duration-200 hover:bg-white hover:border-l-4 hover:border-l-red-500 group`}
              >
                <span className="transition-all duration-200 text-lg text-white group-hover:text-xl group-hover:text-red-600">
                  {programme.name}
                </span>
                <span className="text-red-600 text-xl font-bold">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center">
          <img
            src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761745242/IMG_9085_tkrncl_1_1_cc29gu.jpg" // Replace with the actual image URL
            alt="Student or Recent Graduate"
            className="rounded-lg shadow-lg w-3/4 lg:w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StudentsAndGraduatesSection;
