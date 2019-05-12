import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
      <nav id='navbar'>
        <ul>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
