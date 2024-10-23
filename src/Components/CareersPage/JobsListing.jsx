import React, { useState } from "react";
import Heading from "../Common/Heading";

const jobsData = [
  {
    category: "Design",
    description: "Open positions in our design team.",
    jobs: [
      {
        title: "Product Designer",
        category: "Design",
        location: "Melbourne, Australia",
        type: "Full-time",
        salaryRange: "80k - 100k",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8", // Link to Google form
      },
      {
        title: "UX Designer",
        category: "Design",
        location: "Melbourne, Australia",
        type: "Full-time",
        salaryRange: "80k - 100k",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
    ],
  },
  {
    category: "IT",
    description: "Open positions in our IT team.",
    jobs: [
      {
        title: "System Administrator",
        category: "IT",
        location: "Sydney, Australia",
        type: "Full-time",
        salaryRange: "90k - 110k",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
      {
        title: "Backend Developer",
        category: "IT",
        location: "Sydney, Australia",
        type: "Full-time",
        salaryRange: "85k - 105k",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
    ],
  },
  {
    category: "Trainers",
    description: "Open positions in our Trainers team.",
    jobs: [
      {
        title: "Technical Trainer",
        category: "Trainers",
        location: "Brisbane, Australia",
        type: "Full-time",
        salaryRange: "75k - 95k",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
    ],
  },
  {
    category: "Center Director",
    description: "Open positions for Center Directors.",
    jobs: [
      {
        title: "Center Director",
        category: "Center Director",
        location: "Perth, Australia",
        type: "Full-time",
        salaryRange: "100k - 120k",
        googleFormLink: "https://forms.gle/K41ZaUS2tyD25UjA8",
      },
    ],
  },
  {
    category: "MIS",
    description: "Open positions in our MIS team.",
    jobs: [
      {
        title: "MIS Specialist",
        category: "MIS",
        location: "Adelaide, Australia",
        type: "Full-time",
        salaryRange: "85k - 105k",
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
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyNow = () => {
    if (selectedJob) {
      window.open(selectedJob.googleFormLink, "_blank");
    }
  };

  const handleBack = () => {
    setSelectedJob(null); // Clears the selected job and returns to listing
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
            className="border mt-5 lg: border-gray-300 pr-6 px-4 py-2 rounded-md text-gray-600"
          >
            <option value="All">All</option>
            <option value="IT">IT</option>
            <option value="Trainers">Trainers</option>
            <option value="Center Director">Center Director</option>
            <option value="MIS">MIS</option>
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

            <div className="grid md:grid-cols-2 gap-6">
              {category.jobs.map((job, idx) => (
                <JobCard
                  key={idx}
                  job={job}
                  onClick={() => handleJobClick(job)}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobsListing;
