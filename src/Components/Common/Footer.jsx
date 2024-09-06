import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
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
                            Pantiss Group is an organization, which works for mining affected
                            communities across Eastern Ghats & Chotanagpur Plateau. We believe
                            in building sustainable enterprises for one of the most vulnerable
                            groups of the world.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="text-white text-[18px] bg-[#2A675C] hover:text-[#2A675C] hover:bg-white rounded-full p-3">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-[#2A675C] hover:text-[#2A675C] hover:bg-white rounded-full p-3">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-[#2A675C] hover:text-[#2A675C] hover:bg-white rounded-full p-3">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-[#2A675C] hover:text-[#2A675C] hover:bg-white rounded-full p-3">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Middle Section: Quick Links */}
                    <div>
                        <p className="text-[#2A675C] text-lg font-semibold mb-4">Quick Links</p>
                        <ul className="text-white space-y-2">
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Precision Skills in Global Mining & Allied Industries
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Multi-Stakeholder Platform in Mining & Industrial section
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Alternative Green Livelihoods around Mining Industries
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Artisanal mining & indigenous people empowerment
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Water, Sanitation & hygienic around mines
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Health & Wellness for Mining affected communities
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Climate & Sustainable in Mining periphery
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Fostering Impact evolution & Research in Mining zones
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#2A675C]"></span>
                                Social workforce solution dedication for Mining Periphery
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Contact Info */}
                    <div>
                        <p className="text-[#2A675C] text-lg font-semibold mb-4">Get in Touch</p>
                        <ul className="text-white space-y-2">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mr-2 mt-1" />
                                Plot No 1215/1500, Khandagiri Bari, <br />
                                Bank of India Lane, Bhubaneswar, <br />
                                Odisha, 751030
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-2" /> 06743588734
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" /> info@pantiss.org
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 mt-8 pt-4">
                    <div className="flex flex-col md:flex-row justify-between text-white text-sm text-center md:text-left">
                        <p>
                            © 2022 PANTISS Foundation |
                        </p>
                        <div className="flex justify-center space-x-4 mt-2 md:mt-0">
                            <a href="#" className="hover:underline hover:text-[#2A675C]">Home</a>
                            <a href="#" className="hover:underline hover:text-[#2A675C]">About Us</a>
                            <a href="#" className="hover:underline hover:text-[#2A675C]">Contact Us</a>
                            <a href="#" className="hover:underline hover:text-[#2A675C]">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
