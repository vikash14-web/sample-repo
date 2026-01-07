import React, { useState, useEffect } from 'react';
import '../App.css'
import { VscAccount } from "react-icons/vsc";

const Navbar = ({Onuser}) => {
    
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
 
  const date = currentTime.toLocaleDateString();  
  const time = currentTime.toLocaleTimeString();

  return (
    <div className='navbar'>
      <div className='Dt'>
        <h4 style={{fontFamily:'monospace',fontSize:'15px'}}>Date: {date}</h4>
        <h4 style={{fontFamily:'monospace',fontSize:'15px'}}>Time: {time}</h4>
      </div>
      <div className='Icon'>
       <button onClick={Onuser}> <VscAccount/></button>
      </div>
    </div>
  );
}

export default Navbar;
