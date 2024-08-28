import React,{useState} from "react";
import { useTheme } from "../context/ColorContext";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const Registration = () => {
  const { theme, toggleTheme, color, changeColor } = useTheme();
  const [isTicked, setIsTicked] = useState(false);
  const [fileUploadError,setFileUploadError]=useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [formData,setFormData]=useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    adharNumber: "",
    email: "",
    fathersName: "",
    fathersOccupation: "",
    mothersName: "",
    mothersOccupation: "",
    password: "",
    confirmPassword: ""
  });


  const previewLabel =[
    "First Name",
    "Last Name",
    "Phone Number",
    "Alternate PhoneNumber",
    "Adhar Number",
    "Email",
    "Father's Name",
    "Father's Occupation",
    "Mother's Name",
    "Mother's Occupation",
    "Password",
    "Confirm Password"
  ]
  
  
  const formFields = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      required: true,
    },
    {
      id: 4,
      name: "alternatePhoneNumber",
      type: "number",
      placeholder: "Alternate Phone Number",
      required: false,
    },
    {
      id: 5,
      name: "adharNumber",
      type: "number",
      placeholder: "Adhar Number",
      required: true,
    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: 7,
      name: "fathersName",
      type: "text",
      placeholder: "Father's Name",
      required: true,
    },
    {
      id: 8,
      name: "fathersOccupation",
      type: "text",
      placeholder: "Father's Occupation",
      required: false,
    },
    {
      id: 9,
      name: "mothersName",
      type: "text",
      placeholder: "Mother's Name",
      required: true,
    },
    {
      id: 10,
      name: "mothersOccupation",
      type: "text",
      placeholder: "Mother's Occupation",
      required: false,
    },
    {
      id: 11,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      id: 12,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      required: true,
    },
  ];



  const handleTicked = () => {
    setIsTicked(!isTicked);
  };

  const handleChange =(e)=>{

   
      setFormData({...formData,[e.target.name]: e.target.value})
    

  }

  const formHandler = (e) => {
    e.preventDefault();
    setOpenPreview(true);

  
   
  };
  



  const handlePreviewClick = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };


 const sendDataToBackendHandler =async()=>{

  try {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), 
    });

    if (!response.ok) {
      throw new Error("Failed to send data to the server");
    }

    const data = await response.json(); 
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error:", error);
  }
 }




  return (
    <div>
    <form
      className="max-w-fit flex flex-col gap-4 m-auto  sm:p-6 p-4 border border-slate-500 rounded-2xl dark:bg-slate-800 bg-slate-200"
      onSubmit={formHandler}
    >
      <p
        className="text-2xl font-semibold tracking-tight m-auto"
        style={{ color: color }}
      >
        Registration Form
      </p>
      <p className="text-base text-slate-500 dark:text-slate-400">
        Signup now and start learning with our expert faculty.
      </p>
      <div className="w-[90vw] grid sm:grid-cols-2 sm:grid-rows-6 sm:gap-5 gap-3">
        {formFields.map((data, key) => {
          const field = data;

          return (
            <label id={key} className="relative">
              <input
                id={field.id}
                name={field.name}
                className="input dark:bg-slate-700 bg-slate-300 dark:text-slate-100 text-slate-950 w-full sm:px-4 sm:py-3 px-3 py-2 outline-none border border-slate-500 rounded-lg"
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                value={formData[field.name]}
                
              />
            </label>
          );
        })}
      </div>

      <Button
        variant="outlined"
        sx={{
          width: "400px",
          margin: "auto",
          marginTop: "20px",
          fontWeight: "bold",
          "@media (max-width: 768px)": { width: "300px" }, // Medium screens
          "@media (max-width: 640px)": { width: "200px" }, // Small screens
          color: color,
          borderColor: color,
          "&:hover": { borderColor: color },
        }}
        type="submit"
      >
        Submit
      </Button>
      <p className="text-center dark:text-slate-400 text-slate-500">
        Already have an account?{" "}
        <a
          href="#"
          className="underline mx-2 font-medium"
          style={{ color: color }}
        >
          Signin
        </a>
      </p>
    </form>
    <Modal
        open={openPreview}
        onClose={handleClosePreview}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backdropFilter: "blur(3px)", // Add blur effect
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add background color with transparency
          },
        }}
        disableScrollLock={true}
      >
        <Fade in={openPreview}>
          <Box className="absolute h-[100vh] w-[100vw] overflow-y-scroll md:py-20 py-16 ">
            <div
              className="lg:w-[80vw] w-[90vw] m-auto bg-slate-100/80 dark:bg-slate-800/80 text-slate-900 dark:text-slate-200 border-[1px] rounded-lg py-8 lg:px-12 sm:px-8 msm:px-4 shadow-lg dark:hover:shadow-slate-600 hover:shadow-slate-400 duration-200 relative "
              style={{ borderColor: color }}
            >
              <div className="absolute top-1 right-1 hover:cursor-pointer">
                <Button sx={{ color: "red" }} onClick={handleClosePreview}>
                  <CloseIcon />
                </Button>
              </div>

              <div className="lg:text-3xl md:text-2xl text-xl font-bold text-center ">
                Form Preview
              </div>
              <div className="grid grid-cols-1 py-8  md:grid-cols-2 gap-5  ">
                {Object.entries(formData).map(([key, value], id) => {
                  if (key !== "studentPhoto")
                    return (
                      <div
                        key={id}
                        className="col-span-1  text-wrap break-words  "
                      >
                        <label className="text-md px-1 font-normal text-slate-700 dark:text-slate-300 duration-200 text-nowrap">
                          {previewLabel[id]}
                        </label>
                        :
                        <span className="px-1  transition-all text-lg font-medium text-slate-700 dark:text-slate-300 duration-200 ">
                          {value}
                        </span>
                      </div>
                    );
                })}

                {/* {formData.studentPhoto && (
                  <div className="col-span-1 ">
                    <h3 className="textmd font-semibold">Student Photo</h3>
                    <img
                      src={URL.createObjectURL(formData.studentPhoto)}
                      alt="Student Photo"
                      className="lg:h-96 md:h-80 sm:h-72 msm:h-60 object-contain rounded-lg shadow-md shadow-slate-950/50"
                    />
                  </div>
                )} */}
              </div>

              <div className="flex gap-1">
                <div className="hover:cursor-pointer">
                  {" "}
                  {isTicked ? (
                    <CheckBoxOutlinedIcon
                      style={{ color: color }}
                      onClick={handleTicked}
                    />
                  ) : (
                    <CheckBoxOutlineBlankOutlinedIcon onClick={handleTicked} />
                  )}
                </div>
                <p>Ensure that carefuly preview All field</p>
              </div>
              <div className=" w-full flex justify-evenly  items-center h-20">
                <Button
                  variant="outlined"
                  sx={{
                    color: "red",
                    borderColor: "red",
                    "&:hover": { borderColor: "red" },
                  }}
                  onClick={handleClosePreview}
                >
                  Cancel
                </Button>{" "}
                {isTicked ? (
                  <Button variant="contained" onClick={sendDataToBackendHandler}>submit</Button>
                ) : (
                  <Button variant="contained" disabled>
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Registration;
