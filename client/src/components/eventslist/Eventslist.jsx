import React, { useState, useEffect } from 'react';
import './eventslist.css';
import { request } from '../../util/fetchAPI2'; // Import the request function

const EventsList = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await request('/api3/events', 'GET');
          if (Array.isArray(response)) {
            setEvents(response);
          } else {
            console.error('Invalid response format:', response);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
  
      fetchEvents();
    }, []);

  return (
    <div className="events-list-container">
      {events.map((event) => (
        <div key={event._id} className="event-item">
          <h2>{event.eventType}</h2>
          <p>Event Name: {event.eventName}</p>
          <p>College Name: {event.collegeName}</p>
          <img src={`http://localhost:5000/${event.posterimg}`} alt="Poster" className="event-poster" />
          <p>Description: {event.description}</p>
          <p>Cash Prize: {event.cashPrize}</p>
          <p>Registeration Fees: {event.regnfees}</p>
          <p>Website: <a href={event.website}>{event.website}</a></p>

          <button>Pay and Register</button>

        </div>
      ))}
    </div>
  );
};

export default EventsList;