import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer2 = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-red-600">Contact us</h3>
                        <img
                            src="https://pantiss.com/wp-content/uploads/2022/08/logo.png"
                            alt="Pantiss Logo"
                            className="w-44 mx-auto md:mx-0 mb-4"
                        />
                        <address className="not-italic mb-4">
                            Plot No 1215/1500, Khandagiri Bari,<br />
                            Bank of India Lane, Bhubaneswar,
                            Odisha, 751030 <br />
                            E-mail: <a href="mailto:info@brac.net" className="text-white underline">info@pantiss.org</a>.
                            Phone: <a href="tel" className="text-white underline">06743588734</a>
                        </address>
                        
                    </div>

                    <div className="flex justify-center items-center space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline hover:text-red-600">Home</a>
                        <a href="#" className="hover:underline hover:text-red-600">About Us</a>
                        <a href="#" className="hover:underline hover:text-red-600">Contact Us</a>
                        <a href="#" className="hover:underline hover:text-red-600">Career</a>
                    </div>

                    {/* Social Media and Links Section */}
                    <div className="mt-5 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-bold mb-4 text-red-600">Join the conversation</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-red-600 hover:bg-white hover:text-red-600 rounded-full p-3">
                                <FaLinkedin />
                            </a>
                        </div>
                        <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-semibold px-6 py-2 mt-4 rounded-md">
                            Downloads
                        </button>
                    </div>
                </div>
                {/* What We Do Section */}
                <div className="border-t border-white mt-8 pt-4">
                    <h3 className="text-lg font-bold mb-4">What we do</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link className="hover:underline hover:text-red-600">Social Development</Link>
                        <Link className="hover:underline hover:text-red-600">Social Enterprises</Link>
                        <Link className="hover:underline hover:text-red-600">PANTISS MINEX SIM</Link>
                        <Link className="hover:underline hover:text-red-600">PANTISS Happiness Professionals</Link>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white mt-8 pt-4">
                    <div className="flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
                        <div className="text-white">
                            © 2024 PANTISS Foundation |  PANTISS Communication (ADITYA SAHU)                      
                        </div>
                        {/* <div className="flex justify-center space-x-4 mt-2 md:mt-0">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms of Use</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
