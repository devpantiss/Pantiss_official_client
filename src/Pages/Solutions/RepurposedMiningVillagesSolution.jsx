import {
  BriefcaseBusiness,
  Building2,
  Leaf,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import SolutionDetailPage from "../../Components/Solutions/SolutionDetailPage";

const solution = {
  eyebrow: "Solution 02 · Beyond closure",
  title: "Repurposed Mining Villages",
  description:
    "A place-based pathway that transforms stable post-mining land into safe villages, productive landscapes, and long-term community opportunity.",
  heroImage: "/assets/homepage/mining-lifecycle/post-mine-after-village.png",
  heroAlt:
    "Aerial view of a restored former mine containing a green village, community building, roads, and cultivated plots",
  stats: [
    { value: "Mine-to-village", label: "A complete land transition pathway" },
    { value: "Long-term", label: "Stewardship beyond physical closure" },
    { value: "Livelihood-first", label: "Local economic regeneration" },
  ],
  overviewTitle: "Mine closure can become a new beginning",
  overview: [
    "A closed mine can leave behind degraded land, safety risks, disconnected communities, and an uncertain local economy. Repurposed Mining Villages treat closure as a development opportunity rather than an endpoint.",
    "The solution begins with technical safety and ecological restoration, then layers in community planning, essential infrastructure, productive land uses, and locally owned livelihoods. Every reuse decision responds to the site and the aspirations of nearby communities.",
  ],
  contextImage: "/assets/homepage/mining-lifecycle/post-mine-before.jpg",
  contextAlt: "Aerial view of an open-cast mine before ecological and community reuse",
  contextCaption:
    "Transform a closed mine from a physical liability into a safe, productive, community-owned landscape.",
  pillarsTitle: "A complete transition from mine site to living landscape",
  pillarsDescription:
    "Technical closure, ecological repair, settlement planning, infrastructure, livelihoods, and stewardship move forward as one coordinated regeneration programme.",
  pillars: [
    {
      title: "Safe land transition",
      description:
        "Geotechnical assessment, risk zoning, stabilization, and closure planning establish a safe foundation for reuse.",
      Icon: ShieldCheck,
    },
    {
      title: "Ecological restoration",
      description:
        "Soil recovery, native planting, water management, and biodiversity measures rebuild landscape function.",
      Icon: Leaf,
    },
    {
      title: "Village infrastructure",
      description:
        "Homes, shared facilities, water, energy, drainage, and public spaces are designed for the restored terrain.",
      Icon: Building2,
    },
    {
      title: "Connected mobility",
      description:
        "Safe internal roads and regional links connect residents with services, employment, and nearby markets.",
      Icon: Route,
    },
    {
      title: "Regenerative livelihoods",
      description:
        "Agriculture, restoration enterprises, services, and skills generate income suited to the post-mining economy.",
      Icon: BriefcaseBusiness,
    },
    {
      title: "Shared stewardship",
      description:
        "Community institutions and multi-stakeholder governance protect assets and guide the landscape over time.",
      Icon: Users,
    },
  ],
  processTitle: "From closure risk to a shared post-mining future",
  processDescription:
    "Every phase connects site safety with community ambition, ensuring that land reuse is technically credible, economically useful, and locally supported.",
  process: [
    {
      title: "Assess safety and opportunity",
      description:
        "Map land stability, contamination, water, access, ecology, legal conditions, and possible future-use zones.",
    },
    {
      title: "Agree on a reuse vision",
      description:
        "Co-design scenarios with communities, authorities, and mine owners, balancing local need with technical feasibility.",
    },
    {
      title: "Restore and build",
      description:
        "Sequence land rehabilitation, green infrastructure, village services, housing, and productive uses safely.",
    },
    {
      title: "Grow the local economy",
      description:
        "Incubate enterprises, build skills, connect markets, and establish governance for long-term stewardship.",
    },
  ],
  outcomesImage: "/assets/homepage/mining-lifecycle/post-mine-after-village.png",
  outcomesTitle: "A landscape that works again—for nature and people",
  outcomesDescription:
    "The goal is more than physical reclamation: it is a safe place to live, a productive local economy, restored ecological function, and stewardship that lasts beyond closure.",
  outcomes: [
    "Reduced safety and environmental risks on former mine land",
    "Restored vegetation, soil health, and water systems",
    "Safe homes and reliable community infrastructure",
    "New livelihoods adapted to the post-mining economy",
    "Productive reuse of previously degraded land",
    "Clear local responsibility for long-term stewardship",
  ],
  collaborationTitle: "Closure planned with the people who inherit it",
  collaborationDescription:
    "A credible post-mining transition needs continuous coordination between nearby communities, mine owners, regulators, local government, and specialists across the full closure horizon.",
  collaborators: [
    {
      title: "Affected communities",
      description:
        "Residents shape future land uses, identify livelihood priorities, monitor safeguards, and steward shared assets.",
    },
    {
      title: "Mine owners",
      description:
        "Operators provide site knowledge, closure resources, risk management, and a responsible transition commitment.",
    },
    {
      title: "Government and regulators",
      description:
        "Authorities align approvals, land-use decisions, safeguards, public services, and long-term institutional support.",
    },
    {
      title: "Restoration and livelihood experts",
      description:
        "Multidisciplinary teams connect ecology, engineering, settlement design, enterprise, finance, and facilitation.",
    },
  ],
  enablers: [
    {
      label: "Safety first",
      value: "Geotechnical, environmental, and water risks define where and how future uses can develop responsibly.",
    },
    {
      label: "Phased investment",
      value: "Closure works, public infrastructure, and economic activity are sequenced against clear readiness gates.",
    },
    {
      label: "Long-term stewardship",
      value: "Defined ownership, maintenance funding, monitoring, and local governance protect the regenerated landscape.",
    },
  ],
  closingTitle: "Turn mine closure into a platform for shared prosperity.",
  closingDescription:
    "Pantiss brings community engagement, spatial planning, livelihoods, and programme delivery together to shape credible post-mining futures.",
};

const RepurposedMiningVillagesSolution = () => (
  <SolutionDetailPage solution={solution} />
);

export default RepurposedMiningVillagesSolution;
