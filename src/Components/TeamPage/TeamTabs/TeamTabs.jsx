import React, { useState } from "react";

// All team data with department field for filtering
const teamData = [
  {
    name: "Dr. Sanjaya Pradhan",
    title: "Principal Advisor",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Sanjay-Pradhan--e1670426425441.jpeg",
    department: "leadership",
  },
  {
    name: "Mr. Stalin Nayak",
    title: "Founder & CEO",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040843/stalin_sir_wbrcxh.jpg",
    department: "leadership",
  },
  {
    name: "Mrs. Indumati Nanda",
    title:
      "Lead Administration, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739263437/WhatsApp_Image_2025-02-11_at_12.58.56_PM_wu6mfq.jpg",
    department: "leadership",
  },
  {
    name: "Mr. Deepan Digal",
    title:
      "Lead, Grants Management, Global Resource moilization and Partnership",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739187165/WhatsApp_Image_2025-02-10_at_3.32.06_PM_qd2kgs.jpg",
    department: "leadership",
  },
  {
    name: "Mr. Rahul Nayak",
    title: "Lead, Education, Skills Development, and Migration",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739263524/WhatsApp_Image_2025-02-10_at_5.55.18_PM_vuyo98.jpg",
    department: "leadership",
  },
  {
    name: "Mr. Dwarka Prasad",
    title: "Lead, Water, Sanitation, and Hygiene",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040843/stalin_sir_wbrcxh.jpg",
    department: "leadership",
  },
  {
    name: "Ms. Padmini Kumari Bisoyi",
    title: "Lead, Monitoring, Evaluation, Accountability & Learning",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739187165/WhatsApp_Image_2025-02-10_at_1.17.52_PM_npxltv.jpg",
    department: "leadership",
  },
  {
    name: "Ms. Rishita Beura",
    title: "Executive Assistant to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Rishita-Beura-e1670426885700.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Mantu Nayak",
    title: "Personal Assistance to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Mantu-Nayak-e1670426980487.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Basant Ku. Sahoo",
    title: "Lead, People, Culture and Communications",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Smita-Swain-e1670427217351.jpg",
    department: "finance",
  },
  {
    name: "Ms. Purnima Tarei",
    title: "Financial Controller",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Indrajit-Swain-e1670427100442.jpeg",
    department: "finance",
  },
  {
    name: "Mr. Amiya Pradhan",
    title: "Co-Lead, Social Media Management",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739263631/WhatsApp_Image_2025-02-11_at_1.40.55_PM_lqz3jq.jpg",
    department: "finance",
  },
  {
    name: "Ms. Manasi Behera",
    title: "Associate, Social Compliance and Safeguarding",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,h_800/v1739187166/WhatsApp_Image_2025-02-10_at_3.30.34_PM_t8vzmk.jpg",
    department: "finance",
  },
  {
    name: "Mr. Gangadhar Bej",
    title: "Co-Lead, Enterprises and Ultra Poor Graduation",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739187165/WhatsApp_Image_2025-02-10_at_3.28.17_PM_yfq0dp.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Ashish Kumar Mishra",
    title: "Co-Lead, Capacity Building and Knowledge management",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739264129/WhatsApp_Image_2025-02-11_at_2.23.03_PM_1_no2bgc.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Aditya Kumar Sahu",
    title: "Co-Lead, Social Engineering And ICT (Software)",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_2700/v1739259904/IMG_20241107_112012980_HDR_pfmjkt.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Rituraj Tarei",
    title: "Co-Lead, Product designing and Social Innovation",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739274160/WhatsApp_Image_2025-02-11_at_5.11.00_PM_x6jwuo.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Mukesh Singh",
    title: "Lead, Construction and Maintenance Department",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739260253/WhatsApp_Image_2025-02-11_at_1.07.34_PM_k1d0j9.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Braja Kishore Nayak",
    title: "Lead, Internal Auditor",
    image:
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Braja_Kishore_nayak_eqprwr.jpg",
    department: "monitoring",
  },
  {
    name: "Ms. Jayashree Satpathy",
    title: "Associate Development Secretary to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Shreyash-Subudhi-e1670426713822.jpeg",
    department: "monitoring",
  },
  {
    name: "Mr. Priyanshu Kumar",
    title: "Trainee Development Secretary to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Nayak-e1670428129999.jpeg",
    department: "monitoring",
  },
  {
    name: "Mr. Bhuleshwar Mandal",
    title: "Asst. Manager, MIS",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Khatua-e1670428211489.jpeg",
    department: "monitoring",
  },
  {
    name: "Mr. Chhatrapati Shivaji Jena",
    title: "Head, Legal & Compliance",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Chhatrapati-Sibaji-Jena-.jpeg",
    department: "monitoring",
  },
];

const TeamTabs = () => {
  const [activeTab, setActiveTab] = useState("leadership");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter team members based on active tab (department)
  const filteredTeam = teamData.filter(
    (member) => member.department === activeTab
  );

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      {/* Tab Navigation */}
      <div className="flex justify-start md:justify-center overflow-x-auto mb-8 space-x-2 py-2 px-2">
        {[
          { label: "Leadership", key: "leadership" },
          { label: "Finance, HR & Communication", key: "finance" },
          { label: "Project Management", key: "projectManagement" },
          { label: "Monitoring, Evaluation & Compliances", key: "monitoring" },
          { label: "Founders Office", key: "foundersOffice" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 font-semibold whitespace-nowrap ${
              activeTab === tab.key ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex justify-center px-8 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
          {filteredTeam.map((member, index) => (
            <div
              key={index}
              className="bg-red-600 group hover:ring-1 hover:ring-red-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="h- z-10 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-full h-[400px] object-fit"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 z-20 group-hover:bg-white group-hover:ring-1 group-hover:ring-red-600 bg-red-600">
                <h3 className="font-bold text-lg group-hover:text-red-600 text-white">
                  {member.name}
                </h3>
                <p className="text-sm group-hover:text-red-600 text-white">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Location Buttons */}
      {/* <div className="flex justify-center space-x-4 mt-8">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Pantiss Odisha Team</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Pantiss Jharkhand Team</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Pantiss Chhattisgarh Team</button>
            </div> */}
    </div>
  );
};

export default TeamTabs;
