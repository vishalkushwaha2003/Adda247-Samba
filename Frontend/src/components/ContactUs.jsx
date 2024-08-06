import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import {useTheme} from '../context/ColorContext';
import { Button } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


function ContactUs() {

  const { theme, color } = useTheme();
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');
  const [clickNumber,setClickNumber] = useState('')

  const copyToClipboard = (text) => {
    setClickNumber(text);
    navigator.clipboard.writeText(text)
      .then(() => {
        setTooltipText('Copied!');
        setTimeout(() => {
          setTooltipText('Copy to clipboard');
        }, 1000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className=' w-[90vw] m-auto gap-5 md:py-20 sm:py-10  py-5 overflow-hidden grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2'>
      <div className='col-span-1 row-span-1 bg-slate-200 dark:bg-slate-700 rounded-lg px-5 py-10 flex flex-col gap-5 text-slate-900 dark:text-slate-300 duration-200'>
        <div className='flex flex-col items-center justify-center'>
          <LocationOnIcon fontSize='large' sx={{color:color}}/> <p className=' text-xl font-bold'>MDR CITY NEAR BHARGAVA DEGREE COLLEGE, NATIONAL HIGHWAY SAMBA</p>
        </div>
        <div className='flex  gap-5 xs:flex-col lg:text-lg sm:text-md text-sm'>
          <div className='flex items-center  '>
            <LocalPhoneIcon fontSize='small' /> 7889570998
            <Tooltip title={tooltipText} onClose={() => setTooltipText('Copy to clipboard')} placement='top'>
              {tooltipText==='Copied!'&& clickNumber==='7889570998'?<CheckBoxOutlinedIcon fontSize='small' className='ml-2 cursor-pointer'  sx={{color:clickNumber==='7889570998'? color:''}}/>:<ContentCopyIcon fontSize='small' className='ml-2 cursor-pointer' onClick={() => copyToClipboard('7889570998')} />}
            </Tooltip>
          </div>
          <div className='flex items-center '>
            <LocalPhoneIcon fontSize='small'/> 9469268729
            <Tooltip title={tooltipText} onClose={() => setTooltipText('Copy to clipboard')} placement='top'>
            {tooltipText==='Copied!'&& clickNumber==='9469268729'?<CheckBoxOutlinedIcon fontSize='small' className='ml-2 cursor-pointer'  sx={{color:clickNumber==='9469268729'? color:''}}/>:<ContentCopyIcon fontSize='small' className='ml-2 cursor-pointer' onClick={() => copyToClipboard('9469268729')} />}

            </Tooltip>
          </div>
        </div>
        <div className='flex items-center ' >
          <WhatsAppIcon /> 7889570998
          
        </div>
        <div className='flex items-center'>
          <EmailOutlinedIcon /> samba@gmail.com
        </div>
      </div>
      <div className='col-span-1 row-span-1 bg-slate-200  dark:bg-slate-700 rounded-lg duration-200'>

        
        <form className="  flex flex-col  gap-4 p-5   ">
      <p className="md:text-2xl sm:text-xl text-lg font-semibold tracking-tight  m-auto" style={{color:color}}>
         Any Question 🧐?
       
      </p>
      
      <div className=" flex flex-col gap-3">
        
        <label className="relative flex-1">
        <textarea
  className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 h-40 md:font-medium font-normal text-slate-950 w-full sm:px-4 sm:py-2 px-3 py-2  outline-none border border-slate-500 rounded-lg duration-200"
  placeholder="Type your message ..."
  required
 
   
/>

        </label>
        <label className="relative flex-1">
          <input className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 md:font-medium font-normal text-slate-950 w-full sm:px-4 sm:py-2 px-3 py-2 outline-none border border-slate-500 rounded-lg duration-200" type="number" placeholder="Phone number" required />
        </label>
      
     
     
      
      
     
      </div>
      {/* <button className="submit border-none outline-none py-2 rounded-lg dark:text-slate-100 font-medium text-slate-950 text-lg transform transition duration-300 ease-in-out  sm:w-96 w-40 m-auto " style={{backgroundColor:color}}>
        Submit
      </button> */}
      <Button variant="outlined"  sx={{
        
          margin:'auto',
          height:'30px',
          width:'50px',
          fontSize:'12px',
          fontWeight:'bold',
          
          

          color:color,
          borderColor: color,
          '&:hover': { borderColor: color },
  

      }}>Submit</Button>
      <p className="text-center dark:text-slate-400  text-slate-500 md:text-md text-sm">Soon our team will contact you with solution</p>
    </form>
          
        
       
      </div>
    </div>
  );
}

export default ContactUs;
