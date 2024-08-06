import React, { useEffect, useState } from 'react';
import SlideShow from './components/SlideShow';
import SidebarMenu from './components/SidebarMenu';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Resistration from './components/Resistration';
import About from './components/About';
import ContactUs from './components/ContactUs';
import StudentProfile from './components/StudentProfile';
import JoinCommunity from './components/JoinCommunity';

function App() {
  const [currentComponent, setCurrentComponent] = useState('SlideShow');
  const [courseNavigationClick,setCourseNavigationClick] = useState('');
  const [counterEqual,setCounterEqual]=useState(false);
  

  const navigation = (value) => {
    setCurrentComponent(value);

  };


 




  const courseNavigation = (value) => {
     
 

    setCourseNavigationClick(value);
    
 
    setCounterEqual((current)=>!current);
   
   
};

const setEmptyValue=()=>{


  setCourseNavigationClick('');
}



 
  




  const renderComponent = () => {
    switch (currentComponent) {
      case 'SlideShow':
        return <SlideShow />;
      case 'Courses':  
        return <Courses courseNavigationClick={courseNavigationClick} counterEqual={counterEqual} setEmptyValue={setEmptyValue}/> ;
      case 'Faculty':  
        return <Faculty/> ;  
      case 'Resistration':  
        return<Resistration/> ;
      case 'About':  
        return<About/> ; 
      case 'ContactUs':  
        return <ContactUs/> ;
      case 'StudentProfile':  
        return<StudentProfile/> ;
        
      case 'JoinCommunity':  
        return<JoinCommunity/> ; 
      
      default:
        return <SlideShow />;
    }
  };

  return (
    <div className='min-h-[100vh] dark:bg-slate-800 bg-slate-50 duration-200 '>
      <Navbar navigation={navigation} courseNavigation={courseNavigation} currentComponent={currentComponent} />
      <div className='md:mt-20 mt-16'>
      {renderComponent()}
      </div>
    </div>
  );
}

export default App;
