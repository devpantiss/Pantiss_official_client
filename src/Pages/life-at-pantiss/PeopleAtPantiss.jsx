import React from "react";

const PeopleAtPantiss = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        {/* Breadcrumb Section */}
        <nav className="text-sm text-gray-600 mb-6">
          <ol className="list-reset flex">
            <li>
              <a href="/careers" className="text-red-600 font-semibold hover:underline focus:outline-none">
                Careers
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-semibold">Life-at-Pantiss</li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-semibold">People-at-Pantiss</li>
          </ol>
        </nav>

        {/* Heading Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          IamPantiss: Planting the Seeds for Skilling a Nation's Youth
        </h1>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735390737/WhatsApp_Image_2024-12-28_at_6.28.04_PM_rscd9s.jpg"
              alt="Pantiss Award Ceremony"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed">
            <p>
              Working at the Pantiss Foundation, one of the leading NGOs in
              India, is unlike any other job. It is more than a career – it is a
              mission to create a lasting impact on youth across underserved
              communities. At Pantiss, every project is a step toward enabling
              empowerment, education, and employment opportunities.
            </p>
            <p className="mt-4">
              I have been with Pantiss for the past 10 years. I joined the
              organization as a Young Professional in the Education Program.
              Over time, I transitioned into managing the foundation’s Skills
              Development Program, initiated in 2018.
            </p>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed">
            <p>
              Since its inception, Pantiss has been addressing persistent
              challenges in community development. Wherever there was
              unemployment or barriers to accessing education, Pantiss stepped
              in to provide innovative solutions.
            </p>
            <p className="mt-4">
              One of our most notable initiatives is the Skills Development
              Program. This program focuses on bridging the gap between
              education and employability by offering holistic training modules.
              Women are at the core of our program, as we aim to empower them
              with skills in sectors such as healthcare, sustainable
              agriculture, and digital literacy.
            </p>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736837222/WhatsApp_Image_2025-01-14_at_12.16.09_PM_vm4cpn.jpg"
              alt="Pantiss Team"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Final Section */}
        <div className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          <p>
            At the core of Pantiss is the belief that empowering youth and
            marginalized communities is key to driving sustainable development.
            From creating opportunities for tribal youth to equipping urban slum
            dwellers with employable skills, our impact is widespread.
          </p>
          <p className="mt-4">
            Today, we manage over 30 active programs across India, focusing on
            healthcare, education, and economic development. We aim to nurture a
            culture where young individuals can dream, thrive, and contribute to
            society.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <a
            href="/join-us"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Join Us at Pantiss
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeopleAtPantiss;
