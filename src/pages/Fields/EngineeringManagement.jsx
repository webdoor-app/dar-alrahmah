import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import UrbenFoundationSection from "../../components/UrbenFoundationSection";
import UrgenPlaningIMage from "../../assets/img/urban-planning.png";

function EngineeringManagement() {
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
              className=" md:w-[30rem] mx-auto md:mx-0  w-[20rem]  animate-float animation-delay-2000"
            />
           
          </div>

          {/* content */}

          <div className="pt">
            <h1 className="text-primary font-extrabold  text-2xl md:text-6xl mb-4 mt-20 md:mt-40">  الادارة الهندسية</h1>
            <p className="text-secondary font-bold justify-evenly text-justify w-full md:w-[90%] text-sm md:text-lg ">
            نقدم حلولاً في الإدارة الهندسية تشمل تخطيط وتنفيذ ومراقبة المشاريع القائمة والمتعثرة لتحقيق أهداف العملاء بكفاءة عالية. فريقنا المتمرس يضمن إنجاز المشاريع بأعلى مستويات الجودة وفي الوقت المحدد.
            </p>
          </div>
        </div>
      </section>


      <section>
      <UrbenFoundationSection tabsToShow={["الخدمات المساندة", "إدارة المشاريع المتعثرة (PMO)", "الإشراف على التنفيذ"]} />
      </section>


      {/* <ServicesSection /> */}
      <Footer />
    </div>
  );
}

export default EngineeringManagement;
