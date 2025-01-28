import React from "react";

const HeroAnugul = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325296/WhatsApp_Image_2025-01-08_at_12.57.41_PM_kkfzkb.jpg" // Replace with your image URL
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          ANUGUL
        </div>

        {/* Main Description */}
        <div className="mt-4">
          <p className="text-gray-800 font-medium">
            BRAC expanded to Afghanistan in 2002, its first country of
            operation outside Bangladesh. The nation’s post-conflict
            humanitarian crisis bore similarities to post-war Bangladesh, and
            BRAC applied lessons learned from its poverty alleviation efforts to
            Afghanistan. BRAC Afghanistan continues to serve communities in
            hard-to-reach areas, reaching approximately 17 million people
            through programmes in education, health, poverty alleviation, and
            emergency response.
          </p>
        </div>

        {/* Secondary Description */}
        <div className="mt-2">
          <p className="text-gray-700">
            We drive large-scale transformation by empowering women and their
            families to overcome poverty, build resilience, and foster
            resourcefulness. Our cost-effective, evidence-based programmes
            integrate social development—working across health, education, food
            security, and livelihoods—with market-based solutions in
            partnership with local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAnugul;
