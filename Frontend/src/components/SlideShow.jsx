import React, { useState, useEffect, useRef } from 'react';
import p1 from '../assets/personGo1.png';
import p3 from '../assets/girl1.png'
import p2 from '../assets/sketch.jpg'
import p4 from '../assets/boys1.jpg'

const images = [
  p1,
  p2,
  p3,
  p4,
  
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
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isTransitioning]);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
      slideShowRef.current.style.transition = 'transform 0.7s ease-in-out';
      slideShowRef.current.style.transform = `translateX(-${(newIndex < 0 ? images.length - 1 : newIndex) * 100}%)`;
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      slideShowRef.current.style.transition = 'transform 0.7s ease-in-out';
      slideShowRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
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
    <div className="relative w-full h-[100vh]">
      <div className="relative h-full overflow-hidden rounded-lg">
        <div ref={slideShowRef} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className={`w-full flex-shrink-0 animate__animated  ${currentIndex%4===0?'animate__fadeIn':''}`}>
            
            <img src={images[images.length - 1]} className="block w-full" alt={`Slide ${images.length}`} />
          </div>
          
          {images.map((image, index) => (
            <div key={index} className={`w-full flex-shrink-0 animate__animated ${currentIndex === (index + 1) ? '' : 'animate__fadeOut animate__faster'}`}>
              <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} className={`animate__animated ${currentIndex === (index + 1) ? 'animate__fadeIn animate__slower' : ''}`}>
                {currentIndex === (index + 1) && (
                  <div className={`flex animate__animated ${currentIndex % 2 === 0 ? 'animate__fadeInRight justify-end' : 'animate__fadeInLeft justify-start'} animate__delay-1s`}>
                    <div className='animate__animated animate__fadeInLeft'>1{currentIndex}</div>
                    <div className='animate__animated animate__fadeInLeft'>2</div>
                    <div className='animate__animated animate__fadeInLeft'>3</div>
                    <div className='animate__animated animate__fadeInLeft'>4</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute top-0 left-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        
        onClick={goToPrevious}
        >
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
        className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        onClick={goToNext}
        >
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
