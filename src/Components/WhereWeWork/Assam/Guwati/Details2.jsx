import DistrictPhotoGallery from "../../DistrictPhotoGallery";

const galleryImages = [
  {
    src: "/assets/where/guwahati-gallery/rpl-practical-assessment-v1.jpg",
    alt: "Experienced Assamese technician completing a practical measurement task during an RPL assessment",
    caption: "Practical skills assessment for Recognition of Prior Learning",
  },
  {
    src: "/assets/where/guwahati-gallery/rpl-upskilling-workshop-v1.jpg",
    alt: "Experienced workers learning modern diagnostic techniques in a Guwahati workshop",
    caption: "Targeted upskilling aligned with current industry standards",
  },
  {
    src: "/assets/where/guwahati-gallery/mine-land-reclamation-v1.jpg",
    alt: "Community members restoring former mining land with native saplings and water management",
    caption: "Community-led land restoration and native reforestation",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="GUWAHATI" images={galleryImages} />
);

export default Details2;
