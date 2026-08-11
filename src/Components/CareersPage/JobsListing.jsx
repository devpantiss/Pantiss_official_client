/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import { useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  Clock3,
  MapPin,
  SearchX,
  WalletCards,
} from "lucide-react";

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
        title: "Community Engagement Officer",
        category: "Community Engagement",
        location: "Keonjhar, Odisha",
        type: "Full-time",
        salaryRange: "INR 25,000 per month (Fixed) + Variable (2.5 LPA)",
        googleFormLink: "mailto:hr@pantiss.org",
        description: [
          "Build and maintain strong partnerships with local leaders, stakeholders, and community groups.",
          "Develop engagement plans and create feedback loops to report community needs back to internal leadership.",
          "Proactively reach out to marginalized or hard-to-reach groups to ensure diverse representation.",
          "Oversee community-led initiatives and manage the logistics of local events and outreach campaigns.",
        ],
        qualifications: ["MSW / PG or Graduation in any discipline"],
        experience: ["3–7 years experience in the skilling sector"],
        benefits: [
          "Free food & accommodation facilities are provided only in the training center",
        ],
        applyNote: ["Send your resume to: hr@pantiss.org"],
      },
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

      {
        title: "Business Development Executive",
        category: "Business Development & Partnerships",
        location: "Bhubaneswar, Odisha",
        type: "Full-time",
        salaryRange: "As per Market Standard",
        googleFormLink: "mailto:hr@pantiss.org",
        description: [
          "Identify potential clients, build pipelines, and convert prospects into long-term customers.",
          "Study market trends, competitors, and customer needs to identify new business opportunities.",
          "Implement sales plans, meet revenue targets, and support growth initiatives.",
          "Prepare proposals, present solutions, and negotiate contracts to close deals effectively.",
        ],
        qualifications: ["MBA / MRM"],
        experience: ["3–7 yrs experience in BD"],
        skills: ["Proficient in Report Making, Presentation Making"],
        contact: ["Contact No: 7008388835"],
        applyNote: ["Send your resume to: hr@pantiss.org"],
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
        title: "MIS Coordinator",
        category: "MIS & Reporting",
        location: "Bhubaneswar, Odisha",
        type: "Full-time",
        salaryRange: "As per Market Standard",
        googleFormLink: "mailto:hr@pantiss.org",
        description: [
          "Collect, compile, validate, and maintain accurate MIS data; prepare daily, weekly, and monthly reports for management.",
          "Ensure smooth functioning of MIS systems, update databases regularly, and coordinate with departments for timely data submission.",
          "Analyze data trends, identify gaps or deviations, and share actionable insights to support decision-making.",
          "Maintain proper records, dashboards, and documentation; ensure data accuracy and compliance with organizational standards.",
          "Act as a point of contact for MIS-related queries, support audits/reviews, and communicate reports clearly to stakeholders.",
        ],
        qualifications: ["Graduation in Any Discipline"],
        experience: ["Minimum 2–5 yrs experience in Skilling Sector"],
        applyNote: ["Send your resume to: hr@pantiss.org"],
      },
    ],
  },
];

const careerCategoryConfig = [
  {
    category: "BD & Partnership",
    source: "Business Development & Partnerships",
    description:
      "Build strategic relationships, unlock new opportunities and grow our social impact.",
  },
  {
    category: "Project Management",
    source: "Project Management & Implementation",
    description:
      "Lead programmes, coordinate field teams and turn development plans into measurable outcomes.",
  },
  {
    category: "HR & Admin",
    source: "Human Resources & Administration",
    description:
      "Support our people, culture and organisational operations across programmes and offices.",
  },
  {
    category: "ICT Development",
    source: "ICT Development",
    description:
      "Design and build reliable digital products that strengthen programme delivery and access.",
  },
  {
    category: "Branding & Communication",
    source: null,
    description:
      "Shape clear stories, campaigns and communication that connect communities with our mission.",
  },
  {
    category: "Civil Engineering",
    source: "Civil Engineering",
    description:
      "Plan and deliver safe, sustainable infrastructure for communities and project sites.",
  },
  {
    category: "Research & Advocacy",
    source: "Research and Advocacy",
    description:
      "Generate evidence, influence policy and advance practical solutions to development challenges.",
  },
];

const visibleJobsData = careerCategoryConfig.map(
  ({ category, source, description }) => {
    const sourceCategory = jobsData.find((item) => item.category === source);

    return {
      category,
      description,
      jobs: (sourceCategory?.jobs ?? []).map((job) => ({ ...job, category })),
    };
  }
);

const JobCard = ({ job, onClick }) => {
  return (
    <button
      type="button"
      className="group flex h-full w-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 sm:p-6"
      onClick={onClick}
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            {job.category}
          </span>
          <h3 className="mt-4 text-xl font-semibold leading-snug text-neutral-950 transition group-hover:text-red-700">
            {job.title}
          </h3>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
          <ArrowUpRight aria-hidden="true" size={19} />
        </span>
      </div>

      {job.description?.[0] && (
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-neutral-600">
          {job.description[0]}
        </p>
      )}

      <div className="mt-6 grid gap-3 border-t border-neutral-100 pt-4 text-sm text-neutral-600 sm:grid-cols-2">
        <span className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="text-red-600" size={17} />
          {job.location}
        </span>
        <span className="flex items-center gap-2">
          <Clock3 aria-hidden="true" className="text-red-600" size={17} />
          {job.type}
        </span>
        <span className="flex items-center gap-2 sm:col-span-2">
          <WalletCards
            aria-hidden="true"
            className="text-red-600"
            size={17}
          />
          {job.salaryRange}
        </span>
      </div>
    </button>
  );
};

