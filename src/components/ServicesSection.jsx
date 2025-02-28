import React, { useState } from "react";

// Import all images
import urbanPlanningImage from "../assets/img/urban-planning.png";
import urbanPlanningEffect from "../assets/img/Urben-Ellipse.svg";
import serviceIcon1 from "../assets/img/ServiceIcon1.svg";
import serviceIcon2 from "../assets/img/ServiceIcon2.svg";
import qualitativeOptionsImage from "../assets/img/qualitative-options.png";
import qualitativeEllipse from "../assets/img/Qualitative-Ellipse.svg";
import qualitativeIcon1 from "../assets/img/qualitativeIcon1.svg";
import qualitativeIcon2 from "../assets/img/qualitativeIcon2.svg";
import qualitativeIcon3 from "../assets/img/qualitativeIcon3.svg";
import architecturalDesignImage from "../assets/img/architectural-design.png";
import architecturalEllipse from "../assets/img/Architectural-Ellipse.svg";
import architecturalIcon1 from "../assets/img/architecturalIcon1.svg";
import engineeringManagementImage from "../assets/img/engineering-management.png";
import engineeringEllipse from "../assets/img/Engeneering-Ellipse.svg";
import engineeringIcon1 from "../assets/img/EngeneeringIcon1.svg";
import engineeringIcon2 from "../assets/img/EngeneeringIcon2.svg";
import engineeringIcon3 from "../assets/img/EngeneeringIcon3.svg";
import servicesHeader1 from "../assets/img/ServicesHeader1.svg";
import servicesHeader2 from "../assets/img/ServicesHeader2.svg";
import line from "../assets/img/Line.svg";
import horizontalLine from "../assets/img/HorozontalLine.svg";
import servicesFooter1 from "../assets/img/ServicesFooter1.svg";
import servicesFooter2 from "../assets/img/ServicesFooter2.svg";

const tabs = [
  { id: "urban-planning", label: "التخطيط الحضري" },
  { id: "qualitative-options", label: "الخبرات النوعية" },
  { id: "architectural-design", label: "التصميم المعماري" },
  { id: "engineering-management", label: "الإدارة الهندسية" },
];

