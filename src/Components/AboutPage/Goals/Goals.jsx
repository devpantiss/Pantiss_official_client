import React from "react";

const Goals = () => {
  return (
    <div
      className="relative overflow-hidden bg-fixed bg-cover bg-center bg-black/50"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735198640/image-20161107-4688-19m41fk_epc1ml.avif')`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Parallax background section */}
      <div className="container mx-auto w-full h-[500px] px-6 py-8 flex flex-col justify-center items-start text-white">
        <h1 className="text-4xl font-bold">PANTISS GROUP</h1>
        <p className="mt-4 w-[400px]">
          Pantiss is dedicated to driving social change and improving the lives
          of communities through sustainable development initiatives. We are the
          largest entity for welfareof mining affected communities, mines of
          Chottanagpur Plateau, Eastern Ghats.
        </p>
        {/* Content section */}
        <div className="flex justify-start gap-x-16 py-16">
          {/* Footer content */}
          <div className="text-left">
            <div className="text-5xl font-bold text-red-600">9</div>
            <div className="text-xl text-white mt-2">States</div>
          </div>

          <div className="text-left">
            <div className="text-5xl font-bold text-red-600">25000+</div>
            <div className="text-xl text-white mt-2">Mining Workers</div>
          </div>

          <div className="text-left">
            <div className="text-5xl font-bold text-red-600">9+</div>
            <div className="text-xl text-white mt-2">
              Model Mining Villages{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
