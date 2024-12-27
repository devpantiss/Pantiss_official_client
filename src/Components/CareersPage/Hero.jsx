import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211012082547.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=164e623ac019cfa0321ab116d99c61fa0b74f8e3f11407361c14fb14583ff919063a1614ab10bd89384333dcfde90cfa9c521062cc0d4eedf1c740b49a68d85a3514c617ff797642c9a9640f9eb743d92ffb1465365618bac6eb6c625e4b8110b5536e7edefbd539d597f7206f980202613571ae693d7c2e581b71a33f077b188d9bd766520537cdbf06aab9ffa1f5b001c246717ea9c03b559a2d2621807491ca102ce20ae97eae758178d6de98dc4f786899214f67266c08aa964df2ffd5a523598ae1120e63f0bd0560a5b7fd5672398674e29d9a59b33b44ad4915ce08740f39e197e14df03233c70057c61dec95698fa400379b2c86f4e181214b5f963b",
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211012082524.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=c92213357836857127a38123f2fb2aff6cc7963b9f9cbe1747e9e99ca06f0335359eee02af924930c5a60b8b1ac6486faa3fc15afe3add0782fb6145a8ed102bd55ba24200712c3347828146420e28205fc7f4b4a93ae8de617790e0e8ec3c8ec9f68c9b4d8bf246f5b1027993d7e913294094ee5e8e2ce81a9139e45bd40fbae9bf92f019c6e80b8daf5497bf9f7c69bc53dde7e053bb82f5da80c4ca1728387908550d5bcbb6e4290d0139855c3fb31b79de2e5011b5da5c62472f74948a440d0095b2a2061ffd40f279364a823a2ec862dbc394c41fe825cbc5c8c448691d1ade5d60d9c15229d90328b6c923d7fe68db7a4a4f388bb043e6f94d215d9f2c",
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211012082506.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=1fdbc75d418bd01a1fd5eeb9aee21c8fc64ba341447020c577cb94976424657beccbaf53f0197f9b42df1cf2b647bc40bed46e39d53f7857d44ef7f1ab2d23e5141e8f02b42d2d60b8f8fec2f8efdb0701e79e6e7172df3046c1e00ba2c19beef79a25cd459a9a938ff4ae2e2bf35d5be20b52b08ff9eef5f9a05cee9daf5f4095ba1ebe3e6657c0031b1e5da8064b8766dd0c2eca6922734d9c44d5f4a51cfd2386584661bf1021e7e0b387523d047e804c42fa2345582204816dcf7ec3c6ce309a74df40f0e4a27c5157bf43ef99a3da2c7b5f0df98df073a84bd4e38cb116eb72aae9057ec813db5be343e27a484ef1d4021e5d626de444a15cb2d96b725a",
    "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211012082448.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=a08beaff2f2f6374618a5f3645a64c15b31e3fe88c2a8c274a66574a42eec63aa21840c5ba53822de044e4dba3911855e6332e926612c7a1d4212cc762ac70bc277edbc6b80d59e56556fb7af77a511e17eacbef363705ebddd274f3287122ec93af07f14e41f81338aef0181640c1f7c1bcb352af5584d03254eadd678f11c26f72bc1ce1b772dcb7a580ab2bc00138d346079d917f0f2b5a64b3885ba4f010f5686772d41198822a65dd0fa2bd277a33e9aa2db55fe60d99f8dc5d888137634b70d8193a8ebb813dd8d29a8eba232d655f2dd3d88aa6d213ad41c68e61033c375715c45a26191c4be6fe4550440fdc7032bd6fd2a07de20a37954799c3d655"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">JOIN THE WORLD'S BIGGEST FAMILY</h1>
        <p className="mt-4 text-lg md:text-xl">Pantiss Careers</p>
        <div className="mt-8 flex">
          <input
            type="text"
            placeholder="Enter keyword(s) or location"
            className="px-4 py-2 rounded-l-md focus:outline-none w-80"
          />
          <button className="bg-red-500 px-6 py-2 rounded-r-md text-white font-bold hover:bg-red-600">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
