import React from 'react'
import { useTheme } from '../context/ColorContext'
import Button from '@mui/material/Button';

function CourseComponent() {

    const { color } = useTheme()

  return (
    <div className='h-72  bg-slate-500 border-2 rounded-lg   grid grid-cols-1 grid-rows-6' style={{borderColor:color}}>
        <div className='col-span-1 row-span-2 bg-slate-500 flex justify-center items-center lg:text-5xl font-bold md:text-4xl text-4xl  '>SSC CGL</div>
        <div className='col-span-1 row-span-3 bg-red-700'>para</div>
        <div className='col-span-1 row-span-1 bg-yellow-500 flex justify-center items-center'><Button variant="outlined">Primary</Button>
        </div>
    </div>
  )
}

export default CourseComponent
