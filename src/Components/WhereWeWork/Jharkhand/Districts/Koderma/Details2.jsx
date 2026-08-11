import DistrictPhotoGallery from "../../../DistrictPhotoGallery";

// Memoized gallery images
const galleryImages = [
  {
    src: "/assets/where/district-work/agriculture-livelihood.jpg",
    alt: "Farmers participating in practical agricultural livelihood training",
    caption: "Strengthening farm livelihoods through practical learning",
  },
  {
    src: "/assets/where/district-work/technical-skills-training.jpg",
    alt: "Young adults learning facility-management and technical skills",
    caption: "Technical training for safer, more reliable facilities",
  },
  {
    src: "/assets/where/district-work/gis-household-survey.jpg",
    alt: "A field team conducting a digital household survey",
    caption: "Data-driven planning for rural communities",
  },
  {
    src: "/assets/where/district-work/indigenous-community.jpg",
    alt: "Community members taking part in a development consultation",
    caption: "Local voices shaping inclusive development programmes",
  },
  {
    src: "/assets/where/district-work/health-nutrition.jpg",
    alt: "A community health and nutrition outreach session",
    caption: "Connecting livelihoods with community well-being",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="KODERMA" images={galleryImages} />
);

export default Details2;
