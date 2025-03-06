import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import UrbenFoundationSection from "../../components/UrbenFoundationSection";
import UrgenPlaningIMage from "../../assets/img/urban-planning.png";
import mobileFrame from "../../assets/img/mobileFrame.svg";
import urbanPlanningEffect from "../../assets/img/Urben-Ellipse.svg";

function Qualitives() {
  return (
    <div>
      <Header />

      <div className="reltive  justify-start items-center md:hidden  ">
        <img
          src={mobileFrame}
          alt="icon"
          className="flex md:hidden absolute left-0 top-[38.5%]   "
        />
      </div>

      {/*Hero section  */}
      <section className="h- bg-accent font-camel">
        <div className="md:flex items-center justify-center gap-6 pt-20  md:m-base-m mx-5">
          {/* Image */}

          <div className="  text-center  mt-6 md:mt-0 p-0 m-0 ">
            <img
              src={UrgenPlaningIMage}
              alt=""
              className=" md:w-[30rem] mx-auto md:mx-0  w-[10rem] animate-float animation-delay-2000"
            />
            <img
              src={urbanPlanningEffect}
              alt=""
              className=" md:w-[30rem] mx-auto md:mx-0 md:hidden flex  w-[10rem] animate-float animation-delay-2000"
              loading=""
            />
          </div>

          {/* content */}

          <div className="pt">
            <h1 className="text-primary font-extrabold text-[21px] md:text-[76.24px] md:mb-0 mb-8 mt-8 md:mt-40">
              {" "}
              الخبرات النوعية
            </h1>
            <p className="text-secondary  font-bold justify-evenly text-justify w-full md:w-[90%] text-sm md:text-[20px]/7 ">
              نتميز بخبرات نوعية تجمع بين تطوير مرافق ضيوف الرحمن لضمان الراحة
              والكفاءة من خلال حلول مبتكرة تخدم الحجاج والمعتمرين، ودراسة وإدارة
              حركة الحشود لضمان سلامتهم وانسيابية التنقل في التجمعات الكبرى،
              بالإضافة إلى تصميم وتأهيل الوجهات السياحية والتاريخية بما يبرز
              الهوية الثقافية والتراثية ويحقق التوازن بين الاستدامة وجذب الزوار
              لتقديم تجارب مميزة ومتكاملة.
            </p>
          </div>
        </div>
      </section>

      <section>
        <UrbenFoundationSection
          tabsToShow={[
            "تصميم الوجهات التاريخية والسياحية",
            "تصميم وتخطيط حركة الحشود",
            "تطوير مرافق منظومة ضيوف الرحمن",
          ]}
        />
      </section>

      {/* <ServicesSection /> */}
      <Footer />
    </div>
  );
}

export default Qualitives;
