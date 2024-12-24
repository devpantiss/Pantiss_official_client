import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Heading from "../../Common/Heading";

const data = [
    {
        id: "1",
        name: "Prof. Dr. Narayan Chandra Nayak",
        designation: "HoD, School of Humanities & Social Sciences",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040837/Dr.Narayan_Nayak_jarvun.png",
        org: "IIT, Kharagpur",
    },
    {
        id: "2",
        name: "Prof. Dr. Bhuputra Panda",
        designation: "Additional Professor, IIPH",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Bhuputra_svsb7e.png",
        org: "Ministry of Health & Public Welfare",
    },
    {
        id: "3",
        name: "Shri Amarendra Khatua, IFS",
        designation: "Former External Affairs Secretary",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Amarendra_khatua_p2crrs.png",
        org: "Govt. of India",
    },
    {
        id: "4",
        name: "Prof. Bipin Jojo",
        designation: "Dean, School of Social Sciences",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Bipin_jojo_q8kbv1.png",
        org: "TISS-Mumbai",
    },
    {
        id: "5",
        name: "Braja Kishore Nayak",
        designation: "Director (Financial Inclusion)",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Braja_Kishore_nayak_eqprwr.jpg",
        org: "State Bank of India",
    },
    {
        id: "6",
        name: "Prof. Dr. S. Sivaraju",
        designation: "Chairperson, Center of Excellence, CSR",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040837/S.Sivaraju_saemh5.png",
        org: "TISS-Mumbai",
    },
    {
        id: "7",
        name: "Prof. Dr. Ashutosh Pradhan",
        designation: "HoD, School of Social Work",
        img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Ashutosh_Pradhan_yjq9pf.png",
        org: "Central University, Himachal Pradesh",
    }
];

const EventsSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows:false,
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
            style={{ backgroundImage: "url('https://pantiss.com/wp-content/uploads/2022/08/special.jpg')" }} // Replace with your image URL
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col justify-center items-center lg:mx-auto px-4">
                <Heading text="OUR ADVISORY BOARD" color="text-white" bgColor="bg-red-600"/>

                {/* Slider */}
                <div className="w-full lg:w-[1300px] md:w-[768px]">
                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className="lg:py-8 w-full bg-transparent"
                    >
                        {data.map((ad, index) => (
                            <div key={index} className="flex items-center p-5">
                                <div className="max-w-sm h-[280px] rounded-lg shadow-lg bg-transparent ring-1 ring-white">
                                    <div className="flex justify-center pt-5">
                                        <img
                                            className="w-24 h-24 rounded-full border-2 border-gray-300"
                                            src={ad.img}
                                            alt={ad.name}
                                        />
                                    </div>
                                    <div className="px-6 py-4 text-center">
                                        <div className="font-bold text-white text-xl mb-2">{ad.name}</div>
                                        <p className="mt-2 text-white">{ad.designation}</p>
                                        <p className="mt-1 text-white">{ad.org}</p>
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

export default EventsSlider;
