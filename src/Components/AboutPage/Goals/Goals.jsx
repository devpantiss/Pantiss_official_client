import React from "react";

const Goals = () => {
    return (
        <div className="relative overflow-hidden bg-fixed bg-cover bg-center bg-black/50"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726207876/wallpaperflare.com_wallpaper_qkrzdz.jpg')`,
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Parallax background section */}
            <div className="container mx-auto w-full h-[500px] px-6 py-8 flex flex-col justify-center items-start text-white">
                <h1 className="text-4xl font-bold">PANTISS GROUP</h1>
                <p className="mt-4 w-[400px]">
                    We are one of the largest integrated sugar manufacturers in India and a market leader
                    in our engineering businesses, spanning power transmission, water & wastewater treatment solutions, and defence.
                </p>
                {/* Content section */}
                <div className="flex justify-start gap-x-16 py-16">
                    {/* Footer content */}
                    <div className="text-left">
                        <div className="text-5xl font-bold text-red-600">2020</div>
                        <div className="text-xl text-white mt-2">Year of Foundation</div>
                    </div>

                    <div className="text-left">
                        <div className="text-5xl font-bold text-red-600">9</div>
                        <div className="text-xl text-white mt-2">World-Class Facilities</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goals;
