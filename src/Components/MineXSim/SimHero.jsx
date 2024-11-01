import React from "react";
import { FiTarget, FiClipboard, FiTrendingUp } from "react-icons/fi"; // Icons for each impact category

const SimHero = () => {
  return (
    <div className="font-sans">
      {/* Background Image Section */}
      <div className="relative h-[700px] bg-cover bg-center flex items-center justify-center text-white text-center"
           style={{ backgroundImage: "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730110987/PIC-17_yrndwj.jpg')" }}> {/* Replace with your image path */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">PANTISS MINEx SIM</h1>
          <p className="text-lg">Integrating Social Impact Management into the Program Life-Cycle</p>
        </div>
      </div>

      {/* Impact Categories Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-8">
        <div className="text-center m-4 max-w-xs">
          <FiTarget className="text-red-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">IMPACT STRATEGY</h3>
          <p className="text-sm">
            Investment strategies and social programs that are evidence-based, result-oriented, and culturally relevant.
          </p>
        </div>

        <div className="text-center m-4 max-w-xs">
          <FiClipboard className="text-red-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">IMPACT MANAGEMENT</h3>
          <p className="text-sm">
            A continuing function of systematic collection of data to determine the extent of progress and achievement of results from social investments.
          </p>
        </div>

        <div className="text-center m-4 max-w-xs">
          <FiTrendingUp className="text-red-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">IMPACT MEASUREMENT</h3>
          <p className="text-sm">
            An objective assessment of impact investments, program implementation, and impact outcomes to determine achievement of results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimHero;
