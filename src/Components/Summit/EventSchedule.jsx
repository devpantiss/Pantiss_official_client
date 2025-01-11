import React from "react";

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
        We are presently in the process of developing the agenda for the ICS 2024. 
        For your reference, we suggest that you download the agenda from the previous year to gain insight into the nature and scope of the event.
      </p>
      
      {/* Button */}
      <button className="mt-6 px-6 py-3 bg-green-600 text-white text-sm md:text-base font-medium rounded hover:bg-green-700">
        Download Last Year’s Agenda
      </button>
    </div>
  );
};

export default EventSchedule;
