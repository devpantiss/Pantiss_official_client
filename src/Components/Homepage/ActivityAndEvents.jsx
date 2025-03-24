import React, { memo, useMemo } from "react";

// Memoized ActivityAndEvents component
const ActivityAndEvents = memo(() => {
  const pantissEvents = useMemo(
    () => [
      {
        event: "Foundation Day Celebration",
        client: "Pantiss Foundation",
        date: "31 Mar 2025",
        venue: "Bhubaneswar, Odisha",
      },
      {
        event: "DMFT Kalahandi Job Fair",
        client: "DMFT",
        date: "15 Apr 2025",
        venue: "Kalahandi, Odisha",
      },
      {
        event: "DMFT Keonjhar Agriculture RPL Completion",
        client: "DMFT",
        date: "22 May 2025",
        venue: "Keonjhar, Odisha",
      },
      {
        event: "SKILL ON WHEELS Launch Event",
        client: "NSDC & Pantiss",
        date: "10 Jun 2025",
        venue: "Rourkela, Odisha",
      },
      {
        event: "NLCIL Mining Skills Placement Drive",
        client: "NLC India Limited",
        date: "18 Jul 2025",
        venue: "Jharsuguda, Odisha",
      },
    ],
    []
  );

  // Double the events for seamless scrolling
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
            Join us in uplifting mining communities through impactful events and skill-building initiatives.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
            View All Events
          </button>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white bg-opacity-95 rounded-xl shadow-2xl overflow-hidden border border-gray-200 events-table-container">
          <div className="relative max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <table className="w-full text-left table-fixed border-collapse">
              <thead className="bg-red-600 text-white sticky top-0 z-10">
                <tr>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide">Event</th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide">Client</th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide">Date</th>
                  <th className="p-4 font-semibold text-md uppercase tracking-wide">Venue</th>
                </tr>
              </thead>
              <tbody className="animate-scroll">
                {eventRows.map((event, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="p-4 text-md truncate">{event.event}</td>
                    <td className="p-4 text-md truncate">{event.client}</td>
                    <td className="p-4 text-md truncate">{event.date}</td>
                    <td className="p-4 text-md truncate">{event.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .events-table-container {
          will-change: transform;
          transform: translateZ(0);
          width: 100%;
          max-width: 100%; /* Prevent overflow */
        }

        .events-table-container table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
        }

        .events-table-container th,
        .events-table-container td {
          padding: 16px; /* Consistent padding */
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Explicit column widths */
        .events-table-container th:nth-child(1),
        .events-table-container td:nth-child(1) {
          width: 40%; /* Event */
        }
        .events-table-container th:nth-child(2),
        .events-table-container td:nth-child(2) {
          width: 20%; /* Client */
        }
        .events-table-container th:nth-child(3),
        .events-table-container td:nth-child(3) {
          width: 20%; /* Date */
        }
        .events-table-container th:nth-child(4),
        .events-table-container td:nth-child(4) {
          width: 20%; /* Venue */
        }

        .events-table-container thead {
          position: sticky;
          top: 0;
          z-index: 10;
          background-color: #dc2626; /* bg-red-600 */
        }

        .events-table-container .animate-scroll {
          animation: scroll-events 20s linear infinite;
          display: block;
        }

        @keyframes scroll-events {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .events-table-container:hover .animate-scroll {
          animation-play-state: paused;
        }

        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 4px;
        }
        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background-color: #f3f4f6;
        }

        @media (max-width: 1024px) {
          .lg\\:w-1\\/3 { width: 100%; margin-bottom: 2rem; }
          .lg\\:w-2\\/3 { width: 100%; }
          .events-table-container { overflow-x: auto; }
          .events-table-container table { min-width: 600px; } /* Minimum width for small screens */
        }

        /* Ensure header width matches body with scrollbar */
        .events-table-container thead tr {
          width: calc(100% - 8px); /* Adjust for scrollbar width */
          display: table;
          table-layout: fixed;
        }
        .events-table-container tbody {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
      `}</style>
    </section>
  );
});

ActivityAndEvents.displayName = "ActivityAndEvents";

export default ActivityAndEvents;