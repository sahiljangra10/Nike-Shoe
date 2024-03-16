import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} className='img'/>
      <ul className='navbar-items'>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </div>
  )
}

export default Navbar