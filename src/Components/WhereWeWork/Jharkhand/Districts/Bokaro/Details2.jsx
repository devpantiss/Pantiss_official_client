import DistrictPhotoGallery from "../../../DistrictPhotoGallery";

// Memoized gallery images
const galleryImages = [
  {
    src: "/assets/where/bokaro-district-card-v2.jpg",
    alt: "Technical trainees walking through a modern steel-industry facility",
    caption: "Building an industry-ready workforce for Bokaro’s steel sector",
  },
  {
    src: "/assets/where/district-work/technical-skills-training.jpg",
    alt: "Young adults taking part in practical technical skills training",
    caption: "Hands-on operator and industrial safety training",
  },
  {
    src: "/assets/where/district-work/plastic-recycling.jpg",
    alt: "Workers sorting recyclable plastic at a processing facility",
    caption: "Circular-economy skills and plastic-waste management",
  },
  {
    src: "/assets/where/district-work/mine-land-reclamation.jpg",
    alt: "Community members working on green mine-land restoration",
    caption: "Restoring industrial landscapes through community participation",
  },
  {
    src: "/assets/where/district-work/gis-household-survey.jpg",
    alt: "Field team conducting a digital household survey",
    caption: "Evidence-led planning for mining-affected communities",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="BOKARO" images={galleryImages} />
);

export default Details2;
