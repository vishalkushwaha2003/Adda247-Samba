import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ColorContext';

const TextTypeWriter = ({ text, speed, currentIndex }) => {


  const { color } = useTheme();

  const [displayedText, setDisplayedText] = useState('');
   console.log(displayedText)
  useEffect(() => {
   
    if (currentIndex === 0) {
      let index = 0;
      
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
              
        index++;
        if (index === (text.length-1)) {
          clearInterval(interval);
        }
      }, speed);
      return () => {clearInterval(interval)
        setDisplayedText(''); 
      };
    }
  }, [text, speed, currentIndex]);

  return (
    <div className="sm:text-2xl text-xl font-mono font-bold " style={{color:'black'}}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TextTypeWriter;
