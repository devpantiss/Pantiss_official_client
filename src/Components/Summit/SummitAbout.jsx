import React from "react";

const SummitAbout = () => {
  return (
    <section className="py-16 bg-red-600">
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 px-4">
        {[
          { label: "Conference", color: "bg-white hover:bg-white" },
          { label: "Exhibition", color: "bg-white hover:bg-white" },
          { label: "Networking", color: "bg-white hover:bg-white" },
          { label: "Masterclass", color: "bg-white hover:bg-white" },
          { label: "Panel Discussion", color: "bg-white hover:bg-white" },
        ].map((tab, index) => (
          <button
            key={index}
            className={`px-8 py-3 text-red-600 rounded-full shadow-md transition-all duration-300 ${tab.color}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          About Mining Villages Summit
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed mb-8">
          The Mining Villages Summit has become a transformative platform for addressing 
          the pressing challenges faced by mining-affected communities. This year’s summit 
          brings together experts, innovators, and leaders to chart a sustainable future 
          with a focus on community empowerment, technological advancements, and economic inclusion.
        </p>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">
            Transforming Challenges into Opportunities
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Join us as we explore strategies to build resilient communities, drive economic 
            development, and ensure environmental sustainability. Engage in thought-provoking 
            discussions, collaborative workshops, and meaningful networking sessions designed 
            to inspire impactful solutions for mining-affected villages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummitAbout;
