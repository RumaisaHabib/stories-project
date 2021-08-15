import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-4">
      <div className="container">
        Stories Project
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar