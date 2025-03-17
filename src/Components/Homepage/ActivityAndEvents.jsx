import React from "react";

const ActivityAndEvents = () => {
  const pantissEvents = [
    {
      event: "FarmGrow App Launch Workshop",
      client: "AgriTech Solutions",
      date: "15 Jan 2025",
      venue: "New Delhi, India",
    },
    {
      event: "Sustainable Farming Seminar",
      client: "GreenFields Co.",
      date: "22 Feb 2025",
      venue: "Mumbai, India",
    },
    {
      event: "Women Farmer Empowerment Meet",
      client: "Empower Rural NGO",
      date: "10 Mar 2025",
      venue: "Bangalore, India",
    },
    {
      event: "Climate Resilience Training",
      client: "EcoFuture Foundation",
      date: "18 Apr 2025",
      venue: "Hyderabad, India",
    },
    {
      event: "Agri-Tech Innovation Expo",
      client: "TechFarm Innovations",
      date: "12 Jun 2025",
      venue: "Pune, India",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-6 px-6"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1741674138/mathew-schwartz-P63j18ITHfA-unsplash_oxbg8q.jpg)`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/3 w-full text-white flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Pantiss Foundation Events
          </h2>
          <p className="text-lg text-gray-200 max-w-md mb-6">
            Discover upcoming events driving sustainable change and community empowerment.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            View All Events
          </button>
        </div>

        {/* Table Container */}
        <div className="lg:w-2/3 w-full bg-white bg-opacity-95 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header with horizontal overflow */}
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead className="sticky top-0 bg-red-600 text-white z-10">
                <tr>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-2/5">
                    Event
                  </th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-1/5">
                    Client
                  </th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-1/5">
                    Date
                  </th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-1/5">
                    Venue
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Scrolling Content with horizontal overflow */}
          <div className="max-h-[450px] overflow-y-hidden overflow-x-auto">
            <div className="animate-scroll">
              <table className="w-full text-left min-w-[600px]">
                <tbody>
                  {pantissEvents.concat(pantissEvents).map((event, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 text-md w-2/5">{event.event}</td>
                      <td className="p-4 text-md w-1/5">{event.client}</td>
                      <td className="p-4 text-md w-1/5">{event.date}</td>
                      <td className="p-4 text-md w-1/5">{event.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for design and scrolling */}
      <style jsx>{`
        /* Continuous scrolling animation */
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Ensure tables align */
        table {
          table-layout: fixed;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .lg\\:w-1/3 {
            width: 100%;
            margin-bottom: 2rem;
          }
          .lg\\:w-2/3 {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ActivityAndEvents;