import React from 'react';
import logo from '../Images/food-delivery.png'; // Adjust the path based on the actual location of your Images folder
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <Link to='/'>
        <img src={logo} alt="Logo" id="logo" style={{ width: '30%'}} />
      </Link>
      
      <div className='collapse navbar-collapse show ml-sm-4' id='navbarNav'>
  <ul className='navbar-nav mr-auto'> {/* Use mr-auto class here */}
    <li className='navbar-item col text-left'> {/* Add col and text-left classes */}
      <Link className='nav-link' to="/">
        Home
      </Link>
    </li>
    <li className='navbar-item col text-left'> {/* Add col and text-left classes */}
      <Link className='nav-link' to="/recipes">
        Recipes
      </Link>
    </li>
  </ul>
</div>
</nav>
  )}
  
