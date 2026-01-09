import React from "react";

const TeamBanner1 = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center
    lg:bg-[url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761729551/STALIN_SIR_S_PIC_1_mper5p.jpg')] 
    bg-[url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761729552/Sir_Potrait_Pic_wgxvnd.jpg')]"
    >
      {" "}
      {/* Add the URL to your background image */}
      <div className="absolute -bottom-6 lg:left-[10%] flex items-center max-w-5xl mx-auto space-x-8">
        {/* Left Section: Profile Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Mr. Stalin Nayak
          </h2>
          <h3 className="text-xl font-medium mb-2">Founder & CEO</h3>
          <p className="text-gray-700 mb-6">
            Mr. Stalin Nayak is a dedicated professional with a strong academic
            and field grounding in engineering and social development. He is an
            alumnus of Outr Bhubaneswar, where he completed his Bachelor’s in
            Electrical & Electronics Engineering (EEE), and further strengthened
            his commitment to social change with a Master’s in Social Work and
            PGDM in Tribal Development from TISS (Tata Institute of Social
            Sciences). Over the years, Mr. Nayak has built a diverse career
            spanning government and social sectors. He has worked in the
            government domain with ORMAS, focusing on inclusive development
            initiatives. Alongside, he has been an active social sector
            entrepreneur, driving programs and interventions aimed at improving
            the lives of mining-affected communities. His work reflects a blend
            of technical insight and deep-rooted empathy for marginalized
            populations, making him a key contributor to sustainable development
            and community empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner1;
