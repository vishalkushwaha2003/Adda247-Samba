import React from 'react'
import Button from "@mui/material/Button";
import { useTheme } from '../context/ColorContext';
function CongratulationPage(removeToken) {
    const { color } = useTheme();
    
  return (
    <div className=' flex flex-col items-center justify-center gap-8 min-h-[80vh] text-slate-900 dark:text-slate-200 hover:cursor-default duration-200'>

           <div className='text-5xl font-bold'>Congratulation 🎉🥳</div>
           <div className='text-xl font-medium'>You are the member of <b style={{color:color}}>Adda-247 Samba </b>family</div>
           <div className='bg-slate-200 dark:bg-slate-700 rounded-full px-5 py-2 font-medium hover:cursor-pointer duration-200 '>visit your profile</div>
           <div className='bg-slate-200 dark:bg-slate-700 rounded-full px-5 py-2 font-medium hover:cursor-pointer duration-200'>Explore our courses</div>
    <Button onClick={removeToken} variant='contained' sx={{color:'white',backgroundColor:'red','&:hover':{backgroundColor:'red'}}}>LogOut</Button>
    </div>
  )
}

export default CongratulationPage
