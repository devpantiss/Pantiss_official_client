import LifeDetailPage from "../../Components/CareersPage/LifeDetailPage";

const sections = [
  {
    title: "A culture of openness",
    body: "We want colleagues to be able to speak honestly about challenges in their working lives. Respectful conversations and supportive managers can help teams identify concerns before they become overwhelming.",
  },
  {
    title: "Confidential support",
    body: "When professional support is needed, privacy and dignity matter. Employees should be able to seek appropriate guidance without stigma and with confidence that personal information is handled carefully.",
  },
  {
    title: "Healthy ways of working",
    body: "Wellbeing is shaped by workload, clarity, connection and time to recover. We encourage thoughtful work practices, regular communication and an environment where asking for help is accepted.",
  },
  {
    title: "Safeguarding wellbeing",
    body: "A healthy workplace must also be safe and inclusive. Safeguarding, non-discrimination and responsible reporting systems form part of the wider support around our people.",
  },
];

const WorkplaceWellness = () => (
  <LifeDetailPage
    title="Investing in mental health"
    intro="We are working toward a culture where wellbeing is treated with care, conversations are free from stigma and people feel supported to do their best work."
    heroImage="/assets/careers/life/optimized/mental-health.jpg"
    heroAlt="A calm and supportive workplace environment"
    sections={sections}
    statement="Mental wellbeing deserves the same care and seriousness as physical wellbeing."
  />
);

export default WorkplaceWellness;
