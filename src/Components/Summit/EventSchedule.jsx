const EventSchedule = () => {
  return (
    <div className="bg-red-600 flex flex-col items-center justify-center py-12 px-6">
      {/* Title Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
        Event Schedule
      </h2>
      <div className="w-16 h-1 bg-green-600 mt-2 mb-4"></div>
      
      {/* Description */}
      <p className="text-center text-gray-100 text-sm md:text-base max-w-3xl">
        Explore the complete three-day programme for the 4th Mining Villages
        Summit in Niyamgiri, from 6 to 8 November 2026.
      </p>
      
      {/* Button */}
      <a
        href="/assets/summit/agenda/mining-villages-summit-agenda-2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the 2026 Mining Villages Summit agenda PDF in a new tab"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600 md:text-base"
      >
        View 2026 Summit Agenda
      </a>
    </div>
  );
};

export default EventSchedule;
