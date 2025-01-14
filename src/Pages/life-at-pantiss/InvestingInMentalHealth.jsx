import React from "react";

const WorkplaceWellness = () => {
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
            <li className="text-gray-800 font-semibold">
              Investing in Mental Health
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">
              Supporting Mental Health and Wellness at the Workplace
            </h1>
            <p className="text-gray-700 mb-4">
              Excessive stress at work can be overwhelming and may take a toll
              on our mental health, and our productivity may take a hit. As a
              measure to reduce workplace-related stress, promote a work
              atmosphere that considers employees’ mental health, and boost
              overall performance of its staff, Pantiss Foundation takes steps
              to ensure a stress-free work environment for our team.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530883/WhatsApp_Image_2024-09-08_at_18.49.58_a572e0ed_gstqo0.jpg" // Replace with the actual image path
              alt="Workplace Wellness"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Support System</h2>
            <p className="text-gray-700">
              We encourage our staff, especially women, to speak unhesitatingly
              about problems faced in our daily work life through a forum called{" "}
              <span className="font-semibold">Mon Khule Kotha Bola</span>{" "}
              (speaking from the heart). Vital concerns are shared and feasible
              solutions are reached through this forum, helping foster a
              cohesive work environment in the organization.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Counseling Services</h2>
            <p className="text-gray-700">
              We provide free mental health services/counseling to all
              employees. Our trained professionals offer private, psychosocial
              counseling sessions that ensure strict confidentiality.
              Appointments can be booked with them over the phone at{" "}
              <span className="font-semibold">(+8802 9880126, Ext. 3939)</span>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Health Initiatives</h2>
            <p className="text-gray-700">
              Maintaining good health has a major impact on overall energy
              levels, productivity, and mental wellbeing. We provide workout
              facilities, training sessions on chronic health conditions, and
              offer health insurance for employees and their dependents.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Safeguarding</h2>
            <p className="text-gray-700">
              Safeguarding is our priority to ensure a workplace free of harm,
              abuse, or discrimination. Our anonymous helpline{" "}
              <span className="font-semibold">(01730422121)</span> is available
              24/7 for reporting issues.
            </p>
          </div>
        </div>

        {/* Retrospective Section */}
        <div className="mt-10 bg-yellow-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">
            In Retrospect
          </h2>
          <p className="text-gray-700">
            In January 2018, the National Mental Health Act 2017 was approved by
            the legislature. This move highlights the importance of mental
            health in the workplace. The Pantiss Foundation is taking
            progressive steps toward an all-inclusive and mental health-friendly
            workplace culture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkplaceWellness;
