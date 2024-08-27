import React,{useState} from "react";
import { useTheme } from "../context/ColorContext";
import Button from "@mui/material/Button";

const Registration = () => {
  const { theme, toggleTheme, color, changeColor } = useTheme();
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



  const handleChange =(e)=>{

   
      setFormData({...formData,[e.target.name]: e.target.value})
    

  }

  const formHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("localhost:3000/user/getUser/66ce022d291f1d0c43e94033", {
        method: "POST", // or "GET" depending on your API requirements
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert the form data to a JSON string
      });
  
      if (!response.ok) {
        throw new Error("Failed to send data to the server");
      }
  
      const data = await response.json(); // Parse the JSON response
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  











  return (
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
  );
};

export default Registration;
