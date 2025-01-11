import React from "react";

const WhoShouldAttend = () => {
  const attendees = [
    {
      title: "Policy Makers and Government Officials",
      description:
        "For those involved in crafting policies and initiatives for rural and mining-affected communities, this summit provides invaluable insights into effective governance strategies.",
    },
    {
      title: "Non-Governmental Organizations (NGOs)",
      description:
        "NGOs working in areas like education, health, and livelihood in mining villages can leverage this summit to enhance their impact and collaborations.",
    },
    {
      title: "CSR Heads and Sustainability Managers",
      description:
        "Corporate leaders managing CSR initiatives will discover innovative ways to drive social and economic upliftment in mining areas.",
    },
    {
      title: "Social Entrepreneurs",
      description:
        "Entrepreneurs focused on community development and sustainable enterprises will find this summit a platform for inspiration and networking.",
    },
    {
      title: "Academic and Research Professionals",
      description:
        "Researchers studying mining's socio-economic and environmental impacts will gain valuable data and case studies.",
    },
    {
      title: "Community Leaders and Activists",
      description:
        "Local leaders and activists striving to improve living conditions in mining villages can connect with resources and advocates at the summit.",
    },
  ];

  return (
    <section className="bg-red-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10">
          Who Should Attend the Mining Villages Development Summit 2024?
        </h1>
        <p className="text-center mb-10">
          The Mining Villages Development Summit 2024 is a premier event
          tailored for individuals and organizations dedicated to the
          sustainable development of mining-affected areas. Here's a look at who
          should consider attending this transformative summit:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className="bg-red-600 ring-2 ring-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white text-red-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="ml-4 text-xl font-semibold">{attendee.title}</h3>
              </div>
              <p>{attendee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
