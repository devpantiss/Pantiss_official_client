import React, { useState } from "react";

// All team data with department field for filtering
const teamData = [
  {
    name: "Dr. Sanjaya Pradhan",
    title: "Principal Advisor",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619304/sanjay_sir_2_bulab3.jpg",
    department: "leadership",
  },
  {
    name: "Mr. Stalin Nayak",
    title: "Founder & CEO",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739294950/WhatsApp_Image_2025-02-11_at_10.58.44_PM_ie0jsf.jpg",
    department: "leadership",
  },
  {
    name: "Mrs. Indumati Nanda",
    title:
      "Lead Administration, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618509/indumaam_2_ilh3gq.jpg",
    department: "finance",
  },
  {
    name: "Mr. Deepan Digal",
    title:
      "Lead, Grants Management, Global Resource moilization and Partnership",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618716/deepan_2_pliefj.jpg",
    department: "finance",
  },
  {
    name: "Mr. Basant Ku. Sahoo",
    title: "Lead, People, Culture and Communications",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
    department: "finance",
  },
  {
    name: "Ms. Purnima Tarei",
    title: "Financial Controller",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619119/poonam_2_mzxtry.jpg",
    department: "finance",
  },
  {
    name: "Mr. Bhuleshwar Mandal",
    title: "Associate, Grants and Finance Documentation",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618948/mondol_2_mmbbbu.jpg",
    department: "finance",
  },
  {
    name: "Ms. Manasi Behera",
    title: "Associate, Social Compliance and Safeguarding",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760005985/57d13a34-2e55-4da8-8a33-ed03e9943eb6_l6djf9.png",
    department: "finance",
  },
  {
    name: "Mr. Rahul Nayak",
    title: "Lead, Education, Skills Development, and Migration",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097567/rahul_2_bct1yz.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Dwarka Prasad",
    title: "Lead, Water, Sanitation, and Hygiene",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759942178/dc6111f1-1097-47e1-bafc-e24ccc2d9098_dmckxl.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Gangadhar Bej",
    title: "Co-Lead, Enterprises and Ultra Poor Graduation",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097548/a2298662-3356-4d17-a214-232b403e00d4_2_vmhfeu.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Aditya Kumar Sahu",
    title: "Co-Lead, Software Development (Social Impact & ICT)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760098073/f3bb59f9-ab2e-4c27-9719-d467f8794686_2_wpbgw4.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Mukesh Singh",
    title: "Lead, Construction and Maintenance Department",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097703/mukessh_2_p4kfmr.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Jitendra Barik",
    title: "Lead, Placements & Industry Engagement",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759923436/ca8120c3-f598-4ca1-a4ac-4f2743c2661c_kxmusm.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Alok Chandra Das",
    title: "Lead, Entrepreneurship Initiatives",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619653/Alok_2_wvhyt2.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Sudarshan Barik",
    title: "Co-Lead, Grassroots Engagement",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619794/Sudarshan_2_geimdd.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Jabis Ranjan Sahu",
    title: "Co-Lead, MIS & Data Management",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096847/jabis_2_n06hpe.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Titan Sahoo",
    title: "Center Manager, Kalahandi",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619899/titan_2_bdytme.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Sudipto Kumar Behera",
    title: "Lead, Skill & Livelihood Initiatives",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760004380/15f252c1-84e4-4862-9697-a2574627d9d1_wxo3cv.png",
    department: "projectManagement",
  },
  {
    name: "Ms. Padmini Kumari Bisoyi",
    title: "Co-Lead, Placements & Industry Engagement",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620118/Padmini_2_d1jkc5.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Manoj Panda",
    title: "Lead, Skill & Nutrition Initiatives",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620253/manoj_2_enavbz.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Soumyashree Debabrata Jena",
    title: "Co-Lead, MIS & Data MAnagement",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620361/Soumya_2_xlasuk.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Braja Kishore Nayak",
    title: "Lead, Internal Auditor",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619425/braja_2_l7wbb8.jpg",
    department: "monitoring",
  },
  {
    name: "Ms. Sushree Gayatri Jena",
    title: "Lead, Monitoring, Evaluation, Accountability & Learning",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760094963/WhatsApp_Image_2025-10-09_at_6.51.34_PM_jyqzas.jpg",
    department: "monitoring",
  },

  {
    name: "Ms. Jayashree Satpathy",
    title: "Associate Development Secretary to CEO",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759945232/035f6b35-4e09-488f-a9b7-85dcc629abd0_y6puhn.png",
    department: "monitoring",
  },
  {
    name: "Mr. Ashish Kumar Mishra",
    title: "Co-Lead, Capacity Building and Knowledge management",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096444/ashish_2_c5ruxq.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Rituraj Tarei",
    title: "Co-Lead, Product designing and Social Innovation",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096656/rituraj_3_i1wfve.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Yagnesh Kumar Nanda",
    title: "Lead-Trainer, (Welder)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096329/yagnesh_2_lmjxag.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Bikram Keshari Gouda",
    title: "Lead-Trainer, (Excavator Operator)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096195/bikram_2_ufeeka.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Tushar Ranjan Ojha",
    title: "Lead-Trainer, (Solar & EV Tech)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095938/tushar_2_apsaoi.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Jalandhar Mohanty",
    title: "Lead-Trainer, (Practical Trainer, Dumper/Tipper Operator)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095558/jalandhar_2_1_b8x99s.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Bikun Pradhan",
    title: "Lead-Trainer, (Electrical Trainer)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095802/bikun_2_iaf6sc.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Trupti Ranjan Samal",
    title: "Lead-Trainer, (HEMM Mechanic)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095697/trupti_ranjan_2_v74nbw.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Mantu Nayak",
    title: "Personal Assistance to CEO",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Mantu-Nayak-e1670426980487.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Gautam Samanta",
    title: "Administrative Assistant",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760705394/IMG-20251016-WA0075_2_n7sbx9.jpg",
    department: "foundersOffice",
  },
  {
    name: "Ms. Lucky Dandia",
    title: "Office Attendant",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Khatua-e1670428211489.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Gandhi Beura",
    title: "Executive Chauffeur",
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
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-filter duration-300"
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