export const tenders = [
  {
    id: 1,
    title:
      "Selection of an Agency for Village Survey & Household Survey data collection in Sundargarh District",
    location: "Sundargarh, Odisha",
    startDate: "2nd July 2026",
    deadline: "8th July 2026",
    link: "https://drive.google.com/file/d/1Y6ncisTZbyEXvy2_qS_NqN27xA9PGF3r/view?usp=sharing",
    status: "closed",
  },
  {
    id: 2,
    title:
      "Selection of an Agency for Data Analysis of Household Socio-Economic Dataset in Keonjhar District",
    location: "Keonjhar, Odisha",
    startDate: "15th February 2026",
    deadline: "17th February 2026",
    link: "https://drive.google.com/file/d/1rlE4MjMBv-u41YAt4X6_PJ-P3SHNAUoG/view?usp=sharing",
    status: "closed",
  },
  {
    id: 3,
    title: "Social Media & Digital Marketing",
    location: "Bhubaneswar, Odisha",
    startDate: "17th February 2025",
    deadline: "21st February 2025",
    link: "https://drive.google.com/file/d/1U2HOPDyqTk3IA01QjUByTpuCii17MN5P/view?usp=sharing",
    status: "closed",
  },
  {
    id: 4,
    title: "Construction of Plastic Waste Recycling Unit",
    location: "Koderma, Jharkhand",
    startDate: "23rd December 2024",
    deadline: "31st December 2024",
    link: "https://drive.google.com/file/d/1kDnAKkV-q2fIO3d-QmSxKPEd6Nr4QYnO/view?usp=sharing",
    status: "closed",
  },
];

export const getTendersByStatus = (status) =>
  tenders.filter((tender) => tender.status === status);
