import DistrictPhotoGallery from "../../../DistrictPhotoGallery";

const galleryImages = [
  {
    src: "/assets/where/neyveli-gallery/power-technician-training-v1.jpg",
    alt: "Tamil trainees performing an electrical diagnostic exercise with their instructor",
    caption: "Hands-on power plant technician training",
  },
  {
    src: "/assets/where/neyveli-gallery/mine-operator-safety-v1.jpg",
    alt: "Mine operator trainees attending a pre-shift safety briefing in Neyveli",
    caption: "Lignite mine operations and workplace safety training",
  },
  {
    src: "/assets/where/neyveli-gallery/rehabilitation-livelihood-v1.jpg",
    alt: "Residents discussing a resettlement plan beside a community tailoring enterprise",
    caption: "Participatory resettlement and sustainable livelihood support",
  },
  {
    src: "/assets/where/neyveli-gallery/community-nutrition-health-v1.jpg",
    alt: "Community health worker leading a nutrition session for mothers and children",
    caption: "Community nutrition, maternal health and child well-being",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="NEYVELI" images={galleryImages} />
);

export default Details2;
