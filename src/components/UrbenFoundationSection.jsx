import React, { useState } from "react";
import MasonaryGrid from "./MasonaryGrid";

// Import images
import UrbenFoundationSectionImg from "../assets/img/UrbenFoundationSection-img.png";
import ServiceIcon1 from "../assets/img/ServiceIcon1.svg";
import UrbenFoundationSectionHIcon1 from "../assets/img/UrbenFoundationSectionH-Icon-1.svg";
import UrbenFoundationSectionFooterMobileIcon1 from "../assets/img/UrbenFoundationSectionFooterMobileIcon1.svg";
import UrbenFoundationSectionHIcon2 from "../assets/img/UrbenFoundationSectionH-icon-2.svg";
import ProjectWaletHeader1 from "../assets/img/ProjectWaletHeader1.svg";
import ProjectWaletHeader2 from "../assets/img/ProjectWaletHeader2.svg";

function UrbenFoundationSection({ tabsToShow }) {
  const [activeTab, setActiveTab] = useState(tabsToShow[0]); // Set the first tab as active by default

  //  tab content with 9 items
  const tabContent = {
    "تأسيس المراصد الحضرية": {
      id: 1,
      title: "تأسيس المراصد الحضرية",
      description:
        "إنشاء وتشغيل المراصد الحضرية لتحسين إدارة المدينة / توفير وربط البيانات",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "تحليل الوضع الراهن",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "صناعة وقياس المؤشرات",
          width: "w-full",
          textColor: "text-tertiary",
        },
        { title: "المسح الاجتماعي", width: "w-1/2", textColor: "text-primary" },
      ],
      cardsGroup2: [
        {
          title: "دراسة توجهات المنطقة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "دعم متخذ القرار",
          width: "w-full",
          textColor: "text-primary",
        },
        {
          title: "إعداد قواعد البيانات",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "تطوير التوجيه الاستراتيجي للمناطق": {
      id: 2,
      title: "تطوير التوجيه الاستراتيجي للمناطق",
      description: "صناعة المفاهيم والموجهات التخطيطية.",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "تحليل الوضع الراهن",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "صناعة وقياس المؤشرات",
          width: "w-full",
          textColor: "text-tertiary",
        },
        { title: "المسح الاجتماعي", width: "w-1/2", textColor: "text-primary" },
      ],
      cardsGroup2: [
        {
          title: "دراسة توجهات المنطقة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "دعم متخذ القرار",
          width: "w-full",
          textColor: "text-primary",
        },
        {
          title: "إعداد قواعد البيانات",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "تصميم الوجهات التاريخية والسياحية": {
      id: 3,
      title: "  تصميم الوجهات التاريخية والسياحية",
      description:
        "تطوير وجهات سياحية وتاريخية مستدامة تجزب الزوار وتحافث على التراث المحلي",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "صناعة القصة من خلال ربط الأبعاد المختلفة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "تطوير مواقع تاريخية",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "خلق وجهات سياحية",
          width: "w-1/2",
          textColor: "text-primary",
        },
      ],
      cardsGroup2: [
        {
          title: "وضع المحددات والموجهات",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "استقطاب الخبراء النوعيين",
          width: "w-1/2",
          textColor: "text-primary",
        },
        {
          title: "خلق فرص استثمارية",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "تصميم وتخطيط حركة الحشود": {
      id: 4,
      title: "تصميم وتخطيط حركة الحشود",
      description:
        "تقديم حلول متكاملة لضمان سلامة الحشود بما يتوافق مع متطلبات المكان",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "إعداد المخططات وتقييمها",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "تحليل المواقع والتأكد من جاهزيتها",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "وضع المفاهيم وتطبيق المعايير",
          width: "w-1/2",
          textColor: "text-primary",
        },
      ],
      cardsGroup2: [
        {
          title: "التنسيق بين الجهات المشغلة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "الإشراف على التنفيذ والتشغيل",
          width: "w-1/3",
          textColor: "text-primary",
        },
        {
          title: "تصميم مسارات الحشود",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "تطوير مرافق منظومة ضيوف الرحمن": {
      id: 5,
      title: "تطوير مرافق منظومة ضيوف الرحمن",
      description:
        "تقديم حلول لتطوير وإدارة المرافق ضيوف الرحمن لتحقيق تجربة روحاية مميزة",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "الإشراف على التشغيل",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "تصميم المشاريع النوعية",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "إعتماد إسكان الحجاج والمعتمرين",
          width: "w-1/2",
          textColor: "text-primary",
        },
      ],
      cardsGroup2: [
        {
          title: "إدارة متطلبات اصحاب المصلحة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "موائمة الخدمات مع احتياجات الضيف",
          width: "w-1/3",
          textColor: "text-primary",
        },
        {
          title: "ربط الخطط التشغيلية بمفاهيم النسك",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "التصميم العمراني": {
      id: 6,
      title: "التصميم العمراني",
      description:
        "فهم احتياجات العميل وربطها بمحددات الموقع لتصميم الوظيفة المناسبة للمستخدم النهائي",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "تحليل الوضع الراهن",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "صناعة وقياس المؤشرات",
          width: "w-full",
          textColor: "text-tertiary",
        },
        { title: "المسح الاجتماعي", width: "w-1/2", textColor: "text-primary" },
      ],
      cardsGroup2: [
        {
          title: "دراسة توجهات المنطقة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        { title: "دعم متخذ القرار", width: "w-1/3", textColor: "text-primary" },
        {
          title: "إعداد قواعد البيانات",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "الخدمات المساندة": {
      id: 7,
      title: "الخدمات المساندة",
      description: "تقديم الأعمال المكملة لإتمام الإجراءات والعمليات",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        {
          title: "استخراج رخص المنشئات",
          width: "w-1/2",
          textColor: "text-tertiary",
        },
        {
          title: "تصميم واعتماد المنشئات وفق معايير الأمن والسلامة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "ترخيص السكن الجماعي",
          width: "w-1/2",
          textColor: "text-primary",
        },
      ],
      cardsGroup2: [
        {
          title: "دعم تقني لتنسيق مشاركة المعلومات",
          width: "w-full",
          textColor: "text-tertiary",
        },
        { title: "الرفع المساحي", width: "w-1/3", textColor: "text-primary" },
        {
          title: "بناء قاعدة نظم المعلومات الجغرافية",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "إدارة المشاريع المتعثرة (PMO)": {
      id: 8,
      title: "إدارة المشاريع المتعثرة (PMO)",
      description: "تقييم المقاولات المتعثرة لإيجاد مواطن الخلل وطرق العلاج",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        { title: "إدارة التكلفة", width: "w-1/2", textColor: "text-tertiary" },
        { title: "إدارة التشييد", width: "w-full", textColor: "text-tertiary" },
        {
          title: "المراجعة والتقييم",
          width: "w-1/2",
          textColor: "text-primary",
        },
      ],
      cardsGroup2: [
        {
          title: "  إدارة أصحاب المصلحة",
          width: "w-full",
          textColor: "text-tertiary",
        },
        { title: "أدارة الموارد", width: "w-1/3", textColor: "text-primary" },
        {
          title: "إدارة الجداول الزمنية",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
    "الإشراف على التنفيذ": {
      id: 9,
      title: "الإشراف على التنفيذ",
      description:
        "الإشراف على إنشاء وتشغيل المشاريع القائمة بما يضمن جودة العمل",
      img: UrbenFoundationSectionImg,
      cardsGroup1: [
        { title: "إدارة المواقع", width: "w-1/2", textColor: "text-tertiary" },
        {
          title: "الرصد والتوثيق",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "المتابعة والتقييم",
          width: "w-1/2",
          textColor: "text-primary",
        },
      ],
      cardsGroup2: [
        {
          title: "ضمان مستوى جودة العمل",
          width: "w-full",
          textColor: "text-tertiary",
        },
        {
          title: "متابعة الميزانيات والجداول الزمنية",
          width: "w-1/3",
          textColor: "text-primary",
        },
        {
          title: "مطابقة المعايير والمواصفات الفنية",
          width: "w-full",
          textColor: "text-tertiary",
        },
      ],
    },
  };

  return (
    <div className="bg-accent h-fit font-camel">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between pt-20 w-full">
        {/* Left Side icon with ServicesHeader1 and h2 */}
        <div className="hidden md:flex">
          <img src={UrbenFoundationSectionHIcon1} alt="Services Header 1" />
        </div>

        {/* Tabs Display - Showing only specified tabs */}
        <div className="flex w-fit md:flex-row gap-5 items-center justify-center py-2 px-3 rounded-2xl bg-gray-100">
          {tabsToShow.map((tabName) => (
            <p
              key={tabName}
              className={`px-3 py-4 rounded-2xl cursor-pointer ${
                activeTab === tabName
                  ? "text-primaryBurnt font- bg-white"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </p>
          ))}
        </div>

        {/* Right Side icon with ServicesHeader2 */}
        <div className="w">
          <img src={UrbenFoundationSectionHIcon2} alt="Services Header 2" />
        </div>
      </div>

      {/* Section Header mobile */}
      <div className="flex-col md:hidden items-center justify-between pt-20 w-full">
        {/* Tabs */}
        <div className="flex w-[94%] text-center mx-auto md:flex-row gap- items-center justify-center py-3 px-2 rounded-2xl bg-gray-100 ">
          {tabsToShow.map((tabName) => (
            <p
              key={tabName}
              className={`px-8 py-4 rounded-2xl cursor-pointer ${
                activeTab === tabName
                  ? "text-primary font-extrabold text-xs  bg-white"
                  : "text-gray-300 text-xs"
              }`}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </p>
          ))}
        </div>
        {/* Mobile header icon */}
        <div className="flex justify-end pt-5 ">
          {/* Left Side icon with ServicesHeader1 and h2 */}

          {/* Right Side icon with ServicesHeader2 */}
          <div className="w-[40%] ">
            <img
              src={UrbenFoundationSectionHIcon2}
              alt="Services Header 2"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Rest of your existing content */}
      <div className="md:m-base-m ">
        <div className="flex items-center justify-between gap-5 pt- mx-5">
          {/* Content */}
          <div className="pt w-full md:w-fit">
            <h1 className="text-tertiary font-extrabold text-[18px] md:text-5xl mb-6 mt-">
              {tabContent[activeTab].title}
            </h1>
            <p className="font-light text-gray-500 md:justify- md:text- text-sm md:text-3xl">
              {tabContent[activeTab].description}
            </p>
          </div>

          {/* Image */}
          <div className="w-[90%]  md:w-fit felx items-center justify-center content-center text p-0 m-0 my-auto py-10 md:py-32">
            <img
              src={tabContent[activeTab].img}
              alt=""
              className="md:w-[25rem]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile footer icon */}
        <div className="flex md:hidden justify-between pb-5 ">
          {/* Right Side icon  */}
          <div className="w-[%] ">
            <img
              src={UrbenFoundationSectionFooterMobileIcon1}
              alt="Services Header 1"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mx-5">
          {/* Cards Group 1 */}
          <div className="flex items-stretch justify-center w-full text-wrap mt-6 gap-2 md:gap-4 ">
            {tabContent[activeTab].cardsGroup1.map((card, index) => (
              <div
                key={index}
                className={`p-2 md:p-10 rounded-xl shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] text-wrap h-full py-8 text- md:py-14 bg-white font-bold text-xs md:text-xl text-center flex items-center justify-center ${card.width} ${card.textColor}`}
              >
                <h1>{card.title}</h1>
              </div>
            ))}
          </div>

          {/* Cards Group 2 */}
          <div className="flex items-stretch justify-center w-full md:mt-4 mt-2 gap-2 md:gap-4">
            {tabContent[activeTab].cardsGroup2.map((card, index) => (
              <div
                key={index}
                className={`p-2 md:p-10 rounded-xl shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] h-full py-8 text-wrap md:py-14 bg-white font-bold text-xs md:text-xl text-center flex items-center justify-center ${card.width} ${card.textColor}`}
              >
                <h1>{card.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div>
        {/* Section Header Desktop */}
        <div className="hidden md:flex justify-between relative pt-32">
          {/* Left Side with ServicesHeader1 and h2 */}
          <div className="w mt-4 relative">
            <img src={ProjectWaletHeader1} alt="Services Header 1" />
            {/* Absolute positioned h2 */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-lg md:text-5xl font-bold text-tertiary mb-6">
              محفظة الأعمال
            </h1>
          </div>

          {/* Right Side with ServicesHeader2 */}
          <div>
            <img src={ProjectWaletHeader2} alt="Services Header 2" />
          </div>
        </div>

        {/* Section Header Mobile */}
        <div className="md:hidden flex justify-between relative pt-8 md:pt-32">
          {/* Left Side with ServicesHeader1 and h2 */}
          <div className="w mt-4 relative">
            <h1 className="absolute top-1/2 text-nowrap -left- -translate-x-1/4 -translate-y-1/2 text-2xl font-bold text-tertiary mb-6">
              محفظة الأعمال
            </h1>
          </div>

          {/* Right Side with ServicesHeader2 */}
          <div className="w-1/3">
            <img src={ProjectWaletHeader2} alt="Services Header 2" />
          </div>
        </div>

        {/* Grid */}
        <div className="mx-4 flex gap-4 py-5 pb-10 md:pb-20">
          {/* Desktop Grid */}
          <div className="hidden md:flex">
            <MasonaryGrid
              selectedProjectIds={[8, 7, 4]}
              isProjectPage={true}
              limit={3}
              showMoreButton
            />
          </div>
          {/* Mobile Grid */}
          <div className="flex md:hidden">
            <MasonaryGrid
              selectedProjectIds={[8, 7, 4, 3]}
              isProjectPage={true}
              limit={4}
              showMoreButton
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrbenFoundationSection;
