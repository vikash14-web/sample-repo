import React from 'react';
import From from '../Form/From';

const Subdashboard = ({ setFormData }) => {   // FIXED
  return (
    <div className='dashchild'>
      <h1>welcome mate</h1>
      <From setFormData={setFormData} />      {/* FIXED */}
    </div>
  );
};

export default Subdashboard;
