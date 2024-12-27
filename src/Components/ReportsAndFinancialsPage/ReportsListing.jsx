import React from "react";
import { TbFileReport } from "react-icons/tb";
import Heading from "../Common/Heading";

const reportsData = [
  {
    title: "Annual Reports",
    items: [
      { label: "Annual Report 2021-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_1" },
      { label: "Annual Report 2020-21", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2" },
      { label: "Annual Report 2019-20", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_3" },
      { label: "Annual Report 2018-19", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_4" },
      { label: "Annual Report 2017-18", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_5" },
    ],
  },
  {
    title: "Audited Statements",
    items: [
      { label: "Audited FY 2021-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_6" },
      { label: "Audited FY 2020-21", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_7" },
      { label: "Audited FY 2019-20", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_8" },
      { label: "Audited FY 2018-19", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_9" },
      { label: "Audited FY 2017-18", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_10" },
    ],
  },
  {
    title: "FCRA Reports (FC6 & FC4)",
    items: [
      { label: "FC6 Q1 FY 21-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_11" },
      { label: "FC6 Q2 FY 21-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_12" },
      { label: "FC6 Q3 FY 21-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_13" },
      { label: "FC6 Q4 FY 21-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_14" },
      { label: "FC4 FY 21-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_15" },
    ],
  },
  {
    title: "Corporate Governance",
    items: [
      { label: "Board of Directors FY 2021-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_16" },
      { label: "Governance Policy FY 2021-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_17" },
      { label: "Board Meeting Minutes 2021-22", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_18" },
    ],
  },
];

const ReportButton = ({ label, link }) => (
  <a
    href={link}
    download
    className="flex items-center gap-3 py-2 px-4 rounded-md text-white bg-gradient-to-r from-red-500 to-orange-500 hover:shadow-lg transition-all"
  >
    <TbFileReport className="w-6 h-6" />
    <span className="font-semibold">{label}</span>
  </a>
);

const ReportsListing = () => {
  return (
    <div className="max-w-8xl mx-auto lg:px-24 px-10 py-10">
      <div className="text-center mb-10">
        <Heading
          text="REPORTS & FINANCIALS"
          colors="text-gray-900"
          bgColor="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reportsData.map((category) => (
          <div key={category.title} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.items.map((item) => (
                <ReportButton key={item.label} label={item.label} link={item.link} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsListing;
