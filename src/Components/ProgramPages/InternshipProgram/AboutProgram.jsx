import React from "react";
import Slider from "react-slick";

const AboutProgram = () => {
  // Sample images for the slider
  const images = [
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009151728.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20250106%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250106T000844Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=bdc381c84c1979cbb96439e436e226b23136e00a38a3a6086815c03c46aac46e08c9d036881de6201fc3c589e4e32037c1113ffb3b7a5fe8734d2a94448e4f56e4e96fa36cc4d96ed955833c079072ba2244111aaddbd7c598edba123886f8d7a10571b7819220269a03c45089f912ef17804fcdf29fa9098ab3125f343156d55e87d183fce22bcbd196b98f44bea39e579603a1bdf8b312aecfc0012e9661bdd9fac05e26840ae4e1531813211ff7874170b07fea38aa35debc87e2639eb7c25156133c978666bd5e3a5971d20e27f799ac91c0ca960c102e558eef1bdf2e920509431abb83279892140795806b376d281bb371d8b375b7372e1d7a4277746d",
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009151614.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20250106%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250106T000844Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2097fbd6974adb9a2c53c2a290c09f91fb3af322d7aa392e09ac6d8fad75d5b799fa202a13bce09634538ba55e6cfa82a79edd8079efd7fe5a01fd9609755e0c2271cc06564e98c4dc9d7610e91880fee3a6611984cb747e7a1e7011f0c55529aa26866a3952d02fd0f8e209729ca2cf2f653880d41124ebf5a4837bb6f67fbca598ed679a5ebc1c148e54bc74c369690f5945ff505e2a7b02b6956612c1aef64be9a9c4b61ee1b1ceccc02310c47acb0cee45de3b74e25480fd830bf8bb5a9791223137e25d095d45cd3fbf2cff9343e2193b1bf2ac9145796571cb6110bd8bd181a2861290e622188d72ecd0bff6e437dfe6252336b42d36fa6c7d1a977ab3",
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009151631.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20250106%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250106T000844Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=5bf92b437d55eabd71b5558eeae11bb14110902361848121456160465a7d896e3950806e5bf543def250e30fd0a158f7c2d7fad8739aeba593a7ef3a2a4a01e687f70060cfaab0d789a2d7e053132ca8ccedb83cbd8f809651766349ff7ac637ec522551ca38a5c9137fa67ddd9f6be283509bcf425eeba37a3c682dda9f7fbe1dfbb532c7762a8c2a60506424fcf60083473833726f4673108fe3c839f4a21d1df4355e66fbf1bdea73eec3c13df3b430af281eae1f0f1a77f259189f76d786e2ca7984772962d12f72af798746a9a3d7c548de2ec73adabfd5d0153d4604fac1ca37e53e3c4318d7ffb675ff419f08814cea956042c18a169d5c1435863e9c",
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009151852.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20250106%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250106T000844Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=841319d4b7bf283f7b9568a9b9914900a403adf27383d2bf3c7a175033784db98cd2d7d228692c53d51195395015e04731b4b2b085d94d0c96f05e2bdcbd5a84d90316e9f4bb48c25abaa0373b66bcd4d5fcfcfa6122e9ac73cc2c87c3291d40d3257a2b658546b0dce8f0044a96beead9a4624856f80165ee8c685c93737500c3dfeaf61197d18a113c9578c40fa2c9c93e41da693a35d3b4da188be9c376e742d9213d078d071c9ceadf02f5e89e7161cd56bec7f7485ea19b6b25291cc0a3d303138d1f331f7f223ad3d410093f32e6deb4dc4c4adab792efd55baca1cc4289ff775478fff33d48fada7680cf58db60b7ae770ef4fae3255539d16cbc96d1",
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Heading and Description */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          THE <span className="text-red-600">PROGRAMME</span>
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          The Regular Internship Programme offers a wide range of opportunities
          for graduate and post-graduate students. Interns benefit from exposure
          to an array of projects and initiatives in social development over a
          period of three months. Complete with hands-on learning, the programme
          opens up opportunities in fields related to poverty reduction,
          humanitarian response, social enterprises, and much more. BRIDGE
          Internship programme offers a meaningful opportunity for young talents
          to bridge their learning with practical experience. Jumpstart your
          career through direct mentorship from seasoned leaders in the
          industry. This six-month internship is for newly graduates or students
          currently studying in their last semester. The programme can open
          opportunities to pursue a full-time career at Pantiss.
        </p>

        {/* Image Slider */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
