import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Navbar = () => {
  return (
    <nav>
    
      <ul>

        <li><Link to="/Introduction">Introduction</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Project">Project</Link></li>
        <li><Link to="/Contactus">Contact</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
