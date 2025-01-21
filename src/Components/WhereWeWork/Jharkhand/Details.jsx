import React from "react";
import Heading from "../../Common/Heading";

const Details = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full relative">
      {/* Left Content Section */}
      <div className="flex-1 bg-gray-100 overflow-y-auto px-10 py-16">
        <Heading
          text="WHY JHARKHAND?"
          color="text-black"
          bgColor="bg-red-600"
        />

        <p className="text-lg mb-8">
          Jharkhand, renowned for its abundant mineral resources, is a hub for the iron & steel and mining industries. While these industries drive the state's economy, they also bring challenges such as unemployment in mining-affected areas, environmental degradation, and a lack of community empowerment. Recognizing these issues, we have initiated skilling projects and sustainable waste management programs to uplift communities.
        </p>

        <p className="text-lg mb-8">
          Our focus is on equipping youth and women with the skills required to secure employment in iron & steel plants, mining operations, and waste management. These efforts aim to empower communities with sustainable livelihoods while contributing to industrial growth.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Skilling Projects for Iron & Steel and Mining Industries
        </h3>
        <p className="text-lg mb-8">
          We have launched targeted skilling programs in three blocks—**Bokaro**, **Dhanbad**, and **Ramgarh**—to address unemployment and provide industry-specific training. Courses include mining equipment operation, safety protocols, and iron & steel plant operations. Over 5,000 participants have been trained so far, enabling them to secure employment in these sectors and support their families.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Waste Segregation Plants for Environmental Sustainability
        </h3>
        <p className="text-lg mb-8">
          To address the issue of waste management, we have established waste segregation plants in strategic locations within Jharkhand. These plants process industrial and domestic waste, reducing environmental damage and creating jobs for the local population. The initiative not only supports environmental restoration but also provides steady incomes to over 2,000 workers.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Community Empowerment and Development
        </h3>
        <p className="text-lg mb-8">
          In addition to skilling and waste management, we focus on community development through training programs and awareness drives. Efforts are underway to improve access to clean water, healthcare, and education in mining-affected blocks. By integrating skilling projects with community-based interventions, we aim to create a sustainable future for the people of Jharkhand.
        </p>
      </div>

      {/* Right Fixed Map Section */}
      <div className="w-[400px] flex justify-center items-center lg:justify-start lg:items-start p-4">
        <div className="border border-gray-300 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737370115/Jharkhand_wth7my.png"
            alt="Jharkhand Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
