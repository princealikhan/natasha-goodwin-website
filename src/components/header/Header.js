import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="navigation">
        
      <div className="navTabsBar">
          <nav className="navTabs">
              <ul className="navTabs-list list-inline">
                  <li className="navTabs-item">
                      <NavLink to="/about" activeClassName="is-active">
                        About
                      </NavLink>
                  </li>
                  <li className="navTabs-item">
                    <NavLink to="/experience" activeClassName="is-active">
                        Experience
                    </NavLink>
                  </li>
                  <li className="navTabs-item">
                    <NavLink to="/work" activeClassName="is-active">
                        Work
                    </NavLink> 
                  </li>
                  <li className="navTabs-item">
                    <NavLink to="/contact" activeClassName="is-active">
                        Contact
                    </NavLink>
                  </li>
              </ul>
          </nav>
      </div>
    </div>
    );
  }
}

export default Header;
