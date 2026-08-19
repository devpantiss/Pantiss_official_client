import {
  Building2,
  HeartPulse,
  Map,
  Sprout,
  Sun,
  Users,
} from "lucide-react";
import SolutionDetailPage from "../../Components/Solutions/SolutionDetailPage";

const solution = {
  eyebrow: "Solution 01 · Before extraction",
  title: "Model Mining Villages",
  description:
    "A community-led blueprint for turning mining-region settlements into safe, connected, climate-resilient places where families can thrive.",
  heroImage: "/assets/homepage/mining-lifecycle/pre-village-after.jpg",
  heroAlt:
    "Aerial view of a planned model village with homes, solar rooftops, roads, and community facilities",
  stats: [
    { value: "6", label: "Connected development pillars" },
    { value: "3", label: "Mining states represented" },
    { value: "Community-led", label: "Planning and governance model" },
  ],
  overviewTitle: "Village development planned around people, not projects",
  overview: [
    "Mining-affected settlements often experience fragmented infrastructure, limited access to services, and livelihood uncertainty. Model Mining Villages bring these priorities into one coordinated plan shaped with the people who live there.",
    "The solution combines spatial evidence, household-level needs, resilient infrastructure, essential services, local livelihoods, and village institutions. The result is a practical roadmap that communities, government, and partners can implement and monitor together.",
  ],
  contextImage: "/assets/homepage/mining-lifecycle/pre-village-before.jpg",
  contextAlt: "Aerial view of an existing rural settlement before integrated village planning",
  contextCaption:
    "Start with the existing settlement—its people, land, culture, services, risks, and aspirations.",
  pillarsTitle: "Everything a thriving village needs—planned together",
  pillarsDescription:
    "Infrastructure, services, livelihoods, clean energy, and governance are designed as one village system so every investment contributes to a shared long-term vision.",
  pillars: [
    {
      title: "Spatial planning",
      description:
        "GIS, drone surveys, and participatory mapping turn local knowledge into an actionable village development plan.",
      Icon: Map,
    },
    {
      title: "Resilient infrastructure",
      description:
        "Safe roads, drainage, housing, water systems, and shared spaces are planned as one connected network.",
      Icon: Building2,
    },
    {
      title: "Health and wellbeing",
      description:
        "Accessible primary care, nutrition, sanitation, and safe drinking water strengthen everyday wellbeing.",
      Icon: HeartPulse,
    },
    {
      title: "Local livelihoods",
      description:
        "Agriculture, enterprise, skills, and market connections create diverse income pathways beyond mining.",
      Icon: Sprout,
    },
    {
      title: "Clean energy",
      description:
        "Solar and resource-efficient systems lower operating costs and improve the reliability of village services.",
      Icon: Sun,
    },
    {
      title: "Community governance",
      description:
        "Village institutions, inclusive committees, and transparent dashboards support long-term local ownership.",
      Icon: Users,
    },
  ],
  processTitle: "From village evidence to local ownership",
  processDescription:
    "A phased delivery process keeps community priorities, technical feasibility, public investment, and long-term maintenance aligned from the beginning.",
  process: [
    {
      title: "Listen and map",
      description:
        "Build a shared baseline through household engagement, social mapping, spatial surveys, and service-gap analysis.",
    },
    {
      title: "Co-design the village plan",
      description:
        "Translate community priorities into phased layouts, service standards, livelihood actions, and accountable budgets.",
    },
    {
      title: "Deliver integrated works",
      description:
        "Coordinate infrastructure, services, capacity building, and enterprise support to avoid fragmented implementation.",
    },
    {
      title: "Transfer ownership and measure",
      description:
        "Strengthen local institutions, establish maintenance systems, and track outcomes through transparent community review.",
    },
  ],
  outcomesImage: "/assets/homepage/mining-lifecycle/pre-village-after.jpg",
  outcomesTitle: "Progress people can see, use, and sustain",
  outcomesDescription:
    "Success is measured in stronger daily services, safer infrastructure, resilient household economies, and a community equipped to guide its own future.",
  outcomes: [
    "Reliable access to safe water, sanitation, health, and education",
    "Safer, climate-responsive homes and public infrastructure",
    "More diverse and resilient household incomes",
    "Stronger participation of women, youth, and vulnerable groups",
    "Transparent village planning and progress monitoring",
    "Community capacity to operate and maintain shared assets",
  ],
  collaborationTitle: "One village plan, shared responsibility",
  collaborationDescription:
    "Transformation works when residents, public institutions, technical teams, and funding partners make decisions from the same evidence and remain accountable to the same outcomes.",
  collaborators: [
    {
      title: "Village communities",
      description:
        "Residents define priorities, validate plans, participate in delivery, and lead the stewardship of community assets.",
    },
    {
      title: "Government institutions",
      description:
        "District and local bodies align schemes, approvals, service standards, and ongoing public provision.",
    },
    {
      title: "Industry and CSR partners",
      description:
        "Partners provide patient capital, technical participation, and long-term commitment to measurable outcomes.",
    },
    {
      title: "Technical and civil-society teams",
      description:
        "Specialists connect planning, engineering, livelihoods, inclusion, facilitation, and independent learning.",
    },
  ],
  enablers: [
    {
      label: "Evidence",
      value: "GIS, household data, service baselines, and community knowledge create one trusted view of the village.",
    },
    {
      label: "Inclusion",
      value: "Women, youth, Indigenous communities, and vulnerable households participate meaningfully in each decision.",
    },
    {
      label: "Accountability",
      value: "Clear milestones, transparent reviews, and shared monitoring keep delivery visible and responsive.",
    },
  ],
  closingTitle: "Build a village roadmap grounded in local priorities.",
  closingDescription:
    "Pantiss works with communities, public institutions, and industry partners to design and deliver integrated village transformation programmes.",
};

const ModelMiningVillagesSolution = () => <SolutionDetailPage solution={solution} />;

export default ModelMiningVillagesSolution;
