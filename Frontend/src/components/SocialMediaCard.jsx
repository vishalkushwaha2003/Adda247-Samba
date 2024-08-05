import React from 'react';
import { useTheme } from '../context/ColorContext';
import { Button } from '@mui/material';
import darkBackground from '../assets/chattingBackground.jpg';
import lightBackground from '../assets/chattingBackgroundDark.jpg';

function SocialMediaCard({ icons, name }) {
  const { color, theme } = useTheme();

  const backgroundImage = theme === 'dark' ? lightBackground: darkBackground;

  return (
    <div className="relative h-60 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-200 rounded-lg duration-200 hover:shadow-lg dark:hover:shadow-slate-950 hover:shadow-slate-400 overflow-hidden grid grid-cols-1 grid-rows-12">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }}
      ></div>
      <div className="relative z-3 col-span-1 row-span-6 flex items-center justify-center" style={{ color: color }}>
        {icons}
      </div>
      <div className="relative z-3 col-span-1 row-span-2  m-auto font-bold md:text-lg text-md flex items-center justify-center">
        {name}
      </div>
      <div className="relative z-3 col-span-1 row-span-4  m-auto flex items-center justify-center">
        <Button variant="contained" sx={{fontWeight:'600', backgroundColor:color ,'&:hover':{backgroundColor:color},}}>Connect</Button>
      </div>
    </div>
  );
}

export default SocialMediaCard;
