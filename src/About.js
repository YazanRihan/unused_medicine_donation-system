import React, { Component } from 'react';
//import mainbar.js
import MainBar from './MainBar';
import './About.css'; // Import the CSS file you'll create later

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        
        <section className="about-section">
          <h2>Our Information</h2>
          <p>
            {/* Add your company information here */}
          </p>
        </section>

        <section className="about-section">
          <h2>Mission</h2>
          <p>
            {/* Add your company mission here */}
          </p>
        </section>

        <section className="about-section">
          <h2>Vision</h2>
          <p>
            {/* Add your company vision here */}
          </p>
        </section>

        <section className="about-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            {/* Add your team member information here */}
          </div>
        </section>
      </div>
    );
  }
}

export default About;
