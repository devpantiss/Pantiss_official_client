import LifeDetailPage from "../../Components/CareersPage/LifeDetailPage";

const sections = [
  {
    title: "Respect without exception",
    body: "Every colleague deserves a workplace free from harassment, discrimination and intimidation. Respect and dignity are expectations for every interaction, role and level of the organisation.",
  },
  {
    title: "Prevention through awareness",
    body: "Clear policies and regular awareness help teams recognise unacceptable conduct, understand boundaries and share responsibility for maintaining a safe professional environment.",
  },
  {
    title: "Confidential ways to speak up",
    body: "Concerns should be heard sensitively and handled through appropriate, confidential channels. People who raise concerns in good faith should be treated fairly and protected from retaliation.",
  },
  {
    title: "Accountability and action",
    body: "Reports are expected to be addressed promptly, impartially and in line with applicable policy and law. Accountability is essential to maintaining trust across the workplace.",
  },
];

const ZeroToleranceToHarassment = () => (
  <LifeDetailPage
    title="A workplace built on dignity"
    intro="Pantiss is committed to a safe and inclusive workplace where every person can contribute without fear of harassment or discrimination."
    heroImage="/assets/careers/life/optimized/workplace-respect.jpg"
    heroAlt="Indian colleagues participating in a respectful workplace discussion"
    sections={sections}
    statement="Safety is not only a policy. It is a shared responsibility reflected in how we listen, respond and hold ourselves accountable."
  />
);

export default ZeroToleranceToHarassment;
