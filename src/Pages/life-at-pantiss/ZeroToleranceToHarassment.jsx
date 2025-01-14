import React from "react";

const ZeroToleranceToHarassment = () => {
  return (
    <div className="bg-white py-12 px-6">
      {/* Breadcrumb */}
      <div className="container mx-auto mb-6">
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
              Zero Tolerance To Harassment
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src="https://ohsguide.workplacenl.ca/topic/violence_harassment/161.png" // Replace with the actual image URL
            alt="Pantiss Safeguarding Wall"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            How Pantiss Foundation Upholds a Zero-Tolerance Policy on Workplace
            Sexual Harassment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Pantiss Foundation places the highest priority on fostering a
            safe and inclusive workplace environment, ensuring that every
            employee can thrive without fear of harassment or discrimination. As
            part of our core values, we have implemented a zero-tolerance policy
            for workplace sexual harassment, which is rigorously enforced across
            all levels of the organization.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our policy reflects a commitment to promoting gender equality,
            creating safe spaces, and empowering individuals through education,
            awareness, and comprehensive reporting systems. We believe that
            fostering respect and dignity at the workplace is key to unlocking
            the potential of our workforce.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since its inception, the Pantiss Foundation has championed
            initiatives to empower marginalized communities and uphold human
            rights. Recognizing that harassment and discrimination can undermine
            these goals, we have established robust mechanisms to address and
            prevent such issues.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Foundation's approach includes a combination of proactive
            measures such as mandatory training sessions, strict enforcement of
            policies, and confidential reporting channels. By adhering to these
            principles, Pantiss Foundation ensures a culture of accountability
            and respect, setting a benchmark for other organizations in the
            sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZeroToleranceToHarassment;
