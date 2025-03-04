import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import MasonaryGrid from "../components/MasonaryGrid";
import AutoPlayLogoCarousel from "../components/AutoPlayLogoCarousel";
import ProjectMainHeader from "../components/ProjectMainHeader";
import { Link } from "react-router-dom";

// Import all images
import frame1 from "../assets/img/Frame-1.svg";
import frame2 from "../assets/img/Frame-2.svg";
import frame3 from "../assets/img/Frame-3.svg";
import frame4 from "../assets/img/Frame-4.svg";
import frame5 from "../assets/img/Frame-5.svg";
import frame6 from "../assets/img/Frame-6.svg";
import frame7 from "../assets/img/Frame-7.svg";
import frame8 from "../assets/img/Frame-8.svg";
import frame7Mobile from "../assets/img/Frame7-mobile.svg";
import mask from "../assets/img/Mask.png";
import qutation1 from "../assets/img/qutation1.svg";
import qutation2 from "../assets/img/qutation2.svg";
import arrowGreen from "../assets/img/ArrowGreen.svg";
import arrowWhite from "../assets/img/ArrowWhite.svg";

function Home() {
  return (
    <div className="bg-accent m">
      <Header />
      <div className="bg-accent w- h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-start overflow-">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={mask} // Updated path
              alt="mask"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Icons Desktop */}
          <div className="hidden md:flex absolute inset-0 top-28 overflow-hidden z-10">
            {/* Icon 1 */}
            <div className="absolute top-[35%] left-1/3 mx-auto translate-x-0 right-3/4 w-96 w animate-float animation-delay-3000">
              <img src={frame1} alt="Frame1" loading="lazy" />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-[10%] right-[45%] animate-floatDiagonal w-60 animation-delay-4000">
              <img src={frame2} alt="Frame2" loading="lazy" />
            </div>

            {/* Icon 3 */}
            <div className="absolute bottom-[30%] right-[60%] animate-floatDiagonal animation-delay-4000">
              <img src={frame3} alt="Frame3" loading="lazy" />
            </div>

            {/* Icon 4 */}
            <div className="absolute bottom-[20%] left-[65%] animate-floatDiagonal animation-delay-4000">
              <img src={frame4} alt="Frame4" loading="lazy" />
            </div>

            {/* Icon 5 */}
            <div className="absolute bottom-[20%] right-[-1%] animate-floatDiagonal animation-delay-4000">
              <img src={frame5} alt="Frame5" loading="lazy" />
            </div>

            {/* Icon 6 */}
            <div className="absolute top-[30%] right-[60%] animate-floatDiagonal animation-delay-4000">
              <img src={frame6} alt="Frame6" loading="lazy" />
            </div>

            {/* Icon 7 */}
            <div className="absolute top-[30%] right-[10%] animate-floatDiagonal animation-delay-4000">
              <img src={frame7} alt="Frame7" loading="lazy" />
            </div>

            {/* Icon 8 */}
            <div className="absolute top-[40%] right-[30%] animate-floatDiagonal animation-delay-2000">
              <img src={frame8} alt="Frame8" loading="lazy" />
            </div>
          </div>

          {/* Floating Icons Mobile */}
          <div className="flex md:hidden absolute inset-0 top-28 z-10 overflow-hidden">
            {/* Icon 1 */}
            <div className="absolute top-[20%] left-0 right-0 z-20 flex justify-center items-center w-full animate-float animation-delay-3000">
              <img src={frame1} alt="Frame1" className="w-44" />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-[90%] right-[91%] animate-floatDiagonal w-14 animation-delay-4000">
              <img src={frame2} alt="Frame2" />
            </div>

            {/* Icon 3 */}
            <div className="absolute top-[4%] right animate-floatDiagonal flex justify-center w-full animation-delay-10000">
              <img src={frame3} alt="Frame3" className="w-8" />
            </div>

            {/* Icon 4 */}
            <div className="absolute bottom-[40%] left-[5%] animate-floatDiagonal animation-delay-4000">
              <img src={frame4} alt="Frame4" className="w-10" />
            </div>

            {/* Icon 5 */}
            <div className="absolute top-[8%] right-[-10%] animate-floatDiagonal animation-delay-4000">
              <img src={frame5} alt="Frame5" />
            </div>

            {/* Icon 6 */}
            <div className="absolute top-[15%] left-[4%] animate-floatDiagonal animation-delay-10000">
              <img src={frame6} alt="Frame6" className="w-12" />
            </div>

            {/* Icon 7 */}
            <div className="absolute top-[70%] right-0 animate- animation-delay-4000">
              {/* Image */}
              <img
                src={frame7Mobile}
                alt="Frame7"
                className="relative py-1 z-10"
              />

              {/* Blurred Layer */}
              <div className="absolute inset-0 w-16 h-full bg-white/5 backdrop-blur-sm z-20"></div>
            </div>

            {/* Icon 8 */}
            <div className="absolute top-[10%] right-[14%] animate-floatDiagonal animation-delay-10000">
              <img src={frame8} alt="Frame8" className="w-7" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 text-center top-32 md:top-[10%] md:text-right font-camel mx-auto md:mr-16 md:w-[60%]">
            <div className="md:w- mx-">
              <h1 className="hidden md:flex text-xl md:text-6xl lg:text-7xl font-bold text-secondary">
                دار الرحــمـــة لـلاستشــــــــــــارات
              </h1>
              <h1 className="text-xl md:hidden md:text-6xl lg:text-7xl font-bold text-secondary">
                دار الرحــمــة لـلاستشــــــارات
              </h1>
              <h1 className="text-2xl md:text-7xl lg:text-8xl mb-5 tracking-normal font-bold text-secondary">
                D. R. Consultancy
              </h1>
            </div>

            <img src={qutation1} alt="qutation" className="h-3 md:h-8" />

            <p className="text-xs text- md:text-5xl font-semibold font-camel text-primary">
              الـدقـــــة تصـــنــع الجــــــودة، والخـــبــــــرة{" "}
              <span className="text-secondary">فـــــــارِق</span>
            </p>
            <img
              src={qutation2}
              alt="qutation"
              className="h-3 md:h-8 mr-[97%] md:mr-[85%] lg:ml-[10%] 2xl:mr-[70%]"
            />

            <Link to="/about">
              <button className="group mt-8 flex text-center align-middle mx-auto md:mx-0 text-sm items-center justify-center gap-2 px-2 md:px-4 my-auto py-1 border border-primary text-primary font-extralight md:font-semibold rounded-xl md:rounded-3xl hover:bg-primary hover:text-accent transition-colors">
                قراءة المزيد {/* Green Arrow (visible by default) */}
                <span className="flex group-hover:hidden">
                  <img
                    src={arrowGreen}
                    alt="Green Arrow"
                    className="size-4 md:size-8 p-0"
                  />
                </span>
                {/* White Arrow (hidden by default, visible on hover) */}
                <span className="hidden group-hover:flex">
                  <img
                    src={arrowWhite}
                    alt="White Arrow"
                    className="size-4 md:size-8 p-0"
                  />
                </span>
              </button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Section */}
        <div className="mt-">
          <ProjectMainHeader />
        </div>

        {/* Gallery */}
        <div className="px- bg-accent px-4 md:px-[4rem] -20">
          <MasonaryGrid limit={8} isProjectPage={true} showMoreButton />
        </div>

        {/* Logo Carousel Section */}
        <section>
          <div className="mt-">
            <AutoPlayLogoCarousel />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;