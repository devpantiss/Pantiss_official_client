import React, { useState } from "react";

const teamData = [
  // Leadership
   {
    name: "Mr. Stalin Nayak",
    title: "Founder cum CEO",
    image: "/assets/teams/stalinsir.jpg",
    department: "founders",
  },
  {
    name: "Dr. Sanjaya Pradhan",
    title:
      "Co-Founder cum Principal Advisor",
    image: "/assets/teams/sanjay.png",
    department: "founders",
  },
   {
    name: "Mr. Kunal Anand",
    title: "Co-Founder cum CTO",
    image: "/assets/teams/kunal.png",
    department: "founders",
  },

  {
    name: "Mr. Braja Kishore Nayak",
    title: "Chief Business Officer",
    image: "/assets/teams/braja.png",
    department: "leadership",
  },
  {
    name: "Mr. Deepan Digal",
    title: "Chief Operations Officer",
    image: "/assets/teams/deepan.png",
    department: "leadership",
  },
  {
    name: "Mrs. Indumati Nanda",
    title: "Chief Strategy Officer",
    image: "/assets/teams/indumaam.png",
    department: "leadership",
  },
  {
    name: "Mr. Priya Ranjan Das",
    title: "Chief Finance Officer",
    image: "/assets/teams/priyaranjan.png",
    department: "leadership",
  },

  // Finance
  {
    name: "Mr. Priya Ranjan Das",
    title: "Chief Finance Officer",
    image: "/assets/teams/priyaranjan.png",
    department: "finance",
    subDept: "Finance",
  },
  {
    name: "Ms. Purnima Tarei",
    title: "Co-Lead, Finance & Accounting",
    image: "/assets/teams/poonam.png",
    department: "finance",
    subDept: "Finance",
  },
  {
    name: "Mr. Bhuleshwar Mandal",
    title: "Associate, Procurement & Facilities",
    image: "/assets/teams/mondol.png",
    department: "finance",
    subDept: "Finance",
  },

  // Human Resources
  {
    name: "Mr. Basant Ku. Sahoo",
    title: "Lead, People, Culture and Inclusion",
    image: "/assets/teams/basanta.png",
    department: "finance",
    subDept: "Human Resources",
  },
  // {
  //   name: "Ms. Padmini Kumari Bisoyi",
  //   title:
  //     "Co-Lead, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
  //   image: "/assets/teams/Padmini.png",
  //   department: "finance",
  //   subDept: "Human Resources",
  // },
  {
    name: "Ms. Manasi Behera",
    title: "Associate, Recruitment, Learning & Performance",
    image: "/assets/teams/manasi.jpeg",
    department: "finance",
    subDept: "Human Resources",
  },

  // Communication
  // {
  //   name: "Mr. Jitendra Barik",
  //   title: "Lead, Media & Public Relations",
  //   image: "/assets/teams/jiteendra.png",
  //   department: "finance",
  //   subDept: "Communication",
  // },
  {
    name: "Mr. Jabis Ranjan Sahu",
    title: "Co-Lead, Digital Communications",
    image: "/assets/teams/jabis.png",
    department: "finance",
    subDept: "Communication",
  },
  {
    name: "Mr. Soumyashree Debabrata Jena",
    title: "Associate, Events & Campaigns",
    image: "/assets/teams/soumya.png",
    department: "finance",
    subDept: "Communication",
  },

  // Project Management
  {
    name: "Mr. Alok Chandra Das",
    title: "Lead, (Planning, Policy & Governance)",
    image: "/assets/teams/alok.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Rahul Nayak",
    title: "Lead, (Technical, Vocational & Educational Training)",
    image: "/assets/teams/rahul.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Gangadhar Bej",
    title: "Co-Lead, (Ultra Poor Graduation (Livelihood & Enterprise))",
    image: "/assets/teams/gangadhar.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Sudipta Kumar Behera",
    title: "Lead, (Health & Nutrition)",
    image:
      "/assets/teams/sudipta.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Dwarka Prasad",
    title: "Lead, (Water & Sanitation)",
    image: "/assets/teams/dwarka.png",
    department: "projectManagement",
  },
  {
    name: "Mr. Manoj Panda",
    title: "Lead, (Environment & Ecology)",
    image: "/assets/teams/manoj.png",
    department: "projectManagement",
  },

  // Monitoring, Evaluation & Compliance
  {
    name: "Mr. Yagnesh Kumar Nanda",
    title: "Lead, Training Compliance",
    image: "/assets/teams/yagnesh.png",
    department: "monitoring",
  },
  // {
  //   name: "Ms. Padmini Kumari Bisoyi",
  //   title:
  //     "Co-Lead, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
  //   image: "/assets/teams/Padmini.png",
  //   department: "monitoring",
  // },
  {
    name: "Ms. Jayashree Satpathy",
    title: "Associate, Legal Compliance",
    image:
    "/assets/teams/jayashree.png",
    department: "monitoring",
  },

  // knowledge
  {
    name: "Mr. Ashish Kumar Mishra",
    title: "Lead, Capacity Building and Knowledge management",
    image: "/assets/teams/ashish.png",
    department: "knowledge",
  },
  {
    name: "Mr. Aditya Kumar Sahu",
    title: "Lead, Software Development & Data Analytics",
    image: "/assets/teams/aditya.png",
    department: "knowledge",
  },
  {
    name: "Mr. Rituraj Tarei",
    title: "Lead, Innovation & Social Good",
    image: "/assets/teams/rituraj.png",
    department: "knowledge",
  },

  // Regional/State Operations
  {
    name: "Mr. Jalandhar Mohanty",
    title: "Lead, Jharsuguda",
    image: "/assets/teams/jalandhar.png",
    department: "region",
  },
  // {
  //   name: "Mrs. Sabita Garnayak",
  //   title: "Lead, angul",
  //   image: "/assets/teams/jalandhar.png",
  //   department: "region",
  // },
  {
    name: "Mr. Mukesh Singh",
    title: "Lead, Bokaro",
    image: "/assets/teams/mukessh.png",
    department: "region",
  },
  {
    name: "Mr. Titan Sahoo",
    title: "Lead, Kalahandi",
    image: "/assets/teams/titan.png",
    department: "region",
  },
  {
    name: "Mr. Tushar Ranjan Ojha",
    title: "Lead, Dhanbad",
    image: "/assets/teams/tushar.png",
    department: "region",
  },
  {
    name: "Mr. Sudarshan Barik",
    title: "Lead, Jajapur",
    image: "/assets/teams/sudarshan.png",
    department: "region",
  },
  {
    name: "Mr. Bikun Pradhan",
    title: "Lead, Jharsuguda",
    image: "/assets/teams/bikun.png",
    department: "region",
  },
  {
    name: "Mr. Bikram Keshari Gouda",
    title: "Lead, Sundargarh",
    image: "/assets/teams/bikram.png",
    department: "region",
  },
  {
    name: "Mr. Trupti Ranjan Samal",
    title: "Lead, Keonjhar",
    image: "/assets/teams/trupti.png",
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
    image: "/assets/teams/gautam.jpg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Gandhi Beura",
    title: "Executive Chauffeur",
    image: "/assets/teams/gandhi.png",
    department: "foundersOffice",
  },
];

const TeamTabs = () => {
  const [activeTab, setActiveTab] = useState("founders");

  const tabs = [
    { label: "Founders", key: "founders" },
    { label: "Founders Office", key: "foundersOffice" },
    { label: "Leadership & Strategy", key: "leadership" },
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
      "angul",
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
          <h2 className="text-2xl font-bold text-red-600 mb-4">Odisha</h2>
          <TeamGrid members={odisha} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Jharkhand</h2>
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
