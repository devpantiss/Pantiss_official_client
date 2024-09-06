import React from "react";
import Heading from "../../Common/Heading";

const Highlights = () => {
    const newsItems = [
        {
            category: "Events",
            title: "PAGA 1.0",
            description: "PAGA 1.0 2022, organized by PANTISS and UNICEF, focuses on accelerating climate change adaptation through the convergence of Just Transition and Circular Economy.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/Untitled-1024-%C3%97-768-px.png", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Impact Stories",
            title: "Elevating Mining Expertise: Skill Development in Sukinda-Danagadi Chromite Region, Jajpur District",
            description: "A review of evidence, bottlenecks and opportunities to meeting sustainable development Goals for mining workers.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-6.48.36-PM.jpeg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Media & Awards",
            title: "India Book of Record",
            description: "In a remarkable display of collective hygiene, 5000 youths came together to wash their hands simultaneously on Global Handwashing Day.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/Untitled-1024-%C3%97-768-px-1.png", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Our Blogs",
            title: "Youth in action for forest fire in niyamgiri hill",
            description: "A Story of Hope: Indigenous Communities Leading the Way in Forest Fire Prevention",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-5.28.26-PM.jpeg", // Replace with the actual image path
            linkText: "View More",
        },
    ];

    return (
        <section className="bg-white py-10">
            <Heading text="OUR HIGHLIGHTS" color="text-black" bgColor="bg-[#2A675C]" />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                {newsItems.map((item, index) => (
                    <div
                        key={index}
                        className={`ring-1 ring-[#2A675C] flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl ${item.special ? "md:row-span-2 bg-blue-100" : "bg-white"}`}
                    >
                        {/* Content Section */}
                        <div className="p-6">
                            <p className="text-xs font-bold uppercase text-gray-600 mb-2">{item.category}</p>
                            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                            <p className="text-gray-700 mb-6">{item.description}</p>
                            <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">
                                {item.linkText} →
                            </a>

                            {/* Larger Triangle pointing downwards */}

                        </div>

                        {/* Image Section */}
                        <div className="h-48 relative bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                            <div
                                className="absolute top-[0] left-[10%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white"
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Highlights;
