import React, { useState } from "react";

// All team data with department field for filtering
const teamData = [
  {
    name: "Dr. Sanjaya Pradhan",
    title: "Founder & Principal Advisor",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Sanjay-Pradhan--e1670426425441.jpeg",
    department: "leadership",
  },
  {
    name: "Mr. Stalin Nayak",
    title: "Founder & Chairperson",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040843/stalin_sir_wbrcxh.jpg",
    department: "leadership",
  },
  {
    name: "Ms. Rishita Beura",
    title: "Executive Assistant to Founder",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Rishita-Beura-e1670426885700.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Ms. Aparajita Barik",
    title: "Development Secretary to Chairperson",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Aparajita-Barik-e1670426938732.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Mantu Nayak",
    title: "Personal Assistance to Chairperson",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Mantu-Nayak-e1670426980487.jpeg",
    department: "foundersOffice",
  },
  {
    name: "Mr. Indrajit Swain",
    title: "Accountant",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Indrajit-Swain-e1670427100442.jpeg",
    department: "finance",
  },
  {
    name: "Ms. Smita Swain",
    title: "Manager, Human Resource",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Smita-Swain-e1670427217351.jpg",
    department: "finance",
  },
  {
    name: "Ms. Sarita Routray",
    title: "Associate, Human Resource",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Sarita-Routray--e1670427277700.jpeg",
    department: "finance",
  },
  {
    name: "Mr. Satya Swaroop Sahoo",
    title: "Associate Content Development",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Satya-Swaroop-Sahoo-scaled-e1670427434981.jpg",
    department: "finance",
  },
  {
    name: "Mr. Braja Kishore Nayak",
    title: "Head, Financial Inclusion & 6-Finance",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Brajakishore-Nayak-e1670427621163.jpeg",
    department: "projectManagement",
  },
  {
    name: "Mr. Shreyash Subudhi",
    title:
      "Chief Operating Officer, Water, Sanitation & Hygiene(WASH) & Climate Change",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Shreyash-Subudhi-e1670426713822.jpeg",
    department: "projectManagement",
  },
  {
    name: "Mr. Dwaraka Prasad",
    title: "Head, Skill Development & Migration",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Dwaraka-Prasad-e1670427690278.jpeg",
    department: "projectManagement",
  },
  {
    name: "Mr. Rahul Nayak",
    title: "Head, Entreprise Development & Social Innovation Lab",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Rahul-Nayak-e1670427830182.jpeg",
    department: "projectManagement",
  },
  {
    name: "Mr. Deepan Digal",
    title: "Head, Monitoring, Evaluation, Accountability & Learning",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Deepan-Digal--e1670428092201.jpeg",
    department: "monitoring",
  },
  {
    name: "Mr. Ms. Madhusmita Nayak",
    title:
      "Head Administration, Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity",
    image:
      "https://pantiss.com/wp-content/uploads/2022/12/Madhusmita-Nayak-e1670428129999.jpeg",
    department: "monitoring",
  },
  {
    name: "Ms. Madhusmita Khatua",
    title: "Associate, Social Compliance & Safeguarding",
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
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter team members based on active tab (department)
  const filteredTeam =
    activeTab === "all"
      ? teamData
      : teamData.filter((member) => member.department === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      {/* Tab Navigation */}
      <div className="flex justify-start md:justify-center overflow-x-auto mb-8 space-x-2 py-2 px-2">
        <button
          className={`px-4 py-2 font-semibold whitespace-nowrap ${
            activeTab === "all" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 font-semibold whitespace-nowrap ${
            activeTab === "leadership" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("leadership")}
        >
          Leadership
        </button>
        <button
          className={`px-4 py-2 font-semibold whitespace-nowrap ${
            activeTab === "foundersOffice"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("foundersOffice")}
        >
          Founders Office
        </button>
        <button
          className={`px-4 py-2 font-semibold whitespace-nowrap ${
            activeTab === "finance" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("finance")}
        >
          Finance, HR & Communication
        </button>
        <button
          className={`px-4 py-2 font-semibold whitespace-nowrap ${
            activeTab === "projectManagement"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("projectManagement")}
        >
          Project Management
        </button>
        <button
          className={`px-4 py-2 font-semibold whitespace-nowrap ${
            activeTab === "monitoring" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("monitoring")}
        >
          Monitoring, Evaluation & Compliances
        </button>
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
                  className="w-full h-full object-fit"
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
