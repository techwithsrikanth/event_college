import React, { useState } from 'react';
import './organize.css'; // Your CSS file for Organize component
import { Link } from 'react-router-dom';
import { request } from '../../util/fetchAPI2'; // Import the request function

const Organize = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    idcard: null,
    phoneNumber: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, idcard: file });
    console.log('Uploaded image:', file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('college', formData.college);
      formDataToSend.append('idcard', formData.idcard);
      formDataToSend.append('phoneNumber', formData.phoneNumber);

      console.log('Form Data:', formDataToSend); // Log the form data

      const response = await request('/api2/organize', 'POST', {}, formDataToSend, true);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="organize-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College:</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="posterImage">Id card/Proof of Organizer</label>
          <input
            type="file"
            id="idcard"
            name="idcard"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <span>Already have a login?  </span>
      <Link  to = '/login'> <span className='loginbtn'>Login</span></Link>
    </div>
  );
};

export default Organize;
