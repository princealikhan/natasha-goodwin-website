import React, { Component } from 'react';
import './Landing.scss';
import LandingSplash from '../../assets/images/landing.png';
import { Link } from "react-router-dom";

import { siteData } from '../../constant';

class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <header className="header">
          <h1 className="title">{ siteData.name }</h1>
          <h4 className="skills">Illustrator &#183; Dreamer &#183; Designer &#183; Client Engagement Manager</h4>
        </header>
        
        {/* Navigation */}
        <nav>
          <ul className="menu">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        
        {/* Background Image */}
        <img src={LandingSplash} alt="Landing" style={{ 
          position: 'fixed',
          right: 0,
          bottom: 0,
          left: 24,
          width: '100%',
          zIndex: '-1'
        }}/>
        {/* End Background Image */}
      </section>
    );
  }
}

export default Landing;

