import React, { useState } from 'react'
import '../App.css'
import img1 from '../assets/Lesson-cropped.svg'
import img2 from '../assets/Cards-cropped.svg'
import img3 from '../assets/FaqChat-cropped.svg'
import img4 from '../assets/find.png'
import img5 from '../assets/ai chatbot.svg'
import img6 from '../assets/practiceTest.svg'
import img7 from '../assets/Study-cropped.svg'

import { BsEmojiHeartEyes } from "react-icons/bs";
import Subdashboard from './DasboardChild/Subdashboard'
import Info from './Form/info'

const Dashboard = () => {
  const[showDashChild,SetshowDashchild]=useState(false);
  const[Showinfo,Setshowinfo]=useState(false);
  const [formData, setFormData] = useState(null);
    return (
    <div className='dashboard'>
         <span className='greets'>
              <strong>  
                  <span style={{
                    fontFamily:'initial',
                     fontSize:'30px'
                              }}>
                                  Welcome,User 
            </span> 
              </strong><br />
            <span style={{
              fontFamily:'cursive',fontSize:'20px'}}
                 >Create Content</span> <span style={{
    fontSize:'40px'
  }}>👋</span></span>
    
    <div className='layout1'>
<div  className='Dashbaord1' style={{ background: 'rgba(128, 0, 128, 0.25)',          
  backdropFilter: 'blur(12px)',                    
  WebkitBackdropFilter: 'blur(12px)',              
  border: '1px solid rgba(200, 100, 255, 0.4)',    
  boxShadow: '0 4px 25px rgba(128, 0, 255, 0.4)',  
  color: 'white',}} onClick={()=>SetshowDashchild(!showDashChild)}>
  <img src={img1} className='img1' />
    <h4 style={{color:'purple',
      fontFamily:'initial'
    }
    } >Lesson Planner</h4>
   
</div>
<div style={{    background: 'rgba(255, 165, 0, 0.25)',          
  backdropFilter: 'blur(12px)',               
  WebkitBackdropFilter: 'blur(12px)',              
  border: '1px solid rgba(255, 200, 100, 0.4)',   
  boxShadow: '0 4px 25px rgba(255, 140, 0, 0.4)',  
  color: 'white',}} onClick={()=>Setshowinfo(!Showinfo)}>
  <img src={img2} className='img1' />
 <h4 style={{color:'orange',
      fontFamily:'initial'
    }
    }>Flash Cards</h4>
  </div>
<div style={{    background: 'rgba(255, 255, 255, 0.1)',  
 backdropFilter: 'blur(10px)',
   WebkitBackdropFilter: 'blur(10px)',
   boxShadow: '0 4px 30px rgba(0, 123, 255, 0.4)'}}>
  <img src={img3} className='img1' />
  <h4 style={{color:'blue',
      fontFamily:'initial'
    }
    }>Q&A</h4></div>
<div style={{  background: 'rgba(0, 0, 50, 0.3)',       
  backdropFilter: 'blur(12px)',           
  WebkitBackdropFilter: 'blur(12px)',
  boxShadow: '0 4px 25px rgba(0, 150, 255, 0.4)' }}>
  <img src={img4} className='img1' />
  <h4 style={{color:'blue',
      fontFamily:'initial'
    }
    }>Ai Content Checker</h4></div>

    </div>
    <div className='layout2'>
      <div style={{    background: 'rgba(255, 255, 255, 0.1)',  
 backdropFilter: 'blur(10px)',
   WebkitBackdropFilter: 'blur(10px)',
   boxShadow: '0 4px 30px rgba(0, 123, 255, 0.4)'}}>
  <img src={img5} className='img1' />
  <h4 style={{color:'blue',
      fontFamily:'initial'
    }
    }>Ai Tutor</h4></div>
      <div style={{  background: 'rgba(0, 100, 0, 0.3)',        
  backdropFilter: 'blur(12px)',            
  WebkitBackdropFilter: 'blur(12px)',
   border: '1px solid rgba(0, 255, 0, 0.4)',   
  boxShadow: '0 4px 25px rgba(0, 255, 100, 0.4)', 
  color: 'white', }}>
  <img src={img6} className='img1' />
  <h4 style={{color:'green',
      fontFamily:'initial'
    }
    }>Practice Tests</h4></div>
      <div style={{ background: 'rgba(139, 0, 0, 0.3)',         
  backdropFilter: 'blur(12px)',              
  WebkitBackdropFilter: 'blur(12px)',         
  border: '1px solid rgba(255, 50, 50, 0.4)', 
  boxShadow: '0 4px 25px rgba(255, 0, 0, 0.4)',
  color: 'white',}}>
  <img src={img7} className='img1' />
  <h4 style={{color:'red',
      fontFamily:'initial'
    }
    }>Study Guide</h4></div>
    </div>
   {showDashChild&&( <div className='miniDash'>
       <Subdashboard setFormData={setFormData} />
       <button onClick={()=>SetshowDashchild(false)}>Back</button>
    </div>)}
   {Showinfo ? (
  formData != null ? (
    <div className='infopage'>
      <Info formData={formData} />
      <button onClick={() => Setshowinfo(false)}>back</button>
    </div>
  ) : (
    <div style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
      ⚠ Please enter data first!
    </div>
  )
) : null}
    
    </div>
  )
}

export default Dashboard
