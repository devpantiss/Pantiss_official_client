import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Heading from '../../Common/Heading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './milestones.css';

const milestonesData = [
    {
        year: "2021",
        title: "Incorporated",
        description: "Incorporated on July 27, 1932 under the Companies Act, 1913 as The Ganga Sugar Corporation Limited.",
        imageUrl: "https://www.trivenigroup.com/files/milestone/1932.webp"
    },
    {
        year: "2022",
        title: "Sugar Business",
        description: "Khatauli sugar plant acquired.",
        imageUrl: "https://www.trivenigroup.com/files/milestone/1952.webp"
    },
    {
        year: "2023",
        title: "Sugar Business",
        description: "Khatauli sugar plant acquired.",
        imageUrl: "https://www.trivenigroup.com/files/milestone/1952.webp"
    },
    {
        year: "2024",
        title: "Sugar Business",
        description: "Khatauli sugar plant acquired.",
        imageUrl: "https://www.trivenigroup.com/files/milestone/1952.webp"
    },
];

// Custom arrows for navigation
const PreviousArrow = ({ onClick }) => (
    <div className="custom-arrow absolute -bottom-[70px] lg:-bottom-12 cursor-pointer left-[33%]" onClick={onClick}>
        <FaChevronLeft className="text-red-600 hover:text-red-700 text-[30px] transition-all duration-300" />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow absolute -bottom-[70px] lg:-bottom-12 cursor-pointer right-[32%]" onClick={onClick}>
        <FaChevronRight className="text-red-600 hover:text-red-700 text-[30px] transition-all duration-300 z-50" />
    </div>
);

const Milestones = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <button className="text-lg -mx-3 text-gray-600 hover:text-red-600 transition-all duration-300 z-50">
                {milestonesData[i].year}
            </button>
        ),
        dotsClass: "slick-dots custom-dots", // custom layout for dots
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <div className="flex flex-col justify-center items-center container pb-12 mx-auto">
            <Heading text="Milestones" color="text-black" bgColor="bg-red-600" />
            <div className="flex py-12 justify-center items-center ">
                <Slider {...settings} className='py-12 w-[380px] md:w-[768px] lg:w-[1200px]'>
                    {milestonesData.map((milestone, index) => (
                        <div key={index} className="flex justify-center items-center w-[400px] lg:w-[900px] mx-auto">
                            <div className="flex flex-col lg:flex-row justify-center items-center">
                                <div className="w-full lg:w-1/2 lg:mb-4">
                                    <img
                                        src={milestone.imageUrl}
                                        alt={milestone.year}
                                        className="w-full lg:h-72 h-44 object-contain"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 mt-5">
                                    <h3 className="text-xl font-semibold">{milestone.year}</h3>
                                    <p className="text-lg text-gray-700">{milestone.title}</p>
                                    <p className="text-md text-gray-500 mt-2">{milestone.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Milestones;
