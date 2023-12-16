import React from 'react'
import './participate.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { request } from '../../util/fetchAPI'; // Import the request function

const Participate = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      collegeName: '',
      password: '',
    });
  
    // Modify the handleChange function to update state correctly
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log('Form Data:', formData); // Log the form data
    const response = await request('/api1/participate', 'POST', {}, formData);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

  
    return (
      <div className="form-container">
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
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">College Name</label>
            <input
              type="tel"
              id="collegeName"
              name ="collegeName"
              value={formData.collegeName}
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
          <button type="submit">Submit</button>
          <span>Already have a login?  </span>
          <Link  to = '/login'> <span className='loginbtn'>Login</span></Link>
        </form>
      </div>
    );
  };
  
  export default Participate;