import React from 'react';
import Heading from '../../Common/Heading';

// Component for individual advisor card
const AdvisorCard = ({ imageUrl, name, title, organization, text }) => {
    return (
        <div className="bg-red-600 group hover:ring-1 hover:ring-red-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Image Section */}
            <div className="h-[300px] z-10 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${name}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="p-4 z-20 group-hover:bg-white group-hover:ring-1 group-hover:ring-red-600 bg-red-600 h-[150px]">
                <h3 className="font-bold text-lg group-hover:text-red-600 text-white">{name}</h3>
                <p className="text-sm group-hover:text-red-600 text-white">{title}</p>
                <p className="text-sm group-hover:text-red-600 text-white">{organization}</p>
                <p className="mt-2 group-hover:text-red-600 text-white text-sm">{text}</p>
            </div>
        </div>
    );
};

// Component to render the grid layout of advisor cards
const AdvisoryLayout = () => {
    const data = [
        {
            id: "1",
            name: "Prof. Dr. Narayan Chandra Nayak",
            designation: "HoD, School of Humanities & Social Sciences",
            img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761730334/Dr.Narayan_Nayak_nwqqsr.png",
            org: "IIT, Kharagpur",
        },
        // {
        //     id: "2",
        //     name: "Prof. Dr. Bhuputra Panda",
        //     designation: "Additional Professor, IIPH",
        //     img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Bhuputra_svsb7e.png",
        //     org: "Ministry of Health & Public Welfare",
        // },
        // {
        //     id: "3",
        //     name: "Shri Amarendra Khatua, IFS",
        //     designation: "Former External Affairs Secretary",
        //     img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Amarendra_khatua_p2crrs.png",
        //     org: "Govt. of India",
        // },
        {
            id: "4",
            name: "Prof. Bipin Jojo",
            designation: "Dean, School of Social Sciences",
            img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761730273/Bipin_jojo_bwcp5e.png",
            org: "TISS-Mumbai",
        },
        // {
        //     id: "5",
        //     name: "Braja Kishore Nayak",
        //     designation: "Director (Financial Inclusion)",
        //     img: 
        //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Braja_Kishore_nayak_eqprwr.jpg",
        //     org: "State Bank of India",
        // },
        {
            id: "6",
            name: "Prof. Dr. S. Sivaraju",
            designation: "Chairperson, Center of Excellence, CSR",
            img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761730347/S.Sivaraju_bfpfhy.png",
            org: "TISS-Mumbai",
        },
        {
            id: "7",
            name: "Prof. Dr. Ashutosh Pradhan",
            designation: "HoD, School of Social Work",
            img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761730262/Ashutosh_Pradhan_p8hpnp.png",
            org: "Central University, Himachal Pradesh",
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Heading text="OUR ADVISORY BOARD" color="text-black" bgColor="bg-red-600" />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.map((advisor, index) => (
                    <AdvisorCard
                        key={index}
                        imageUrl={advisor.img}
                        name={advisor.name}
                        title={advisor.designation}
                        organization={advisor.org}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdvisoryLayout;
