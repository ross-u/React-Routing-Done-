import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
      <nav id='navbar'>
        <ul>
          <Link to="/">Dashboard</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
