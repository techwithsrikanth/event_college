import React from 'react';
import './home.css';
import {Link} from 'react-router-dom'
import img2 from '../../assets/img2.jpg'; // Make sure to include the correct file extension (.jpg, .png, etc.)

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${img2})` }}>
      <div className="content">
        <Link to = '/participate'><button className="participate-btn">Participate in events</button></Link>
        <Link to = '/organize'><button className="organize-btn">Organize a Event</button></Link>
      </div>
    </div>
  );
};

export default Home;
