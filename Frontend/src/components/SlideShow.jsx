import React, { useState, useEffect, useRef } from 'react';
import p from '../assets/myphoto1.png';

const images = [
  p,
  p,
  p,
  p,
  p,
];

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideShowRef = useRef(null);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      setCurrentIndex(0);
      slideShowRef.current.style.transition = 'none';
      slideShowRef.current.style.transform = `translateX(0%)`;
    } else if (currentIndex === -1) {
      setCurrentIndex(images.length - 1);
      slideShowRef.current.style.transition = 'none';
      slideShowRef.current.style.transform = `translateX(-${(images.length - 1) * 100}%)`;
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const interval = setInterval(() => {
        goToNext();
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isTransitioning]);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
      slideShowRef.current.style.transition = 'transform 0.7s ease-in-out';
      slideShowRef.current.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      slideShowRef.current.style.transition = 'transform 0.7s ease-in-out';
      slideShowRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
    }
  };

  useEffect(() => {
    const currentSlideShowRef = slideShowRef.current;
    currentSlideShowRef.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      currentSlideShowRef.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div ref={slideShowRef} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="w-full flex-shrink-0">
            <img src={images[images.length - 1]} className="block w-full" alt={`Slide ${images.length}`} />
          </div>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} className="block w-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <div className="w-full flex-shrink-0">
            <img src={images[0]} className="block w-full" alt={`Slide 1`} />
          </div>
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === (currentIndex % images.length) ? 'bg-white' : 'bg-gray-500'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default SlideShow;
