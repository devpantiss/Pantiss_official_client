import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import { TbDisabled } from "react-icons/tb";
import { GrBriefcase, GrNotes, GrPhone, GrHomeRounded, GrHelpBook, GrLocation } from "react-icons/gr";


const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false); // New state for dropdown



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
    const toggleMenu2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
    };

    const toggleDropdown = (dropdown) => {
        if (dropdown === "about") {
            setIsAboutOpen(!isAboutOpen);
            setIsWhatWeDoOpen(false);
            setIsEventsOpen(false);
            setIsProfileOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "whatWeDo") {
            setIsWhatWeDoOpen(!isWhatWeDoOpen);
            setIsAboutOpen(false);
            setIsEventsOpen(false);
            setIsProfileOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "events") {
            setIsEventsOpen(!isEventsOpen);
            setIsAboutOpen(false);
            setIsWhatWeDoOpen(false);
            setIsProfileOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "profile") {
            setIsProfileOpen(!isProfileOpen);
            setIsAboutOpen(false);
            setIsWhatWeDoOpen(false);
            setIsEventsOpen(false);
            setIsCourseOpen(false);
        } else if (dropdown === "courses") {
            setIsCourseOpen(!isCourseOpen);
            setIsProfileOpen(false);
            setIsAboutOpen(false);
            setIsWhatWeDoOpen(false);
            setIsEventsOpen(false);
        }
    };

    const closeAllDropdowns = () => {
        setIsAboutOpen(false);
        setIsWhatWeDoOpen(false);
        setIsEventsOpen(false);
        setIsCourseOpen(false);
        setIsProfileOpen(false);
        setIsAccessibilityOpen(false); // Close accessibility dropdown when other dropdowns are closed
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

    const toggleAccessibilityMenu = () => {
        setIsAccessibilityOpen(!isAccessibilityOpen); // Toggle accessibility menu
    };

    return (
        <header
            className={`w-full sticky z-50 backdrop-blur-sm shadow-md transition-colors duration-300 ${isScrolled ? "bg-white" : "bg-[white]"
                } ${isScrolled ? "text-white" : "text-black"} border-b-2 border-[#2A675C]`}
        >
            <div className="container py-2 px-2 lg:mx-[110px] flex justify-between items-center">
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

                {/* Sub-Navbar desktop */}
                <div className="hidden lg:flex items-center ml-[350px] justify-between w-full">
                    <nav className="flex space-x-6">
                        {/* HOME */}
                        <Link
                            to="/sdg-pantiss"
                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                                } ${isActive("/") ? "text-red-600 underline" : ""} transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            <img src="https://i.postimg.cc/8zD4f1f8/vecteezy-sustainable-development-goals-logo-template-illustration-5412443-1-removebg-preview.png" className="w-12 h-12" />
                            SDG's & PANTISS
                        </Link>


                        {/* SERVICES */}
                        <Link
                            to="#"
                            className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${isScrolled ? "text-red-600" : "text-red-600"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Career
                        </Link>

                        <Link

                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-red-600" : "text-red-600"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Tenders & EOI
                        </Link>

                        <Link

                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-red-600" : "text-red-600"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Contact
                        </Link>
                    </nav>

                </div>

                {/*sub-Navbar Hamburger Menu */}
                <button
                    onClick={toggleMenu2}
                    className={`lg:hidden ${isScrolled ? "text-red-600" : "text-red-600"
                        } focus:outline-none`}
                >
                    {isMenuOpen2 ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* sub-Navbar Mobile Navigation */}
                <div className={`lg:hidden h-[100vh] absolute ${isBannerVisible ? "top-[170px]" : "top-[94px]"} backdrop-blur-sm shadow-md z-50 transform transition-transform duration-300 right-0 w-full ${isScrolled ? "bg-white/85" : "bg-white/85"
                    } ${isScrolled ? "text-white" : "text-white"} ${isMenuOpen2 ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link
                            to="/sdg-pantiss"
                            className="flex items-center text-[16px] gap-x-2 hover:underline text-red-600"
                            onClick={handleOptionSelect}
                        >
                            <img src="https://i.postimg.cc/8zD4f1f8/vecteezy-sustainable-development-goals-logo-template-illustration-5412443-1-removebg-preview.png" className="w-12 h-12" />
                            SDG's & PANTISS
                        </Link>

                        {/* <div className="relative">
                            <button
                                onClick={() => toggleDropdown("about")}
                                className="flex items-center text-[16px] gap-x-2 text-red-600"
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
                                    <Link className="hover:underline text-red-600" onClick={handleOptionSelect}>About</Link>
                                    <Link className="hover:underline text-red-600" onClick={handleOptionSelect}>Team</Link>
                                    <Link className="hover:underline text-red-600" onClick={handleOptionSelect}>Experts</Link>
                                    <Link className="hover:underline text-red-600" onClick={handleOptionSelect}>Gallery</Link>
                                </div>
                            )}
                        </div> */}

                        <Link className="flex text-[16px] items-center gap-x-2 hover:underline text-red-600" onClick={handleOptionSelect}>
                            <GrBriefcase />
                            Career
                        </Link>

                        <Link className="flex text-[16px] items-center gap-x-2 hover:underline text-red-600" onClick={handleOptionSelect}>
                            <GrNotes />
                            Tenders & EOI
                        </Link>

                        <Link className="flex text-[16px] items-center gap-x-2 hover:underline text-red-600" onClick={handleOptionSelect}>
                            <GrPhone />
                            Contact
                        </Link>

                        {/* <div className="relative">
                            <button
                                onClick={() => toggleDropdown("events")}
                                className="flex items-center gap-x-2 text-[16px] text-red-600"
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
                                    <Link className="hover:underline text-red-600" onClick={handleOptionSelect}>Upcoming</Link>
                                    <Link className="hover:underline text-red-600" onClick={handleOptionSelect}>Recent</Link>
                                </div>
                            )}
                        </div> */}


                        {/* {isLoggedIn ? (
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
                        )} */}
                    </nav>
                </div>
            </div>




            <div className="bg-red-600 flex flex-row py-3 gap-x-4 font-open text-white lg:h-[65px] justify-center">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-between mx-[110px] w-full">
                    <nav className="flex space-x-6">

                        {/* HOME */}
                        <Link
                            to="/"
                            className={`cursor-pointer flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
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
                                <div className="absolute mt-6 w-[200px] text-black bg-red-600 border rounded shadow-lg z-40">
                                    <Link
                                        to="/whoweare/about"
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                                        onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">About</span>
                                    </Link>
                                    <Link
                                        to="/whoweare/team"
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                                        onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Our Team</span>
                                    </Link>
                                    <Link
                                        to="/whoweare/advisory-board"
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                                        onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Our Advisory Board</span>
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                                        onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Reports & Financials</span>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* What we do */}
                        <div className="relative group">
                            <button
                                onClick={() => toggleDropdown("whatWeDo")}
                                className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                            >
                                What We Do
                                <AiOutlineDownCircle
                                    className={`ml-1 transition-transform duration-300 ease-in-out ${isWhatWeDoOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {isWhatWeDoOpen && (
                                <div className="absolute mt-6 w-[200px] text-black bg-red-600 border rounded shadow-lg z-20">
                                    <Link
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600" onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Social Development</span>
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600" onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Social Enterprises</span>
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600" onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Pantiss MINEX SIM</span>
                                    </Link>
                                    <Link
                                        className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600" onClick={handleOptionSelect}
                                    >
                                        <span className="text-[16px]">Pantiss Happiness Professionals</span>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Where we work */}
                        <Link
                            className={`flex items-center gap-x-2 font-bold font-open text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Where We Work
                        </Link>

                        {/* Where we work */}
                        {/* <Link

                                className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                                onClick={handleOptionSelect}
                            >
                                Mining Villages Summit
                            </Link> */}

                        {/* Publication */}
                        <Link

                            className={`flex items-center gap-x-2 font-open font-bold text-[16px] ${isScrolled ? "text-[white]" : "text-[white]"
                                } transition duration-300`}
                            onClick={handleOptionSelect}
                        >
                            Our Publications
                        </Link>
                    </nav>

                    {/* Disability key */}
                    <div className="flex justify-between gap-x-8 relative">
                        <Link
                            className={`flex items-center gap-x-2 hover:bg-white hover:text-red-600 font-open font-bold px-3 py-2 text-[16px] ring-2 ring-[white] rounded-md ${isScrolled ? "text-[white]" : "text-[white]"
                                } transition duration-300`}
                            onClick={toggleAccessibilityMenu} // Add click event to toggle dropdown
                        >
                            <TbDisabled className="text-[26px] font-open" /> Divyanjan Friendly
                        </Link>

                        <div className="relative group">
                            <Link
                                className={`flex items-center gap-x-2 hover:bg-white hover:text-red-600 font-open font-bold px-3 py-2 text-[16px] ring-2 ring-[white] rounded-md ${isScrolled ? "text-[white]" : "text-[white]"
                                    } transition duration-300`}
                            >
                                Apply
                            </Link>

                            {/* Popup div that appears on hover */}
                            <div className="absolute top-[50px] left-[-80px] mt-2 px-4 py-2 text-white bg-red-600 rounded shadow-lg w-[250px] hidden group-hover:block z-50">
                                Click the above to Apply for PANTISS Fellowship for Mining Villages
                            </div>
                        </div>

                        {/* Dropdown for Accessibility Options */}
                        {isAccessibilityOpen && (
                            <div className="hidden lg:block absolute w-[550px] right-[-100px] top-12 mt-2 bg-white p-4 shadow-lg rounded-lg z-50">
                                <ul className="grid grid-cols-2 gap-3">
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Increase Font Size</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Decrease Font Size</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Highlight Links</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Underline Links</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Invert Images</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Greyscale images</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Go to Standard Site</button>
                                    </li>
                                    <li>
                                        <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">Download Screen Reader</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>




                </div>

                {/* Hamburger Menu */}
                <button
                    onClick={toggleMenu}
                    className={`lg:hidden ${isScrolled ? "text-white" : "text-white"
                        } focus:outline-none`}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div className={`lg:hidden h-[100vh] absolute ${isBannerVisible ? "top-[170px]" : "top-[94px]"} backdrop-blur-sm shadow-md z-10 transform transition-transform duration-300 right-0 w-full ${isScrolled ? "bg-red-600/85" : "bg-red-600/85"
                    } ${isScrolled ? "text-white" : "text-white"} ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link
                            to="/"
                            className="cursor-pointer flex items-center text-[16px] gap-x-2 hover:underline text-[white]"
                            onClick={handleOptionSelect}
                        >
                            <GrHomeRounded />
                            Home
                        </Link>

                        {/* Who We are */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown("about")}
                                className="flex items-center text-[16px] gap-x-2 text-[white]"
                            >
                                <GrHelpBook />
                                Who We are
                                <AiOutlineDownCircle
                                    className={`ml-1 transition-transform duration-300 ease-in-out ${isAboutOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {isAboutOpen && (
                                <div className="flex flex-col pl-6 space-y-2">
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>About</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Our Team</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Our Advisory Board</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Reports & Financials</Link>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown("whatWeDo")}
                                className="flex items-center text-[16px] gap-x-2  text-[white]"
                            >
                                <GrBriefcase />
                                What We Do
                                <AiOutlineDownCircle
                                    className={`ml-1 transition-transform duration-300 ease-in-out ${isWhatWeDoOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {isWhatWeDoOpen && (
                                <div className="flex flex-col pl-6 space-y-2">
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Social Development</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Social Enterprises</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Pantiss MINEX SIM</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Pantiss Hapiness Professionals</Link>
                                </div>
                            )}
                        </div>

                        <Link className="flex text-[16px] items-center gap-x-2 hover:underline text-[white]" onClick={handleOptionSelect}>
                            <GrLocation />
                            Where We Work
                        </Link>

                        {/* <Link className="flex text-[16px] items-center gap-x-2 hover:underline text-[white]" onClick={handleOptionSelect}>
                            Mining Villages Summit
                        </Link> */}


                        <div className="relative">
                            <button
                                onClick={toggleAccessibilityMenu}
                                className="flex items-center text-[16px] gap-x-2  text-[white]"
                            >
                                <TbDisabled className="text-[26px] font-open" /> Divyanjan Friendly
                                <AiOutlineDownCircle
                                    className={`ml-1 transition-transform duration-300 ease-in-out ${isAccessibilityOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {isAccessibilityOpen && (
                                <div className="flex flex-col pl-10 space-y-2">
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Increase Font Size</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Decrease Font Size</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Highlight Links</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Underline Links</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Invert Images</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Greyscale images</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Go to Standard Site</Link>
                                    <Link className="hover:underline text-[white]" onClick={handleOptionSelect}>Download Screen Reader</Link>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={toggleAccessibilityMenu}
                            className="flex items-center text-[16px] gap-y-3  text-[white]"
                        >
                            Apply-PANTISS fellowship for Mining Villages
                            {/* <AiOutlineDownCircle
                                    className={`ml-1 transition-transform duration-300 ease-in-out ${isAccessibilityOpen ? "rotate-180" : ""
                                        }`}
                                /> */}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
