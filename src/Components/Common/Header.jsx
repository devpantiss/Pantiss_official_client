import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { IoIosHome, IoMdInformationCircle } from "react-icons/io";
import { MdOutlineMiscellaneousServices, MdEventNote } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { AiOutlineDownCircle } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { TbDisabled } from "react-icons/tb";






const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isCollegesOpen, setIsCollegesOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);





    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 550);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdown) => {
        if (dropdown === "about") {
            setIsAboutOpen(!isAboutOpen);
            setIsCollegesOpen(false);
            setIsEventsOpen(false);
            setIsProfileOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "colleges") {
            setIsCollegesOpen(!isCollegesOpen);
            setIsAboutOpen(false);
            setIsEventsOpen(false);
            setIsProfileOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "events") {
            setIsEventsOpen(!isEventsOpen);
            setIsAboutOpen(false);
            setIsCollegesOpen(false);
            setIsProfileOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "profile") {
            setIsProfileOpen(!isProfileOpen);
            setIsAboutOpen(false);
            setIsCollegesOpen(false);
            setIsEventsOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "courses") {
            setIsCourseOpen(!isCourseOpen);
            setIsProfileOpen(false);
            setIsAboutOpen(false);
            setIsCollegesOpen(false);
            setIsEventsOpen(false);
        }
    };

    const closeAllDropdowns = () => {
        setIsAboutOpen(false);
        setIsCollegesOpen(false);
        setIsEventsOpen(false);
        setIsCourseOpen(false);
        setIsProfileOpen(false);
    };

    const handleOptionSelect = () => {
        closeAllDropdowns();
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const hideBanner = () => {
        setIsBannerVisible(false);
    };

    return (
        <header
            className={`w-full z-50 backdrop-blur-sm shadow-md transition-colors duration-300 ${isScrolled ? "bg-white" : "bg-[white]"
                } ${isScrolled ? "text-white" : "text-black"} border-b-2 border-[#2A675C]`}
        >
            <div className="container py-2 px-2 mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex flex-col w-3/5 transition-transform duration-300 ease-in-out">
                    <div className="glow-container">
                        <Link onClick={toggleMenu}>
                            <img
                                src="https://pantiss.com/wp-content/uploads/2022/08/logo.png"
                                alt="Company Logo"
                                className="h-[60px] w-auto glow-effect"
                            />
                        </Link>
                        <span className="text-[12px] leading-none text-green-700">Empowering Mining Villages of <br />
                            Chota Nagpur & Eastern Ghats</span>
                    </div>
                </div>

                {/* Sub-Navbar */}
                <div className="hidden lg:flex items-center ml-[550px] justify-between w-full">
                    <nav className="flex space-x-6">

                        {/* HOME */}
                        <Link
                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                                } ${isActive("/") ? "text-[#2A675C] underline" : ""} transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Stories
                        </Link>


                        {/* SERVICES */}
                        <Link
                            to="/services"
                            className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Career
                        </Link>

                        <Link

                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            News & Events
                        </Link>

                        <Link

                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* <Link
                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                                } transition duration-300`}
                        >
                            <FiUser className="text-[26px] font-open" /> <p className="text-[16px] text-[white] font-open">Login</p>
                        </Link> */}

                </div>
            </div>



            {isBannerVisible && (
                <div className="bg-[#2A675C] flex flex-row py-3 gap-x-4 font-open text-white lg:h-[65px] justify-center">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-between mx-[110px] w-full">
                        <nav className="flex space-x-6">

                            {/* HOME */}
                            <Link
                                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } ${isActive("/") ? "text-[white] underline" : ""} transition duration-300`}
                                onClick={handleOptionSelect}
                            >
                                Home
                            </Link>

                            {/* ABOUT */}
                            <div className="relative group">
                                <button
                                    onClick={() => toggleDropdown("about")}
                                    className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                        } transition duration-300`}
                                >
                                    Who We are
                                    <AiOutlineDownCircle
                                        className={`ml-1 transition-transform duration-300 ease-in-out ${isAboutOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isAboutOpen && (
                                    <div className="absolute mt-6 w-[200px] text-black bg-[#2A675C] border rounded shadow-lg z-20">
                                        <Link

                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">About</span>
                                        </Link>
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Our Team</span>
                                        </Link>
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Our Advisory Board</span>
                                        </Link>
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Reports & Financials</span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* What we do */}
                            <div className="relative group">
                                <button
                                    onClick={() => toggleDropdown("colleges")}
                                    className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                        } transition duration-300`}
                                >
                                    What We Do
                                    <AiOutlineDownCircle
                                        className={`ml-1 transition-transform duration-300 ease-in-out ${isCollegesOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isCollegesOpen && (
                                    <div className="absolute mt-6 w-[200px] text-black bg-[#2A675C] border rounded shadow-lg z-20">
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Social Development</span>
                                        </Link>
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Social Enterprises</span>
                                        </Link>
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Pantiss MINEX SIM</span>
                                        </Link>
                                        <Link
                                            className="block px-4 py-2 hover:bg-[#2A675C]"
                                            onClick={handleOptionSelect}
                                        >
                                            <span className="text-[16px] text-[white]">Pantiss Happiness Professionals</span>
                                        </Link>
                                    </div>
                                )}
                            </div>


                            {/* Where we work */}
                            <Link
                                to="/services"
                                className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                                onClick={handleOptionSelect}
                            >
                                Where We Work
                            </Link>

                            {/* Where we work */}
                            <Link

                                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                                onClick={handleOptionSelect}
                            >
                                Mining Villages Summit
                            </Link>


                            {/* Publication */}
                            <Link

                                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                                onClick={handleOptionSelect}
                            >
                                Our Publications
                            </Link>
                        </nav>


                        <div className="flex justify-between gap-x-8">
                            <Link
                                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                            >
                                <FiUser className="text-[26px] font-open ring-2 ring-[white] rounded-md" /> <p className="text-[16px] text-[white] font-open">Login</p>
                            </Link>
                            <Link
                                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ring-2 ring-[white] rounded-md ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                            >
                                <TbDisabled className="text-[26px] font-open" />
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger Menu */}
                    <button
                        onClick={toggleMenu}
                        className={`lg:hidden ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                            } focus:outline-none`}
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>

                    {/* Mobile Navigation */}
                    <div className={`lg:hidden h-[100vh] absolute ${isBannerVisible ? "top-[150px]" : "top-[94px]"} backdrop-blur-sm shadow-md z-10 transform transition-transform duration-300 right-0 w-full ${isScrolled ? "bg-[#2A675C]/85" : "bg-[#2A675C]/85"
                        } ${isScrolled ? "text-white" : "text-white"} ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}>
                        <nav className="flex flex-col space-y-4 p-4">
                            <Link
                                className="flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
                                onClick={handleOptionSelect}
                            >
                                <IoIosHome />
                                Home
                            </Link>

                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown("about")}
                                    className="flex items-center text-[16px] gap-x-2 text-[white]"
                                >
                                    <IoMdInformationCircle />
                                    About
                                    <AiOutlineDownCircle
                                        className={`ml-1 transition-transform duration-300 ease-in-out ${isAboutOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isAboutOpen && (
                                    <div className="flex flex-col pl-6 space-y-2">
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>About</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Team</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Experts</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Gallery</Link>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown("colleges")}
                                    className="flex items-center text-[16px] gap-x-2  text-[white]"
                                >
                                    <FaBuildingColumns />
                                    Colleges
                                    <AiOutlineDownCircle
                                        className={`ml-1 transition-transform duration-300 ease-in-out ${isCollegesOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isCollegesOpen && (
                                    <div className="flex flex-col pl-6 space-y-2">
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Under Graduate</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Post Graduate</Link>
                                    </div>
                                )}
                            </div>

                            <Link className="flex text-[16px] items-center gap-x-2 hover:underline text-[white]" onClick={handleOptionSelect}>
                                <MdOutlineMiscellaneousServices />
                                Services
                            </Link>

                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown("events")}
                                    className="flex items-center gap-x-2 text-[16px] text-[white]"
                                >
                                    <MdEventNote />
                                    Events
                                    <AiOutlineDownCircle
                                        className={`ml-1 transition-transform duration-300 ease-in-out ${isEventsOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isEventsOpen && (
                                    <div className="flex flex-col pl-6 space-y-2">
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Upcoming</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Recent</Link>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => toggleDropdown("courses")}
                                    className="flex items-center gap-x-2 text-[16px] text-[white]"
                                >
                                    <FaBookReader />
                                    All Courses
                                    <AiOutlineDownCircle
                                        className={`ml-1 transition-transform duration-300 ease-in-out ${isCourseOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isCourseOpen && (
                                    <div className="flex flex-col pl-6 space-y-2">
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>B.Tech</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>B.Sc</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>B.Com</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>BBA</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>BCA</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>BA</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>MBA</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>M.Tech</Link>
                                        <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>LLB</Link>
                                    </div>
                                )}
                            </div>


                            {isLoggedIn ? (
                                <div className="relative">
                                    <button
                                        className="flex text-[16px] items-center gap-x-2 text-[white]"
                                    >
                                        <FiUser />
                                        Profile
                                        <AiOutlineDownCircle
                                            className={`ml-1 transition-transform duration-300 ease-in-out ${isProfileOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                </div>
                            ) : (
                                <Link className="flex text-[16px] items-center gap-x-2 text-[white]">
                                    <FiUser />
                                    Login
                                </Link>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;