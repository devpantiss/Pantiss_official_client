import React from "react";

const EventSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Quote */}
        <blockquote className="relative text-gray-700 italic text-lg sm:text-xl mb-6">
          <div className="text-red-600 text-5xl lg:text-7xl absolute -top-8 -left-8">
            &ldquo;
          </div>
          <p className="relative z-10 bg-transparent inline-block px-4 sm:px-0 py-4">
            Over the past decade, our journey has been a testament to the
            resilience and determination of mining-affected communities. As we
            move forward, the upcoming Mining Villages Affected Summit marks the
            beginning of a transformative chapter — one where we collectively
            envision a future built on inclusive growth, sustainable
            development, and community empowerment. Together, we have a
            responsibility to address the challenges faced by these communities
            and drive impactful change for the people, the environment, and
            future generations.
          </p>
          <div className="text-red-600 text-5xl lg:text-7xl absolute -bottom-12 right-0">
            &rdquo;
          </div>
        </blockquote>
        <cite className="block mt-6 text-gray-500 font-bold">
          &mdash; Stalin Nayak, Founder and CEO, Pantiss Foundation
        </cite>

        {/* Event Details */}
        <div className="text-gray-800 font-semibold text-xl mt-10">
          See you in October in Niyamgiri
        </div>
        <p className="text-gray-600 mt-2 text-lg">
          16<sup>th</sup> - 17<sup>th</sup> and 18<sup>th</sup> October 2025
        </p>

        {/* Download Button */}
        <a
          href="#"
          className="mt-6 inline-block px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-800"
        >
          Download Brochure: 4th Mining Villages Summit
        </a>
      </div>
    </section>
  );
};

export default EventSection;
