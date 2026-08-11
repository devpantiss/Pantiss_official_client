import DistrictPhotoGallery from "../../../DistrictPhotoGallery";

// Memoized gallery images
const galleryImages = [
  {
    src: "/assets/where/district-work/mine-land-reclamation.jpg",
    alt: "Community-led restoration work on a former mining landscape",
    caption: "Reclaiming mined land and rebuilding local ecosystems",
  },
  {
    src: "/assets/where/district-work/technical-skills-training.jpg",
    alt: "Mining-sector trainees learning technical and safety skills",
    caption: "Recognition of Prior Learning and safety upskilling",
  },
  {
    src: "/assets/where/district-work/gis-household-survey.jpg",
    alt: "Survey team gathering digital information in a local community",
    caption: "Mapping community priorities across mining-affected areas",
  },
  {
    src: "/assets/where/district-work/rehabilitation-resettlement.jpg",
    alt: "Residents taking part in a rehabilitation planning meeting",
    caption: "Community participation in rehabilitation and resettlement",
  },
  {
    src: "/assets/where/district-work/indigenous-community.jpg",
    alt: "Community members discussing local development priorities",
    caption: "Inclusive planning with Dhanbad’s local communities",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="DHANBAD" images={galleryImages} />
);

export default Details2;
