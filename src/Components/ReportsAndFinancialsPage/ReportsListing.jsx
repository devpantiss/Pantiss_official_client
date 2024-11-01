import React from "react";
import { TbFileReport } from "react-icons/tb";
import Heading from "../Common/Heading";

const reportsData = [
  {
    title: "Annual Reports",
    items: [
      {
        label: "Annual Report 2021-22",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_1",
      },
      {
        label: "Annual Report 2020-21",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2",
      },
      {
        label: "Annual Report 2019-20",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_3",
      },
      {
        label: "Annual Report 2018-19",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_4",
      },
      {
        label: "Annual Report 2017-18",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_5",
      },
    ],
  },
  {
    title: "Audited Statements",
    items: [
      {
        label: "Audited FY 2021-22",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_6",
      },
      {
        label: "Audited FY 2020-21",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_7",
      },
      {
        label: "Audited FY 2019-20",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_8",
      },
      {
        label: "Audited FY 2018-19",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_9",
      },
      {
        label: "Audited FY 2017-18",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_10",
      },
    ],
  },
  {
    title: "FCRA Reports",
    items: [
      {
        label: "FC-Q1, Q2, Q3, Q4(2021-22)",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_11",
      },
      {
        label: "FC-Q1, Q2, Q3, Q4(2020-21)",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_12",
      },
      {
        label: "FC-Q1, Q2, Q3, Q4(2019-20)",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_13",
      },
      {
        label: "FC-Q1, Q2, Q3, Q4(2018-19)",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_14",
      },
      {
        label: "FC-Q1, Q2, Q3, Q4(2017-18)",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_15",
      },
    ],
  },
  {
    title: "Corporate Governance",
    items: [
      {
        label: "Incorporation Certificate",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_16",
      },
      {
        label: "12A and 80G Certificate",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_17",
      },
      {
        label: "CSR Certificates",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_18",
      },
      {
        label: "NITI AAYOG DARPAN Certificates",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_19",
      },
      {
        label: "GSTIN",
        link: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_20",
      },
    ],
  },
];

const ReportButton = ({ label, link }) => (
  <a
    href={link}
    download
    className="flex items-center justify-between border-b border-gray-300 py-3 hover:text-orange-600"
  >
    <span className="text-gray-700 font-medium">{label}</span>
    <TbFileReport className="text-red-600 w-6 h-6" />
  </a>
);

const ReportsListing = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="text-center mb-6">
        <Heading
          text="REPORTS & FINANCIALS"
          colors="text-gray-900"
          bgColor="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {reportsData.map((category) => (
          <div
            key={category.title}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
              {category.title}
            </h2>
            <div>
              {category.items.map((item) => (
                <ReportButton
                  key={item.label}
                  label={item.label}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsListing;