const serviceData = {
  "urban-planning": {
    title: "التخطيــط الحضري",
    description:
      "     نقدم خدمات التخطيط الحضري لتحسين جودة الحياة في المجتمعات الحضرية",
    image: urbanPlanningImage,
    effect: urbanPlanningEffect,
    subServices: [
      {
        title: "التوجيه الاستراتيجي للمناطق",
        icon: serviceIcon1,
        subSubServices: [
          " المسح الإجتماعي",
          "  صناعة وقياس المؤشرات",
          "  تحليل الوضع الراهن",
          " إعداد قواعد البيانات",
          "  دعم متخذ القرار",
          "  دراسة توجهات المنطقة",
        ],
      },
      {
        title: "تأسيس المراصد الحضرية",
        icon: serviceIcon2,
        subSubServices: [
          "  تحليل الوصول الشامل",
          " وضع الرؤى الإستراتيجية",
          "  بناء المخطط الهيكلي للمدينة",
          "تحليل الأثر ووضع المستهدفات",
          "دراسة المقارنات المعيارية وتحليل التجارب المالية",
          "التوافق مع السياق المحلي",
        ],
      },
    ],
  },
  "qualitative-options": {
    title: "الخبرات النوعية",
    description: "",
    image: qualitativeOptionsImage,
    effect: qualitativeEllipse,
    subServices: [
      {
        title: "تصميم الوجهات التاريخية والسياحية",
        icon: qualitativeIcon1,
        subSubServices: [
          "صناعة القصة من خلال ربط الأبعاد المختلفة",
          "تطوير مواقع تاريخية",
          "خلق واجهات سياحية",
          "وضع المحددات والمواجهات",
          "استقطاب الخبراء النوعيين",
          "خلق فرص استثمارية",
        ],
      },
      {
        title: "تصميم وتخطيط حركة الحشود",
        icon: qualitativeIcon2,
        subSubServices: [
          "إعداد المخططات وتقييمها",
          "تحليل المواقع والتأكد من جاهزيتها",
          "وضع المفاهيم وتطبيق المعايير",
          "التنسيق بين الجهات المشغلة",
          "الإشراف على التنفيذ   والتشغيل",
          "تصميم مسار الحشود",
        ],
      },
      {
        title: "تطوير مرافق منظومة ضيوف الرحمن",
        icon: qualitativeIcon3,
        subSubServices: [
          "الإشراف على التشغيل",
          "تصميم المشاريع النوعية",
          "إعتماد إسكان الحجاج والمعتمرين",
          "إدارة متطلبات اصحاب المصلحة",
          "موائمة الخدمات مع احتياجات الظيف",
          "ربط الخطط التشغيلية بمفاهيم النسك",
        ],
      },
    ],
  },
  "architectural-design": {
    title: "التصميم المعماري",
    description:
      "نؤمن بأن التصميم العمراني هو فن يجمع بين الابتكار والعملية. نعمل على إنشاء تصاميم مبتكرة تحقق التناغم بين احتياجات السكان والبيئة المبنية، مع التركيز على تطوير مساحات حضرية نابضة بالحياة ومستدامة تعكس هوية المجتمع المحلي.",
    image: architecturalDesignImage,
    effect: architecturalEllipse,
    subServices: [
      {
        title: "تصميم المباني",
        icon: architecturalIcon1,
        subSubServices: [
          "التصميم العمراني",
          "تصميم وإعتماد المخططات",
          "التصميم الحضري",
          "تخصيص استعالات الأراضي",
          "إعداد  الدراسات البيئية",
          "دراسة وتحليل المواقع",
        ],
      },
    ],
  },

  "engineering-management": {
    title: "الإدارة الهندسية",
    description:
      "نقدم حلولاً في الإدارة الهندسية تشمل تخطيط وتنفيذ ومراقبة المشاريع القائمة والمتعثرة لتحقيق أهداف العملاء بكفاءة عالية. فريقنا المتمرس يضمن إنجاز المشاريع بأعلى مستويات الجودة وفي الوقت المحدد.",
    image: engineeringManagementImage,
    effect: engineeringEllipse,
    subServices: [
      {
        title: " الخدمات المساندة",
        icon: engineeringIcon3,
        subSubServices: [
          "استخراج رخص المنشئات",
          "تصميم وإعتماد المنشئات وفق معايير الأمن والسلامة",
          "ترخيص السكن الجماعي",
          "دعم تقني لتنسيق مشاركة المعلومات",
          "الرفع المساحي",
          "بناء قاعدة نظم المعلومات الجغرافية",
        ],
      },
      {
        title: " إدارة المشاريع المتعثرة (PMO)",
        icon: engineeringIcon2,
        subSubServices: [
          "إدارة التكلفة",
          "إدارة التشييد",
          "المراجع والقيم",
          "إدارة اصحاب المصلحة",
          "إدارة الموارد",
          "إدارة الجداول الزمنية",
        ],
      },
      {
        title: "الإشراف على التنفيذ",
        icon: engineeringIcon1,
        subSubServices: [
          "إدارة الموقع",
          "الرصد والتوثيق",
          "المتابعة والتقييم",
          "ضمان مستوى جودة العمل",
          "متابعة الميزانيات والجداول الزمنية",
          "مطابقة المعاير والمواصفات الفنية",
        ],
      },
    ],
  },
};

