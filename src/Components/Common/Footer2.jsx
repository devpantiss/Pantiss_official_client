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
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="relative bg-black text-white pb-8">
      <img
        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736516332/Untitled_design_10_euwrpe.png"
        alt="img"
        className="w-full"
      />
      <div className="container mx-auto px-4">
        {/* What We Do Section */}
        <div className="border-t border-white mt-8 pt-4 flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold mb-4 text-center">What we do</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-6">
            <Link
              to="/what-we-do/land-acquisition-rehabilitation-&-resettlement-of-mines"
              className="hover:underline hover:text-red-600 text-center"
            >
              Land Acquisition, Rehabilitation & Resettlement of Mines{" "}
            </Link>
            <Link
              to="/what-we-do/mine-steel-&-power-skill-park"
              className="hover:underline hover:text-red-600 text-center"
            >
              Mines, Steel & Power Skill Park{" "}
            </Link>
            <Link
              to="/what-we-do/carp-rice-&-duck-livelihood-park"
              className="hover:underline hover:text-red-600 text-center"
            >
              Carp, Rice & Duck Livelihood Park{" "}
            </Link>
            <Link
              to="/what-we-do/nutrinest"
              className="hover:underline hover:text-red-600 text-center"
            >
              NutriNest{" "}
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-red-600 mt-4 pt-4 gap-8 text-center md:text-left">
          {/* Contact Us Section */}
          <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
            <h3 className="text-lg font-bold mb-4 text-red-600">Contact us</h3>
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727680521/pantiss_logo_kuiof0.png"
              alt="Pantiss Logo"
              className="w-44 mx-auto md:mx-0 mb-4"
            />

            <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center max-w-lg">
              <div className="flex lg:text-left text-center justify-center max-w-md items-center gap-x-3">
                {/* <FaMapMarkerAlt className="text-[22px]" /> */}
                <p className="lg:text-left text-center">
                  Plot No 1215/1500, Khandagiri Bari, Bank of India Lane,
                  Bhubaneswar, Odisha, 751030
                </p>
              </div>

              <div className="flex justify-center items-center lg:text-left text-center gap-x-3">
                <FaEnvelope className="text-[18px]" />
                <p className="lg:text-left text-center">
                  E-mail:{" "}
                  <a
                    href="mailto:info@brac.net"
                    className="text-white underline"
                  >
                    info@pantiss.org
                  </a>
                </p>
              </div>

              <div className="flex justify-center items-center lg:text-left text-center gap-x-3">
                <FaPhoneAlt className="text-[18px]" />
                <p className="lg:text-left text-center">
                  Phone:{" "}
                  <a href="tel" className="text-white underline">
                    06743588734
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-2 md:mt-0">
            <a href="/" className="hover:underline hover:text-red-600">
              Home
            </a>
            <a
              href="/whoweare/about"
              className="hover:underline hover:text-red-600"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="hover:underline hover:text-red-600"
            >
              Contact Us
            </a>
            <a href="/careers" className="hover:underline hover:text-red-600">
              Career
            </a>
          </div>

          {/* Social Media and Links Section */}
          <div className="mt-5 flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold mb-4 text-red-600">
              Join the conversation
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3"
              >
                <FaLinkedin />
              </a>
            </div>
            <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-semibold px-6 py-2 mt-4 rounded-md">
              Downloads
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
            <div className="text-white">
              © 2024 PANTISS Foundation | PANTISS Communication
            </div>
            <div className="flex justify-center space-x-4 mt-2 md:mt-0">
              Developed by-(ADITYA SAHU)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
