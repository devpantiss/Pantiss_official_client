import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      image:
        "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009145402.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=23117f23e2315d0b0cb48885c376e1ff949cef4db18874c567cd396284170408e7d9ec4ef356a4bdd32539916b62f88d28257ee50c5839bfd35125a3769a621df53bd4f8ffb17e2af65065c697b0ee34363f8e1fe1524b7f65a98b839ae535570d62010ab789d6bd73f08e2094b17ff63e1efbcc2a2e85b8e611d61828a579cab61a7793cac7031882b9ef06c43ac31f21a0e982fa5bdfa94c77066b93e835d83835a9eb98e8136cb0076653388cc5beccbe18e5a7296cb4176e15df2ef61aef37c8e5d4672ddea33e890c48b4898623948b4ef833ff855d378140be2753f8998666ef6cf2547e53f76caf8cda342f8b309cabba3b8fa95a4c144c8fdb827255", // Replace with actual image URLs
      quote:
        "Humanity should be a central purpose for which we all should live. Becoming a member of the BRAC family has enabled me to realise that. I have not only felt compelled towards its uncompromising values but have also enjoyed a great deal by living by them.",
      name: "Isata Samura",
      title: "Kiva Coordinator, BRAC International Holdings BV",
      location: "BRAC Sierra Leone",
    },
    {
      image:
        "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009143639.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b74e74629f02a71b9572a5d1081c70865556691cba0aaa56ffd2a352495839bb2ac50c1002746a27555eb4670e20919ecf16444f0dd00d22f45b1a81dd1b00a14d482eb78644a8619b0ef100229181a250bb7a90926b6a72551a46f39f10834153f490a216413530a8d6b9220a04d509b2ca780ce8246323e8cdd7aa24bb8af93348c51302e723b9c4d5cc64d76f83e9cd4feff909b7cd89f9f0604053973ce470af81012270dfcbc8e01e12fb2128cd4894a28bc85c11a2d67272f0a201a3ea7f5da7e93ff236b08a55f7e0e360f84f7e39433be50943d5268b052b3d6574ea7ce72072fe9f49909c2c7f6219a36fdaf1ae64ac628672a84ff6e1650d917f15", // Replace with another image URL
      quote:
        "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
      name: "John Doe",
      title: "Team Leader, BRAC USA",
      location: "BRAC New York",
    },
    {
      image:
        "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009145210.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=7a0e21ae7added41c993ecd51a8512583fdb4a4949f84365d18aa7f9712edb75c11af520ef4fb2610eedcb6cf2e4f1bf04dc72a72bafcadbf4350f9bc7b30a5669a034b93b75039ed46572ae800f6ab2e4bbd37959558bc4f2ad6c7de2260e6b93613c38bf9509c8597d85f52ef83cf3f802d5a8059de42d174fad1ea8526c56769e702784c995b54161898e39e99e1e2d8f6aabff500b35b0a30dfe92749164517c8fe18b33d17206c1017c6c96c482abdf48cbeabbb7dc0df01c9278184342d6842948a56716356728438d0dead854b8496a7d38a5e38dd28533f55a19e84efff686ab4974ec37329aeaf5c77f0dd07337ae2320cc6c67b9e58be258a6c389", // Replace with another image URL
      quote:
        "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
      name: "John Doe",
      title: "Team Leader, BRAC USA",
      location: "BRAC New York",
    },
    {
      image:
        "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009143639.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b74e74629f02a71b9572a5d1081c70865556691cba0aaa56ffd2a352495839bb2ac50c1002746a27555eb4670e20919ecf16444f0dd00d22f45b1a81dd1b00a14d482eb78644a8619b0ef100229181a250bb7a90926b6a72551a46f39f10834153f490a216413530a8d6b9220a04d509b2ca780ce8246323e8cdd7aa24bb8af93348c51302e723b9c4d5cc64d76f83e9cd4feff909b7cd89f9f0604053973ce470af81012270dfcbc8e01e12fb2128cd4894a28bc85c11a2d67272f0a201a3ea7f5da7e93ff236b08a55f7e0e360f84f7e39433be50943d5268b052b3d6574ea7ce72072fe9f49909c2c7f6219a36fdaf1ae64ac628672a84ff6e1650d917f15", // Replace with another image URL
      quote:
        "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
      name: "John Doe",
      title: "Team Leader, BRAC USA",
      location: "BRAC New York",
    },
    {
      image:
        "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009143827.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=e58e4c4d217fc2cf9cfbe21320a0f7068358483030ebb90a2566e4ce0e44fb94e3c0945427bc7ecb105521b6683af799aff075a85569301cfbfaffbd5584dfb650489460412fc908557f8c5ac48849e94f9aee16a9adaaa493d4d416712ef73b59131e44e4560fb0a4fb21a7b4cfdaa86fbc52366eb612d13a8167cfcc1f494aa52c194489c021d2dfeb406e77be3b842ee3fd7bb288ca6608a4a4af1e6bba4a08bfa9e593cf51a124f11917d3bdf7890a28aaa2c4c310628ce390a9ef442a9b4bf551d31eabb682a182e0a0c7edef73c47e99cb4d63430bd2cca324a0d39a79696aef609ce6f427df18046c8656e52169b0b28bd341b5ab9ad731e7759a6081", // Replace with another image URL
      quote:
        "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
      name: "John Doe",
      title: "Team Leader, BRAC USA",
      location: "BRAC New York",
    },
    {
      image:
        "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009145053.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=99ad9f5a213962d5484284eb63ced55c7ed5ddd88cc9a2d86c8639ea16c7f7d6c4643d3b1d74f02be42b2fbb29533b67f50f51a1e560efa1ceec33ad484f80bb6265def439b35c59ad4888fce8bd410c504d0d6a563280b9e6dd16211dbdee2571bb31d94c444aeddfed12ad3890c9ade56e0584cdad7e9547b275aad542db308463857edce5c635c9f49134cfbb1f3d72aa4b445c2333debe44bd728622cfcdde54aa10e7dcf46f896d5d85cf490dbd32a79ec4c49e318a7d6db0634f3d86de307cbad4af49fc4a181204b6ec0249cbc8523858054095c8323c4c6c93c3e9f260fe2f05951a5e4892ae04dd2b274a5a85280971fd3394f09fc8ee6477e53e0a", // Replace with another image URL
      quote:
        "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
      name: "John Doe",
      title: "Team Leader, BRAC USA",
      location: "BRAC New York",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full transition-colors duration-300"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`w-4 h-4 rounded-full border transition-all ${
                dot.props.className.includes("slick-active")
                  ? "bg-red-500"
                  : "bg-white border-red-500"
              }`}
            >
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="relative">
        <button
          className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 text-red-500 text-[48px] rounded-full p-2 shadow-lg z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft />
        </button>

        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-row items-center">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>

                {/* Quote Section */}
                <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-12 text-gray-800">
                  <svg
                    className="w-44 h-44 text-gray-300 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 107 96"
                  >
                    <path
                      d="M48 96V47.888H23.887C24.488 32.525 32.526 24.58 48 24.056V0C16 3.672 0 19.635 0 47.888V96h48zm59 0V47.888H82.887C83.488 32.525 91.526 24.58 107 24.056V0C75 3.672 59 19.635 59 47.888V96h48z"
                      fill="#E3E3E3"
                      fillRule="nonzero"
                    />
                  </svg>
                  <p className="text-lg md:text-2xl italic font-light text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <h3 className="mt-4 font-bold text-xl text-red-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.title} <br /> {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          className="absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2 text-red-500 text-[48px] rounded-full p-2 shadow-lg z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
