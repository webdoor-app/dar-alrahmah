import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHeader1 from "../assets/img/ContactHeader1.svg";
import ContactFooter1 from "../assets/img/ContactFooter1.svg";

function Contact() {
  return (
    <div className="bg-accent font-camel">
      <Header />

      <div>
        {/* Section Header */}
        <div className="flex pt-28 md:pt-36 justify-between  relative">
          {/* Left Side with ServicesHeader1 and h2 */}
          <div className="w-1/2 md:w-full my-4 relative">
            <img
              src={ContactHeader1}
              alt="Services Header 1"
            />
            {/* Absolute  h2 */}
            {/* <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-6xl font-bold text-tertiary mb-6">
              أعمالنــــــا
            </h1> */}
          </div>
        </div>

        {/* Contact From */}
        <div className="static flex justify-center items-center py-8 bg-accent">
          <div className="bg-white shadow-sm rounded-2xl p-3 pt-6  md:p-12 w-full md:m-base-m mx-5">
            {/* Title */}
            <h2 className="absolute top-[180px] md:top-56 md:text-5xl text-2xl text-right  font-extrabold text-tertiary mb-6">
            تواصــل معنـــا !
            </h2>

            {/* Form */}
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-right text-sm md:text-lg font-extraBold mb-2">
                الإســـــــم
                </label>
                <input
                  type="text"
                  placeholder="الأسم الأول والأخيـر.."
                  className="w-full bg-accent text-right px-4 py-3 rounded-xl text-sm md:text-base  border-gray-300  focus:outline-none"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-right text-sm md:text-lg font-extraBold mb-2">
                العنــــــوان
                </label>
                <input
                  type="text"
                  placeholder="اكتب عنوانًا واضح لرسالتك.."
                  className="w-full h bg-accent text-right px-4 py-3 rounded-xl text-sm md:text-base  border-gray-300  focus:outline-none"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-right text-sm md:text-lg font-extraBold mb-2">
                الرســـــالة
                </label>
                <textarea
                  placeholder="اكتب رسالتك بشكل مفصل هنا..."
                  rows="4"
                  className="w-full bg-accent text-right px-4 py-3 rounded-xl text-sm md:text-base  border-gray-300  focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-primary w-full md:w-1/3 text-white text- md:text-xl md:font-extraBold md:h-[64px] py-2 my- md:my-0 md:py-3 px-8 rounded-xl hover:bg-[#22372a] transition-all"
                >
                  إرسـال
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex justify-between ">
          {/* Right Side with ServicesFooter2 */}
          <div className="w-[50%] m-base-m mb-8">
            {/* <img
                    src="/src/assets/img/ServicesFooter2.svg"
                    alt="Services Header 2"
                  /> */}
          </div>
          {/* Left Side with ServicesFooter1 and h2 */}
          <div className="w mb-8 ">
            <img
              src={ContactFooter1}
              alt="Services Header 1"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
