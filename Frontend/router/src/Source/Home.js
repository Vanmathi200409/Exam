import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
function Home() {
  const navigate=useNavigate();
  return (
    <div className="home-container">
      <h1>Exam Availabilty For Degree Programs</h1>
      <p>
        This is the homepage of our web application.
      </p>
      <div className="home-links">
      <button className="b1" onClick={() => navigate('/signup')}>Signup</button>
      <button className="b2" onClick={() => navigate('/login')}>Login</button>
      </div>
      <img src="https://c4.wallpaperflare.com/wallpaper/99/400/55/typography-quote-minimalism-digital-art-wallpaper-preview.jpg"></img>
      </div>
  );
}

export default Home;
