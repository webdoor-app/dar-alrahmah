import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import UrbenFoundationSection from "../../components/UrbenFoundationSection";
import mobileFrame from "../../assets/img/mobileFrame.svg";
import urbanPlanningEffect from "../../assets/img/Urben-Ellipse.svg";
import UrgenPlaningIMage from "../../assets/img/urban-planning.png";

function EngineeringManagement() {
  return (
    <div>
      <Header />

      {/*Hero section  */}
      <section className="h- bg-accent font-camel">
        <div className="md:flex items-center justify-center gap-6 pt-20  md:m-base-m ">
          {/* Image */}

          <div className="  text-center  mt-6 md:mt-0 p-0 m-0">
            <img
              src={UrgenPlaningIMage}
              alt=""
              className="md:w-[30rem] mx-auto md:mx-0  w-[10rem] animate-float animation-delay-2000"
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
            <div className="flex justify-between items- w- ">
              <h1 className="text-primary font-extrabold text-[21px] md:text-[76.24px] md:mb-0 my-8  md:mt-40 px-5 md:px-0">
                {" "}
                الإدارة الهندسية
              </h1>

              <div className=" mt-6  justify-start items-center md:hidden  ">
                <img
                  src={mobileFrame}
                  alt="icon"
                  className="flex md:hidden  w-full  "
                />
              </div>
            </div>
            <p className="text-secondary  font-bold justify-evenly text-justify w-full md:w-[90%] text-sm md:text-[20px]/7 px-5 md:px-0 ">
              نقدم حلولاً في الإدارة الهندسية تشمل تخطيط وتنفيذ ومراقبة المشاريع
              القائمة والمتعثرة لتحقيق أهداف العملاء بكفاءة عالية. فريقنا
              المتمرس يضمن إنجاز المشاريع بأعلى مستويات الجودة وفي الوقت المحدد.
            </p>
          </div>
        </div>
      </section>

      <section>
        <UrbenFoundationSection
          tabsToShow={[
            "الإشراف على التنفيذ",
            "إدارة المشاريع المتعثرة (PMO)",
            "الخدمات المساندة",
          ]}
        />
      </section>

      {/* <ServicesSection /> */}
      <Footer />
    </div>
  );
}

export default EngineeringManagement;
