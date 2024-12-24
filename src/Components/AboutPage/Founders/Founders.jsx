import React from 'react';
import Heading from '../../Common/Heading';

const founders = [
  {
    name: 'Mr. Stalin Nayak',
    title: 'Director & Chairperson',
    image: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040843/stalin_sir_wbrcxh.jpg', // Replace with your image URL
  },
  {
    name: 'Dr. Sanjay Pradhan',
    title: 'Principal Advisor',
    image: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040837/Sanjay_sir_b5cld1.jpg', // Replace with your image URL
  }
];

const FoundersSection = () => {
  return (
    <section className="py-12">
      {/* Section Title */}
      <div className="container mx-auto">
        <div className="text-center flex justify-center items-center mb-2">
          <Heading text="OUR FOUNDERS" colors="text-white" bgColor="bg-red-600" />
        </div>
        {/* Founder Cards */}
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-x-8 gap-y-3">
          {/* First Card */}
          <div className="flex flex-col items-center bg-white rounded-lg p-6">
            <img
              src={founders[0].image}
              alt={founders[0].name}
              className="w-56 h-56 object-cover rounded-lg mb-4 border-4 border-red-600"
            />
            <h3 className="text-2xl font-bold mb-2">{founders[0].name}</h3>
            <h4 className="text-lg text-gray-600 mb-4">{founders[0].title}</h4>
          </div>

          {/* Text Block */}
          <div className="text-center px-10 w-[500px]">
            <p className="text-gray-800 px-6 italic leading-relaxed mb-4">
              “We believe that through social impact consulting and effective social impact management, we can elevate long-term sustainable change created by social investments. Our passion for community-based initiatives and understanding of the socio-cultural underpinnings of socio-economic development in India has played a guiding role in their work.”
            </p>
            <p className="text-gray-600 px-6 leading-relaxed">
              We are skilling people to get an income generating source for themselves, strengthening the community for social enterprises, making the youths aware of sustainable changes in our environment, educating them on WASH, etc. We are dreaming for a better future for Odisha and her youths.
            </p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col items-center bg-white rounded-lg p-6">
            <img
              src={founders[1].image}
              alt={founders[1].name}
              className="w-56 h-56 object-cover rounded-lg mb-4 border-4 border-red-600"
            />
            <h3 className="text-2xl font-bold mb-2">{founders[1].name}</h3>
            <h4 className="text-lg text-gray-600 mb-4">{founders[1].title}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
