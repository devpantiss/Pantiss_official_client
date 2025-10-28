import React, { useState } from "react";
import Heading from "../../Common/Heading";

const completedProjects = [
  {
    id: 1,
    description: "Redeployment & retrenchment of VRS Opted & Abandoned Mines.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664376/Ministry_of_Heavy_Industries_India.svg_sus4as.png",
    isReadMore: false,
  },
  {
    id: 2,
    description: "Odisha WASHPreneur Fellowship Program",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664221/UNICEF_caiufq.png",
    isReadMore: false,
  },
  {
    id: 3,
    description:
      "Scopping study for unemployment-free blocks in mining regions of Keonjhar district",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664586/CYSD_mcveio.png",
    isReadMore: false,
  },
  {
    id: 4,
    description:
      "A plan on construction and demolition Waste Management, Bhubaneswar",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664386/GIZ_b5rco1.png",
    isReadMore: false,
  },
  {
    id: 5,
    description:
      "A study an alternative livelihoods of household in unprofitable mines",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664562/TERI_l0nuzq.png",
    isReadMore: false,
  },
  {
    id: 6,
    description:
      "Detailed project report on migration in mining district of India during COVID",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664487/Ministry_of_Skill_Development_and_Entrepreneurship.svg_b7gmeo.png",
    isReadMore: false,
  },
  {
    id: 7,
    description:
      "Capacity Building of Woman Miners in Chromites mines of Sukinda region, Jajpur",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664557/TATA_STEEL_jzidbx.png",
    isReadMore: false,
  },
  {
    id: 8,
    description:
      "A survey on household dependency on coal mining in Odisha, Jharkhand, Chhattisgarh",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664424/mining_y6bnbb.png",
    isReadMore: false,
  },
  {
    id: 9,
    description: "Read More",
    logo: "",
    isReadMore: true,
  },
];

const ongoingProjects = [
  {
    id: 1,
    description:
      "Development of miners and operators in periphery of mining area.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664215/NSDC_wncifn.png",
    isReadMore: false,
  },
  {
    id: 2,
    description:
      "Entrepreneurship, livelihoods & Skilling of Safai Karmachari's in facilities of mining led institutions.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664221/UNICEF_caiufq.png",
    isReadMore: false,
  },
  {
    id: 3,
    description:
      "Scopping study for unemployment-free blocks in mining regions of Keonjhar district",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664449/JINDAL_STEEL_cunmka.png",
    isReadMore: false,
  },
  {
    id: 4,
    description:
      "Social Impact Assessment of CSR intervention in mining affected district",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664461/partner_1_ylni6y.png",
    isReadMore: false,
  },
  {
    id: 5,
    description: "All Women Mines Training Program",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664467/partner-3_kia2rg.png",
    isReadMore: false,
  },
  {
    id: 6,
    description: "Developing Abandon Mines in to Inland aquaculture sites",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664386/GIZ_b5rco1.png",
    isReadMore: false,
  },
  {
    id: 7,
    description: "Safely Managed water and sanitation",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761664226/UNIDO_Logo.svg_xshdt5.png",
    isReadMore: false,
  },
  {
    id: 8,
    description:
      "Recruitment , Train deployment of Youth in Mining , iron & steel Industries",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761665275/SCMS-removebg-preview_kzrfaz.png",
    isReadMore: false,
  },
  {
    id: 9,
    description: "Read More",
    logo: "",
    isReadMore: true,
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const renderProjects = (projects) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg ring-1 ring-black rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-none"
            style={{
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)", // Initial shadow
            }}
          >
            {!project.isReadMore && (
              <div className="flex justify-center items-center">
                <img
                  src={project.logo}
                  alt={project.id}
                  className="w-24 h-24 object-contain mx-auto mb-4"
                />
              </div>
            )}
            {!project.isReadMore && (
              <p className="text-center text-gray-700 font-medium">
                {project.description}
              </p>
            )}
            {project.isReadMore && (
              <p className="flex justify-center items-center text-center text-[22px] text-red-700 underline font-medium">
                {project.description}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="container mx-auto flex justify-center items-center flex-col px-4 py-10">
      <Heading text="OUR PROJECTS" color="text-black" bgColor="bg-red-600" />

      {/* Tab Buttons */}
      <div className="flex justify-center relative">
        <button
          onClick={() => setActiveTab("completed")}
          className={`relative h-[70px] px-6 py-2 font-semibold text-lg ${
            activeTab === "completed"
              ? "bg-black text-white"
              : "bg-red-600 text-white"
          }`}
        >
          Completed Projects
          {activeTab === "completed" && (
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[20px] border-t-black"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`relative px-6 py-2 font-semibold text-lg ${
            activeTab === "ongoing"
              ? "bg-black text-white"
              : "bg-red-600 text-white"
          }`}
        >
          Ongoing Projects
          {activeTab === "ongoing" && (
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[20px] border-t-black"></div>
          )}
        </button>
      </div>

      {/* Projects Content */}
      <div className="p-6">
        {activeTab === "completed" && renderProjects(completedProjects)}
        {activeTab === "ongoing" && renderProjects(ongoingProjects)}
      </div>
    </section>
  );
};

export default Projects;
