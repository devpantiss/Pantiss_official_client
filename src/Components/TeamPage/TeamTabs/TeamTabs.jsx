import React, { useState } from "react";

const teamData = [
  // Leadership
  {
    name: "Dr. Sanjaya Pradhan",
    title: "Principal Advisor (Risk Management & Global Representation)",
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
    name: "Mr. Deepan Digal",
    title: "Chief Business Officer",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618716/deepan_2_pliefj.jpg",
    department: "leadership",
  },
  {
    name: "Mrs. Indumati Nanda",
    title: "Chief Strategy Officer",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618509/indumaam_2_ilh3gq.jpg",
    department: "leadership",
  },

  // Finance
  {
    name: "Mr. Deepan Digal",
    title:
      "Lead, Grants Management, Global Resource moilization and Partnership",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618716/deepan_2_pliefj.jpg",
    department: "finance",
    subDept: "Finance",
  },
  {
    name: "Ms. Purnima Tarei",
    title: "Co-Lead, Finance & Accounting",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619119/poonam_2_mzxtry.jpg",
    department: "finance",
    subDept: "Finance",
  },
  {
    name: "Mr. Bhuleshwar Mandal",
    title: "Associate, Procurement & Facilities",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618948/mondol_2_mmbbbu.jpg",
    department: "finance",
    subDept: "Finance",
  },

  // Human Resources
  {
    name: "Mr. Basant Ku. Sahoo",
    title: "Lead, People, Culture and Inclusion",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
    department: "finance",
    subDept: "Human Resources",
  },
  {
    name: "Ms. Manasi Behera",
    title: "Associate, Recruitment, Learning & Performance",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760005985/57d13a34-2e55-4da8-8a33-ed03e9943eb6_l6djf9.png",
    department: "finance",
    subDept: "Human Resources",
  },
  {
    name: "Ms. Padmini Kumari Bisoyi",
    title:
      "Co-Lead, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620118/Padmini_2_d1jkc5.jpg",
    department: "finance",
    subDept: "Human Resources",
  },

  // Communication
  {
    name: "Mr. Jitendra Barik",
    title: "Lead, Media & Public Relations",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759923436/ca8120c3-f598-4ca1-a4ac-4f2743c2661c_kxmusm.png",
    department: "finance",
    subDept: "Communication",
  },
  {
    name: "Mr. Jabis Ranjan Sahu",
    title: "Co-Lead, Digital Communications",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096847/jabis_2_n06hpe.jpg",
    department: "finance",
    subDept: "Communication",
  },
  {
    name: "Mr. Soumyashree Debabrata Jena",
    title: "Associate, Events & Campaigns",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620361/Soumya_2_xlasuk.jpg",
    department: "finance",
    subDept: "Communication",
  },

  // Project Management
  {
    name: "Mr. Alok Chandra Das",
    title: "Lead, (Planning, Policy & Governance)",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619653/Alok_2_wvhyt2.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Rahul Nayak",
    title: "Lead, (Technical, Vocational & Educational Training)",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097567/rahul_2_bct1yz.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Gangadhar Bej",
    title: "Co-Lead, (Ultra Poor Graduation (Livelihood & Enterprise))",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097548/a2298662-3356-4d17-a214-232b403e00d4_2_vmhfeu.jpg",
    department: "projectManagement",
  },
  {
    name: "Mr. Sudipta Kumar Behera",
    title: "Lead, (Health & Nutrition)",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760004380/15f252c1-84e4-4862-9697-a2574627d9d1_wxo3cv.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Dwarka Prasad",
    title: "Lead, (Water & Sanitation)",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759942178/dc6111f1-1097-47e1-bafc-e24ccc2d9098_dmckxl.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Manoj Panda",
    title: "Lead, (Environment & Ecology)",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620253/manoj_2_enavbz.jpg",
    department: "projectManagement",
  },


  // Monitoring, Evaluation & Compliance
  {
    name: "Mr. Braja Kishore Nayak",
    title: "Lead, Social Compliance & Safeguarding",
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
    name: "Ms. Padmini Kumari Bisoyi",
    title:
      "Co-Lead, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620118/Padmini_2_d1jkc5.jpg",
    department: "monitoring",
  },
  {
    name: "Ms. Jayashree Satpathy",
    title: "Lead, Legal Compliance",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1759945232/035f6b35-4e09-488f-a9b7-85dcc629abd0_y6puhn.png",
    department: "monitoring",
  },

  // knowledge
  {
    name: "Mr. Ashish Kumar Mishra",
    title: "Lead, Capacity Building and Knowledge management",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096444/ashish_2_c5ruxq.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Aditya Kumar Sahu",
    title: "Lead, Software Development & Data Analytics",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760098073/f3bb59f9-ab2e-4c27-9719-d467f8794686_2_wpbgw4.jpg",
    department: "knowledge",
  },
  {
    name: "Mr. Rituraj Tarei",
    title: "Lead, Innovation & Social Good",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096656/rituraj_3_i1wfve.jpg",
    department: "knowledge",
  },

  // Regional/State Operations
  {
    name: "Mr. Jalandhar Mohanty",
    title: "Lead, Anugul",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095558/jalandhar_2_1_b8x99s.jpg",
    department: "region",
  },
  {
    name: "Mr. Mukesh Singh",
    title: "Lead, Bokaro",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097703/mukessh_2_p4kfmr.jpg",
    department: "region",
  },
  {
    name: "Mr. Titan Sahoo",
    title: "Lead, Koderma",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619899/titan_2_bdytme.jpg",
    department: "region",
  },
  {
    name: "Mr. Tushar Ranjan Ojha",
    title: "Lead, Dhanbad",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095938/tushar_2_apsaoi.jpg",
    department: "region",
  },
  {
    name: "Mr. Sudarshan Barik",
    title: "Lead, Jajapur",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619794/Sudarshan_2_geimdd.jpg",
    department: "region",
  },
  {
    name: "Mr. Bikun Pradhan",
    title: "Lead, Jharsuguda",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095802/bikun_2_iaf6sc.jpg",
    department: "region",
  },
  {
    name: "Mr. Bikram Keshari Gouda",
    title: "Lead, Sundargarh",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096195/bikram_2_ufeeka.jpg",
    department: "region",
  },
  {
    name: "Mr. Trupti Ranjan Samal",
    title: "Lead, Keonjhar",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095697/trupti_ranjan_2_v74nbw.jpg",
    department: "region",
  },
  {
    name: "Mr. Yagnesh Kumar Nanda",
    title: "Lead, Kalahandi",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096329/yagnesh_2_lmjxag.jpg",
    department: "region",
  },

  // founders office
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
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761141736/f293abce-5c3f-4fa3-80b4-b3cc2794450a_2_eb4gde.jpg",
    department: "foundersOffice",
  },
];

