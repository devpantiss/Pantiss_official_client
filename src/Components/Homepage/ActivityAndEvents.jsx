import React from "react";

const ActivityAndEvents = () => {
  const stakeholderEngagements = [
    {
      country: "Philippines - Manila",
      event:
        "Third Stakeholder Engagement Meeting on the Philippines’ CIF ACT Investment Plan",
      date: "12 Mar 2024",
      materials: "Revised IP (Feb. 2024) Stakeholder Q&A",
    },
    {
      country: "Indonesia - Cirebon",
      event:
        "Stakeholder consultations on the early retirement of Cirebon-1 coal-fired power plant",
      date: "26 Feb - 2 Mar 2024",
      materials:
        "Preliminary Just Transition Assessment - Summary (English and Bahasa Indonesia) Environmental and Social Compliance Audit Report - Consultation materials (English, Bahasa Indonesia)",
    },
  ];

  const relatedResources = [
    {
      text: "Blog: Women Must Be at the Forefront of the Transition to a Low-Carbon Economy",
      link: "#",
    },
    {
      text: "Expert: Why ADB’s Energy Transition Mechanism is prioritizing Safeguards and a Just Transition",
      link: "#",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-12 px-6"
      style={{
        backgroundImage: `url(https://www.adb.org/sites/default/files/bg-just-transition.jpg)`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center text-white">
          {/* Title and Description */}
          <h2 className="text-3xl font-bold mb-4">
            The Importance of Safeguards and a Just Transition
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            ADB’s work on ETM will prioritize safeguards and a just transition,
            including high level conversations to avoid adverse impacts on the
            environment and people, and a commitment that the move toward
            renewable and sustainable economies leave no community, industry, or
            worker behind.
          </p>

          {/* Two-Column Layout */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Right Column: Table, Resources, and Contact */}
            <div className="w-full flex flex-col lg:flex-row lg:gap-x-6">
              {/* Table: Key Stakeholder Engagement Activities */}
              <div className="mb-8 lg:w-2/3">
                <h3 className="text-xl font-bold">
                  Key Stakeholder Engagement Activities
                </h3>

                <hr className="my-6 border-red-600"/>

                <div className="overflow-x-auto bg-white bg-opacity-90 p-4 rounded-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-gray-800 font-semibold text-sm">
                          Country/Location
                        </th>
                        <th className="p-3 text-gray-800 font-semibold text-sm">
                          Event
                        </th>
                        <th className="p-3 text-gray-800 font-semibold text-sm">
                          Date
                        </th>
                        <th className="p-3 text-gray-800 font-semibold text-sm">
                          Relevant Materials
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {stakeholderEngagements.map((engagement, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="p-3 text-gray-600 text-sm">
                            {engagement.country}
                          </td>
                          <td className="p-3 text-gray-600 text-sm">
                            {engagement.event}
                          </td>
                          <td className="p-3 text-gray-600 text-sm">
                            {engagement.date}
                          </td>
                          <td className="p-3 text-gray-600 text-sm">
                            {engagement.materials}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:w-1/3 mt-12">
                {/* Related Resources */}
                <div className="mb-8 bg-red-600 rouned-md p-4">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Related Resources
                  </h3>
                  <ul className="space-y-2">
                    {relatedResources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.link}
                          className="text-white underline text-sm"
                        >
                          {resource.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Us */}
                <div className="bg-red-600 rounded-md p-4">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Contact Us
                  </h3>
                  <p className="text-gray-200 text-sm">
                    ADB welcomes your comments, feedback, and questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-10">
            <p className="text-gray-200 text-sm">Last update: 7 Mar 2024</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Previous Activities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityAndEvents;
