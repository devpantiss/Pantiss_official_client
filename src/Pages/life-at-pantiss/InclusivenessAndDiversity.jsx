import LifeDetailPage from "../../Components/CareersPage/LifeDetailPage";

const sections = [
  {
    title: "Disability inclusion",
    body: "We work toward accessible environments and equitable opportunities for people with disabilities. Our programmes focus on practical training, confidence and pathways to sustainable employment.",
  },
  {
    title: "Gender equity",
    body: "Gender-responsive thinking informs how we design programmes and how we work as a team. We aim to create space for women to build skills, exercise leadership and pursue economic independence.",
  },
  {
    title: "Cultural diversity",
    body: "Our work is strengthened by colleagues and communities with different cultural, linguistic and lived experiences. Respectful listening helps us respond to complex local realities with greater care.",
  },
  {
    title: "Inclusion in action",
    body: "For us, inclusion is a daily practice reflected in how people participate, make decisions and access opportunity. We continue learning from communities and improving the systems around our work.",
  },
];

const InclusivenessAndDiversity = () => (
  <LifeDetailPage
    title="Inclusiveness and diversity"
    intro="Different perspectives make our work more thoughtful, more representative and more capable of creating change that reaches everyone."
    heroImage="/assets/careers/life/optimized/diversity.jpg"
    heroAlt="A diverse group collaborating in an inclusive workplace"
    secondaryImage="/assets/careers/vocational.JPG"
    secondaryAlt="Participants learning practical vocational skills"
    sections={sections}
    statement="Everyone should be able to participate with dignity, contribute their perspective and have a fair opportunity to grow."
  />
);

export default InclusivenessAndDiversity;