const TeamTabs = () => {
  const [activeTab, setActiveTab] = useState("leadership");

  const tabs = [
    { label: "Leadership & Strategy", key: "leadership" },
    { label: "Founders Office", key: "foundersOffice" },
    { label: "Project Management", key: "projectManagement" },
    { label: "Monitoring, Evaluation & Compliances", key: "monitoring" },
    { label: "Finance, HR & Communication", key: "finance" },
    { label: "Knowledge Management & Analytics", key: "knowledge" },
    { label: "Regional/State Operations", key: "region" },
  ];

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

  // Helper component to render cards grid
  const TeamGrid = ({ members }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 mt-4">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-red-600 group hover:ring-1 hover:ring-red-600 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="h-[500px] w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-filter duration-300"
            />
          </div>
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
  );

  const filteredTeam = teamData.filter(
    (member) => member.department === activeTab
  );

  const renderFinanceHRComm = () => {
    const finance = filteredTeam.filter((m) => m.subDept === "Finance");
    const hr = filteredTeam.filter((m) => m.subDept === "Human Resources");
    const comm = filteredTeam.filter((m) => m.subDept === "Communication");

    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Finance</h2>
          <TeamGrid members={finance} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Human Resources
          </h2>
          <TeamGrid members={hr} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Communication
          </h2>
          <TeamGrid members={comm} />
        </div>
      </div>
    );
  };

  const renderRegion = () => {
    const odishaDistricts = [
      "Anugul",
      "Jajapur",
      "Jharsuguda",
      "Sundargarh",
      "Keonjhar",
      "Kalahandi",
    ];
    const jharkhandDistricts = ["Bokaro", "Koderma", "Dhanbad"];

    const odisha = filteredTeam.filter((m) =>
      odishaDistricts.some((d) => m.title.includes(d))
    );
    const jharkhand = filteredTeam.filter((m) =>
      jharkhandDistricts.some((d) => m.title.includes(d))
    );

    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Odisha Districts
          </h2>
          <TeamGrid members={odisha} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Jharkhand Districts
          </h2>
          <TeamGrid members={jharkhand} />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (activeTab === "finance") return renderFinanceHRComm();
    if (activeTab === "region") return renderRegion();
    return <TeamGrid members={filteredTeam} />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      {/* Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 font-semibold rounded-md transition-colors duration-200 ${
                activeTab === tab.key
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4">{renderContent()}</div>
    </div>
  );
};

export default TeamTabs;
