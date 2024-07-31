import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from "../context/ColorContext";

import p2 from '../assets/lamp.png';
import p3 from '../assets/girl1.jpg';
import p1 from '../assets/personGo.png';
import p4 from '../assets/boys1.jpg';
import SlideStrip from './SlideStrip';
import TextTypeWriter from './TextTypeWriter'




function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideShowRef = useRef(null);
  const {color}=useTheme();
  const content=[['Expert Faculty','High Success Rate','Supportive Environment','Comprehensive Study Material'],['Peer Learning','Regular Assessments','Innovative Teaching Methods','Personalized Learning Experience'],['Library space','Progress Tracking','Innovative Teaching Methods','Comprehensive Course Offerings']]
  const images = [
    p1,
    p2,
    p3,
    p4,
  ];


 
 









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
      }, 8000); // Change slide every 5 seconds
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
    <div className="w-full md:mt-20 mt-16 h-[100vh] ">
      <div className="relative h-full bg-slate-500 dark:bg-slate-800 duration-200 overflow-hidden rounded-lg">
        <div
          ref={slideShowRef}
          className="flex  transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div
            className={`w-full flex-shrink-0 bg-slate-500 dark:bg-slate-800 animate__animated ${
              currentIndex % 4 === 0 ? "animate__fadeIn animate__slower" : "animate__fadeOut animate__fast"
            }`}
          >
            <div className="relative w-[100vw] mx-auto h-[100vh]">
              <div className="absolute h-full flex bg-transparent justify-center items-center w-full z-10">
              
              
              <div className="flex items-center justify-center  bg-transparent">
       <TextTypeWriter text="Hello, welcome to my website" speed={100} currentIndex={currentIndex}/>
    </div>



              </div>
              <img
                src={images[images.length - 1]}
                className="vintage vignette absolute top-0 left-0 w-full h-full object-cover"
                alt={`Slide ${images.length}`}
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 120%)",
                }}
              />
            </div>
          </div>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full flex-shrink-0 bg-slate-500 dark:bg-slate-800 duration-200 animate__animated ${
                currentIndex === index + 1
                  ? ""
                  : "animate__fadeOut animate__faster"
              }`}
            >
              {currentIndex === index + 1 && index < 3 && (
                <div
                  className={`absolute lg:px-20 md:px-16 sm:px-12 px-8 xl:pt-20 lg:pt-28 md:pt-36 pt-40  w-full z-10 flex flex-col gap-5 animate__animated ${
                    currentIndex % 2 === 0
                      ? "animate__fadeInRight sm:items-end items-center "
                      : "animate__fadeInLeft sm:items-start items-center "
                  } animate__delay-1s`}
                >
                  <div className="animate__animated animate__fadeInLeft animate__slower">
                    <SlideStrip content={content[index][0]} />
                  </div>
                  <div className="animate__animated animate__fadeInLeft animate__slower">
                    <SlideStrip content={content[index][1]} />
                  </div>
                  <div className="animate__animated animate__fadeInLeft animate__slower">
                    <SlideStrip content={content[index][2]} />
                  </div>
                  <div className="animate__animated animate__fadeInLeft animate__slower">
                    <SlideStrip content={content[index][3]} />
                  </div>
                  {console.log(index)}
                </div>
              )}
              <div className="relative w-[100vw] bg-transparent mx-auto h-[100vh]">
                <img
                  src={image}
                  className={`vintage vignette absolute top-0 left-0 w-full h-full object-cover  animate__animated ${
                    currentIndex === index + 1
                      ? "animate__fadeIn animate__slower"
                      : ""
                  }`}
                  alt={`Slide ${index + 1}`}
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 flex items-center justify-center h-full px-4  group focus:outline-none"
      >
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-500/30 dark:bg-slate-500/30 group-hover:bg-slate-500/40 dark:group-hover:bg-slate-500/40 group-focus:ring-2 group-focus:ring-slate-500/50 dark:group-focus:ring-slate-500/50  group-focus:outline-none"
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
        className="absolute top-0 right-0 flex items-center justify-center h-full px-4 group focus:outline-none "
      >
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-500/30 dark:bg-slate-500/30 group-hover:bg-slate-500/40 dark:group-hover:bg-slate-500/40 group-focus:ring-2 group-focus:ring-slate-500/50 dark:group-focus:ring-slate-500/50 group-focus:outline-none"
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
