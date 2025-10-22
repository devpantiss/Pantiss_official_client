import React, { useState } from "react";
import Heading from "../Components/Common/Heading";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const ContactPage = () => {
  // Contact Data
  const headquarters = [
    {
      name: "Delhi Office",
      address: ["Flat No. 203", "Kailash Apartments", "South Extension-II, New Delhi - 110049"],
      tel: "+91 9876543210",
      email: "delhi@pantissfoundation.org",
    },
    {
      name: "Mumbai Office (AFC India & Incubation Cell, IIM Bombay)",
      address: ["C/o IIM Bombay Campus", "Powai, Mumbai, Maharashtra - 400076"],
      tel: "+91 9765432109",
      email: "mumbai@pantissfoundation.org",
    },
    {
      name: "Registered Address - Bhubaneswar",
      address: [
        "Plot No 1215/1500",
        "Khandagiri Bari, Bank of India Lane",
        "Bhubaneswar, Odisha, 751030",
      ],
      tel: "+91 9123456789",
      email: "info@pantissfoundation.org",
    },
    {
      name: "Interns & Fellowship Queries",
      address: ["Pantiss Foundation HQ", "Bhubaneswar, Odisha"],
      tel: "+91 9365478901",
      email: "interns@pantissfoundation.org",
    },
  ];

  const regionalOffices = [
    {
      name: "Regional Office - Odisha",
      address: ["Plot No. 88", "Jaydev Vihar, Bhubaneswar, Odisha - 751013"],
      tel: "+91 8245671001",
      email: "odisha.ro@pantissfoundation.org",
    },
    {
      name: "Regional Office - Jharkhand",
      address: ["Sector IV", "Bokaro Steel City, Jharkhand - 827004"],
      tel: "+91 8245671002",
      email: "jharkhand.ro@pantissfoundation.org",
    },
    {
      name: "Regional Office - Chhattisgarh",
      address: ["Korba Industrial Area", "Korba, Chhattisgarh - 495677"],
      tel: "+91 8245671003",
      email: "chhattisgarh.ro@pantissfoundation.org",
    },
  ];

  const districtOffices = [
    { name: "Anugul", address: ["Industrial Area", "Anugul, Odisha"], tel: "+91 8345672345", email: "anugul@pantissfoundation.org" },
    { name: "Jajpur", address: ["NH-5", "Near Tata Steel Plant, Jajpur, Odisha"], tel: "+91 8445673456", email: "jajpur@pantissfoundation.org" },
    { name: "Keonjhar", address: ["College Road", "Keonjhar, Odisha"], tel: "+91 8545674567", email: "keonjhar@pantissfoundation.org" },
    { name: "Kalahandi", address: ["Main Road", "Bhawanipatna, Kalahandi, Odisha"], tel: "+91 8245671234", email: "kalahandi@pantissfoundation.org" },
    { name: "Sundargarh", address: ["Civil Township", "Sundargarh, Odisha"], tel: "+91 8645675678", email: "sundargarh@pantissfoundation.org" },
    { name: "Jharsuguda", address: ["Rly Station Road", "Jharsuguda, Odisha"], tel: "+91 8745676789", email: "jharsuguda@pantissfoundation.org" },
  ];

  const centerOfExcellence = {
    name: "Center of Excellence - Angul",
    address: ["Plot No. 45", "Industrial Area, Angul, Odisha - 759122"],
    tel: "+91 9345678902",
    email: "coe.angul@pantissfoundation.org",
  };

  const guestHouses = [
    {
      name: "Guest House - Bhubaneswar",
      address: ["Near AMRI Hospital", "Khandagiri, Bhubaneswar, Odisha - 751030"],
      tel: "+91 9445678903",
      email: "guesthouse.bbsr@pantissfoundation.org",
    },
    {
      name: "Guest House - Cuttack",
      address: ["Cantonment Road", "Cuttack, Odisha - 753001"],
      tel: "+91 9545678904",
      email: "guesthouse.cuttack@pantissfoundation.org",
    },
  ];

  // State
  const [activeTab, setActiveTab] = useState("headquarters");
  const [expanded, setExpanded] = useState(null);

  // Reusable Contact Info Component
  const ContactInfo = ({ name, address, tel, email }) => (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="flex items-start text-gray-600">
        <FaMapMarkerAlt className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-1" />
        <span>{address.map((line, idx) => <span key={idx} className="block">{line}</span>)}</span>
      </p>
      <p className="flex items-center text-gray-600">
        <FaPhone className="w-5 h-5 mr-2 text-red-500" />
        <a href={`tel:${tel}`} className="hover:text-red-600">{tel}</a>
      </p>
      <p className="flex items-center text-gray-600">
        <FaEnvelope className="w-5 h-5 mr-2 text-red-500" />
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
      </p>
    </div>
  );

  // Render Section Based on Tab
  const renderContent = (data) => (
    <div className="space-y-4">
      {Array.isArray(data)
        ? data.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold text-gray-700 hover:text-red-500"
              >
                {item.name}
                <FaChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${expanded === idx ? "rotate-180" : ""}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expanded === idx ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-4">
                  <ContactInfo {...item} />
                </div>
              </div>
            </div>
          ))
        : <ContactInfo {...data} />}
    </div>
  );

  return (
    <section
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742227403/Agri_Land_India4-768x512_sx19fv.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-red-600 rounded-lg shadow-md p-6 lg:h-[650px]">
          <Heading text="CONTACT US" color="text-white" bgColor="bg-white" />
          <p className="text-sm text-gray-100 mt-2 text-center">
            Last updated on {new Date("2025-10-22").toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>

          <nav className="mt-6 space-y-2">
            {[
              { id: "headquarters", label: "Headquarters" },
              { id: "regional", label: "Regional Offices" },
              { id: "district", label: "District Offices" },
              { id: "coe", label: "Center of Excellence (Angul)" },
              { id: "guest", label: "Guest Houses" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-red-500 text-white ring-2 ring-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
          {activeTab === "headquarters" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Headquarters</h2>
              {renderContent(headquarters)}
            </div>
          )}
          {activeTab === "regional" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Regional Offices</h2>
              {renderContent(regionalOffices)}
            </div>
          )}
          {activeTab === "district" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">District Offices</h2>
              {renderContent(districtOffices)}
            </div>
          )}
          {activeTab === "coe" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Center of Excellence</h2>
              {renderContent(centerOfExcellence)}
            </div>
          )}
          {activeTab === "guest" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Guest Houses</h2>
              {renderContent(guestHouses)}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default ContactPage;
