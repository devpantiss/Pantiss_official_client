import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 bg-gray-100">
      {/* Left Large Image */}
      <div className="lg:col-span-2 lg:row-span-2 relative">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736837222/WhatsApp_Image_2025-01-14_at_12.16.09_PM_vm4cpn.jpg" // Replace with actual image URL
          alt="Flood response in Bangladesh"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Top Right Image */}
      <div className="relative lg:col-span-2">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325296/WhatsApp_Image_2025-01-08_at_12.57.41_PM_kkfzkb.jpg" // Replace with actual image URL
          alt="Youth reboot Bangladesh"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-lg font-bold">
            Educating Children regarding Sanitation
          </h3>
          <button className="bg-red-500 text-white px-4 py-2 mt-2">
            Learn more
          </button>
        </div>
      </div>

      {/* Bottom Right Image */}
      <div className="relative lg:col-span-2">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737007534/WhatsApp_Image_2025-01-15_at_7.49.04_PM_bs7fwk.jpg" // Replace with actual image URL
          alt="The Good Feed"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-lg font-bold">The Good Feed</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