const DetailList = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <section>
      <h4 className="text-lg font-semibold text-neutral-950">{title}</h4>
      <ul className="mt-3 space-y-2.5 text-neutral-700">
        {items.map((point) => (
          <li key={point} className="flex gap-3 leading-7">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const JobDetails = ({ job, onApply, onBack }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60">
      <header className="border-b border-neutral-200 bg-neutral-950 px-6 py-8 text-white sm:px-10 sm:py-10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft aria-hidden="true" size={18} />
          Back to all roles
        </button>
        <span className="mt-8 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold">
          {job.category}
        </span>
        <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
          {job.title}
        </h3>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" size={17} /> {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock3 aria-hidden="true" size={17} /> {job.type}
          </span>
          <span className="flex items-center gap-2">
            <WalletCards aria-hidden="true" size={17} /> {job.salaryRange}
          </span>
        </div>
      </header>

      <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-9">
          <DetailList title="Role overview" items={job.description} />
          <DetailList title="Qualifications" items={job.qualifications} />
          <DetailList title="Experience" items={job.experience} />
          <DetailList title="Skills" items={job.skills} />
          <DetailList title="Benefits" items={job.benefits} />
        </div>

        <aside className="h-fit rounded-2xl border border-red-100 bg-red-50 p-5 lg:sticky lg:top-24">
          <h4 className="font-semibold text-neutral-950">Interested in this role?</h4>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Review the requirements, then submit your application through the
            official application link.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            onClick={onApply}
          >
            Apply now
            <ArrowUpRight aria-hidden="true" size={18} />
          </button>
          {job.applyNote?.[0] && (
            <p className="mt-4 text-xs leading-5 text-neutral-500">
              {job.applyNote[0]}
            </p>
          )}
        </aside>
      </div>
    </article>
  );
};

const JobsListing = () => {
  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const isValidCategory = visibleJobsData.some(
      (item) => item.category === category
    );

    setFilter(isValidCategory ? category : "All");
  }, [location.search]);

  const handleJobClick = (job) => setSelectedJob(job);
  const handleApplyNow = () =>
    selectedJob &&
    window.open(selectedJob.googleFormLink, "_blank", "noopener,noreferrer");
  const handleBack = () => setSelectedJob(null);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSelectedJob(null);
  };

  const filteredJobs =
    filter === "All"
      ? visibleJobsData
      : visibleJobsData.filter((category) => category.category === filter);

  const totalOpenings = visibleJobsData.reduce(
    (total, category) => total + category.jobs.length,
    0
  );

  return (
    <main className="bg-neutral-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 border-b border-neutral-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
          <Heading
            text="Start doing work that matters"
            color="text-neutral-950"
            bgColor="bg-red-600"
          />
            <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
            <p className="mt-3 text-sm font-medium text-neutral-500">
              {totalOpenings} open {totalOpenings === 1 ? "position" : "positions"} across {visibleJobsData.length} career areas
            </p>
          </div>

          <div className="w-full lg:w-72">
            <label
              htmlFor="career-category-filter"
              className="mb-2 block text-sm font-semibold text-neutral-800"
            >
              Filter by career area
            </label>
          <select
              id="career-category-filter"
            value={filter}
            onChange={handleFilterChange}
              className="min-h-11 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-neutral-700 shadow-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
          >
              <option value="All">All career areas</option>
              {visibleJobsData.map((category) => (
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
          <div className="space-y-8">
            {filteredJobs.map((category, index) => (
              <section
                key={category.category}
                aria-labelledby={`career-category-${index}`}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
              >
                <header className="flex flex-col gap-4 border-b border-neutral-200 bg-neutral-950 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                      Career area {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2
                      id={`career-category-${index}`}
                      className="mt-2 text-2xl font-semibold"
                    >
                      {category.category}
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-300">
                      {category.description}
                    </p>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">
                    <BriefcaseBusiness aria-hidden="true" size={17} />
                    {category.jobs.length} open
                  </span>
                </header>

            {category.jobs.length > 0 ? (
                  <div className="grid gap-5 p-5 md:grid-cols-2 sm:p-8">
                    {category.jobs.map((job) => (
                      <JobCard
                        key={`${job.title}-${job.location}`}
                        job={job}
                        onClick={() => handleJobClick(job)}
                      />
                ))}
              </div>
            ) : (
                  <div className="flex items-center gap-4 px-6 py-8 text-neutral-500 sm:px-8">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                      <SearchX aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="font-medium text-neutral-800">
                        No active positions right now
                      </p>
                      <p className="mt-1 text-sm">
                        Please check back for future opportunities in this career area.
                      </p>
                    </div>
                  </div>
            )}
              </section>
            ))}
          </div>
      )}
      </div>
    </main>
  );
};

export default JobsListing;
