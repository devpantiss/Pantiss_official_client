import React from "react";

const MeetTheLeaders = () => {
  const leaders = [
    {
      name: "Dr. Marian Beatrice Davies",
      role: "Director of Educational Development, Pantiss Foundation",
      description:
        "Dr. Marian emphasizes impactful development through compassion, knowledge-sharing, and fostering opportunities for marginalized communities.",
      image: "path_to_image_1", // Replace with actual image path
    },
    {
      name: "Sanhita Jana Sattarah",
      role: "Field Programme Head, Communications at Pantiss Foundation",
      description:
        "Sanhita advocates for inclusiveness and amplifies local voices through strategic and effective communication methods.",
      image: "path_to_image_2", // Replace with actual image path
    },
    {
      name: "Meghna Rahman",
      role: "Sub-district Development Coordinator, Pantiss Foundation",
      description:
        "Meghna focuses on inclusiveness, bringing communities together, and creating tailored solutions for local challenges.",
      image: "path_to_image_3", // Replace with actual image path
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
                  className="w-full h-64 object-cover lg:h-full"
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
