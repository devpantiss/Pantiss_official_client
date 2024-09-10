import React from 'react';
import Heading from '../../Common/Heading';

const CardComponent = () => {
  return (
    <>
      <Heading text="OUR FOUNDER's STATEMENT" color="text-[black]" bgColor="bg-red-600" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 space-y-10">
        {/* First Card */}
        <div className="lg:relative flex flex-col lg:flex-row items-center justify-center mb-12 w-full lg:w-3/4">
          {/* Image */}
          <div className="lg:absolute lg:-top-16 lg:right-16 w-full h-full lg:w-52 lg:h-52">
            <img
              src="https://pantiss.com/wp-content/uploads/2022/08/222a.png"
              alt="Profile"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          {/* Text Card */}
          <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg w-full lg:w-2/3">
            {/* Adding quotes around the text */}
            <p className="lg:w-[600px] relative text-lg leading-relaxed before:content-['\201C'] before:text-5xl before:absolute before:-left-5 before:-top-4 after:content-['\201D'] after:text-5xl after:absolute after:-right-4 after:-bottom-12">
              We believe that through social impact consulting and effective social impact management,
              we can elevate long-term sustainable change created by social investments. Our passion
              for community-based initiatives and understanding of the socio-cultural underpinnings
              of socio-economic development in India has played a guiding role in their work.
            </p>
            <p className="mt-4 font-bold">
              Mr. Stalin Kumar Nayak<br />
              Director & Chairperson
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="lg:relative flex flex-col lg:flex-row items-center mt-12 justify-center w-full lg:w-3/4">
          {/* Image */}
          <div className="lg:absolute lg:-top-16 lg:left-16 w-full h-full lg:w-48 lg:h-48">
            <img
              src="https://pantiss.com/wp-content/uploads/2022/08/222b.png" // Replace with actual image link
              alt="Profile"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          {/* Text Card */}
          <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg w-full lg:w-2/3">
            {/* Adding quotes around the text */}
            <p className="lg:w-[600px] lg:ml-16 relative text-lg leading-relaxed before:content-['\201C'] before:text-5xl before:absolute before:-left-6 before:-top-4 after:content-['\201D'] after:text-5xl after:absolute after:-right-4 after:-bottom-12">
              We are skilling people to get an income generating source for themselves, strengthening the community for social enterprises, aware the youths for a sustainable change in our environment, educating them on WASH etc. We are dreaming for a better future of Odisha and her youths.
            </p>
            <p className="mt-4 font-bold lg:ml-16">
              Dr. Sanjay Pradhan<br />
              Principle Advisor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
