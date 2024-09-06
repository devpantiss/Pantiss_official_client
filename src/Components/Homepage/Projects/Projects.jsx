import React, { useState } from "react";
import Heading from "../../Common/Heading";

const completedProjects = [
    {
        id: 1,
        description: "Redeployment & retrenchment of VRS Opted & Abandoned Mines.",
        logo: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-01-at-10.52.39-PM.jpeg", // Replace with actual image URLs
        isReadMore: false,

    },
    {
        id: 2,
        description: "Odisha WASHPreneur Fellowship Program",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-23.png",
        isReadMore: false,
    },
    {
        id: 3,
        description: "Scopping study for unemployment-free blocks in mining regions of Keonjhar district",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/CYSD-LOGO.png",
        isReadMore: false,
    },
    {
        id: 4,
        description: "A plan on construction and demolition Waste Management, Bhubaneswar",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/giz-standard-logo_0.png",
        isReadMore: false,
    },
    {
        id: 5,
        description: "A study an alternative livelihoods of household in unprofitable mines",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-24.png",
        isReadMore: false,
    },
    {
        id: 6,
        description: "Detailed project report on migration in mining district of India during COVID",
        logo: "https://pantiss.com/wp-content/uploads/2023/07/download__29_-removebg-preview-1.png",
        isReadMore: false,
    },
    {
        id: 7,
        description: "Capacity Building of Woman Miners in Chromites mines of Sukinda region, Jajpur",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/Tata_Steel_Limited_2-removebg.png",
        isReadMore: false,
    },
    {
        id: 8,
        description: "A survey on household dependency on coal mining in Odisha, Jharkhand, Chhattisgarh",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-27.png",
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
        description: "Development of miners and operators in periphery of mining area.",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-22.png", // Replace with actual image URLs
        isReadMore: false,

    },
    {
        id: 2,
        description: "Entrepreneurship, livelihoods & Skilling of Safai Karmachari's in facilities of mining led institutions.",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-25.png",
        isReadMore: false,

    },
    {
        id: 3,
        description: "Scopping study for unemployment-free blocks in mining regions of Keonjhar district",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/CYSD-LOGO.png",
        isReadMore: false,

    },
    {
        id: 4,
        description: "Social Impact Assessment of CSR intervention in mining affected district",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-21.png",
        isReadMore: false,

    },
    {
        id: 5,
        description: "All Women Mines Training Program",
        logo: "https://pantiss.com/wp-content/uploads/2023/07/download__28_-removebg-preview-1-1.png",
        isReadMore: false,

    },
    {
        id: 6,
        description: "Developing Abandon Mines in to Inland aquaculture sites",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/giz-standard-logo_0.png",
        isReadMore: false,

    },
    {
        id: 7,
        description: "Safely Managed water and sanitation",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-20.png",
        isReadMore: false,
    },
    {
        id: 8,
        description: "Recruitment , Train deployment of Youth in Mining , iron & steel Industries",
        logo: "https://pantiss.com/wp-content/uploads/2023/06/download-26.png",
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
                       {!project.isReadMore && <img
                            src={project.logo}
                            alt={project.id}
                            className="w-24 h-12 object-fit mx-auto mb-4"
                        />}
                        {!project.isReadMore && <p className="text-center text-gray-700 font-medium">
                            {project.description}
                        </p>}
                        {project.isReadMore && <p className="flex justify-center items-center text-center text-[22px] text-red-700 underline font-medium">
                            {project.description}
                        </p>}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="container mx-auto px-4 py-10">
            <Heading text="OUR PROJECTS" color="text-black" bgColor="bg-[#2A675C]" />

            {/* Tab Buttons */}
            <div className="flex justify-center relative">
                <button
                    onClick={() => setActiveTab("completed")}
                    className={`relative h-[70px] px-6 py-2 font-semibold text-lg ${activeTab === "completed"
                        ? "bg-blue-600 text-white"
                        : "bg-red-600 text-white"
                        }`}
                >
                    Completed Projects
                    {activeTab === "completed" && (
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[20px] border-t-blue-600"></div>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("ongoing")}
                    className={`relative px-6 py-2 font-semibold text-lg ${activeTab === "ongoing"
                        ? "bg-blue-600 text-white"
                        : "bg-red-600 text-white"
                        }`}
                >
                    Ongoing Projects
                    {activeTab === "ongoing" && (
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[20px] border-t-blue-600"></div>
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