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
    category: "Social Enterprise",
    description: "Open positions in our Social Enterprise team.",
    jobs: [
      {
        title: "Social Impact Coordinator",
        category: "Social Enterprise",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "50k - 70k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Business Development Manager",
        category: "Social Enterprise",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "60k - 80k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
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
        salaryRange: "40k - 60k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Vocational Instructor",
        category: "Technical, Vocational Education and Training",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "35k - 55k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
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
        salaryRange: "70k - 90k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Software Engineer",
        category: "ICT Development",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "65k - 85k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
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
        salaryRange: "55k - 75k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Structural Engineer",
        category: "Civil Engineering",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "60k - 80k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
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
        salaryRange: "50k - 70k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Advocacy Officer",
        category: "Research and Advocacy",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "55k - 75k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
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
        salaryRange: "60k - 80k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Audit Officer",
        category: "Development Compliance",
        location: "Bhubaneswar, India",
        type: "Full-time",
        salaryRange: "50k - 70k INR",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
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
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
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
  );
};

const JobsListing = () => {
  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("All");

  // Parse query parameters to get the category filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setFilter(category);
    }
  }, [location.search]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyNow = () => {
    if (selectedJob) {
      window.open(selectedJob.googleFormLink, "_blank");
    }
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

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
        <JobDetails
          job={selectedJob}
          onApply={handleApplyNow}
          onBack={handleBack}
        />
      ) : (
        filteredJobs.map((category) => (
          <div key={category.category} className="mb-8">
            <h2 className="text-xl font-bold">{category.category}</h2>
            <p className="text-gray-500 mb-4">{category.description}</p>

            {category.jobs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {category.jobs.map((job, idx) => (
                  <JobCard
                    key={idx}
                    job={job}
                    onClick={() => handleJobClick(job)}
                  />
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
