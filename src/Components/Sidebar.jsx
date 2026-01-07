import React, { useState } from 'react'
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { IoHome } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";



import '../App.css';

const Sidebar = () => {
    const[collapsed,setcollapsed]=useState(false);
   
  return (
    
    <div className={`sidebar ${collapsed?"expand":""}`}>
      
     {!collapsed &&( <div className='button'>
<button id='btn' onClick={()=>{setcollapsed(true)}}><TfiAngleDoubleRight/></button>
      </div>
)}
   { collapsed &&  (<div className='menu'>
        <div className='menu-header'>
            <h3>Menu</h3>
            <button id='close-btn' onClick={()=>setcollapsed(false)}><TfiClose/></button>
        </div >
  <div className='bars'>
          <ul className='ul'>
            <div></div>
            <li><IoHome/></li>
        <li><IoPeopleSharp/></li>
        <li><CiHeart/></li>
        <li><AiOutlineStock/></li>
        <li><GoPencil/></li></ul>
        <ul className='ul'>
            <li><IoExitOutline/></li>
            <li><TfiHeadphoneAlt/></li>
        </ul>
  </div>
      </div>
    
    )}
    </div>
  )
}

export default Sidebar
