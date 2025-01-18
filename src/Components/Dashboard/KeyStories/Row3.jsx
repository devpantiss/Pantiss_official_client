import React from "react";
import Map from "./Map";

const Row3 = () => {
  return (
    <div className="bg-transparent p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl border-b-2 border-red-600 text-white font-semibold mb-6">
          Key result stories and partners
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map Section */}
          <div className="bg-transparent ring-2 ring-red-600 shadow-md rounded-lg p-4">
            <div className="text-md font-medium text-white border-b-2 border-red-600 mb-3">
              Key result stories by geographic focus
            </div>
            <div className="rounded-lg shadow-md h-[400px]">
              <Map />
            </div>
          </div>

          {/* Bar Chart Section */}
          <div className="bg-transparent ring-2 text-white ring-red-600 shadow-md rounded-lg p-4">
            <div className="text-md font-medium text-white border-b-2 border-red-600 mb-3">
              Key result stories by geographic focus
            </div>
            <div className="space-y-4">
              {/* Partner 1 */}
              <div>
                <div className="flex justify-between text-xs">
                  <span>
                    Kenya Agricultural and Livestock Research Organization
                  </span>
                  <span>6</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {/* Partner 2 */}
              <div>
                <div className="flex justify-between text-xs">
                  <span>Zambia Agricultural Research Institute</span>
                  <span>6</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              {/* Partner 3 */}
              <div>
                <div className="flex justify-between text-xs">
                  <span>Ethiopian Institute of Agricultural Research</span>
                  <span>5</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: "83%" }}
                  ></div>
                </div>
              </div>
              {/* Partner 4 */}
              <div>
                <div className="flex justify-between text-xs">
                  <span>
                    Ministry of Agriculture and Rural Development (Vietnam)
                  </span>
                  <span>4</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
              {/* Partner 5 */}
              <div>
                <div className="flex justify-between text-xs">
                  <span>Department of Crop Production (Cục Trồng trọt)</span>
                  <span>1</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: "17%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row3;
