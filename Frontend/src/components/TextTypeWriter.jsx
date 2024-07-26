import React, { useEffect, useState } from 'react';

const TextTypeWriter = ({ text, speed, currentIndex }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); 
    if (currentIndex === 0) {
      let index = 0;
      
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
              console.log(text[index])
        index++;
        if (index === (text.length-1)) {
          clearInterval(interval);
        }
      }, speed);
      return () => {clearInterval(interval)
        
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
