import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import UrbenFoundationSection from "../../components/UrbenFoundationSection";
import UrgenPlaningIMage from "../../assets/img/urban-planning.png";

function Qualitives() {
  return (
    <div>
      <Header />



      {/*Hero section  */}
      <section className="h- bg-accent font-camel">
        <div className="md:flex items-center justify-center gap-6 pt-20  md:m-base-m mx-5">
          {/* Image */}

          <div className=" text p-0 m-0 ">
            <img
              src={UrgenPlaningIMage}
              alt=''
              className=" md:w-[30rem] mx-auto md:mx-0  w-[20rem]    animate-float animation-delay-2000"
            />
           
          </div>

          {/* content */}

          <div className="pt">
            <h1 className="text-primary font-extrabold text-2xl md:text-6xl mb-4 mt-20 md:mt-40"> الخبرات النوعية</h1>
            <p className="text-secondary font-bold justify-evenly text-justify w-full md:w-[90%] text-sm md:text-lg ">
            نتميز بخبرات نوعية تجمع بين تطوير مرافق ضيوف الرحمن لضمان الراحة والكفاءة من خلال حلول مبتكرة تخدم الحجاج والمعتمرين، ودراسة وإدارة حركة الحشود لضمان سلامتهم وانسيابية التنقل في التجمعات الكبرى، بالإضافة إلى تصميم وتأهيل الوجهات السياحية والتاريخية بما يبرز الهوية الثقافية والتراثية ويحقق التوازن بين الاستدامة وجذب الزوار لتقديم تجارب مميزة ومتكاملة.
            </p>
          </div>
        </div>
      </section>


      <section>
      <UrbenFoundationSection tabsToShow={["تصميم الوجهات التاريخية والسياحية", "تصميم وتخطيط حركة الحشود", "تطوير مرافق منظومة ضيوف الرحمن"]} />
      </section>


      {/* <ServicesSection /> */}
      <Footer />
    </div>
  );
}

export default Qualitives;
