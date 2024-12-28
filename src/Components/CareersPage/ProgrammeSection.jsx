import React from "react";
import { Link } from "react-router-dom";

const StudentsAndGraduatesSection = () => {
  const programmes = [
    { name: "Young Professionals Programme (YPP)", link: "/programmes/young-professionals" },
    { name: "Management Trainee Programme (MT)", link: "/mt" },
    { name: "Internship Programme", link: "/internship" },
  ];

  return (
    <section className="container mx-auto flex lg:flex-row flex-col gap-x-10 items-center justify-between px-8 py-12 lg:py-16">
      {/* Text Section */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-6xl font-bold mb-4">STUDENTS AND RECENT GRADUATES</h2>
        <p className="text-gray-600 mb-6">
          We offer several pathways for those eager to jumpstart their careers
          and help shape the future. A great way to begin is by familiarizing
          yourself with our hiring process and exploring the opportunities.
        </p>

        <div className="border rounded-lg overflow-hidden">
          {programmes.map((programme, index) => (
            <Link
              to={programme.link}
              key={index}
              className={`block px-6 py-4 justify-between items-center border-b last:border-b-0 transition-all duration-200 hover:bg-red-100 hover:border-l-4 hover:border-red-500 group`}
            >
              <span
                className="transition-all duration-200 text-lg group-hover:text-xl group-hover:text-red-600"
              >
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
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735301666/IMG_9085_tkrncl.jpg" // Replace with the actual image URL
          alt="Student or Recent Graduate"
          className="rounded-lg shadow-lg w-3/4 lg:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default StudentsAndGraduatesSection;
