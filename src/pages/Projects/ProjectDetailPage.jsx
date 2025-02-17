import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Import your projects array (or fetch it from an API)
import { projects } from "../../components/MasonaryGrid"; // Adjust the import path as needed
import { img } from "framer-motion/client";

function ProjectDetailPage() {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project by ID
  const project = projects.find((p) => p.id === parseInt(projectId));

  // If project not found, show an error message
  if (!project) {
    return (
      <div className="p-8 text-center text-2xl font-bold">
        المشروع غير موجود
      </div>
    );
  }

  return (
    <div className=" bg-accent font-camel overflow-hidden">
      <Header />

      {/* Section Header */}
      <div className="flex justify-between relative pt-32">
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
        <div className="mt-14 pb-5 md:mt-20 mx-4 md:m-base-m flex z-30 font-camel text-nowrap text-xs md:text-sm text-gray-600 font-">
          أعمالنـا / <span>{project.title}</span>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="w-1/4 md:w-64 mt-4">
          <img
            src="/src/assets/img/ProjectSubHeader1.svg"
            alt="Services Header 2"
          />
        </div>
      </div>


      {/* Project Details ////////////////////////////////////////*/}
      <div className=" py-">
        <div className="  rounded-xl md:rounded-bl-3xl h-fit bg-[#FFFFFF] mx-4 md:mx-8">
          {/* top */}
          <div className=" flex  items-center justify-">
            <div className=" card-container   bg-accent rounded-bl-xl md:rounded-bl-3xl">
              <div className="card-header">
                <h1 className="font-extrabold px-1 z-10  p-3 md:p-5 md:px-10 text-lg text- md:text-5xl text-tertiary">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 w- text-center px-2 md:px-7">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="md:px-4 md:py-2 py-1 text-xs md:text-sm  px-2 border md:border-2 border-primary font-bold text-gray-700 rounded-lg"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* bottom */}
          <div className="  md:flex gap-3  items justify-between i px-6 md:px-12 py-8 ">
            {/* contianer 1 */}
            <div className="  flex items-start justify-center w-1/2 md:w-[30em]  md:order-2   justify-  ">
              {project.partner && (
                <img
                  src={project.partner}
                  alt="icon"
                  className="w- h- md:w-32 md:h-"
                />
              )}
            </div>

            {/* container 2 */}
            <div className=" w-  order-2 py-3 md:order-1">
              <p className="z-10 text-xs md:text-base font-light text-justify text-gray-700">
                {project.fullDescription}
              </p>

              {/* Budget */}
              <div className="flex items-center gap-5 mt-8">
                <p className="text-sm md:text-xl font-light"> {project.statistics}</p>
                <span className="text-sm md:text-xl font-sans font-light text-gray-700">
                  {project.budget}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex justify-between relative pt-32">
        {/* Left Side with ServicesHeader1 and h2 */}
        <div className="md:w-[30%]    w-1/3 mt-4 relative">
          <img
            src="/src/assets/img/ProjectHeaderP1.svg"
            alt="Services Header 1"
            className="hidden md:flex"
          />
          {/* Absolute positioned h2 */}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-10 md:-translate-x-1/4 -translate-y-1/2 text-nowrap text-lg md:text-5xl font-bold text-tertiary mb-6">
            صور المشروع
          </h1>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="md:w w-1/3   mt-4">
          <img
            src="/src/assets/img/ProjectHeaderP2.svg"
            alt="Services Header 2"
          />
        </div>
      </div>

      {/* Header-Project info */}

      {/*Imaages Content */}

      <div className="mx-4 md:mx-8 py-9">
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
