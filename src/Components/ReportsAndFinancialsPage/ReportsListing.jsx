import React from "react";
import Heading from "../Common/Heading";

// Update the reportsData to include Google Drive direct download links
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
  <a href={link} download>
    <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-2 px-4 rounded-lg w-full mb-3">
      {label}
    </button>
  </a>
);

const ReportsListing = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center flex justify-start items-center mb-2">
        <Heading
          text="REPORTS & FINANCIALS"
          colors="text-white"
          bgColor="bg-red-600"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 px-4">
        {reportsData.map((category) => (
          <div key={category.title}>
            <h2 className="font-semibold text-xl mb-4">{category.title}</h2>
            {category.items.map((item) => (
              <ReportButton
                key={item.label}
                label={item.label}
                link={item.link}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsListing;
