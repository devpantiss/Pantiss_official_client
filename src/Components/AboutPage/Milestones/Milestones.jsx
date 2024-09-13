import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Heading from '../../Common/Heading';

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
    // Add more milestone data as needed
];

// Custom arrows for navigation
const PreviousArrow = ({ onClick }) => (
    <div className="custom-arrow absolute -bottom-12 cursor-pointer left-[35%]" onClick={onClick}>
        <FaChevronLeft className="text-orange-500 hover:text-orange-700 text-[30px] transition-all duration-300" />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow absolute -bottom-12 cursor-pointer right-[31%]" onClick={onClick}>
        <FaChevronRight className="text-orange-500 hover:text-orange-700 text-[30px] transition-all duration-300" />
    </div>
);

const Milestones = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <button className="text-lg mx-3 text-gray-600 hover:text-orange-500 transition-all duration-300">
                {milestonesData[i].year}
            </button>
        ),
        dotsClass: "slick-dots custom-dots", // custom layout for dots
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <div className="bg- p-8 flex flex-col justify-center items-center container mx-auto">
        <Heading text="Milestones" color="text-black" bgColor="bg-red-600" />
        <div className="flex justify-center items-center">
                <Slider {...settings} className='w-[1200px]'>
                    {milestonesData.map((milestone, index) => (
                        <div key={index} className="flex justify-center items-center w-[900px] mx-auto">
                            <div className="flex justify-center items-center">
                                <div className="text-center w-1/2 mb-4">
                                    <img
                                        src={milestone.imageUrl}
                                        alt={milestone.year}
                                        className="w-full h-72 object-contain"
                                    />
                                </div>
                                <div className="w-1/2">
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
