import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHeader1 from "../assets/img/ContactHeader1.svg";
import ContactFooter1 from "../assets/img/ContactFooter1.svg";

function Contact() {
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  // EmailJS
  const form = useRef();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.user_name.trim()) {
      errors.user_name = 'الرجاء إدخال الاسم';
    }
    
    if (!formData.user_email.trim()) {
      errors.user_email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'الرجاء إدخال رسالتك';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
    setFormErrors({});
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    // Set loading state
    setIsSubmitting(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, { // Emialjs configuration
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Wait 3 seconds before showing alert
          setTimeout(() => {
            // Custom alert
            const alertElement = document.createElement('div');
            alertElement.className = 'custom-alert font-camel';
            alertElement.innerHTML = 'تم إرسال رسالتك بنجاح';
            document.body.appendChild(alertElement);
            
            // Remove alert after 5 seconds
            setTimeout(() => {
              document.body.removeChild(alertElement);
            }, 5000);
            
            // Reset form and loading state
            resetForm();
            setIsSubmitting(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          
          // Wait 3 seconds before showing error alert
          setTimeout(() => {
            // Custom alert for error
            const alertElement = document.createElement('div');
            alertElement.className = 'custom-alert error font-camel';
            alertElement.innerHTML = 'حدث خطأ أثناء إرسال رسالتك، يرجى المحاولة مرة أخرى';
            document.body.appendChild(alertElement);
            
            // Remove alert after 5 seconds
            setTimeout(() => {
              document.body.removeChild(alertElement);
            }, 5000);
            
            // Reset loading state
            setIsSubmitting(false);
          }, 3000);
        },
      );
  };

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
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-right text-sm md:text-lg font-extraBold mb-2">
                الإســـــــم <span className="text-secondary"></span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="الأسم الأول والأخيـر.."
                  className={`w-full bg-accent text-right px-4 py-3 rounded-xl text-sm md:text-base border-gray-300 focus:outline-none ${formErrors.user_name ? 'border-2 border-red-500' : ''} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {formErrors.user_name && (
                  <p className="text-secondary font-camel text-right text-sm mt-1">{formErrors.user_name}</p>
                )}
              </div>
              
              {/* Email Input */}
              <div>
                <label className="block text-right text-sm md:text-lg font-extraBold mb-2">
                 البريد الإلكتروني <span className="text-secondary"></span>
                </label>
                <input
                  type="email" 
                  name="user_email"
                  placeholder=" اكتب بريدك الإلكتروني .."
                  className={`w-full bg-accent text-right px-4 py-3 rounded-xl text-sm md:text-base border-gray-300 focus:outline-none ${formErrors.user_email ? 'border-2 border-red-500' : ''} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {formErrors.user_email && (
                  <p className="text-secondary font-camel text-right text-sm mt-1">{formErrors.user_email}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-right text-sm md:text-lg font-extraBold mb-2">
                الرســـــالة <span className="text-secondary"></span>
                </label>
                <textarea
                  name="message"
                  placeholder="اكتب رسالتك بشكل مفصل هنا..."
                  rows="4"
                  className={`w-full bg-accent text-right px-4 py-3 rounded-xl text-sm md:text-base border-gray-300 focus:outline-none ${formErrors.message ? 'border-2 border-red-500' : ''} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.message && (
                  <p className="text-secondary font-camel text-right text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-primary w-full md:w-1/3 text-white text- md:text-xl md:font-extraBold md:h-[64px] py-2 my- md:my-0 md:py-3 px-8 rounded-xl hover:bg-[#22372a] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
            
                    </div>
                  ) : (
                    'إرسـال'
                  )}
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
