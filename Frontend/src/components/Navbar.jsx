import React, { useState } from "react";
import { useTheme } from "../context/ColorContext";
import DarkLightToggleButton from "./DarkLightToggleButton";
import Button from "@mui/material/Button";
import logo from "../assets/logo2.png";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, color, changeColor } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 dark:bg-slate-900 duration-200 h-20 fixed w-full z-10 top-0">
      <div className=" w-[90%] h-full m-auto flex justify-between items-center">
        
        <img src={logo} alt="Logo" className="object-fill h-16 w-32 " />

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
            }}
          >
            Home
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
            }}
          >
            Courses
          </Button>
          
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
            }}
          >
            Faculty
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
            }}
          >
            Resistration
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
            }}
          >
            About
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: color,
              borderColor: color,
              "&:hover": { borderColor: color },
              fontWeight: 'bold',
            }}
          >
            Contact
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
          <DarkLightToggleButton />
          <input
            type="color"
            id="colorPicker"
            onChange={(e) => changeColor(e.target.value)}
            value={color}
            className="h-7 w-7  cursor-pointer rounded-full bg-transparent"
          />
          
          </div>
  <SidebarMenu/>
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
