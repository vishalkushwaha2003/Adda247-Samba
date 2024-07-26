import React, { useEffect, useState } from 'react';

const TextTypeWriter = ({ text, speed = 150, currentIndex }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (currentIndex === 1) {
      let index = 0;
      setDisplayedText(''); 
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);

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
