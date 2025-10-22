import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const whatWeDo = [
    "Planning, Policy & Governance (PPG)",
    "TVET (Technical, Vocational, Educational Training)",
    "Livelihood & Entrepreneurship",
    "Health & Nutrition",
    "Water & Sanitation",
    "Environment & Ecology",
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section: About */}
          <div>
            <img
              src="https://pantiss.com/wp-content/uploads/2022/08/logo.png"
              alt="Pantiss Logo"
              className="w-44 mx-auto md:mx-0 mb-4"
            />
            <p className="text-white text-lg font-semibold mb-2">
              Pantiss Group
            </p>
            <p className="text-white">
              Pantiss Group is an organization that works for mining-affected
              communities across Eastern Ghats & Chotanagpur Plateau. We believe
              in building sustainable enterprises for one of the most vulnerable
              groups of the world.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:text-red-600 hover:bg-white rounded-full p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:text-red-600 hover:bg-white rounded-full p-3"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:text-red-600 hover:bg-white rounded-full p-3"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:text-red-600 hover:bg-white rounded-full p-3"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Middle Section: What We Do */}
          <div>
            <p className="text-red-600 text-lg font-semibold mb-4">What We Do</p>
            <ul className="text-white space-y-2">
              {whatWeDo.map((item, index) => (
                <li key={index} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-red-600"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="lg:text-left text-center">
            <p className="text-red-600 text-lg font-semibold mb-4">Get in Touch</p>
            <ul className="text-white space-y-2">
              <li className="flex items-start justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span>
                  Plot No 1215/1500, Khandagiri Bari, <br />
                  Bank of India Lane, Bhubaneswar, <br />
                  Odisha, 751030
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2" /> 0674-3588734
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" /> info@pantiss.org
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between text-white text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} PANTISS Foundation |</p>
            <div className="flex justify-center space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline hover:text-red-600">
                Home
              </a>
              <a href="#" className="hover:underline hover:text-red-600">
                About Us
              </a>
              <a href="#" className="hover:underline hover:text-red-600">
                Contact Us
              </a>
              <a href="#" className="hover:underline hover:text-red-600">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
