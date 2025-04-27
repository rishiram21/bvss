import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Measure header height and setup scroll listener
  useEffect(() => {
    const headerElement = document.getElementById('top-header');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerHeight]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  return (
    <div className="w-full">
      {/* Top Header with Contact Info and Buttons - NOT fixed */}
      <div id="top-header" className="hidden md:block bg-gray-100 py-3 px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            {/* Email */}
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm text-gray-700">bvss.edu@gmail.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-sm text-gray-700">Bharat Vikas Shikshan Sanstha Chinchwad, Pune 411019
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            {/* Login Button */}
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Login
            </button>

            {/* Apply Now Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - FIXED after scrolling past header */}
      <nav
        className={`${
          scrolled ? "fixed top-0 left-0 right-0" : ""
        } bg-white border-b border-gray-200 px-4 py-2 z-50 shadow-md transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between px-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleLogoClick}>
              <img src="/logo.png" alt="Logo" className="h-24 w-24" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-3 space-x-1 flex-grow">
            <Link to="/about" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">ABOUT</Link>

            {/* Courses Dropdown */}
            <div
  className="relative group"
>
  <Link
    to="/courses"
    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center relative"
  >
    COURSES
    <span className="ml-1 transition-all duration-300">
      <span className="group-hover:hidden">+</span>
      <span className="hidden group-hover:inline">-</span>
    </span>
  </Link>

  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
    <div className="py-2">
      <Link to="/courses/bams" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">BAMS</Link>
      <Link to="/courses/postgraduate" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Post Graduate</Link>
      <Link to="/courses/diploma" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Diploma Programs</Link>
      <Link to="/courses/certificate" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Certificate Courses</Link>
    </div>
  </div>
</div>

           {/* Academics Dropdown */}
<div className="relative group">
  <Link
    to="/academics"
    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center relative "
  >
    ACADEMICS
    <span className="ml-1 transition-all duration-300">
      <span className="group-hover:hidden">+</span>
      <span className="hidden group-hover:inline">-</span>
    </span>
  </Link>

  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
    <div className="py-2">
      <Link to="/academics/faculty" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Faculty</Link>
      <Link to="/academics/departments" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Departments</Link>
    </div>
  </div>
</div>

{/* Achievements Dropdown */}
<div className="relative group">
  <Link
    to="/achievements"
    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center relative"
  >
    ACHIEVEMENTS & EVENTS
    <span className="ml-1 transition-all duration-300">
      <span className="group-hover:hidden">+</span>
      <span className="hidden group-hover:inline">-</span>
    </span>
  </Link>

  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
    <div className="py-2">
      <Link to="/achievements/awards" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Awards</Link>
      <Link to="/achievements/events" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Events</Link>
    </div>
  </div>
</div>

{/* Blog Link (no dropdown) */}
<Link
  to="/blog"
  className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
>
  BLOG
</Link>

{/* MUHS Mandate Dropdown */}
<div className="relative group">
  <Link
    to="/muhs"
    className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center relative"
  >
    MUHS MANDATE
    <span className="ml-1 transition-all duration-300">
      <span className="group-hover:hidden">+</span>
      <span className="hidden group-hover:inline">-</span>
    </span>
  </Link>

  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
    <div className="py-2">
      <Link to="/muhs/guidelines" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Guidelines</Link>
      <Link to="/muhs/circulars" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Circulars</Link>
    </div>
  </div>
</div>

            <Link to="/contact" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">CONTACT</Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col space-y-2 px-2 pt-2 pb-3">
              <Link to="/about" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">ABOUT</Link>

              {/* Mobile Courses Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-courses')}
                  className="w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center justify-between"
                >
                  <span>COURSES</span>
                  <span>{activeDropdown === 'mobile-courses' ? '-' : '+'}</span>
                </button>
                {activeDropdown === 'mobile-courses' && (
                  <div className="pl-6 mt-1 space-y-1">
                    <Link to="/courses/bams" className="block px-3 py-1 text-gray-800 hover:text-blue-600">BAMS</Link>
                    <Link to="/courses/postgraduate" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Post Graduate</Link>
                    <Link to="/courses/diploma" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Diploma Programs</Link>
                    <Link to="/courses/certificate" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Certificate Courses</Link>
                  </div>
                )}
              </div>

              {/* Mobile Academics Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-academics')}
                  className="w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center justify-between"
                >
                  <span>ACADEMICS</span>
                  <span>{activeDropdown === 'mobile-academics' ? '-' : '+'}</span>
                </button>
                {activeDropdown === 'mobile-academics' && (
                  <div className="pl-6 mt-1 space-y-1">
                    <Link to="/academics/faculty" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Faculty</Link>
                    <Link to="/academics/departments" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Departments</Link>
                  </div>
                )}
              </div>

              {/* Mobile Achievements Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-achievements')}
                  className="w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center justify-between"
                >
                  <span>ACHIEVEMENTS & EVENTS</span>
                  <span>{activeDropdown === 'mobile-achievements' ? '-' : '+'}</span>
                </button>
                {activeDropdown === 'mobile-achievements' && (
                  <div className="pl-6 mt-1 space-y-1">
                    <Link to="/achievements/awards" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Awards</Link>
                    <Link to="/achievements/events" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Events</Link>
                  </div>
                )}
              </div>

              <Link to="/blog" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">BLOG</Link>

              {/* Mobile MUHS Mandate Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-muhs')}
                  className="w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 font-medium flex items-center justify-between"
                >
                  <span>MUHS MANDATE</span>
                  <span>{activeDropdown === 'mobile-muhs' ? '-' : '+'}</span>
                </button>
                {activeDropdown === 'mobile-muhs' && (
                  <div className="pl-6 mt-1 space-y-1">
                    <Link to="/muhs/guidelines" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Guidelines</Link>
                    <Link to="/muhs/circulars" className="block px-3 py-1 text-gray-800 hover:text-blue-600">Circulars</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">CONTACT</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer div to prevent content from hiding under fixed navbar when it's active */}
      {scrolled && <div className="h-20"></div>}
    </div>
  );
};

export default Navbar;
