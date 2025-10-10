import React, { useState } from "react";

// All team data with department field for filtering
const teamData = [
  {
    name: "Dr. Sanjaya Pradhan",
    title: "Principal Advisor",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759947969/cc297831-f331-4ac3-ba10-5ab3856b01c1_fusziy.png",
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
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760007000/0e6193c8-789c-473b-a490-b1a3977a848b_cs9clk.png",
    department: "finance",
  },
  {
    name: "Mr. Deepan Digal",
    title:
      "Lead, Grants Management, Global Resource moilization and Partnership",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759943135/dcd315c1-4d8b-4594-a354-e10fe8011144_c1zdli.png",
    department: "finance",
  },
  {
    name: "Mr. Basant Ku. Sahoo",
    title: "Lead, People, Culture and Communications",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760003772/9fd1c4b4-a9c4-4356-ab90-606b8c9e0a91_isapwh.png",
    department: "finance",
  },
  {
    name: "Ms. Purnima Tarei",
    title: "Financial Controller",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760003774/e9f533bf-4dd0-4a47-9f77-3978e8d27793_qukdgt.png",
    department: "finance",
  },
  {
    name: "Mr. Bhuleshwar Mandal",
    title: "Associate, Social Compliance and Safeguarding",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759943839/51e2e5c6-ff06-4f07-89e9-392db715f27d_oxl7si.png",
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
    title: "Lead, Placements Cell",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759923436/ca8120c3-f598-4ca1-a4ac-4f2743c2661c_kxmusm.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Alok Chandra Das",
    title: "Center Director, Jharsuguda",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760006607/eb2d5f20-6ec2-4cba-bc88-87e2cefa4fa4_lfkmoh.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Sudarshan Barik",
    title: "Chief Mobilizer, Jajpur Center",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759923511/f7efbb71-06f4-4c7e-b615-c3597a38a995_fhxbak.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Jabis Ranjan Sahu",
    title: "MIS Coordinator, Jajpur Center",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096847/jabis_2_n06hpe.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Titan Sahoo",
    title: "MIS Coordinator, Jajpur Center",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760007165/fb183982-a074-4abf-b551-ad6f732c0f75_qovvrv.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Sudipto Kumar Behera",
    title: "Lead, Livelihood Division",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760004380/15f252c1-84e4-4862-9697-a2574627d9d1_wxo3cv.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Bikun Pradhan",
    title: "Lead, Livelihood Division",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759998419/8b326100-c1bc-471e-81d0-48d6991b18f4_wysij9.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Manoj Panda",
    title: "Lead, Livelihood Division",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759924080/7d5e512a-34ca-4e5f-b1da-3db5e235c494_fnczln.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Soumyashree Debabrata Jena",
    title: "Lead, Livelihood Division",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759998420/ad9aac63-9bc1-4b7d-9ec4-a6f5d66f9ff5_bpprzn.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Braja Kishore Nayak",
    title: "Lead, Internal Auditor",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759943702/6868ccf4-278a-4061-9675-717ef1176ca8_go7pns.png",
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
    name: "Ms. Padmini Kumari Bisoyi",
    title: "Co-Lead, Monitoring, Evaluation, Accountability & Learning",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759945381/d67ce149-a4ef-4d96-8de9-9893abf1ae8f_rchpc7.png",
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
    name: "Mr. Chhatrapati Shivaji Jena",
    title: "Head, Legal & Compliance",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Chhatrapati-Sibaji-Jena-.jpeg",
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
    title: "Trainer, (Electrician)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096329/yagnesh_2_lmjxag.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Bikram Keshari Gouda",
    title: "Trainer, (HEMM Mechanics)",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096195/bikram_2_ufeeka.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Tushar Ranjan Ojha",
    title: "Data Research & Analyst",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095938/tushar_2_apsaoi.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Jalandhar Mohanty",
    title: "Data Research & Analyst",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095558/jalandhar_2_1_b8x99s.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Bikun Pradhan",
    title: "Data Research & Analyst",
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095802/bikun_2_iaf6sc.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Trupti Ranjan Samal",
    title: "Data Research & Analyst",
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