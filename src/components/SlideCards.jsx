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
    // title: 'Card 1',
    // content: 'This is the content of card 1.',
    image: slide1,
    mobileImage: mobileSlide1,
  },
  {
    id: 2,
    // title: 'Card 2',
    // content: 'This is the content of card 2.',
    image: slide2,
    mobileImage: mobileSlide2,
  },
  {
    id: 3,
    // title: 'Card 3',
    // content: 'This is the content of card 3.',
    image: slide3,
    mobileImage: mobileSlide3,
  },
];

function SlideCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Cards Container */}
      <div className="relative mb-4 w-full h-full md:flex items-center justify-center">
        {cards.map((card, index) => {
          const position = index - activeIndex;
          const isActive = position === 0;

          return (
            <div
              key={card.id}
              className={`absolute md:w-[60rem] w-[50rem]  transition-all duration-500 ease-in-out ${
                isActive ? "z-10" : "z-0"
              }`}
              style={{
                transform: `translateX(${position * 40}%) scale(${
                  isActive ? 1 : 0.85
                })`,
                filter: `blur(${isActive ? 0 : 4}px)`,
                opacity: isActive ? 1 : 0.7,
              }}
            >
              <div className="bg- w-full  overflow-">
                {/* Responsive Image Rendering */}
                <img
                  src={card.image} // Default image for larger screens
                  alt={`Slide ${card.id}`}
                  className="w-full h-auto object-cover hidden md:block" // Hide on small screens
                />
                <img
                  src={card.mobileImage} // Mobile image for small screens
                  alt={`Slide ${card.id}`}
                  className="w-1/2 h-auto object-cover md:hidden" // Hide on larger screens
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 mb-8 md:mb-4 mt-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {/* Next Button */}
        <button
          onClick={goToNext}
          className="bg-secondary p-2 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={WhiteArrow}
            alt="Next"
            className="size-3 sm:size-5 rotate-180" // Smaller size on small screens
          />
        </button>

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="bg-secondary p-2 sm:p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={WhiteArrow}
            alt="Previous"
            className="size-3 sm:size-5" // Smaller size on small screens
          />
        </button>
      </div>

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mp-3 flex gap-4 z-20">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`md:size-2 size-1 rounded-full transition-all ${
              index === activeIndex ? "bg-primary scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default SlideCards;