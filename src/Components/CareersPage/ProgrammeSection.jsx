import React from "react";
import { Link } from "react-router-dom";

const StudentsAndGraduatesSection = () => {
  const programmes = [
    { name: "Young Professionals Programme (YPP)", link: "/ypp" },
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
              className={`block px-6 py-4 justify-between items-center border-b last:border-b-0 transition-all duration-200 hover:bg-red-100 hover:border-l-4 hover:border-red-500
                `}
            >
              <span
                
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
          src="https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009142601.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2bf841e6b7690d6d3920ec1656591654daba7f2898cfd995edff44e62d1f04ea12c93d9a0761632118b83aeda35498644d46f5bcac231ff3a0f94d55fc1a6cee5041a42ef6d9eb79bd9180f33dfddcd4c709b1818f680f0bab48487ab5d825fef20f9b407b7579073370ae6dadfeba0844d8e02df8edcbc7ebf0bd6e45037b93505151c0445360a1eca89c1058f7f6dbb645d57314a3f5da26b63a258f0e283a027e9c72f30b19ca1c5eeaf8ba5cc0ffb68b05d7b080984125e4569a039a43ba47295026f43427226a8ac8fc31a81a5eb7b06a0a4a187961ba282a2bd1b00169f0eb49c3afa61b1b49e83ee189f0a49edbba51cef78f2aacf93b7f35745e724f" // Replace with the actual image URL
          alt="Student or Recent Graduate"
          className="rounded-lg shadow-lg w-3/4 lg:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default StudentsAndGraduatesSection;
