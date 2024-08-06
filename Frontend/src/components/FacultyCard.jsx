import React from 'react';
import photo from '../assets/boys1.jpg';
import SchoolIcon from '@mui/icons-material/School';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { useTheme } from '../context/ColorContext';

function FacultyCard() {
    const { color } = useTheme();

  return (
    <div className='lg:w-[60vw] sm:w-[80vw] w-[90vw] m-auto bg-slate-200/80 dark:bg-slate-700 rounded-lg justify-start items-start sm:p-8 p-5 duration-200'>
      <img 
        src='' 
        className='h-60 w-60 object-cover sm:float-left float-none sm:mr-5   mx-auto sm:mb-2 mb-6 rounded-lg shadow-lg shadow-slate-950' 
        alt="Faculty Photo" 
      />
      <p className='text-slate-800 dark:text-slate-300 duration-200 font-medium md:text-lg text-md'>
       <b className='flex items-center gap-1' style={{color:color}}> <PermIdentityOutlinedIcon fontSize='small'/> Vishal</b> 
       Educator with 25 years of inspiring teaching experience. <br />
      <GradeOutlinedIcon fontSize='small' sx={{color:color}}/>&nbsp; As an expert in mathematics teaching, I bring a wealth of knowledge and a proven ability to make complex concepts accessible, fostering a deep understanding and love for math in my students. <br />
       <SchoolIcon fontSize='small' sx={{color:color}}/> &nbsp;My educational journey is a testament to dedication and a passion for learning. I began my academic career at Navodaya Vidyalaya, where I completed both my 10th and 12th grades under the CBSE curriculum. This esteemed institution provided me with a strong foundation and nurtured my love for knowledge.
       Following my school years, I pursued higher education at HBTU Kanpur, one of the premier engineering colleges in India. I graduated with a degree in Information Technology, a field that captivated my interest and allowed me to develop a robust understanding of technology and its applications. This educational background has been instrumental in shaping my professional path.
      </p>
    </div>
  );
}

export default FacultyCard;
