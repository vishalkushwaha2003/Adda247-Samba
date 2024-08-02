import React from 'react';
import { useTheme } from '../context/ColorContext';

const Registration = () => {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  return (
    <form className=" max-w-fit flex flex-col  gap-4 m-auto sm:p-6 p-4 border border-gray-800 rounded-2xl bg-gray-900 text-white">
      <p className="text-2xl font-semibold tracking-tight  m-auto" style={{color:color}}>
         Registration Form
       
      </p>
      <p className="text-base text-gray-400 ">Signup now and start learning with our expert faculty.</p>
      <div className="w-[90vw] grid sm:grid-cols-2 sm:grid-rows-6 sm:gap-5 gap-3">
        
        <label className="relative flex-1">
          <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="text" placeholder="First Name" required />
        </label>
        <label className="relative flex-1">
          <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="text" placeholder="Last Name" required />
        </label>
      
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="number" placeholder="Number" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="number" placeholder="Alternate Number" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="number" placeholder="Adhar Number" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="email" placeholder="Email" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="text" placeholder="Father's Name" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="text" placeholder="Father's Occupation" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="text" placeholder="Mother's Name" required />
      </label>
      
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="password" placeholder="Password" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="password" placeholder="Conform Password" required />
      </label>
      <label className="relative">
        <input className="input bg-gray-800 text-white w-full p-4 pt-2.5 outline-none border border-gray-700 rounded-lg" type="password" placeholder="Conform Password" required />
      </label>
      </div>
      <button className="submit border-none outline-none py-2 rounded-lg text-white text-lg transform transition duration-300 ease-in-out bg-cyan-400 hover:bg-cyan-300 sm:w-96 w-40 m-auto ">
        Submit
      </button>
      <p className="text-center text-gray-400">Already have an account? <a href="#" className="text-cyan-400 hover:underline">Signin</a></p>
    </form>
  );
};

export default Registration;
