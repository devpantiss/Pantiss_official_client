import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Heading from '../../Common/Heading';




const data = [
    {
        id: "1",
        img: "https://pantiss.com/wp-content/uploads/2022/08/mission_img-sm.png",
        txt: "We envision to accelerate the world's transition to a sustainable development. To inspire healthier communities by connecting people as a leading policy think tank and a knowledge hub for development sector in India.",
    },
    {
        id: "2",
        img: "https://pantiss.com/wp-content/uploads/2022/08/vision_img-sm.png",
        txt: "A world where everyone has a decent and equal place to live, have rights to developed own community and nation and have local opportunity, growth, and impact for a better health and wellbeing.",
    },
    {
        id: "3",
        img: "https://pantiss.com/wp-content/uploads/2022/08/goal-sm.png",
        txt: "We believe in providing the best out of best services to our clients & partners. Because we Always believe that our beneficiaries’ success is our success. Also, to become a world leader at connecting people to ensure the right to survival, protection, development, and participation.",
    },
];


const Goals = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
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
            style={{ backgroundImage: "url('https://pantiss.com/wp-content/uploads/2022/08/testimonials-bg.jpg')" }} // Replace with your image URL
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 container flex flex-col justify-center items-center lg:mx-auto px-4">
                {/* <Heading text="OUR ADVISORY BOARD" color="text-white" bgColor="bg-red-600"/> */}

                {/* Slider */}
                <div className="w-full lg:w-[1300px] md:w-[768px]">
                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className="lg:py-8 w-full bg-transparent"
                    >
                        {data.map((ad, index) => (
                            <div key={index} className="flex items-center p-5">
                                <div className="max-w-sm rounded-lg h-[350px] shadow-lg bg-transparent ring-1 ring-white">
                                    <div className="flex justify-center pt-5">
                                        <img
                                            className="w-24 h-24"
                                            src={ad.img}
                                            alt={ad}
                                        />
                                    </div>
                                    <div className="px-6 py-4 text-center">
                                        <p className="mt-1 text-white text-justify">{ad.txt}</p>
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

export default Goals;