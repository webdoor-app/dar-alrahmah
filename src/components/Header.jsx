import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Import all images
import menuIcon from "../assets/img/MenuIcon.png";
import logo from "../assets/img/logo.svg";
import urbenIcon from "../assets/img/urben-icon.svg";
import quanitiveIcon from "../assets/img/quanitive-icon.svg";
import urbenDesignIcon from "../assets/img/urben-design-icon.svg";
import engManagementIcon from "../assets/img/eng-management-icon.svg";
import arrowIconMobileMenu from "../assets/img/ArrowIconMobileMenu.svg";
import ArrowIconMobileMenuBrown from "../assets/img/ArrowIconMobileMenuBrown.svg";
import arrowIconWhite from "../assets/img/ArrowIconWhite.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-opacity-0 border-b border-white/10">
      <nav className="bg-accent/30 backdrop-filter backdrop-blur-lg border-b border-white/10">
        <div className="flex justify-between md:h-[135px] h-[113.13px]">
          <div className="md:m-base-m mx-6 flex justify-between w-full items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary z-50 text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <img className="w-5" src={menuIcon} alt="Menu Icon" />
              ) : (
                <img className="w-5" src={menuIcon} alt="Menu Icon" />
              )}
            </button>
            {/* Logo */}
            <div>
              <a href="#">
                <img className="w-40 md:w-64" src={logo} alt="logo" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:ml- xl:justify-between font-camel">
              <ul className="flex items-center md:gap-8 lg:gap-20 font-camel font-bold text-primary">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-bold"
                        : "text-primary hover:text-secondary"
                    }
                  >
                    الرئيسية
                  </NavLink>
                </li>
                <li
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative"
                >
                  <NavLink
                    to="/fields/UrbanPlanning"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-bold"
                        : "text-primary hover:text-secondary"
                    }
                  >
                    مجالاتنـا
                  </NavLink>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-1 w-52 bg-accent inset-  rounded-l-2xl rounded-b-2xl   shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                      <div className="py-2 px-3 divide-y">
                        <NavLink
                          to="/fields/UrbanPlanning"
                          className="block px- py-2 text[18px] font-bold text-secondary hover:text-primary"
                        >
                          <div className="flex justify-start gap-2">
                            <img src={urbenIcon} alt="icon" />
                            <div>التخطيط الحضاري</div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/fields/Qualitives"
                          className="block px- py-2 text[18px] font-bold text-secondary hover:text-primary"
                        >
                          <div className="flex justify-start gap-2">
                            <img src={quanitiveIcon} alt="icon" />
                            <div> الخبرات النوعية</div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/fields/DevlopmentDesign"
                          className="block px- py-2 text[18px] font-bold text-secondary hover:text-primary"
                        >
                          <div className="flex justify-start gap-2">
                            <img src={urbenDesignIcon} alt="icon" />
                            <div> التصميم العمراني </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/fields/EngineeringManagement"
                          className="block px- py-2 text[18px] font-bold text-secondary hover:text-primary"
                        >
                          <div className="flex justify-start gap-2">
                            <img src={engManagementIcon} alt="icon" />
                            <div> الادارة الهندسية </div>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-bold"
                        : "text-primary hover:text-secondary"
                    }
                  >
                    أعمالنـا
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-secondary font-bold text-nowrap"
                        : "text-primary hover:text-secondary text-nowrap"
                    }
                  >
                    من نحن
                  </NavLink>
                </li>
              </ul>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-secondary text-accent font-bold md:mr-5 xl:mr-20 rounded-md py-1 px-4"
                    : "bg-primary hover:bg-secondary text-accent mr-20 rounded-md py-1 md:mr-5 xl:mr-20 px-4"
                }
              >
                <button className="text-nowrap flex items-center justify-center">
                  تواصل معنـا
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="">
              {/* Blurred layer */}
              <div className="md:hidden reletive inset- top-[20%] h-[35.20rem] inset- bg-whit backdrop-blu z-30"></div>

              {/* Menu container */}
              <div className="md:hidden top-0 pt-20 absolute h-[101%] font-camel shadow-md font w-[60%] bg-accent flex flex-col justify-between z-40">
                <div className=" py-6 flex flex-col gap-6">
                  <ul className="flex flex-col items-start gap-6 text-primary font-bold">
                    {/* Home */}
                    <li className="px-4 flex items-center justify-between w-full">
                      <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          isActive ? "text-secondary" : "text-primary"
                        }
                      >
                        الـرئيــسيــــة
                      </NavLink>
                      <img src={arrowIconMobileMenu} alt="Arrow Icon" />
                    </li>

                    {/* مجالاتنـا with Dropdown */}
                    <li className=" w-full ">
                      <div
                        className="px-4 flex justify-between items-center w-full cursor-pointer "
                        onClick={() =>
                          setIsMobileDropdownOpen(!isMobileDropdownOpen)
                        }
                      >
                        <NavLink
                          to="/fields/UrbanPlanning"
                          className={({ isActive }) =>
                            isActive ? "text-secondary " : "text-primary  "
                          }
                        >
                          مجـــالاتنـــــــــا
                        </NavLink>
                        <img
                          src={isMobileDropdownOpen? ArrowIconMobileMenuBrown : arrowIconMobileMenu}
                          alt="Arrow Icon"
                          className={`transition-transform duration-300 ${
                            isMobileDropdownOpen
                              ? "-rotate-90 text-secondary "
                              : ""
                          }`}
                        />
                      </div>
                      {/* Mobile Dropdown Items */}
                      {isMobileDropdownOpen && (
                        <ul className="px-4 pt-4 mt-2 pb-4 border-t border-b w-full ml-  space-y-6 text-primary font-light">
                          <li>
                            <NavLink
                              to="/fields/UrbanPlanning"
                              onClick={() => setIsOpen(false)}
                              className="block  hover:text-secondary"
                            >
                              <div className="flex justify-between gap-">
                                <div className="flex justify-start gap-2">
                                  <img src={urbenIcon} alt="icon" />
                                  <div className="">التـخطيط الحضـري</div>
                                </div>
                                <img
                                  src={arrowIconMobileMenu}
                                  alt="Arrow Icon"
                                />
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/fields/Qualitives"
                              onClick={() => setIsOpen(false)}
                              className="block hover:text-secondary"
                            >
                              <div className="flex justify-between gap-">
                                <div className="flex justify-start gap-2">
                                  <img src={quanitiveIcon} alt="icon" />
                                  <div> الخبـرات النـوعيـــة</div>
                                </div>
                                <img
                                  src={arrowIconMobileMenu}
                                  alt="Arrow Icon"
                                />
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/fields/DevlopmentDesign"
                              onClick={() => setIsOpen(false)}
                              className="block hover:text-secondary"
                            >
                              <div className="flex justify-between gap-">
                                <div className="flex justify-start gap-2">
                                  <img src={urbenDesignIcon} alt="icon" />
                                  <div> التصميم العمــراني </div>
                                </div>
                                <img
                                  src={arrowIconMobileMenu}
                                  alt="Arrow Icon"
                                />
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/fields/EngineeringManagement"
                              onClick={() => setIsOpen(false)}
                              className="block hover:text-secondary"
                            >
                              <div className="flex justify-between gap-">
                                <div className="flex justify-start gap-2">
                                  <img src={engManagementIcon} alt="icon" />
                                  <div> الإدارة الهنـدسيـــة </div>
                                </div>
                                <img
                                  src={arrowIconMobileMenu}
                                  alt="Arrow Icon"
                                />
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Projects */}
                    <li className="px-4 flex items-center justify-between w-full">
                      <NavLink
                        to="/projects"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          isActive ? "text-secondary" : "text-primary"
                        }
                      >
                        أعــمــالـنـــــــا
                      </NavLink>
                      <img src={arrowIconMobileMenu} alt="Arrow Icon" />
                    </li>

                    {/* About */}
                    <li className="px-4 flex items-center justify-between w-full">
                      <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          isActive ? "text-secondary" : "text-primary"
                        }
                      >
                        مــــن نحــــــن
                      </NavLink>
                      <img src={arrowIconMobileMenu} alt="Arrow Icon" />
                    </li>
                  </ul>
                </div>

                {/* Contact Button at Bottom */}
                <div className="px- pb- w-full">
                  <div className="w-full list-none">
                    <NavLink
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-secondary text-accent font-bold rounded- py-4 px-4 block text-center"
                          : "bg-gradient-primary text-accent rounded- py-4 px-4 block text-center"
                      }
                    >
                      <div className="flex justify-between items-center">
                        <span> تواصل معنـا</span>
                        <img src={arrowIconWhite} alt="Arrow Icon" />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
