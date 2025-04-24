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
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739294950/WhatsApp_Image_2025-02-11_at_10.58.44_PM_ie0jsf.jpg",
    department: "leadership",
  },
  // Finance
  {
    name: "Mrs. Indumati Nanda",
    title:
      "Lead Administration, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739263437/WhatsApp_Image_2025-02-11_at_12.58.56_PM_wu6mfq.jpg",
    department: "finance",
  },
  {
    name: "Mr. Deepan Digal",
    title:
      "Lead, Grants Management, Global Resource moilization and Partnership",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739187165/WhatsApp_Image_2025-02-10_at_3.32.06_PM_qd2kgs.jpg",
    department: "finance",
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
    name: "Ms. Manasi Behera",
    title: "Associate, Social Compliance and Safeguarding",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,h_800/v1739187166/WhatsApp_Image_2025-02-10_at_3.30.34_PM_t8vzmk.jpg",
    department: "finance",
  },
  // Project Management
  {
    name: "Mr. Rahul Nayak",
    title: "Lead, Education, Skills Development, and Migration",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739263524/WhatsApp_Image_2025-02-10_at_5.55.18_PM_vuyo98.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Dwarka Prasad",
    title: "Lead, Water, Sanitation, and Hygiene",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739299857/WhatsApp_Image_2025-02-12_at_12.17.30_AM_vs1erc.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Gangadhar Bej",
    title: "Co-Lead, Enterprises and Ultra Poor Graduation",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739187165/WhatsApp_Image_2025-02-10_at_3.28.17_PM_yfq0dp.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Aditya Kumar Sahu",
    title: "Co-Lead, Software Development (Social Impact & ICT)",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1744797244/WhatsApp_Image_2025-04-16_at_11.57.56_AM_liyoub.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Mukesh Singh",
    title: "Lead, Construction and Maintenance Department",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739260253/WhatsApp_Image_2025-02-11_at_1.07.34_PM_k1d0j9.jpg",
    department: "projectManagement",
  },
  // Monitoring
  {
    name: "Mr. Braja Kishore Nayak",
    title: "Lead, Internal Auditor",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040836/Braja_Kishore_nayak_eqprwr.jpg",
    department: "monitoring",
  },
  {
    name: "Ms. Padmini Kumari Bisoyi",
    title: "Lead, Monitoring, Evaluation, Accountability & Learning",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739187165/WhatsApp_Image_2025-02-10_at_1.17.52_PM_npxltv.jpg",
    department: "monitoring",
  },
  {
    name: "Ms. Jayashree Satpathy",
    title: "Associate Development Secretary to CEO",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771766/WhatsApp_Image_2025-02-13_at_1.52.50_PM_1_npx2n9.jpg",
    department: "monitoring",
  },
  {
    name: "Mr. Priyanshu Kumar",
    title: "Trainee Development Secretary to CEO",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771766/WhatsApp_Image_2025-02-13_at_1.52.50_PM_h2o6vf.jpg",
    department: "monitoring",
  },
  {
    name: "Ms. Pandia",
    title: "Co-Lead, MIS",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771767/WhatsApp_Image_2025-02-13_at_1.52.50_PM_h2o6vf.jp",
    department: "monitoring",
  },
  {
    name: "Mr. Chhatrapati Shivaji Jena",
    title: "Head, Legal & Compliance",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Chhatrapati-Sibaji-Jena-.jpeg",
    department: "monitoring",
  },
  // Knowledge
  {
    name: "Mr. Ashish Kumar Mishra",
    title: "Co-Lead, Capacity Building and Knowledge management",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739264129/WhatsApp_Image_2025-02-11_at_2.23.03_PM_1_no2bgc.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Rituraj Tarei",
    title: "Co-Lead, Product designing and Social Innovation",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739274160/WhatsApp_Image_2025-02-11_at_5.11.00_PM_x6jwuo.jpg",
    department: "knowledge",
  },
  {
    name: "Ms. Swasti",
    title: "Data Research & Analyst",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739274160/WhatsApp_Image_2025-02-11_at_5.11.00_PM_x6jwuo.jp",
    department: "knowledge",
  },
  {
    name: "Mr. Yagnesh Kumar Nanda",
    title: "Trainer, (Electrician)",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739274160/WhatsApp_Image_2025-02-11_at_5.11.00_PM_x6jwuo.jp",
    department: "knowledge",
  },
  {
    name: "Mr. Bikram Keshari Gouda",
    title: "Trainer, (HEMM Mechanics)",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739274160/WhatsApp_Image_2025-02-11_at_5.11.00_PM_x6jwuo.jp",
    department: "knowledge",
  },
  // Founders Office
  {
    name: "Mr. Mantu Nayak",
    title: "Personal Assistance to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Mantu-Nayak-e1670426980487.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Kishore",
    title: "Executive Assistant to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Rishita-Beura-e1670426885700.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Gautam Samanta",
    title: "Asst. Manager, MIS",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Khatua-e1670428211489.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Ms. Lucky Dandia",
    title: "-",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Khatua-e1670428211489.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Gandhi Beura",
    title: "Asst. Manager, MIS",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Khatua-e1670428211489.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Ms. Prajna Paramita Jena",
    title: "Asst. Manager, MIS",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Khatua-e1670428211489.jpeg",
    department: "foundersOffice",
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

  // Define tab options
  const tabs = [
    { label: "Leadership", key: "leadership" },
    { label: "Founders Office", key: "foundersOffice" },
    { label: "Project Management", key: "projectManagement" },
    { label: "Monitoring, Evaluation & Compliances", key: "monitoring" },
    { label: "Finance, HR & Communication", key: "finance" },
    { label: "Knowledge Management & Analytics", key: "knowledge" },
  ];

  // Function to split title at the first comma and add a line break
  const formatTitle = (title) => {
    const [firstPart, ...rest] = title.split(",");
    return (
      <>
        {firstPart}
        {rest.length > 0 && (
          <>
            <br />
            {rest.join(",")}
          </>
        )}
      </>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      {/* Tab Navigation */}
      <div className="relative mb-8">
        {/* Mobile view: scrollable tabs */}
        <div className="flex md:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-2">
          <div className="flex space-x-2 px-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 font-semibold whitespace-nowrap rounded-md transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleTabClick(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop view: two rows of 3 buttons */}
        <div className="hidden md:grid grid-cols-3 gap-2">
          {tabs.slice(0, 3).map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 font-semibold whitespace-nowrap rounded-md transition-colors duration-200 ${
                activeTab === tab.key
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-3 gap-2 mt-2">
          {tabs.slice(3, 6).map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 font-semibold whitespace-nowrap rounded-md transition-colors duration-200 ${
                activeTab === tab.key
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
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
              <div className="h-[400px] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 group-hover:bg-white group-hover:ring-1 group-hover:ring-red-600 bg-red-600">
                <h3 className="font-bold text-lg group-hover:text-red-600 text-white">
                  {member.name}
                </h3>
                <p className="text-sm group-hover:text-red-600 text-white leading-relaxed">
                  {formatTitle(member.title)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
