import React from "react";

// Import all images
import footerIcons from "../assets/img/footer-icons.svg";
import mobileFooterIcon1 from "../assets/img/MobileFooterIcon1.svg";
import mobileFooterIcon2 from "../assets/img/MobileFooterIcon2.svg";
import logoLight from "../assets/img/logoLight.svg";
import FooterDesktopIconR from "../assets/img/FooterDesktopIconR.svg";
import FooterDesktopIconL from "../assets/img/FooterDesktopIconL.svg";

function Footer() {
  return (
    <footer className="relative md:h-[27%] bg-primaryBurnt text-white font-camel overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 top-0 z-0">
        {/* Desktop */}
        <div className="hidden  md:flex justify-between items-center w-full">
          <img
            src={FooterDesktopIconL}
            alt="Footer Icons"
            className="w- h-full object-cover"
            loading="lazy"
          />
          <img
            src={FooterDesktopIconR}
            alt="Footer Icons"
            className="w- h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center h-full">
          <img
            src={mobileFooterIcon1}
            alt="Mobile Footer Icon 1"
            className="w- h-[70%] object-cover"
            loading="lazy"
          />
          <img
            src={mobileFooterIcon2}
            alt="Mobile Footer Icon 2"
            className="w- h-[70%] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative md:w-full w- z-10 container w-fit justify-center items-center text-center mx-auto px-">
        <h3 className="font-sm text-xs md:text-lg py-4 text-gray-400 text-nowrap">
          سياسة الخصوصية
          <span className="mx-3">|</span>
          شروط الاستخدام
        </h3>

        <div className="flex flex-1 mt-6 items-center justify-center gap-12 flex-wrap">
          {/* Logo */}
          <div className="space-y-4">
            <a href="#">
              <img
                className="w-56 md:w-64"
                src={logoLight}
                alt="Logo"
                loading="lazy"
              />
            </a>
          </div>

          {/* Social Media Section */}
          <div className="space-y-2">
            
            <h3 className="text-xl text-center text-accent    hidden md:flex items-center justify-center text[29.12px] font-bold"> تواصـل معنـــــا</h3>
            <h3 className=" md:hidden  flex items-center justify-center text[12px] font-bold"> حساباتنــا على مواقــع التواصل الإجتماعي </h3>
            <div className="flex flex-row-reverse gap-8 md:gap-4 justify-center">
              {/* Mail */}
              <a
                href="#"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
                </svg>
              </a>
               {/* Phone */}
               <a
                href="#"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-3.379a.75.75 0 0 0-.53.22l-2.126 2.125a20.42 20.42 0 0 1-6.232-6.232l2.125-2.126a.75.75 0 0 0 .22-.53V3.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v1.5z" />
                </svg>
              </a>

               {/* Instagram */}
               <a
                href="#"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-5.33 0" />
                </svg>
              </a>



              {/* X (Twitter) */}
              <a
                href="#"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

             

              {/* LinkedIn */}
              <a
                href="#"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14z" />
                  <path d="M8 11v5M8 8v.01M12 16v-5m4 5v-3a2 2 0 0 0-4 0" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>

        {/* Copyright Section - Centered */}
        <div className="flex justify-center mt-6 py-4 md:py-8">
          <div className="w-fit text-xs md:text-lg text-center">
            <p className="text-gray-400 text-nowrap">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لدار الرحمة
              لـلاستشـارات
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;