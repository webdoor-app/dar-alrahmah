import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Import  projects array
import { projects } from "../../components/MasonaryGrid";
import { img } from "framer-motion/client";

import ProjectSubHeader1 from "../../assets/img/ProjectSubHeader1.svg";
import ProjectHeaderP1 from "../../assets/img/ProjectHeaderP1.svg";
import ProjectHeaderP2 from "../../assets/img/ProjectHeaderP2.svg";

import ProjectImagesHeader1 from "../../assets/img/ProjectImagesHeader1.svg";
import ProjectImagesHeader2 from "../../assets/img/ProjectImagesHeader2.svg";

function ProjectDetailPage() {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(projectId));

  // State to track the current budget index
  const [currentBudgetIndex, setCurrentBudgetIndex] = useState(0);

  // If project not found, show an error message
  if (!project) {
    return (
      <div className="p-8 text-center text-2xl font-bold">
        المشروع غير موجود
      </div>
    );
  }

  // update the budget index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBudgetIndex((prevIndex) =>
        prevIndex === project.budget.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // 3.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [project.budget.length]);

  return (
    <div className=" bg-accent font-camel overflow-hidden">
      <Header />

      {/* Section Header */}
      <div className="flex justify-between relative pt-20 md:pt-32 ">
        {/* Left Side with ServicesHeader1 and h2 */}
        {/* <div className="w-[30%] mt-4 relative">
          <img
            src="/src/assets/img/ProjectHeaderP1.svg"
            alt="Services Header 1"
          />
        
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-4xl font-bold text-tertiary mb-6">
            صور المشروع
          </h1>
        </div> */}

        {/* path */}
        <div className="mt-14 pb-5 md:mt-20 mx-4 md:m-base-m flex z-30 font-camel text-nowrap text-xs md:text-sm md:pb-9  text-gray-600 font-">
          أعمالنـا / <span>{project.title}</span>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="w-1/4 md:w-64 mt-auto mb-2 md:mb-0 md:mt-12 ">
          <img src={ProjectSubHeader1} alt="Projects Header 2" />
        </div>
      </div>

      {/* Project Details ////////////////////////////////////////*/}
      <div className=" py-">
        <div className="  rounded-xl md:rounded-bl-3xl h-fit bg-[#FFFFFF] mx-4 md:mx-8 ">
          {/* top */}
          <div className=" flex  items-center justify-">
            <div className=" card-container   bg-accent rounded-bl-xl md:rounded-bl-3xl">
              <div className="card-header">
                <h1 className="font-extrabold px-2  z-10  py-1 md:py-3 md:px-8 text-[21px] text- md:text-5xl lg:text-[76.2px] text-tertiary ">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="flex gap-2   w- text-center px-2 md:px-7 ">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="md:px-4 md:py-2 py-1 text-[8px] md:text-sm lg:text-[20px] flex items-center px-2 border md:border-2 border-primary font-bold text-black rounded-md md:rounded-lg"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* bottom */}
          <div className="  md:flex gap-3  items justify-between i px-6 md:px-12 py-8 ">
            {/* contianer 1 */}
            <div className="  flex items-start justify-center w-1/2 md:w-[30em]  md:order-2   pb-2 md:pb-0 justify-  ">
              {project.partner && (
                <img
                  src={project.partner}
                  alt="icon"
                  className="w- h- md:w-32 md:h-"
                />
              )}
            </div>

            {/* container 2 */}
            <div className=" w-  order-2 pt-3 md:order-1 ">
              <p className="z-10 text-xs leading-4 md:text-base md:leading-7 lg:text-[20px] lg:leading-7 font-light text-justify text-gray-700">
                {project.fullDescription}
              </p>

              {/* Budget Section */}
              <div className="flex items-start gap-5 mt-8">
                {/* Statistics Text */}
                <p className="text-sm md:text-xl text-nowrap font-bold mt-2">
                  {project.statistics}
                </p>

                {/* Budget Text Container */}
                <div className="overflow-hidden h-20 w-full relative ">
                  {project.budget.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute top-2 left-0 w-full transition-all duration-1000 ease-in-out ${
                        index === currentBudgetIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      style={{
                        transform: `translateY(${
                          (index - currentBudgetIndex) * 100
                        }%)`,
                      }}
                    >
                      <span className="text-sm md:text-xl font-camel font-light text-gray-700 break-words">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex justify-between relative pt-8 md:pt-10 ">
        {/* Left Side with ServicesHeader1 desktop */}
        <div className="md:w-[30%] hidden md:flex     w-1/3 mt-4 relative">
          <img
            src={ProjectImagesHeader1}
            alt="Projects Header 1"
            className=""
          />
          {/* Absolute positioned h2 */}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-10 md:-translate-x-1/4 -translate-y-1/2 text-nowrap text-lg md:text-5xl lg:text-[47.12px] font-bold text-tertiary mb-6">
            صور المشروع
          </h1>
        </div>

        {/* Left Side with ServicesHeader1 mobile */}
        <div className=" flex md:hidden     mt-4 relative">
          <img
            src={ProjectImagesHeader2}
            alt="Projects Header 1"
            className=""
          />
          {/* Absolute positioned h2 */}
          <h1 className="absolute top-3 -right-4 transform -translate-x-10 md:-translate-x-1/4 -translate-y-1/2 text-nowrap text-lg md:text-5xl lg:text-[47.12px] font-bold text-tertiary mb-6">
            صور المشروع
          </h1>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className=" w-1/3 hidden md:flex  mt-4 ">
          <img src={ProjectHeaderP2} alt="Projects Header 2" />
        </div>
      </div>

      {/* Header-Project info */}

      {/*Imaages Content */}

      <div className="mx-4 md:mx-8 py-5 md:py-9">
        <div className="grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[600px]">
          {/* Mobile: Main image first */}
          <div className="lg:hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Left Column - Hidden on mobile */}
          <div className="hidden lg:flex lg:flex-col gap-4">
            {project.detailImages.slice(0, 2).map((img, index) => (
              <div key={`left-${index}`} className="h-full">
                <img
                  src={img}
                  alt={`${project.title} - Detail ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Main Image - Desktop */}
          <div className="hidden lg:flex col-span-1 gap-1 row-span-2">
            {project.detailImages.slice(2).map((img, index) => (
              <div key={`left-${index}`} className="h-full">
                <img
                  src={img}
                  alt={`${project.title} - Detail ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
            /> */}
          </div>

          {/* Right Column - Hidden on mobile */}
          <div className="hidden lg:flex lg:flex-col gap-4">
            {project.detailImages.slice(2, 4).map((img, index) => (
              <div key={`right-${index}`} className="h-full">
                <img
                  src={img}
                  alt={`${project.title} - Detail ${index + 3}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Detail images */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {project.detailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} - Detail ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
