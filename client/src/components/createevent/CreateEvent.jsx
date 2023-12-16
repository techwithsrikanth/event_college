import React, { useState } from 'react';
import './createevent.css'; // Your CSS file for CreateEvent component
import { request } from '../../util/fetchAPI2'; // Import the request function

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    eventName: '',
    collegeName: '',
    posterimg: null,
    cashPrize: '',
    description: '',
    website: '',
    regnfees: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, posterimg: file });
    console.log('Uploaded image:', file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('eventType', formData.eventType);
      formDataToSend.append('eventName', formData.eventName);
      formDataToSend.append('collegeName', formData.collegeName);
      formDataToSend.append('posterimg', formData.posterimg);
      formDataToSend.append('cashPrize', formData.cashPrize);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('website', formData.website);
      formDataToSend.append('regnfees', formData.regnfees);

      console.log('Form Data:', formDataToSend); // Log the form data

      const response = await request('/api3/createevent', 'POST', {}, formDataToSend, true);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="create-event-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventType">Type of Event:</label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="posterImage">Poster Image</label>
          <input
            type="file"
            id="posterImage"
            name="posterImage"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cashPrize">Cash Prize</label>
          <input
            type="text"
            id="cashPrize"
            name="cashPrize"
            value={formData.cashPrize}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description about the event:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website link</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="regnfees">Registeration Fees</label>
          <input
            type="text"
            id="regnfees"
            name="regnfees"
            value={formData.regnfees}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;
