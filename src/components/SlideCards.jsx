import React, { useState, useEffect, useRef } from "react";

// Import images
import slide1 from "../assets/img/slides/slide1.png";
import mobileSlide1 from "../assets/img/slides/mobileSlide1.png";
import slide2 from "../assets/img/slides/slide2.png";
import mobileSlide2 from "../assets/img/slides/mobileSlide2.png";
import slide3 from "../assets/img/slides/slide3.png";
import mobileSlide3 from "../assets/img/slides/mobileSlide3.png";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const isSwiping = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const preventDefault = (e) => {
      if (isMobile) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [isMobile]);

  // Common navigation logic
  const goToNext = () => {
    if (activeIndex < cards.length - 1) setActiveIndex(prev => prev + 1);
  };

  const goToPrev = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  };

  // Mobile-only touch handlers
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;
    touchEndY.current = e.touches[0].clientY;
    e.preventDefault(); // Prevent page scroll
  };

  const handleTouchEnd = () => {
    if (isSwiping.current) {
      if (touchStartY.current - touchEndY.current > 50) goToNext();
      else if (touchEndY.current - touchStartY.current > 50) goToPrev();
    }
    isSwiping.current = false;
  };

  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === cards.length - 1;

  return (
    <div className="relative w-full h-[500px] md:h-fit md:pt-[17rem] pt-20 md:mt-2 overflow-hidden">
      {/* Cards Container  */}
      <div
        className="relative mb-4 w-full h-full  md:h-[30rem] md:flex items-center justify-center"
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {cards.map((card, index) => {
          const position = index - activeIndex;
          const isActive = position === 0;

          return (
            <div
              key={card.id}
              className={`absolute  transition-all duration-500 ease-in-out ${
                isMobile ? 'w-screen' : 'md:w[70rem] lg:w-[75rem] xl:w-[90rem]'
              } ${isActive ? "z-10" : "z-0"}`}
              style={
                isMobile
                  ? { // Mobile styles
                      transform: `translateY(${position * 30}%) scale(${isActive ? 1 : 0.9})`,
                      filter: `blur(${isActive ? 0 : 4}px)`,
                      opacity: isActive ? 1 : 0.7,
                      top: "5%",
                      left: "0%",
                      bottom: "0%",
                      padding: "0px 0px 100px 0px",
                      transformOrigin: "center",
                      marginTop: `${position * -20}px`
                    }
                  : { // Desktop styles 
                      transform: `translate(${position * -80}%, ${isActive ? "-22%" : "14%"}) scale(${isActive ? 1 : 0.7})`,
                      filter: `blur(${isActive ? 0 : 4}px)`,
                      opacity: isActive ? 1 : 0.7
                    }
              }
            >
              <div className="w-full overflow-hidden flex items-center justify-center">
                <img
                  src={card.image}
                  alt={`Slide ${card.id}`}
                  className="w-full h-auto object-cover hidden md:block"
                />
                <img
                  src={card.mobileImage}
                  alt={`Slide ${card.id}`}
                  className="w-full h-auto object-cover md:hidden"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Navigation Arrows  */}
      {!isMobile && (
        <div className="absolute bottom-8 md:-bottom-3 mb-8 md:mb-4 mt-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-40">
          <button
            onClick={goToPrev}
            disabled={isFirstSlide}
            className={`bg-secondary p-2 sm:p-4 rounded-full hover:scale-105 transition-transform ${
              isFirstSlide ? "opacity-50" : ""
            }`}
          >
            <img src={WhiteArrow} alt="Previous" className="size-3 sm:size-5 rotate-180" />
          </button>
          <button
            onClick={goToNext}
            disabled={isLastSlide}
            className={`bg-secondary p-2 sm:p-4 rounded-full hover:scale-110 transition-transform ${
              isLastSlide ? "opacity-50" : ""
            }`}
          >
            <img src={WhiteArrow} alt="Next" className="size-3 sm:size-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default SlideCards;
