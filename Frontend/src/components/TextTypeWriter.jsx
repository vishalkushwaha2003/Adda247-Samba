import React, { useEffect, useState } from 'react';

const TextTypeWriter = ({ text, speed, currentIndex }) => {
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
    <div className="text-lg font-mono">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TextTypeWriter;
