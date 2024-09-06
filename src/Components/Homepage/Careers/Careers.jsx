import React from "react";
import Heading from "../../Common/Heading";
// You can use an icon library like FontAwesome, or SVGs for these icons.

const Careers = () => {
    return (
        <div className="bg-white py-10">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <Heading text="JOIN THE BIGGEST NON-PROFIT FOR MINING VILLAGES" colors="text-white" bgColor="bg-[#2A675C]" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center lg:w-[900px]">
                    {/* Partner With Us */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            <img src="https://pantiss.com/wp-content/uploads/2022/08/partner-150x150.png" className="h-24"/>            
                        </div>
                        <h3 className="text-[#2A675C] text-lg font-semibold">PARTNER WITH US</h3>
                    </div>

                    {/* Career With Us */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            <img src="https://pantiss.com/wp-content/uploads/2022/08/careerimg-150x150.png" className="h-24"/>
                        </div>
                        <h3 className="text-[#2A675C] text-lg font-semibold">CAREER WITH US</h3>
                    </div>

                    {/* Internship */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            <img src="https://pantiss.com/wp-content/uploads/2022/08/internship-150x150.png" className="h-24"/>
                        </div>
                        <h3 className="text-[#2A675C] text-lg font-semibold">INTERNSHIP</h3>
                    </div>

                    {/* Visit Us */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-[#2A675C] text-6xl mb-4">
                            {/* Replace with an appropriate icon */}
                            <img src="https://pantiss.com/wp-content/uploads/2022/08/visit-150x150.png"  className="h-24"/>
                        </div>
                        <h3 className="text-[#2A675C] text-lg font-semibold">VISIT US</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
