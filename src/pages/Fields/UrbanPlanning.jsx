import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import UrbenFoundationSection from "../../components/UrbenFoundationSection";

function UrbanPlanning() {
  return (
    <div>
      <Header />



      {/*Hero section  */}
      <section className="h- bg-accent font-camel">
        <div className="md:flex items-center justify-center gap-6 pt-20  md:m-base-m mx-5">
          {/* Image */}

          <div className=" text-center p-0 m-0 ">
            <img
              src="/src/assets/img/urban-planning.png"
              alt=''
              className=" md:w-[30rem] mx-auto md:mx-0  w-[20rem] animate-float animation-delay-2000"
              loading="lazy"
            />
           
          </div>

          {/* content */}

          <div className="pt">
            <h1 className="text-primary font-extrabold text-lg md:text-5xl mb-4 mt-20 md:mt-40">التخطيط الحضري</h1>
            <p className="text-secondary font-bold justify-evenly text-justify w-full md:w-[90%] text-sm md:text-lg ">
            نقدم خدمات التخطيط الحضري لتحسين جودة الحياة في المجتمعات الحضرية من خلال تصميم استراتيجيات للتطوير المكاني المستدام. نركز على تحقيق التوازن بين التوسع العمراني والحفاظ على البيئة والتراث الثقافي.
            </p>
          </div>
        </div>
      </section>


      <section>
      <UrbenFoundationSection tabsToShow={["تأسيس المراصد الحضرية", "تطوير التوجيه الاستراتيجي للمناطق"]} />
      </section>


      {/* <ServicesSection /> */}
      <Footer />
    </div>
  );
}

export default UrbanPlanning;
