import React from "react";

// This will be your main component
const LifeAtPantiss = () => {
  return (
    <div className="bg-red-600">
      <div className="">
        {/* Header Section */}
        <section className="relative">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729517840/smartworks-coworking-Uz8THWPXwhI-unsplash_j8ospq.jpg"
            alt="Life at Lords"
            className="w-full h-[400px] lg:h-[800px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
            <div className="text-center text-white px-6">
              <h1 className=" text-4xl md:text-6xl font-bold mb-4">Life at Pantiss</h1>
              <p className="text-xl md:text-2xl">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 container flex justify-center flex-col mx-auto">
          {/* Section 1: Grow With Us */}
          <div className="flex flex-col md:flex-row items-center px-6 justify-center mb-16">
            <div className="w-full md:w-1/2 px-4">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729517840/smartworks-coworking-Uz8THWPXwhI-unsplash_j8ospq.jpg"
                alt="Grow with Us"
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 text-center md:text-left ring-2 ring-white rounded-md">
              <h2 className="text-2xl font-bold text-white mb-4">
                Grow With Us
              </h2>
              <p className="text-white mb-4">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task world-class methods of
                empowerment rather than.
              </p>
              <p className="text-white">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task world-class methods of
                empowerment rather than.
              </p>
            </div>
          </div>

          {/* Section 2: What to Expect */}
          <div className="flex flex-col-reverse md:flex-row items-center px-6 justify-center mb-16">
            <div className="w-full md:w-1/2 p-4 text-center md:text-left ring-2 ring-white rounded-md">
              <h2 className="text-2xl font-bold text-white mb-4">
                What to Expect
              </h2>
              <p className="text-white mb-4">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task world-class methods of
                empowerment rather than.
              </p>
              <p className="text-white">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task world-class methods of
                empowerment rather than.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530883/WhatsApp_Image_2024-09-08_at_18.49.58_a572e0ed_gstqo0.jpg"
                alt="What to Expect"
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Section 3: Reaching Goals */}
          <div className="flex flex-col md:flex-row items-center px-6 justify-center">
            <div className="w-full md:w-1/2 px-4">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729517982/tim-van-der-kuip-CPs2X8JYmS8-unsplash_dmangr.jpg"
                alt="Reaching Goals"
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 text-center md:text-left ring-2 ring-white rounded-md">
              <h2 className="text-2xl font-bold text-white mb-4">
                Reaching Goals?
              </h2>
              <p className="text-white mb-4">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task world-class methods of
                empowerment rather than.
              </p>
              <p className="text-white">
                Objectively productize extensible paradigms via efficient
                content Seamlessly parallel task world-class methods of
                empowerment rather than.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifeAtPantiss;
