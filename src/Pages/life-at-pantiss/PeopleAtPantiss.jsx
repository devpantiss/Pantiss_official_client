import LifeDetailPage from "../../Components/CareersPage/LifeDetailPage";

const sections = [
  {
    title: "Work with purpose",
    body: "A career at Pantiss is an opportunity to contribute to meaningful change in underserved communities. Our teams connect programmes with practical pathways to empowerment, education and employment.",
  },
  {
    title: "Grow through responsibility",
    body: "People are encouraged to learn by doing, take ownership and grow across disciplines. Field insight, collaboration and reflective practice shape how our teams develop their careers.",
  },
  {
    title: "Create impact together",
    body: "Our work brings programme teams, community partners and local institutions together around shared challenges. This collaborative culture helps turn ideas into solutions that can last.",
  },
  {
    title: "Keep communities at the centre",
    body: "Whether the focus is skills, health, education or livelihoods, we listen to local priorities and design with the people whose lives and futures are connected to the work.",
  },
];

const PeopleAtPantiss = () => (
  <LifeDetailPage
    title="People at Pantiss"
    intro="Our people bring expertise, empathy and a shared sense of purpose to work that strengthens communities and expands opportunity."
    heroImage="/assets/careers/life/team.jpeg"
    heroAlt="Pantiss colleagues working together"
    secondaryImage="/assets/careers/benefits/IMG_20241120_122703579_HDR.jpg"
    secondaryAlt="Pantiss team members collaborating around a table"
    sections={sections}
    statement="We believe the strongest social impact begins with people who are trusted to learn, lead and collaborate."
  />
);

export default PeopleAtPantiss;
