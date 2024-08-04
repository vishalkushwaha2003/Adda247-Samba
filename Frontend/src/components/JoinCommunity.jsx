import React from 'react';
import {useTheme} from'../context/ColorContext'

const CustomBackground = () => {
  const { color } = useTheme();
  const containerStyle = {
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(
          circle farthest-side at 0% 50%,
          #282828 23.5%,
          rgba(255, 170, 0, 0) 0
        )
        21px 30px,
      radial-gradient(
          circle farthest-side at 0% 50%,
          #a1000e 24%,
          rgba(240, 166, 17, 0) 0
        )
        19px 30px,
      linear-gradient(
          #282828 14%,
          rgba(240, 166, 17, 0) 0,
          rgba(240, 166, 17, 0) 85%,
          #282828 0
        )
        0 0,
      linear-gradient(
          150deg,
          #282828 24%,
          #a1000e 0,
          #a1000e 26%,
          rgba(240, 166, 17, 0) 0,
          rgba(240, 166, 17, 0) 74%,
          #a1000e 0,
          #a1000e 76%,
          #282828 0
        )
        0 0,
      linear-gradient(
          30deg,
          #282828 24%,
          #a1000e 0,
          #a1000e 26%,
          rgba(240, 166, 17, 0) 0,
          rgba(240, 166, 17, 0) 74%,
          #a1000e 0,
          #a1000e 76%,
          #282828 0
        )
        0 0,
      linear-gradient(90deg, #a1000e 2%, #282828 0, #282828 98%, #a1000e 0%) 0 0
        #282828`,
    backgroundSize: '40px 60px',
  };

  return <div style={containerStyle} >


              <div className='h-screen w-screen'>

              </div>
  </div>;
}

export default CustomBackground;
