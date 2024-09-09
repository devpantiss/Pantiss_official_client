import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const SDGFooter = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Left Section: About */}
                    <div>
                        <img
                            src="https://i.postimg.cc/7hhdCGBj/Untitled-design-2-removebg-preview.png"
                            alt="Pantiss Logo"
                            className="w-44 mx-auto md:mx-0 mb-4"
                        />
                        <p className="text-white text-lg font-semibold mb-2">
                            Pantiss Group
                        </p>
                        <p className="text-white">
                        We support the Sustainable Development Goals
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="text-white text-[18px] bg-pink-600 hover:text-pink-600 hover:bg-white rounded-full p-3">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-pink-600 hover:text-pink-600 hover:bg-white rounded-full p-3">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-pink-600 hover:text-pink-600 hover:bg-white rounded-full p-3">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-pink-600 hover:text-pink-600 hover:bg-white rounded-full p-3">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Middle Section: Quick Links */}
                    {/* <div>
                        <p className="text-pink-600 text-lg font-semibold mb-4">Quick Links</p>
                        <ul className="text-white space-y-2">
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Precision Skills in Global Mining & Allied Industries
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Multi-Stakeholder Platform in Mining & Industrial section
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Alternative Green Livelihoods around Mining Industries
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Artisanal mining & indigenous people empowerment
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Water, Sanitation & hygienic around mines
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Health & Wellness for Mining affected communities
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Climate & Sustainable in Mining periphery
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Fostering Impact evolution & Research in Mining zones
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2 h-0 w-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-pink-600"></span>
                                Social workforce solution dedication for Mining Periphery
                            </li>
                        </ul>
                    </div> */}

                    {/* Right Section: Contact Info */}
                    <div className="lg:text-left text-center">
                        <p className="text-pink-600 text-lg font-semibold mb-4">Get in Touch</p>
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
                            <a href="#" className="hover:underline hover:text-pink-600">Home</a>
                            <a href="#" className="hover:underline hover:text-pink-600">About Us</a>
                            <a href="#" className="hover:underline hover:text-pink-600">Contact Us</a>
                            <a href="#" className="hover:underline hover:text-pink-600">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SDGFooter;
