import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import './App.css';
import User from './Components/UseerDetails'
// import Showpage from './Components/Form/info'
import UseerDetails from './Components/UseerDetails';
import Info from './Components/Form/info'

const App = () => {
  const[ShoeUserDetails,SetshowUserdetails]= useState(false);
  const closed=()=>{
    SetshowUserdetails(false);
  }
  const opened=()=>SetshowUserdetails(true);
  return (
    
       <div className='Container'>
     <Sidebar />

  <div className='main'>
       <Navbar Onuser={()=>SetshowUserdetails(true)}/>
  <Dashboard/>  
</div>
 { ShoeUserDetails&&(<div className='modal-overlay'  onClick={closed}>
    <div className='modal' onClick={(e)=>e.stopPropagation()}>
<UseerDetails/>
      <button onClick={closed} className='model-btn'>c</button>


    </div>
  </div>)}
  <Router>
    <Routes>
      {/* <Route path='/info' element={<Info/>}/> */}
    </Routes>
  </Router>
  

  </div>
  

 

  
  )
}

export default App
