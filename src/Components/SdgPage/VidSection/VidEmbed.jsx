import React from 'react';

const VidEmbed = () => {
  return (
    <section className="flex flex-col mx-auto items-center py-12 bg-white">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl lg:w-[700px] font-bold text-pink-600 mb-6 text-center">
        How is PANTISS supporting the Government to achieve the Sustainable Development Goals?
      </h2>

      {/* YouTube Video Embed */}
      <div className="w-full max-w-4xl mb-8"> {/* Changed max-w-2xl to max-w-4xl for larger size */}
        <iframe
          className="w-full h-[600px]" 
          src="https://www.youtube.com/embed/enGJyhu6Xr0?si=edHD8_VrpSG8R9Cx"
          title="BRAC SDG Contribution Overview 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VidEmbed;
