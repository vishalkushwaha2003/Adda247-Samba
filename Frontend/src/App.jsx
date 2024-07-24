import React from 'react'
import SlideShow from './components/SlideShow'
import SidebarMenu from './components/SidebarMenu'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-red-700'>
      <Navbar/>
      <SlideShow/>
      <SidebarMenu/>
    </div>
  )
}

export default App
