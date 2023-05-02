import * as React from 'react';
import './About.css';


class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>  
      
        <section className="about-section">
          <h2>Mission</h2>
          <p>
            To provide a reliable and accessible platform for individuals, healthcare facilities, and organizations
             to donate unused and unexpired medications to those in need, thereby reducing medication waste.
          </p>
        </section>

        <section className="about-section">
          <h2>Vision</h2>
          <p>
            Our vision is a world where every person has access to affordable and safe medications,
             and where medication waste is minimized through effective redistribution
          </p>
        </section>
    <section className="about-section">
          <h2>Values</h2>
          <ul>
           1. Accessibility: We believe that everyone should have access to essential medications, regardless of their socioeconomic status or geographic location
          </ul>
          <ul>
          2. Sustainability: We are committed to reducing medication waste and minimizing the environmental impact of unused medications.
          </ul>
          <ul>
          3. Collaboration: We work with healthcare providers, community organizations, and other stakeholders to build a network of support for those in need.
          </ul>
          <ul>
          4. Innovation: We embrace new technologies and approaches to maximize the impact of our mission and continually improve our services. 
          </ul>
        </section>
      </div>
  )}
}

export default About;