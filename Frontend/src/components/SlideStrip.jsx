import React from 'react'

function SlideStrip({width,content}) {
  return (
    <div className={`bg-red-600 h-10 w-${width} rounded-full hover:scale-105 duration-300`} >
       {content}
    </div>
  )
}

export default SlideStrip
 