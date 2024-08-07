import React from 'react'
import { useTheme } from '../context/ColorContext'
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';

import DoneIcon from '@mui/icons-material/Done';

import photo from '../assets/logo2.png';
import { Button } from '@mui/material';

function StudentProfile() {
  const { color } = useTheme();

 const handleDelete=() => {console.log('cliked delete in student profile course')};



  return (
    <div className=' flex lg:flex-row flex-col lg:w-[95vw] lg:gap-5 md:w-[70vw] sm:w-[80vw] w-[95vw] m-auto text-slate-800 dark:text-slate-200 '>
       <div className='lg:sticky  lg:top-28 lg:w-[25vw]  h-fit bg-slate-200/50 dark:bg-slate-700/50 lg:rounded-lg border-[1px] border-slate-500 duration-200 p-5 flex flex-col items-center gap-2'>
            <img  src={photo}  className='h-20 w-20 rounded-full object-cover '/> 
            <p>VISHAL KUSHWAHA</p>
           
            <div className='flex flex-col gap-2'> 
            <div>Enrolled Courses</div>
            <div>
            <Chip variant="outlined" onDelete={handleDelete} deleteIcon={<CloseIcon style={{color:color}}/>} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}}/>

<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />
<Chip variant="outlined" onDelete={handleDelete} deleteIcon={<CloseIcon style={{color:color}}/>} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}}/>

<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />
<Chip variant="outlined" onDelete={handleDelete} deleteIcon={<CloseIcon style={{color:color}}/>} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}}/>

<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />
<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />
<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />
<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />
<Chip variant="outlined" deleteIcon={<DoneIcon style={{color:color}}/>} onDelete={handleDelete} label={'VISHAL'} sx={{color:color,fontWeight:'bold',borderColor:color}} />

            </div>
            <div className='flex justify-between '>
             
              <Button variant='outlined' >Remove</Button>
              <Button variant='outlined' >Add</Button>

            </div>
            </div>
</div>
       <div className='w-[50vw]  my-8 h-[100vh] bg-slate-200 lg:rounded-lg dark:bg-slate-700 flex justify-center  border-[1px] duration-200' style={{borderColor:color}}>jjhjh</div>
       <div className='lg:sticky lg:top-28  lg:w-[25vw] h-[50vh] bg-slate-200/50 dark:bg-slate-700/50 lg:rounded-lg border-[1px] border-slate-500 duration-200'></div>
    </div>
  )
}

export default StudentProfile