function ServicesSection() {
  const [activeTab, setActiveTab] = useState("urban-planning");
  const [hoveredSubService, setHoveredSubService] = useState(null);

  // check if the last tab is selected.

  const isLastTabSelected = activeTab === tabs[tabs.length - 1].id;

  return (
    <section
      className={`h-fit flex flex-col justify-between font-camel ${
        isLastTabSelected ? "bg-primaryBurnt" : "bg-accent"
      }`}
    >
      {/* Section Header */}
      <div className="flex mt-5 md:mt-12 mb- justify-between relative">
        {/* Left Side with ServicesHeader1 and h2 */}
        <div className="w-[30%] md: lg:w-fit md:mt-6 relative">
          <img src={servicesHeader1} alt="Services Header 1" loading="lazy" />
          {/* Absolute positioned h2 */}
          <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2  text-lg md:text-3xl lg:text-[76.24px] font-bold text-tertiary mb-6">
            خدماتنـــا
          </h1>
        </div>

        {/* Right Side with ServicesHeader2 */}
        <div className="w-1/3">
          <img src={servicesHeader2} alt="Services Header 2" loading="lazy" />
        </div>
      </div>

      <div className="py-8 px-8  md:m-base-m flex md:items-center  flex-col lg:flex-row md:gap-40">
        {/* Sidebar Tabs */}
        <aside className="order-1 flex justify-center md:justify-normal lg:order-1 w-full lg:w-[20%] pt-32 md:pt-0 relative  md:ml-">
          {/* Line (SVG) */}
          <img
            src={line}
            alt="line"
            className="absolute right-[0.4rem] top-2 hidden lg:flex h-[95%] w- z-10"
            loading="lazy"
          />
          {/* Line (SVG) mobile */}
          <img
            src={horizontalLine}
            alt="line"
            className="absolute right-[0 top-[27%]  md:-mt-[2.3rem]  lg:hidden h-full w- z-10"
            loading="lazy"
          />

          {/* Menu */}
          <ul className="lg:space-y-20  gap-9  flex   w-fit items-center justify-center   md:space-x-4 lg:block px-">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`cursor-pointer  md:text-base  flex flex-col items-center gap-1 lg:flex-row lg:gap-2 text-xs gap-y-4 lg:gap-y-0 text-nowrap lg:text-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-secondary font-bold"
                    : isLastTabSelected
                    ? "text-accent"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {/* Circle */}
                <span
                  className={`size-4 rounded-full relative z-10 ${
                    activeTab === tab.id
                      ? "bg-secondary before:content-[''] before:absolute before:size-2 before:bg-gray-500 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
                      : isLastTabSelected
                      ? "bg-gray-400"
                      : "bg-primary"
                  }`}
                ></span>
                {/* Label */}
                {tab.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Image */}
        <div className="order-2  lg:order-3 w-full lg:w-[50%] grid place-items-center ">
          <div className="relative">
            <img
              src={serviceData[activeTab].image}
              alt={serviceData[activeTab].title}
              className="w-48 sm:w-80 animate-float animation-delay-3000"
              loading="lazy"
            />
            <img
              src={serviceData[activeTab].effect}
              alt={serviceData[activeTab].title}
              className="w-48 sm:w-80 top-0 left-0 animate-float animation-delay-3000"
              loading="lazy"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="order-3 md:order-2 w-full lg:w-[] flex flex-col justify-center items-start pt-14 md:pt-0 md:mt-0 gap-8 md:gap-12   ">
          <h3 className="md:text-[47.12px] text-2xl  md:mt-0 font-bold text-tertiary">
            {serviceData[activeTab].title}
          </h3>
          <p
            className={`text-justify my- mb- w-full md:text-base text-sm font-semibold ${
              isLastTabSelected ? "text-accent" : "text-gray-600"
            }`}
          >
            {serviceData[activeTab].description}
          </p>

          {/* Sub-services */}
          <div className="md:itmen w-full md:w-full flex items-start flex-col text-primary md:flex-row md:flex- md:items-end md:justify-start gap-4 my-1">
            {serviceData[activeTab].subServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSubService(index)}
                onMouseLeave={() => setHoveredSubService(null)}
                className={`relative group shadow-md p-4 md:p-6 border w-full md:w-1/3 lg:w-fit rounded-xl flex flex-col justify-center hover:cursor-pointer text-center items-center gap-2 ${
                  isLastTabSelected
                    ? "bg-gradient-primary border border-secondary border-opacity-25 text-white"
                    : "bg-white"
                }`}
                style={{
                  borderRight: isLastTabSelected
                    ? "2px solid rgba(184, 132, 68, 0.45)"
                    : "none", // Bottom-left border with 25% opacity
                  borderTop: isLastTabSelected
                    ? "2px solid rgba(184, 132, 68, 0.45)"
                    : "none", // Bottom-left border with 25% opacity
                  borderBottom: isLastTabSelected ? "none" : "none", // Bottom-left border none
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="size-10 md:size-14"
                  loading="lazy"
                />
                {/* Fix for service.title overflow */}
                <p className="text-base md:text-lg font-medium whitespace-normal break-words min-w-0 w-full">
                  {service.title}
                </p>

                {/* Sub-sub-services Dropdown */}
                {hoveredSubService === index && (
                  <div className="absolute top-full sm:mx-auto md:mx-0 md:-right-4 transform translate-y-2 z-10 min-w-max">
                    <div className="mt-2 bg- pt-0 p-4 grid grid-cols-2 md:grid-cols-3 gap-2 rounded-lg">
                      {service.subSubServices?.map((subSub, subIndex) => (
                        <div
                          key={subIndex}
                          className={`p-4 md:p-6 w-40 md:w-48 text-wrap text-xs md:text-base rounded-xl shadow-md border border-gray-200 transition-colors cursor-pointer hover:bg-gray-100 whitespace-normal ${
                            isLastTabSelected
                              ? "bg-gradient-primary text-white border-none"
                              : "bg-white"
                          } ${
                            subIndex % 2 === 0
                              ? "text-primary"
                              : "text-tertiary"
                          }`} // Conditionally apply text color
                        >
                          {subSub}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Footer */}
      <div className="flex justify-between mt-12 md:mt-0 mb-5 md:mb-12 ">
        {/* Right Side with ServicesFooter2 */}
        <div className="md:w-1/3  md:  w-24 m-base-m b-20">
          <img
            src={servicesFooter2}
            alt="Services Header 2"
            loading="lazy"
            className="hidden md:flex"
          />
        </div>
        {/* Left Side with ServicesFooter1 and h2 */}
        <div className="w-1/3 md:w- mt-4 md:mt-20   flex justify-end">
          <img src={servicesFooter1} alt="Services Header 1" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
