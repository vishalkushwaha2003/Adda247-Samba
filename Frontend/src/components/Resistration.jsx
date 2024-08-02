import React from 'react';
import { useTheme } from '../context/ColorContext';
import Button from '@mui/material/Button';

const Registration = () => {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  return (
    <form className=" max-w-fit flex flex-col  gap-4 m-auto sm:p-6 p-4 border border-slate-500 rounded-2xl dark:bg-slate-800 bg-slate-200  ">
      <p className="text-2xl font-semibold tracking-tight  m-auto" style={{color:color}}>
         Registration Form
       
      </p>
      <p className="text-base text-slate-500 dark:text-slate-400 ">Signup now and start learning with our expert faculty.</p>
      <div className="w-[90vw] grid sm:grid-cols-2 sm:grid-rows-6 sm:gap-5 gap-3">
        
        <label className="relative flex-1">
          <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="text" placeholder="First Name" required />
        </label>
        <label className="relative flex-1">
          <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="text" placeholder="Last Name" required />
        </label>
      
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="number" placeholder="Number" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="number" placeholder="Alternate Number" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="number" placeholder="Adhar Number" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="email" placeholder="Email" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="text" placeholder="Father's Name" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="text" placeholder="Father's Occupation" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="text" placeholder="Mother's Name" required />
      </label>
      
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="password" placeholder="Password" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="password" placeholder="Conform Password" required />
      </label>
      <label className="relative">
        <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg" type="password" placeholder="Conform Password" required />
      </label>
      </div>
      {/* <button className="submit border-none outline-none py-2 rounded-lg dark:text-slate-100 font-medium text-slate-950 text-lg transform transition duration-300 ease-in-out  sm:w-96 w-40 m-auto " style={{backgroundColor:color}}>
        Submit
      </button> */}
      <Button variant="outlined" sx={{
          width: '400px',
          margin:'auto',
          marginTop:'20px',
          fontWeight:'bold',
          '@media (max-width: 768px)': { // Medium screens
                width:'300px',
              },
              '@media (max-width: 640px)': { // Small screens
                  width:'200px',
  
              },

          color:color,
          borderColor: color,
          '&:hover': { borderColor: color },
  

      }}>Submit</Button>
      <p className="text-center dark:text-slate-400  text-slate-500">Already have an account?  <a href="#" className=" underline mx-2 font-medium" style={{color:color}}> Signin</a></p>
    </form>
  );
};

export default Registration;
