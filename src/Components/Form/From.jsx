import React, { useState } from "react";
import '../../App.css'

function UserForm({ setFormData }) {   // FIXED
  const [formData, setLocalFormData] = useState({
    name: "",
    age: "",
    qualification: "",
    languages: [],
    gender: "",
  });

  const languageOptions = [
    "English","Hindi","Spanish","French","German",
    "Chinese","Japanese","Korean","Arabic","Russian",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...formData, [name]: value });
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;

    let updatedLanguages = checked
      ? [...formData.languages, value]
      : formData.languages.filter((lang) => lang !== value);

    setLocalFormData({ ...formData, languages: updatedLanguages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData); 
       alert("Form submitted");
  
      };

  return (
    <div style={{ padding: "20px" }} className="useriinfo">
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        {/* AGE */}
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        {/* QUALIFICATION */}<label>Qualification:</label>
        <label>
          <input
            type="radio"
            name="qualification"
            value="UG"
            checked={formData.qualification === "UG"}
            onChange={handleChange}
          />
          UG
        </label>

        <label>
          <input
            type="radio"
            name="qualification"
            value="PG"
            checked={formData.qualification === "PG"}
            onChange={handleChange}
          />
          PG
        </label>

        {/* LANGUAGES */}
        <label>Languages:</label>
        {languageOptions.map((lang) => (
          <label key={lang}>
            <input
              type="checkbox"
              value={lang}
              checked={formData.languages.includes(lang)}
              onChange={handleLanguageChange}
            />
            {lang}
          </label>
        ))}

        {/* GENDER */}
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
