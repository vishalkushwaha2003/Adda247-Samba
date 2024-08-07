import React from "react";
import { useTheme } from "../context/ColorContext";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

import DoneIcon from "@mui/icons-material/Done";

import photo from "../assets/logo2.png";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InputFieldEditable from './InputFieldEditable'


function StudentProfile() {
  const { color } = useTheme();

  const handleDelete = () => {
    console.log("cliked delete in student profile course");
  };
   
  
   const details ={
      "labelName":['Firse Name', 'Last Name', 'Phone Number','Alt. Phone Number','Adhar Number', 'Email Address',"Father's Name", "Father's Occupation", "Mother's Name", "Mother's Occupation","Address"],
      "inputValue":['VISHAL','KUSHWAHA','8998989989','8998989989','89989845646','vishal@gmail.com','vishal kushwha','student','vishal kushwahat','sutdent','nawabganf ,kappur , lucknow delhi up'],
      "inputType": ["text","text",'number','number','number','email','text','text','text','text','text']
   }


   
  return (
    <div className=" flex lg:flex-row flex-col lg:w-[95vw] lg:gap-5 md:w-[70vw] sm:w-[80vw] w-[95vw] m-auto text-slate-800 dark:text-slate-200 ">
      <div className="lg:sticky  lg:top-28 lg:w-[25vw] w-full mt-10  h-fit bg-slate-200/50 dark:bg-slate-700/50 lg:rounded-lg border-[1px] border-slate-500 duration-200 p-5 flex flex-col items-center gap-2">
        <img src={photo} className="h-20 w-20 rounded-full object-cover shadow-md shadow-slate-950 " />
        <p>VISHAL KUSHWAHA</p>

        <div className="flex flex-col gap-2">
          <div>Enrolled Courses</div>
          <div>
            <Chip
              variant="outlined"
              onDelete={handleDelete}
              deleteIcon={<CloseIcon style={{ color: color }} />}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />

            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
            <Chip
              variant="outlined"
              onDelete={handleDelete}
              deleteIcon={<CloseIcon style={{ color: color }} />}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />

            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
            <Chip
              variant="outlined"
              onDelete={handleDelete}
              deleteIcon={<CloseIcon style={{ color: color }} />}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />

            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
            <Chip
              variant="outlined"
              deleteIcon={<DoneIcon style={{ color: color }} />}
              onDelete={handleDelete}
              label={"VISHAL"}
              sx={{ color: color, fontWeight: "bold", borderColor: color, margin:'3px' }}
            />
          </div>
          <div className="flex justify-evenly  items-center ">
            <Button variant="text">
              
              <DeleteOutlineOutlinedIcon className="hover:cursor-pointer text-slate-500 dark:text-slate-500  duration-200" />
            </Button>
            <Button variant="text">
              
              <AddIcon className="hover:cursor-pointer text-slate-600 dark:text-slate-400 duration-200" />
            </Button>
          </div>
        </div>
      </div>






      <div
        className="lg:w-[50vw] w-full lg:my-8 py-7 px-2 bg-slate-200/50 lg:rounded-lg   dark:bg-slate-700/50 flex  flex-col   border-[1px] duration-200"
        style={{ borderColor: color }}
      >
       <div className="text-center text-xl font-bold lg:h-16 sm:h-14 h-12 ">
        Profile Details
       </div>
        
     <div className="grid sm:grid-cols-2 sm:grid-rows-6 grid-cols-1 grid-rows-12 gap-4 m-auto">
      {details.labelName.map((val,key)=>(
        <InputFieldEditable key={key} lableName={val} inputValue={details.inputValue[key]} inputType={details.inputType[key]}/>
      ))}
     </div>



      </div>





      <div className="lg:sticky lg:top-28  lg:w-[25vw] h-[50vh] w-full bg-slate-200/50 dark:bg-slate-700/50 lg:rounded-lg border-[1px] border-slate-500 duration-200"></div>
    </div>
  );
}

export default StudentProfile;
