import React from 'react';

const Missions = () => {
    return (
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col justify-center items-center py-12 px-4 lg:gap-x-12 sm:px-6 lg:px-8">
            {/* Mission Section */}
            <div className="mb-12">
                <h2 className="text-4xl pl-3 font-bold text-left text-red-600 -mb-2">Mission</h2>

                <div className="w-[300px] h-[330px] flex flex-col justify-center items-left p-6 bg-red-600 rounded-lg shadow-lg">
                    <img className="w-16 h-16" src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726210514/Screenshot_2024-09-13_121948-removebg-preview_jf4xnu.png" alt="Icon" />
                    <p className="mt-2 text-left text-white">We're driven to fast-track the world’s journey toward sustainable development. Our mission is to inspire vibrant, healthier communities by bringing people together as a leading policy think tank and knowledge hub, championing development across India’s dynamic landscape.</p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="mb-12">
                <h2 className="text-4xl pl-3 font-bold text-left text-red-600 -mb-2">Vision</h2>
                <div className="w-[300px] h-[330px] flex flex-col justify-center items-left p-6 bg-red-600 rounded-lg shadow-lg">
                    <img className="w-16 h-16" src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726210514/Screenshot_2024-09-13_122158-removebg-preview_wga7hy.png" alt="Icon" />
                    <p className="mt-2 text-left text-white">We envision a world where everyone has the right to a decent and equal place to live, empowered to shape their own communities and nations. A world where local opportunities ignite growth, drive meaningful impact, and foster a healthier, more vibrant future for all.</p>
                </div>
            </div>

            {/* Goal Section */}
            <div className="mb-12">
                <h2 className="text-4xl pl-3 font-bold text-left text-red-600 -mb-2">Goal</h2>
                <div className="w-[300px] h-[330px] flex flex-col justify-center items-left p-6 bg-red-600 rounded-lg shadow-lg">
                    <img className="w-16 h-16" src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726210513/Screenshot_2024-09-13_122312-removebg-preview_ok0df7.png" alt="Icon" />
                    <p className="mt-2 text-left text-white">We strive to deliver top-notch services, believing that our clients' success is our success. Our goal is to lead globally by connecting people, ensuring their right to survival, protection, development, and participation.</p>
                </div>
            </div>
        </div>
    );
};

export default Missions;
