import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Heading from "../../Common/Heading";

const data = [
    {
        id: "1",
        name: "Kutumb India",
        desc: "An Exclusive 5 star Co-living space for Mining and Industrial workers.",
        img: "https://pantiss.com/wp-content/uploads/2022/08/se2a.png",
    },
    {
        id: "2",
        name: "PANTISS EduVasi",
        desc: "Competitive Launching Plat form for Green C & D technical post in mining & allied industry",
        img: "https://pantiss.com/wp-content/uploads/2022/08/se4a.png",
    },
    {
        id: "3",
        name: "Mo WASH Company",
        desc: "An Aggregator for goods to water, Sanitation & hygiene",
        img: "https://pantiss.com/wp-content/uploads/2023/05/Mo-WaSH-Co-200x200.png",
    },
    {
        id: "4",
        name: "E-Kalakaar",
        desc: "DIndia’s largest platform for Traditional artist",
        img: "https://pantiss.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-09-at-17.40.18-200x160.jpg",
    },
    {
        id: "5",
        name: "PANTISS Fish",
        desc: "Rejuvenating Mining Ponds with Aquaculture",
        img: "https://pantiss.com/wp-content/uploads/2022/09/PIC-4.jpg",
    },
];

const OurEnterprise = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section
            className="relative py-12 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.postimg.cc/V6JHqQzZ/arun-kv-s-Gx-JK1a6-Nds-unsplash.jpg')" }} // Replace with your image URL
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 container flex flex-col justify-center items-center lg:mx-auto px-4">
                <Heading text="OUR SOCIAL ENTERPRISES" color="text-white" bgColor="bg-red-500"/>

                {/* Slider */}
                <div className="w-full lg:w-[1300px] md:w-[768px]">
                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className="lg:py-4 w-full bg-transparent"
                    >
                        {data.map((ad, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="max-w-sm h-[250px] rounded-lg overflow-hidden shadow-lg bg-black/50">
                                    <div className="flex justify-center mt-6">
                                        <img
                                            className="w-32 h-24 rounded-md ring-1 ring-red-600"
                                            src={ad.img}
                                            alt={ad.name}
                                        />
                                    </div>
                                    <div className="px-6 py-4 text-center">
                                        <div className="font-bold text-white text-xl mb-2">{ad.name}</div>
                                        <p className="mt-2 text-white">{ad.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default OurEnterprise;
