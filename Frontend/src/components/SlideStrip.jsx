import React from 'react'
import {useTheme} from '../context/ColorContext'

function SlideStrip({width,content}) {

  const {color} = useTheme();
  return (
    <div className={` px-10 py-5 flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-md font-bold  h-15 w-${width} rounded-full hover:scale-105 hover:cursor-default duration-200 shadow-lg shadow-black`} style={{backgroundColor:color}} >
       {content}
    </div>
  )
}

export default SlideStrip
 