import React from 'react';


const Info = ({formData}) => {
 

  return (
    <div>
      <h1>Name: {formData.name}!</h1>
      <h1> Age: {formData.age}</h1>
      <h1>Gender: {formData.gender}</h1>
      <h1> Qualification: {formData.qualification}</h1>
<h1>Languages:[
  {formData.languages.map((lang, index) => (
    <span key={index}>{lang}, </span>
  ))}
]</h1>    
    </div>
  );
}

export default Info;