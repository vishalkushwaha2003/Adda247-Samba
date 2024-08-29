import React from 'react'
import Button from "@mui/material/Button";
import { useTheme } from '../context/ColorContext';
function CongratulationPage({removeToken,data,profileFromCongratulations,coursesFromCongratulations}) {
    const { color } = useTheme();
   

   
    
  return (
    <div className=' flex flex-col items-center justify-center gap-8 min-h-[80vh] text-slate-900 dark:text-slate-200 hover:cursor-default duration-200 p-10'>

           <div className='sm:text-5xl text-2xl font-bold'>Congratulation 🎉🥳</div>
           <div className='sm:text-xl text-md font-medium'>You are the member of <b style={{color:color}}>Adda-247 Samba </b>family</div>
           <div className='bg-slate-200 dark:bg-slate-700 rounded-full px-5 py-2 font-medium sm:text-md text-sm hover:cursor-pointer duration-200 ' onClick={()=>profileFromCongratulations("StudentProfile")}>visit your profile</div>
           <div className='bg-slate-200 dark:bg-slate-700 rounded-full px-5 py-2 font-medium sm:text-md text-sm hover:cursor-pointer duration-200' onClick={()=>coursesFromCongratulations("Courses")}>Explore our courses</div>
    <Button onClick={removeToken} variant='contained' sx={{color:'white',backgroundColor:'red','&:hover':{backgroundColor:'red'}}}>LogOut</Button>
    </div>
  )
}

export default CongratulationPage
