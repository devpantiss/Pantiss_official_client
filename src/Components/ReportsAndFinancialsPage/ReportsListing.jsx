import React from "react";
import { TbFileReport } from "react-icons/tb";
import Heading from "../Common/Heading";

const reportsData = [
  {
    title: "Annual Reports",
    items: [
      { label: "Annual Reports FY 2024-23", link: "https://drive.google.com/file/d/1mOVRqzLB0BAeLQ_a-CCgJq6BLvhlBsGW/view?usp=drive_link" },
      { label: "Annual Reports FY 2023-22", link: "https://drive.google.com/file/d/1OHAgBFjyP_DFOfZDXnPetOzwgVOOSR8o/view?usp=drive_link" },
      { label: "Annual Reports FY 2022-21", link: "https://drive.google.com/file/d/1REPYaIq4LZvKOsz0PfkTQg6AZEtyJlQu/view?usp=drive_link" },
    ],
  },
  {
    title: "Audited Statements",
    items: [
      { label: "Audited FY 2024-23", link: "https://drive.google.com/file/d/1mOVRqzLB0BAeLQ_a-CCgJq6BLvhlBsGW/view?usp=drive_link" },
      { label: "Audited FY 2023-22", link: "https://drive.google.com/file/d/1OHAgBFjyP_DFOfZDXnPetOzwgVOOSR8o/view?usp=drive_link" },
      { label: "Audited FY 2022-21", link: "https://drive.google.com/file/d/1REPYaIq4LZvKOsz0PfkTQg6AZEtyJlQu/view?usp=drive_link" },
    ],
  },
  {
    title: "Corporate Governance",
    items: [
      { label: "Board of Directors", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_16" },
      { label: "Governance Policy", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_17" },
      // { label: "Board Meeting Minutes 2024-25", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_18" },
      // { label: "Code of Conduct for Employees & Board", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_18" },
      // { label: "Conflict of Interest Policy", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_18" },
    ],
  },
  // {
  //   title: "Policies & Compliances",
  //   items: [
  //     { label: "Training & Development Policy", link: "https://drive.google.com/file/d/16tFOFbVxE6eEuzw3lhQR5nfbHYXkLD78/view?usp=sharing" },
  //     { label: "POSH Policy", link: "https://drive.google.com/file/d/1hQGwwlIQn4iPo1QRs_qX9Kvy6-rsf126/view?usp=sharing" },
  //     { label: "Anti Fraud-Fraud Prevention Policy", link: "https://drive.google.com/file/d/1xoYzUgiEwXAC6fB0l3u9V6dPCv9Mkp8D/view?usp=drive_link" },
  //     { label: "Data Record Storage Policy", link: "https://drive.google.com/file/d/1Hh7SVG6bKJrs6u359xx2gONIF1kwZ8Wn/view?usp=sharing" },
  //   ],
  // },
  {
    title: "Statutory & Registration Docs",
    items: [
      { label: "Certificate of Incorporation", link: "https://drive.google.com/file/d/1uXczQBNSQvhZwVOHiTo3CjAcDlR7hwXx/view?usp=sharing" },
      { label: "TAN", link: "https://drive.google.com/file/d/1sEUuK9eoISnD3EeW17Low0_NYYmKV2Sv/view?usp=sharing" },
      { label: "PAN", link: "https://drive.google.com/file/d/1uZklWGfc1fPaKgHX52NwnDAG3fzHHCg7/view?usp=sharing" },
      { label: "GST Registration", link: "https://drive.google.com/file/d/1Uann1BNBEqBqfqXEAxph1_f2qDscq6UX/view?usp=sharing" },
      { label: "CSR-1 Registration", link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_14" },
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
