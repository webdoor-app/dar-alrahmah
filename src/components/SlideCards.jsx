import React, { useState } from "react";

// Import images
import slide1 from "../assets/img/slides/slide1.png";
import mobileSlide1 from "../assets/img/slides/mobileSlide1.png";
import slide2 from "../assets/img/slides/slide2.png";
import mobileSlide2 from "../assets/img/slides/mobileSlide2.png";
import slide3 from "../assets/img/slides/slide3.png";
import mobileSlide3 from "../assets/img/slides/mobileSlide3.png";

// Import arrow icon
import WhiteArrow from "../assets/img/WhiteArrow.svg";

const cards = [
  {
    id: 1,
    image: slide1,
    mobileImage: mobileSlide1,
  },
  {
    id: 2,
    image: slide2,
    mobileImage: mobileSlide2,
  },
  {
    id: 3,
    image: slide3,
    mobileImage: mobileSlide3,
  },
];

function SlideCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Check if the current slide is the first or last
  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === cards.length - 1;

  return (
    <div className="relative w-full h-[500px] md:h-fit md:pt-[17rem] pt-20 md:mt-2  overflow-hidden  ">
      {/* Cards Container */}
      <div className="relative mb-4 w-full h-full md:h-[30rem] md:flex items-center justify-center">
        {cards.map((card, index) => {
          const position = index - activeIndex;
          const isActive = position === 0;

          return (
            <div
              key={card.id}
              className={`absolute md:w[70rem] lg:w-[75rem] xl:w-[90rem] w-[50rem]   transition-all duration-500 ease-in-out ${
                isActive ? "z-10" : "z-0"
              }`}
              style={{
                transform: `translate(${position * -80}%, ${
                  isActive ? "-22%" : "14%"
                }) scale(${isActive ? 1 : 0.7})`,
                filter: `blur(${isActive ? 0 : 4}px)`,
                opacity: isActive ? 1 : 0.7,
              }}
            >
              <div className="bg- w-full overflow- flex items-center ">
                {/* Responsive Image Rendering */}
                <img
                  src={card.image} // Default image for larger screens
                  alt={`Slide ${card.id}`}
                  className="w-full h-auto object-cover hidden md:block" // Hide on small screens
                />
                <img
                  src={card.mobileImage} // Mobile image for small screens
                  alt={`Slide ${card.id}`}
                  className="w-screen h-auto  flex justify-center items-center text-center object-cover md:hidden" // Hide on larger screens
                />
                {/* <div className="p-6 border border-red-600">
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.content}</p>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 md:-bottom-3  mb-8 md:mb-4 mt-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-40">
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          disabled={isFirstSlide} // Disable if it's the first slide
          className={`bg-secondary p-2 sm:p-4 rounded-full  hover:scale-105 transition-transform ${
            isFirstSlide ? "opacity-50" : ""
          }`}
        >
          <img
            src={WhiteArrow}
            alt="Previous"
            className="size-3 sm:size-5 rotate-180" // Smaller size on small screens
          />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          disabled={isLastSlide} // Disable if it's the last slide
          className={`bg-secondary p-2 sm:p-4 rounded-full  hover:scale-110 transition-transform ${
            isLastSlide ? "opacity-50" : ""
          }`}
        >
          <img
            src={WhiteArrow}
            alt="Next"
            className="size-3 sm:size-5 rotate-" // Smaller size on small screens
          />
        </button>
      </div>
    </div>
  );
}

export default SlideCards;
