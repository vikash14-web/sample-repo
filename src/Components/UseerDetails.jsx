import React from 'react'

const UseerDetails = () => {
    
  return (
    <div className='Box'>

      <div className='Barbox-settings'>
        <h5>Settings</h5>

      </div>
      <div className='leftside-box'> 
           <div className='Description'>
              <span className='info'>      
                  <h1 style={{
                    fontSize:'25px',
                    color:'black'
                  }}>Personal Information</h1>
                  <p>Manage your account details and preferences</p>
              </span>
       
               <div className='img'>
                    
               </div>
      </div>
     
      <div className='Formbox'>
         <form action="">
            <div>
                <label >Name: </label> <input type="text" placeholder='enter your name' />
                <label >Email: </label><input type="text"  />
            </div>
            <div>
                <label >Role: </label> <input type="text" placeholder='enter your name' />
                <label >Phone Number: </label><input type="text"  />
           </div>
           <div>
                 <label >Address</label> <input type="text" />
          </div>
        </form>
      </div>  

      </div>
      
      
    
    
    </div>
  )
}

export default UseerDetails
