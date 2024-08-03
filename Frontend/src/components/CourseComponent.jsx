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
    <div className='h-72 bg-slate-500 border-2 rounded-lg grid grid-cols-1 grid-rows-12' style={{ borderColor: color }}>
      <div className='col-span-1 row-span-3 bg-slate-500 flex justify-center items-center lg:text-5xl font-bold md:text-4xl text-4xl'>SSC CGL</div>
      <div className='col-span-1 row-span-7 bg-red-700 relative text-wrap overflow-hidden'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consequatur sapiente atque voluptatum ut repellat quisquam cum est id sint magnam tenetur quas, cupiditate ex quibusdam officia nobis, accusamus rem!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consequatur sapiente atque voluptatum ut repellat quisquam cum est id sint magnam tenetur quas, cupiditate ex quibusdam officia nobis, accusamus rem!
        <IconButton 
          style={{ position: 'absolute', bottom: 5, right: 5,width:'50px',backdropFilter:'10px', backgroundColor: 'rgba(0,0,0,0.2'}} 
        
          onClick={handleOpenReadMore}>
          <ReadMoreIcon  fontSize='medium' sx={{color:'white'}}/>
        </IconButton>
      </div>
      <div className='col-span-1 row-span-2 bg-yellow-500 flex justify-center items-center'>
        <Button variant="outlined" onClick={handleOpenConfirmation}>Primary</Button>
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
