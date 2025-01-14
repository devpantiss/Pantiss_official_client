import React from "react";

const TutionAssistance = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li>
            <a href="/careers" className="text-red-600 hover:underline font-semibold">
              Careers
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="/initiatives" className="font-semibold hover:underline">
              Benefits
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-800 font-semibold">Tution Assistance</li>
        </ol>
      </nav>

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Supporting Staff Through Higher Education
      </h1>

      {/* Image and Caption */}
      <div className="mb-6">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735392592/pexels-lalesh-167964_fgtnus.jpg"
          alt="Higher Education Program"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Content */}
      <div className="text-gray-700 space-y-4">
        <p>
          At the Pantiss Foundation, we believe in empowering our staff to grow
          both professionally and personally. We provide opportunities for
          higher education that help our team members achieve their academic
          aspirations while continuing to contribute meaningfully to the
          organization.
        </p>
        <p>
          Through our Higher Education Scholarship Program, staff members are
          nominated and supported in pursuing advanced degrees in their chosen
          fields. This program ensures financial aid, mentorship, and a clear
          path to reintegrate into the organization after completing their
          studies.
        </p>
        <p>
          Many of our team members have returned with enhanced knowledge and
          leadership skills, enabling them to take on strategic roles that drive
          the Foundation’s mission forward. Their experiences at leading
          institutions worldwide not only expand their horizons but also bring
          fresh perspectives to our work.
        </p>
        <p>
          The Pantiss Foundation recognizes education as a powerful tool for
          personal and professional growth. We encourage staff to explore their
          full potential, equipping them with the skills and confidence to make
          a greater impact in the communities we serve.
        </p>
        <p className="font-semibold text-gray-800">
          By investing in our people, we invest in our mission. The Pantiss
          Foundation is proud to support the educational journeys of our team
          members, ensuring they have the resources to excel and lead with
          purpose.
        </p>
      </div>
    </div>
  );
};

export default TutionAssistance;
