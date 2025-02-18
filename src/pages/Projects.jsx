import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MasonaryGrid from "../components/MasonaryGrid";
import ProjectHeaderP1 from "../assets/img/ProjectHeaderP1.svg";
import ProjectHeaderP2 from "../assets/img/ProjectHeaderP2.svg";
import ProjectFooter1 from "../assets/img/ProjectFooter1.svg";
import ProjectFooter2 from "../assets/img/ProjectFooter2.svg";


function Projects() {
  return (
    <div className=" h-fit flex flex-col justify-between font-camel  bg-accent ">
      <section className="  ">
        <Header />
        <div>
          {/* Section Header */}
          <div className="  md:flex justify-between relative pt-32">
            {/* Left Side with ServicesHeader1 and h2 */}
            <div className="md:w-[30%] mt-4 relative">
              <img
                src={ProjectHeaderP1}
                alt="Projects Header 1"
                className="hidden md:flex"
              />
              {/* Absolute positioned h2 */}
              <h1 className="absolute md:top-1/2 md:left-1/2 text-nowrap mx-2 md:transform md:-translate-x-1/4 md:-translate-y-1/2 text-lg md:text-5xl font-bold text-tertiary mb-6">
                محفظة الأعمال
              </h1>
            </div>

            {/* Right Side with ServicesHeader2 */}
            <div className="w-1/2 md:w-1/3 mt-4 mr-auto md:mr-0">
              <img
                src={ProjectHeaderP2}
                alt="Projects Header 2"
              />
            </div>
          </div>
        </div>

        {/* Masonary Grid */}

        <div className="md:m-base-m  text-center">
          <MasonaryGrid
            // selectedProjectIds={}
            // limit={10}
            isProjectPage={true}
          />
        </div>

        {/* Section Footer */}
        <div className="flex justify-between">
          {/* Right Side with ServicesFooter2 */}
          <div className="w-1/3 md:w-auto md:flex-1 md:flex md:justify-start mb-8 pt-8">
            <img
              src={ProjectFooter1}
              alt="Projects Header 2"
              className="md:max-w-none md:w-64"
            />
          </div>

          {/* Left Side with ServicesFooter1 and h2 */}
          <div className="w-1/3 md:w-auto md:flex-1 md:flex md:justify-end mt-8 md:mt-0">
            <img
              src={ProjectFooter2}
              alt="Projects Header 1"
              className="md:max-w-none md:w-64"
            />
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default Projects;
