import React from 'react';
import Heading from '../../Common/Heading';

// Component for individual advisor card
const AdvisorCard = ({ imageUrl, name, title, organization, text }) => {
    return (
        <div className="bg-red-600 group hover:ring-1 hover:ring-red-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Image Section */}
            <div className="h-56 z-10 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${name}`}
                    className="w-full h-56 object-cover"
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
            name: "Shri Amarendra Khatua, IFS",
            designation: "Former External Affairs Secretary",
            img: "https://pantiss.com/wp-content/uploads/2022/08/adv1-e1661441336280.png",
            org: "Govt. of India",
        },
        {
            id: "2",
            name: "Prof. Bipin Jojo",
            designation: "Dean, School of Social Sciences",
            img: "https://pantiss.com/wp-content/uploads/2022/08/adv2-e1661441239680.png",
            org: "TISS-Mumbai",
        }, 
        {
            id: "3",
            name: "Braja Kishore Nayak",
            designation: "Director (Financial Inclusion)",
            img: "https://pantiss.com/wp-content/uploads/2022/09/PIC-6-e1662053241962.jpeg",
            org: "State Bank of India",
        },
        {
            id: "4",
            name: "Prof. Dr. S. Sivaraju",
            designation: "Chairperson, Center of Excellence, CSR",
            img: "https://pantiss.com/wp-content/uploads/2022/09/PIC-11.png",
            org: "TISS-Mumbai",
        },
        {
            id: "5",
            name: "Prof. Dr. Ashutosh Pradhan",
            designation: "HoD, School of Social Work",
            img: "https://pantiss.com/wp-content/uploads/2022/09/PIC-8.png",
            org: "Central University, Himachal Pradesh",
        },
        {
            id: "6",
            name: "Prof. Dr. Narayan Chandra Nayak",
            designation: "HoD, School of Humanities & Social Sciences",
            img: "https://pantiss.com/wp-content/uploads/2022/08/adv7.png",
            org: "IIT, Kharagpur",
        },
        {
            id: "7",
            name: "Prof. Dr. Bhuputra Panda",
            designation: "Additional Professor, IIPH",
            img: "https://pantiss.com/wp-content/uploads/2022/09/PIC-12.png",
            org: "Ministry of Health & Public Welfare",
        },        
        {
            id: "8",
            name: "Shri Pramod Sahoo",
            designation: "IAS",
            img: "https://pantiss.com/wp-content/uploads/2022/08/PinClipart.com_tie-clip-art_5224612-e1670427525472.png",
            org: "Government of India",
        },
        {
            id: "9",
            name: "Prof. D.V. Ramana",
            designation: "Professor of Accounting",
            img: "https://pantiss.com/wp-content/uploads/2022/09/PIC-13-e1670429519669.jpg",
            org: "Central University, Himachal Pradesh",
        },
        {
            id: "10",
            name: "Shri. Pratyush Panda",
            designation: "Director L&T",
            img: "https://pantiss.com/wp-content/uploads/2022/08/PinClipart.com_tie-clip-art_5224612-e1670427525472.png",
            org: "",
        },
        {
            id: "11",
            name: "Shri. Pratyush Panda",
            designation: "Director L&T",
            img: "https://pantiss.com/wp-content/uploads/2022/08/PinClipart.com_tie-clip-art_5224612-e1670427525472.png",
            org: "",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Heading text="OUR ADVISORY BOARD" color="text-black" bgColor="bg-red-600" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
