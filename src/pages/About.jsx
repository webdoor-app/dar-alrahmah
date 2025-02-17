import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SlideCards from "../components/SlideCards";

function About() {

  return (
    <div className=" h-fit flex flex-col justify-between font-camel  bg-accent ">
      <Header />

      <div className="pt-48 pb-8">
      <SlideCards />


           {/* Section Footer */}
           <div className="flex justify-between ">
          {/* Right Side with ServicesFooter2 */}
          <div className="w-  mb-">
            <img
                    src="/src/assets/img/AboutFooter1.svg"
                    alt="Services Header 2"
                  />
          </div>
          {/* Left Side with ServicesFooter1 and h2 */}
          <div className="w my-8 ">
            <img
              src="/src/assets/img/AboutFooter2.svg"
              alt="Services Header 1"
            />
          </div>
        </div>

      </div>
      
      <Footer />

    </div>
  );
}

export default About;
