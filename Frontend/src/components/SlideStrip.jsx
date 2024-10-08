import React from 'react'
import {useTheme} from '../context/ColorContext'

function SlideStrip({width,content}) {

  const {color} = useTheme();
  return (
    <div className={` lg:px-10 md:px-8 sm:px-6 px-4 lg:py-5 py-3 sm:py-4  flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg xs:text-md text-sm font-bold  md:h-16 sm:h-14 h-12 rounded-full hover:scale-105 hover:cursor-default duration-200 shadow-lg shadow-black`} style={{backgroundColor:color}} >
       {content}
    </div>
  )
}

export default SlideStrip
 