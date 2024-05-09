import React from 'react';
import logo from '../Images/food-delivery.png'; // Adjust the path based on the actual location of your Images folder
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <Link to='/'>
        <img id="logo"src={logo} alt="Logo" />
       
      </Link>
      <div className='collapse navbar-collapse show ml-sm-5' id='navbarNav'>
        <ul className='navbar-nav'>
            <li className='navbar-item'>
                <Link className='nav-link' to="/">
                    Home
                </Link>
                
            </li>
            <li className='navbar-item'>
                <Link className='nav-link' to="/recipes">
                    Recipies
                </Link>
                
            </li>
            
        </ul>
      </div>
    </nav>
  );
}
