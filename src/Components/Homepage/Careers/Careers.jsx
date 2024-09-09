import React from "react";
import Heading from "../../Common/Heading";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbBriefcaseFilled } from "react-icons/tb";
import { GiLifeJacket } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";




const Careers = () => {
    return (
        <div className="bg-white py-10">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <Heading text="JOIN THE BIGGEST NON-PROFIT FOR MINING VILLAGES" colors="text-white" bgColor="bg-[#2A675C]" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center lg:w-[900px]">
                    {/* Partner With Us */}
                    <div className="flex flex-col px-4 py-2 hover:ring-1 bg-red-600 hover:ring-red-600 hover:bg-white rounded-md justify-center items-center group transition-all duration-300">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            {/* <img src="https://pantiss.com/wp-content/uploads/2022/08/partner-150x150.png" className="h-24"/> */}
                            <PiUsersThreeFill className="text-white group-hover:text-red-600"/>
                        </div>
                        <h3 className="text-white text-lg group-hover:text-red-600 font-semibold">PARTNER WITH US</h3>
                    </div>

                    {/* Career With Us */}
                    <div className="flex flex-col px-4 py-2 hover:ring-1 bg-red-600 hover:ring-red-600 hover:bg-white rounded-md justify-center items-center group transition-all duration-300">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            {/* <img src="https://pantiss.com/wp-content/uploads/2022/08/careerimg-150x150.png" className="h-24"/> */}
                            <TbBriefcaseFilled className="text-white group-hover:text-red-600"/>
                        </div>
                        <h3 className="text-white text-lg group-hover:text-red-600 font-semibold">CAREER WITH US</h3>
                    </div>

                    {/* Internship */}
                    <div className="flex flex-col px-4 py-2 hover:ring-1 bg-red-600 hover:ring-red-600 hover:bg-white rounded-md justify-center items-center group transition-all duration-300">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            {/* <img src="https://pantiss.com/wp-content/uploads/2022/08/internship-150x150.png" className="h-24"/> */}
                            <GiLifeJacket className="text-white group-hover:text-red-600"/>
                        </div>
                        <h3 className="text-white text-lg group-hover:text-red-600 font-semibold">INTERNSHIP</h3>
                    </div>

                    {/* Visit Us */}
                    <div className="flex flex-col px-4 py-2 hover:ring-1 bg-red-600 hover:ring-red-600 hover:bg-white rounded-md justify-center items-center group transition-all duration-300">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            {/* <img src="https://pantiss.com/wp-content/uploads/2022/08/visit-150x150.png"  className="h-24"/> */}
                            <FaMapMarkerAlt className="text-white group-hover:text-red-600"/>
                        </div>
                        <h3 className="text-white text-lg group-hover:text-red-600 font-semibold">VISIT US</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
