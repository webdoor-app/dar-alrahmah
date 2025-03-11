import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SlideCards from "../components/SlideCards";
import AboutFooter1 from "../assets/img/AboutFooter1.svg";
import AboutFooter2 from "../assets/img/AboutFooter2.svg";
import AboutMobileFooter from "../assets/img/AboutMobileFooter.svg";

function About() {
  return (
    <div className=" h-fit flex flex-col justify-between font-camel  bg-accent ">
      <Header />

      <div className="pt-20 md:pt-0 pb-8 md:pb-0">
        <SlideCards />


        
        {/*Desktop Section Footer */}
        <div className="md:flex justify-between hidden">
          {/* Right Side with ServicesFooter2 */}
          <div className="w-  mb-">
            <img src={AboutFooter1} alt="About Footer 2" />
          </div>
          {/* Left Side with ServicesFooter1 and h2 */}
          <div className="w my-8 md:mt-16  ">
            <img src={AboutFooter2} alt="About Footer 1" />
          </div>
        </div>


        {/*Mobile Section Footer */}
        <div className="md:hidden justify-between pt-8 flex">
          {/* Right Side with ServicesFooter2 */}
          <div className="w-[90%]  mb-">
            <img src={AboutMobileFooter} alt="About Footer 2" />
          </div>
          {/* Left Side with ServicesFooter1 and h2 */}
          {/* <div className="w my-8 md:mt-16  ">
            <img src={AboutFooter2} alt="About Footer 1" />
          </div> */}
        </div>


      </div>

      <Footer />
    </div>
  );
}

export default About;
