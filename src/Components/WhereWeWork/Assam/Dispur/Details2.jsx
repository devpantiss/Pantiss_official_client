import DistrictPhotoGallery from "../../DistrictPhotoGallery";

const galleryImages = [
  {
    src: "/assets/where/dispur-gallery/hemm-operator-training-v1.jpg",
    alt: "Assamese woman trainee operating an excavator during supervised HEMM training",
    caption: "Supervised excavator and HEMM operator training",
  },
  {
    src: "/assets/where/dispur-gallery/rehabilitation-livelihood-v1.jpg",
    alt: "Assamese residents discussing a settlement plan beside a community weaving enterprise",
    caption: "Participatory resettlement and sustainable livelihood support",
  },
  {
    src: "/assets/where/dispur-gallery/community-nutrition-health-v1.jpg",
    alt: "Community health workers supporting nutrition, clean water and maternal care near Dispur",
    caption: "Integrated nutrition, safe water and maternal health services",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="DISPUR" images={galleryImages} />
);

export default Details2;
