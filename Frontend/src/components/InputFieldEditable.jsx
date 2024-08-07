import React, { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {useTheme} from '../context/ColorContext';

const InputFieldEditable = ({inputType,lableName,inputValue}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(inputValue);
  const { theme,color } = useTheme();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSend=()=>{
    
    setIsEditable(false);
  }

  return (
    <div className="flex flex-col items-start mx-2  ">
      <label className="font-normal text-md text-slate-500  dark:text-slate-400 ">{lableName}</label>
      <div className="flex items-center space-x-1">
        
        <input
          type={inputType}
          value={name}
          onChange={handleInputChange}
          disabled={!isEditable}
          className={`h-12 lg:w-44 xl:w-[18vw] md:w-[28vw] sm:w-[30vw] w-[70vw] border border-slate-200 dark:border-slate-700  rounded-md px-2 py-1 outline-none duration-200 ${
            isEditable ? 'dark:bg-slate-800/50 bg-slate-100 text-slate-800 dark:text-slate-200 font-normal ' : 'dark:bg-slate-600/50 bg-gray-300 font-medium text-slate-800/80 dark:text-slate-200/80 '
          }`}
          style={{borderColor:isEditable ? color:''}}
        />
        <button  className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-400">
          {isEditable?<SendOutlinedIcon onClick={handleSend}  fontSize='small'/>:<EditOutlinedIcon onClick={handleEditClick} fontSize='small'/>}
        </button>
      </div>
    </div>
  );
};

export default InputFieldEditable;
