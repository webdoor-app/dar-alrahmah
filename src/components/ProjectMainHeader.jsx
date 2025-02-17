import React, { Component } from "react";

// Import all images
import projectHeader1 from "../assets/img/ProjectHeader1.svg";
import arrowDownIcon from "../assets/img/ArrowDownIcon.svg";
import plusIcon from "../assets/img/PlusIcon.svg";
import dimond from "../assets/img/Dimond.svg";

export class ProjectMainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isSlidingOut: false, // Controls the slide-out animation
      totalProjects: ["+50k", "+200M", "+15", "+300", "+50", "+5M"], // Example total projects
      beneficiaries: [
        "مستفيد مباشر",
        "    قيمة المشاريع ",
        " عـــام من الخبــــرة",
        "تصميــم",
        "مشروع نوعي",
        "مستفيد غير مباشر ",
      ], // Example beneficiaries
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.slideOutTimeout);
  }

  startAnimation = () => {
    this.interval = setInterval(() => {
      // Trigger slide-out animation
      this.setState({ isSlidingOut: true });

      // Wait for slide-out animation to complete, then update the index
      this.slideOutTimeout = setTimeout(() => {
        this.setState((prevState) => ({
          currentIndex:
            (prevState.currentIndex + 1) % prevState.totalProjects.length,
          isSlidingOut: false, // Reset slide-out state
        }));
      }, 500); // Wait for slide-out animation duration (0.5s)
    }, 5000); // Total cycle time: 4s (stay) + 0.5s (slide-in) + 0.5s (slide-out)
  };

  render() {
    const { currentIndex, isSlidingOut, totalProjects, beneficiaries } =
      this.state;

    return (
      <div>
        <section className="font-camel h-fit bg-accent">
          {/* Section Header */}
          <div className="flex pt-5 md:pt-12 justify-between relative">
            {/* Left Side with ServicesHeader1 and h2 */}
            <div className="w-[30%] mt-4 relative">
              <img
                src={projectHeader1}
                alt="Services Header 1"
                loading="lazy"
              />
              {/* Absolute h2 */}
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-lg md:text-5xl font-bold text-tertiary mb-6">
                أعمالنــــــا
              </h1>
            </div>
          </div>

          {/* Projects section */}
          <div className=" py-5 md:py-20">
            <div className="  rounded-xl md:rounded-bl-3xl h-fit bg-white mx-4 md:mx-8">
              {/* top */}
              <div className=" flex  items-center justify-">
                <div className=" card-container   bg-accent rounded-bl-xl md:rounded-bl-3xl">
                  <div className="card-header">
                    <h1 className="font-extrabold px-8  p-3 md:p-5 md:px-10 text-lg md:text-5xl text-tertiary">
                      دار الرحمة في أرقام
                    </h1>
                  </div>
                </div>

                <div className="flex gap-2 md:gap-4 w- px-2 md:px-7">
                  <img
                    src={arrowDownIcon}
                    alt=""
                    className="w-7 md:w-12 rotate-180 md:rotate-0"
                    loading="lazy"
                  />
                  <img
                    src={plusIcon}
                    alt=""
                    className="w-7 md:w-12"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* bottom */}
              <div className="flex  items- justify-between i px-6 md:px-12 py-8">
                <div className=" w- ">
                  <p className="z-10 text-xs md:text-base font-light text-justify">
                    هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.
                    هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.
                    هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع.
                    هذا نص هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم
                    والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم
                    والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم
                    والمشاريع. هذا نص
                  </p>
                </div>
                <div className=" relative w-[80rem] md:w-[50rem] flex  justify-center">
                  <img
                    src={dimond}
                    alt="icon"
                    className=" z-10"
                    loading="lazy"
                  />

                  {/* Total Project */}
                  <div className=" absolute top-14  z-20 font-sans font-extrabold text-2xl md:text-6xl  ">
                    <div className={isSlidingOut ? "slide-out" : "slide-up"}>
                      {totalProjects[currentIndex]}
                    </div>
                  </div>

                  {/* Beneficiaries */}
                  <div className=" absolute top-24 md:top-32 right-[33%] font-bold text-gray-700  text-xs md:text-xl  z-10  h-">
                    <div
                      className={
                        isSlidingOut ? "slide-out" : "slide-up-delayed"
                      }
                    >
                      {beneficiaries[currentIndex]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectMainHeader;