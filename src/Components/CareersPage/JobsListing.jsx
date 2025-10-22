import React, { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import { useLocation } from "react-router-dom";

const jobsData = [
  {
    category: "M&D",
    description: "Open positions in our M&D team.",
    jobs: [],
  },
  {
    category: "Project Management & Implementation",
    description: "Open positions in our Implementation team.",
    jobs: [
      {
        title: "Programme Manager",
        category: "Project Management & Implementation",
        location: "Guma, Gajapati, Odisha",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Lead and manage overall project operations, ensuring timely delivery, quality standards, and budget compliance.",
          "Supervise teams implementing precision farming, aquaculture, and livelihood programs. Promote advanced farming and fishery practices, and support women-led enterprises like nurseries and seed production",
          "Coordinate training, exposure visits, and capacity-building activities. Oversee project communication, reporting, and documentation for government and donors. Ensure sustainability, inclusiveness, and gender equity across all interventions.",
        ],
        qualifications: [
          "Master's in Agriculture, Horticulture, Fisheries, or Rural Development.",
          "10+ years of experience in managing agriculture or rural development projects.",
          "Excellent leadership, coordination, and documentation skills.",
        ],
      },
      {
        title: "Programme Coordinator (Agriculture & Horticulture)",
        category: "Project Management & Implementation",
        location: "Guma, Gajapati, Odisha",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Provide technical guidance for high-density orchards, irrigation, and modern crop management.",
          "Support Producer Groups in crop diversification and adoption of improved technologies.",
          "Conduct training, exposure visits, and capacity-building activities for farmers.",
          "Monitor farm productivity and ensure data-based progress tracking.",
          "Prepare reports and coordinate with Programme Manager and MIS team",
        ],
        qualifications: [
          "Bachelor's/Master's in Agriculture, Horticulture, Agronomy, or related field.",
          "Minimum 5 years in agriculture/horticulture-based rural projects.",
          "Expertise in irrigation management, high-density orchards, and modern crop management practices",
        ],
      },
      {
        title: "Programme Coordinator (Fishery)",
        category: "Project Management & Implementation",
        location: "Guma, Gajapati, Odisha",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Lead and monitor all aquaculture interventions including farm pond excavation and group-based fish farming.",
          "Provide technical support on pond management, stocking, feeding & harvesting.",
          "Promote and guide women-led fish seed enterprises.",
          "Conduct Farmer Field Schools & training on best aquaculture practices.",
          "Build capacity of Producer Groups & Community Resource Persons.",
          "Maintain production records and ensure timely reporting.",
          "Coordinate with Programme Manager & project team for smooth implementation."
        ],
        qualifications: [
          "Bachelor's or Master's degree in Fisheries Science or Aquaculture or related field.",
          "Minimum 5 years of experience in aquaculture or fisheries-based livelihood projects.",
          "Strong expertise in farm pond management, fish culture, and community mobilization.",
        ],
      },
      {
        title: "Programme Coordinator (Social)",
        category: "Project Management & Implementation",
        location: "Guma, Gajapati, Odisha",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Facilitate and support community and women-led livelihood enterprises.",
          "Promote gender equity, inclusion, and participation of women entrepreneurs.",
          "Conduct training, awareness programs, and community mobilization activities.",
        ],
        qualifications: [
          "Bachelor's/Master's in Social Work, Rural Development, or related field.",
          "Minimum 5 years' experience in community mobilization or rural development projects.",
          "Social Mobilisation, Community Mobilization, Strong facilitation, documentation, and interpersonal skills.",
          "Coordinate with CRPs for field execution and social data management.",
          "Collaborate with Programme Manager and MIS team for progress reporting",
        ],
      },
      {
        title: "MIS CUM Accoutant",
        category: "Project Management & Implementation",
        location: "Guma, Gajapati, Odisha",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Facilitate and support community and women-led livelihood enterprises.",
          "Promote gender equity, inclusion, and participation of women entrepreneurs.",
          "Conduct training, awareness programs, and community mobilization activities.",
        ],
        qualifications: [
          "Bachelor's/Master's in Social Work, Rural Development, or related field.",
          "Minimum 5 years' experience in community mobilization or rural development projects.",
          "Social Mobilisation, Community Mobilization, Strong facilitation, documentation, and interpersonal skills.",
          "Coordinate with CRPs for field execution and social data management.",
          "Collaborate with Programme Manager and MIS team for progress reporting",
        ],
      },
      {
        title: "Community Resourse Person (CRP)",
        category: "Project Management & Implementation",
        location: "Guma, Gajapati, Odisha",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Provide field-level support to farmers and fishers in adopting improved practices.",
          "Conduct training, awareness sessions, and mobilization activities in villages.",
          "Support data collection, progress tracking, and community engagement.",
          "Promote sustainable agriculture and aquaculture practices.",
          "Coordinate with Project Coordinators and Programme Manager for field updates"
        ],
        qualifications: [
          "+3 Degree with Experience in Agriculture, Horticulture, Fisheries, or Social Work.",
          "Knowledge of local farming practices and community mobilization.",
          "Strong communication skills and ability to work with rural communities.",
        ],
      },
    ],
  },
  {
    category: "Finance, Grants & Procurement",
    description: "Open positions in our Finance, Grants & Procurement team.",
    jobs: [],
  },
  {
    category: "Human Resources & Administration",
    description: "Open positions in our Human Resources & Administration team.",
    jobs: [],
  },
  {
    category: "Business Development & Partnerships",
    description: "Open positions in our Business Development & Partnerships team.",
    jobs: [
      {
        title: "Business Development Manager",
        category: "Business Development & Partnerships",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Lead strategic business partnerships and expansion for social enterprise units.",
          "Identify new funding and collaboration opportunities.",
          "Develop and execute market entry and growth strategies.",
        ],
        qualifications: [
          "MBA or Master’s in Business Development, Marketing, or Social Enterprise.",
          "Minimum 3 years of experience in business development or CSR partnerships.",
          "Strong networking and proposal-writing skills.",
        ],
      },
    ],
  },
  {
    category: "Social Enterprise",
    description: "Open positions in our Social Enterprise team.",
    jobs: [
      {
        title: "Social Impact Coordinator",
        category: "Social Enterprise",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Coordinate and monitor impact-driven social enterprise projects.",
          "Work closely with local communities and beneficiaries.",
          "Assist in preparing impact reports and social audits.",
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Social Work, Development Studies, or related field.",
          "1–3 years of experience in social enterprise or community development.",
          "Excellent communication and coordination skills.",
        ],
      },
    ],
  },
  {
    category: "Technical, Vocational Education and Training",
    description: "Open positions in our Vocational Training team.",
    jobs: [
      {
        title: "Training Specialist",
        category: "Technical, Vocational Education and Training",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Design and deliver high-quality vocational training programs.",
          "Conduct assessments and monitor trainees’ performance.",
          "Collaborate with industry partners for placements.",
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Education, Training, or related field.",
          "Experience in skill development or TVET institutions preferred.",
          "Excellent facilitation and mentoring skills.",
        ],
      },
      {
        title: "Vocational Instructor",
        category: "Technical, Vocational Education and Training",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Deliver technical skill-based training modules to trainees.",
          "Maintain training records and ensure compliance with standards.",
          "Support curriculum updates based on industry needs.",
        ],
        qualifications: [
          "Diploma or ITI certification in relevant trade.",
          "2+ years of experience as an instructor or trainer.",
          "Strong practical knowledge and teaching ability.",
        ],
      },
    ],
  },
  {
    category: "ICT Development",
    description: "Open positions in our ICT Development team.",
    jobs: [
      {
        title: "Full Stack Developer",
        category: "ICT Development",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Develop and maintain modern web applications using React and Node.js.",
          "Collaborate with designers and product managers to deliver scalable features.",
          "Ensure performance, security, and responsiveness of applications.",
        ],
        qualifications: [
          "Bachelor’s degree in Computer Science or related field.",
          "2+ years of experience in full-stack web development.",
          "Proficiency in JavaScript, React, Node.js, and MongoDB.",
        ],
      },
      {
        title: "Software Engineer",
        category: "ICT Development",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Design and implement software solutions for development projects.",
          "Collaborate with cross-functional teams for system integration.",
          "Debug, optimize, and document applications.",
        ],
        qualifications: [
          "Bachelor’s in Computer Engineering or related discipline.",
          "Experience with backend frameworks like Express or Django.",
          "Good understanding of APIs and version control (Git).",
        ],
      },
    ],
  },
  {
    category: "Civil Engineering",
    description: "Open positions in our Civil Engineering team.",
    jobs: [
      {
        title: "Site Engineer",
        category: "Civil Engineering",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Supervise construction activities ensuring design specifications are met.",
          "Monitor material usage and coordinate with contractors.",
          "Ensure site safety and quality standards compliance.",
        ],
        qualifications: [
          "Bachelor’s degree in Civil Engineering.",
          "1–3 years of experience in construction site supervision.",
          "Knowledge of AutoCAD and structural drawings.",
        ],
      },
      {
        title: "Structural Engineer",
        category: "Civil Engineering",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Design, analyze, and plan structural components for civil projects.",
          "Perform load calculations and prepare technical documentation.",
          "Collaborate with architects and project teams for design reviews.",
        ],
        qualifications: [
          "Bachelor’s or Master’s in Structural/Civil Engineering.",
          "Experience with STAAD Pro or ETABS preferred.",
          "Strong analytical and mathematical skills.",
        ],
      },
    ],
  },
  {
    category: "Research and Advocacy",
    description: "Open positions in our Research and Advocacy team.",
    jobs: [
      {
        title: "Policy Analyst",
        category: "Research and Advocacy",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Conduct research and data analysis to support advocacy campaigns.",
          "Develop policy briefs and thematic reports.",
          "Engage with government and community stakeholders.",
        ],
        qualifications: [
          "Master’s in Public Policy, Economics, or Social Sciences.",
          "1–3 years of experience in policy or advocacy roles.",
          "Strong analytical and report-writing skills.",
        ],
      },
      {
        title: "Advocacy Officer",
        category: "Research and Advocacy",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Plan and execute advocacy campaigns on key social issues.",
          "Coordinate with NGOs, media, and policymakers.",
          "Document outcomes and prepare communication materials.",
        ],
        qualifications: [
          "Master’s in Social Work, Communication, or Political Science.",
          "2+ years of experience in advocacy or communications.",
          "Excellent stakeholder engagement and writing skills.",
        ],
      },
    ],
  },
  {
    category: "Development Compliance",
    description: "Open positions in our Development Compliance team.",
    jobs: [
      {
        title: "Compliance Specialist",
        category: "Development Compliance",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Ensure compliance with donor, CSR, and legal frameworks.",
          "Conduct internal audits and maintain documentation.",
          "Support capacity building on compliance procedures.",
        ],
        qualifications: [
          "Bachelor’s or Master’s in Commerce, Law, or related field.",
          "2–4 years of experience in compliance or audit functions.",
          "Familiarity with FCRA, CSR, and NGO governance norms.",
        ],
      },
      {
        title: "Audit Officer",
        category: "Development Compliance",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "As per market standards",
        googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevRPEIr2eaa02uQLxOrqW6eMUy0pOQ25DDIZ2OYdqgBMglxw/viewform",
        description: [
          "Perform financial and process audits for ongoing projects.",
          "Review records and identify operational inefficiencies.",
          "Prepare audit reports and follow up on corrective actions.",
        ],
        qualifications: [
          "Bachelor’s in Commerce or Accounting; CA Inter preferred.",
          "2+ years of experience in auditing or compliance.",
          "Strong knowledge of accounting principles and MS Excel.",
        ],
      },
    ],
  },
];

