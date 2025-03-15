import React, { useState } from "react";

// Import all images
import footerIcons from "../assets/img/footer-icons.svg";
import mobileFooterIcon1 from "../assets/img/MobileFooterIcon1.svg";
import mobileFooterIcon2 from "../assets/img/MobileFooterIcon2.svg";
import logoLight from "../assets/img/logoLight.svg";
import FooterDesktopIconR from "../assets/img/FooterDesktopIconR.svg";
import FooterDesktopIconL from "../assets/img/FooterDesktopIconL.svg";

function Footer() {
  // State for dialogs
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfUseOpen, setIsTermsOfUseOpen] = useState(false);

  // Open Privacy Policy dialog
  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);

  // Close Privacy Policy dialog
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  // Open Terms of Use dialog
  const openTermsOfUse = () => setIsTermsOfUseOpen(true);

  // Close Terms of Use dialog
  const closeTermsOfUse = () => setIsTermsOfUseOpen(false);

  // Close dialog when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePrivacyPolicy();
      closeTermsOfUse();
    }
  };

  return (
    <footer className="relative md:h-[27%] bg-primaryBurnt text-white font-camel overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 top-0 z-0">
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center w-full">
          <img
            src={FooterDesktopIconL}
            alt="Footer Icons"
            className="w- h-full object-cover"
            loading="lazy"
          />
          <img
            src={FooterDesktopIconR}
            alt="Footer Icons"
            className="w- h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center h-full">
          <img
            src={mobileFooterIcon1}
            alt="Mobile Footer Icon 1"
            className="w- h-[70%] object-cover"
            loading="lazy"
          />
          <img
            src={mobileFooterIcon2}
            alt="Mobile Footer Icon 2"
            className="w- h-[70%] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative md:w-full w- z-10 container w-fit justify-center items-center text-center mx-auto px-">
        <h3 className="font-sm text-xs md:text-lg py-4 text-gray-400 text-nowrap">
          <button
            onClick={openPrivacyPolicy}
            className="hover:text-white"
          >
            سياسة الخصوصية
          </button>
          <span className="mx-3">|</span>
          <button
            onClick={openTermsOfUse}
            className="hover:text-white"
          >
            شروط الاستخدام
          </button>
        </h3>

        <div className="flex flex-1 mt-6 items-center justify-center gap-12 flex-wrap">
          {/* Logo */}
          <div className="space-y-4">
            <a href="#">
              <img
                className="w-56 md:w-64"
                src={logoLight}
                alt="Logo"
                loading="lazy"
              />
            </a>
          </div>

          {/* Social Media Section */}
          <div className="space-y-2">
            <h3 className="text-xl text-center text-accent hidden md:flex items-center justify-center text[29.12px] font-bold">
              تواصـل معنـــــا
            </h3>
            <h3 className="md:hidden flex items-center justify-center text[12px] font-bold">
              حساباتنــا على مواقــع التواصل الإجتماعي
            </h3>
            <div className="flex flex-row-reverse gap-8 md:gap-4 justify-center">
              {/* Mail */}
              <a
                href="mailto:info@drconsultancy.sa"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
                </svg>
              </a>
              {/* Phone */}
              <a
                href="tel:+966555225083"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-3.379a.75.75 0 0 0-.53.22l-2.126 2.125a20.42 20.42 0 0 1-6.232-6.232l2.125-2.126a.75.75 0 0 0 .22-.53V3.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v1.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/drconsultancy_/?igsh=MWN4eG12MWhieml0bg%3D%3D#"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-5.33 0" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/drconsultancy_?s=21&t=0JktfAGNeA78R1frOiMNvw"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://sa.linkedin.com/company/drconsultancy"
                className="text-secondary size-5 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14z" />
                  <path d="M8 11v5M8 8v.01M12 16v-5m4 5v-3a2 2 0 0 0-4 0" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section - Centered */}
        <div className="flex justify-center mt-6 py-4 md:py-8">
          <div className="w-fit text-xs md:text-lg text-center">
            <p className="text-gray-400 text-nowrap">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لدار الرحمة
              لـلاستشـارات
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      {isPrivacyPolicyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-15 backdrop-blur-sm"
          onClick={handleBackdropClick} // Close dialog when clicking outside
        >
          <div className="bg-accent text-black p-6 rounded-2xl md:rounded-3xl w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto">
            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold mb-4 border-b pb-2 text-secondary">
              سياسة الخصوصية:
            </h2>

            {/* Content */}
            <div className="space-y-4">
              {/* General Description */}
              <p className="text-sm md:text-base">
                تعتبر خصوصيتك مهمة بالنسبة لنا، ونلتزم بحماية بياناتك الشخصية. توضح
                سياسة الخصوصية هذه كيف نجمع معلوماتك وكيف نستخدمها وكيف نحميها.
              </p>

              {/* Section 1 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  1. المعلومات التي نجمعها
                </h3>
                <p className="mb-2 text-sm md:text-base">
                  نقوم بجمع معلومات عند التواصل معك بمختلف وسائل التواصل أو ملء نموذج
                  التواصل، يشمل ما يلي:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  <li>الاسم</li>
                  <li>البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  2. كيفية استخدام المعلومات
                </h3>
                <p className="mb-2 text-sm md:text-base">
                  نستخدم المعلومات التي نجمعها للغرض التالي:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                  <li>الرد على استفساراتك أو طلباتك للخدمات</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  3. حماية المعلومات
                </h3>
                <p className="text-sm md:text-base">
                  نستخدم تدابير أمان لحماية معلوماتك الشخصية من الوصول غير المصرح به أو
                  الاستخدام غير القانوني.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  4. مشاركة المعلومات
                </h3>
                <p className="text-sm md:text-base">
                  لا نقوم بإفشاء معلوماتك الشخصية لأطراف ثالثة.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  5. الروابط لمواقع أخرى
                </h3>
                <p className="text-sm md:text-base">
                  قد يحتوي موقعنا على روابط لمواقع أخرى. نحن غير مسؤولين عن سياسات
                  الخصوصية لهذه المواقع. يُرجى مراجعة سياسات الخصوصية الخاصة بهذه
                  المواقع قبل الدخول إليها.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  6. تغييرات سياسة الخصوصية
                </h3>
                <p className="text-sm md:text-base">
                  نحتفظ بالحق في تعديل سياسة الخصوصية في أي وقت.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  7. الاتصال بنا
                </h3>
                <p className="text-sm md:text-base">
                  إذا كان لديك أي استفسارات حول سياسة الخصوصية؛ فيُرجى التواصل معنا عبر
                  البريد الإلكتروني المتاح على الموقع.
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closePrivacyPolicy}
              className="mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* Terms of Use Dialog */}
      {isTermsOfUseOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-15 backdrop-blur-sm"
          onClick={handleBackdropClick} // Close dialog when clicking outside
        >
          <div className="bg-accent text-black p-6 rounded-2xl md:rounded-3xl w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto">
            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold mb-4 border-b pb-2 text-secondary">
              سياسة الاستخدام:
            </h2>

            {/* Content */}
            <div className="space-y-4">
              {/* General Description */}
              <p className="text-sm md:text-base">
                مرحباً بكم في الموقع الرسمي لشركة دار الرحمة للاستشارات. باستخدامك لهذا
                الموقع؛ فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءة هذه
                السياسة بعناية قبل استخدام الموقع.
              </p>

              {/* Section 1 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  1. قبول الشروط
                </h3>
                <p className="text-sm md:text-base">
                  باستخدامك لهذا الموقع؛ فإنك توافق على الشروط والأحكام.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  2. حقوق الملكية الفكرية
                </h3>
                <p className="text-sm md:text-base">
                  جميع المحتويات (نصوص، صور، شعارات، إلخ) هي ملكية خاصة لشركة دار الرحمة.
                  يُمنع استخدام أي محتوى للموقع دون إذن كتابي مسبق من قِبلنا.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  3. الاستخدام المسموح به
                </h3>
                <p className="text-sm md:text-base">
                  يمكنك استخدام الموقع للتعريف بشركتنا، وعرض أعمالنا، والتواصل معنا عبر
                  البريد الإلكتروني لطلب الخدمة. إن محتويات صفحات الموقع الإلكتروني هي
                  للتعريف وعرض أعمال الشركة، وتخضع هذه المحتويات للتغيير بدون إشعار. يُمنع
                  الاستخدام التجاري أو أي نشاط آخر بشكل غير قانوني.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  4. حماية البيانات
                </h3>
                <p className="text-sm md:text-base">
                  نحن ملتزمون بحماية بياناتك الشخصية. يُرجى الاطلاع على سياسة الخصوصية
                  لدينا؛ لمعرفة كيفية جمع ومعالجة بياناتك.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  5. إخلاء المسؤولية
                </h3>
                <p className="text-sm md:text-base">
                  نتحرى قدر الإمكان توفير الروابط للمواقع الإلكترونية الأخرى؛ وذلك حرصاً
                  منا على التسهيل على المستخدم؛ دون أدنى مسؤولية على الشركة عن محتويات تلك
                  المواقع الإلكترونية.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  6. القوانين المطبقة
                </h3>
                <p className="text-sm md:text-base">
                  تخضع سياسة الاستخدام للقوانين المعمول بها في المملكة العربية السعودية.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-primary border-b pb-1">
                  7. الاتصال
                </h3>
                <p className="text-sm md:text-base">
                  للاستفسارات أو لطلب الخدمة؛ يُرجى التواصل معنا عبر البريد الإلكتروني
                  المتاح على الموقع أو عبر نموذج التواصل.
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeTermsOfUse}
              className="mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;