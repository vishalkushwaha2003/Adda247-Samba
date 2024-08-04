import React from 'react';
import { useTheme } from '../context/ColorContext'; // Ensure you import the useTheme hook

function JoinCommunity() {
  const { color } = useTheme(); // Destructure color from the context

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `repeating-radial-gradient(rgb(51 65 85) 88%, ${color} 90%)`,
        backgroundSize: '50px 50px',
      }}
    >
      hii
    </div>
  );
}

export default JoinCommunity;