const JobCard = ({ job, onClick }) => {
  return (
    <div
      className="border rounded-lg p-4 shadow-md bg-white mb-4 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <div className="text-sm text-gray-500 mb-2">{job.category}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">{job.type}</span>
        <span className="text-sm text-gray-600">{job.salaryRange}</span>
      </div>
      <div className="text-sm text-blue-500 mt-2">{job.location}</div>
    </div>
  );
};

const JobDetails = ({ job, onApply, onBack }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white mb-4">
      <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
      <p className="text-sm text-gray-600 mb-2">Category: {job.category}</p>
      <p className="text-sm text-gray-600 mb-2">Location: {job.location}</p>
      <p className="text-sm text-gray-600 mb-2">Type: {job.type}</p>
      <p className="text-sm text-gray-600 mb-4">Salary: {job.salaryRange}</p>

      {job.description && (
        <>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">
            Job Description:
          </h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {job.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </>
      )}

      {job.qualifications && (
        <>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">
            Qualifications:
          </h4>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {job.qualifications.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </>
      )}

      <div className="flex gap-3">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={onApply}
        >
          Apply Now
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

const JobsListing = () => {
  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) setFilter(category);
  }, [location.search]);

  const handleJobClick = (job) => setSelectedJob(job);
  const handleApplyNow = () => selectedJob && window.open(selectedJob.googleFormLink, "_blank");
  const handleBack = () => setSelectedJob(null);
  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredJobs =
    filter === "All"
      ? jobsData
      : jobsData.filter((category) => category.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col mb-6">
        <div className="flex flex-initial justify-start items-center">
          <Heading
            text="Start doing work that matters"
            colors="text-white"
            bgColor="bg-red-600"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-6">
          <p className="text-gray-600 mt-2">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="border mt-5 lg:border-gray-300 pr-6 px-4 py-2 rounded-md text-gray-600"
          >
            <option value="All">All</option>
            {jobsData.map((category) => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedJob ? (
        <JobDetails job={selectedJob} onApply={handleApplyNow} onBack={handleBack} />
      ) : (
        filteredJobs.map((category) => (
          <div key={category.category} className="mb-8">
            <h2 className="text-xl font-bold">{category.category}</h2>
            <p className="text-gray-500 mb-4">{category.description}</p>

            {category.jobs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {category.jobs.map((job, idx) => (
                  <JobCard key={idx} job={job} onClick={() => handleJobClick(job)} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No active positions at the moment.
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobsListing;
