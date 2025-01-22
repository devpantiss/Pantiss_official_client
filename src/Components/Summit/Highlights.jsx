import React from "react";
import Heading from "../../Components/Common/Heading";
import { MdEventAvailable } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaAward } from "react-icons/fa";

const Highlights = () => {
  const categoryIcons = {
    Awards: <FaAward className="inline-block mr-2 text-xl" />, 
    Discussions: <FaRegHandshake className="inline-block mr-2 text-xl" />,
    Masterclasses: <HiOutlineAcademicCap className="inline-block mr-2 text-xl" />,
    Exhibition: <MdEventAvailable className="inline-block mr-2 text-xl" />,
    Networking: <FaRegHandshake className="inline-block mr-2 text-xl" />,
    Reports: <HiOutlineDocumentReport className="inline-block mr-2 text-xl" />,
  };

  const newsItems = [
    {
      category: "Awards",
      title: "Mining Impact Excellence Awards",
      description: "Celebrating achievements in sustainable mining practices and impactful CSR initiatives, these awards recognized efforts to uplift mining communities.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.35.28_PM_oqfhdm.jpg",
      linkText: "Read more",
    },
    {
      category: "Discussions",
      title: "Panel Discussions on Community Development",
      description: "Experts shared insights on sustainable development, education, and healthcare initiatives for mining-affected villages.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737030424/WhatsApp_Image_2025-01-14_at_7.28.55_PM_g9y35l.jpg",
      linkText: "Read more",
    },
    {
      category: "Masterclasses",
      title: "Skill Development Workshops",
      description: "Workshops focused on skill-building for youth in mining areas, preparing them for diverse job opportunities.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737007534/WhatsApp_Image_2025-01-15_at_7.39.31_PM_gms50c.jpg",
      linkText: "Read more",
    },
    {
      category: "Exhibition",
      title: "Community Innovations Showcase",
      description: "An exhibition of innovative products and solutions by local communities, including eco-friendly mining technologies.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325295/WhatsApp_Image_2025-01-08_at_12.57.12_PM_hhrj9h.jpg",
      linkText: "Read more",
    },
    {
      category: "Networking",
      title: "Collaborative Networking Events",
      description: "Bringing together NGOs, industry leaders, and government officials to collaborate on projects benefiting mining villages.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325296/WhatsApp_Image_2025-01-08_at_12.57.41_PM_kkfzkb.jpg",
      linkText: "Read more",
    },
    {
      category: "Reports",
      title: "Sustainability and Skill Gap Report",
      description: "A comprehensive report on skill gaps and sustainable solutions tailored to mining-affected regions.",
      imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735309804/nick-morrison-FHnnjk1Yj7Y-unsplash_hwknl4.jpg",
      linkText: "Read more",
    },
  ];

  return (
    <div className="bg-red-600 px-10">
      <section className="container mx-auto py-10">
        <Heading text="MINING VILLAGES SUMMIT HIGHLIGHTS" color="text-white" bgColor="bg-[white]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group ring-1 ring-red-600 flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl hover:ring-white bg-white hover:bg-red-600 transition-all duration-300"
            >
              <div className="p-6 transition-all duration-300 group-hover:bg-red-600">
                <p className="text-2xl font-bold flex justify-start items-center uppercase text-red-600 group-hover:text-white mb-2 transition-all duration-300">
                  {categoryIcons[item.category]}
                  {item.category}
                </p>
                <h2 className="text-lg font-semibold mb-4 text-red-600 group-hover:text-white transition-all duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-700 group-hover:text-white mb-6 transition-all duration-300">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-900 group-hover:text-white hover:underline transition-all duration-300"
                >
                  {item.linkText} →
                </a>
              </div>

              {/* Image Section */}
              {item.imageUrl && (
                <div
                  className="h-48 relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <div className="absolute top-0 left-[10%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white group-hover:border-t-red-600 transition-all duration-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Highlights;