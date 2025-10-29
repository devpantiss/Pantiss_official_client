import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Background Image Section */}
      <div
        className="relative w-full h-[118vh] bg-cover flex justify-center items-center bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761686540/tribal_fkr859.avif')",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {/* Content Box for Desktop View */}
          <div className="flex flex-col justify-start items-start bg-opacity-80 p-6 rounded shadow-md lg:block">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Asia's Largest Mining Villages Summit
            </h1>
            <p className="text-lg mb-6 text-white">Date: March 15, 2025</p>
            <a
              href="https://forms.gle/example-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded"
            >
              Participate
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
