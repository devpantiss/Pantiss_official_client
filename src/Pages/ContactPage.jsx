import React, { useState } from "react";
import Heading from "../Components/Common/Heading";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa"; // Icons

const ContactPage = () => {
  // Contact data
  const headquarters = {
    main: {
      name: "Pantiss Foundation",
      address: [
        "Plot No 1215/1500",
        "Khandagiri Bari, Bank of India Lane",
        "Bhubaneswar, Odisha, 751030",
      ],
      tel: "+91 9123456789",
      email: "info@pantissfoundation.org",
    },
    departments: [
      { name: "Finance", tel: "+91 9234567890", email: "finance@pantissfoundation.org" },
      { name: "HR", tel: "+91 9345678901", email: "hr@pantissfoundation.org" },
      { name: "Careers", tel: "+91 9456789012", email: "careers@pantissfoundation.org" },
    ],
  };

  const trainingCenters = [
    { name: "Kalahandi", address: ["Main Road", "Bhawanipatna, Kalahandi, Odisha"], tel: "+91 8245671234", email: "kalahandi@pantissfoundation.org" },
    { name: "Angul", address: ["Plot No. 45", "Industrial Area, Angul, Odisha"], tel: "+91 8345672345", email: "angul@pantissfoundation.org" },
    { name: "Jajpur", address: ["NH-5", "Near Tata Steel Plant, Jajpur, Odisha"], tel: "+91 8445673456", email: "jajpur@pantissfoundation.org" },
    { name: "Thuamul Rampur", address: ["Block Office Road", "Thuamul Rampur, Kalahandi, Odisha"], tel: "+91 8545674567", email: "thuamulrampur@pantissfoundation.org" },
    { name: "Kandhamal", address: ["Near Phulbani Main Market", "Kandhamal, Odisha"], tel: "+91 8645675678", email: "kandhamal@pantissfoundation.org" },
    { name: "Harsuguda", address: ["Rly Station Road", "Jharsuguda, Odisha"], tel: "+91 8745676789", email: "harsuguda@pantissfoundation.org" },
    { name: "Koderma", address: ["Station Road", "Koderma, Jharkhand"], tel: "+91 8845677890", email: "koderma@pantissfoundation.org" },
  ];

  // State for active tab and accordion
  const [activeTab, setActiveTab] = useState("headquarters");
  const [expandedCenter, setExpandedCenter] = useState(null);

  // Contact Info Component
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

  return (
    <section
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742227403/Agri_Land_India4-768x512_sx19fv.jpg')`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 bg-red-600 rounded-lg shadow-md p-6 lg:h-[600px]">
          <Heading text="CONTACT US" color="text-white" bgColor="bg-white" />
          <p className="text-sm text-gray-100 mt-2 text-center">
            Last modified on {new Date("2025-01-17").toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
          <nav className="mt-6 space-y-2">
            <button
              onClick={() => setActiveTab("headquarters")}
              className={`w-full text-left py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
                activeTab === "headquarters" ? "bg-red-500 text-white ring-2 ring-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Headquarters
            </button>
            <button
              onClick={() => setActiveTab("training")}
              className={`w-full text-left py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
                activeTab === "training" ? "bg-red-500 text-white ring-2 ring-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Training Centers
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 bg-white rounded-lg shadow-md p-6">
          <div
            className={`transition-all duration-300 ease-in-out ${
              activeTab === "headquarters" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none absolute"
            }`}
          >
            {activeTab === "headquarters" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Headquarters</h2>
                <ContactInfo {...headquarters.main} />
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {headquarters.departments.map((dept, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-md">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">{dept.name}</h4>
                      <p className="flex items-center text-gray-600 mb-2">
                        <FaPhone className="w-5 h-5 mr-2 text-red-500" />
                        <a href={`tel:${dept.tel}`} className="hover:text-red-600">{dept.tel}</a>
                      </p>
                      <p className="flex items-center text-gray-600">
                        <FaEnvelope className="w-5 h-5 mr-2 text-red-500" />
                        <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">{dept.email}</a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className={`transition-all duration-300 ease-in-out ${
              activeTab === "training" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none absolute"
            }`}
          >
            {activeTab === "training" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Training Centers</h2>
                <div className="space-y-4">
                  {trainingCenters.map((center, idx) => (
                    <div key={idx} className="border-b border-gray-200">
                      <button
                        onClick={() => setExpandedCenter(expandedCenter === idx ? null : idx)}
                        className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold text-gray-700 hover:text-red-500 focus:outline-none"
                      >
                        {center.name}
                        <FaChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                            expandedCenter === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedCenter === idx ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pb-4">
                          <ContactInfo {...center} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Inline CSS for transitions and background */}
      <style jsx>{`
        .transition-all {
          transition-property: opacity, transform, max-height;
          transition-timing-function: ease-in-out;
          transition-duration: 300ms;
        }
        .max-h-64 {
          max-height: 16rem; /* 256px, sufficient for ContactInfo content */
        }
        .max-h-0 {
          max-height: 0;
        }
        .opacity-0 {
          opacity: 0;
        }
        .opacity-100 {
          opacity: 1;
        }
        .pointer-events-none {
          pointer-events: none;
        }
        .-translate-y-2 {
          transform: translateY(-0.5rem);
        }
        .translate-y-0 {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ContactPage;