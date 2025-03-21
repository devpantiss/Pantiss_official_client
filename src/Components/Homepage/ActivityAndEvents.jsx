import React, { useMemo } from "react";

const ActivityAndEvents = () => {
  const pantissEvents = useMemo(
    () => [
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
    ],
    []
  );

  // Double the events for seamless scrolling, memoized to prevent recalculation
  const eventRows = useMemo(() => pantissEvents.concat(pantissEvents), [pantissEvents]);

  return (
    <section
      className="relative bg-cover bg-center py-6 px-6"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_1200,q_auto:good/v1741674138/mathew-schwartz-P63j18ITHfA-unsplash_oxbg8q.jpg')`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/3 w-full text-white flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Pantiss Events
          </h2>
          <p className="text-lg text-gray-200 max-w-md mb-6">
            Discover upcoming events driving sustainable change and community empowerment.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            View All Events
          </button>
        </div>

        {/* Table Container */}
        <div className="lg:w-2/3 w-full bg-white bg-opacity-95 rounded-xl shadow-2xl overflow-hidden border border-gray-200 events-table-container">
          {/* Header */}
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px] table-fixed">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-2/5">Event</th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-1/5">Client</th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-1/5">Date</th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide w-1/5">Venue</th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Scrolling Content */}
          <div className="max-h-[450px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <table className="w-full text-left min-w-[600px] table-fixed">
              <tbody className="animate-scroll">
                {eventRows.map((event, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 text-md w-2/5 truncate">{event.event}</td>
                    <td className="p-4 text-md w-1/5 truncate">{event.client}</td>
                    <td className="p-4 text-md w-1/5 truncate">{event.date}</td>
                    <td className="p-4 text-md w-1/5 truncate">{event.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .events-table-container .animate-scroll {
          animation: scroll-events 20s linear infinite;
          display: block; /* Ensure tbody behaves correctly with animation */
        }

        @keyframes scroll-events {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .events-table-container:hover .animate-scroll {
          animation-play-state: paused;
        }

        /* Custom Scrollbar */
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: #d1d5db; /* gray-300 */
          border-radius: 4px;
        }
        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background-color: #f3f4f6; /* gray-100 */
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .lg\\:w-1\\/3 {
            width: 100%;
            margin-bottom: 2rem;
          }
          .lg\\:w-2\\/3 {
            width: 100%;
          }
        }

        /* Optimize rendering */
        .events-table-container {
          will-change: transform;
          transform: translateZ(0); /* Force hardware acceleration */
        }
      `}</style>
    </section>
  );
};

export default ActivityAndEvents;