import React from "react";
import Map from "./Map";

const Row3 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 gap-6">
      {/* Left Section */}
      <div className="flex flex-col bg-white rounded shadow p-4 w-full md:w-1/4">
        <h2 className="font-bold text-lg mb-4">Outputs</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Knowledge product</span>
            <span>1,951</span>
          </div>
          <div className="h-2 bg-yellow-300 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Capacity sharing for dev.</span>
            <span>641</span>
          </div>
          <div className="h-2 bg-yellow-400 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Other output</span>
            <span>514</span>
          </div>
          <div className="h-2 bg-yellow-500 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Innovation development</span>
            <span>422</span>
          </div>
          <div className="h-2 bg-yellow-600 w-full rounded"></div>
        </div>

        <h2 className="font-bold text-lg mt-6 mb-4">Outcomes</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Innovation use</span>
            <span>95</span>
          </div>
          <div className="h-2 bg-orange-400 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Policy change</span>
            <span>55</span>
          </div>
          <div className="h-2 bg-orange-500 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Other outcome</span>
            <span>59</span>
          </div>
          <div className="h-2 bg-orange-600 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Capacity change</span>
            <span>2</span>
          </div>
          <div className="h-2 bg-orange-700 w-full rounded"></div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-1 bg-white rounded shadow p-4">
        <h2 className="font-bold text-lg mb-4">
          Search by geographic location
        </h2>
        <div className="relative w-full h-80">
          <Map /> {/* Replace the placeholder with the MapComponent */}
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-4 py-2 bg-yellow-300 rounded font-bold">
            National
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded font-bold">
            Sub-national
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col bg-white rounded shadow p-4 w-full md:w-1/4">
        <h2 className="font-bold text-lg mb-4">Global focus results</h2>
        <div className="text-lg font-bold mb-2">827</div>
        <h2 className="font-bold text-lg mb-4">Results by region</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>East and Southern Africa</span>
            <span>899</span>
          </div>
          <div className="h-2 bg-orange-400 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>South Asia</span>
            <span>549</span>
          </div>
          <div className="h-2 bg-orange-500 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>West and Central Africa</span>
            <span>452</span>
          </div>
          <div className="h-2 bg-orange-600 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Latin America and the Carib.</span>
            <span>378</span>
          </div>
          <div className="h-2 bg-orange-700 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Southeast Asia and the Pac.</span>
            <span>401</span>
          </div>
          <div className="h-2 bg-orange-800 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Central and West Asia and...</span>
            <span>377</span>
          </div>
          <div className="h-2 bg-orange-900 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>Europe</span>
            <span>51</span>
          </div>
          <div className="h-2 bg-gray-400 w-full rounded"></div>

          <div className="flex items-center justify-between">
            <span>North America</span>
            <span>8</span>
          </div>
          <div className="h-2 bg-gray-500 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Row3;
