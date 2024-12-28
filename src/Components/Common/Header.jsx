import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import { TbDisabled } from "react-icons/tb";
import {
  GrBriefcase,
  GrNotes,
  GrPhone,
  GrHomeRounded,
  GrHelpBook,
  GrLocation,
} from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

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
      className={`w-full sticky z-50 backdrop-blur-sm shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-[white]"
      } ${isScrolled ? "text-white" : "text-black"}]`}
    >
      <div className="py-2 px-2 lg:mx-[110px] flex gap-x-[400px] justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col w-3/5 transition-transform duration-300 ease-in-out">
          <div className="glow-container">
            <Link onClick={toggleMenu}>
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727680521/pantiss_logo_kuiof0.png"
                alt="Company Logo"
                className="h-[60px] w-auto glow-effect"
              />
            </Link>
          </div>
        </div>

        {/* Sub-Navbar desktop */}
        <div className="hidden lg:flex items-center ml-[300px] justify-between w-full">
          <nav className="flex space-x-6">
            {/* HOME */}
            <Link
              to="/sdg-pantiss"
              className={`flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
              } ${
                isActive("/") ? "text-red-600 underline" : ""
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              <img
                src="https://i.postimg.cc/8zD4f1f8/vecteezy-sustainable-development-goals-logo-template-illustration-5412443-1-removebg-preview.png"
                className="w-12 h-12"
              />
              SDG's & PANTISS
            </Link>

            {/* CAREER */}
            <Link
              to="/careers"
              className={`flex items-center gap-x-2 font-bold font-open mx-3 text-[18px] ${
                isScrolled ? "text-red-600" : "text-red-600"
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Career
            </Link>

            {/* TENDERS & EOI */}
            <Link
              to="/tenders"
              className={`relative flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-red-600" : "text-red-600"
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Tenders
              {/* Blipper */}
              <span className="absolute top-1 -right-2 w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
              <span className="absolute top-1 -right-2 w-3 h-3 bg-red-600 rounded-full"></span>
            </Link>

            {/* Fellowship */}
            <Link
              className={`flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-red-600" : "text-red-600"
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Fellowship
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact-us"
              className={`flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-red-600" : "text-red-600"
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
          className={`lg:hidden ${
            isScrolled ? "text-red-600" : "text-red-600"
          } focus:outline-none`}
        >
          {isMenuOpen2 ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* sub-Navbar Mobile Navigation */}
        <div
          className={`fixed top-[125px] right-0 w-full lg:hidden h-screen text-red-600 bg-white flex flex-col items-left justify-start transition-transform duration-500 ${
            isMenuOpen2 ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/sdg-pantiss"
              className="flex items-center mx-3 text-[18px] gap-x-2 hover:underline text-red-600"
              onClick={handleOptionSelect}
            >
              <img
                src="https://i.postimg.cc/8zD4f1f8/vecteezy-sustainable-development-goals-logo-template-illustration-5412443-1-removebg-preview.png"
                className="w-12 h-12"
              />
              SDG's & PANTISS
            </Link>

            <Link
              to="/careers"
              className="flex mx-3 text-[18px] items-center gap-x-2 hover:underline text-red-600"
              onClick={handleOptionSelect}
            >
              <GrBriefcase />
              Career
            </Link>

            <Link
              to="/tenders"
              className="relative flex mx-3 text-[18px] items-center gap-x-2 hover:underline text-red-600"
              onClick={handleOptionSelect}
            >
              <GrNotes />
              Tenders
              <span className="absolute -top-1 left-32 w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
              <span className="absolute -top-1 left-32 w-3 h-3 bg-red-600 rounded-full"></span>
            </Link>

            <Link
              className="flex mx-3 text-[18px] items-center gap-x-2 hover:underline text-red-600"
              onClick={handleOptionSelect}
            >
              <FaGraduationCap />
              Fellowship
            </Link>

            <Link
              to="/contact-us"
              className="flex mx-3 text-[18px] items-center gap-x-2 hover:underline text-red-600"
              onClick={handleOptionSelect}
            >
              <GrPhone />
              Contact
            </Link>
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
              className={`cursor-pointer flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } ${
                isActive("/") ? "text-[white] underline" : ""
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                className={`flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                  isScrolled ? "text-[white]" : "text-[white]"
                } transition duration-300`}
              >
                Who We are
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isAboutOpen ? "rotate-180" : ""
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
                    <span className="text-[18px]">About</span>
                  </Link>
                  <Link
                    to="/whoweare/team"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">Our Team</span>
                  </Link>
                  <Link
                    to="/whoweare/advisory-board"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">Our Advisory Board</span>
                  </Link>
                  <Link
                    to="/whoweare/reports-and-financials"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">Reports & Financials</span>
                  </Link>
                </div>
              )}
            </div>

            {/* What we do */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("whatWeDo")}
                className={`flex items-center gap-x-2 font-bold font-open mx-3 text-[18px] ${
                  isScrolled ? "text-[white]" : "text-[white]"
                } transition duration-300`}
              >
                What We Do
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isWhatWeDoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isWhatWeDoOpen && (
                <div className="absolute mt-6 w-[200px] text-black bg-red-600 border rounded shadow-lg z-20">
                  <Link
                    to="/whatwedo/social-development"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">Social Development</span>
                  </Link>
                  <Link
                    to="/whatwedo/social-enterprises"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">Social Enterprises</span>
                  </Link>
                  <Link
                    to="/whatwedo/pantiss-mine-x-sim"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">Pantiss MINE x SIM</span>
                  </Link>
                  <Link
                    to="/whatwedo/social-development"
                    className="block px-4 py-2 hover:bg-white text-[white] hover:text-red-600"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[18px]">
                      Pantiss Happiness Professionals
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Where we work */}
            <Link
              className={`flex items-center gap-x-2 font-bold font-open mx-3 text-[18px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Where We Work
            </Link>

            <Link
              className={`flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Summit
            </Link>

            <Link
              className={`flex items-center gap-x-2 font-open font-bold mx-3 text-[18px] ${
                isScrolled ? "text-[white]" : "text-[white]"
              } transition duration-300`}
              onClick={handleOptionSelect}
            >
              Our Publications
            </Link>
          </nav>

          {/* Disability key */}
          <div className="flex justify-between gap-x-8 relative">
            <Link
              className={`flex items-center gap-x-2 hover:bg-white hover:text-red-600 font-open font-bold px-3 py-2 mx-3 text-[18px] ring-2 ring-[white] rounded-md ${
                isScrolled ? "text-[white]" : "text-[white]"
              } transition duration-300`}
              onClick={toggleAccessibilityMenu} // Add click event to toggle dropdown
            >
              <TbDisabled className="text-[26px] font-open" /> Divyanjan
              Friendly
            </Link>

            {/* Dropdown for Accessibility Options */}
            {isAccessibilityOpen && (
              <div className="hidden lg:block absolute w-[550px] right-[-100px] top-12 mt-2 bg-white p-4 shadow-lg rounded-lg z-50">
                <ul className="grid grid-cols-2 gap-3">
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Increase Font Size
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Decrease Font Size
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Highlight Links
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Underline Links
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Invert Images
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Greyscale images
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Go to Standard Site
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-center hover:bg-white hover:ring-1 hover:ring-red-600 hover:text-red-600 text-sm py-2 px-4 bg-red-600 text-white rounded">
                      Download Screen Reader
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden ${
            isScrolled ? "text-white" : "text-white"
          } focus:outline-none`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-[125px] lg:hidden right-0 w-full h-screen bg-red-600 text-white flex flex-col z-99 items-left justify-start transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="cursor-pointer flex items-center mx-3 text-[18px] gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <GrHomeRounded />
              Home
            </Link>

            {/* Who We are */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center mx-3 text-[18px] gap-x-2 text-[white]"
              >
                <GrHelpBook />
                Who We are
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link
                    to="/whoweare/about"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    About
                  </Link>
                  <Link
                    to="/whoweare/team"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/whoweare/advisory-board"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Our Advisory Board
                  </Link>
                  <Link
                    to="/whoweare/reports-and-financials"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Reports & Financials
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("whatWeDo")}
                className="flex items-center mx-3 text-[18px] gap-x-2  text-[white]"
              >
                <GrBriefcase />
                What We Do
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isWhatWeDoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isWhatWeDoOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link
                    to="/whatwedo/social-development"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Social Development
                  </Link>
                  <Link
                    to="/whatwedo/social-enterprises"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Social Enterprises
                  </Link>
                  <Link
                    to="/whatwedo/pantiss-mine-x-sim"
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Pantiss MINEX SIM
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Pantiss Hapiness Professionals
                  </Link>
                </div>
              )}
            </div>

            <Link
              className="flex mx-3 text-[18px] items-center gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <GrLocation />
              Where We Work
            </Link>

            <Link
              className="flex mx-3 text-[18px] items-center gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <MdEventAvailable />
              Summit
            </Link>

            <div className="relative">
              <button
                onClick={toggleAccessibilityMenu}
                className="flex items-center mx-3 text-[18px] gap-x-2  text-[white]"
              >
                <TbDisabled className="text-[26px] font-open" /> Divyanjan
                Friendly
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isAccessibilityOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAccessibilityOpen && (
                <div className="flex flex-col pl-10 space-y-2">
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Increase Font Size
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Decrease Font Size
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Highlight Links
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Underline Links
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Invert Images
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Greyscale images
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Go to Standard Site
                  </Link>
                  <Link
                    className="hover:underline text-[white]"
                    onClick={handleOptionSelect}
                  >
                    Download Screen Reader
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
