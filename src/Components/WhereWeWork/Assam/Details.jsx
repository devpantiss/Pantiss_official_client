import React from "react";
import Heading from "../../Common/Heading";

const Details = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full relative">
      {/* Left Content Section */}
      <div className="flex-1 bg-gray-100 overflow-y-auto px-10 py-16">
      <Heading text="WHY ODISHA?" color="text-black" bgColor="bg-red-600" />

        <p className="text-lg mb-8">
          Odisha, known for its rich natural resources, has been significantly impacted by mining activities, especially in tribal and rural areas. Over the years, these regions have faced socio-economic challenges such as displacement, loss of livelihood, and environmental degradation.
        </p>
        <p className="text-lg mb-8">
          Efforts are being made to address these issues through welfare initiatives focusing on health, education, and sustainable development. Since 2010, several projects have been launched to support mining-affected villages, including skill development programs and community-based interventions.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Over 35% of affected villages require immediate assistance
        </h3>
        <p className="text-lg mb-8">
          The mining-affected villages in Odisha face a critical need for rehabilitation. Around 1.2 million people in these areas require improved access to clean drinking water, healthcare, and education. The state's initiatives aim to empower communities through tailored development programs.
        </p>
        <p className="text-lg mb-8">
          A key focus remains on environmental restoration and promoting alternative livelihood opportunities to reduce dependency on mining activities. These efforts have already impacted over 500 villages positively, but more work is needed to achieve sustainability.
        </p>
      </div>

      {/* Right Fixed Map Section */}
      <div className="w-[400px] flex justify-center items-center lg:justify-start lg:items-start p-4">
        <div className="border border-gray-300 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737397857/assam-state-map-location-in-indian-3d-isometric-map-assam-map-illustration-vector-removebg-preview_um1mg5.png"
            alt="Odisha Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
