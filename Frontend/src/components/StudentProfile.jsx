import React from 'react'
import { useTheme } from '../context/ColorContext'
import Chip from '@mui/material/Chip';

import DoneIcon from '@mui/icons-material/Done';

function StudentProfile() {
  const { color } = useTheme();

 const handleDelete=() => {console.log('cliked delete in student profile course')};



  return (
    <div className=' flex lg:flex-row flex-col lg:w-[95vw] lg:gap-5 md:w-[70vw] sm:w-[80vw] w-[95vw] m-auto text-slate-800 dark:text-slate-200 '>
       <div className='lg:sticky  lg:top-28 lg:w-[25vw]  h-[40vh] bg-slate-200/50 dark:bg-slate-700/50 lg:rounded-lg border-[1px] border-slate-500 duration-200'>
<Chip variant="outlined" onDelete={handleDelete} label={'hiii'} />

<Chip variant="outlined" deleteIcon={<DoneIcon />} onDelete={handleDelete} />

</div>
       <div className='w-[50vw]  my-8 h-[100vh] bg-slate-200 lg:rounded-lg dark:bg-slate-700 flex justify-center  border-[1px] duration-200' style={{borderColor:color}}>jjhjh</div>
       <div className='lg:sticky lg:top-28  lg:w-[25vw] h-[50vh] bg-slate-200/50 dark:bg-slate-700/50 lg:rounded-lg border-[1px] border-slate-500 duration-200'></div>
    </div>
  )
}

export default StudentProfile
