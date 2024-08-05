import React from 'react'
import SocialMediaCard from './SocialMediaCard'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function JoinCommunity() {
  const name=['WhatsApp', 'Instagram', 'Facebook'];
  return (
    <div className='w-[80vw]  grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:gap-8 gap-5 grid-cols-1 grid-rows-3 m-auto md:py-[20vh] sm:py-[10vh] py-[5vh] '>
      <SocialMediaCard icons={<WhatsAppIcon sx={{
             width:'100%',
             height:'100%',
             

      }}/>} name={name[0]} />
      <SocialMediaCard icons={<InstagramIcon  sx={{
             width:'100%',
             height:'100%',
             

      }}/>} name={name[1]}/>
      <SocialMediaCard icons={<FacebookIcon   sx={{
             width:'100%',
             height:'100%',
             

      }}/>} name={name[2]} />
    </div>
  ) 
}
 
export default JoinCommunity
