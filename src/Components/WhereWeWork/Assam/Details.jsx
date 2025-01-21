import React from "react";
import Heading from "../../Common/Heading";

const DetailsAS = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full relative">
      {/* Left Content Section */}
      <div className="flex-1 bg-gray-100 overflow-y-auto px-10 py-16">
        <Heading text="WHY ASSAM?" color="text-black" bgColor="bg-red-600" />

        <p className="text-lg mb-8">
          Assam, located in northeastern India, is renowned for its natural resources and biodiversity. While the state has traditionally relied on tea plantations and oil production, the mining industry has emerged as a key sector in its economic landscape.
        </p>
        <p className="text-lg mb-8">
          Despite its potential, Assam faces challenges in workforce readiness and skill development, particularly in the mining sector. Recognizing the need for skilled workers, targeted training programs have been implemented to bridge this gap and empower local communities.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Empowering Assam's Workforce Through Skill Development
        </h3>
        <p className="text-lg mb-8">
          In a strategic partnership with GIZ and NSDC, a comprehensive training program was conducted to prepare workers for the mining industry. This initiative focused on equipping individuals with skills in mining operations, equipment handling, and safety protocols.
        </p>
        <p className="text-lg mb-8">
          Over 830 workers were trained as part of this collaboration, creating new opportunities for livelihood and reducing dependency on traditional industries. These efforts have not only improved the workforce's employability but also contributed to Assam's socio-economic development.
        </p>
        <p className="text-lg mb-8">
          The success of this program underscores the importance of investing in skill development and fostering partnerships to address workforce challenges. Assam continues to evolve as a hub for skilled professionals in the mining sector, paving the way for sustainable growth.
        </p>
      </div>

      {/* Right Fixed Map Section */}
      <div className="w-[400px] flex justify-center items-center lg:justify-start lg:items-start p-4">
        <div className="border border-gray-300 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737397857/assam-state-map-location-in-indian-3d-isometric-map-assam-map-illustration-vector-removebg-preview_um1mg5.png"
            alt="Assam Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsAS;