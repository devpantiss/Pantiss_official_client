import DistrictPhotoGallery from "../../../DistrictPhotoGallery";

const galleryImages = [
  {
    src: "/assets/where/korba-gallery/excavator-operator-training-v1.jpg",
    alt: "Woman trainee operating an excavator under an instructor’s supervision in Korba",
    caption: "Supervised excavator operation and control practice",
  },
  {
    src: "/assets/where/korba-gallery/excavator-safety-inspection-v1.jpg",
    alt: "Excavator operator trainees inspecting hydraulic lines and tracks during safety training",
    caption: "Pre-operation safety checks and equipment maintenance",
  },
  {
    src: "/assets/where/korba-gallery/rpl-practical-assessment-v1.jpg",
    alt: "Experienced worker completing a practical measurement task during an RPL assessment",
    caption: "Hands-on assessment for Recognition of Prior Learning",
  },
  {
    src: "/assets/where/korba-gallery/rpl-upskilling-workshop-v1.jpg",
    alt: "Industrial workers learning electrical testing techniques in a Korba workshop",
    caption: "Targeted upskilling aligned with current industry standards",
  },
];

const Details2 = () => (
  <DistrictPhotoGallery district="KORBA" images={galleryImages} />
);

export default Details2;
