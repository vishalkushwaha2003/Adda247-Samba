import React from 'react'
import SocialMediaCard from './SocialMediaCard'

function JoinCommunity() {
  return (
    <div className='w-[80vw]  grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:gap-8 gap-5 grid-cols-1 grid-rows-3 m-auto pt-[20vh] '>
      <SocialMediaCard/>
      <SocialMediaCard/>
      <SocialMediaCard/>
    </div>
  ) 
}
 
export default JoinCommunity
