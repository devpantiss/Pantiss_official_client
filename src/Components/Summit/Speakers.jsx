import React from "react";
import Marquee from "react-fast-marquee";

const Speakers = () => {
  const exhibitors = [
    {
      img: "https://indiacsrsummit.in//uploaded_files/de9a8ed9ed92ea46f89bb53c835fb61c.jpg",
      name: "Shri. Naveen Kumar Ji (IAS)",
      designation: "Irrigation Secretary, Government of Uttar Pradesh",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/483c0ee2f1d307a0d0e65fdf62c63ce6.jpg",
      name: "Dr. Kavita Sharma",
      designation: "Director, Social Welfare Board",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/5e51de9194bb3e776fbc07359122d3cb.png",
      name: "Mr. Ramesh Gupta",
      designation: "CEO, Green Solutions Pvt Ltd.",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/72300f5b798fbcff659df5ef0f9fedfc.jpeg",
      name: "Mrs. Sunita Verma",
      designation: "Deputy Commissioner, Urban Development",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/f9742d09924ecfa13adce83fe4966894.jpg",
      name: "Mr. Ajay Kumar",
      designation: "Managing Director, EcoBuild Pvt Ltd.",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/899ce71436dc248d4d2e597a7775a2f4.jpg",
      name: "Dr. Meena Gupta",
      designation: "Chairperson, National Environment Council",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/eeb784e8d22fbdee9cde59b88534f39e.jpg",
      name: "Mr. Ravi Singh",
      designation: "General Secretary, CSR Forum India",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/c24c0298468ba6e7f50297a196ef1674.jpeg",
      name: "Mrs. Priya Das",
      designation: "Program Director, Clean India Mission",
    },
    {
      img: "https://indiacsrsummit.in//uploaded_files/641fce279dea224cf2b0f6ee07a71477.jpeg",
      name: "Dr. Sanjay Patel",
      designation: "Policy Advisor, UNDP India",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center container mx-auto py-6 px-12">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-red-600 mb-6">Speakers</h2>

      {/* Scrolling Marquee */}
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {exhibitors.map((exhibitor, index) => (
          <div className="py-4">
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 p-4 bg-white ring-2 ring-red-600 shadow-md rounded-lg h-[220px] w-[300px]"
            >
              <img
                src={exhibitor.img}
                alt={exhibitor.name}
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-200"
              />
              <h3 className="text-md font-semibold text-gray-800 mt-3 text-center">
                {exhibitor.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {exhibitor.designation}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Speakers;
