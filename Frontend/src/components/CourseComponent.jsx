import React, { useState } from 'react';
import { useTheme } from '../context/ColorContext';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CourseComponent() {
  const { color } = useTheme();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openReadMore, setOpenReadMore] = useState(false);

  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);
  const handleOpenReadMore = () => setOpenReadMore(true);
  const handleCloseReadMore = () => setOpenReadMore(false);

  return (
    <div className='h-72 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300 border-[2px] rounded-lg grid grid-cols-1 grid-rows-12 shadow-lg dark:hover:shadow-slate-600 hover:shadow-slate-400 duration-200'  style={{ borderColor: color }}>
      <div className='col-span-1 row-span-3  flex justify-center items-center lg:text-5xl font-bold md:text-4xl text-4xl'>SSC CGL</div>
      <div className='col-span-1 row-span-7  relative text-wrap overflow-hidden sm:px-5 px-3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consequatur sapiente atque voluptatum ut repellat quisquam cum est id sint magnam tenetur quas, cupiditate ex quibusdam officia nobis, accusamus rem!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consequatur sapiente atque voluptatum ut repellat quisquam cum est id sint magnam tenetur quas, cupiditate ex quibusdam officia nobis, accusamus rem!
        <IconButton 
          style={{ position: 'absolute', bottom:0, right:10 ,width:'45px',backdropFilter:'blur(3px)', backgroundColor:'rgba(255,255,255,0.1)'}} 
        
          onClick={handleOpenReadMore}>
          <ReadMoreIcon  fontSize='medium' sx={{color:'white'}}/>
        </IconButton>
      </div>
      <div className='col-span-1 row-span-2  flex justify-center items-center'>
        <Button variant="outlined" onClick={handleOpenConfirmation} sx={{color:color,borderColor:color,fontWeight:'500','&:hover':{borderColor:color}}}>Primary</Button>
      </div>
      
      <Modal
        open={openConfirmation}
        onClose={handleCloseConfirmation}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backdropFilter: 'blur(3px)', // Add blur effect
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add background color with transparency
          },
        }}
        disableScrollLock={true}
      >
        <Fade in={openConfirmation}>
          <Box sx={{ ...style, width: 200 }} >
            <h2 id="transition-modal-title">Confirmation</h2>
            <p id="transition-modal-description">Are you sure you want to proceed?</p>
            <Button variant="contained" onClick={handleCloseConfirmation}>Confirm</Button>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={openReadMore}
        onClose={handleCloseReadMore}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backdropFilter: 'blur(3px)', // Add blur effect
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add background color with transparency
          },
        }}
        disableScrollLock={true}
      >
        <Fade in={openReadMore}>
          <Box sx={style} >
            <h2 id="transition-modal-title">More Content</h2>
            <p id="transition-modal-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consequatur sapiente atque voluptatum ut repellat quisquam cum est id sint magnam tenetur quas, cupiditate ex quibusdam officia nobis, accusamus rem!
            </p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CourseComponent;
