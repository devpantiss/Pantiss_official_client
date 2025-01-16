import React from "react";
import Heading from "../../Common/Heading";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbBriefcaseFilled } from "react-icons/tb";
import { GiLifeJacket } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="container mx-auto py-8 px-10 flex flex-col justify-center items-center">
      <Heading
        text="JOIN THE BIGGEST NON-PROFIT FOR MINING VILLAGES"
        colors="text-white"
        bgColor="bg-red-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {/* Partner With Us */}
        <div className="flex flex-col px-4 py-2 bg-white rounded-md justify-center items-center group transition-all duration-300">
          <Link to="/careers" className="flex flex-col justify-center items-center">
            <div className="text-[#2A675C] text-6xl mb-4">
              <PiUsersThreeFill className="text-red-600" />
            </div>
            <h3 className=" text-lg text-red-600 font-semibold">
              PARTNER WITH US
            </h3>
          </Link>
        </div>

        {/* Career With Us */}
        <div className="flex flex-col px-4 py-2 bg-white rounded-md justify-center items-center group transition-all duration-300">
          <Link to="/careers" className="flex flex-col justify-center items-center">
            <div className="text-[#2A675C] text-6xl mb-4">
              <TbBriefcaseFilled className=" text-red-600" />
            </div>
            <h3 className="text-lg text-red-600 font-semibold">
              CAREER WITH US
            </h3>
          </Link>
        </div>

        {/* Internship */}
        <div className="flex flex-col px-4 py-2 bg-white rounded-md justify-center items-center group transition-all duration-300">
          <Link to="/programmes/internships" className="flex flex-col justify-center items-center">
            <div className="text-[#2A675C] text-6xl mb-4">
              <GiLifeJacket className="text-red-600" />
            </div>
            <h3 className="text-lg text-red-600 font-semibold">INTERNSHIP</h3>
          </Link>
        </div>

        {/* Visit Us */}
        <div className="flex flex-col px-4 py-2 bg-white rounded-md justify-center items-center  transition-all duration-300">
          <Link to="/contact-us" className="flex flex-col justify-center items-center">
            <div className="text-[#2A675C] text-6xl mb-4">
              <FaMapMarkerAlt className="text-red-600" />
            </div>
            <h3 className="text-lg text-red-600 font-semibold">VISIT US</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
