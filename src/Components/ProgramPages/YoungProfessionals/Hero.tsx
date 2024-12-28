import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      {/* Top Section with Image and Heading */}
      <div className="relative">
        <img
          src="https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009150121.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T151339Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=79aa233ae79dfa27adc66fff02d5be665254b0340b3ee96ab6d90d2962f04cc96861806011063f5b7ba43c848a6d7606c0ddf2aee42fc4976d0aeea5d129f1917b8905d8a4505dce5c7925a33b9db84d2574e0589b858f793712aa469c01e05660057fbc67676831f4e23164c199bba023f1526c2f55ae29967fe4972ef742fb06bacfbbde011716f9750643fc313f6db6f805557398a44692acafd2e1197ea137029fd6f15b46551783ceadc8b7d797dc359e36408a4c6966ae025941846d5158b16a232c80a59e98a490c2be9c1ee0f3cce05fc4c46aaeee4cb87ef8a6bed9687f5dcca83534cd64e1f60fd2f9c8cfcc1edc0860f4eec04142fe2d5572c5af" // Replace with the actual image URL
          alt="Young Professionals Programme"
          className="w-full h-auto object-cover"
        />
        {/* Content Section */}
        {/* <div className="container mx-auto px-6 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            YOUNG PROFESSIONALS PROGRAMME
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Are you looking for a path to a management role? Our Young
            Professionals Programme is a year-long hands-on, rigorous and
            collaborative action learning experience. The fast-track journey
            encompasses rotations within and across functions to give you a
            holistic idea of what BRAC does.
          </p>
        </div>

        <div className="lg:w-1/3">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="BRAC's Young Professionals Programme"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Hero;
